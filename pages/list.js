import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import { useList } from '../context/ListContext';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';
import { setReturnTo } from '../utils/auth';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from '../styles/ListPage.module.css';

// Image Modal Component
const ImageModal = ({ src, alt, onClose }) => (
  <div className="image-modal-overlay" onClick={onClose}>
    <div className="image-modal-content" onClick={e => e.stopPropagation()}>
      <img src={src} alt={alt} className="image-modal-img" />
      <button className="image-modal-close" onClick={onClose}>&times;</button>
    </div>
  </div>
);

const ListPage = () => {
  const { user, isLoading: userLoading } = useUser();
  const router = useRouter();
  const { list, updateQuantity, removeFromList, addNote, refreshList, lastRefresh, clearList } = useList();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [columns, setColumns] = useState([
    { id: 'image_url', title: 'Image', isVisible: true },
    { id: 'name', title: 'Item', isVisible: true },
    { id: 'price', title: 'Price', isVisible: true },
    { id: 'quantity', title: 'Quantity', isVisible: true },
    { id: 'subtotal', title: 'Subtotal', isVisible: true },
    { id: 'rating', title: 'Avg. Rating', isVisible: true },
    { id: 'review_count', title: 'Review Count', isVisible: true },
    { id: 'brand', title: 'Brand', isVisible: true },
    { id: 'source', title: 'Source', isVisible: true },
    { id: 'product_id', title: 'Product ID', isVisible: true },
    { id: 'notes', title: 'Notes', isVisible: true },
    // New columns (hidden by default)
    { id: 'availability', title: 'Availability', isVisible: false },
    { id: 'product_category', title: 'Category', isVisible: false },
    { id: 'model', title: 'Model', isVisible: false },
    { id: 'shipping_price', title: 'Shipping Price', isVisible: false },
    { id: 'shipping_time', title: 'Shipping Time', isVisible: false },
    { id: 'is_coupon_exists', title: 'Coupon Available', isVisible: false },
    { id: 'coupon_text', title: 'Coupon Details', isVisible: false },
    { id: 'feature_bullets', title: 'Features', isVisible: false },
    { id: 'brand_url', title: 'Brand URL', isVisible: false },
    { id: 'shipping_condition', title: 'Shipping Condition', isVisible: false },
    { id: 'fabric_type', title: 'Fabric Type', isVisible: false },
    { id: 'care_instructions', title: 'Care Instructions', isVisible: false },
    { id: 'origin', title: 'Origin', isVisible: false },
    { id: 'pattern', title: 'Pattern', isVisible: false },
    { id: 'country_of_origin', title: 'Country of Origin', isVisible: false },
  ]);

  useEffect(() => {
    if (!userLoading && !user) {
      setReturnTo(router.asPath);
      router.push('/api/auth/login');
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isDropdownOpen && !event.target.closest('.column-visibility-dropdown')) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const getEnlargedWalmartImage = (url) => {
    try {
      const parsedUrl = new URL(url);
      parsedUrl.pathname = parsedUrl.pathname.replace(/\/\d+x\d+\./, '/');
      parsedUrl.searchParams.set('odnHeight', '450');
      parsedUrl.searchParams.set('odnWidth', '450');
      parsedUrl.searchParams.set('odnBg', 'FFFFFF');
      return parsedUrl.toString();
    } catch (error) {
      console.error('Error parsing Walmart image URL:', error);
      return url;
    }
  };

  const ImageWithFallback = ({ src, alt, width, height, item }) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
      if (item.source === 'walmart') {
        setImageSrc(getEnlargedWalmartImage(src));
      }
    }, [src, item.source]);

    const handleImageClick = () => {
      const modalSrc = item.source === 'walmart' ? getEnlargedWalmartImage(src) : src;
      setModalImage({ src: modalSrc, alt });
    };

    return (
      <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
        <Image src={imageSrc} alt={alt} width={width} height={height} />
      </div>
    );
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `$${price.toFixed(2)}`;
    } else if (typeof price === 'string') {
      const numericPrice = price.replace(/[^0-9.]/g, '');
      const parsedPrice = parseFloat(numericPrice);
      if (!isNaN(parsedPrice)) {
        return `$${parsedPrice.toFixed(2)}`;
      }
    }
    return 'N/A';
  };

  const calculateItemSubtotal = useCallback((price, quantity) => {
    const numericPrice = typeof price === 'number' ? price : parseFloat(price);
    const numericQuantity = parseInt(quantity, 10);
    
    if (isNaN(numericPrice) || isNaN(numericQuantity)) {
      return 0;
    }
    
    return numericPrice * numericQuantity;
  }, []);

  const calculateTotals = useCallback(() => {
    const sourceSubtotals = {};
    let totalItems = 0;
    let totalPrice = 0;
  
    if (Array.isArray(list.items)) {
      list.items.forEach(item => {
        const subtotal = calculateItemSubtotal(item.price, item.quantity);
        
        if (sourceSubtotals[item.source]) {
          sourceSubtotals[item.source] += subtotal;
        } else {
          sourceSubtotals[item.source] = subtotal;
        }
  
        totalItems += parseInt(item.quantity, 10) || 0;
        totalPrice += subtotal;
      });
    } else {
      console.error('list.items is not an array:', list.items);
    }
  
    return { sourceSubtotals, totalItems, totalPrice };
  }, [list, calculateItemSubtotal]);

  const { sourceSubtotals, totalItems, totalPrice } = useMemo(() => calculateTotals(), [calculateTotals]);

  const handleQuantityChange = useCallback((productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity));
  }, [updateQuantity]);

  const sortItems = useCallback((items, sortConfig) => {
    const sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aValue, bValue;

        if (sortConfig.key === 'subtotal') {
          aValue = calculateItemSubtotal(a.price, a.quantity);
          bValue = calculateItemSubtotal(b.price, b.quantity);
        } else {
          aValue = a[sortConfig.key];
          bValue = b[sortConfig.key];

          if (sortConfig.key === 'price') {
            aValue = parseFloat(aValue) || 0;
            bValue = parseFloat(bValue) || 0;
          }
        }

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [calculateItemSubtotal]);

  const requestSort = useCallback((key) => {
    if (key === 'image_url') return;
    setSortConfig(prevConfig => {
      if (prevConfig.key === key) {
        return { key, direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending' };
      }
      return { key, direction: 'ascending' };
    });
  }, []);

  const getSortIndicator = useCallback((columnName) => {
    if (columnName === 'image_url') return '';
    if (sortConfig.key === columnName) {
      return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
    }
    return '';
  }, [sortConfig]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshList();
    setIsRefreshing(false);
  };

  const handleClearList = () => {
    if (window.confirm('Are you sure you want to clear your entire list?')) {
      clearList();
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const constructProductUrl = (item) => {
    if (item.source === 'walmart' && item.product_id) {
      return `https://www.walmart.com/ip/${item.product_id}`;
    } else if (item.source === 'amazon' && item.product_id) {
      return `https://www.amazon.com/dp/${item.product_id}`;
    }
    return null;
  };

  const renderCell = (item, columnId) => {
    switch (columnId) {
      case 'image_url':
        return (
          <ImageWithFallback 
            src={item.image_url} 
            alt={item.name} 
            width={50} 
            height={50} 
            item={item}
          />
        );
      case 'name':
        return <div className={styles.titleCell}>{item.name}</div>;
      case 'price':
        return formatPrice(item.price);
      case 'quantity':
        return (
          <>
            <input
              className="quantity-input"
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.product_id, e.target.value)}
              min="1"
            />
            <br />
            <a 
              href="#" 
              className="remove-link" 
              onClick={(e) => {
                e.preventDefault();
                removeFromList(item.product_id);
              }}
            >
              Remove
            </a>
          </>
        );
      case 'subtotal':
        const subtotal = calculateItemSubtotal(item.price, item.quantity);
        return formatPrice(subtotal);
      case 'rating':
        return item.rating || 'N/A';
      case 'review_count':
        return item.review_count ? formatNumber(item.review_count) : 'N/A';
      case 'brand':
        return item.brand || 'N/A';
      case 'source':
        const productUrl = constructProductUrl(item);
        return productUrl ? (
          <a 
            href={productUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="source-link"
          >
            {item.source || 'N/A'}
          </a>
        ) : (
          item.source || 'N/A'
        );
      case 'product_id':
        return item.product_id || 'N/A';
      case 'notes':
        return (
          <input
            type="text"
            value={item.notes || ''}
            onChange={(e) => addNote(item.product_id, e.target.value)}
            placeholder="Add note..."
          />
        );
      case 'availability':
        return item.availability || 'N/A';
      case 'product_category':
        return item.product_category || 'N/A';
      case 'model':
        return item.model || 'N/A';
      case 'shipping_price':
        return formatPrice(item.shipping_price);
      case 'shipping_time':
        return item.shipping_time || 'N/A';
      case 'is_coupon_exists':
        return item.is_coupon_exists ? 'Yes' : 'No';
      case 'coupon_text':
        return item.coupon_text || 'N/A';
      case 'feature_bullets':
        return Array.isArray(item.feature_bullets) ? item.feature_bullets.join(', ') : 'N/A';
      case 'brand_url':
        return item.brand_url ? (
          <a href={item.brand_url} target="_blank" rel="noopener noreferrer">
            Brand Page
          </a>
        ) : 'N/A';
      case 'shipping_condition':
        return item.shipping_condition || 'N/A';
      case 'fabric_type':
        return item.fabric_type || 'N/A';
      case 'care_instructions':
        return item.care_instructions || 'N/A';
      case 'origin':
        return item.origin || 'N/A';
      case 'pattern':
        return item.pattern || 'N/A';
      case 'country_of_origin':
        return item.country_of_origin || 'N/A';
      default:
        return 'N/A';
    }
  };

  const sortedItems = useMemo(() => sortItems(list.items, sortConfig), [list.items, sortConfig, sortItems]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    if (result.type === 'column') {
      const newColumns = Array.from(columns);
      const [reorderedColumn] = newColumns.splice(result.source.index, 1);
      newColumns.splice(result.destination.index, 0, reorderedColumn);
      setColumns(newColumns);
    } else if (result.type === 'row') {
      const newItems = Array.from(sortedItems);
      const [reorderedItem] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, reorderedItem);
      // You might need to update your list context here
    }
  };

  const toggleColumnVisibility = (columnId) => {
    setColumns(columns.map(column =>
      column.id === columnId ? { ...column, isVisible: !column.isVisible } : column
    ));
  };

  if (userLoading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="list-page-container">
      <Head>
        <title>Curious Trio - Your List</title>
        <meta name="description" content="View, research, dig into data, and manage your saved items on Curious Trio" />
      </Head>

      <Header />
      <main className="list-page">
        <div className="list-actions">
          <button className="styled-button" onClick={handleRefresh} disabled={isRefreshing}>
            {isRefreshing ? 'Refreshing...' : 'Refresh List'}
          </button>
          <button className="styled-button" onClick={handleClearList}>Clear List</button>
          <div className="column-visibility-dropdown">
            <button className="styled-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Data Selection
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {columns.map(column => (
                  <label key={column.id}>
                    <input
                      type="checkbox"
                      checked={column.isVisible}
                      onChange={() => toggleColumnVisibility(column.id)}
                    />
                    {column.title}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        {lastRefresh && <p>Last refreshed: {formatDate(lastRefresh)}</p>}
        {list.items.length === 0 ? (
          <p>Start populating your list</p>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="table-wrapper">
              <table className="list-table">
                <Droppable droppableId="columns" direction="horizontal" type="column">
                  {(provided) => (
                    <thead {...provided.droppableProps} ref={provided.innerRef}>
                      <tr>
                        {columns.filter(column => column.isVisible).map((column, index) => (
                          <Draggable key={column.id} draggableId={column.id} index={index}>
                            {(provided) => (
                              <th
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                onClick={() => requestSort(column.id)}
                              >
                                {column.title}{getSortIndicator(column.id)}
                              </th>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </tr>
                    </thead>
                  )}
                </Droppable>
                <Droppable droppableId="rows" type="row">
                  {(provided) => (
                    <tbody {...provided.droppableProps} ref={provided.innerRef}>
                      {sortedItems.map((item, index) => (
                        <Draggable key={item.product_id} draggableId={item.product_id} index={index}>
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {columns.filter(column => column.isVisible).map(column => (
                                <td key={column.id}>
                                  {renderCell(item, column.id)}
                                </td>
                              ))}
                            </tr>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  )}
                </Droppable>
                <tfoot>
                  <tr className="list-summary">
                    <td colSpan={columns.filter(column => column.isVisible).length}>
                      <div className="summary-content">
                        <span>List Summary</span>
                        <span>Total Items: {formatNumber(totalItems)}</span>
                        <span>Total Price: {formatPrice(totalPrice)}</span>
                      </div>
                    </td>
                  </tr>
                  {Object.entries(sourceSubtotals).map(([source, subtotal]) => (
                    <tr key={source} className="source-summary">
                      <td colSpan={columns.filter(column => column.isVisible).length}>
                        <div className="summary-content">
                          <span>{source} Subtotal:</span>
                          <span>{formatPrice(subtotal)}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tfoot>
              </table>
            </div>
          </DragDropContext>
        )}
      </main>
      <Footer />
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
      <style jsx>{`
        .list-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
        }
        .list-table td {
          padding: 8px;
          border: 1px solid #ddd;
        }
        .summary-content {
          display: flex;
          justify-content: space-between;
          padding: 8px;
        }
        .source-link {
          color: #0066cc;
          text-decoration: none;
        }
        .source-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default ListPage;