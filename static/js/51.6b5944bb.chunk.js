(this.webpackJsonppropetypro=this.webpackJsonppropetypro||[]).push([[51],{557:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(15)).default)(r.default.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=l},681:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),l=a(20),i=a(0),m=a.n(i),c=a(203),o=a(202),s=a(541),u=a(453),d=a(525),p=a(558),h=a.n(p),f=a(557),b=a.n(f),E=a(64),v=a(208),g=a(55),_=a(611),k=a.n(_),y=(a(617),a(46)),T=a(25),S=a(41),I=a(37),j=a(19),w=j.e().shape({template_name:j.g().trim().required("Template Name is Required"),template_contents:j.g().trim().required("Template Content is Required")}),q={toolbar:[[{header:[1,2,3,4,5,6,!1]},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],clipboard:{matchVisual:!1}},z=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"],C=function(e){var t=e.emailTemplateToEdit,a=e.history,n=e.handleItemSubmit,i={id:t.id,template_name:t.template_name||"",template_contents:t.template_contents||""},p=t.id?"Edit Template":"New Template",f=Object(y.a)();return m.a.createElement(o.a,{pageTitle:"Template Details"},m.a.createElement(u.a,{container:!0,justify:"center",direction:"column"},m.a.createElement(u.a,{item:!0,key:2},m.a.createElement(c.a,{text:p})),m.a.createElement(u.a,{container:!0,direction:"column",justify:"center",item:!0,key:3},m.a.createElement(u.a,{item:!0},m.a.createElement(g.b,{initialValues:i,validationSchema:w,onSubmit:function(){var e=Object(l.a)(r.a.mark((function e(t,l){var i,m,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.resetForm,m=l.setStatus,c={id:t.id,template_name:t.template_name,last_edit:(new Date).toLocaleString(),template_contents:t.template_contents},e.prev=2,e.next=5,n(c,"email-templates");case 5:i({}),t.id&&a.goBack(),m({sent:!0,msg:"Template saved successfully!"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),m({sent:!1,msg:"Error! ".concat(e.t0,".")});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.values,n=e.status,r=e.handleSubmit,l=e.isSubmitting,i=e.touched,c=e.setFieldValue,o=e.errors,p=e.handleChange,g=e.handleBlur;return m.a.createElement("form",{className:f.form,method:"post",id:"templateInputForm",onSubmit:r},m.a.createElement(u.a,{container:!0,spacing:2,justify:"center",alignItems:"stretch",direction:"column"},n&&n.msg&&m.a.createElement(v.a,{variant:n.sent?"success":"error",message:n.msg}),m.a.createElement(u.a,{item:!0,container:!0,spacing:2,alignItems:"stretch",direction:"column"},m.a.createElement(u.a,{item:!0},m.a.createElement(s.a,{fullWidth:!0,InputLabelProps:{shrink:!0},variant:"outlined",id:"template_name",name:"template_name",label:"Template Name",value:t.template_name,onChange:p,onBlur:g,error:o.template_name&&i.template_name,helperText:i.template_name&&o.template_name})),m.a.createElement(u.a,{item:!0},m.a.createElement(E.a,{variant:"body1",paragraph:!0},"Template Contents"),m.a.createElement(k.a,{className:f.quillEditor,value:t.template_contents,onChange:function(e){c("template_contents",e)},theme:"snow",modules:q,formats:z}))),m.a.createElement(u.a,{item:!0,container:!0,direction:"row",className:f.buttonBox},m.a.createElement(u.a,{item:!0},m.a.createElement(d.a,{color:"secondary",variant:"contained",size:"medium",startIcon:m.a.createElement(h.a,null),onClick:function(){return a.goBack()},disableElevation:!0},"Cancel")),m.a.createElement(u.a,{item:!0},m.a.createElement(d.a,{type:"submit",color:"primary",variant:"contained",size:"medium",startIcon:m.a.createElement(b.a,null),form:"templateInputForm",disabled:l},"Save")))))}))))))};C=Object(S.b)((function(e,t){return{emailTemplateToEdit:e.emailTemplates.find((function(e){return e.id===t.match.params.templateId}))||{}}}),(function(e){return{handleItemSubmit:function(t,a){return e(Object(I.h)(t,a))}}}))(C),t.default=Object(T.g)(C)}}]);
//# sourceMappingURL=51.6b5944bb.chunk.js.map