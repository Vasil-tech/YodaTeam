(function(){"use strict";var t={283:function(t,e,n){n.d(e,{Z:function(){return i}});var o=n(3920);function i(t="Unknown file",e="Unknown method",n="Unknow extension",i){switch(i){case"canvas":o.u.emit("CanvasError",{file:t,method:e,ext:n});break;case"UI":break;case"Backend":break;case"Connect":alert("Connect to backend error",n),console.log(n)}}},3920:function(t,e,n){n.d(e,{u:function(){return Wt}});var o=n(9242),i=n(3396);function r(t,e,n,o,r,a){const l=(0,i.up)("MainContainer");return(0,i.wg)(),(0,i.j4)(l)}const a={class:"MainContainerRoot"},l={class:"navMenu"},u={class:"toolPanel"},s={class:"workArea",id:"workArea"};function c(t,e,n,o,r,c){const d=(0,i.up)("nav-menu"),h=(0,i.up)("tool-panel"),f=(0,i.up)("work-area");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",l,[(0,i.Wm)(d)]),(0,i._)("div",u,[(0,i.Wm)(h)]),(0,i._)("div",s,[(0,i.Wm)(f)])])}const d={class:"navMenuRoot"},h={class:"Navbar"},f=(0,i._)("li",null,[(0,i._)("a",null,"Модели")],-1),p=(0,i._)("a",null,"Регистрация",-1),m=[p],v=(0,i._)("a",null,"Авторизация",-1),k=[v];function b(t,e,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("nav",h,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",{onClick:e[0]||(e[0]=t=>a.Editor())},"Редактор")]),f,(0,i._)("li",{class:"RightMenu",onClick:e[1]||(e[1]=t=>a.Auth(0))},m),(0,i._)("li",{class:"RightMenu",onClick:e[2]||(e[2]=t=>a.Auth(1))},k)])])])}var g={data(){return{}},methods:{Auth(t){this.emitter.emit("OpenAuthorisation",t)},Editor(){this.emitter.emit("OpenEditor",!0)}}},w=n(89);const y=(0,w.Z)(g,[["render",b]]);var C=y;const _={class:"ToolPanelRoot"};function E(t,e,n,o,r,a){const l=(0,i.up)("editMenu"),u=(0,i.up)("authorisation-page");return(0,i.wg)(),(0,i.iD)("div",_,[r.editMenuVisible?((0,i.wg)(),(0,i.j4)(l,{key:0})):(0,i.kq)("",!0),r.AuthorisationPageVisible?((0,i.wg)(),(0,i.j4)(u,{key:1,title:r.title,way:r.way},null,8,["title","way"])):(0,i.kq)("",!0)])}const A={class:"EditParamRoot"},S={class:"MenuButtons"},O={key:0,class:"component1"},P={key:1},V={key:1,class:"component2"},M={key:1},x={class:"download"};function R(t,e,n,o,r,a){const l=(0,i.up)("ModelInfo"),u=(0,i.up)("SceneParam");return(0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",S,[r.EditTool1?((0,i.wg)(),(0,i.iD)("div",O,[r.buttonVisible?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[0]||(e[0]=t=>a.NavButtonClick(1))},"Данные о модели")):(0,i.kq)("",!0),r.componentVisible?((0,i.wg)(),(0,i.iD)("div",P,[(0,i._)("button",{onClick:e[1]||(e[1]=t=>a.NavButtonClick(0))},"Назад"),(0,i.Wm)(l)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),r.EditTool2?((0,i.wg)(),(0,i.iD)("div",V,[r.buttonVisible?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[2]||(e[2]=t=>a.NavButtonClick(2))},"Параметры сцены")):(0,i.kq)("",!0),r.componentVisible?((0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("button",{onClick:e[3]||(e[3]=t=>a.NavButtonClick(0))},"Назад"),(0,i.Wm)(u)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),(0,i._)("div",x,[(0,i._)("input",{type:"file",id:"file",ref:"file",onChange:e[4]||(e[4]=e=>t.handleFileUpload())},null,544)])])])}var T=n(7139);const D={class:"ModelInfoRoot"},B=(0,i._)("p",null,"Информация о модели",-1);function j(t,e,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",D,[B,(0,i._)("p",null,"Объем файла: "+(0,T.zw)(),1)])}var q={data(){return{fileSize:null}}};const I=(0,w.Z)(q,[["render",j]]);var N=I;const Z={class:"SceneParamRoot"},F={class:"backColor"},W=(0,i._)("p",null,"Смена цвета фона сцены",-1),z={class:"colorBar"},U={class:"control"},J={class:"orbControl"},H=["value","checked"],L=(0,i._)("label",{for:"checkbox"},"Включить orbit control",-1),X={key:0,class:"rotate"},G={class:"fullScreenButt",id:"fullScreenButt"};function K(t,e,n,r,a,l){return(0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("div",F,[W,(0,i._)("div",z,[(0,i._)("button",{onClick:e[0]||(e[0]=t=>l.changeColor("grey"))},"серый"),(0,i._)("button",{onClick:e[1]||(e[1]=t=>l.changeColor("red"))},"красный"),(0,i._)("button",{onClick:e[2]||(e[2]=t=>l.changeColor("white"))},"белый")])]),(0,i._)("div",U,[(0,i._)("div",J,[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":e[3]||(e[3]=t=>a.checked=t),value:t.checkboxVal,checked:t.booleanValue,onInput:e[4]||(e[4]=t=>l.orbContChecked(!a.checked))},null,40,H),[[o.e8,a.checked]]),L]),a.checked?((0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("button",{onClick:e[5]||(e[5]=t=>l.rotateOn())},"Auto rotate")])):(0,i.kq)("",!0),(0,i._)("div",G,[(0,i._)("button",{onClick:e[6]||(e[6]=t=>l.fullScreen())},"Открыть на весь экран")])])])}var Q={data(){return{rotateStatus:!1,checked:!1}},methods:{changeColor(t){try{this.emitter.emit("SceneBackgroundColor",t)}catch(e){this.emitter.emit("CanvasError",{file:"SceneParam",method:"changeColor",ext:e})}},orbContChecked(t){try{this.emitter.emit("OrbitControlStatus",t)}catch(e){this.emitter.emit("CanvasError",{file:"SceneParam",method:"orbContChecked",ext:e})}},fullScreen(){},rotateOn(){try{this.rotateStatus=!this.rotateStatus,this.emitter.emit("RotateOn",this.rotateStatus)}catch(t){this.emitter.emit("CanvasError",{file:"SceneParam",method:"rotateOn",ext:t})}}}};const Y=(0,w.Z)(Q,[["render",K]]);var $=Y,tt={components:{ModelInfo:N,SceneParam:$},data(){return{buttonVisible:!0,componentVisible:!1,EditTool1:!0,EditTool2:!0}},methods:{NavButtonClick(t){switch(t){case 0:this.componentVisible=!1,this.buttonVisible=!0,this.EditTool1=this.EditTool2=!0;break;case 1:this.EditTool2=!1,this.componentVisible=!0,this.buttonVisible=!1;break;case 2:this.EditTool1=!1,this.componentVisible=!0,this.buttonVisible=!1;break}},downloadButtonClick(){}}};const et=(0,w.Z)(tt,[["render",R]]);var nt=et;const ot={class:"AuthPageRoot"},it={key:0,class:"inputs"},rt=(0,i._)("p",null,"Логин",-1),at=(0,i._)("input",{id:"loginInput",type:"text"},null,-1),lt=(0,i._)("p",null,"Пароль",-1),ut=(0,i._)("input",{id:"passwordInput",type:"password"},null,-1),st={key:1,class:"inputs"},ct=(0,i._)("p",null,"E-mail",-1),dt=(0,i._)("input",null,null,-1),ht=(0,i._)("p",null,"Логин",-1),ft=(0,i._)("input",null,null,-1),pt=(0,i._)("p",null,"Пароль",-1),mt=(0,i._)("input",{type:"password"},null,-1),vt=[ct,dt,ht,ft,pt,mt];function kt(t,e,n,r,a,l){return(0,i.wg)(),(0,i.iD)("div",ot,[(0,i._)("h2",null,(0,T.zw)(n.title),1),a.AuthForm?((0,i.wg)(),(0,i.iD)("div",it,[rt,at,lt,ut,(0,i.wy)((0,i._)("p",null,"Введите данные корректно",512),[[o.F8,a.fieldAlert]])])):(0,i.kq)("",!0),a.RegistForm?((0,i.wg)(),(0,i.iD)("div",st,vt)):(0,i.kq)("",!0),(0,i._)("button",{onClick:e[0]||(e[0]=t=>l.fieldAlertCheck())},"Вход")])}var bt=n(283);function gt(t){try{t=JSON.stringify(t);let e=wt(t);if(e){let t=new XMLHttpRequest;t.open("POST","/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send("biba"),t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(console.log(this.responseText),Wt.emit("Response",this.responseText))}}else(0,bt.Z)("JSONgenerate","default","not json","Connection")}catch(e){(0,bt.Z)("JSONgenerate","default",e,"Connection")}}function wt(t){try{JSON.parse(t),console.log(t)}catch(e){return!1}return!0}var yt={props:{way:String,title:String},data(){return{AuthForm:!1,RegistForm:!1,fieldAlert:!1}},created:function(){this.showAuth()},updated(){this.showAuth()},methods:{showAuth(){"Registration"==this.way?(this.RegistForm=!0,this.AuthForm=!1):"Authorisation"==this.way&&(this.AuthForm=!0,this.RegistForm=!1)},fieldAlertCheck(){document.getElementById("loginInput").value.length<3||document.getElementById("passwordInput").value.length<=8?this.fieldAlert=!0:(this.fieldAlert=!1,gt({action:this.way,login:document.getElementById("loginInput").value,password:document.getElementById("passwordInput").value}))}}};const Ct=(0,w.Z)(yt,[["render",kt]]);var _t=Ct,Et={components:{editMenu:nt,AuthorisationPage:_t},data(){return{editMenuVisible:!1,AuthorisationPageVisible:!1,way:String,title:String}},methods:{},created:function(){this.emitter.on("OpenAuthorisation",(t=>{0==t?(this.AuthorisationPageVisible=!0,this.editMenuVisible=!1,this.way="Registration",this.title="Регистрация"):1==t&&(this.AuthorisationPageVisible=!0,this.editMenuVisible=!1,this.way="Authorisation",this.title="Вход")})),this.emitter.on("OpenEditor",(t=>{t&&(this.AuthorisationPageVisible=!1,this.editMenuVisible=!0)}))}};const At=(0,w.Z)(Et,[["render",E]]);var St=At;const Ot={class:"workAreaRoot",id:"workAreaRoot"},Pt={key:0,class:"threeContainer"},Vt={key:1,class:"errorHandler"},Mt=(0,i._)("h1",null,"Хьюстон, пиздец",-1);function xt(t,e,n,o,r,a){const l=(0,i.up)("three-container");return(0,i.wg)(),(0,i.iD)("div",Ot,[r.Error.check?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Pt,[(0,i.Wm)(l)])),r.Error.check?((0,i.wg)(),(0,i.iD)("div",Vt,[Mt,(0,i._)("p",null,"в файле: "+(0,T.zw)(r.Error.file),1),(0,i._)("p",null,"метод: "+(0,T.zw)(r.Error.method),1),(0,i._)("p",null,"Extension: "+(0,T.zw)(r.Error.ext),1),(0,i._)("button",{onClick:e[0]||(e[0]=t=>r.Error.check=!r.Error.check)},"открыть канвас")])):(0,i.kq)("",!0)])}var Rt={components:{ThreeContainer:(0,i.RC)((()=>n.e(705).then(n.bind(n,6705))))},data(){return{Error:{check:!1,file:null,method:null,ext:null,type:null}}},created(){this.emitter.on("CanvasError",(t=>{this.Error.check=!0,this.Error.file=t.file,this.Error.method=t.method,this.Error.ext=t.ext}))}};const Tt=(0,w.Z)(Rt,[["render",xt]]);var Dt=Tt,Bt={components:{NavMenu:C,WorkArea:Dt,ToolPanel:St},data(){}};const jt=(0,w.Z)(Bt,[["render",c]]);var qt=jt,It={name:"App",components:{MainContainer:qt}};const Nt=(0,w.Z)(It,[["render",r]]);var Zt=Nt,Ft=n(1373);const Wt=(0,Ft.Z)(),zt=(0,o.ri)(Zt);zt.config.globalProperties.emitter=Wt,zt.mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(l=!1,r<a&&(a=r));if(l){t.splice(c--,1);var s=i();void 0!==s&&(e=s)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".d9b84bae.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="geetech:";n.l=function(o,i,r,a){if(t[o])t[o].push(i);else{var l,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+r){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",e+r),l.src=o),t[o]=[i];var h=function(e,n){l.onerror=l.onload=null,clearTimeout(f);var i=t[o];if(delete t[o],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,o){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=t[e]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(e),l=new Error,u=function(o){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,i[1](l)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,a=o[0],l=o[1],u=o[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(u)var c=u(n)}for(e&&e(o);s<a.length;s++)r=a[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkgeetech"]=self["webpackChunkgeetech"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3920)}));o=n.O(o)})();
//# sourceMappingURL=app.9536d251.js.map