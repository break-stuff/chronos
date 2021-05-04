import{r as t,h as s,H as i}from"./p-db4e877b.js";import"./p-5f220563.js";import{b as e,c as o}from"./p-47b789f0.js";import"./p-0520f155.js";import{a}from"./p-2fcd9172.js";import{g as l}from"./p-9462b931.js";const h=class{constructor(s){t(this,s),this.products=[],this.displayProducts=[],this.categories=[],this.pageNumber=1,this.pageCount=0,this.pageSize=8,this.pageNumbers=[]}watchHandler(){this.filterProductsByUrlSegment()}addProductHandler(t){a(t.detail,1)}async componentWillLoad(){this.products=await e(),this.categories=await l()}componentDidLoad(){this.addSearchListener(),this.filterProductsByUrlSegment(),this.searchClearHandler()}componentWillRender(){var t,s;this.searchTerm=null===(s=null===(t=this.history)||void 0===t?void 0:t.location.query.search)||void 0===s?void 0:s.toLowerCase()}addSearchListener(){document.querySelector("page-header").addEventListener("searched",(t=>{this.searchTerm=t.detail,this.getProductList()}))}searchClearHandler(){document.querySelector("#site_search").addEventListener("cleared",(()=>{this.searchTerm="",this.getProductList()}))}categoryChangedHandler(t){this.selectedCategory=this.categories.find((s=>s.id===Number(t))),this.pageNumber=1,this.getProductList()}sortChangedHandler(t){this.selectedSort=t,this.pageNumber=1,this.getProductList()}filterProductsByUrlSegment(){this.selectedCategory=this.categories.find((t=>t.urlSegment===this.match.params.category))||this.categories.find((t=>"view-all"===t.urlSegment)),this.getProductList()}async getProductList(){var t;let s=await o(null===(t=this.selectedCategory)||void 0===t?void 0:t.id,this.searchTerm,this.selectedSort,this.pageSize,this.pageNumber);this.displayProducts=s.products,this.pageCount=s.pageCount,this.setPageIndicators()}setPageIndicators(){this.pageNumbers=[];for(let t=1;t<=this.pageCount;t++)this.pageNumbers.push(t)}setPageNumber(t){this.pageNumber=t,this.getProductList(),window.scrollTo({top:0,behavior:"smooth"})}render(){return s(i,{class:"products-page"},s("div",{class:"page-heading display-flex space-between align-end md:flex-column md:align-start my-lg"},s("h1",{class:"mb-none"},this.selectedCategory?this.selectedCategory.name:"All Products"),s("div",{class:"page-controls display-flex w-40 md:w-66 sm:w-100"},s("ks-form-field",{type:"select",label:"Categories",size:"sm",class:"ml-lg md:ml-none w-100",onUpdated:t=>this.categoryChangedHandler(t.detail.value)},s("option",{value:"",selected:!this.selectedCategory},"View All"),this.categories.map((t=>{var i;return s("option",{value:t.id,selected:t.id===(null===(i=this.selectedCategory)||void 0===i?void 0:i.id)},t.name)}))),s("ks-form-field",{type:"select",label:"Sort",size:"sm",class:"ml-xl w-100",onUpdated:t=>this.sortChangedHandler(t.detail.value)},s("option",{value:""},"Default"),s("option",{value:"a-z"},"A-Z"),s("option",{value:"z-a"},"Z-A"),s("option",{value:"price"},"Price: Low to High"),s("option",{value:"price-desc"},"Price: High to Low"),s("option",{value:"rating"},"Top Rated")))),s("div",{class:"display-flex flex-wrap -m-md"},this.displayProducts.length>0?this.displayProducts.map((t=>s("product-summary",{product:t,class:"w-25 md:w-33 sm:w-50 xs:w-100 p-md"}))):s("div",{class:"text-lg text-bold my-xxxl py-xxxl"},"Sorry, no products were found.")),this.pageNumbers.length>1?s("div",{class:"paging-controls display-flex justify-center mt-xxxl"},s("ks-button-bar",{class:"mx-auto bg-white"},s("ks-button",{display:"hollow",disabled:this.pageNumber<=1,onClick:()=>this.setPageNumber(--this.pageNumber)},s("ks-icon",{icon:"chevron_left",label:"previous page"})),this.pageNumbers.map((t=>s("ks-button",{display:"hollow",onClick:()=>this.setPageNumber(t),"button-class":t===this.pageNumber?"text-bold text-underline":"text-normal"},s("span",{class:"sr-only"},"page")," ",t))),s("ks-button",{display:"hollow",disabled:this.pageNumber>=this.pageCount,onClick:()=>this.setPageNumber(++this.pageNumber)},s("ks-icon",{icon:"chevron_right",label:"next page"})))):"")}static get watchers(){return{match:["watchHandler"]}}};h.style=".products-page h1{line-height:1}";export{h as products_page}