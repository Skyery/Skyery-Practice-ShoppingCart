(function(t){function e(e){for(var n,o,u=e[0],i=e[1],s=e[2],b=0,d=[];b<u.length;b++)o=u[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),c()}function c(){for(var t,e=0;e<a.length;e++){for(var c=a[e],n=!0,u=1;u<c.length;u++){var i=c[u];0!==r[i]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},r={app:0},a=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;a.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"043f":function(t,e,c){"use strict";c("472b")},"104a":function(t,e,c){"use strict";c("fd33")},1615:function(t,e,c){},"22e5":function(t,e,c){"use strict";c("1615")},3745:function(t,e,c){"use strict";c("cfd1")},4103:function(t,e,c){},"41ce":function(t,e,c){},"472b":function(t,e,c){},4761:function(t,e,c){"use strict";c("d498")},"4a16":function(t,e,c){"use strict";c("6e4f")},"526c":function(t,e,c){},"52df":function(t,e,c){},5465:function(t,e,c){"use strict";c("4103")},5472:function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r={id:"nav"},a={class:"nav-container"},o={class:"nav-left"},u=Object(n["f"])("流亡購物網"),i=Object(n["f"])("商品"),s={class:"nav-right"},l={class:"btn-logout"};function b(t,e,c,b,d,p){var O=Object(n["z"])("router-link"),j=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["g"])("div",r,[Object(n["g"])("div",a,[Object(n["g"])("div",o,[Object(n["g"])(O,{class:"logo",to:"/"},{default:Object(n["G"])((function(){return[u]})),_:1}),Object(n["g"])(O,{to:"/"},{default:Object(n["G"])((function(){return[i]})),_:1})]),Object(n["g"])("div",s,[Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["g"])(O,{to:"/cart"},{default:Object(n["G"])((function(){return[Object(n["f"])("購物車 ("+Object(n["B"])(b.cart_Items_Length)+")",1)]})),_:1})]),Object(n["g"])("li",{onMouseenter:e[3]||(e[3]=function(){return b.AuthStatusMenu&&b.AuthStatusMenu.apply(b,arguments)}),onMouseleave:e[4]||(e[4]=function(t){return b.activeLogout=!1})},[Object(n["g"])("a",{onClick:e[1]||(e[1]=function(){return b.AuthLink&&b.AuthLink.apply(b,arguments)})},Object(n["B"])(b.userName),1),Object(n["H"])(Object(n["g"])("div",l,[Object(n["g"])("span",{onClick:e[2]||(e[2]=function(){return b.Logout&&b.Logout.apply(b,arguments)})},"登出")],512),[[n["E"],b.activeLogout]])],32)])])])]),Object(n["g"])(j)],64)}c("1276"),c("ac1f");var d=c("260b"),p=(c("66ce"),c("ea7b"),{apiKey:"AIzaSyC2ouC97CV5e9MD5skeg3rWt2FJ4MBMsnU",authDomain:"vue-auth-c019f.firebaseapp.com",databaseURL:"https://vue-auth-c019f-default-rtdb.firebaseio.com",projectId:"vue-auth-c019f",storageBucket:"vue-auth-c019f.appspot.com",messagingSenderId:"228070067666",appId:"1:228070067666:web:07270c4e8bd7e95113cc0b"}),O=d["a"].initializeApp(p),j=O,f=c("5502"),v=c("6c02"),g={setup:function(){var t=Object(n["w"])(""),e=Object(n["w"])(!1),c=Object(f["b"])(),r=Object(v["c"])();Object(n["n"])((function(){j.auth().onAuthStateChanged((function(e){if(e){var c=j.auth().currentUser.email.split("@")[0];t.value=c}else t.value="登入"}))})),Object(n["p"])((function(){c.dispatch("Products/handInit"),c.dispatch("updateCartFromLocalStorage")}));var a=Object(n["c"])((function(){return c.getters.cartItemsLength})),o=function(){j.auth().signOut().then((function(){return r.push({path:"/login"})})).catch((function(t){return console.log(t.message)})),e.value=!1,r.push({path:"/"})},u=function(){"登入"!==t.value&&(e.value=!0)},i=function(){"登入"===t.value&&r.push({path:"/login"})};return{userName:t,activeLogout:e,cart_Items_Length:a,Logout:o,AuthStatusMenu:u,AuthLink:i}}};c("4761");g.render=b;var m=g,h=Object(n["J"])("data-v-332adb30");Object(n["u"])("data-v-332adb30");var C=Object(n["g"])("h1",null,"商品資訊",-1),_={class:"home"},y={class:"product-card-container"},I=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"商品"),Object(n["g"])("th",null,"價格"),Object(n["g"])("th",null,"加入購物車")])],-1),w={class:"footer-container"};Object(n["s"])();var k=h((function(t,e,c,r,a,o){var u=Object(n["z"])("ProductTable"),i=Object(n["z"])("Footer");return Object(n["r"])(),Object(n["e"])(n["a"],null,[C,Object(n["g"])("div",_,[Object(n["g"])("div",y,[Object(n["g"])("table",null,[I,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.getProducts,(function(t){return Object(n["r"])(),Object(n["e"])(u,{key:t.id,product:t},null,8,["product"])})),128))])]),Object(n["g"])("div",w,[Object(n["g"])(i)])])],64)})),D=(c("b0c0"),Object(n["J"])("data-v-4aca6de6"));Object(n["u"])("data-v-4aca6de6");var L={class:"price"},S={class:"btn-container"};Object(n["s"])();var B=D((function(t,e,c,r,a,o){var u=Object(n["z"])("slot-card");return Object(n["r"])(),Object(n["e"])("tbody",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,[Object(n["g"])("img",{src:r.props.product.url},null,8,["src"]),Object(n["g"])("span",{class:"productName",onMouseenter:e[1]||(e[1]=function(t){return r.getOffset(t)}),onMouseleave:e[2]||(e[2]=function(){return r.handLeave&&r.handLeave.apply(r,arguments)})},[Object(n["f"])(Object(n["B"])(r.props.product.name)+" ",1),Object(n["g"])(n["b"],{name:"slotTooltip"},{default:D((function(){return[Object(n["H"])(Object(n["g"])(u,{class:[{top:1==r.pos},{bottom:0==r.pos},{center:2==r.pos},{"top-sm":4==r.pos},{"bottom-sm":3==r.pos}]},{name:D((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.name),1)]})),category:D((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.category),1)]})),description_1:D((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.description_1),1)]})),description_2:D((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.description_2),1)]})),src:D((function(){return[Object(n["g"])("img",{src:r.props.product.url},null,8,["src"])]})),_:1},8,["class"]),[[n["E"],r.active]])]})),_:1})],32)]),Object(n["g"])("td",null,[Object(n["g"])("div",L,"$ "+Object(n["B"])(r.props.product.price),1)]),Object(n["g"])("td",null,[Object(n["g"])("div",S,[Object(n["g"])("button",{onClick:e[3]||(e[3]=function(t){return r.removeFromCart()})},"-"),Object(n["g"])("span",null,Object(n["B"])(r.product_count),1),Object(n["g"])("button",{onClick:e[4]||(e[4]=function(t){return r.addToCart()})},"+")])])])])})),T=Object(n["J"])("data-v-2a4193c0");Object(n["u"])("data-v-2a4193c0");var P={class:"hover-card"},F={class:"card-title"},H=Object(n["g"])("div",{class:"titleCurrencyBarL"},null,-1),z=Object(n["g"])("div",{class:"titleCurrencyBarR"},null,-1),J={class:"titleCurrencyText"},M={class:"card-content"},A=Object(n["g"])("div",{class:"currencySeparator"},null,-1),$={class:"description_Mod"},x=Object(n["g"])("div",{class:"currencySeparator"},null,-1),E={class:"description_Des"},U={class:"card-img"};Object(n["s"])();var N=T((function(t,e){return Object(n["r"])(),Object(n["e"])("div",P,[Object(n["g"])("div",F,[H,z,Object(n["g"])("div",J,[Object(n["g"])("span",null,[Object(n["y"])(t.$slots,"name")])])]),Object(n["g"])("div",M,[Object(n["y"])(t.$slots,"category"),A,Object(n["g"])("span",$,[Object(n["y"])(t.$slots,"description_1")]),x,Object(n["g"])("span",E,[Object(n["y"])(t.$slots,"description_2")])]),Object(n["g"])("div",U,[Object(n["y"])(t.$slots,"src")])])}));c("104a");const Y={};Y.render=N,Y.__scopeId="data-v-2a4193c0";var V=Y,R={props:["product"],components:{SlotCard:V},setup:function(t){var e=Object(n["w"])(!1),c=Object(n["w"])(0),r=Object(f["b"])(),a=Object(n["c"])((function(){return r.getters.productCount(t.product)})),o=function(){r.dispatch("removeFromCart",t.product)},u=function(){r.dispatch("addToCart",t.product)},i=function(){e.value=!1},s=function(t){e.value=!0;var n=window.innerWidth<767;n?t.clientY<window.innerHeight/2?c.value=3:c.value=4:t.clientY<200?c.value=0:t.clientY>700?c.value=1:c.value=2};return{props:t,active:e,pos:c,product_count:a,removeFromCart:o,addToCart:u,handLeave:i,getOffset:s}}};c("80c4");R.render=B,R.__scopeId="data-v-4aca6de6";var W=R,G=Object(n["J"])("data-v-9be98e32");Object(n["u"])("data-v-9be98e32");var K={class:"footer-content"},q=Object(n["g"])("h6",null,"本站為練習作品，不使用於任何商業營利或虛寶交易行為",-1),Q=Object(n["g"])("h6",null,"Copyright © 2021 TingHao. All rights reserved",-1);Object(n["s"])();var X=G((function(t,e){return Object(n["r"])(),Object(n["e"])("div",K,[q,Q])}));c("3745");const Z={};Z.render=X,Z.__scopeId="data-v-9be98e32";var tt=Z,et={name:"Home",components:{ProductTable:W,Footer:tt},setup:function(){var t=Object(f["b"])(),e=Object(n["c"])((function(){return t.getters["Products/getProducts"]}));return{getProducts:e}}};c("8c74");et.render=k,et.__scopeId="data-v-332adb30";var ct=et,nt=Object(n["J"])("data-v-59533dcc");Object(n["u"])("data-v-59533dcc");var rt=Object(n["g"])("h1",null,"購物車",-1);Object(n["s"])();var at=nt((function(t,e,c,r,a,o){var u=Object(n["z"])("CartCard"),i=Object(n["z"])("CartTotalPayment"),s=Object(n["z"])("CartCardEmpty");return Object(n["r"])(),Object(n["e"])(n["a"],null,[rt,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.items,(function(t){return Object(n["r"])(),Object(n["e"])(u,{key:t.id,product:t},null,8,["product"])})),128)),r.cartCount?(Object(n["r"])(),Object(n["e"])(i,{key:0})):(Object(n["r"])(),Object(n["e"])(s,{key:1}))],64)})),ot=Object(n["J"])("data-v-2bb0c686");Object(n["u"])("data-v-2bb0c686");var ut={class:"cart-card"},it={class:"content"},st={class:"btn-container"};Object(n["s"])();var lt=ot((function(t,e,c,r,a,o){var u=Object(n["z"])("slot-card");return Object(n["r"])(),Object(n["e"])("div",ut,[Object(n["g"])("div",it,[Object(n["g"])("div",null,[Object(n["g"])("span",{class:"productName",onMouseenter:e[1]||(e[1]=function(t){return r.getOffset(t)}),onMouseleave:e[2]||(e[2]=function(){return r.handLeave&&r.handLeave.apply(r,arguments)})},[Object(n["f"])(Object(n["B"])(r.props.product.name)+" ",1),Object(n["g"])(n["b"],{name:"slotTooltip"},{default:ot((function(){return[Object(n["H"])(Object(n["g"])(u,{class:[{top:1==r.pos},{bottom:0==r.pos},{center:2==r.pos},{"top-sm":4==r.pos},{"bottom-sm":3==r.pos}]},{name:ot((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.name),1)]})),category:ot((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.category),1)]})),description_1:ot((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.description_1),1)]})),description_2:ot((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.description_2),1)]})),src:ot((function(){return[Object(n["g"])("img",{src:r.props.product.url},null,8,["src"])]})),_:1},8,["class"]),[[n["E"],r.active]])]})),_:1})],32)]),Object(n["g"])("h4",null,"數量: "+Object(n["B"])(r.props.product.count),1),Object(n["g"])("h4",null,"小計: $"+Object(n["B"])(r.item_cost),1)]),Object(n["g"])("div",st,[Object(n["g"])("button",{class:"btn btn-attention",onClick:e[3]||(e[3]=function(t){return r.deleteFromCart()})},"刪除")])])})),bt={props:["product"],components:{SlotCard:V},setup:function(t){var e=Object(n["w"])(!1),c=Object(n["w"])(0),r=Object(f["b"])(),a=Object(n["c"])((function(){return t.product.price*t.product.count})),o=function(){r.dispatch("deleteFromCart",t.product)},u=function(){e.value=!1},i=function(t){e.value=!0;var n=window.innerWidth<767;n?t.clientY<window.innerHeight/2?c.value=3:c.value=4:t.clientY<200?c.value=0:t.clientY>700?c.value=1:c.value=2};return{props:t,active:e,pos:c,item_cost:a,deleteFromCart:o,handLeave:u,getOffset:i}}};c("5465");bt.render=lt,bt.__scopeId="data-v-2bb0c686";var dt=bt,pt=Object(n["J"])("data-v-28bc7f38");Object(n["u"])("data-v-28bc7f38");var Ot={class:"cart-card-empty"},jt=Object(n["g"])("h2",null,"購物車裡什麼也沒有！",-1),ft=Object(n["f"])("來去逛逛");Object(n["s"])();var vt=pt((function(t,e){var c=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["e"])("div",Ot,[jt,Object(n["g"])(c,{class:"btn btn-default",to:"/"},{default:pt((function(){return[ft]})),_:1})])}));c("4a16");const gt={};gt.render=vt,gt.__scopeId="data-v-28bc7f38";var mt=gt,ht=Object(n["J"])("data-v-1c0ce143");Object(n["u"])("data-v-1c0ce143");var Ct={class:"cartTotal"},_t={class:"cartTotal-title"},yt={class:"btn-container"},It=Object(n["f"])("繼續選購"),wt=Object(n["f"])("前往結帳");Object(n["s"])();var kt=ht((function(t,e,c,r,a,o){var u=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["e"])("div",Ct,[Object(n["g"])("div",_t,[Object(n["g"])("h3",null,"總計 : $"+Object(n["B"])(r.cart_total),1),Object(n["g"])("button",{class:"btn btn-attention",onClick:e[1]||(e[1]=function(){return r.clearCart&&r.clearCart.apply(r,arguments)})},"清空購物車")]),Object(n["g"])("div",yt,[Object(n["g"])(u,{class:"btn",to:"/"},{default:ht((function(){return[It]})),_:1}),Object(n["g"])(u,{class:"btn btn-default",to:"/".concat(r.routerPath),onClick:r.CheckAuthStatus},{default:ht((function(){return[wt]})),_:1},8,["to","onClick"])])])})),Dt={setup:function(){var t=Object(f["b"])(),e=Object(n["w"])(""),c=Object(n["c"])((function(){return t.getters.cartTotal})),r=function(){j.auth().onAuthStateChanged((function(t){e.value=t?"order":"login"}))},a=function(){t.dispatch("clearCart")};return{cart_total:c,CheckAuthStatus:r,routerPath:e,clearCart:a}}};c("22e5");Dt.render=kt,Dt.__scopeId="data-v-1c0ce143";var Lt=Dt,St={name:"Cart",components:{CartCard:dt,CartTotalPayment:Lt,CartCardEmpty:mt},setup:function(){var t=Object(f["b"])(),e=Object(n["c"])((function(){return t.getters.cartItems})),c=Object(n["c"])((function(){return t.getters.cartItemsLength}));return Object(n["F"])(c,(function(t){})),{items:e,cartCount:c}}};c("d9cc");St.render=at,St.__scopeId="data-v-59533dcc";var Bt=St,Tt=Object(n["J"])("data-v-04bb02a4");Object(n["u"])("data-v-04bb02a4");var Pt={class:"cart-order"},Ft=Object(n["g"])("h1",null,"填寫訂單資料",-1),Ht=Object(n["g"])("label",null,"收件人姓名",-1),zt=Object(n["g"])("label",null,"Email",-1),Jt=Object(n["g"])("label",null,"電話",-1),Mt=Object(n["g"])("label",null,"地址",-1),At={class:"btn-container"},$t=Object(n["f"])("回購物車");Object(n["s"])();var xt=Tt((function(t,e,c,r,a,o){var u=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["e"])("div",Pt,[Ft,Object(n["g"])("form",{onSubmit:e[5]||(e[5]=Object(n["I"])((function(){return o.orderData&&o.orderData.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",null,[Ht,Object(n["H"])(Object(n["g"])("input",{type:"text",placeholder:"請輸入收件人姓名","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.userData.name=t})},null,512),[[n["D"],r.userData.name]])]),Object(n["g"])("div",null,[zt,Object(n["H"])(Object(n["g"])("input",{type:"text",placeholder:"請輸入Email","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.userData.email=t})},null,512),[[n["D"],r.userData.email]])]),Object(n["g"])("div",null,[Jt,Object(n["H"])(Object(n["g"])("input",{type:"text",placeholder:"請輸入電話","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.userData.phone=t})},null,512),[[n["D"],r.userData.phone,void 0,{lazy:!0}]])]),Object(n["g"])("div",null,[Mt,Object(n["H"])(Object(n["g"])("input",{type:"text",placeholder:"請輸入收件地址","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.userData.address=t})},null,512),[[n["D"],r.userData.address,void 0,{lazy:!0}]])]),Object(n["g"])("div",At,[Object(n["g"])(u,{class:"btn",to:"/cart"},{default:Tt((function(){return[$t]})),_:1}),Object(n["g"])("button",{type:"submit",class:["btn btn-default",{"btn-notAllowed":r.isCheck}]}," 提交訂單 ",2)])],32)])})),Et={setup:function(){var t=Object(n["v"])({name:"",email:"",phone:"",address:"",transactionID:0}),e=Object(n["w"])(!0),c=Object(n["v"])({phone:!1,address:!1}),r=/^[0-9]*[1-9][0-9]*$/,a=Object(v["c"])();return Object(n["n"])((function(){j.auth().onAuthStateChanged((function(e){if(e){var c=j.auth().currentUser.email,n=c.split("@")[0];t.name=n,t.email=c}else a.push({path:"/login"})}))})),setTimeout((function(){Object(n["F"])((function(){return t.phone}),(function(t){var e=r.test(t);return t.length<8?(c.phone=!1,alert("電話不能小於8個字元")):e?void(c.phone=!0):(c.phone=!1,alert("電話須為數字"))})),Object(n["F"])((function(){return t.address}),(function(t){if(t.length<1)return c.address=!1,alert("收件地址為必填");c.address=!0}))}),1e3),Object(n["F"])(c,(function(t){t.phone&&t.address?e.value=!1:e.value=!0})),{userData:t,isCheck:e}},methods:{orderData:function(){this.$store.dispatch("addtoOrder",this.userData),this.$router.push({path:"/checkOut"})}}};c("bcd8");Et.render=xt,Et.__scopeId="data-v-04bb02a4";var Ut=Et,Nt=Object(n["J"])("data-v-38ab96f3");Object(n["u"])("data-v-38ab96f3");var Yt=Object(n["g"])("h1",null,"確認訂單",-1),Vt={class:"checkOut"},Rt={class:"product-card-container"},Wt=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"商品"),Object(n["g"])("th",null,"數量"),Object(n["g"])("th",null,"小計")])],-1);Object(n["s"])();var Gt=Nt((function(t,e,c,r,a,o){var u=Object(n["z"])("CartCheckProducts"),i=Object(n["z"])("CartCheckUser");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Yt,Object(n["g"])("div",Vt,[Object(n["g"])("div",Rt,[Object(n["g"])("table",null,[Wt,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.cart,(function(t){return Object(n["r"])(),Object(n["e"])(u,{key:t.id,product:t},null,8,["product"])})),128))])])]),Object(n["g"])(i,{order:r.order},null,8,["order"])],64)})),Kt=Object(n["J"])("data-v-d0a27c56"),qt=Kt((function(t,e,c,r,a,o){var u=Object(n["z"])("slot-card");return Object(n["r"])(),Object(n["e"])("tbody",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,[Object(n["g"])("span",{class:"productName",onMouseenter:e[1]||(e[1]=function(t){return r.getOffset(t)}),onMouseleave:e[2]||(e[2]=function(){return r.handLeave&&r.handLeave.apply(r,arguments)})},[Object(n["f"])(Object(n["B"])(r.props.product.name)+" ",1),Object(n["g"])(n["b"],{name:"slotTooltip"},{default:Kt((function(){return[Object(n["H"])(Object(n["g"])(u,{class:[{top:1==r.pos},{bottom:0==r.pos},{center:2==r.pos},{"top-sm":4==r.pos},{"bottom-sm":3==r.pos}]},{name:Kt((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.name),1)]})),category:Kt((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.category),1)]})),description_1:Kt((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.description_1),1)]})),description_2:Kt((function(){return[Object(n["f"])(Object(n["B"])(r.props.product.description_2),1)]})),src:Kt((function(){return[Object(n["g"])("img",{src:r.props.product.url},null,8,["src"])]})),_:1},8,["class"]),[[n["E"],r.active]])]})),_:1})],32)]),Object(n["g"])("td",null,Object(n["B"])(r.props.product.count),1),Object(n["g"])("td",null,"$"+Object(n["B"])(r.item_cost),1)])])})),Qt={props:["product"],components:{SlotCard:V},setup:function(t){var e=Object(n["w"])(!1),c=Object(n["w"])(0),r=Object(n["c"])((function(){return t.product.price*t.product.count})),a=function(){e.value=!1},o=function(t){e.value=!0;var n=window.innerWidth<767;n?t.clientY<window.innerHeight/2?c.value=3:c.value=4:t.clientY<200?c.value=0:t.clientY>700?c.value=1:c.value=2};return{props:t,active:e,pos:c,item_cost:r,getOffset:o,handLeave:a}}};c("e05c");Qt.render=qt,Qt.__scopeId="data-v-d0a27c56";var Xt=Qt,Zt=Object(n["J"])("data-v-13e3fbe7");Object(n["u"])("data-v-13e3fbe7");var te={class:"checkOutTotal"},ee=Object(n["g"])("td",null,"收件人姓名",-1),ce=Object(n["g"])("td",null,"電子信箱",-1),ne=Object(n["g"])("td",null,"收件人電話",-1),re=Object(n["g"])("td",null,"收件人地址",-1),ae={class:"checkOutTotal-container"};Object(n["s"])();var oe=Zt((function(t,e,c,r,a,o){return Object(n["r"])(),Object(n["e"])("div",te,[Object(n["g"])("table",null,[Object(n["g"])("tr",null,[ee,Object(n["g"])("td",null,Object(n["B"])(r.props.order.name),1)]),Object(n["g"])("tr",null,[ce,Object(n["g"])("td",null,Object(n["B"])(r.props.order.email),1)]),Object(n["g"])("tr",null,[ne,Object(n["g"])("td",null,Object(n["B"])(r.props.order.phone),1)]),Object(n["g"])("tr",null,[re,Object(n["g"])("td",null,Object(n["B"])(r.props.order.address),1)])]),Object(n["g"])("div",ae,[Object(n["g"])("span",null,"總計 : $"+Object(n["B"])(r.cart_total),1),Object(n["g"])("button",{class:"btn btn-default",onClick:e[1]||(e[1]=function(){return o.complet&&o.complet.apply(o,arguments)})},"確認付款")])])})),ue=(c("159b"),c("d3b7"),c("25f0"),c("a15b"),c("d81d"),{props:["order"],setup:function(t){var e=Object(f["b"])(),c=Object(n["c"])((function(){return e.getters.cartTotal}));return{cart_total:c,props:t}},methods:{complet:function(){var t=this.getTransactionID();this.$store.dispatch("addTransactionID",t);var e=this.$store.getters.cartItems,c=this.$store.getters.cartTotal,n=j.database().ref("orderList"),r={transactionID:this.props.order.transactionID,userData:{userName:this.props.order.name,userEmail:this.props.order.email,userPhone:this.props.order.phone,userAddress:this.props.order.address},orderContent:{product:[],total:c}};e.forEach((function(t){var e={productName:t.name,productCount:t.count,productPrice:t.price};r.orderContent.product.push(e)})),n.push(r),this.$store.dispatch("clearCart"),this.$router.push("/complet")},getTransactionID:function(){var t=function(t){return t=t.toString(),t[1]?t:"0"+t},e=function(e){var c=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),o=e.getMinutes(),u=e.getSeconds();return[c,n,r].map(t).join("")+[a,o,u].map(t).join("")};return e(new Date)}}});c("d6f8");ue.render=oe,ue.__scopeId="data-v-13e3fbe7";var ie=ue,se={components:{CartCheckProducts:Xt,CartCheckUser:ie},setup:function(){var t=Object(f["b"])(),e=Object(v["c"])(),c=Object(n["c"])((function(){return t.getters.orderList})),r=Object(n["c"])((function(){return t.getters.cartItems}));return Object(n["p"])((function(){"{}"===JSON.stringify(c.value)&&e.go(-1)})),Object(n["n"])((function(){j.auth().onAuthStateChanged((function(t){t||e.push("/login")}))})),{order:c,cart:r}}};c("5a55");se.render=Gt,se.__scopeId="data-v-38ab96f3";var le=se,be=Object(n["J"])("data-v-796ec64a");Object(n["u"])("data-v-796ec64a");var de={class:"cardComplet"},pe=Object(n["g"])("h1",null,"付款完成，感謝您的支持",-1),Oe=Object(n["f"])(" 訂單編號 : ");Object(n["s"])();var je=be((function(t,e,c,r,a,o){return Object(n["r"])(),Object(n["e"])("div",de,[pe,Object(n["g"])("h3",null,[Oe,Object(n["g"])("span",null,Object(n["B"])(r.transactionID),1)]),Object(n["g"])("button",{class:"btn btn-default",onClick:e[1]||(e[1]=function(){return r.backHome&&r.backHome.apply(r,arguments)})},"繼續購物")])})),fe={setup:function(){var t=Object(f["b"])(),e=Object(v["c"])();Object(n["n"])((function(){j.auth().onAuthStateChanged((function(t){t||e.push({path:"/login"})}))}));var c=Object(n["c"])((function(){return t.getters.transactionID})),r=function(){return e.push({path:"/"})};return{transactionID:c,backHome:r}}};c("ff17");fe.render=je,fe.__scopeId="data-v-796ec64a";var ve=fe,ge=Object(n["J"])("data-v-0f5970dc");Object(n["u"])("data-v-0f5970dc");var me={class:"login"},he=Object(n["g"])("h1",null,"登入",-1),Ce=Object(n["g"])("label",null,"Email : ",-1),_e=Object(n["g"])("label",null,"密碼 : ",-1),ye=Object(n["g"])("input",{type:"submit",value:"登入"},null,-1),Ie=Object(n["f"])(" 需要一個新帳戶嗎? "),we=Object(n["f"])(" 建立帳戶");Object(n["s"])();var ke=ge((function(t,e,c,r,a,o){var u=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["e"])("div",me,[he,Object(n["g"])("form",{onSubmit:e[3]||(e[3]=Object(n["I"])((function(){return r.Login&&r.Login.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",null,[Ce,Object(n["H"])(Object(n["g"])("input",{type:"text",placeholder:"請輸入Email","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.email=t})},null,512),[[n["D"],r.email]])]),Object(n["g"])("div",null,[_e,Object(n["H"])(Object(n["g"])("input",{type:"password",placeholder:"請輸入密碼","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.password=t})},null,512),[[n["D"],r.password]])]),ye,Object(n["g"])("p",null,[Ie,Object(n["g"])(u,{to:"/register"},{default:ge((function(){return[we]})),_:1})])],32)])})),De={name:"Login",setup:function(){var t=Object(n["w"])(""),e=Object(n["w"])(""),c=Object(v["c"])(),r=function(){j.auth().signInWithEmailAndPassword(t.value,e.value).then((function(){c.go(-1)})).catch((function(t){return console.log(t.message)}))};return{email:t,password:e,Login:r}}};c("043f");De.render=ke,De.__scopeId="data-v-0f5970dc";var Le=De,Se=Object(n["J"])("data-v-a0253714");Object(n["u"])("data-v-a0253714");var Be={class:"register"},Te=Object(n["g"])("h1",null,"註冊",-1),Pe=Object(n["g"])("label",null,"Email : ",-1),Fe=Object(n["g"])("label",null,"密碼 : ",-1),He=Object(n["g"])("input",{type:"submit",value:"註冊"},null,-1),ze=Object(n["f"])(" 你已經擁有帳戶? "),Je=Object(n["f"])(" 登入帳戶");Object(n["s"])();var Me=Se((function(t,e,c,r,a,o){var u=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["e"])("div",Be,[Te,Object(n["g"])("form",{onSubmit:e[3]||(e[3]=Object(n["I"])((function(){return r.Register&&r.Register.apply(r,arguments)}),["prevent"]))},[Object(n["g"])("div",null,[Pe,Object(n["H"])(Object(n["g"])("input",{type:"text",placeholder:"請輸入Email","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.email=t})},null,512),[[n["D"],r.email]])]),Object(n["g"])("div",null,[Fe,Object(n["H"])(Object(n["g"])("input",{type:"password",placeholder:"請輸入密碼","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.password=t})},null,512),[[n["D"],r.password]])]),He,Object(n["g"])("p",null,[ze,Object(n["g"])(u,{to:"/login"},{default:Se((function(){return[Je]})),_:1})])],32)])})),Ae=(c("5319"),{name:"Register",setup:function(){var t=Object(n["w"])(""),e=Object(n["w"])(""),c=Object(v["c"])(),r=function(){j.auth().createUserWithEmailAndPassword(t.value,e.value).then((function(){c.replace({path:"/login"})})).catch((function(t){return console.log(t.message)}))};return{email:t,password:e,Register:r}}});c("e995");Ae.render=Me,Ae.__scopeId="data-v-a0253714";var $e=Ae,xe=[{path:"/",name:"Home",component:ct},{path:"/cart",name:"Cart",component:Bt},{path:"/order",name:"Order",component:Ut},{path:"/checkOut",name:"CheckOut",component:le},{path:"/complet",name:"Complet",component:ve},{path:"/login",name:"Login",component:Le},{path:"/register",name:"Register",component:$e}],Ee=Object(v["a"])({history:Object(v["b"])(),routes:xe}),Ue=Ee,Ne=c("5530"),Ye=(c("7db0"),c("13d5"),c("4de4"),{namespaced:!0,state:{products:[]},getters:{getProducts:function(t){return t.products}},actions:{handInit:function(t){var e=t.commit,c=j.database().ref("products");c.once("value",(function(t){e("setProducts",t.val())}))}},mutations:{setProducts:function(t,e){t.products=e}}});function Ve(t){localStorage.setItem("cart",JSON.stringify(t))}var Re=Object(f["a"])({state:{cart:[],order:{}},getters:{productCount:function(t){return function(e){var c=t.cart.find((function(t){return t.id===e.id}));return c?c.count:0}},cartItems:function(t){return t.cart},cartItemsLength:function(t){return t.cart.length},cartTotal:function(t){return t.cart.reduce((function(t,e){return t+e.price*e.count}),0)},orderList:function(t){return t.order},transactionID:function(t){return t.order.transactionID}},actions:{clearCart:function(t){var e=t.commit;e("clearCart")},deleteFromCart:function(t,e){var c=t.commit;c("deleteFromCart",e)},removeFromCart:function(t,e){var c=t.commit;c("removeFromCart",e)},addToCart:function(t,e){var c=t.commit;c("addToCart",e)},updateCartFromLocalStorage:function(t){var e=t.commit;e("updateCartFromLocalStorage")},addtoOrder:function(t,e){var c=t.commit;c("addtoOrder",e)},addTransactionID:function(t,e){var c=t.commit;c("addTransactionID",e)}},mutations:{addTransactionID:function(t,e){t.order.transactionID=e},addtoOrder:function(t,e){t.order=e},clearCart:function(t){t.cart=[],Ve(t.cart)},deleteFromCart:function(t,e){var c=t.cart.find((function(t){return t.id===e.id}));c&&(t.cart=t.cart.filter((function(t){return t.id!==e.id}))),Ve(t.cart)},removeFromCart:function(t,e){var c=t.cart.find((function(t){return t.id===e.id}));c&&(c.count>1?c.count--:t.cart=t.cart.filter((function(t){return t.id!==e.id}))),Ve(t.cart)},addToCart:function(t,e){var c=t.cart.find((function(t){return t.id===e.id}));c?c.count++:t.cart.push(Object(Ne["a"])(Object(Ne["a"])({},e),{},{count:1})),Ve(t.cart)},updateCartFromLocalStorage:function(t){var e=localStorage.getItem("cart");e&&(t.cart=JSON.parse(e))}},modules:{Products:Ye}});Object(n["d"])(m).use(Re).use(Ue).mount("#app")},"5a55":function(t,e,c){"use strict";c("52df")},"6e4f":function(t,e,c){},"80c4":function(t,e,c){"use strict";c("e914")},"8c74":function(t,e,c){"use strict";c("5472")},b2a6:function(t,e,c){},b5fd:function(t,e,c){},bba2:function(t,e,c){},bcd8:function(t,e,c){"use strict";c("b5fd")},cfd1:function(t,e,c){},d498:function(t,e,c){},d6f8:function(t,e,c){"use strict";c("bba2")},d9cc:function(t,e,c){"use strict";c("e334")},e05c:function(t,e,c){"use strict";c("526c")},e334:function(t,e,c){},e914:function(t,e,c){},e995:function(t,e,c){"use strict";c("41ce")},fd33:function(t,e,c){},ff17:function(t,e,c){"use strict";c("b2a6")}});
//# sourceMappingURL=app.b211747d.js.map