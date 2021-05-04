var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n["throw"](e))}catch(e){i(e)}}function c(e){e.done?r(e.value):o(e.value).then(s,a)}c((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;o=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];o=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f122fb29.system.js","./p-a81db6b6.system.js","./p-8c3c6e68.system.js","./p-3428d199.system.js","./p-ced56a30.system.js","./p-cb7d019c.system.js"],(function(e){"use strict";var t,r,n,o,i,s,a;return{setters:[function(e){t=e.r;r=e.h;n=e.H},function(){},function(e){o=e.b;i=e.c},function(){},function(e){s=e.a},function(e){a=e.g}],execute:function(){var c=".products-page h1{line-height:1}";var u=e("products_page",function(){function e(e){t(this,e);this.products=[];this.displayProducts=[];this.categories=[];this.pageNumber=1;this.pageCount=0;this.pageSize=8;this.pageNumbers=[]}e.prototype.watchHandler=function(){this.filterProductsByUrlSegment()};e.prototype.addProductHandler=function(e){s(e.detail,1)};e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:e=this;return[4,o()];case 1:e.products=r.sent();t=this;return[4,a()];case 2:t.categories=r.sent();return[2]}}))}))};e.prototype.componentDidLoad=function(){this.addSearchListener();this.filterProductsByUrlSegment();this.searchClearHandler()};e.prototype.componentWillRender=function(){var e,t;this.searchTerm=(t=(e=this.history)===null||e===void 0?void 0:e.location.query.search)===null||t===void 0?void 0:t.toLowerCase()};e.prototype.addSearchListener=function(){var e=this;var t=document.querySelector("page-header");t.addEventListener("searched",(function(t){e.searchTerm=t["detail"];e.getProductList()}))};e.prototype.searchClearHandler=function(){var e=this;var t=document.querySelector("#site_search");t.addEventListener("cleared",(function(){e.searchTerm="";e.getProductList()}))};e.prototype.categoryChangedHandler=function(e){this.selectedCategory=this.categories.find((function(t){return t.id===Number(e)}));this.pageNumber=1;this.getProductList()};e.prototype.sortChangedHandler=function(e){this.selectedSort=e;this.pageNumber=1;this.getProductList()};e.prototype.filterProductsByUrlSegment=function(){var e=this;this.selectedCategory=this.categories.find((function(t){return t.urlSegment===e.match.params.category}))||this.categories.find((function(e){return e.urlSegment==="view-all"}));this.getProductList()};e.prototype.getProductList=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:return[4,i((e=this.selectedCategory)===null||e===void 0?void 0:e.id,this.searchTerm,this.selectedSort,this.pageSize,this.pageNumber)];case 1:t=r.sent();this.displayProducts=t.products;this.pageCount=t.pageCount;this.setPageIndicators();return[2]}}))}))};e.prototype.setPageIndicators=function(){this.pageNumbers=[];for(var e=1;e<=this.pageCount;e++){this.pageNumbers.push(e)}};e.prototype.setPageNumber=function(e){this.pageNumber=e;this.getProductList();window.scrollTo({top:0,behavior:"smooth"})};e.prototype.render=function(){var e=this;return r(n,{class:"products-page"},r("div",{class:"page-heading display-flex space-between align-end md:flex-column md:align-start my-lg"},r("h1",{class:"mb-none"},this.selectedCategory?this.selectedCategory.name:"All Products"),r("div",{class:"page-controls display-flex w-40 md:w-66 sm:w-100"},r("ks-form-field",{type:"select",label:"Categories",size:"sm",class:"ml-lg md:ml-none w-100",onUpdated:function(t){return e.categoryChangedHandler(t.detail.value)}},r("option",{value:"",selected:!this.selectedCategory},"View All"),this.categories.map((function(t){var n;return r("option",{value:t.id,selected:t.id===((n=e.selectedCategory)===null||n===void 0?void 0:n.id)},t.name)}))),r("ks-form-field",{type:"select",label:"Sort",size:"sm",class:"ml-xl w-100",onUpdated:function(t){return e.sortChangedHandler(t.detail.value)}},r("option",{value:""},"Default"),r("option",{value:"a-z"},"A-Z"),r("option",{value:"z-a"},"Z-A"),r("option",{value:"price"},"Price: Low to High"),r("option",{value:"price-desc"},"Price: High to Low"),r("option",{value:"rating"},"Top Rated")))),r("div",{class:"display-flex flex-wrap -m-md"},this.displayProducts.length>0?this.displayProducts.map((function(e){return r("product-summary",{product:e,class:"w-25 md:w-33 sm:w-50 xs:w-100 p-md"})})):r("div",{class:"text-lg text-bold my-xxxl py-xxxl"},"Sorry, no products were found.")),this.pageNumbers.length>1?r("div",{class:"paging-controls display-flex justify-center mt-xxxl"},r("ks-button-bar",{class:"mx-auto bg-white"},r("ks-button",{display:"hollow",disabled:this.pageNumber<=1,onClick:function(){return e.setPageNumber(--e.pageNumber)}},r("ks-icon",{icon:"chevron_left",label:"previous page"})),this.pageNumbers.map((function(t){return r("ks-button",{display:"hollow",onClick:function(){return e.setPageNumber(t)},"button-class":t===e.pageNumber?"text-bold text-underline":"text-normal"},r("span",{class:"sr-only"},"page")," ",t)})),r("ks-button",{display:"hollow",disabled:this.pageNumber>=this.pageCount,onClick:function(){return e.setPageNumber(++e.pageNumber)}},r("ks-icon",{icon:"chevron_right",label:"next page"})))):"")};Object.defineProperty(e,"watchers",{get:function(){return{match:["watchHandler"]}},enumerable:false,configurable:true});return e}());u.style=c}}}));