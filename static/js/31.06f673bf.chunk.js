(this.webpackJsonppropetypro=this.webpackJsonppropetypro||[]).push([[31],{545:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(9),o=a(7);function c(e,t){Object(o.a)(2,arguments);var a=Object(n.a)(e),c=Object(r.a)(t);if(isNaN(c))return new Date(NaN);if(!c)return a;var i=a.getDate(),u=new Date(a.getTime());u.setMonth(a.getMonth()+c+1,0);var l=u.getDate();return i>=l?u:(a.setFullYear(u.getFullYear(),u.getMonth(),i),a)}},549:function(e,t,a){"use strict";a.d(t,"b",(function(){return O})),a.d(t,"e",(function(){return j})),a.d(t,"d",(function(){return v})),a.d(t,"p",(function(){return _})),a.d(t,"m",(function(){return E})),a.d(t,"n",(function(){return C})),a.d(t,"j",(function(){return x})),a.d(t,"i",(function(){return M})),a.d(t,"l",(function(){return D})),a.d(t,"o",(function(){return w})),a.d(t,"f",(function(){return k})),a.d(t,"h",(function(){return B})),a.d(t,"q",(function(){return F})),a.d(t,"c",(function(){return S})),a.d(t,"g",(function(){return T})),a.d(t,"k",(function(){return R})),a.d(t,"a",(function(){return P}));var r=a(512),n=a(513),o=a(514),c=a(515),i=a(572),u=a(573),l=a(574),s=a(575),d=Object(r.a)({start:Object(n.a)(Object(o.a)()),end:Object(c.a)(Object(o.a)())}),b=["Mr","Prof","Hon","Sir","Mrs","Miss","Dr","Madam","Other"],f=["Male","Female","Unspecified"],m=["Security Deposit Refund","Water Deposit Refund","Management Fees","Utilities","Taxes","Mortgage","Office","Maintenance & Cleaning","Advertising","Insurance","Legal & Other Professional Fees","Auto & Travel","Supplies","Other Refund","Repairs","Other"],y=["Bed Sitter","One Bedroom","Two Bedroom","Single Room","Double Room","Shop","Other"],p=["Fixed","Fixed w/rollover"],g=["Electric","Sewer","Water"],h=["Daily","Weekly","Monthly","Quarterly","Half-Yearly","Yearly"];function O(){return b}function j(){return f}function v(){return m}function _(){return y}function E(){for(var e=[],t=1;t<=5;t++)e.push(t);return e.concat("5+")}function C(){for(var e=[],t=1;t<=5;t++)e.push(t);return e}function x(){return g}function M(){return p}function D(){return h}function w(){return[{id:"month-to-date",text:"Month To Date"},{id:"last-month",text:"Last Month"},{id:"3-months-to-date",text:"3 Months To Date"},{id:"year-to-date",text:"Year To Date"},{id:"last-year",text:"Last Year"}]}function k(){return[Object(i.a)(Object(u.a)(Object(o.a)(),1)),Object(l.a)(Object(u.a)(Object(o.a)(),1))]}function B(){return[Object(n.a)(Object(s.a)(Object(o.a)(),1)),Object(c.a)(Object(s.a)(Object(o.a)(),1))]}function F(){return[Object(n.a)(Object(o.a)()),Object(o.a)()]}function S(){return[Object(i.a)(Object(o.a)()),Object(l.a)(Object(o.a)())]}function T(){return[Object(i.a)(Object(u.a)(Object(o.a)(),2)),Object(l.a)(Object(o.a)())]}function R(){return d}var P=new Intl.NumberFormat(void 0,{style:"decimal",currency:"KES"})},572:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(9),n=a(7);function o(e){Object(n.a)(1,arguments);var t=Object(r.a)(e);return t.setDate(1),t.setHours(0,0,0,0),t}},573:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(545),o=a(7);function c(e,t){Object(o.a)(2,arguments);var a=Object(r.a)(t);return Object(n.a)(e,-a)}},574:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(9),n=a(7);function o(e){Object(n.a)(1,arguments);var t=Object(r.a)(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}},575:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(17),n=a(545),o=a(7);function c(e,t){Object(o.a)(2,arguments);var a=Object(r.a)(t);return Object(n.a)(e,12*a)}function i(e,t){Object(o.a)(2,arguments);var a=Object(r.a)(t);return c(e,-a)}},582:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(9),n=a(7);function o(e,t){Object(n.a)(2,arguments);var a=t||{},o=Object(r.a)(e).getTime(),c=Object(r.a)(a.start).getTime(),i=Object(r.a)(a.end).getTime();if(!(c<=i))throw new RangeError("Invalid interval");return o>=c&&o<=i}},609:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(9),o=a(7);function c(e,t){Object(o.a)(2,arguments);var a=Object(n.a)(e),c=Object(r.a)(t);return isNaN(c)?new Date(NaN):c?(a.setDate(a.getDate()+c),a):a}},709:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(44),o=a(0),c=a.n(o),i=a(202),u=a(41),l=a(203),s=a(122),d=a(453),b=a(64),f=a(534),m=a(524),y=a(525),p=a(541),g=a(205),h=a.n(g),O=a(211),j=a(46),v=a(19),_=a(55),E=a(516),C=a(536),x=a(537),M=a(517),D=a(609),w=a(220),k=a(7);var B=a(582),F=a(549),S={responsive:!0,tooltips:{mode:"label"},scales:{xAxes:[{ticks:{min:0,max:100}}]}},T={responsive:!0,tooltips:{mode:"label"},elements:{line:{fill:!1}},scales:{yAxes:[{ticks:{min:0}}],xAxes:[{ticks:{min:0}}]}},R=v.e().shape({filter_year:v.d().typeError("Year must be a number!").required("Year is required").positive().min(0,"Must be greater than 0").max(2100,"Sorry but we won't be here during those times.").integer()}),P=Object(F.k)();t.default=Object(u.b)((function(e){return{properties:e.properties,transactionsCharges:e.transactionsCharges.map((function(t){var a={},r=e.transactions.filter((function(e){return e.charge_id===t.id}));r.length?(a.payed_status=!0,a.last_payment_date=r.slice(-1)[0].payment_date):a.payed_status=!1;var n=r.reduce((function(e,t){return e+parseFloat(t.payment_amount)||0}),0);return a.payed_amount=n,a.balance=parseFloat(t.charge_amount)-n,Object.assign({},t,a)})),expenses:e.expenses}}))((function(e){var t=e.transactionsCharges,a=e.expenses,u=e.properties,g=Object(j.a)(),v=Object(o.useState)("all"),H=Object(n.a)(v,2),Y=H[0],I=H[1],N=Object(o.useState)([]),A=Object(n.a)(N,2),W=A[0],z=A[1],q=Object(o.useState)(a),L=Object(n.a)(q,2),U=L[0],J=L[1];Object(o.useEffect)((function(){z(t.filter((function(e){var t=e.charge_date;return Object(E.a)(Object(C.a)(t,"yyyy-MM-dd",new Date))===Object(E.a)(new Date)})))}),[t]),Object(o.useEffect)((function(){J(a.filter((function(e){var t=e.expense_date;return Object(E.a)(Object(C.a)(t,"yyyy-MM-dd",new Date))===Object(E.a)(new Date)})))}),[a]);var K=Object(r.a)(new Set(W.filter((function(e){return e.payed_status})).map((function(e){return e.charge_type})))),Q=K.map((function(e){return W.filter((function(t){return t.charge_type===e&&t.payed_status})).reduce((function(e,t){return e+parseFloat(t.payed_amount)||0}),0)})),V=K.map((function(e){var t;switch(e){case"security_deposit":t="Security Deposit";break;case"rent":t="Rent";break;case"recurring_charge":t="Recurring Charges";break;case"meter_type":t="Utility Charge";break;case"one_time_charge":t="Recurring Charges";break;default:t="Others"}return t})),G=W.filter((function(e){return"rent"===e.charge_type})).reduce((function(e,t){return e+parseFloat(t.charge_amount)||0}),0),X=W.filter((function(e){return"rent"!==e.charge_type})).reduce((function(e,t){return e+parseFloat(t.charge_amount)||0}),0),Z=W.filter((function(e){return"rent"===e.charge_type})).reduce((function(e,t){return e+parseFloat(t.payed_amount)||0}),0),$=W.filter((function(e){return"rent"!==e.charge_type})).reduce((function(e,t){return e+parseFloat(t.payed_amount)||0}),0),ee=G-Z,te=X-$,ae=P.map((function(e){return Object(x.a)(e,"MMMM")})),re={labels:ae,datasets:[]},ne={labels:V,datasets:[{label:"Income Categories",backgroundColor:"rgba(130, 224, 170,0.6)",borderColor:"rgba(130, 224, 170,1)",borderWidth:1,hoverBackgroundColor:"rgba(130, 224, 170,1)",hoverBorderColor:"rgba(130, 224, 170,1)",data:Q}]},oe=P.map((function(e){return W.filter((function(t){var a=Object(C.a)(t.charge_date,"yyyy-MM-dd",new Date);return Object(M.a)(e)===Object(M.a)(a)})).reduce((function(e,t){return e+(parseFloat(t.payed_amount)||0)}),0)})),ce=P.map((function(e){return U.filter((function(t){var a=Object(C.a)(t.expense_date,"yyyy-MM-dd",new Date);return Object(M.a)(e)===Object(M.a)(a)})).reduce((function(e,t){return e+(parseFloat(t.amount)||0)}),0)})),ie=P.map((function(e){return W.filter((function(t){var a=Object(C.a)(t.charge_date,"yyyy-MM-dd",new Date);return Object(M.a)(e)===Object(M.a)(a)})).reduce((function(e,t){return e+(parseFloat(t.charge_amount)||0)}),0)})),ue={labels:ae,datasets:[{label:"Expenses",backgroundColor:"rgba(174, 182, 191,0.6)",borderColor:"rgba(174, 182, 191,1)",borderWidth:1,hoverBackgroundColor:"rgba(174, 182, 191, 1)",hoverBorderColor:"rgba(174, 182, 191,1)",data:ce}]};re.datasets.push({data:oe,label:"Monthly Payments Collection",type:"bar",fill:!1,backgroundColor:"#71B37C",borderColor:"#71B37C",hoverBackgroundColor:"#71B37C",hoverBorderColor:"#71B37C"}),re.datasets.push({data:ie,label:"Monthly Charges",type:"line",borderColor:"#EC932F",fill:!1,backgroundColor:"#EC932F",pointBorderColor:"#EC932F",pointBackgroundColor:"#EC932F",pointHoverBackgroundColor:"#EC932F",pointHoverBorderColor:"#EC932F"});var le={due_date:0,next_thirty:0,next_sixty:0,next_ninety:0,next_three_months:0},se={due_date:0,next_thirty:0,next_sixty:0,next_ninety:0,next_three_months:0};W.filter((function(e){var t=e.charge_type,a=e.payed_status;return"rent"===t&&a})).forEach((function(e){var t=Object(C.a)(e.last_payment_date,"yyyy-MM-dd",new Date),a=Object(C.a)(e.due_date,"yyyy-MM-dd",new Date),r=Object(D.a)(a,30),n=Object(D.a)(a,60),o=Object(D.a)(a,90),c=new Date(2100,0,1);!function(e,t){Object(k.a)(2,arguments);var a=Object(w.a)(e),r=Object(w.a)(t);return a.getTime()===r.getTime()}(t,a)?Object(B.a)(t,{start:a,end:r})?le.next_thirty+=1:Object(B.a)(t,{start:r,end:n})?le.next_sixty+=1:Object(B.a)(t,{start:n,end:o})?le.next_ninety+=1:Object(B.a)(t,{start:o,end:c})&&(le.next_three_months+=1):le.due_date+=1})),W.filter((function(e){var t=e.charge_type,a=e.payed_status;return"rent"!=t&&a})).forEach((function(e){var t=Object(C.a)(e.last_payment_date,"yyyy-MM-dd",new Date),a=Object(C.a)(e.due_date,"yyyy-MM-dd",new Date),r=Object(D.a)(a,30),n=Object(D.a)(a,60),o=Object(D.a)(a,90),c=new Date(2100,0,1);t===a?se.due_date+=1:Object(B.a)(t,{start:a,end:r})?se.next_thirty+=1:Object(B.a)(t,{start:r,end:n})?se.next_sixty+=1:Object(B.a)(t,{start:n,end:o})?se.next_ninety+=1:Object(B.a)(t,{start:o,end:c})&&(se.next_three_months+=1)}));var de=function(e){return Array.from(e).map((function(e){var t;switch(e){case"due_date":t="Due Date";break;case"next_thirty":t="Due Date + 30 days";break;case"next_sixty":t="Due Date + 60 days";break;case"next_ninety":t="Due Date + 90 days";break;case"next_three_months":t="Due Date + 120 days"}return t}))},be=function(e){var t=Object.values(e).reduce((function(e,t){return e+t}),0);return Object.values(e).map((function(e){return e/t*100}))},fe={labels:de(Object.keys(le)),datasets:[{label:"Rent",backgroundColor:"rgba(174, 184, 191,0.6)",borderColor:"rgba(174, 184, 191,1)",borderWidth:1,hoverBackgroundColor:"rgba(174, 184, 191, 1)",hoverBorderColor:"rgba(174, 184, 191,1)",data:be(le)}]},me={labels:de(Object.keys(se)),datasets:[{label:"Service Charges",backgroundColor:"rgba(174, 182, 191,0.6)",borderColor:"rgba(174, 182, 191,1)",borderWidth:1,hoverBackgroundColor:"rgba(174, 182, 191, 1)",hoverBorderColor:"rgba(174, 182, 191,1)",data:be(se)}]};return c.a.createElement(i.a,{pageTitle:"Property Performance"},c.a.createElement(d.a,{container:!0,justify:"center",direction:"column",spacing:4},c.a.createElement(d.a,{item:!0,key:0},c.a.createElement(l.a,{text:"Property Performance"})),c.a.createElement(d.a,{container:!0,item:!0,direction:"column",spacing:2},c.a.createElement(d.a,{item:!0},c.a.createElement(f.a,{border:1,borderRadius:"borderRadius",borderColor:"grey.400"},c.a.createElement(_.b,{initialValues:{filter_year:Object(E.a)(new Date)},validationSchema:R,onSubmit:function(e){var r;r=parseInt(e.filter_year),z(t.filter((function(e){var t=e.charge_date;return Object(E.a)(Object(C.a)(t,"yyyy-MM-dd",new Date))===r})).filter((function(e){var t=e.property_id;return"all"===Y||t===Y}))),J(a.filter((function(e){var t=e.expense_date;return Object(E.a)(Object(C.a)(t,"yyyy-MM-dd",new Date))===r})).filter((function(e){var t=e.property_id;return"all"===Y||t===Y})))}},(function(e){var t=e.values,a=e.handleSubmit,r=e.touched,n=e.errors,o=e.handleChange,i=e.handleBlur;return c.a.createElement("form",{className:g.form,id:"yearFilterForm",onSubmit:a},c.a.createElement(d.a,{container:!0,spacing:2,alignItems:"center",justify:"center",direction:"row"},c.a.createElement(d.a,{item:!0,sm:3},c.a.createElement(p.a,{fullWidth:!0,select:!0,variant:"outlined",name:"property_filter",label:"Property",id:"property_filter",onChange:function(e){I(e.target.value)},value:Y},c.a.createElement(m.a,{key:"all",value:"all"},"All Properties"),u.map((function(e,t){return c.a.createElement(m.a,{key:t,value:e.id},e.ref)})))),c.a.createElement(d.a,{item:!0},c.a.createElement(p.a,{variant:"outlined",id:"filter_year",name:"filter_year",label:"Year",value:t.filter_year,onChange:o,onBlur:i,error:n.filter_year&&r.filter_year,helperText:r.filter_year&&n.filter_year})),c.a.createElement(d.a,{item:!0},c.a.createElement(y.a,{type:"submit",form:"yearFilterForm",color:"primary",variant:"contained",size:"medium",startIcon:c.a.createElement(h.a,null)},"SEARCH"))))}))))),c.a.createElement(d.a,{item:!0,container:!0,spacing:2,direction:"row",alignItems:"stretch",justify:"space-around",key:3},c.a.createElement(s.a,{xs:12,title:"Total Rent Charges",value:F.a.format(G)}),c.a.createElement(s.a,{xs:12,title:"Total Rent Payments",value:F.a.format(Z)}),c.a.createElement(s.a,{xs:12,title:"Total Rent Outstanding Balances",value:F.a.format(ee)})),c.a.createElement(d.a,{item:!0,container:!0,spacing:2,direction:"row",alignItems:"stretch",justify:"space-around"},c.a.createElement(s.a,{xs:12,title:"Total Other Charges",value:F.a.format(X)}),c.a.createElement(s.a,{xs:12,title:"Total Other Payments",value:F.a.format($)}),c.a.createElement(s.a,{xs:12,title:"Total Other Charges Outstanding Balances",value:F.a.format(te)})),c.a.createElement(d.a,{item:!0},c.a.createElement(b.a,{variant:"h6",align:"center",gutterBottom:!0},"Monthly Charges & Payments"),c.a.createElement(O.Bar,{data:re,options:T})),c.a.createElement(d.a,{item:!0,container:!0,direction:"column",spacing:1},c.a.createElement(d.a,{item:!0},c.a.createElement(b.a,{variant:"h5",align:"center",gutterBottom:!0},"Collection Performance")),c.a.createElement(d.a,{item:!0},c.a.createElement(b.a,{component:"div",align:"center"},"Collected by:"))),c.a.createElement(d.a,{item:!0,container:!0,direction:"row",spacing:4},c.a.createElement(d.a,{item:!0,xs:!0},c.a.createElement(b.a,{variant:"h6",align:"center",gutterBottom:!0},"Rent Collection"),c.a.createElement(O.HorizontalBar,{height:250,data:fe,options:S})),c.a.createElement(d.a,{item:!0,xs:!0},c.a.createElement(b.a,{variant:"h6",align:"center",gutterBottom:!0},"Service Charge Collection"),c.a.createElement(O.HorizontalBar,{height:250,data:me,options:S}))),c.a.createElement(d.a,{item:!0,container:!0,direction:"row",spacing:4},c.a.createElement(d.a,{item:!0,xs:!0},c.a.createElement(b.a,{variant:"h6",align:"center",gutterBottom:!0},"Income Categories"),c.a.createElement(O.HorizontalBar,{height:250,data:ne,options:T})),c.a.createElement(d.a,{item:!0,xs:!0},c.a.createElement(b.a,{variant:"h6",align:"center",gutterBottom:!0},"Expenses"),c.a.createElement(O.HorizontalBar,{height:250,data:ue,options:T})))))}))}}]);
//# sourceMappingURL=31.06f673bf.chunk.js.map