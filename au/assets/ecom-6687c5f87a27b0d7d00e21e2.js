/* Publish by EComposer at 2024-07-09 11:07:01*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-byilz7ey8bq"]=  window.__ectimmers["ecom-byilz7ey8bq"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-byilz7ey8bq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-byilz7ey8bq', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-m8pf60sw3op').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-m8pf60sw3op', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-6ta9i12bzxk').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-6ta9i12bzxk', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-qgsoel9ml7a').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-qgsoel9ml7a', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-o2eti9uoni').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-o2eti9uoni', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ry562yw7nfq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ry562yw7nfq', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-u7t01ymhwa9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-u7t01ymhwa9', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-x7s9zne8eah').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-x7s9zne8eah', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-wd921vcjycj').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-wd921vcjycj', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ue9l6wbi1be').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ue9l6wbi1be', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-s0sdjs6fti9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-s0sdjs6fti9', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-2zvhsb121f6"]=  window.__ectimmers["ecom-2zvhsb121f6"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(t.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-2zvhsb121f6"]["jf5hzfz4h"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var i=e.querySelector(".ecom__element--button");this.isLive&&i&&i.dataset.ecTrackingId&&i.addEventListener("click",function(t){if(window.Shopify.analytics){t.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId}),i.cloneNode(!0).click()}},{once:!0}),this.isLive&&i&&i.dataset.eventTrackingFb&&i.addEventListener("click",function(t){window.fbq&&window.fbq("track",`${i.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-2zvhsb121f6').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-2zvhsb121f6', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-iherinzuaa').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-iherinzuaa', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-grfsv76ax8n').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-grfsv76ax8n', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-iwbj4pyyfpi"]=  window.__ectimmers["ecom-iwbj4pyyfpi"] || {};
var o;const e=this.$el;if(!e)return;const i=(o=this.settings.thousandSeparator)!=null?o:!1,t=e.querySelectorAll(".element__counter--number");t.forEach(function(a){a.counterAlreadyFired=!1,a.counterDuration=+a.getAttribute("data-duration"),a.counterInitVal=+a.getAttribute("data-from-value"),a.counterLastVal=+a.getAttribute("data-to-value"),a.counterStep=+a.getAttribute("data-step"),a.updateCounter=function(){if(a.counterInitVal===a.counterLastVal)return!1;let r=a.counterLastVal-a.counterInitVal,c=a.counterInitVal,u=a.counterStep,l=Math.abs(Math.floor(a.counterDuration/r*u)),g= window.__ectimmers["ecom-iwbj4pyyfpi"]["03nxvkqmr"] = setInterval(function(){c+=u,c>=a.counterLastVal?(clearInterval(g),i?a.innerText=a.counterLastVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):a.innerText=a.counterLastVal):i?a.innerText=c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):a.innerText=c},l)}});function n(a){if(!a)return!1;let r=window.scrollY||window.pageYOffset,c=a.getBoundingClientRect().top+r,u={top:r,bottom:r+window.innerHeight},l={top:c,bottom:c+a.clientHeight};return l.bottom>=u.top&&l.bottom<=u.bottom||l.top<=u.bottom&&l.top>=u.top}function s(){t.forEach(function(a){if(a.counterAlreadyFired===!0||!n(a))return!1;a.updateCounter(),a.counterAlreadyFired=!0,window.removeEventListener("scroll",s)})}window.addEventListener("scroll",s),s()

                    });
                    
                        document.querySelectorAll('.ecom-iwbj4pyyfpi').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-iwbj4pyyfpi', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-q9izi01jv').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-q9izi01jv', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-eeb0oyyw5kc').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-eeb0oyyw5kc', settings: {"thousandSeparator":true},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-udtk1yc2f9"]=  window.__ectimmers["ecom-udtk1yc2f9"] || {};
const e=this.$el;if(!e||!this.isLive)return;const i=e.querySelector(".element__featured--wrapper-list");if(i){let t={top:0,left:0,x:0,y:0};const n=function(a){const r=a.clientX-t.x;i.scrollLeft=t.left-r},s=function(){i.removeEventListener("mousemove",n),i.removeEventListener("mouseup",s),i.style.cursor="default",i.style.removeProperty("user-select")},o=function(a){i.style.cursor="grabbing",i.style.userSelect="none",t={left:i.scrollLeft,top:i.scrollTop,x:a.clientX,y:a.clientY},i.addEventListener("mousemove",n),i.addEventListener("mouseup",s)};i.addEventListener("mousedown",o),i.addEventListener("mouseleave",s)}

                    });
                    
                        document.querySelectorAll('.ecom-udtk1yc2f9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-udtk1yc2f9', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-hmeh4gx0ea"]=  window.__ectimmers["ecom-hmeh4gx0ea"] || {};
if(!this.$el)return;const e=this.$el.querySelector(".ecom-product-single__description-view-more-btn");if(this.settings.type==="tab"){const o=this.$el.querySelectorAll(".ecom-product-description-tab__item"),a=this.$el.querySelectorAll(".ecom-product-description-tab__content");o.length&&o.forEach((r,c)=>{r.onclick=function(){this.classList&&!this.classList.contains("ecom-item-active")&&(o.forEach(u=>u.classList.remove("ecom-item-active")),a.forEach(u=>u.classList.remove("ecom-item-active")),r.classList.add("ecom-item-active"),a[c].classList.add("ecom-item-active"))}})}const i=this.settings.content_type,t=this.$el.querySelector(".ecom-product-single__description--full"),n=this.$el.querySelector(".ecom-product-single__description-view-less-btn"),s=this.$el.querySelector(".ecom-product-single__description--paragraph");e&&(e&&e.addEventListener("click",function(){i==="text"&&t?(t.style.display="block",s.style.display="none"):s.style.maxHeight=null,this.style.display="none",n&&(n.style.display="flex")}),n&&n.addEventListener("click",function(){e.style.display="flex",this.style.display="none",i==="text"&&t?(t&&(t.style.display="none"),s.style.display="block"):s.style.maxHeight="var(--ecom-description-height)"}))

                    });
                    
                        document.querySelectorAll('.ecom-hmeh4gx0ea').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-hmeh4gx0ea', settings: {"type":"short","content_type":"text"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-igph8i3kqqi"]=  window.__ectimmers["ecom-igph8i3kqqi"] || {};
var s,o;let e=this.$el;if(!e)return;let i=e.querySelector("afterpay-placement.ecom-afterpay-integrate"),t=this.$el.closest(".ecom-product-form--single");if(t){let a=t.querySelector('[name="id"]');if(a&&a.dispatchEvent(new window.Event("ecomUpdate")),this.settings.show_total_price){const r=t.querySelector(".ecom-product-single__quantity-input"),c=e.querySelector(".ecom-product-single__price--sale");if(e.querySelector(".ecom-product-single__price--regular"),!c)return;r&&r.addEventListener("change",function(){c.innerHTML=window.EComposer.formatMoney(parseInt(c.getAttribute("data-price"))*parseInt(this.value))}),t.addEventListener("ecomVariantChange",function(u){if(u.detail.variant){const l=u.detail.variant,g=r?parseInt(r.value):1;c.setAttribute("data-price",l.price),g>1&&(c.innerHTML=window.EComposer.formatMoney(l.price*parseInt(g)))}})}}if(this.settings.enable_afterpay){let a=window.document.querySelector("#ecom-after-pay-script");if(window.afterpay_min=this.settings.lower_limit||1,a)a.dataset.analyticsEnabled=!0,a.dataset.min=(s=this.settings.lower_limit)!=null?s:1,a.dataset.max=(o=this.settings.upper_limit)!=null?o:1e3;else{let r=window.document.createElement("script");r.id="ecom-after-pay-script",r.dataset.analyticsEnabled=!0,r.dataset.min=this.settings.lower_limit||1,r.dataset.max=this.settings.upper_limit||1e3,r.src="https://js.afterpay.com/afterpay-1.x.js",window.document.head.appendChild(r)}i&&this.isLive&&window.jQuery&&window.Afterpay&&window.Afterpay.initProductPage&&window.Afterpay.initProductPage(window.jQuery)}let n=e.querySelector(".ecom-product-single__price--badges-sale");if(n&&n.dataset.haveSale=="true"){let a=n.dataset.sale,r=n.dataset.text;r=r.replace(/\{.*\}/g,a),n.innerHTML=r,n.style.display="block"}

                    });
                    
                        document.querySelectorAll('.ecom-igph8i3kqqi').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-igph8i3kqqi', settings: {"enable_afterpay":false,"lower_limit":"100","upper_limit":"600"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-ngsvz9s0ap8"]=  window.__ectimmers["ecom-ngsvz9s0ap8"] || {};
const e=this.$el;if(!e)return;const i=e.querySelector(".ecom-product-single__quantity-controls-plus"),t=e.querySelector(".ecom-product-single__quantity-controls-minus"),n=e.querySelector(".ecom-product-single__quantity-input");n.value===""&&(n.value=this.settings.quantity_min&&parseInt(this.settings.quantity_min)>0?parseInt(this.settings.quantity_min):"1"),i.addEventListener("click",function(s){s.preventDefault(),n.stepUp(),n.dispatchEvent(new Event("change"))}),t.addEventListener("click",function(s){s.preventDefault(),n.stepDown(),n.dispatchEvent(new Event("change"))}),n.addEventListener("change",function(s){n.dataset.maxValue&&parseInt(n.dataset.maxValue)<parseInt(s.target.value)&&(s.target.value=parseInt(n.dataset.maxValue)),n.dataset.minValue&&parseInt(s.target.value)<parseInt(n.dataset.minValue)&&(s.target.value=parseInt(n.dataset.minValue))})

                    });
                    
                        document.querySelectorAll('.ecom-ngsvz9s0ap8').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ngsvz9s0ap8', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-6oxo6u19p4k"]=  window.__ectimmers["ecom-6oxo6u19p4k"] || {};
if(!this.$el)return!1;const e=this.$el,i=e.closest(".ecom-product-form--single");if(!i)return!1;const t=i.querySelector('select[name="id"]'),n=e.querySelector(".ecom-product-single__add-to-cart--submit"),s=e.closest("form");if(!s)return;function o(){let r=null;const c=s.dataset.product_id;let u=null;if(c?u=s.querySelector("[id^=product-json-"+c+"]"):u=e.querySelector("[id^=addtocart-product-json]"),!u)return;try{r=JSON.parse(u.innerHTML)}catch(g){return}let l=r.variants[0];if(l){const g=n.querySelector(".ecom-add-to-cart-text");if(!g)return;l.available==!1?(n.setAttribute("disabled","disabled"),g.innerText=n.dataset.textOutstock,n.classList.remove("ecom-product-single__pre-order")):l.inventory_quantity<=0&&l.inventory_policy=="continue"&&l.inventory_management&&(g.innerText=n.dataset.textPreOrder,n.classList.add("ecom-product-single__pre-order"))}}if(!this.isLive)i&&(t&&!t.classList.contains("ecom-product-single__picker-default-variant")?t.dispatchEvent(new window.Event("ecomUpdate")):o());else{let r=function(){const c=i.querySelectorAll(".ecom-required--checkbox");c.length>0&&c.forEach(function(l){let g=l.querySelectorAll("input[type=checkbox]");if(g.length==0)return;let f=!1;g.forEach(function(b){b.checked&&(f=!0)}),f?g.forEach(function(b){b.required=!1}):g.forEach(function(b){b.required=!0})});const u=i.querySelectorAll(".ecom-product-single__property-file");u.length&&u.forEach(function(l){l.required&&(l.parentNode.parentNode.querySelector(".ecom-product-single-form--text-error").style.display="block")})};if((!s.querySelector("select[name=id]")||s.querySelector("select[name=id]")&&t.classList.contains("ecom-product-single__picker-default-variant"))&&o(),!t&&n&&n.dataset.variant_id){const c=document.createElement("input");c.type="hidden",c.value=n.dataset.variant_id,e.appendChild(c)}n.addEventListener("click",r)}const a=function(r){if(!e)return;const c=e.querySelector(".ecom-product-single__add-to-cart--submit");if(!c)return;let u=parseInt(r.settings.animation_loop_time)*1e3||6e3,l=1e3;window.__ectimmers["ecom-6oxo6u19p4k"]["h18yc6oe0"] = setInterval(function(){c.classList.add("animated"),setTimeout(function(){c.classList.remove("animated")},l)},u)};this.settings.animation&&a(this)

                    });
                    
                        document.querySelectorAll('.ecom-6oxo6u19p4k').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-6oxo6u19p4k', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-43dpqh8hmun"]=  window.__ectimmers["ecom-43dpqh8hmun"] || {};
const e=this.$el;if(!e)return;const i=e.querySelector("form");let t=this.settings.link_redirect;if(this.isLive){(function(){if(!t)return!1;let c=t.href;if(c=="")return!1;let u=t.target;window.location.href.includes("customer_posted=true")&&(u==="_blank"?window.open(c):window.location.href=c)})();const s=/^(\?|&)contact%5Btags%5D=[^&]+&form_type=customer(&|$)/;this.settings.scroll_in_view&&(window.location.pathname.includes("challenge")?setTimeout(function(){var c=document.querySelector(".shopify-challenge__container");c.scrollIntoView()},100):setTimeout(function(){(s.test(location.search)||window.location.href.includes("customer_posted=true"))&&e.scrollIntoView()},300)),s.test(location.search)&&i&&i.querySelector(".ecom-shopify__newsletter-form-message.ecom-dn")&&i.querySelector(".ecom-shopify__newsletter-form-message.ecom-dn").classList.remove("ecom-dn"),i&&i.dataset.ecTrackingId&&i.addEventListener("submit",function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId})},{once:!0});let o=e.querySelector(".ecom-shopify__newsletter__verify-checkbox"),a=e.querySelector(".ecom-shopify__newsletter__verify-error"),r=e.querySelector(".ecome-shopify__newsletter__button");o&&(r.addEventListener("click",function(c){o.checked==!1?(c.preventDefault(),a.classList.remove("ecom-dn")):a.classList.add("ecom-dn")}),o.addEventListener("change",function(c){o.checked&&a.classList.add("ecom-dn")}))}

                    });
                    
                        document.querySelectorAll('.ecom-43dpqh8hmun').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-43dpqh8hmun', settings: {"scroll_in_view":true},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-oq9oiodl6cp"]=  window.__ectimmers["ecom-oq9oiodl6cp"] || {};
const e=this.$el;if(window.EComCountdown){const t=e.querySelector(".ecom-element__countdown--time");let n=e.querySelector(".ecom-countdown-progress-bar"),s=e.querySelector(".ecom-countdown-progress-bar--timer"),o=t?t.dataset.countdownFrom:0,a=t&&t.dataset.countdownType?t.dataset.countdownType:"visit",r=t&&t.dataset.countdownRestart?t.dataset.countdownRestart:!1;if(t&&t.dataset.countdownTo){let g=function(f){if(this.innerHTML=f.strftime(i),n&&o){let b=new Date().getTime(),h=new Date(o),m=h.getTime(),v=f.finalDate.getTime();if(m<b&&v>m){n.style.display="inherit";let y=v-m,w=v-b,C=Math.round(w*100/y);s.style.width=C+"%"}else n.style.display="none"}};const c=t.dataset.showFields?t.dataset.showFields:"",u=t.dataset;var i="";const l=/\[([^\]]+)\]/gm;if(c.includes("week")&&u.transWeek.length>0){let f="",b=u.transWeek.replace(l,(...h)=>(f=h[1],""));i+=`
                                        <div class="ecom-element__countdown-item--weeks">
                                            <span class="ecom-element__countdown-number">${f}</span>
                                            <span class="ecom-element__countdown-text">
                                                 ${b}
                                            </span>
                                        </div>`}if(c.includes("day")&&u.transDay.length>0){let f="",b=u.transDay.replace(l,(...h)=>(f=h[1],""));i+=`
                                        <div class="ecom-element__countdown-item--days">
                                            <span class="ecom-element__countdown-number">
                                                ${f}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${b}
                                            </span>
                                        </div>`}if(c.includes("hour")&&u.transHour.length>0){let f="",b=u.transHour.replace(l,(...h)=>(f=h[1],""));i+=`
                                        <div class="ecom-element__countdown-item--hours">
                                            <span class="ecom-element__countdown-number">
                                                 ${f}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${b}
                                            </span>
                                        </div>`}if(c.includes("minute")&&u.transMinute.length>0){let f="",b=u.transMinute.replace(l,(...h)=>(f=h[1],""));i+=`
                                        <div class="ecom-element__countdown-item--minutes">
                                            <span class="ecom-element__countdown-number">
                                                ${f}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${b}
                                            </span>
                                        </div>`}if(c.includes("second")&&u.transSecond.length>0){let f="",b=u.transSecond.replace(l,(...h)=>(f=h[1],""));i+=`
                                        <div class="ecom-element__countdown-item--seconds">
                                            <span class="ecom-element__countdown-number">
                                                ${f}
                                            </span>
                                            <span class="ecom-element__countdown-text">
                                                ${b}
                                            </span>
                                    </div>`}if(!(o&&new Date().getTime()<new Date(o).getTime()&&a=="time")){let f=new Date(t.dataset.countdownTo);if(window.EComCountdown){let b=new Date(t.dataset.countdownTo).getTime()-new Date(t.dataset.countdownFrom).getTime(),h=new Date(t.dataset.countdownTo).getTime()+b;if(b==0)return;for(;h<new Date().getTime();)h+=b;window.EComCountdown(t,f,{}),t.addEventListener("update.ecom.countdown",g),t.addEventListener("finish.ecom.countdown",function(m){r=="true"&&a=="time"&&window.EComCountdown(t,new Date(h),g)})}}}}

                    });
                    
                        document.querySelectorAll('.ecom-oq9oiodl6cp').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-oq9oiodl6cp', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-toi1izr5zn"]=  window.__ectimmers["ecom-toi1izr5zn"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let i=this.$el;if(!i)return;function t(s){const o=s.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom-s.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){let s=i.querySelector(".ecom-element.ecom-base-image"),o=i.closest(".core__row--columns");s&&(t(s)?(s.classList.add("image-highlight"),o.setAttribute("style","z-index: unset")):(s.classList.remove("image-highlight"),o.setAttribute("style","z-index: 1")))}this.settings.highligh_on_viewport&&window.addEventListener("scroll",function(){n()})

                    });
                    
                        document.querySelectorAll('.ecom-toi1izr5zn').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-toi1izr5zn', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-rviccx99h2k').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-rviccx99h2k', settings: {"link":"custom","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-y1udzdjw2s').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-y1udzdjw2s', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-g0opr2a5ce').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-g0opr2a5ce', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ejgmik7wwt').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ejgmik7wwt', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-njj1lm3a1p').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-njj1lm3a1p', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ptlsbnnfzw').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ptlsbnnfzw', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-eig0kdv3i4q').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-eig0kdv3i4q', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-vxw913jnhcp').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-vxw913jnhcp', settings: {"link":"custom","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-4f4k3netwfq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-4f4k3netwfq', settings: {"link":"custom","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-gytf5hyzale').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-gytf5hyzale', settings: {"link":"custom","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-zp3dz8p107').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-zp3dz8p107', settings: {"link":"custom","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-j3zllkf9w6').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-j3zllkf9w6', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-4fqnput5sp3"]=  window.__ectimmers["ecom-4fqnput5sp3"] || {};
var C,$,M;const e=this.$el;if(!e)return;(C=this.settings.autoplay_progress)!=null;const i=e.querySelector(".ecom-autoplay-progress svg"),t=e.querySelector(".ecom-autoplay-progress span"),n=($=this.settings.disable_lazy)!=null?$:!1,s=this.settings,o=this.settings.slider_loop,a=this.settings.slider_center,r=this.settings.slider_center__tablet,c=this.settings.slider_center__mobile;this.settings.slider_group,this.settings.slider_items,this.settings.slider_group__tablet,this.settings.slider_items__tablet,this.settings.slider_group__mobile,this.settings.slider_items__mobile;const u=this.settings.slider_speed,l=this.settings.slider_speed__tablet,g=this.settings.slider_speed__mobile,f=function(L,S={},T=""){return T=="loop"?((window.innerWidth>1024&&(L.items.length<L.slider_group+L.slider_items||L.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(L.items.length<L.slider_group__tablet+L.slider_items__tablet||L.slider_autoplay)||L.items.length<L.slider_group__mobile+L.slider_items__mobile||L.slider_autoplay)&&(S.loop=!1),S):(window.innerWidth>1024&&L.speed&&(S[`${T}`]=L[0]),window.innerWidth<=1024&&window.innerWidth>768&&L[1]?S[`${T}`]=L[1]:L[0]&&(S[`${T}`]=L[0]),window.innerWidth<768&&L[2]?S[`${T}`]=L[2]:L[1]?S[`${T}`]=L[1]:L[0]&&(S[`${T}`]=L[0]),S)};let b={};i&&t&&(b={autoplayTimeLeft(L,S,T){i.style.setProperty("--progress",1-T),t.textContent=`${Math.ceil(S/1e3)}s`}});const h=e.querySelector(".ecom-swiper-container"),m=(M=this.settings.disable_touch_move)!=null?M:!0;if(!h)return;let v=JSON.parse(h.dataset.optionSwiper);v.pagination.el=e.querySelector(".ecom-swiper-pagination"),v.navigation.nextEl=e.querySelector(".ecom-swiper-button-next"),v.navigation.prevEl=e.querySelector(".ecom-swiper-button-prev"),v.pagination.renderBullet=(L,S)=>`<span class="${S}">
                          ${this.settings.items[L]&&this.settings.items[L].slider_pagination_image?`<img src="${this.settings.items[L].slider_pagination_image}">`:""}</span>`,b.init=function(){this.el.parentNode.classList.add("ecom-swiper-initialized-wrapper")};const y={allowTouchMove:this.isLive&&m,on:b};if(window.EComSwiper){let S=function(){o&&(v.loop=!0,v=f(s,v,"loop")),v.centeredSlides=!1,v=f([a,r,c],v,"centeredSlides"),v=f([u,l,g],v,"speed"),L=new window.EComSwiper(h,Object.assign(v,y)),v.autoplay.enabled&&(L.on("touchStart",function(A,I){A.params.speed=300,A.autoplay.stop()}),L.on("touchEnd",function(A,I){window.innerWidth>1024&&u&&(A.params.speed=u),window.innerWidth<=1024&&window.innerWidth>768&&l?A.params.speed=l:u&&(A.params.speed=u),window.innerWidth<768&&g?A.params.speed=g:l?A.params.speed=l:u&&(A.params.speed=u),A.autoplay.start()})),L.on("slideChange",function(){const A=L.activeIndex==0?L.slides.length-1:L.activeIndex-1,I=L.slides[A];if(I){const P=I.querySelectorAll(".ecom-animation.ecom-animated");P.length&&P.forEach(function(V){V.classList.remove("ecom-animated","animated"),V.classList.add("ecom-animated-slider")})}if(L.el){const P=L.slides[L.activeIndex];let V=null;P&&(V=P.querySelectorAll(".ecom-animation.ecom-animated-slider")),V&&V.length&&V.forEach(function(W){W.classList.add("ecom-animated")})}})},L=null;var w;this.isLive&&window.addEventListener("resize",function(){w&&clearTimeout(w),w=setTimeout(()=>{L.update()},200)}),this.isLive?S():setTimeout(function(){S()},200)}h.querySelectorAll("img").length&&h.querySelectorAll("img").forEach(function(L,S){n&&L.removeAttribute("loading")})

                    });
                    
                        document.querySelectorAll('.ecom-4fqnput5sp3').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-4fqnput5sp3', settings: {"slider_loop":false,"slider_group":1,"slider_items":4,"slider_group__tablet":2,"slider_items__tablet":4,"slider_group__mobile":2,"slider_items__mobile":2,"slider_speed":500,"items":[{"blocks":[{"settings":{"image":{"value":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/3d-printing-industry_d905333e-d537-4837-b678-e75d5da41b9f.webp?v=1720521748","name":"3d-printing-industry_d905333e-d537-4837-b678-e75d5da41b9f","thumbnail":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/3d-printing-industry_d905333e-d537-4837-b678-e75d5da41b9f.webp?v=1720521748","width":180,"height":148,"id":"VslRnZUR"},"link":"custom","lightbox":"no","use_caption":false,"caption":"Hello","overlay_use":false,"custom-link":{"href":"#"}},"style":{"image":{"imageAlign":"center","imageOpacitynormalmode":1,"imageOpacityhovermode":0.6,"imageObjectFit":"contain","tab":"normal","imageTransition":400},"overlay":{"opacity":0,"backgroundhovermode":{"classic":{"background-color":"rgba(17, 24, 39, 0.3)"}},"opacityHover":1}},"name":"image","advanced":{"spacing":{"padding":{"bottom":0}}},"refresh":"ecom-z6tkmi2581r","id":"ecom-vxw913jnhcp","firstinit":true,"css":{"settings":{"style":"","keyframes":[],"fonts":[]},"style":{"style":".ecom-core.ecom-vxw913jnhcp .ecom-image-align{align-items: center;}.ecom-core.ecom-vxw913jnhcp .ecom-base-image .ecom-image-picture img{object-fit: contain;}.ecom-core.ecom-vxw913jnhcp .ecom-base-image .ecom-image-picture ,.ecom-core.ecom-vxw913jnhcp .ecom-base-image .ecom-image-picture .ecom-image-default{opacity: 1;}.ecom-core.ecom-vxw913jnhcp .ecom-base-image .ecom-image-picture:hover ,.ecom-core.ecom-vxw913jnhcp .ecom-base-image .ecom-image-picture:hover .ecom-image-default{opacity: 0.6;}.ecom-core.ecom-vxw913jnhcp .ecom-base-image .ecom-image-picture{transition: all 400ms ease;}","keyframes":[],"fonts":[]},"advanced":{"style":".ecom-core.ecom-vxw913jnhcp{padding-bottom: 0 !important;}","keyframes":[[]],"fonts":[]}}}],"img_size":"cover","hasElementRequestLiquid":false,"id":"ecom-0xd8jj1b54ar"},{"blocks":[{"settings":{"image":{"value":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/all-3dp-review_84d69545-1c3f-4f49-968b-de33b4ca33c9.webp?v=1720521771","name":"all-3dp-review_84d69545-1c3f-4f49-968b-de33b4ca33c9","thumbnail":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/all-3dp-review_84d69545-1c3f-4f49-968b-de33b4ca33c9.webp?v=1720521771","width":180,"height":148,"id":"jxxUvAhA"},"link":"custom","lightbox":"no","use_caption":false,"caption":"Hello","overlay_use":false,"custom-link":{"href":"#"}},"style":{"image":{"imageAlign":"center","imageOpacitynormalmode":1,"imageOpacityhovermode":0.6,"imageObjectFit":"contain","tab":"normal","imageTransition":400},"overlay":{"opacity":0,"backgroundhovermode":{"classic":{"background-color":"rgba(17, 24, 39, 0.3)"}},"opacityHover":1}},"name":"image","advanced":{"spacing":{"padding":{"bottom":0}}},"refresh":"ecom-apwjyrws54c","id":"ecom-4f4k3netwfq","firstinit":true,"css":{"settings":{"style":"","keyframes":[],"fonts":[]},"style":{"style":".ecom-core.ecom-4f4k3netwfq .ecom-image-align{align-items: center;}.ecom-core.ecom-4f4k3netwfq .ecom-base-image .ecom-image-picture img{object-fit: contain;}.ecom-core.ecom-4f4k3netwfq .ecom-base-image .ecom-image-picture ,.ecom-core.ecom-4f4k3netwfq .ecom-base-image .ecom-image-picture .ecom-image-default{opacity: 1;}.ecom-core.ecom-4f4k3netwfq .ecom-base-image .ecom-image-picture:hover ,.ecom-core.ecom-4f4k3netwfq .ecom-base-image .ecom-image-picture:hover .ecom-image-default{opacity: 0.6;}.ecom-core.ecom-4f4k3netwfq .ecom-base-image .ecom-image-picture{transition: all 400ms ease;}","keyframes":[],"fonts":[]},"advanced":{"style":".ecom-core.ecom-4f4k3netwfq{padding-bottom: 0 !important;}","keyframes":[[]],"fonts":[]}}}],"img_size":"cover","hasElementRequestLiquid":false,"id":"ecom-kssq2nya8i"},{"img_size":"cover","blocks":[{"settings":{"image":{"value":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/3d-print.webp?v=1720521776","name":"3d-print","thumbnail":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/3d-print.webp?v=1720521776","width":180,"height":148,"id":"sjtUqi3h"},"link":"custom","lightbox":"no","use_caption":false,"caption":"Hello","overlay_use":false,"custom-link":{"href":"#"}},"style":{"image":{"imageAlign":"center","imageOpacitynormalmode":1,"imageOpacityhovermode":0.6,"imageObjectFit":"contain","tab":"normal","imageTransition":400},"overlay":{"opacity":0,"backgroundhovermode":{"classic":{"background-color":"rgba(17, 24, 39, 0.3)"}},"opacityHover":1}},"name":"image","advanced":{"spacing":{"padding":{"bottom":0}}},"refresh":"ecom-nqrr2ernfar","id":"ecom-gytf5hyzale","firstinit":true,"css":{"settings":{"style":"","keyframes":[],"fonts":[]},"style":{"style":".ecom-core.ecom-gytf5hyzale .ecom-image-align{align-items: center;}.ecom-core.ecom-gytf5hyzale .ecom-base-image .ecom-image-picture img{object-fit: contain;}.ecom-core.ecom-gytf5hyzale .ecom-base-image .ecom-image-picture ,.ecom-core.ecom-gytf5hyzale .ecom-base-image .ecom-image-picture .ecom-image-default{opacity: 1;}.ecom-core.ecom-gytf5hyzale .ecom-base-image .ecom-image-picture:hover ,.ecom-core.ecom-gytf5hyzale .ecom-base-image .ecom-image-picture:hover .ecom-image-default{opacity: 0.6;}.ecom-core.ecom-gytf5hyzale .ecom-base-image .ecom-image-picture{transition: all 400ms ease;}","keyframes":[],"fonts":[]},"advanced":{"style":".ecom-core.ecom-gytf5hyzale{padding-bottom: 0 !important;}","keyframes":[[]],"fonts":[]}}}],"hasElementRequestLiquid":false,"id":"ecom-168d96ohve7"},{"img_size":"cover","blocks":[{"settings":{"image":{"value":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/3d-poder_618ffacd-e9e0-45af-9c77-8c2f9a7f803c.webp?v=1720521790","name":"3d-poder_618ffacd-e9e0-45af-9c77-8c2f9a7f803c","thumbnail":"https://cdn.shopify.com/s/files/1/0678/2933/4237/files/3d-poder_618ffacd-e9e0-45af-9c77-8c2f9a7f803c.webp?v=1720521790","width":180,"height":148,"id":"V1ZlBoMv"},"link":"custom","lightbox":"no","use_caption":false,"caption":"Hello","overlay_use":false,"custom-link":{"href":"#"}},"style":{"image":{"imageAlign":"center","imageOpacitynormalmode":1,"imageOpacityhovermode":0.6,"imageObjectFit":"contain","tab":"normal","imageTransition":400},"overlay":{"opacity":0,"backgroundhovermode":{"classic":{"background-color":"rgba(17, 24, 39, 0.3)"}},"opacityHover":1}},"name":"image","advanced":{"spacing":{"padding":{"bottom":0}}},"refresh":"ecom-gpgg2wmlc18","id":"ecom-zp3dz8p107","firstinit":true,"css":{"settings":{"style":"","keyframes":[],"fonts":[]},"style":{"style":".ecom-core.ecom-zp3dz8p107 .ecom-image-align{align-items: center;}.ecom-core.ecom-zp3dz8p107 .ecom-base-image .ecom-image-picture img{object-fit: contain;}.ecom-core.ecom-zp3dz8p107 .ecom-base-image .ecom-image-picture ,.ecom-core.ecom-zp3dz8p107 .ecom-base-image .ecom-image-picture .ecom-image-default{opacity: 1;}.ecom-core.ecom-zp3dz8p107 .ecom-base-image .ecom-image-picture:hover ,.ecom-core.ecom-zp3dz8p107 .ecom-base-image .ecom-image-picture:hover .ecom-image-default{opacity: 0.6;}.ecom-core.ecom-zp3dz8p107 .ecom-base-image .ecom-image-picture{transition: all 400ms ease;}","keyframes":[],"fonts":[]},"advanced":{"style":".ecom-core.ecom-zp3dz8p107{padding-bottom: 0 !important;}","keyframes":[[]],"fonts":[]}}}],"hasElementRequestLiquid":false,"id":"ecom-oxht4knji4"}]},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-o2ch5r5ypps"]=  window.__ectimmers["ecom-o2ch5r5ypps"] || {};
var K,X,tt;let e=this.$el;if(!e)return;let a=!0,_=e.querySelectorAll(".ecom-collection__product-variants"),t=this.isLive,g=(K=this.settings.show_featured_media)!=null?K:!1,M=(X=this.settings.bage_sale)!=null?X:"",S=(tt=this.settings.enable_progress_pagination)!=null?tt:!1,o="bullets";const z=this.settings.slider_center,L=this.settings.slider_center__tablet,T=this.settings.slider_center__mobile;this.settings.slider_pagination_style==="progress"&&(o="progressbar");const j=this.settings.sale_badge_type;let $=this.settings.slider_speed,A=this.settings.slider_speed__tablet,H=this.settings.slider_speed__mobile;const E=function(i,r={},n=""){return window.innerWidth>1024&&i[0]&&(r[`${n}`]=i[0]),window.innerWidth<=1024&&window.innerWidth>768&&i[1]?r[`${n}`]=i[1]:i[0]&&(r[`${n}`]=i[0]),window.innerWidth<768&&i[2]?r[`${n}`]=i[2]:i[1]?r[`${n}`]=i[1]:i[0]&&(r[`${n}`]=i[0]),r};let D=e.querySelectorAll(".ecom-collection__product-item");D&&D.forEach(function(i){let r=i.querySelector(".ecom-collection__product-quantity-input"),n=i.querySelector(".ecom-collection__quantity-controls-plus"),l=i.querySelector(".ecom-collection__quantity-controls-minus");l&&l.addEventListener("click",function(){r.stepDown(),r.dispatchEvent(new Event("change"))}),n&&n.addEventListener("click",function(){r.stepUp(),r.dispatchEvent(new Event("change"))}),r&&r.addEventListener("change",function(c){let u=i.querySelector("a.ecom-collection__product-submit");if(c.target.value>parseInt(c.target.max)&&(c.target.value=parseInt(c.target.max)),u){let s=u.getAttribute("href");u.setAttribute("href",s.replace(/quantity=(\d*)/gm,`quantity=${c.target.value}`))}})});function P(i=!1,r){const n=e.querySelector(".ecom-paginate__progress-bar--outner"),l=e.querySelector(".ecom-paginate__progress-bar--inner"),c=e.querySelector(".ecom-paginate__progress-text");if(!S||!t||!n||!l||!c)return;let{total:u,initProduct:s}=n&&n.dataset,m=c&&c.dataset.text,p=0,d=1,b=0,v=0;s=parseInt(s),i?(d=1,b=s*r):(window.location.href.match(/page=\d*/gm)&&(p=new URL(window.location.href).searchParams.get("page"),p===1?d=1:d=s*(p-1)+1),b=d+s-1),b>u&&(b=u),v=Math.round(b/u*100),l.style.width=`${v}%`,m=m.replace("{_start}",d),m=m.replace("{_end}",b),m=m.replace("{_total}",u),c.innerText=m}P(!1,1);function F(i,r){var n=r.variantIdField.closest(".ecom-collection__product-item");let l=n.querySelector(".ecom-collection__product-submit"),c=n.querySelector(".ecom-collection__product-quantity-input"),u=n.querySelector(".ecom-collection__product-price"),s=n.querySelector(".ecom-collection__product-price--regular"),m=n.querySelector(".ecom-unit-price");s&&s.classList.add("ecom-collection__product--compare-at-price");let p=n.querySelector(".ecom-collection__product-price--bage-sale"),d=n.querySelector(".ecom-collection__product-badge--sale"),b=n.querySelector(".ecom-collection__product-badge--sold-out"),v=n.querySelector(".ecom-collection__product-item-sku-element"),y="";if(i===null){let h=n.querySelector('select[name="variant_id"]'),w=n.querySelector(".product-json"),V=null;try{V=JSON.parse(w.innerHTML)}catch(O){return 1}let C=n.querySelector("select#"+h.id+"-option-0");if(!C)return;const et=C.value;et&&V.variants.forEach(function(O){if(O.options.includes(et)){i=O;return}})}if(i){if(u&&(u.innerHTML=window.EComposer.formatMoney(i.price)),s&&(s.innerHTML=window.EComposer.formatMoney(i.compare_at_price)),m){i.unit_price?m.style.display="block":m.style.display="none";const h=m.querySelector(".ecom-ground-price_unit-price");h&&(h.innerHTML=window.EComposer.formatMoney(i.unit_price))}if(i.compare_at_price>i.price){s&&(s.style.display="inherit");let h="";h=e.querySelector(".ecom-collection__product-main").dataset.sale,e.querySelector(".ecom-collection__product-main").dataset.translate=="false"&&(h=M),d&&b&&(d.style.display="block",b.style.display="none"),j==="amount"?(y=i.compare_at_price-i.price,p&&(p.style.display="inherit",p.innerHTML=h.replace(/\{{.*\}}/g,window.EComposer.formatMoney(y)))):(y=(i.compare_at_price-i.price)*100/i.compare_at_price,p&&(p.style.display="inherit",p.innerHTML=h.replace(/\{{.*\}}/g,Math.round(y))))}else s&&(s.style.display="none"),d&&b&&(d.style.display="none",b.style.display="none"),p&&(p.style.display="none",p.innerHTML="");if(v&&(i.sku?(v.querySelector(".ecom-collection__product-item-sku").innerHTML=i.sku,v.style.display="flex"):v.style.display="none"),i.featured_image){let h=n.querySelector(".ecom-collection__product-media img");if(!g){let w=h.closest("div");w.classList.add("ecom-product-image-loading"),h.setAttribute("src",i.featured_image.src),h.removeAttribute("srcset"),h.addEventListener("load",function(){w.classList.remove("ecom-product-image-loading")})}}if(i.options.length,l)if(i.available){const h=l.closest(".ecom-collection__product--wrapper-items");if(h.dataset.iconAdd&&l.querySelector(".ecom-collection__product-add-cart-icon")&&(l.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=h.dataset.iconAdd),!i.inventory_management||i.inventory_management&&i.inventory_quantity>0){if(l.removeAttribute("disabled"),c){let w=c.closest(".ecom-collection__product-quantity--wrapper");w&&(w.style.display="flex"),c.style.display="flex",i.inventory_management?c.max=i.inventory_quantity:c.max=9999}l.classList.add("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-add-cart")}else if(i.inventory_policy=="continue"&&i.inventory_quantity<=0){if(l.removeAttribute("disabled"),c){let w=c.closest(".ecom-collection__product-quantity--wrapper");w&&(w.style.display="flex"),c.max=9999,c.style.display="flex"}l.classList.add("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-pre-order")}l.dataset.childName="add_to_cart_button",l.dataset.childTitle="Add to cart button"}else{if(d&&b&&(d.style.display="none",b.style.display="block"),t&&l.setAttribute("disabled","disabled"),c){let w=c.closest(".ecom-collection__product-quantity--wrapper");w&&(w.style.display="none"),c.style.display="none"}const h=l.closest(".ecom-collection__product--wrapper-items");h.dataset.iconSoldout&&l.querySelector(".ecom-collection__product-add-cart-icon")&&(l.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=h.dataset.iconSoldout),l.classList.add("ecom-collection__product-form__actions--soldout"),l.classList.remove("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--unavailable"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-sold-out"),l.dataset.childName="sold_out_button",l.dataset.childTitle="Sold out button"}}else u.html=window.EComposer.formatMoney(0),s&&(s.innerHTML=window.EComposer.formatMoney(0),s.style.display="none"),l&&(l.setAttribute("disabled","disabled"),l.classList.add("ecom-collection__product-form__actions--unavailable"),l.classList.remove("ecom-collection__product-form__actions--add"),l.classList.remove("ecom-collection__product-form__actions--soldout"),l.querySelector(".ecom-add-to-cart-text").innerHTML=l.getAttribute("data-text-unavailable"))}function I(i){i.classList.add("ecom-swatch-init");let r=i.querySelector(".ecom-collection__product-form");if(!r)return;let n=r.querySelector('select[name="variant_id"]'),l=i.querySelector(".product-json"),c=null;try{c=JSON.parse(l.innerHTML)}catch(u){return 1}new window.EComposer.OptionSelectors(n.id,{product:c,onVariantSelected:F,enableHistoryState:!1}),i.querySelectorAll(".ecom-collection__product-swatch-item").forEach(function(u){u.addEventListener("click",function(){g=!1;var s=this.closest("li");if(s.classList.contains("ecom-product-swatch-item--active"))return!1;s.parentNode.querySelectorAll(".ecom-product-swatch-item--active").forEach(function(b){b.classList.remove("ecom-product-swatch-item--active")}),s.classList.add("ecom-product-swatch-item--active");var m=s.getAttribute("data-option-index"),p=s.getAttribute("data-value");let d=i.querySelector("select#"+n.id+"-option-"+m);d.value=p,d.dispatchEvent(new Event("change"))})}),i.querySelectorAll("select.ecom-collection__product-swatch-select").forEach(function(u){u.addEventListener("change",function(){var s=this,m=s.getAttribute("data-option-index"),p=s.value;i.querySelectorAll("select#"+n.id+"-option-"+m).forEach(function(d){d.value=p,d.dispatchEvent(new Event("change"))})})})}if(this.settings.layout==="slider"){let i=this.$el,r=i.querySelector(".ecom-swiper-container"),n=r&&r.dataset.optionSwiper;if(!n)return;n=JSON.parse(n),n.pagination={el:i.querySelector(".ecom-swiper-pagination"),type:o,clickable:!0},n.navigation={nextEl:i.querySelector(".ecom-swiper-button-next"),prevEl:i.querySelector(".ecom-swiper-button-prev")},n.autoHeight=!1,n.on={init:function(){this.el.classList.add("ecom-swiper-initialized")}};let l=[$,A,H];if(!t)setTimeout(function(){n=E(l,n,"speed"),n=E([z,L,T],n,"centeredSlides"),new window.EComSwiper(r,n)},200);else{n=E(l,n,"speed"),n=E([z,L,T],n,"centeredSlides");const u=new window.EComSwiper(r,n);n.autoplay.enabled&&(u.on("touchStart",function(s,m){s.params.speed=300,s.autoplay.stop()}),u.on("touchEnd",function(s,m){window.innerWidth>1024&&$&&(s.params.speed=$),window.innerWidth<=1024&&window.innerWidth>768&&A?s.params.speed=A:$&&(s.params.speed=$),window.innerWidth<768&&H?s.params.speed=H:A?s.params.speed=A:$&&(s.params.speed=$),s.autoplay.start()}))}}_.forEach(I);const R=function(i){i.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(r){r.addEventListener("click",function(n){this.style.display="none";let l=this.closest(".ecom-collection__product-item");l.querySelectorAll(".ecom-collection__product-variants").forEach(function(c){c.classList.add("ecom-active")}),l.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(c){c.style.display="inherit"})})}),i.querySelectorAll(".ecom-collection__product-close").forEach(function(r){r.addEventListener("click",function(n){let l=this.closest(".ecom-collection__product-item");l.querySelectorAll(".ecom-collection__product-variants").forEach(function(c){c.classList.remove("ecom-active")}),l.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach(function(c){c.style.display="none"}),l.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach(function(c){c.style.display="inherit"})})})};R(e);const W=e.querySelector(".ecom-collection__product-main");let x=W.dataset,q=W.dataset.countdownShows;const f=/\[([^\]]+)\]/gm;var k="";if(q.indexOf("week")>=0&&x.week){let i="",r=x.week.replace(f,(...n)=>(i=n[1],""));k+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">
                                <span class="ecom-collection__product-time--number">
                                    ${i}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${r}
                                </span>
                            </div>`}if(q.indexOf("day")>=0&&x.day){let i="",r=x.day.replace(f,(...n)=>(i=n[1],""));k+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${r}
                                    </span>
                                </div> `}if(q.indexOf("hour")>=0&&x.hour){let i="",r=x.hour.replace(f,(...n)=>(i=n[1],""));k+=`
                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">
                                <span class="ecom-collection__product-time--number">
                                    ${i}
                                </span>
                                <span class="ecom-collection__product-time--label">
                                    ${r}
                                </span>
                            </div>
                        `}if(q.indexOf("minute")>=0&&x.minute){let i="",r=x.minute.replace(f,(...n)=>(i=n[1],""));k+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${r}
                                    </span>
                                </div>
                            `}if(q.indexOf("second")>=0&&x.second){let i="",r=x.second.replace(f,(...n)=>(i=n[1],""));k+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">
                                    <span class="ecom-collection__product-time--number">
                                        ${i}
                                    </span>
                                    <span class="ecom-collection__product-time--label">
                                        ${r}
                                    </span>
                                </div>`}function J(i){let r=this.closest(".ecom-collection__product-countdown-wrapper"),n=r.querySelector(".ecom-collection__product-countdown-progress-bar"),l=r.querySelector(".ecom-collection__product-countdown-progress-bar--timer"),c=this.getAttribute("data-ecom-countdown-from")||0;if(this.innerHTML=i.strftime(k),n&&c){let u=new Date().getTime(),s=new Date(c),m=s.getTime(),p=i.finalDate.getTime();if(m<u&&p>m){n.style.removeProperty("display");let d=p-m,b=p-u,v=Math.round(b*100/d)+"%";l.style.width=v}else n.style.display="none"}}function Y(i){if(i.dataset.ecomCountdown){if(i.dataset.ecomCountdownFrom&&new Date().getTime()>new Date(i.dataset.ecomCountdown).getTime()&&t)return i.closest(".ecom-collection__product-countdown-wrapper").style.display="none",!1;window.EComCountdown&&window.EComCountdown(i,new Date(i.dataset.ecomCountdown),J),i.addEventListener("stoped.ecom.countdown",()=>{i.closest(".ecom-collection__product-countdown-wrapper").style.display="none"})}}if(e.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(i){Y(i)}),t){const i=e.querySelector(".ecom-collection__product-main");let r=1;const n=function(u){u.preventDefault();const s=this.dataset.get,m=this.closest(".ecom-sections[data-section-id]"),p=e.closest(".ecom-row.ecom-section");if(!s||!m||!m.dataset.sectionId)return;const d=m.dataset.sectionId,b=`${s}&section_id=${d}`;r++,P(!0,r),this.classList.add("ecom-loading"),c(b,m,this,"loadmore",p)},l=function(u){function s(p,d){new IntersectionObserver((v,y)=>{v.forEach(h=>{h.isIntersecting&&(d.cb?d.cb(p):m(h.target),y.unobserve(h.target))})},d).observe(p)}function m(p){const d=p.dataset.get,b=p.closest(".ecom-sections[data-section-id]"),v=p.closest(".ecom-row.ecom-section");if(!d||!b||!b.dataset.sectionId)return;const y=b.dataset.sectionId,h=`${d}&section_id=${y}`;a&&(e.classList.add("ecom-doing-scroll"),c(h,b,p,"infinite",v))}s(u,{})},c=function(u,s,m,p,d){a=!1,async function(v){return(await fetch(v,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()}(u).then(function(v){const y=document.createElement("div");y.innerHTML=v;const h=y.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection .ecom-collection__product--wrapper-items");if(!h)return;const w=d.querySelector(".ecom-collection__product--wrapper-items"),V=d.querySelector(".ecom-products-pagination-loadmore");for(;h.firstChild;)w.appendChild(h.firstChild);if(h.parentNode.removeChild(h),p==="loadmore"){const C=y.querySelector(".ecom-products-pagination-loadmore");C?V.innerHTML=C.innerHTML:V.remove()}else{m.remove();const C=y.querySelector(".ecom-products-pagination-infinite");C&&(w.after(C),l(C))}i.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:i}}))}).finally(function(){window.EComposer&&window.EComposer.initQuickview(),a=!0,e.classList.remove("ecom-doing-scroll"),m.classList.remove("ecom-loading")})};if(i&&i.dataset.pagination){const u=i.dataset.pagination;if(u==="loadmore")e.querySelector(".ecom-products-pagination-loadmore-btn")&&e.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",n);else if(u==="infinit"){const s=e.querySelector(".ecom-products-pagination-infinite");if(!s)return;l(s)}}i.addEventListener("ecom-products-init",function(u){const s=u.detail.wrapper;if(!s)return;if(i&&i.dataset.pagination){const p=i.dataset.pagination;if(p==="loadmore")e.querySelector(".ecom-products-pagination-loadmore-btn")&&e.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",n);else if(p==="infinit"){const d=e.querySelector(".ecom-products-pagination-infinite");d&&l(d)}}s.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").length&&s.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").forEach(I),s.querySelectorAll(".ecom-collection__product-countdown-time").length&&s.querySelectorAll(".ecom-collection__product-countdown-time").forEach(function(p){Y(p)}),R(s),s.querySelector(".ecom-products-pagination-loadmore-btn")&&s.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",n),window.EComposer&&typeof window.EComposer.init=="function"&&window.EComposer.init(),U(s);const m=s.querySelector(".ecom-collection__product--wishlist-wrapper");Z(m)})}function U(i){if(i&&i.dataset.reviewPlatform)switch(i.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(r){console.info(r.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(r){console.info(r.message)}e.querySelectorAll('[data-average-rating="0.00"]').forEach(function(r){r.style.display="block !important"})}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break;case"lai-reviews":typeof window.SMARTIFYAPPS!="undefined"&&window.SMARTIFYAPPS.rv.installed&&window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();break}}function Z(i){if(i)switch(i.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".ecom-collection__product-wishlist-button");break;case"wishlist-hero":e.querySelectorAll(".wishlist-hero-custom-button").forEach(function(r){var n=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:r});document.dispatchEvent(n)});break}}if(!t){const i=e.querySelector(".ecom-collection__product-main");U(i);const r=e.querySelector(".ecom-collection__product--wishlist-wrapper");Z(r)}if(this.settings.enable_preload){var nt=e.querySelectorAll(".ecom-collection__product-item");nt.forEach(function(i){i.addEventListener("mouseenter",function(){let r=document.createElement("link");r.rel="prefetch",document.head.appendChild(r);var n=this.querySelector("a.ecom-collection__product-item-information-title").getAttribute("href");r.href=n},{once:!0})})}if(this.settings.show_compare&&!t){var at=e.querySelectorAll(".ecom-product__compare-link");at.forEach(function(i){i.addEventListener("click",function(){this.classList.contains("ecom-product__compare-link-added")?this.classList.remove("ecom-product__compare-link-added","ecom-button-active"):this.classList.add("ecom-product__compare-link-added","ecom-button-active")})})}if(this.settings.show_wishlist&&!t){var st=e.querySelectorAll(".ecom-product__wishlist-link");st.forEach(function(i){i.addEventListener("click",function(){this.classList.contains("ecom-product__wishlist-link-added")?this.classList.remove("ecom-product__wishlist-link-added","ecom-button-active"):this.classList.add("ecom-product__wishlist-link-added","ecom-button-active")})})}

                    });
                    
                        document.querySelectorAll('.ecom-o2ch5r5ypps').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-o2ch5r5ypps', settings: {"show_featured_media":false,"bage_sale":"-{{sale}}%","sale_badge_type":"percent","slider_speed":200,"layout":"grid","enable_preload":false,"show_compare":false,"show_wishlist":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-islet8iudb"]=  window.__ectimmers["ecom-islet8iudb"] || {};
