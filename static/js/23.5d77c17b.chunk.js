(this.webpackJsonppropetypro=this.webpackJsonppropetypro||[]).push([[23],{550:function(e,t,a){"use strict";var n=a(44),r=a(0),c=a.n(r),o=a(36),i=a(534),l=a(450),d=a(666),s=a(665),u=a(662),m=a(667),p=a(713),f=a(571),b=a(664),h=a(663),v=a(562),E=a.n(v),y=a(555),g=a.n(y),O=a(554),k=a.n(O),j=a(25),x=a(576),C=a(661);var P=function(e){var t=e.classes,a=e.onSelectAllClick,n=e.order,r=e.orderBy,o=e.headCells,i=e.numSelected,l=e.rowCount,d=e.onRequestSort;return c.a.createElement(C.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,{padding:"checkbox"},c.a.createElement(f.a,{indeterminate:i>0&&i<l,checked:i===l,onChange:a,inputProps:{"aria-label":"select all"}})),o.map((function(e){return c.a.createElement(h.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&n},c.a.createElement(x.a,{active:r===e.id,direction:n,onClick:(a=e.id,function(e){d(e,a)})},e.label,r===e.id?c.a.createElement("span",{className:t.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var a}))))},S=a(199),z=Object(S.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function I(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}t.a=Object(j.g)((function(e){var t=e.rows,a=e.headCells,r=e.selected,v=e.setSelected,y=e.deleteUrl,O=e.handleDelete,j=e.noEditCol,x=e.noDeleteCol,C=e.noDetailsCol,S=e.match,w=z(),_=c.a.useState("asc"),D=Object(n.a)(_,2),N=D[0],R=D[1],M=c.a.useState("Beds"),T=Object(n.a)(M,2),B=T[0],H=T[1],F=c.a.useState(0),L=Object(n.a)(F,2),A=L[0],V=L[1],$=c.a.useState(50),q=Object(n.a)($,2),U=q[0],W=q[1];return c.a.createElement(i.a,{border:1,borderRadius:"borderRadius",borderColor:"grey.400"},c.a.createElement(b.a,null,c.a.createElement(s.a,{stickyHeader:!0,className:w.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},c.a.createElement(P,{classes:w,numSelected:r.length,order:N,orderBy:B,onSelectAllClick:function(e){if(e.target.checked){var a=t.map((function(e){return e.id}));v(a)}else v([])},headCells:a,onRequestSort:function(e,t){R(B===t&&"desc"===N?"asc":"desc"),H(t)},rowCount:t.length}),c.a.createElement(d.a,null,function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(t,function(e,t){return"desc"===e?function(e,a){return I(e,a,t)}:function(e,a){return-I(e,a,t)}}(N,B)).slice(A*U,A*U+U).map((function(e,t){var n,i=(n=e.id,-1!==r.indexOf(n)),d="enhanced-table-checkbox-".concat(t);return c.a.createElement(u.a,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,key:e.id,selected:i},c.a.createElement(h.a,{padding:"checkbox"},c.a.createElement(f.a,{onClick:function(t){return function(e,t){e.stopPropagation();var a=r.indexOf(t),n=[];-1===a?n=n.concat(r,t):0===a?n=n.concat(r.slice(1)):a===r.length-1?n=n.concat(r.slice(0,-1)):a>0&&(n=n.concat(r.slice(0,a),r.slice(a+1))),v(n)}(t,e.id)},checked:i,inputProps:{"aria-labelledby":d}})),a.map((function(t,a){var n=e[t.id];return"edit"===t.id?j?null:c.a.createElement(h.a,{key:"edit".concat(a),component:"th",scope:"row",sortDirection:!1},c.a.createElement(m.a,{title:"Edit",placement:"bottom"},c.a.createElement(l.a,{color:"primary",size:"small",component:o.b,to:"".concat(S.url,"/").concat(e.id,"/edit")},c.a.createElement(g.a,{fontSize:"default"})))):"delete"===t.id?x?null:c.a.createElement(h.a,{key:"delete".concat(a),component:"th",scope:"row",sortDirection:!1},c.a.createElement(m.a,{title:"Delete",placement:"bottom"},c.a.createElement(l.a,{onClick:function(t){O(e.id,y)},color:"primary",size:"small"},c.a.createElement(E.a,{fontSize:"default"})))):"details"===t.id?C?c.a.createElement(h.a,{key:"details".concat(a),component:"th",scope:"row",sortDirection:!1},c.a.createElement(m.a,{title:"Details",placement:"bottom"},c.a.createElement(l.a,{color:"primary",size:"small",component:o.b,to:"".concat(S.url,"/").concat(e.id,"/details")},c.a.createElement(k.a,{fontSize:"default"})))):null:c.a.createElement(h.a,{key:a,component:"th",id:d,scope:"row",padding:"none"},"boolean"===typeof n?n?"Yes":"No":n)})))}))))),c.a.createElement(p.a,{rowsPerPageOptions:[50,100,200,300],component:"div",count:t.length,rowsPerPage:U,page:A,onChangePage:function(e,t){V(t)},onChangeRowsPerPage:function(e){W(parseInt(e.target.value,10)),V(0)}}))}))},551:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(525),r=a(0),c=a.n(r),o=a(207),i=a.n(o),l=a(201);function d(e){var t=e.displayText,a=e.disabled,r=e.reportName,o=e.reportTitle,d=e.headCells,s=e.dataToPrint;return c.a.createElement(n.a,{type:"button","aria-label":"Export to Excel",variant:"contained",size:"medium",color:"primary",disabled:a,onClick:function(){return Object(l.c)(r,o,d,s,r)},startIcon:c.a.createElement(i.a,null)},t||"Excel")}t.b=function(e){var t=e.disabled,a=e.reportName,r=e.reportTitle,o=e.headCells,d=e.dataToPrint;return c.a.createElement(n.a,{type:"button","aria-label":"Export to Excel",variant:"contained",size:"medium",color:"primary",disabled:t,onClick:function(){return Object(l.a)(a,r,o,d,a)},startIcon:c.a.createElement(i.a,null)},"Excel")}},552:function(e,t,a){"use strict";var n=a(1),r=a(72),c=a(3),o=a(0),i=(a(5),a(4)),l=a(204),d=a(59),s=a(6),u=a(450),m=o.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,f=e.className,b=e.defaultChecked,h=e.disabled,v=e.icon,E=e.id,y=e.inputProps,g=e.inputRef,O=e.name,k=e.onBlur,j=e.onChange,x=e.onFocus,C=e.readOnly,P=e.required,S=e.tabIndex,z=e.type,I=e.value,w=Object(c.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),_=Object(l.a)({controlled:s,default:Boolean(b),name:"SwitchBase",state:"checked"}),D=Object(r.a)(_,2),N=D[0],R=D[1],M=Object(d.a)(),T=h;M&&"undefined"===typeof T&&(T=M.disabled);var B="checkbox"===z||"radio"===z;return o.createElement(u.a,Object(n.a)({component:"span",className:Object(i.a)(p.root,f,N&&p.checked,T&&p.disabled),disabled:T,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),M&&M.onFocus&&M.onFocus(e)},onBlur:function(e){k&&k(e),M&&M.onBlur&&M.onBlur(e)},ref:t},w),o.createElement("input",Object(n.a)({autoFocus:a,checked:s,defaultChecked:b,className:p.input,disabled:T,id:B&&E,name:O,onChange:function(e){var t=e.target.checked;R(t),j&&j(e,t)},readOnly:C,ref:g,required:P,tabIndex:S,type:z,value:I},y)),N?m:v)}));t.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},553:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}),"Undo");t.default=c},554:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"}),"Details");t.default=c},559:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},560:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(15)).default)(r.default.createElement("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"}),"Print");t.default=c},561:function(e,t,a){"use strict";var n=a(525),r=a(0),c=a.n(r),o=a(560),i=a.n(o),l=a(201);t.a=function(e){var t=e.disabled,a=e.reportName,r=e.reportTitle,o=e.headCells,d=e.dataToPrint;return c.a.createElement(n.a,{type:"button","aria-label":"Print to Pdf",variant:"contained",size:"medium",color:"primary",disabled:t,onClick:function(){return Object(l.d)(a,r,o,d)},startIcon:c.a.createElement(i.a,null)},"Pdf")}},571:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=(a(5),a(4)),i=a(552),l=a(116),d=Object(l.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=a(26),m=Object(l.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(8),f=a(6),b=c.createElement(s,null),h=c.createElement(d,null),v=c.createElement(m,null),E=c.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?b:a,d=e.classes,s=e.color,u=void 0===s?"secondary":s,m=e.icon,f=void 0===m?h:m,E=e.indeterminate,y=void 0!==E&&E,g=e.indeterminateIcon,O=void 0===g?v:g,k=e.inputProps,j=e.size,x=void 0===j?"medium":j,C=Object(r.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),P=y?O:f,S=y?O:l;return c.createElement(i.a,Object(n.a)({type:"checkbox",classes:{root:Object(o.a)(d.root,d["color".concat(Object(p.a)(u))],y&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":y},k),icon:c.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===x?x:P.props.fontSize}),checkedIcon:c.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===x?x:S.props.fontSize}),ref:t},C))}));t.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(E)},576:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=(a(5),a(4)),i=a(116),l=Object(i.a)(c.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),d=a(6),s=a(200),u=a(8),m=c.forwardRef((function(e,t){var a=e.active,i=void 0!==a&&a,d=e.children,m=e.classes,p=e.className,f=e.direction,b=void 0===f?"asc":f,h=e.hideSortIcon,v=void 0!==h&&h,E=e.IconComponent,y=void 0===E?l:E,g=Object(r.a)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return c.createElement(s.a,Object(n.a)({className:Object(o.a)(m.root,p,i&&m.active),component:"span",disableRipple:!0,ref:t},g),d,v&&!i?null:c.createElement(y,{className:Object(o.a)(m.icon,m["iconDirection".concat(Object(u.a)(b))])}))}));t.a=Object(d.a)((function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,"& $icon":{opacity:.5}},"&$active":{color:e.palette.text.primary,"&& $icon":{opacity:1,color:e.palette.text.secondary}}},active:{},icon:{fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}}),{name:"MuiTableSortLabel"})(m)},671:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a(0),c=a.n(r),o=a(36),i=a(555),l=a.n(i),d=a(205),s=a.n(d),u=a(553),m=a.n(u),p=a(559),f=a.n(p),b=a(453),h=a(525),v=a(534),E=a(541),y=a(524),g=a(37),O=a(550),k=a(25),j=a(46),x=a(41),C=a(551),P=a(202),S=a(203),z=a(561),I=a(536),w=[{id:"expense_date",numeric:!1,disablePadding:!0,label:"Date"},{id:"property_ref",numeric:!1,disablePadding:!0,label:"Property"},{id:"unit_ref",numeric:!1,disablePadding:!0,label:"Unit Ref/Number"},{id:"type",numeric:!1,disablePadding:!0,label:"Expenditure Type"},{id:"amount",numeric:!1,disablePadding:!0,label:"Expenditure Amount(Ksh)"},{id:"edit",numeric:!1,disablePadding:!0,label:"Edit"},{id:"delete",numeric:!1,disablePadding:!0,label:"Delete"}],_=function(e){var t=e.expenses,a=e.handleItemDelete,i=e.properties,d=e.match,u=Object(j.a)(),p=Object(r.useState)([]),g=Object(n.a)(p,2),k=g[0],x=g[1],I=Object(r.useState)([]),_=Object(n.a)(I,2),D=_[0],N=_[1],R=Object(r.useState)(""),M=Object(n.a)(R,2),T=M[0],B=M[1],H=Object(r.useState)(""),F=Object(n.a)(H,2),L=F[0],A=F[1],V=Object(r.useState)("all"),$=Object(n.a)(V,2),q=$[0],U=$[1],W=Object(r.useState)([]),J=Object(n.a)(W,2),K=J[0],Y=J[1];Object(r.useEffect)((function(){x(t),N(t)}),[t]);var G=function(e){e.preventDefault();var t=k.filter((function(e){var t=e.expense_date;return!T||t>=T})).filter((function(e){var t=e.expense_date;return!L||t<=L})).filter((function(e){var t=e.property_id;return"all"===q||t===q}));N(t)};return c.a.createElement(P.a,{pageTitle:"Property Expenses"},c.a.createElement(b.a,{container:!0,spacing:3,alignItems:"center"},c.a.createElement(b.a,{item:!0,lg:12},c.a.createElement(S.a,{text:"Property Expenses"})),c.a.createElement(b.a,{container:!0,spacing:2,item:!0,alignItems:"center",direction:"row",key:1},c.a.createElement(b.a,{item:!0},c.a.createElement(h.a,{type:"button",color:"primary",variant:"contained",size:"medium",startIcon:c.a.createElement(f.a,null),component:o.b,to:"".concat(d.url,"/new")},"NEW")),c.a.createElement(b.a,{item:!0},c.a.createElement(h.a,{type:"button",color:"primary",variant:"contained",size:"medium",startIcon:c.a.createElement(l.a,null),disabled:!K.length,component:o.b,to:"".concat(d.url,"/").concat(K[0],"/edit")},"Edit")),c.a.createElement(b.a,{item:!0},c.a.createElement(z.a,{disabled:!K.length,reportName:"Expenses Records",reportTitle:"Expenses Data",headCells:w,dataToPrint:k.filter((function(e){var t=e.id;return K.includes(t)}))})),c.a.createElement(b.a,{item:!0},c.a.createElement(C.b,{disabled:!K.length,reportName:"Expenses Records",reportTitle:"Expenses Data",headCells:w,dataToPrint:k.filter((function(e){var t=e.id;return K.includes(t)}))}))),c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(v.a,{border:1,borderRadius:"borderRadius",borderColor:"grey.400"},c.a.createElement("form",{className:u.form,id:"contactSearchForm",onSubmit:G},c.a.createElement(b.a,{container:!0,spacing:2,justify:"center",direction:"row"},c.a.createElement(b.a,{container:!0,item:!0,xs:12,md:6,spacing:1,justify:"center",direction:"row"},c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(E.a,{fullWidth:!0,variant:"outlined",type:"date",id:"from_date_filter",name:"from_date_filter",label:"From Date",value:T,onChange:function(e){B(e.target.value)},InputLabelProps:{shrink:!0}})),c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(E.a,{fullWidth:!0,variant:"outlined",type:"date",name:"to_date_filter",label:"To Date",id:"to_date_filter",onChange:function(e){A(e.target.value)},value:L,InputLabelProps:{shrink:!0}}))),c.a.createElement(b.a,{item:!0,xs:12,md:6},c.a.createElement(E.a,{fullWidth:!0,select:!0,variant:"outlined",name:"property_filter",label:"Property",id:"property_filter",onChange:function(e){U(e.target.value)},value:q},c.a.createElement(y.a,{key:"all",value:"all"},"All Properties"),i.map((function(e,t){return c.a.createElement(y.a,{key:t,value:e.id},e.ref)}))))),c.a.createElement(b.a,{container:!0,spacing:2,item:!0,justify:"flex-end",alignItems:"center",direction:"row",key:1},c.a.createElement(b.a,{item:!0},c.a.createElement(h.a,{onClick:function(e){return G(e)},type:"submit",form:"contactSearchForm",color:"primary",variant:"contained",size:"medium",startIcon:c.a.createElement(s.a,null)},"SEARCH")),c.a.createElement(b.a,{item:!0},c.a.createElement(h.a,{onClick:function(e){return function(e){e.preventDefault(),N(k),B(""),A(""),U("all")}(e)},type:"reset",form:"propertySearchForm",color:"primary",variant:"contained",size:"medium",startIcon:c.a.createElement(m.a,null)},"RESET")))))),c.a.createElement(b.a,{item:!0,xs:12},c.a.createElement(O.a,{selected:K,setSelected:Y,rows:D,headCells:w,handleDelete:a,deleteUrl:"expenses"}))))};_=Object(x.b)((function(e){return{expenses:e.expenses.map((function(t){var a=e.propertyUnits.find((function(e){return e.id===t.unit_id}))||{},n=e.properties.find((function(e){return e.id===t.property_id}))||{};return Object.assign({},t,{unit_ref:a.ref,property_ref:n.ref})})).sort((function(e,t){return Object(I.a)(t.expense_date,"yyyy-MM-dd",new Date)-Object(I.a)(e.expense_date,"yyyy-MM-dd",new Date)})),properties:e.properties}}),(function(e){return{handleItemDelete:function(t,a){return e(Object(g.g)(t,a))}}}))(_),t.default=Object(k.g)(_)}}]);
//# sourceMappingURL=23.5d77c17b.chunk.js.map