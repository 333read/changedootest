import{M as p}from"./MicroApps.b34c89f5.js";import{n as m}from"./app.1972ab22.js";import"./vue.c448ed56.js";import"./@babel.49d8906a.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./DialogWrapper.2e2f2365.js";import"./le5le-store.b40f9152.js";import"./longpress.5305f240.js";import"./index.90bedaf9.js";import"./quill-hi.b7c37d93.js";import"./parchment.d5c5924e.js";import"./quill-delta.4f4718f3.js";import"./fast-diff.f17881f3.js";import"./lodash.clonedeep.fa843a7a.js";import"./lodash.isequal.7dda43a9.js";import"./eventemitter3.78b735ad.js";import"./lodash-es.df04b444.js";import"./quill-mention-hi.f348056f.js";import"./vue-jsonp.be27271b.js";import"./view-design-hi.1da2501e.js";import"./vue-virtual-scroll-list-hi.295e5d02.js";import"./ImgUpload.9a52aa07.js";import"./details.7f03ce31.js";import"./jquery.e376e056.js";import"./localforage.70738f56.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";import"./tip.c9944998.js";var a=function(){var t=this,r=t.$createElement,o=t._self._c||r;return!t.loading&&t.$route.name=="manage-apps"?o("MicroApps",{attrs:{url:t.appUrl,path:t.path}}):t._e()},e=[];const n={components:{MicroApps:p},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="manage-apps"?this.$nextTick(()=>{this.loading=!1,this.appUrl={}.VITE_OKR_WEB_URL||$A.mainUrl("apps/okr"),this.path=this.$route.query.path||""}):this.appUrl=""},immediate:!0}}},i={};var s=m(n,a,e,!1,l,null,null,null);function l(t){for(let r in i)this[r]=i[r]}var lt=function(){return s.exports}();export{lt as default};
