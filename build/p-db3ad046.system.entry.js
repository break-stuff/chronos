System.register(["./p-f122fb29.system.js"],(function(t){"use strict";var i,s,r,e;return{setters:[function(t){i=t.r;s=t.h;r=t.H;e=t.g}],execute:function(){var n=".ks-gallery.gutter-auto .scrolling-content>*{margin-right:var(--ks-spacing-size-auto)}.ks-gallery.gutter-none .scrolling-content>*{margin-right:var(--ks-spacing-size-none)}.ks-gallery.gutter-xxxs .scrolling-content>*{margin-right:var(--ks-spacing-size-xxxs)}.ks-gallery.gutter-xxs .scrolling-content>*{margin-right:var(--ks-spacing-size-xxs)}.ks-gallery.gutter-xs .scrolling-content>*{margin-right:var(--ks-spacing-size-xs)}.ks-gallery.gutter-sm .scrolling-content>*{margin-right:var(--ks-spacing-size-sm)}.ks-gallery.gutter-md .scrolling-content>*{margin-right:var(--ks-spacing-size-md)}.ks-gallery.gutter-lg .scrolling-content>*{margin-right:var(--ks-spacing-size-lg)}.ks-gallery.gutter-xl .scrolling-content>*{margin-right:var(--ks-spacing-size-xl)}.ks-gallery.gutter-xxl .scrolling-content>*{margin-right:var(--ks-spacing-size-xxl)}.ks-gallery.gutter-xxxl .scrolling-content>*{margin-right:var(--ks-spacing-size-xxxl)}.ks-gallery .header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.ks-gallery .header .heading{margin:var(--ks-spacing-size-none)}.ks-gallery .content-wrapper{overflow-x:auto;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}.ks-gallery .content-wrapper::-webkit-scrollbar{display:none}.ks-gallery .content-wrapper .scrolling-content{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:var(--ks-spacing-size-xs)}.ks-gallery .content-wrapper .scrolling-content:last-child{margin-right:var(--ks-spacing-size-xs)}.ks-gallery .content-wrapper .scrolling-content>*{-ms-flex:0 0 auto;flex:0 0 auto}";var o=t("ks_gallery",function(){function t(t){i(this,t);this.position=0;this.containerWidth=0;this.childWidth=0;this.margin=0;this.gutter="md";this.prevButtonText="scroll left";this.nextButtonText="scroll right";this.linkTag="a";this.hrefProp="href";this.isStart=true;this.isEnd=false}t.prototype.componentDidRender=function(){this.setScrollValues();this.setScrollListener();this.setItemWidth()};t.prototype.setItemWidth=function(){var t=this;if(this.itemWidth){Array.from(this.$el.querySelector(".scrolling-content").children).forEach((function(i){return i.style.width=t.itemWidth}))}};t.prototype.setScrollListener=function(){var t=this;this.$container.addEventListener("scroll",(function(i){var s=i.target;var r=s.scrollLeft+s.offsetWidth;t.isStart=r===s.offsetWidth;t.isEnd=r>=s.scrollWidth}))};t.prototype.scrollRight=function(){this.setScrollValues();var t=this.$container.scrollWidth-this.containerWidth;this.position=this.$container.scrollLeft+this.getScrollWidth();this.position=this.position>=t?t+1:this.position;this.scroll()};t.prototype.scrollLeft=function(){this.setScrollValues();this.position=this.$container.scrollLeft-this.getScrollWidth();this.position=this.position<=0?0:this.position;this.scroll()};t.prototype.scroll=function(){if(this.supportsSmoothScrolling()){this.$container.scroll({left:this.position,behavior:"smooth"})}else{this.scrollTo(this.$container,this.$container.scrollLeft,this.position)}};t.prototype.scrollTo=function(t,i,s,r,e){var n=this;if(r===void 0){r=1e3}if(e===void 0){e=0}i=i<=0?0:i;s=s<=0?0:s;if(e>=r)return;var o=s-i;var l=e/r*Math.PI/2;var a=o*Math.sin(l);setTimeout((function(){t.scrollLeft=i+a;n.scrollTo(t,i,s,r,e+5)}))};t.prototype.supportsSmoothScrolling=function(){var t=document.body;var i=t.style.scrollBehavior;t.style.scrollBehavior="smooth";var s=getComputedStyle(t).scrollBehavior==="smooth";t.style.scrollBehavior=i;return s};t.prototype.setScrollValues=function(){this.$container=this.$el.querySelector(".content-wrapper");this.containerWidth=this.$container.offsetWidth;var t=this.$el.querySelector(".scrolling-content > *");this.childWidth=t.offsetWidth;var i=window.getComputedStyle(t);this.margin=parseFloat(i.marginRight)};t.prototype.getScrollWidth=function(){return this.containerWidth<this.childWidth+this.margin?this.containerWidth:Math.floor(this.containerWidth/(this.childWidth+this.margin))*(this.childWidth+this.margin)};t.prototype.render=function(){var t;var i=this;var e=(t={"ks-gallery":true},t["gutter-"+this.gutter]=true,t);var n={"content-wrapper":true,"b-l-xxxs":!this.isStart,"b-r-xxxs":!this.isEnd};var o=this.linkTag;return s(r,{class:e},s("header",{class:"header"},s("h2",{class:"heading"},this.href?s(o,{ref:function(t){return t.setAttribute(i.hrefProp,i.href)}},this.heading):this.heading),s("div",{class:"controls"},s("ks-button",{class:"scroll-left",size:"xs",display:"clear",disabled:this.isStart,onClick:function(){return i.scrollLeft()}},s("ks-icon",{class:"text-lg",icon:"chevron_left",label:this.prevButtonText})),s("ks-button",{class:"scroll-right",size:"xs",display:"clear",disabled:this.isEnd,onClick:function(){return i.scrollRight()}},s("ks-icon",{class:"text-lg",icon:"chevron_right",label:this.nextButtonText})))),s("div",{class:n},s("div",{class:"scrolling-content"},s("slot",null))))};Object.defineProperty(t.prototype,"$el",{get:function(){return e(this)},enumerable:false,configurable:true});return t}());o.style=n}}}));