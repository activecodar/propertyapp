(this.webpackJsonppropetypro=this.webpackJsonppropetypro||[]).push([[12],{545:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(17),r=a(9),c=a(7);function o(e,t){Object(c.a)(2,arguments);var a=Object(r.a)(e),o=Object(n.a)(t);if(isNaN(o))return new Date(NaN);if(!o)return a;var i=a.getDate(),l=new Date(a.getTime());l.setMonth(a.getMonth()+o+1,0);var d=l.getDate();return i>=d?l:(a.setFullYear(l.getFullYear(),l.getMonth(),i),a)}},549:function(e,t,a){"use strict";a.d(t,"b",(function(){return E})),a.d(t,"e",(function(){return j})),a.d(t,"d",(function(){return g})),a.d(t,"p",(function(){return y})),a.d(t,"m",(function(){return k})),a.d(t,"n",(function(){return C})),a.d(t,"j",(function(){return x})),a.d(t,"i",(function(){return S})),a.d(t,"l",(function(){return P})),a.d(t,"o",(function(){return w})),a.d(t,"f",(function(){return z})),a.d(t,"h",(function(){return D})),a.d(t,"q",(function(){return I})),a.d(t,"c",(function(){return M})),a.d(t,"g",(function(){return N})),a.d(t,"k",(function(){return T})),a.d(t,"a",(function(){return F}));var n=a(512),r=a(513),c=a(514),o=a(515),i=a(572),l=a(573),d=a(574),u=a(575),s=Object(n.a)({start:Object(r.a)(Object(c.a)()),end:Object(o.a)(Object(c.a)())}),m=["Mr","Prof","Hon","Sir","Mrs","Miss","Dr","Madam","Other"],f=["Male","Female","Unspecified"],b=["Security Deposit Refund","Water Deposit Refund","Management Fees","Utilities","Taxes","Mortgage","Office","Maintenance & Cleaning","Advertising","Insurance","Legal & Other Professional Fees","Auto & Travel","Supplies","Other Refund","Repairs","Other"],p=["Bed Sitter","One Bedroom","Two Bedroom","Single Room","Double Room","Shop","Other"],h=["Fixed","Fixed w/rollover"],v=["Electric","Sewer","Water"],O=["Daily","Weekly","Monthly","Quarterly","Half-Yearly","Yearly"];function E(){return m}function j(){return f}function g(){return b}function y(){return p}function k(){for(var e=[],t=1;t<=5;t++)e.push(t);return e.concat("5+")}function C(){for(var e=[],t=1;t<=5;t++)e.push(t);return e}function x(){return v}function S(){return h}function P(){return O}function w(){return[{id:"month-to-date",text:"Month To Date"},{id:"last-month",text:"Last Month"},{id:"3-months-to-date",text:"3 Months To Date"},{id:"year-to-date",text:"Year To Date"},{id:"last-year",text:"Last Year"}]}function z(){return[Object(i.a)(Object(l.a)(Object(c.a)(),1)),Object(d.a)(Object(l.a)(Object(c.a)(),1))]}function D(){return[Object(r.a)(Object(u.a)(Object(c.a)(),1)),Object(o.a)(Object(u.a)(Object(c.a)(),1))]}function I(){return[Object(r.a)(Object(c.a)()),Object(c.a)()]}function M(){return[Object(i.a)(Object(c.a)()),Object(d.a)(Object(c.a)())]}function N(){return[Object(i.a)(Object(l.a)(Object(c.a)(),2)),Object(d.a)(Object(c.a)())]}function T(){return s}var F=new Intl.NumberFormat(void 0,{style:"decimal",currency:"KES"})},550:function(e,t,a){"use strict";var n=a(44),r=a(0),c=a.n(r),o=a(36),i=a(534),l=a(450),d=a(666),u=a(665),s=a(662),m=a(667),f=a(713),b=a(571),p=a(664),h=a(663),v=a(562),O=a.n(v),E=a(555),j=a.n(E),g=a(554),y=a.n(g),k=a(25),C=a(576),x=a(661);var S=function(e){var t=e.classes,a=e.onSelectAllClick,n=e.order,r=e.orderBy,o=e.headCells,i=e.numSelected,l=e.rowCount,d=e.onRequestSort;return c.a.createElement(x.a,null,c.a.createElement(s.a,null,c.a.createElement(h.a,{padding:"checkbox"},c.a.createElement(b.a,{indeterminate:i>0&&i<l,checked:i===l,onChange:a,inputProps:{"aria-label":"select all"}})),o.map((function(e){return c.a.createElement(h.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&n},c.a.createElement(C.a,{active:r===e.id,direction:n,onClick:(a=e.id,function(e){d(e,a)})},e.label,r===e.id?c.a.createElement("span",{className:t.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var a}))))},P=a(199),w=Object(P.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function z(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}t.a=Object(k.g)((function(e){var t=e.rows,a=e.headCells,r=e.selected,v=e.setSelected,E=e.deleteUrl,g=e.handleDelete,k=e.noEditCol,C=e.noDeleteCol,x=e.noDetailsCol,P=e.match,D=w(),I=c.a.useState("asc"),M=Object(n.a)(I,2),N=M[0],T=M[1],F=c.a.useState("Beds"),R=Object(n.a)(F,2),_=R[0],B=R[1],H=c.a.useState(0),L=Object(n.a)(H,2),A=L[0],U=L[1],W=c.a.useState(50),Y=Object(n.a)(W,2),V=Y[0],$=Y[1];return c.a.createElement(i.a,{border:1,borderRadius:"borderRadius",borderColor:"grey.400"},c.a.createElement(p.a,null,c.a.createElement(u.a,{stickyHeader:!0,className:D.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},c.a.createElement(S,{classes:D,numSelected:r.length,order:N,orderBy:_,onSelectAllClick:function(e){if(e.target.checked){var a=t.map((function(e){return e.id}));v(a)}else v([])},headCells:a,onRequestSort:function(e,t){T(_===t&&"desc"===N?"asc":"desc"),B(t)},rowCount:t.length}),c.a.createElement(d.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(t,function(e,t){return"desc"===e?function(e,a){return z(e,a,t)}:function(e,a){return-z(e,a,t)}}(N,_)).slice(A*V,A*V+V).map((function(e,t){var n,i=(n=e.id,-1!==r.indexOf(n)),d="enhanced-table-checkbox-".concat(t);return c.a.createElement(s.a,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,key:e.id,selected:i},c.a.createElement(h.a,{padding:"checkbox"},c.a.createElement(b.a,{onClick:function(t){return function(e,t){e.stopPropagation();var a=r.indexOf(t),n=[];-1===a?n=n.concat(r,t):0===a?n=n.concat(r.slice(1)):a===r.length-1?n=n.concat(r.slice(0,-1)):a>0&&(n=n.concat(r.slice(0,a),r.slice(a+1))),v(n)}(t,e.id)},checked:i,inputProps:{"aria-labelledby":d}})),a.map((function(t,a){var n=e[t.id];return"edit"===t.id?k?null:c.a.createElement(h.a,{key:"edit".concat(a),component:"th",scope:"row",sortDirection:!1},c.a.createElement(m.a,{title:"Edit",placement:"bottom"},c.a.createElement(l.a,{color:"primary",size:"small",component:o.b,to:"".concat(P.url,"/").concat(e.id,"/edit")},c.a.createElement(j.a,{fontSize:"default"})))):"delete"===t.id?C?null:c.a.createElement(h.a,{key:"delete".concat(a),component:"th",scope:"row",sortDirection:!1},c.a.createElement(m.a,{title:"Delete",placement:"bottom"},c.a.createElement(l.a,{onClick:function(t){g(e.id,E)},color:"primary",size:"small"},c.a.createElement(O.a,{fontSize:"default"})))):"details"===t.id?x?c.a.createElement(h.a,{key:"details".concat(a),component:"th",scope:"row",sortDirection:!1},c.a.createElement(m.a,{title:"Details",placement:"bottom"},c.a.createElement(l.a,{color:"primary",size:"small",component:o.b,to:"".concat(P.url,"/").concat(e.id,"/details")},c.a.createElement(y.a,{fontSize:"default"})))):null:c.a.createElement(h.a,{key:a,component:"th",id:d,scope:"row",padding:"none"},"boolean"===typeof n?n?"Yes":"No":n)})))}))))),c.a.createElement(f.a,{rowsPerPageOptions:[50,100,200,300],component:"div",count:t.length,rowsPerPage:V,page:A,onChangePage:function(e,t){U(t)},onChangeRowsPerPage:function(e){$(parseInt(e.target.value,10)),U(0)}}))}))},551:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(525),r=a(0),c=a.n(r),o=a(207),i=a.n(o),l=a(201);function d(e){var t=e.displayText,a=e.disabled,r=e.reportName,o=e.reportTitle,d=e.headCells,u=e.dataToPrint;return c.a.createElement(n.a,{type:"button","aria-label":"Export to Excel",variant:"contained",size:"medium",color:"primary",disabled:a,onClick:function(){return Object(l.c)(r,o,d,u,r)},startIcon:c.a.createElement(i.a,null)},t||"Excel")}t.b=function(e){var t=e.disabled,a=e.reportName,r=e.reportTitle,o=e.headCells,d=e.dataToPrint;return c.a.createElement(n.a,{type:"button","aria-label":"Export to Excel",variant:"contained",size:"medium",color:"primary",disabled:t,onClick:function(){return Object(l.a)(a,r,o,d,a)},startIcon:c.a.createElement(i.a,null)},"Excel")}},552:function(e,t,a){"use strict";var n=a(1),r=a(72),c=a(3),o=a(0),i=(a(5),a(4)),l=a(204),d=a(59),u=a(6),s=a(450),m=o.forwardRef((function(e,t){var a=e.autoFocus,u=e.checked,m=e.checkedIcon,f=e.classes,b=e.className,p=e.defaultChecked,h=e.disabled,v=e.icon,O=e.id,E=e.inputProps,j=e.inputRef,g=e.name,y=e.onBlur,k=e.onChange,C=e.onFocus,x=e.readOnly,S=e.required,P=e.tabIndex,w=e.type,z=e.value,D=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=Object(l.a)({controlled:u,default:Boolean(p),name:"SwitchBase",state:"checked"}),M=Object(r.a)(I,2),N=M[0],T=M[1],F=Object(d.a)(),R=h;F&&"undefined"===typeof R&&(R=F.disabled);var _="checkbox"===w||"radio"===w;return o.createElement(s.a,Object(n.a)({component:"span",className:Object(i.a)(f.root,b,N&&f.checked,R&&f.disabled),disabled:R,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){y&&y(e),F&&F.onBlur&&F.onBlur(e)},ref:t},D),o.createElement("input",Object(n.a)({autoFocus:a,checked:u,defaultChecked:p,className:f.input,disabled:R,id:_&&O,name:g,onChange:function(e){var t=e.target.checked;T(t),k&&k(e,t)},readOnly:x,ref:j,required:S,tabIndex:P,type:w,value:z},E)),N?m:v)}));t.a=Object(u.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},553:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}),"Undo");t.default=c},554:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"}),"Details");t.default=c},559:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},560:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print");t.default=c},561:function(e,t,a){"use strict";var n=a(525),r=a(0),c=a.n(r),o=a(560),i=a.n(o),l=a(201);t.a=function(e){var t=e.disabled,a=e.reportName,r=e.reportTitle,o=e.headCells,d=e.dataToPrint;return c.a.createElement(n.a,{type:"button","aria-label":"Print to Pdf",variant:"contained",size:"medium",color:"primary",disabled:t,onClick:function(){return Object(l.d)(a,r,o,d)},startIcon:c.a.createElement(i.a,null)},"Pdf")}},571:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=(a(5),a(4)),i=a(552),l=a(116),d=Object(l.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),s=a(26),m=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=a(8),b=a(6),p=c.createElement(u,null),h=c.createElement(d,null),v=c.createElement(m,null),O=c.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?p:a,d=e.classes,u=e.color,s=void 0===u?"secondary":u,m=e.icon,b=void 0===m?h:m,O=e.indeterminate,E=void 0!==O&&O,j=e.indeterminateIcon,g=void 0===j?v:j,y=e.inputProps,k=e.size,C=void 0===k?"medium":k,x=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=E?g:b,P=E?g:l;return c.createElement(i.a,Object(n.a)({type:"checkbox",classes:{root:Object(o.a)(d.root,d["color".concat(Object(f.a)(s))],E&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:s,inputProps:Object(n.a)({"data-indeterminate":E},y),icon:c.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===C?C:S.props.fontSize}),checkedIcon:c.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===C?C:P.props.fontSize}),ref:t},x))}));t.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O)},572:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(9),r=a(7);function c(e){Object(r.a)(1,arguments);var t=Object(n.a)(e);return t.setDate(1),t.setHours(0,0,0,0),t}},573:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(17),r=a(545),c=a(7);function o(e,t){Object(c.a)(2,arguments);var a=Object(n.a)(t);return Object(r.a)(e,-a)}},574:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(9),r=a(7);function c(e){Object(r.a)(1,arguments);var t=Object(n.a)(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}},575:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(17),r=a(545),c=a(7);function o(e,t){Object(c.a)(2,arguments);var a=Object(n.a)(t);return Object(r.a)(e,12*a)}function i(e,t){Object(c.a)(2,arguments);var a=Object(n.a)(t);return o(e,-a)}},576:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=(a(5),a(4)),i=a(116),l=Object(i.a)(c.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),d=a(6),u=a(200),s=a(8),m=c.forwardRef((function(e,t){var a=e.active,i=void 0!==a&&a,d=e.children,m=e.classes,f=e.className,b=e.direction,p=void 0===b?"asc":b,h=e.hideSortIcon,v=void 0!==h&&h,O=e.IconComponent,E=void 0===O?l:O,j=Object(r.a)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return c.createElement(u.a,Object(n.a)({className:Object(o.a)(m.root,f,i&&m.active),component:"span",disableRipple:!0,ref:t},j),d,v&&!i?null:c.createElement(E,{className:Object(o.a)(m.icon,m["iconDirection".concat(Object(s.a)(p))])}))}));t.a=Object(d.a)((function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,"& $icon":{opacity:.5}},"&$active":{color:e.palette.text.primary,"&& $icon":{opacity:1,color:e.palette.text.secondary}}},active:{},icon:{fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}}),{name:"MuiTableSortLabel"})(m)},583:function(e,t,a){"use strict";var n=a(10),r=a.n(n),c=a(20),o=a(525),i=a(0),l=a.n(i),d=a(584),u=a.n(d),s=a(201),m=a(37),f=a(41);t.a=Object(f.b)(null,(function(e){return{handleItemSubmit:function(t,a){return e(Object(m.h)(t,a))}}}))((function(e){var t=e.disabled,a=e.text,n=e.savingUrl,i=e.baseObjectToAddProperties,d=e.handleItemSubmit;return l.a.createElement("div",null,l.a.createElement("input",{accept:".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",style:{display:"none"},id:"contained-button-file",type:"file",onChange:function(e){var t=e.target.files;if(t.length){var a=t[0],o=new FileReader;o.onload=function(e){var t=e.target.result;Object(s.g)(t).forEach(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i&&Object.assign(t,i),e.next=3,d(t,n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},o.readAsBinaryString(a)}}}),l.a.createElement("label",{htmlFor:"contained-button-file"},l.a.createElement(o.a,{variant:"contained",color:"primary",component:"span",disabled:t,startIcon:l.a.createElement(u.a,null)},a||"Upload")))}))},584:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=c},674:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a(202),c=a(203),o=a(0),i=a.n(o),l=a(36),d=a(555),u=a.n(d),s=a(205),m=a.n(s),f=a(553),b=a.n(f),p=a(559),h=a.n(p),v=a(541),O=a(525),E=a(453),j=a(524),g=a(534),y=a(41),k=a(37),C=a(550),x=a(46),S=a(25),P=a(551),w=a(549),z=a(561),D=a(583),I=Object(w.e)(),M=[{id:"title",numeric:!1,disablePadding:!0,label:"Title"},{id:"gender",numeric:!1,disablePadding:!0,label:"Gender"},{id:"first_name",numeric:!1,disablePadding:!0,label:"First Name"},{id:"last_name",numeric:!1,disablePadding:!0,label:"Last Name"},{id:"id_number",numeric:!1,disablePadding:!0,label:"ID Number"},{id:"personal_phone_number",numeric:!1,disablePadding:!0,label:"Phone Number"},{id:"contact_email",numeric:!1,disablePadding:!0,label:"Email"},{id:"details",numeric:!1,disablePadding:!0,label:"Details"},{id:"edit",numeric:!1,disablePadding:!0,label:"Edit"},{id:"delete",numeric:!1,disablePadding:!0,label:"Delete"}],N=function(e){var t=e.contacts,a=e.match,d=e.handleItemDelete,s=Object(o.useState)([]),f=Object(n.a)(s,2),p=f[0],y=f[1],k=Object(o.useState)([]),S=Object(n.a)(k,2),w=S[0],N=S[1],T=Object(o.useState)(""),F=Object(n.a)(T,2),R=F[0],_=F[1],B=Object(o.useState)(""),H=Object(n.a)(B,2),L=H[0],A=H[1],U=Object(o.useState)(""),W=Object(n.a)(U,2),Y=W[0],V=W[1],$=Object(o.useState)(""),q=Object(n.a)($,2),G=q[0],J=q[1],K=Object(o.useState)([]),Q=Object(n.a)(K,2),X=Q[0],Z=Q[1],ee=Object(x.a)();Object(o.useEffect)((function(){y(t),N(t)}),[t]);var te=function(e){e.preventDefault();var t=p.filter((function(e){var t=e.first_name;return!R||t.toLowerCase().includes(R.toLowerCase())})).filter((function(e){var t=e.last_name;return!L||t.toLowerCase().includes(L.toLowerCase())})).filter((function(e){var t=e.gender;return!G||t===G})).filter((function(e){var t=e.id_number;return!Y||String(t).includes(Y)}));N(t)};return i.a.createElement(r.a,{pageTitle:"Tenants"},i.a.createElement(E.a,{container:!0,spacing:3,alignItems:"center"},i.a.createElement(E.a,{item:!0,key:2},i.a.createElement(c.a,{text:"Tenants"})),i.a.createElement(E.a,{container:!0,spacing:2,item:!0,alignItems:"center",direction:"row",key:1},i.a.createElement(E.a,{item:!0},i.a.createElement(O.a,{type:"button",color:"primary",variant:"contained",size:"medium",startIcon:i.a.createElement(h.a,null),component:l.b,to:"".concat(a.url,"/new")},"NEW")),i.a.createElement(E.a,{item:!0},i.a.createElement(O.a,{type:"button",color:"primary",variant:"contained",size:"medium",startIcon:i.a.createElement(u.a,null),disabled:!X.length,component:l.b,to:"".concat(a.url,"/").concat(X[0],"/edit")},"Edit")),i.a.createElement(E.a,{item:!0},i.a.createElement(z.a,{disabled:!X.length,reportName:"Tenant Records",reportTitle:"Tenant Records",headCells:M,dataToPrint:p.filter((function(e){var t=e.id;return X.includes(t)}))})),i.a.createElement(E.a,{item:!0},i.a.createElement(P.b,{disabled:!X.length,reportName:"Contacts  Records",reportTitle:"Contact Data",headCells:M,dataToPrint:p.filter((function(e){var t=e.id;return X.includes(t)}))})),i.a.createElement(E.a,{item:!0},i.a.createElement(D.a,{savingUrl:"contacts",text:"Upload Contacts"}))),i.a.createElement(E.a,{item:!0,xs:12},i.a.createElement(g.a,{border:1,borderRadius:"borderRadius",borderColor:"grey.400"},i.a.createElement("form",{className:ee.form,id:"contactSearchForm",onSubmit:te},i.a.createElement(E.a,{container:!0,spacing:2,justify:"center",direction:"row"},i.a.createElement(E.a,{item:!0,xs:12,md:6},i.a.createElement(v.a,{fullWidth:!0,variant:"outlined",id:"contact_first_name",name:"contact_first_name",label:"First Name",value:R,onChange:function(e){_(e.target.value.trim())}})),i.a.createElement(E.a,{item:!0,xs:12,md:6},i.a.createElement(v.a,{fullWidth:!0,variant:"outlined",name:"last_name",label:"Last Name",id:"last_name",onChange:function(e){A(e.target.value.trim())},value:L}))),i.a.createElement(E.a,{container:!0,spacing:2,justify:"center",direction:"row"},i.a.createElement(E.a,{item:!0,xs:12,md:6},i.a.createElement(v.a,{fullWidth:!0,variant:"outlined",id:"idFilter",name:"idFilter",label:"ID Number",value:Y,onChange:function(e){V(e.target.value)}})),i.a.createElement(E.a,{item:!0,xs:12,md:6},i.a.createElement(v.a,{fullWidth:!0,select:!0,variant:"outlined",name:"gender",label:"Gender",id:"gender",onChange:function(e){J(e.target.value)},value:G},I.map((function(e,t){return i.a.createElement(j.a,{key:t,value:e},e)}))))),i.a.createElement(E.a,{container:!0,spacing:2,item:!0,justify:"flex-end",alignItems:"center",direction:"row",key:1},i.a.createElement(E.a,{item:!0},i.a.createElement(O.a,{onClick:function(e){return te(e)},type:"submit",form:"contactSearchForm",color:"primary",variant:"contained",size:"medium",startIcon:i.a.createElement(m.a,null)},"SEARCH")),i.a.createElement(E.a,{item:!0},i.a.createElement(O.a,{onClick:function(e){!function(e){e.preventDefault(),N(p),_(""),A(""),V(""),J("")}(e)},type:"reset",form:"propertySearchForm",color:"primary",variant:"contained",size:"medium",startIcon:i.a.createElement(b.a,null)},"RESET")))))),i.a.createElement(E.a,{item:!0,xs:12},i.a.createElement(C.a,{selected:X,setSelected:Z,rows:w,headCells:M,handleDelete:d,noDetailsCol:!0,deleteUrl:"contacts"}))))};N=Object(y.b)((function(e){return{contacts:e.contacts}}),(function(e){return{handleItemDelete:function(t,a){return e(Object(k.g)(t,a))}}}))(N),t.default=Object(S.g)(N)}}]);
//# sourceMappingURL=12.e696f257.chunk.js.map