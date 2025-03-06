import { createClient } from '@supabase/supabase-js'

console.log('Supabase initialization - URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Supabase initialization - Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '[REDACTED]' : 'undefined');
console.log('Supabase initialization - Service Role Key:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '[REDACTED]' : 'undefined');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  console.error('Supabase URL:', supabaseUrl)
  console.error('Supabase Anon Key:', supabaseAnonKey ? '[REDACTED]' : 'undefined')
  console.error('Supabase Service Role Key:', supabaseServiceRoleKey ? '[REDACTED]' : 'undefined')
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// For admin-level operations, use the service role key
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('products').select('count', { count: 'exact', head: true })
    if (error) throw error
    console.log('Supabase connection successful. Products table exists.')
    return true
  } catch (error) {
    console.error('Supabase connection test failed:', error.message)
    return false
  }
}

export async function fetchProductsFromSupabase(searchTerm, source, page = 1, pageSize = 20) {
  const offset = (page - 1) * pageSize;
  try {
    console.log(`Fetching products from Supabase - Term: ${searchTerm}, Source: ${source}, Page: ${page}`);
    const { data, error, count } = await supabase
      .from('products')
      .select(`
        *,
        product_details(*),
        price_history(price, currency, created_at)
      `, { count: 'exact' })
      .eq('source', source)
      .ilike('title', `%${searchTerm}%`)
      .order('updated_at', { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      console.error('Supabase query error:', error);
      throw error;
    }
    
    console.log(`Fetched ${data?.length} products from Supabase for ${source}`);
    console.log('Total count:', count);
    return { results: data, totalCount: count };
  } catch (e) {
    console.error('Error fetching products from Supabase:', e);
    return { results: [], totalCount: 0 };
  }
}

export async function recordSearch(term, userId, sessionId) {
  try {
    const { data, error } = await supabase
      .from('searches')
      .insert({
        term: term,
        user_id: userId,
        session_id: sessionId,
        is_logged_in: !!userId
      })
      .select();
    if (error) throw error;
    console.log('Search recorded:', data[0]);
    return data[0].id;
  } catch (e) {
    console.error('Error recording search:', e);
    throw e;
  }
}

export async function linkProductToSearch(productId, source, searchId) {
  try {
    const { error } = await supabase
      .from('product_search_terms')
      .insert({
        product_id: productId,
        source: source,
        search_id: searchId
      });
    if (error) throw error;
    console.log(`Product ${productId} linked to search ${searchId}`);
  } catch (e) {
    console.error('Error linking product to search:', e);
    throw e;
  }
}

export async function fetchProductDetails(productId, source) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        product_details(*),
        price_history(price, currency, created_at),
        product_features(feature)
      `)
      .eq('product_id', productId)
      .eq('source', source)
      .single();

    if (error) throw error;
    console.log(`Fetched details for product ${productId}`);
    return data;
  } catch (e) {
    console.error('Error fetching product details from Supabase:', e);
    return null;
  }
}

export async function upsertProduct(product) {
  try {
    const { data, error } = await supabase
      .from('products')
      .upsert({
        product_id: product.id || product.asin,
        source: product.source,
        title: product.title,
        brand: product.brand,
        primary_image: product.image,
        link: product.link,
        description: product.full_description,
        product_category: product.product_category,
        price: parseFloat(product.price?.replace(/[^0-9.-]+/g,"")) || null,
        currency: product.price_currency || 'USD',
        rating: parseFloat(product.rating) || null,
        ratings_total: parseInt(product.ratingsTotal) || null,
        availability: product.availability,
        shipping_price: parseFloat(product.shipping_price) || null,
        shipping_time: product.shipping_time,
        is_coupon_exists: product.is_coupon_exists,
        coupon_text: product.coupon_text,
        brand_url: product.brand_url,
        shipping_condition: product.shipping_condition,
        fabric_type: product.fabric_type,
        care_instructions: product.care_instructions,
        origin: product.origin,
        pattern: product.pattern,
        country_of_origin: product.country_of_origin,
        model: product.model
      }, { onConflict: 'product_id,source' })
      .select();

    if (error) throw error;
    console.log(`Product upserted: ${product.title}`);
    return data[0];
  } catch (e) {
    console.error('Error upserting product:', e);
    throw e;
  }
}

export async function upsertProductDetails(productDetails) {
  try {
    const { data, error } = await supabase
      .from('product_details')
      .upsert({
        product_id: productDetails.product_id,
        source: productDetails.source,
        brand_url: productDetails.brand_url,
        full_description: productDetails.full_description,
        small_description: productDetails.small_description,
        model: productDetails.model,
        total_answered_questions: productDetails.total_answered_questions,
        seller_id: productDetails.seller_id,
        seller_name: productDetails.seller_name,
        fulfilled_by_amazon: productDetails.fulfilled_by_amazon,
        fast_track_message: productDetails.fast_track_message,
        aplus_present: productDetails.aplus_present
      }, { onConflict: 'product_id,source' })
      .select();

    if (error) throw error;
    console.log(`Product details upserted for product ${productDetails.product_id}`);
    return data[0];
  } catch (e) {
    console.error('Error upserting product details:', e);
    throw e;
  }
}

export async function insertPriceHistory(priceData) {
  try {
    const { data, error } = await supabase
      .from('price_history')
      .insert(priceData);

    if (error) throw error;
    console.log(`Price history inserted for product ${priceData.product_id}`);
    return data;
  } catch (e) {
    console.error('Error inserting price history:', e);
    throw e;
  }
}

export async function insertProductFeatures(features) {
  try {
    const { data, error } = await supabase
      .from('product_features')
      .insert(features);

    if (error) throw error;
    console.log(`Product features inserted for product ${features[0].product_id}`);
    return data;
  } catch (e) {
    console.error('Error inserting product features:', e);
    throw e;
  }
}

export async function updateProductPrice(productId, source, currentPrice, originalPrice = null) {
  const client = supabase;
  try {
    await client.rpc('begin');

    // Update the product's current price
    const { error: updateError } = await client
      .from('products')
      .update({ price: currentPrice, updated_at: new Date().toISOString() })
      .eq('product_id', productId)
      .eq('source', source);

    if (updateError) throw updateError;

    // Add entry to price history
    const { error: insertError } = await client
      .from('price_history')
      .insert({
        product_id: productId,
        source: source,
        price: currentPrice,
        original_price: originalPrice
      });

    if (insertError) throw insertError;

    await client.rpc('commit');
    console.log(`Price updated for product ${productId}`);
  } catch (e) {
    await client.rpc('rollback');
    console.error('Error updating product price:', e);
    throw e;
  }
}

export default supabase;