(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],f=0,u=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/giftie/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"05fd":function(t,e){throw new Error("Module parse failed: Unexpected character '\0' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},"08f0":function(t,e,i){"use strict";i("956d")},"0b36":function(t,e,i){t.exports=i.p+"img/5.ca62d948.png"},1057:function(t,e,i){t.exports=i.p+"img/3.2d26e355.png"},"18c3":function(t,e,i){"use strict";i("babf")},"1acd":function(t,e,i){t.exports=i.p+"img/main-2.2ff907c3.png"},"1f7a":function(t,e,i){t.exports=i.p+"img/tasaki.1ddde5b4.png"},"226e":function(t,e,i){t.exports=i.p+"img/6.05d87493.png"},"29de":function(t,e,i){t.exports=i.p+"fonts/Muyao.009ea542.ttf"},"3e3e":function(t,e,i){t.exports=i.p+"img/ysl.4e63a3b1.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e623"),i("e379"),i("5dc8"),i("37e1");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app",attrs:{id:"app"}},[t.isShowGift?i("gift"):i("lottery",{on:{showGift:t.showGift}})],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lottery-component"},[i("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOptions}},[i("swiper-slide",{staticClass:"swiper-slide"},[i("home")],1),t._l(t.gifts,(function(t){return i("swiper-slide",{key:t.key,staticClass:"swiper-slide"},[i("gift-displayer",{attrs:{name:t.name,image:t.image,description:t.description}})],1)})),i("swiper-slide",{staticClass:"swiper-slide"},[i("turntable",{on:{success:t.handleTurntableSuccess}})],1)],2)],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lottery-home-component full-screen"},[n("img",{staticClass:"main-image",attrs:{src:i("1acd"),alt:""}}),n("div",{staticClass:"main"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._l(t.messages,(function(e){return n("p",{key:e.key,staticClass:"message"},[t._v(t._s(e.wording))])}))],2),n("div",{staticClass:"footer"},[n("span",[t._v("©️本活动最终解释权归")]),n("span",[t._v(" "+t._s(t.owner)+" ")]),n("span",[t._v("所有")])])])},l=[],p={EXIST_KEY:"HAS_GIFT",NAME_KEY:"GIFT_NAME",IMAGE_KEY:"GIFT_IMAGE_URL"},f=!0,u={title:"情人节抽奖",messages:[{key:"a",wording:"Only for Rita"},{key:"s",wording:"2024.02.14"}],owner:"Holten",timeout:5e3,targetGiftIndex:null},g=[{key:"q",name:"全身按摩(30min)",alias:"按摩(30min)",image:"./images/spa.png",description:"「奢华享受, 感受轻松」"},{key:"r",name:"全定制旅行",alias:"全定制旅行",image:"./images/travel.png",description:"「说走就走, 私享定制」"},{key:"i",name:"LAMER精华乳霜30ml",alias:"LAMER乳霜",image:"./images/lamer.png",description:"「柔韧修护, 纵享年轻」"},{key:"e",name:"专车券x3",alias:"专车券x3",image:"./images/car.png",description:"「风雨同舟, 伴你一路」"},{key:"w",name:"黄金(10g)",alias:"黄金(10g)",image:"./images/gold.png",description:"「金诚可贵, 情比金坚」"},{key:"t",name:"洗碗券x12",alias:"洗碗券x12",image:"./images/wash.png",description:"「每月一次, 轻松自在」"},{key:"y",name:"1314红包",alias:"1314",image:"./images/money.png",description:"「从今往后，我都会在你旁边」"},{key:"u",name:"YSL小金条口红",alias:"YSL小金条",image:"./images/ysl.png",description:"「直击你，非45°的美」"}],d={name:"LotteryHome",data:function(){return{title:"",messages:[],owner:""}},methods:{initConfig:function(){var t=u.title,e=u.messages,i=u.owner;document.title=t,this.title=t,this.messages=e,this.owner=i}},created:function(){this.initConfig()}},m=d,h=(i("08f0"),i("2877")),b=Object(h["a"])(m,c,l,!1,null,"0a7d8e9e",null),y=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lottery-gift-displayer-component full-screen"},[n("div",{staticClass:"gift-image-wrapper"},[n("img",{staticClass:"border-area",attrs:{src:i("6649"),alt:"Board"}}),n("img",{staticClass:"gift-image",attrs:{src:t.image,alt:"Gift"}})]),n("h2",{staticClass:"gift-name"},[t._v(t._s(t.name))]),n("p",{staticClass:"gift-desc"},[t._v(t._s(t.description))])])},v=[],x={name:"LotteryGiftDisplayer",data:function(){return{}},props:["name","image","description"],computed:{},methods:{}},_=x,k=(i("9226"),Object(h["a"])(_,w,v,!1,null,"592c6bfe",null)),S=k.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lottery-turntable-component full-screen"},[i("LuckyGrid",{ref:"luckyGrid",staticClass:"lucky-grid",attrs:{width:"300px",height:"300px",prizes:t.prizes,blocks:t.blocks,buttons:t.buttons,"default-style":t.defaultStyle,"active-style":t.activeStyle},on:{start:t.startCallBack,end:t.endCallBack}})],1)},C=[],G=(i("4160"),i("d81d"),i("fb6a"),i("b0c0"),i("159b"),{name:"LotteryTurntable",data:function(){return this.defaultStyle={fontColor:"#AFFFD7",fontSize:"10px",lineHeight:"12px",wordWrap:!1},this.activeStyle={fontColor:"#fff"},this.blocks=[{padding:"10px",background:"rgba(0, 0, 0, 0)",borderRadius:"10px"}],this.buttons=[{x:1,y:1,background:"rgba(0, 0, 0, 0)",fonts:[],imgs:[{src:i("6858"),width:"100%",top:"0"}]}],{prizes:[]}},methods:{getGiftList:function(){var t=[],e=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]],n=g.map((function(t){return{fullName:t.name,name:t.alias,img:i("8569")("./public".concat(t.image.slice(1))),top:"80%"}}));n.forEach((function(n,a){t.push({x:e[a][0],y:e[a][1],title:n.name,fullName:n.fullName,fonts:[{text:n.name,top:n.top}],imgs:[{src:i("6696"),activeSrc:i("b027"),width:"100%",height:"100%"},{src:n.img,width:"70%",top:"10%"}]})})),this.prizes=t},startCallBack:function(){var t=this;this.$refs.luckyGrid.play();var e=u.targetGiftIndex;!1===!!e&&(e=8*Math.random()>>0),setTimeout((function(){t.$refs.luckyGrid.stop(e)}),u.timeout)},endCallBack:function(t){var e=this,i=t.imgs,n=t.fullName,a=i[1].src;localStorage.setItem(p.EXIST_KEY,"1"),localStorage.setItem(p.NAME_KEY,n),localStorage.setItem(p.IMAGE_KEY,a),setTimeout((function(){e.$emit("success")}),1200)}},mounted:function(){this.getGiftList()}}),O=G,I=(i("d0b2"),Object(h["a"])(O,E,C,!1,null,"45e6bf11",null)),M=I.exports,j={name:"Lottery",components:{Home:y,GiftDisplayer:S,Turntable:M},data:function(){return this.swiperOptions={direction:"vertical",width:window.innerWidth,height:window.innerHeight},{gifts:[]}},methods:{showGifts:function(){this.gifts=g},handleTurntableSuccess:function(){this.$emit("showGift")}},mounted:function(){this.showGifts()}},T=j,L=(i("18c3"),Object(h["a"])(T,o,r,!1,null,"1a4d8a84",null)),Y=L.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gift-component full-screen"},[i("h1",[t._v("恭喜你中奖啦！")]),i("div",{staticClass:"gift-image-area"},[i("img",{staticClass:"gift-image",attrs:{src:t.giftImageUrl,alt:""}})]),i("h3",[t._v(t._s(t.giftName))]),t.isShowRestart?i("div",{staticClass:"replay-button",on:{click:t.replay}},[t._v("重新体验")]):t._e()])},N=[],$=(i("ac1f"),i("5319"),{name:"Gift",data:function(){return{giftName:"",giftImageUrl:"",isShowRestart:!1}},methods:{getLocalGift:function(){var t=localStorage.getItem(p.NAME_KEY),e=localStorage.getItem(p.IMAGE_KEY);this.giftName=t,this.giftImageUrl=e,this.isShowRestart=f},replay:function(){localStorage.removeItem(p.EXIST_KEY),location.replace("/giftie/")}},mounted:function(){this.getLocalGift()}}),K=$,P=(i("658a"),Object(h["a"])(K,A,N,!1,null,"2312fdfd",null)),U=P.exports,R={name:"App",components:{Lottery:Y,Gift:U},data:function(){return{isShowGift:!1}},methods:{checkLocalGift:function(){var t=localStorage.getItem(p.EXIST_KEY);!0===!!t&&(this.isShowGift=!0)},showGift:function(){this.isShowGift=!0}},created:function(){this.checkLocalGift()},mounted:function(){}},D=R,F=(i("034f"),Object(h["a"])(D,a,s,!1,null,null,null)),H=F.exports,z=i("7212"),B=i.n(z),X=i("a280"),J=i.n(X);i("bbe3");n["default"].use(B.a),n["default"].use(J.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(H)}}).$mount("#app")},"658a":function(t,e,i){"use strict";i("d2ae")},6649:function(t,e,i){t.exports=i.p+"img/board-3.5fb18677.png"},6696:function(t,e,i){t.exports=i.p+"img/block-bg.0257a563.png"},6858:function(t,e,i){t.exports=i.p+"img/button.26c0b0e9.png"},"6a6e":function(t,e,i){},"6c69":function(t,e,i){t.exports=i.p+"img/2.fcf7503e.png"},"774b":function(t,e,i){},"7c03":function(t,e,i){t.exports=i.p+"img/8.553d8049.png"},"7ef6":function(t,e,i){t.exports=i.p+"img/travel.1994efe9.png"},"80d7":function(t,e,i){t.exports=i.p+"fonts/Muyao.min.c8544663.ttf"},"835d":function(t,e,i){t.exports=i.p+"img/1.f5b6521c.png"},8569:function(t,e,i){var n={"./public/403.html":"8ccf","./public/favicon.ico":"05fd","./public/fonts/Muyao.min.ttf":"80d7","./public/fonts/Muyao.ttf":"29de","./public/images/1.png":"835d","./public/images/2.png":"6c69","./public/images/3.png":"1057","./public/images/5.png":"0b36","./public/images/6.png":"226e","./public/images/7.png":"87e9","./public/images/8.png":"7c03","./public/images/car.png":"f818","./public/images/gold.png":"897b","./public/images/lamer.png":"a2fa","./public/images/money.png":"a457","./public/images/spa.png":"e252","./public/images/tasaki.png":"1f7a","./public/images/travel.png":"7ef6","./public/images/wash.png":"fe70","./public/images/ysl.png":"3e3e","./public/index.html":"cb67"};function a(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="8569"},"85ec":function(t,e,i){},"87e9":function(t,e,i){t.exports=i.p+"img/7.bbd6cd67.png"},"897b":function(t,e,i){t.exports=i.p+"img/gold.b04f44f9.png"},"8ccf":function(t,e){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <!DOCTYPE html>\n| <html lang="en">\n| <head>')},9226:function(t,e,i){"use strict";i("774b")},"956d":function(t,e,i){},a2fa:function(t,e,i){t.exports=i.p+"img/lamer.35df6b71.png"},a457:function(t,e,i){t.exports=i.p+"img/money.c7474480.png"},b027:function(t,e,i){t.exports=i.p+"img/active-block-bg.a5e6958c.png"},babf:function(t,e,i){},cb67:function(t,e){throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <!DOCTYPE html>\n| <html>\n|   <head>")},d0b2:function(t,e,i){"use strict";i("6a6e")},d2ae:function(t,e,i){},e252:function(t,e,i){t.exports=i.p+"img/spa.2bcdd464.png"},f818:function(t,e,i){t.exports=i.p+"img/car.59f58041.png"},fe70:function(t,e,i){t.exports=i.p+"img/wash.a7652426.png"}});
//# sourceMappingURL=app.89eb116a.js.map