const t=this.$el;if(!t)return!1;const n=t.querySelector(".ecom-swiper-container"),e=this.settings,b=this.settings.slider_loop,f=this.settings.slider_center,i=this.settings.slider_center__tablet,a=this.settings.slider_center__mobile;if(this.settings.slider_group,this.settings.slider_items,this.settings.slider_group__tablet,this.settings.slider_items__tablet,this.settings.slider_group__mobile,this.settings.slider_items__mobile,!n)return;var o=n.dataset.optionSwiper;try{o=o?JSON.parse(o):{}}catch(s){o={}}o.navigation||(o.navigation={}),o.pagination||(o.pagination={});const u=function(s,r={},m=""){return m=="loop"?((window.innerWidth>1024&&(s.items.length<s.slider_group+s.slider_items||s.slider_autoplay)||window.innerWidth<=1024&&window.innerWidth>768&&(s.items.length<s.slider_group__tablet+s.slider_items__tablet||s.slider_autoplay)||s.items.length<s.slider_group__mobile+s.slider_items__mobile||s.slider_autoplay)&&(r.loop=!1),r):(window.innerWidth>1024&&s.speed&&(r[`${m}`]=s[0]),window.innerWidth<=1024&&window.innerWidth>768&&s[1]?r[`${m}`]=s[1]:s[0]&&(r[`${m}`]=s[0]),window.innerWidth<768&&s[2]?r[`${m}`]=s[2]:s[1]?r[`${m}`]=s[1]:s[0]&&(r[`${m}`]=s[0]),r)};o.pagination.el=t.querySelector(".ecom-swiper-pagination"),o.navigation.nextEl=t.querySelector(".ecom-swiper-button-next"),o.navigation.prevEl=t.querySelector(".ecom-swiper-button-prev"),o.pagination.renderBullet=(s,r)=>`<span class="${r}">
                            ${this.settings.items[s]&&this.settings.items[s].slider_pagination_image?`<img src="${this.settings.items[s].slider_pagination_image}" loading="lazy">`:""}</span>`,o.on={init:()=>{setTimeout(()=>{n.classList.remove("ecom-d-hide")})}},b&&(o.loop=!0,o=u(e,o,"loop")),o=u([f,i,a],o,"centeredSlides"),this.settings.hasOwnProperty("slider_layout")&&this.settings.slider_layout=="vertical"&&(o.direction="vertical"),new window.EComSwiper(n,Object.assign(o,{allowTouchMove:this.isLive})),window.addEventListener("resize",()=>{n.swiper.update()})

                    });
                    
                        document.querySelectorAll('.ecom-islet8iudb').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-islet8iudb', settings: {"slider_loop":false,"slider_items":1,"slider_items__tablet":1,"slider_items__mobile":1,"items":[{"name":"Joshua Godbee","useRating":true,"rating":"5","ratingIcon":"<svg version=\"1.1\" id=\"lni_lni-star-fill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" fill=\"currentColor\">\n<path d=\"M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9\n\tc-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z\"></path>\n</svg>","text":"\"I do image designs that many are used for laser etching on cups. So I also etch my designs on cups using the 10w.\"","title":"Falcon 10W"},{"name":"Marco Andrea Fichera","useRating":true,"rating":"5","ratingIcon":"<svg version=\"1.1\" id=\"lni_lni-star-fill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" fill=\"currentColor\">\n<path d=\"M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9\n\tc-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z\"></path>\n</svg>","text":"“I am a designer and mainly use laser to integrate wooden parts into my projects. It happens that they ask me for objects such as key rings, plates and writings, photo engravings (like this example) and I do these jobs on request. ”","title":"Falcon2 22W"},{"name":"Andres Castro","useRating":true,"rating":"5","ratingIcon":"<svg version=\"1.1\" id=\"lni_lni-star-fill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" fill=\"currentColor\">\n<path d=\"M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9\n\tc-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z\"></path>\n</svg>","text":"“I started doing baseball cap customization business in October 2023, I now achieved a profit of $1,000 per order, and it usually only takes two days to complete a batch of orders. I am my own boss”","title":"Falcon2 40W"},{"name":"Heidi Ho","useRating":true,"rating":"5","ratingIcon":"<svg version=\"1.1\" id=\"lni_lni-star-fill\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" style=\"enable-background:new 0 0 64 64;\" xml:space=\"preserve\" fill=\"currentColor\">\n<path d=\"M59.7,23.9l-18.1-2.8L33.4,3.9c-0.6-1.2-2.2-1.2-2.8,0l-8.2,17.3L4.4,23.9c-1.3,0.2-1.8,1.9-0.8,2.8l13.1,13.5l-3.1,18.9\n\tc-0.2,1.3,1.1,2.4,2.3,1.6l16.3-8.9l16.2,8.9c1.1,0.6,2.5-0.4,2.2-1.6l-3.1-18.9l13.1-13.5C61.4,25.8,61,24.1,59.7,23.9z\"></path>\n</svg>","text":"“As a full-time mom, I create and sell custom products on Etsy, turning my passion into profit. I now share my laser crafting knowledge on social media to inspire other women to start their own ventures.”","title":"Falcon2 22W"}],"slider_layout":"horizontal"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-awsdo51w13s"]=  window.__ectimmers["ecom-awsdo51w13s"] || {};
