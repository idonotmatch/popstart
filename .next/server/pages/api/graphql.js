"use strict";(()=>{var e={};e.id=702,e.ids=[702],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},4349:e=>{e.exports=import("@apollo/server")},9648:e=>{e.exports=import("axios")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},3870:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>c,default:()=>u,routeModule:()=>p});var i=a(1802),n=a(7153),o=a(6249),l=a(5052),s=e([l]);l=(s.then?(await s)():s)[0];let u=(0,o.l)(l,"default"),c=(0,o.l)(l,"config"),p=new i.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/graphql",pathname:"/api/graphql",bundlePath:"",filename:""},userland:l});r()}catch(e){r(e)}})},5052:(e,t,a)=>{a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{config:()=>u,default:()=>s});var i=a(4349),n=a(9648),o=e([i,n]);[i,n]=o.then?(await o)():o;let l=(0,i.gql)`
  type Query {
    searchProducts(searchTerm: String!): [Product]
  }

  type Product {
    asin: String
    title: String
    link: String
    image: String
    isPrime: Boolean
    rating: Float
    ratingsTotal: Int
    price: String
    availability: String
  }
`,s=new i.ApolloServer({typeDefs:l,resolvers:{Query:{searchProducts:async(e,{searchTerm:t})=>{let a={api_key:process.env.RAINFOREST_API_KEY,type:"search",amazon_domain:"amazon.com",search_term:t,exclude_sponsored:"true",currency:"usd",associate_id:"curioustrio-20",page:"1",max_page:"1",output:"json",include_html:"false"};try{let e=await n.default.get("https://api.rainforestapi.com/request",{params:a});if(200!==e.status)throw Error(`API call failed with status: ${e.status}`);return e.data.search_results.map(e=>({asin:e.asin,title:e.title,link:e.link,image:e.image,isPrime:e.is_prime,rating:e.rating,ratingsTotal:e.ratings_total,price:`$${e.price.value.toFixed(2)}`,availability:e.availability?e.availability.raw:"Unavailable"}))}catch(e){throw console.error("Failed to fetch data from Rainforest API:",e),Error("Failed to fetch data")}}}}}).createHandler({path:"/api/graphql"}),u={api:{bodyParser:!1}};r()}catch(e){r(e)}})},7153:(e,t)=>{var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},1802:(e,t,a)=>{e.exports=a(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=t(t.s=3870);module.exports=a})();