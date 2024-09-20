import{I as a}from"./IFrame.928663ba.js";import{n as r}from"./app.1972ab22.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.e376e056.js";import"./@babel.49d8906a.js";import"./localforage.70738f56.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.1da2501e.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"minder-editor-container"},[e("div",{staticClass:"quickbar"},[e("ETooltip",{attrs:{placement:"top",effect:"light"}},[e("div",[e("i",{staticClass:"ft icon",attrs:{title:t.$L("\u7F29\u653E")}},[t._v("\uE7B3")])]),e("div",{staticClass:"minder-editor-slider",attrs:{slot:"content"},slot:"content"},[e("Slider",{attrs:{min:10,max:300},model:{value:t.zoom,callback:function(n){t.zoom=n},expression:"zoom"}})],1)]),t.readOnly!==!0?e("ETooltip",{attrs:{placement:"top",effect:"light"}},[e("div",[e("i",{staticClass:"ft icon",attrs:{title:t.$L("\u56FE\u5F62")}},[t._v("\uE621")])]),e("div",{attrs:{slot:"content"},slot:"content"},[e("ul",{staticClass:"minder-editor-quickul mold"},[e("li",{on:{click:function(n){return t.execCommand("template","default")}}},[e("span",{staticClass:"default"})]),e("li",{on:{click:function(n){return t.execCommand("template","structure")}}},[e("span",{staticClass:"structure"})]),e("li",{on:{click:function(n){return t.execCommand("template","filetree")}}},[e("span",{staticClass:"filetree"})]),e("li",{on:{click:function(n){return t.execCommand("template","right")}}},[e("span",{staticClass:"right"})]),e("li",{on:{click:function(n){return t.execCommand("template","fish-bone")}}},[e("span",{staticClass:"fish-bone"})]),e("li",{on:{click:function(n){return t.execCommand("template","tianpan")}}},[e("span",{staticClass:"tianpan"})])])])]):t._e(),t.readOnly!==!0?e("ETooltip",{attrs:{placement:"top",effect:"light"}},[e("div",[e("i",{staticClass:"ft icon",attrs:{title:t.$L("\u6837\u5F0F")}},[t._v("\uE678")])]),e("div",{attrs:{slot:"content"},slot:"content"},[e("ul",{staticClass:"minder-editor-quickul"},[e("li",{on:{click:function(n){return t.execCommand("theme","fresh-blue")}}},[t._v(t._s(t.$L("\u5929\u7A7A\u84DD")))]),e("li",{on:{click:function(n){return t.execCommand("theme","wire")}}},[t._v(t._s(t.$L("\u7EBF\u6846")))]),e("li",{on:{click:function(n){return t.execCommand("theme","fish")}}},[t._v(t._s(t.$L("\u9C7C\u9AA8\u56FE")))]),e("li",{on:{click:function(n){return t.execCommand("theme","classic")}}},[t._v(t._s(t.$L("\u8111\u56FE\u7ECF\u5178")))]),e("li",{on:{click:function(n){return t.execCommand("theme","classic-compact")}}},[t._v(t._s(t.$L("\u7D27\u51D1\u7ECF\u5178")))]),e("li",{on:{click:function(n){return t.execCommand("theme","snow")}}},[t._v(t._s(t.$L("\u6E29\u67D4\u51B7\u5149")))]),e("li",{on:{click:function(n){return t.execCommand("theme","snow-compact")}}},[t._v(t._s(t.$L("\u7D27\u51D1\u51B7\u5149")))]),e("li",{on:{click:function(n){return t.execCommand("theme","tianpan")}}},[t._v(t._s(t.$L("\u7ECF\u5178\u5929\u76D8")))]),e("li",{on:{click:function(n){return t.execCommand("theme","tianpan-compact")}}},[t._v(t._s(t.$L("\u7D27\u51D1\u5929\u76D8")))])])])]):t._e(),e("ETooltip",{attrs:{placement:"top",effect:"light"}},[e("div",[e("i",{staticClass:"ft icon",attrs:{title:t.$L("\u6298\u53E0")}},[t._v("\uE779")])]),e("div",{attrs:{slot:"content"},slot:"content"},[e("ul",{staticClass:"minder-editor-quickul"},[e("li",{on:{click:function(n){return t.execCommand("ExpandToLevel",1)}}},[t._v(t._s(t.$L("\u5C55\u5F00\u5230\u4E00\u7EA7\u8282\u70B9")))]),e("li",{on:{click:function(n){return t.execCommand("ExpandToLevel",2)}}},[t._v(t._s(t.$L("\u5C55\u5F00\u5230\u4E8C\u7EA7\u8282\u70B9")))]),e("li",{on:{click:function(n){return t.execCommand("ExpandToLevel",3)}}},[t._v(t._s(t.$L("\u5C55\u5F00\u5230\u4E09\u7EA7\u8282\u70B9")))]),e("li",{on:{click:function(n){return t.execCommand("ExpandToLevel",4)}}},[t._v(t._s(t.$L("\u5C55\u5F00\u5230\u56DB\u7EA7\u8282\u70B9")))]),e("li",{on:{click:function(n){return t.execCommand("ExpandToLevel",5)}}},[t._v(t._s(t.$L("\u5C55\u5F00\u5230\u4E94\u7EA7\u8282\u70B9")))]),e("li",{on:{click:function(n){return t.execCommand("ExpandToLevel",99)}}},[t._v(t._s(t.$L("\u5C55\u5F00\u5168\u90E8\u8282\u70B9")))])])])]),e("ETooltip",{attrs:{placement:"top",content:t.$L("\u5C45\u4E2D")}},[e("div",{on:{click:function(n){return t.execCommand("goCenter")}}},[e("i",{staticClass:"ft icon"},[t._v("\uE61F")])])]),e("ETooltip",{attrs:{placement:"top",content:t.$L("\u79FB\u52A8")}},[e("div",{on:{click:t.onHand}},[e("i",{staticClass:"ft icon",class:{active:t.isHand}},[t._v("\uE6CF")])])])],1),e("div",{staticClass:"minder-content"},[e("IFrame",{ref:"frame",staticClass:"minder-iframe",attrs:{src:t.url},on:{"on-message":t.onMessage}}),t.loadIng?e("div",{staticClass:"minder-loading"},[e("Loading")],1):t._e()],1)])},c=[];const l={name:"mind-editor",components:{IFrame:a},props:{value:{default:function(){return{}}},readOnly:{type:Boolean,default:!1}},data(){return{loadIng:!0,isHand:this.readOnly,zoom:100,backup:null}},mounted(){window.addEventListener("message",this.handleMessage)},beforeDestroy(){window.removeEventListener("message",this.handleMessage)},methods:{onMessage(t){if(t.app==="minder")switch(t.action){case"ready":this.loadIng=!1,this.rendData();break;case"content":this.backup=JSON.stringify(t.content),this.$emit("input",t.content);break;case"save":this.$emit("saveData");break}},onHand(){if(this.readOnly){this.execCommand("removeAllSelected");return}this.execCommand("Hand"),this.isHand=!this.isHand},execCommand(t,i){this.$refs.frame.postMessage({app:"minder",action:"command",command:t,value:i}),!(t==="goCenter"||t==="removeAllSelected")&&setTimeout(e=>{this.isHand&&this.$refs.frame.postMessage({app:"minder",action:"commandAlways",command:"Hand",value:i})},300)},exportHandle(t,i){this.$refs.frame.postMessage({app:"minder",action:"export",type:t,name:i||this.value.root.data.text||this.$L("\u65E0\u6807\u9898")})},rendData(){this.loadIng||this.backup!==JSON.stringify(this.value)&&this.$refs.frame.postMessage({app:"minder",action:"setContent",content:this.value})}},computed:{url(){return $A.mainUrl(`minder/index.html?type=manual&readonly=${this.readOnly?"yes":"no"}`)}},watch:{value:{handler:function(t){(typeof t!="object"||t===null)&&(t={root:t,theme:"fresh-blue",template:"default"}),(typeof t.root!="object"||t.root===null||t.root.length==0)&&(t.root={data:{id:$A.randomString(12),text:this.$L("\u9ED8\u8BA4\u8282\u70B9")},children:[]}),typeof t.theme!="string"&&(t.theme="fresh-blue"),typeof t.template!="string"&&(t.template="default"),this.rendData()},deep:!0,immediate:!0},zoom(t){this.execCommand("Zoom",t)}}},o={};var m=r(l,s,c,!1,d,"b9870340",null,null);function d(t){for(let i in o)this[i]=o[i]}var Q=function(){return m.exports}();export{Q as default};
