(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-03fc"],{"5n/A":function(e,t,i){},"67Ak":function(e,t,i){"use strict";i.r(t);var n=i("6iAj"),a=i("KTTK"),o=i("glbJ"),r=i("ZoMv"),s=i("7Qib"),c={name:"Print",components:{Tinymce:o.a},props:{},data:function(){return{loading:!1,isPreview:!1,templateOptions:[],templateId:"",typeId:"",previewOptions:["word","pdf"],perviewType:"word",content:"",historyData:null,iframeUrl:"",iframeHeight:document.documentElement.clientHeight-170,srcData:null}},computed:{perviewTypeName:function(){return{word:"Word",pdf:"PDF"}[this.perviewType]}},created:function(){"history"==this.$route.query.type?this.getRecordDetail():(this.typeId=this.$route.query.id,this.getTemplateOptions(r.a.convertKeyToType(this.$route.query.module))),window.addEventListener("resize",this.changeIframeHeight)},beforeRouteUpdate:function(e,t,i){this.content="",i()},beforeDestroy:function(){window.removeEventListener("resize",this.changeIframeHeight)},methods:{changeIframeHeight:function(){this.iframeHeight=document.documentElement.clientHeight-170},getTemplateOptions:function(e){var t=this;this.loading=!0,Object(n.G)({type:e,pageType:0}).then(function(e){t.templateOptions=e.data.list||[],"history"!=t.$route.query.type&&(t.templateOptions.length?(t.templateId=t.templateOptions[0].templateId,t.getDetail()):t.templateId=""),t.loading=!1}).catch(function(){t.loading=!1})},getDetail:function(){var e=this;this.loading=!0,Object(n.A)({templateId:this.templateId,id:this.typeId}).then(function(t){e.loading=!1,e.content=t.data}).catch(function(){e.loading=!1})},getRecordDetail:function(){var e=this;this.loading=!0,Object(n.D)({recordId:this.$route.query.recordId}).then(function(t){e.loading=!1;var i=t.data||{};e.historyData=i,e.templateId=i.templateId,e.typeId=i.typeId,e.getTemplateOptions(i.crmType),e.content=i.recordContent||""}).catch(function(){e.loading=!1})},compactPrint:function(){this.$refs.editor.editor.execCommand("mcePrint"),this.savePrintRecord()},printPreviewClick:function(){var e=this;this.loading=!0,Object(n.z)({type:this.perviewType,content:this.content}).then(function(t){e.loading=!1;var i=t.data,n="/crmPrint/preview.pdf?type=1&key="+i;Object(a.l)(n).then(function(t){e.iframeUrl=window.URL.createObjectURL(t.data)}).catch(function(){}),e.srcData=i,e.isPreview=!0}).catch(function(){e.loading=!1})},savePrintRecord:function(){this.templateId&&this.typeId&&Object(n.E)({templateId:this.templateId,typeId:this.typeId,recordContent:this.content}).then(function(e){}).catch(function(){})},hidenView:function(){this.$emit("close")},handleClick:function(e){if("goback"==e)this.isPreview=!1;else if("print"==e)document.getElementById("wkPrint").contentWindow.print(),this.savePrintRecord();else if("download"==e&&this.srcData){var t=this.perviewType,i={key:this.srcData,type:"word"===t?2:1};t="word"===t?"doc":"pdf",Object(a.d)(i).then(function(e){var i=new Blob([e.data],{type:""});Object(s.e)(i,"文档."+t)}).catch(function(){})}}}},l=(i("DCqI"),i("KHd+")),d=Object(l.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wk-print-container",class:{"is-perview":e.isPreview}},[i("el-header",[e.isPreview?[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleClick("download")}}},[e._v(e._s(e.perviewTypeName+" 下载"))]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleClick("print")}}},[e._v("打印")]),e._v(" "),i("el-button",{on:{click:function(t){e.handleClick("goback")}}},[e._v("取消")])]:[i("span",{staticClass:"select-label"},[e._v("选择模版")]),e._v(" "),i("el-select",{staticClass:"handle-item-content",staticStyle:{width:"170px"},on:{change:e.getDetail},model:{value:e.templateId,callback:function(t){e.templateId=t},expression:"templateId"}},e._l(e.templateOptions,function(e){return i("el-option",{key:e.templateId,attrs:{label:e.templateName,value:e.templateId}})})),e._v(" "),i("span",{staticClass:"select-label"},[e._v("选择模版")]),e._v(" "),i("el-select",{staticClass:"handle-item-content",staticStyle:{width:"80px"},model:{value:e.perviewType,callback:function(t){e.perviewType=t},expression:"perviewType"}},e._l(e.previewOptions,function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),e._v(" "),i("el-button",{staticClass:"preview-button",attrs:{type:"primary"},on:{click:e.printPreviewClick}},[e._v("打印预览")])]],2),e._v(" "),i("el-main",[i("div",{staticClass:"main-container"},[i("div",{staticClass:"main-content"},[i("iframe",{directives:[{name:"show",rawName:"v-show",value:e.isPreview,expression:"isPreview"}],staticStyle:{width:"100%","margin-top":"54px"},attrs:{id:"wkPrint",height:e.iframeHeight,src:e.iframeUrl,scrolling:"no",frameborder:"0"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],staticClass:"main-tips"},[e._v("您可以在当前页面对模版文字进行调整，确认无误后可进行打印")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPreview,expression:"!isPreview"}],staticClass:"main-content"},[i("tinymce",{ref:"editor",staticClass:"rich-txt",attrs:{toolbar:[],init:{statusbar:!1,plugins:"print autoresize",extended_valid_elements:"span[class|title|wktag|style|contenteditable]",content_style:" body {padding: 60px !important;width: 595px; margin: 0 auto;} p { margin: 5px 0;}"}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)])])],1)},[],!1,null,"2ea82cd7",null);d.options.__file="index.vue";t.default=d.exports},DCqI:function(e,t,i){"use strict";var n=i("5n/A");i.n(n).a}}]);