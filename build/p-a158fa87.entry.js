import{r as e,h as o,H as t}from"./p-db4e877b.js";import"./p-5f220563.js";import{f as i}from"./p-47b789f0.js";import{s as a}from"./p-0520f155.js";const s=class{constructor(o){e(this,o),this.isSubmitted=!1}componentWillLoad(){this.$pageHeader=document.querySelector(".page-header"),this.$pageFooter=document.querySelector(".page-footer"),this.$pageHeader.hidden=!0,this.$pageFooter.hidden=!0}disconnectedCallback(){this.$pageHeader.hidden=!1,this.$pageFooter.hidden=!1,this.isSubmitted=!1}checkout(e){setTimeout((()=>{this.isSubmitted=e.isValid;let o=e.formFieldData.find((e=>"name"===e.name));this.name=o.value}))}render(){return o(t,{class:"checkout-page"},o("div",{class:"text-xl text-accent text-primary text-normal"},o("stencil-route-link",{url:"/",class:"text-normal"},"Chronos")),this.isSubmitted?o("div",{class:"text-center"},o("h1",null,o("stencil-route-link",{url:"/"},"Chronos")),o("div",{class:"text-lg"},"Thank you for your order, ",this.name,"!"),o("div",{class:"text-md text-italic"},"This is a demo site and this form does not actually do anything. If you are interested in purchasing these products, please visit ",o("ks-button",{href:"timex.com",display:"link",target:"_blank"},"Timex's website"),".")):o("ks-row",null,o("ks-column",{class:"sm:col-12"},o("div",{class:"bg-white p-xxxl sm:p-md b-xxxs"},o("h1",null,"Checkout"),o("ks-form",{onSubmitted:e=>this.checkout(e.detail)},o("ks-form-field",{label:"Name",required:!0}),o("ks-form-field",{label:"Company (optional)"}),o("ks-form-field",{label:"Address",required:!0}),o("ks-form-field",{label:"Address 2 (optional)"}),o("div",{class:"display-flex space-between align-end md:flex-column md:align-start"},o("ks-form-field",{label:"City",class:"w-40 md:w-100",required:!0}),o("ks-form-field",{label:"State",class:"w-30 md:w-100 mx-sm md:mx-none",type:"select",required:!0},o("option",{disabled:!0,selected:!0}),o("option",{value:"AL"},"Alabama"),o("option",{value:"AK"},"Alaska"),o("option",{value:"AZ"},"Arizona"),o("option",{value:"AR"},"Arkansas"),o("option",{value:"CA"},"California"),o("option",{value:"CO"},"Colorado"),o("option",{value:"CT"},"Connecticut"),o("option",{value:"DE"},"Delaware"),o("option",{value:"DC"},"District of Columbia"),o("option",{value:"FL"},"Florida"),o("option",{value:"GA"},"Georgia"),o("option",{value:"HI"},"Hawaii"),o("option",{value:"ID"},"Idaho"),o("option",{value:"IL"},"Illinois"),o("option",{value:"IN"},"Indiana"),o("option",{value:"IA"},"Iowa"),o("option",{value:"KS"},"Kansas"),o("option",{value:"KY"},"Kentucky"),o("option",{value:"LA"},"Louisiana"),o("option",{value:"ME"},"Maine"),o("option",{value:"MD"},"Maryland"),o("option",{value:"MA"},"Massachusetts"),o("option",{value:"MI"},"Michigan"),o("option",{value:"MN"},"Minnesota"),o("option",{value:"MS"},"Mississippi"),o("option",{value:"MO"},"Missouri"),o("option",{value:"MT"},"Montana"),o("option",{value:"NE"},"Nebraska"),o("option",{value:"NV"},"Nevada"),o("option",{value:"NH"},"New Hampshire"),o("option",{value:"NJ"},"New Jersey"),o("option",{value:"NM"},"New Mexico"),o("option",{value:"NY"},"New York"),o("option",{value:"NC"},"North Carolina"),o("option",{value:"ND"},"North Dakota"),o("option",{value:"OH"},"Ohio"),o("option",{value:"OK"},"Oklahoma"),o("option",{value:"OR"},"Oregon"),o("option",{value:"PA"},"Pennsylvania"),o("option",{value:"RI"},"Rhode Island"),o("option",{value:"SC"},"South Carolina"),o("option",{value:"SD"},"South Dakota"),o("option",{value:"TN"},"Tennessee"),o("option",{value:"TX"},"Texas"),o("option",{value:"UT"},"Utah"),o("option",{value:"VT"},"Vermont"),o("option",{value:"VA"},"Virginia"),o("option",{value:"WA"},"Washington"),o("option",{value:"WV"},"West Virginia"),o("option",{value:"WI"},"Wisconsin"),o("option",{value:"WY"},"Wyoming")),o("ks-form-field",{label:"Zip Code",class:"w-25 md:w-100",required:!0})),o("ks-form-field",{label:"Keep me up to date on exclusive offers",type:"checkbox"}),o("div",{class:"text-right"},o("ks-button",{type:"submit",size:"lg"},"Checkout"))),o("div",{class:"text-xs text-italic"},"This is a demo site and this form does not actually do anything. If you are interested in purchasing these products, please visit ",o("ks-button",{href:"timex.com",display:"link",target:"_blank"},"Timex's website"),"."))),o("ks-column",{class:"sm:col-12"},o("div",{class:"py-lg sm:p-none"}),o("div",{class:"p-xxxl mt-xxxl sm:mt-none sm:px-none"},a.items.map((e=>o("div",{class:"purchase-item display-flex mb-xxl"},o("div",{class:"image"},o("div",{class:"position-relative p-md b-xxxs bg-white"},o("ks-img",{src:e.imageUrl,alt:`wrist watch (${e.name})`,lazy:!0}),o("ks-badge",{color:"light",class:"position-absolute top-0 right-0 offset-x -offset-y text-sm bg-light-lighter"},e.quantity))),o("div",{class:"display-flex flex-column w-70 pl-xxl"},o("div",{class:"text-bold text-sm"},e.name)),o("div",{class:"w-30 text-md text-right"},i(e.price*e.quantity))))),o("div",{class:"display-flex space-between text-lg pt-lg b-t-xxxs"},o("span",null,"Total:"),o("span",null,i(a.total)))))))}};s.style=".checkout-page .purchase-item .image{width:75px}";export{s as checkout_page}