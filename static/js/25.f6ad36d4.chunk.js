(this.webpackJsonppropetypro=this.webpackJsonppropetypro||[]).push([[25],{552:function(e,t,a){"use strict";var n=a(1),r=a(72),i=a(3),o=a(0),c=(a(5),a(4)),l=a(204),s=a(59),d=a(6),u=a(450),m=o.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,m=e.checkedIcon,p=e.classes,f=e.className,h=e.defaultChecked,b=e.disabled,_=e.icon,v=e.id,y=e.inputProps,E=e.inputRef,g=e.name,O=e.onBlur,C=e.onChange,k=e.onFocus,j=e.readOnly,x=e.required,R=e.tabIndex,w=e.type,q=e.value,I=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),S=Object(l.a)({controlled:d,default:Boolean(h),name:"SwitchBase",state:"checked"}),N=Object(r.a)(S,2),P=N[0],B=N[1],z=Object(s.a)(),M=b;z&&"undefined"===typeof M&&(M=z.disabled);var T="checkbox"===w||"radio"===w;return o.createElement(u.a,Object(n.a)({component:"span",className:Object(c.a)(p.root,f,P&&p.checked,M&&p.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),z&&z.onFocus&&z.onFocus(e)},onBlur:function(e){O&&O(e),z&&z.onBlur&&z.onBlur(e)},ref:t},I),o.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:h,className:p.input,disabled:M,id:T&&v,name:g,onChange:function(e){var t=e.target.checked;B(t),C&&C(e,t)},readOnly:j,ref:E,required:x,tabIndex:R,type:w,value:q},y)),P?m:_)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},556:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),i=a(199),o=a(526),c=a(129),l=a(527),s=a(529),d=a(453),u=a(64),m=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center",height:80,width:120},wrapper:{margin:e.spacing(1),position:"relative",height:50,width:50},buttonProgress:{color:c.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function p(e){var t=e.open,a=e.dialogTitle,n=m();return r.a.createElement(l.a,{maxWidth:"md","aria-labelledby":"simple-dialog-title",open:t},r.a.createElement(s.a,null,r.a.createElement(d.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(d.a,{item:!0,lg:!0},r.a.createElement(u.a,null,a||"Saving...")),r.a.createElement(d.a,{item:!0,lg:!0},r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.wrapper},t&&r.a.createElement(o.a,{size:50,className:n.buttonProgress})))))))}},557:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(15)).default)(r.default.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=i},558:function(e,t,a){"use strict";var n=a(14);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(15)).default)(r.default.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.default=i},579:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},581:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=n.useState(e),a=t[0],r=t[1],i=e||a;return n.useEffect((function(){null==a&&r("mui-".concat(Math.round(1e5*Math.random())))}),[a]),i}},596:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),o=(a(5),a(4)),c=a(59),l=a(6),s=a(64),d=a(8),u=i.forwardRef((function(e,t){e.checked;var a=e.classes,l=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),f=e.labelPlacement,h=void 0===f?"end":f,b=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),_=Object(c.a)(),v=m;"undefined"===typeof v&&"undefined"!==typeof u.props.disabled&&(v=u.props.disabled),"undefined"===typeof v&&_&&(v=_.disabled);var y={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),i.createElement("label",Object(n.a)({className:Object(o.a)(a.root,l,"end"!==h&&a["labelPlacement".concat(Object(d.a)(h))],v&&a.disabled),ref:t},b),i.cloneElement(u,y),i.createElement(s.a,{component:"span",className:Object(o.a)(a.label,v&&a.disabled)},p))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},599:function(e,t,a){"use strict";var n=a(1),r=a(3),i=a(0),o=(a(5),a(4)),c=a(552),l=a(116),s=Object(l.a)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),d=Object(l.a)(i.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),u=a(6);var m=Object(u.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return i.createElement("div",{className:Object(o.a)(a.root,t&&a.checked)},i.createElement(s,{fontSize:n}),i.createElement(d,{fontSize:n,className:a.layer}))})),p=a(26),f=a(8),h=a(74),b=a(579);var _=i.createElement(m,{checked:!0}),v=i.createElement(m,null),y=i.forwardRef((function(e,t){var a=e.checked,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.name,m=e.onChange,p=e.size,y=void 0===p?"medium":p,E=Object(r.a)(e,["checked","classes","color","name","onChange","size"]),g=i.useContext(b.a),O=a,C=Object(h.a)(m,g&&g.onChange),k=u;return g&&("undefined"===typeof O&&(O=g.value===e.value),"undefined"===typeof k&&(k=g.name)),i.createElement(c.a,Object(n.a)({color:d,type:"radio",icon:i.cloneElement(v,{fontSize:"small"===y?"small":"default"}),checkedIcon:i.cloneElement(_,{fontSize:"small"===y?"small":"default"}),classes:{root:Object(o.a)(l.root,l["color".concat(Object(f.a)(d))]),checked:l.checked,disabled:l.disabled},name:k,checked:O,onChange:C,ref:t},E))}));t.a=Object(u.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(y)},600:function(e,t,a){"use strict";var n=a(1),r=a(72),i=a(3),o=a(0),c=(a(5),a(4)),l=a(6),s=o.forwardRef((function(e,t){var a=e.classes,r=e.className,l=e.row,s=void 0!==l&&l,d=Object(i.a)(e,["classes","className","row"]);return o.createElement("div",Object(n.a)({className:Object(c.a)(a.root,r,s&&a.row),ref:t},d))})),d=Object(l.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(s),u=a(16),m=a(204),p=a(579),f=a(581),h=o.forwardRef((function(e,t){var a=e.actions,c=e.children,l=e.name,s=e.value,h=e.onChange,b=Object(i.a)(e,["actions","children","name","value","onChange"]),_=o.useRef(null),v=Object(m.a)({controlled:s,default:e.defaultValue,name:"RadioGroup"}),y=Object(r.a)(v,2),E=y[0],g=y[1];o.useImperativeHandle(a,(function(){return{focus:function(){var e=_.current.querySelector("input:not(:disabled):checked");e||(e=_.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var O=Object(u.a)(t,_),C=Object(f.a)(l);return o.createElement(p.a.Provider,{value:{name:C,onChange:function(e){g(e.target.value),h&&h(e,e.target.value)},value:E}},o.createElement(d,Object(n.a)({role:"radiogroup",ref:O},b),c))}));t.a=h},706:function(e,t,a){"use strict";a.r(t);var n=a(97),r=a(0),i=a.n(r),o=a(453),c=a(203),l=a(202),s=a(41),d=a(37),u=a(10),m=a.n(u),p=a(20),f=a(520),h=a(541),b=a(521),_=a(596),v=a(524),y=a(599),E=a(600),g=a(525),O=a(557),C=a.n(O),k=a(558),j=a.n(k),x=a(208),R=a(55),w=a(46),q=a(537),I=a(514),S=a(19),N=a(556),P=Object(q.a)(Object(I.a)(),"yyyy-MM-dd"),B=S.e().shape({property_unit:S.g().required("Unit is required"),property:S.g().required("Property is required"),date_created:S.c().required("Date Created is Required"),maintenance_details:S.g().trim().required("Maintenance Details Required"),expected_completion_date:S.c().required("Expected Completion Date Required")}),z=function(e){var t=Object(w.a)(),a=e.handleItemSubmit,n=e.history,r=e.maintenanceRequestToEdit,c=e.properties,l=e.propertyUnits,s=r,d={id:s.id,property_unit:s.property_unit||"",property:s.property||"",tenant_id:s.tenant_id||"",date_created:s.date_created||P,expected_completion_date:s.expected_completion_date||P,actual_completion_date:s.actual_completion_date||P,maintenance_details:s.maintenance_details||"",other_details:s.other_details||"",enter_permission:s.enter_permission||"Yes",issue_urgency:s.issue_urgency||"No",status:s.status||"Open"};return i.a.createElement(R.b,{initialValues:d,enableReinitialize:!0,validationSchema:B,onSubmit:function(){var e=Object(p.a)(m.a.mark((function e(t,r){var i,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.resetForm,o=r.setStatus,e.prev=1,c={id:t.id,property_unit:t.property_unit,property:t.property,date_created:t.date_created,expected_completion_date:t.expected_completion_date,actual_completion_date:t.actual_completion_date,tenant_id:l.find((function(e){return e.id===t.property_unit})).tenant_id,maintenance_details:t.maintenance_details,other_details:t.other_details,enter_permission:t.enter_permission,issue_urgency:t.issue_urgency,status:t.status},e.next=5,a(c,"maintenance-requests");case 5:i({}),t.id&&n.goBack(),o({sent:!0,msg:"Details saved successfully!"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o({sent:!1,msg:"Error! ".concat(e.t0,".")});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var a=e.values,r=e.status,s=e.touched,d=e.errors,u=e.handleChange,m=e.setFieldValue,p=e.handleBlur,O=e.handleSubmit,k=e.isSubmitting;return i.a.createElement("form",{className:t.form,method:"post",id:"maintenanceRequestInputForm",onSubmit:O},i.a.createElement(o.a,{container:!0,spacing:2,justify:"center",alignItems:"center",direction:"column"},r&&r.msg&&i.a.createElement(x.a,{variant:r.sent?"success":"error",message:r.msg}),k&&i.a.createElement(N.a,{open:!0}),i.a.createElement(o.a,{item:!0,container:!0,direction:"row",spacing:2},i.a.createElement(o.a,{item:!0,xs:12,md:6},i.a.createElement(h.a,{fullWidth:!0,select:!0,variant:"outlined",name:"property",label:"Property",id:"property",onChange:function(e){m("property",e.target.value),m("property_unit","")},value:a.property,error:d.property&&s.property,helperText:s.property&&d.property},c.map((function(e,t){return i.a.createElement(v.a,{key:t,value:e.id},e.ref)})))),i.a.createElement(o.a,{item:!0,xs:12,md:6},i.a.createElement(h.a,{fullWidth:!0,select:!0,variant:"outlined",name:"property_unit",label:"Unit",id:"property_unit",onChange:u,value:a.property_unit,error:d.property_unit&&s.property_unit,helperText:s.property_unit&&d.property_unit},l.filter((function(e){return e.property_id===a.property})).map((function(e,t){return i.a.createElement(v.a,{key:t,value:e.id},e.ref)}))))),i.a.createElement(o.a,{item:!0,container:!0,direction:"column",spacing:2},i.a.createElement(o.a,{item:!0},i.a.createElement(h.a,{fullWidth:!0,type:"date",InputLabelProps:{shrink:!0},variant:"outlined",id:"date_created",name:"date_created",label:"Date Created",value:a.date_created,onChange:u,onBlur:p,error:d.date_created&&s.date_created,helperText:s.date_created&&d.date_created})),i.a.createElement(o.a,{item:!0},i.a.createElement(h.a,{fullWidth:!0,type:"date",InputLabelProps:{shrink:!0},variant:"outlined",id:"expected_completion_date",name:"expected_completion_date",label:"Expected Completion Date",value:a.expected_completion_date,onChange:u,onBlur:p,error:d.expected_completion_date&&s.expected_completion_date,helperText:s.expected_completion_date&&d.expected_completion_date})),i.a.createElement(o.a,{item:!0},i.a.createElement(h.a,{fullWidth:!0,type:"date",InputLabelProps:{shrink:!0},variant:"outlined",id:"actual_completion_date",name:"actual_completion_date",label:"Actual Completion Date",value:a.actual_completion_date,onChange:u,onBlur:p,error:d.actual_completion_date&&s.actual_completion_date,helperText:s.actual_completion_date&&d.actual_completion_date})),i.a.createElement(o.a,{item:!0},i.a.createElement(h.a,{fullWidth:!0,rows:4,multiline:!0,variant:"outlined",id:"maintenance_details",name:"maintenance_details",label:"What Needs Attention?",value:a.maintenance_details,onChange:u,onBlur:p,error:d.maintenance_details&&s.maintenance_details,helperText:s.maintenance_details&&d.maintenance_details})),i.a.createElement(o.a,{item:!0},i.a.createElement(h.a,{fullWidth:!0,multiline:!0,rows:4,variant:"outlined",id:"other_details",name:"other_details",label:"Anything maintenance should know when entering the residence?",value:a.other_details,onChange:u,onBlur:p,error:d.other_details&&s.other_details,helperText:s.other_details&&d.other_details})),i.a.createElement(o.a,{item:!0},i.a.createElement(f.a,{fullWidth:!0,component:"fieldset"},i.a.createElement(b.a,{component:"legend"},"Is the issue urgent?"),i.a.createElement(E.a,{row:!0,"aria-label":"Issue urgency",name:"issue_urgency",value:a.issue_urgency,onChange:u},i.a.createElement(_.a,{value:"Yes",control:i.a.createElement(y.a,null),label:"Yes"}),i.a.createElement(_.a,{value:"No",control:i.a.createElement(y.a,null),label:"No"})))),i.a.createElement(o.a,{item:!0},i.a.createElement(f.a,{fullWidth:!0,component:"fieldset"},i.a.createElement(b.a,{component:"legend"},"Permission given to enter the residence?"),i.a.createElement(E.a,{row:!0,"aria-label":"Permission to enter residence",name:"enter_permission",value:a.enter_permission,onChange:u},i.a.createElement(_.a,{value:"Yes",control:i.a.createElement(y.a,null),label:"Yes"}),i.a.createElement(_.a,{value:"No",control:i.a.createElement(y.a,null),label:"No"})))),i.a.createElement(o.a,{item:!0},i.a.createElement(f.a,{fullWidth:!0,component:"fieldset"},i.a.createElement(b.a,{component:"legend"},"Maintenance Request Status"),i.a.createElement(E.a,{row:!0,"aria-label":"Maintenance Request Status",name:"status",value:a.status,onChange:u},i.a.createElement(_.a,{value:"Open",control:i.a.createElement(y.a,null),label:"Open"}),i.a.createElement(_.a,{value:"Closed",control:i.a.createElement(y.a,null),label:"Closed"}))))),i.a.createElement(o.a,{item:!0,container:!0,direction:"row",className:t.buttonBox},i.a.createElement(o.a,{item:!0},i.a.createElement(g.a,{color:"secondary",variant:"contained",size:"medium",startIcon:i.a.createElement(j.a,null),onClick:function(){return n.goBack()},disableElevation:!0},"Cancel")),i.a.createElement(o.a,{item:!0},i.a.createElement(g.a,{type:"submit",color:"primary",variant:"contained",size:"medium",startIcon:i.a.createElement(C.a,null),form:"maintenanceRequestInputForm",disabled:k},"Save")))))}))},M=a(25),T=function(e){var t=e.history,a=e.contacts,n=e.properties,r=e.propertyUnits,s=e.maintenanceRequestToEdit,d=e.handleItemSubmit,u=s.id?"Edit Maintenance Request":"New Maintenance Request";return i.a.createElement(l.a,{pageTitle:"Maintenance Request Details"},i.a.createElement(o.a,{container:!0,justify:"center",direction:"column"},i.a.createElement(o.a,{item:!0,key:1},i.a.createElement(c.a,{text:u})),i.a.createElement(o.a,{item:!0,key:2},i.a.createElement(z,{maintenanceRequestToEdit:s,contacts:a,handleItemSubmit:d,history:t,properties:n,propertyUnits:r}))))};T=Object(s.b)((function(e,t){var a=e.leases.filter((function(e){return!0!==e.terminated})).map((function(t){return Object(n.a)(Object(n.a)({},e.propertyUnits.find((function(e){return e.id===t.unit_id}))),{},{tenant_id:Array.isArray(t.tenants)?t.tenants[0]:""})}));return{maintenanceRequestToEdit:e.maintenanceRequests.find((function(e){return e.id===t.match.params.maintenanceRequestId}))||{},properties:e.properties,propertyUnits:a}}),(function(e){return{handleItemSubmit:function(t,a){return e(Object(d.h)(t,a))}}}))(T);t.default=Object(M.g)(T)}}]);
//# sourceMappingURL=25.f6ad36d4.chunk.js.map