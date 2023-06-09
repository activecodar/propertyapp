(this.webpackJsonppropetypro=this.webpackJsonppropetypro||[]).push([[53],{556:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),i=a(199),l=a(526),o=a(129),d=a(527),s=a(529),c=a(453),u=a(64),m=Object(i.a)((function(e){return{root:{display:"flex",alignItems:"center",height:80,width:120},wrapper:{margin:e.spacing(1),position:"relative",height:50,width:50},buttonProgress:{color:o.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function p(e){var t=e.open,a=e.dialogTitle,n=m();return r.a.createElement(d.a,{maxWidth:"md","aria-labelledby":"simple-dialog-title",open:t},r.a.createElement(s.a,null,r.a.createElement(c.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(c.a,{item:!0,lg:!0},r.a.createElement(u.a,null,a||"Saving...")),r.a.createElement(c.a,{item:!0,lg:!0},r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.wrapper},t&&r.a.createElement(l.a,{size:50,className:n.buttonProgress})))))))}},707:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),i=a(97),l=a(20),o=a(44),d=a(0),s=a.n(d),c=a(202),u=a(203),m=a(541),p=a(524),h=a(520),b=a(521),v=a(600),y=a(596),f=a(599),g=a(525),E=a(557),_=a.n(E),D=a(558),x=a.n(D),S=a(562),C=a.n(S),I=a(527),T=a(531),j=a(528),O=a(556),M=a(208),w=a(55),P=a(46),k=a(19),W=k.e().shape({title:k.g().required("Title is Required"),start:k.g().required("Start Date is Required"),end:k.c().required("End Date is Required"),description:k.g().required("Event Description is Required"),complete_status:k.b().default(!1),reminder_date:k.c().when("start",(function(e,t){return e&&t.min(e,"Reminder date must be greater than start date")}))}),q=function(e){var t=Object(P.a)(),a=e.currentUser,n=e.handleItemSubmit,r=e.handleItemDelete,i=e.open,l=e.handleClose,o=e.eventToShow,d=e.users,c=e.setEventToShow,u=o.id?"Edit To-Do":"Add To-Do";return s.a.createElement(w.b,{initialValues:o,enableReinitialize:!0,validationSchema:W,onSubmit:function(e,t){var a=t.resetForm,r=t.setStatus;try{var i={id:e.id,title:e.title,start:e.start,end:e.end};i.extendedProps={description:e.description,reminder_date:e.reminder_date,complete_status:e.complete_status},n(i,"to-dos").then((function(t){c({}),a({}),e.id&&l()})),r({sent:!0,msg:"Details saved successfully!"})}catch(o){r({sent:!1,msg:"Error! ".concat(o,".")})}}},(function(e){var n=e.values,o=e.status,c=e.touched,E=e.errors,D=e.handleChange,S=e.handleBlur,w=e.handleSubmit,P=e.isSubmitting;return s.a.createElement(I.a,{open:i,onClose:l,"aria-labelledby":"form-dialog-title"},o&&o.msg&&s.a.createElement(M.a,{variant:o.sent?"success":"error",message:o.msg}),P&&s.a.createElement(O.a,{open:!0}),s.a.createElement(j.a,{id:"form-dialog-title"},u),s.a.createElement("form",{className:t.form,method:"post",id:"todoInputForm",onSubmit:w},s.a.createElement(m.a,{fullWidth:!0,variant:"outlined",name:"title",label:"Title",id:"title",onBlur:S,onChange:D,value:n.title||"",error:E.title&&c.title,helperText:c.title&&E.title}),s.a.createElement(m.a,{fullWidth:!0,variant:"outlined",id:"start",name:"start",label:"Start Date",type:"date",value:n.start||"",onChange:D,onBlur:S,error:E.start&&c.start,helperText:c.start&&E.start,InputLabelProps:{shrink:!0}}),s.a.createElement(m.a,{fullWidth:!0,variant:"outlined",id:"end",name:"end",label:"End Date",type:"date",value:n.end||"",onChange:D,onBlur:S,error:E.end&&c.end,helperText:c.end&&E.end,InputLabelProps:{shrink:!0}}),s.a.createElement(m.a,{fullWidth:!0,select:!0,error:E.assigned_to&&c.assigned_to,helperText:c.assigned_to&&E.assigned_to,variant:"outlined",type:"text",name:"assigned_to",id:"assigned_to",label:"Assigned To",value:n.assigned_to||"",onChange:D,onBlur:S},d.map((function(e,t){return s.a.createElement(p.a,{key:t,value:e.id},e.first_name+" "+e.last_name)}))),s.a.createElement(m.a,{fullWidth:!0,type:"date",variant:"outlined",id:"reminder_date",name:"reminder_date",label:"Reminder Date",value:n.reminder_date||"",onChange:D,onBlur:S,error:E.reminder_date&&c.reminder_date,helperText:c.reminder_date&&E.reminder_date,InputLabelProps:{shrink:!0}}),s.a.createElement(m.a,{fullWidth:!0,variant:"outlined",id:"description",name:"description",label:"Description",value:n.description||"",onChange:D,onBlur:S,error:E.description&&c.description,helperText:c.description&&E.description}),s.a.createElement(h.a,{fullWidth:!0,component:"fieldset"},s.a.createElement(b.a,{component:"legend"},"Complete Status"),s.a.createElement(v.a,{row:!0,"aria-label":"Completed Status",name:"complete_status",value:n.complete_status||"false",onChange:D},s.a.createElement(y.a,{value:"true",control:s.a.createElement(f.a,null),label:"Complete"}),s.a.createElement(y.a,{value:"false",control:s.a.createElement(f.a,null),label:"Incomplete"}))),s.a.createElement(T.a,null,s.a.createElement(g.a,{color:"primary",size:"medium",startIcon:s.a.createElement(x.a,null),onClick:function(){return l()},disableElevation:!0},"Cancel"),s.a.createElement(g.a,{type:"submit",color:"primary",size:"medium",startIcon:s.a.createElement(_.a,null),form:"todoInputForm",disabled:P},"Save"),s.a.createElement(g.a,{color:"primary",size:"medium",startIcon:s.a.createElement(C.a,null),disabled:!n.id,onClick:function(){r(a.tenant,n.id,"to-dos"),l()},disableElevation:!0},"Delete"))))}))},R=a(453),B=a(41),z=a(627),U=a(610),G=a(629),L=a(630),N=(a(631),a(632),a(633),a(37)),F=a(537),A=a(514),J=Object(F.a)(Object(A.a)(),"yyyy-MM-dd");t.default=Object(B.b)((function(e){return{currentUser:e.currentUser,toDos:e.toDos,error:e.error,users:e.users}}),(function(e){return{handleItemDelete:function(t,a){return e(Object(N.g)(t,a))},handleItemSubmit:function(t,a){return e(Object(N.h)(t,a))}}}))((function(e){var t=e.currentUser,a=e.toDos,n=e.users,d=e.handleItemDelete,m=e.handleItemSubmit,p=s.a.useState(!1),h=Object(o.a)(p,2),b=h[0],v=h[1],y=s.a.useState({}),f=Object(o.a)(y,2),g=f[0],E=f[1],_=a.map((function(e){return Object.assign({},e,{backgroundColor:"true"===e.extendedProps.complete_status?"#008000":""})})),D=function(){var e=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={start:Object(F.a)(t.event.start,"yyyy-MM-dd"),end:Object(F.a)(t.event.start,"yyyy-MM-dd"),id:t.event.id,title:t.event.title,extendedProps:Object(i.a)({},t.event.extendedProps)},e.next=3,m(a,"to-dos");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){v(!b)};return s.a.createElement(c.a,{pageTitle:"To-Dos"},s.a.createElement(R.a,{container:!0,spacing:3,justify:"space-evenly",alignItems:"center"},s.a.createElement(R.a,{item:!0,xs:12},s.a.createElement(u.a,{text:"To-Dos"})),s.a.createElement(R.a,{item:!0},s.a.createElement(z.a,{defaultView:"dayGridMonth",header:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},plugins:[U.d,G.a,L.a],editable:!0,events:_,eventResize:function(e){var t=e.event,a={title:t.title,id:t.id,description:t.extendedProps.description,reminder_date:t.extendedProps.reminder_date,complete_status:t.extendedProps.complete_status,start:t.start?Object(F.a)(t.start,"yyyy-MM-dd"):J,end:t.end?Object(F.a)(t.end,"yyyy-MM-dd"):J,allDay:t.allDay};E(a),x()},eventDrop:D,eventClick:function(e){var t=e.event,a={title:t.title,id:t.id,description:t.extendedProps.description,reminder_date:t.extendedProps.reminder_date,complete_status:t.extendedProps.complete_status,start:t.start?Object(F.a)(t.start,"yyyy-MM-dd"):J,end:t.end?Object(F.a)(t.end,"yyyy-MM-dd"):J,allDay:t.allDay};E(a),x()},dateClick:function(e){E({}),x()}}),s.a.createElement(q,{handleItemDelete:d,currentUser:t,handleItemSubmit:m,users:n,eventToShow:g,setEventToShow:E,open:b,handleClose:x}))))}))}}]);
//# sourceMappingURL=53.f1e9172b.chunk.js.map