var oe,ae;if(!this.$el)return!1;const e=this,t=this.$el,i=this.isLive,p=this.settings.position_zoom?this.settings.position_zoom:1,_={width:this.settings.zoom_width,height:this.settings.zoom_height},a=t.closest(".ecom-product-form--single");window.innerWidth>768,window.innerWidth<768,t.closest(".ecom-row"),window.matchMedia("only screen and (max-width: 768px)");const C=this.settings.show_thumbnails?this.settings.show_thumbnails:!1,P=this.settings.layout?this.settings.layout:"slider",q=this.settings.enable_zoom?this.settings.enable_zoom:!1;var $,x,M=this.settings.thumbnail_position,j=this.settings.thumbnail_position__tablet,B=this.settings.thumbnail_position__mobile,V=!!this.settings.show_pagination,T=(oe=this.settings.enable_gallery)!=null?oe:!1,E=(ae=this.settings.gallery_name)!=null?ae:!1,I=this.settings.disable_auto_height;function A(){if(P==="slider")try{if(C){const r=e.$el.querySelector(".ecom-product-single__media--thumbs");let h=JSON.parse(r.dataset.breakpoints);Object.keys(h).forEach(y=>{let c=h[y].__screen_name,H="thumbnail_position";h[y].direction=["row","row-reverse"].includes(h[y][H])?"vertical":"horizontal"}),r.hasChildNodes()&&($=new window.EComSwiper(r,{freeMode:!1,centeredSlides:!1,loop:!1,centeredSlidesBounds:!0,slideToClickedSlide:!0,autoHeight:!!(["row","row-reverse"].includes(M)&&window.screen.width>1024||["row","row-reverse"].includes(j)&&(window.screen.width>=768||window.screen.width<=1024)||["row","row-reverse"].includes(B)&&window.screen.width<768),navigation:{nextEl:e.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-next"),prevEl:e.$el.querySelector(".ecom-product-single__media--thumbs .ecom-swiper-button-prev")},allowTouchMove:i,watchSlidesProgress:!0,grabCursor:!0,centerInsufficientSlides:!1,breakpoints:h,direction:["row","row-reverse"].includes(M)?"vertical":"horizontal",on:{slideChangeTransitionEnd:function(){},breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},init:function(){setTimeout(()=>{this.el&&this.el.classList.remove("ecom-product-single__init-thumb-hidden")},500)}}}));let k=null;r.querySelectorAll("img").forEach(function(y){y.addEventListener("load",function(){clearTimeout(k),k=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})})}const m=t.querySelector(".ecom-product-single__media--featured");var o=m.dataset.breakpoints;o=o?JSON.parse(o):{0:{slidesPerView:1,spaceBetween:20}},x=new window.EComSwiper(m,{autoHeight:I!=null?I:!0,lazy:!0,allowTouchMove:i,pagination:V?{el:m.querySelector(".ecom-swiper-pagination"),dynamicBullets:!0,clickable:!0}:!1,navigation:{nextEl:t.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-next"),prevEl:t.querySelector(".ecom-product-single__media--featured .ecom-swiper-button-prev")},thumbs:C&&$?{swiper:$}:void 0,noSwiping:!0,longSwipes:!0,touchStartPreventDefault:!0,noSwipingSelector:"model-viewer",noSwipingClass:"ecom-product-single__media--model",grabCursor:!0,preloadImages:!0,breakpoints:o,on:{breakpoint:function(){setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)},slideChange:function(r){var k,y;if(T)return;r.activeIndex!==r.lastIndex&&(r.lastIndex=r.activeIndex+"");const h=a&&a.querySelector('[name="id"]');if(h){let c=null;if(!x||!x.slides[x.activeIndex])return;if(c=(y=(k=x.slides[x.activeIndex])==null?void 0:k.dataset)==null?void 0:y.variant_id,c){c=c+"";const H=h.value;(!H||!c.includes(H.toString()))&&(h.value=c.split(",")[0],h.dispatchEvent(new Event("swatch")))}}r.slides[r.activeIndex]&&q&&X(r.slides[r.activeIndex])},slideChangeTransitionEnd:function(r){var h,k;window.dispatchEvent(new window.Event("resize")),r.slides.forEach(y=>{if(y.classList.contains("ecom-swiper-slide-active")){let c=y.querySelector("video");c&&c.hasAttribute("autoplay")&&c.play()}else{let c=y.querySelector("iframe,video");c&&(c.nodeName==="IFRAME"?c.src=c.src:c.pause())}}),i&&(C&&$&&$.update(),r.allowTouchMove=!((k=(h=r.slides[x.activeIndex])==null?void 0:h.classList)!=null&&k.contains("ecom-swiper-no-swiping")))},init:function(r){r.slides[r.activeIndex]&&q&&X(r.slides[r.activeIndex])}}});let b=null;m.querySelectorAll("img").forEach(function(r){r.addEventListener("load",function(){clearTimeout(b),b=setTimeout(()=>window.dispatchEvent(new window.Event("resize")),500)})}),i||setTimeout(()=>{m.classList.remove("ecom-before-init")},200)}catch(m){console.info(m.message)}}A();async function O(o){return await(await window.fetch(o,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}})).json().then(b=>b.product)}async function R(){const o=t.querySelectorAll(".ecom-product-single__media--image img"),m=t&&t.querySelector(".ecom-product-single__media--featured .ecom-product-single__media--images-layout__slider"),b=m&&m.querySelectorAll(".ecom-product-single__media--image"),r=t&&t.querySelector(".ecom-product-single__media--featured"),h=t&&t.querySelector(".ecom-product-single__media--thumbs"),k=t&&t.querySelector(".ecom-product-single__media--slider .ecom-product-single__media--thumbs .ecom-swiper-wrapper"),y=h&&h.querySelectorAll(".ecom-product-single__media--thumbnail"),c=t&&t.querySelector(".ecom-product-single__media--grid .ecom-product-single__media--images-layout__grid"),H=c&&c.querySelectorAll(".ecom-product-single__media--image");let se=!0;if(o&&o.forEach(function(S,L){if(S.alt.includes("ecomposer-")){se=!1;return}}),se)return;let f=null,J=a&&a.querySelector(".ecom-product-single-select-id[name=id]");if(!J)return;const ne=a&&a.querySelector("#"+J.dataset.jsonProduct);if(!ne)return;try{f=JSON.parse(ne.innerHTML)}catch(S){return}let G=null;if(i&&window.Shopify&&window.Shopify.routes.root!="/"){let S=window.location.origin+"/products/"+f.handle+".json";G=await O(S),f.options_with_values=G.options,f.variants=G.variants}let U={detail:{variant:null}};U.detail.variant=f.variants.find(function(S){if(S.id==J.value)return S});let Y=t.querySelector("#ecom-single-product-default-variant"),ce=Y&&Y.innerText,le=Y.dataset.dontSetAlt;if(le&&le=="true")return;function re(S){if(S.detail.variant&&(S.target&&S.target.querySelector(".ecom-product-single__variant-picker-container"),T&&E)){let F=function(u){let n=u.options_with_values,l=[];E.includes(",")?E.split(",").forEach((v,g)=>{n&&n.forEach(function(w){w.name.trim().toLowerCase()===v.trim().toLowerCase()&&(l=l.concat({key:w.name.trim(),value:w.values}))})}):n&&n.forEach(function(s){if(s.name.trim().toLowerCase()===E.toLowerCase()){l=l.concat({key:s.name.trim(),value:s.values});return}});let d=[];return l&&l.forEach(function(s,v){s.value.forEach(g=>{L.option1==g&&d.push(`ecomposer-${s.key.toLowerCase()}-${L.option1.replaceAll(" ","-").toLowerCase()}`),L.option2==g&&d.push(`ecomposer-${s.key.toLowerCase()}-${L.option2.replaceAll(" ","-").toLowerCase()}`),L.option3==g&&d.push(`ecomposer-${s.key.toLowerCase()}-${L.option3.replaceAll(" ","-").toLowerCase()}`)})}),d},de=function(u,n,l,d,s){if(d&&n&&f&&l.length){n.innerHTML="",l.forEach(function(g){let w=g.querySelector("img").alt;if(!w.includes(","))F(f).includes(w.toLowerCase())&&(g.querySelector("img").removeAttribute("loading"),n.appendChild(g));else{w=w.split(","),w=w.map(function(ie){return ie.trim().toLowerCase()});let te=F(f).filter(ie=>w.indexOf(ie)!==-1);(K(te,w)||Q(te,w)&&te.length===ee(w))&&(g.querySelector("img").removeAttribute("loading"),n.appendChild(g))}}),n.style=s,u.prepend(n);const v=e.$el.querySelector(".ecom-product-single__media--thumbs");$&&($.destroy(),v.classList.add("ecom-product-single__init-thumb-hidden")),A()}},K=function(u,n){return u.sort().join()===n.sort().join()},Q=function(u,n){return u.every(d=>n.includes(d))},ee=function(u){const n=new Set;let l=0;for(const d of u){const s=d.indexOf("-",d.indexOf("-")+1),v=d.substring(10,s);n.has(v)||(n.add(v),l++)}return l},ue=function(u){const n=a&&a.querySelector(".ecom-product-single__media--grid_default");if(!n||!u||!f)return;let l=n&&n.querySelectorAll(".ecom-product-single__media--image");l.length&&(E&&T?l.forEach(function(d){d.style.display="none";let s=d.querySelector("img").alt;if(!s.includes(","))F(f).includes(s.toLowerCase())&&(d.style.display="block");else{s=s.split(","),s=s.map(function(g){return g.trim().toLowerCase()});let v=F(f).filter(g=>s.indexOf(g)!==-1);(K(v,s)||Q(v,s)&&v.length===ee(s))&&(d.style.display="block")}}):l.forEach(function(d){d.style.display="flex"}))},ge=function(u){if(u&&c&&f){c.innerHTML="";let n=[];H.forEach(function(l,d){let s=l.querySelector("img").alt;if(!s.includes(","))F(f).includes(s.toLowerCase())&&n.push(l);else{s=s.split(","),s=s.map(function(g){return g.trim().toLowerCase()});let v=F(f).filter(g=>s.indexOf(g)!==-1);(K(v,s)||Q(v,s)&&v.length===ee(s))&&n.push(l)}}),n.forEach(function(l,d){d==0||d>=5&&d%5==0||d%5!=0&&(d+1)%2==0&&d==n.length-1||d==1&&n.length==2?l.style.paddingTop=`${l.dataset.fullWidth}%`:l.style.paddingTop=`${l.dataset.halfWidth}%`,c.appendChild(l)})}},L=S.detail.variant;i&&window.Shopify&&window.Shopify.routes.root!="/"&&(L=f.variants.find(function(u){if(u.id==a.querySelector("[name=id]").value)return u}));const pe=k&&k.style,_e=m&&m.style;if(de(r,m,b,L,_e),de(h,k,y,L,pe),ue(L),ge(L),q){let u=t.querySelectorAll(".ecom-image-zoom");if(u.length==0)return;X(u),i&&u.forEach(function(n){n.querySelector("a")&&n.querySelector("a").addEventListener("click",function(l){l.preventDefault()})})}}}U&&ce==="false"&&(re(U),a&&a.addEventListener("ecomVariantChange",re))}if(T&&R(),t.querySelectorAll(".ecom-product-single__media--play-control").forEach(function(o){o.addEventListener("click",function(m){this.style.display="none",this.parentNode.querySelector("video").play()})}),!this.isLive)try{e.$el.querySelectorAll("model-viewer").forEach(function(o){const m=element.outerHTML;o.replaceWith(m)})}catch(o){console.info(o.message)}function z(o){if(o)return;const m=t.querySelectorAll("model-viewer");m&&m.forEach(b=>{if(b)try{new window.Shopify.ModelViewerUI(b)}catch(r){console.warn(r.message)}}),t.querySelectorAll("button").forEach(function(b){b.setAttribute("type","button")})}function Z(){if(!window.ShopifyXR)document.addEventListener("shopify_xr_initialized",function(){Z()});else{try{const o=e.$el.querySelector('[id^="Product-model-"]');o&&(window.ShopifyXR.addModels(JSON.parse(o.textContent)),o.remove())}catch(o){console.log(o.message)}window.ShopifyXR.setupXRElements()}}if(document.querySelector("model-viewer")&&!document.getElementById("ModelViewerStyle")){let o=document.createElement("link");o.id="ModelViewerStyle",o.rel="stylesheet",o.href="https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",o.media="print",o.onload=function(){this.media="all"},document.head.appendChild(o)}if(window.Shopify&&window.Shopify.loadFeatures([{name:"shopify-xr",version:"1.0",onLoad:Z},{name:"model-viewer-ui",version:"1.0",onLoad:z}]),this.settings.image_action&&this.settings.image_action==="lightbox"&&i){let o=this.$el.querySelectorAll("[ecom-modal]");o.length&&window.EComModal&&new window.EComModal(o,{gallery:!0,cssClass:["ecom-container-lightbox-"+this.id]})}if(this.settings.position_sticky&&window.innerWidth>1024&&t.parentElement&&(this.isLive?t.style.height="100%":t.parentElement.style.height="100%"),q){let o=t.querySelectorAll(".ecom-image-zoom");if(o.length==0)return;P!=="slider"&&X(o),i&&o.forEach(function(m){m.querySelector("a")&&m.querySelector("a").addEventListener("click",function(b){b.preventDefault()})})}function X(o){if(!(!i||window.innerWidth<768)&&window.EcomImgZoom)if(o.length>0)for(var m=0,b=o.length;m<b;m++)new window.EcomImgZoom(o[m],_);else new window.EcomImgZoom(o,_)}

                    });
                    
                        document.querySelectorAll('.ecom-awsdo51w13s').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-awsdo51w13s', settings: {"zoom_width":"500px","zoom_height":"500px","show_thumbnails":true,"layout":"slider","enable_zoom":false,"thumbnail_position":"column","thumbnail_position__tablet":"column","thumbnail_position__mobile":"column","show_pagination":false,"image_action":"lightbox","position_sticky":true},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);};window.addEventListener("load",()=>{
                let isAdmin = false;
                if(document.querySelector("#admin-bar-iframe")){
                    isAdmin = true;
                }
                if(!isAdmin) {
                    if(window.EComposerBrand) {
                        return;
                    } else {
                        window.EComposerBrand = true;
                    }
                }
                let a=document.querySelector("body"),b=document.createElement(Math.random().toString(36).replace(/\d*/g,"").substr(2,4));b.setAttribute("style",["position:relative","top: 0px","left: 0px","display: inline-block","height: 30px","line-height: 30px","font-size: 11px","width: 100%","text-align: center","opacity: 1","text-indent: 0","color: rgba(18, 18, 18, 0.75)","background: transparent","opacity: 0.8",""].join(" !important;")),b.innerHTML="Built with <a style='color: currentColor;text-decoration: none;' href=\"https://ecomposer.io/?utm_source=client-site&utm_medium=footer&utm_campaign=footer_branding&utm_term=links&utm_content="+window.location.origin+"\" target=\"_blank\">EComposer</a>" + (isAdmin ? ". Contact us or upgrade to remove branding" :""),a.appendChild(b)
            });