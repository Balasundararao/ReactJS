(this.webpackJsonpbetatest=this.webpackJsonpbetatest||[]).push([[0],{190:function(e,t,n){e.exports=n(385)},195:function(e,t,n){},196:function(e,t,n){},385:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),c=n.n(r),i=(n(195),n(196),n(31),n(36),n(176));n(425),n(426),n(429),n(427),n(177),n(422),n(428),n(423),Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var u=n(52),o=n(53),m=n(60),s=n(54),d=n(61),b=n(55),E=n.n(b),f=(n(96),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){n.setState({startDate:e})},n.state={startDate:new Date},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{selected:this.state.startDate,onChange:this.handleChange,placeholderText:"MM/DD/YYYY"})}}]),t}(l.a.Component)),v=n(44),h=(n(257),function(e){var t=e.name,n=e.value,a=e.onChange;return l.a.createElement(E.a,{selected:n&&new Date(n)||null,onChange:function(e){a(t,e)}})}),p=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(v.b,{initialValues:{date:""},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),500)}},(function(e){var t=e.values,n=(e.touched,e.errors,e.dirty),a=e.isSubmitting,r=(e.handleChange,e.handleBlur,e.handleSubmit),c=e.handleReset,i=e.setFieldValue;return l.a.createElement("form",{onSubmit:r},l.a.createElement(h,{name:"date",value:t.date,onChange:i}),l.a.createElement("button",{type:"button",className:"outline",onClick:c,disabled:!n||a},"Reset"),l.a.createElement("button",{type:"submit",disabled:a},"Submit"))})))},g=n(430),O=Object(i.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:400}}}));function k(){var e=O();return l.a.createElement("form",{className:e.container,noValidate:!0},l.a.createElement(g.a,{id:"datetime-local",label:"Next appointment",type:"datetime-local",defaultValue:"2017-05-24T10:30",className:e.textField,InputLabelProps:{shrink:!0}}))}var C=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"main-content"},l.a.createElement(v.b,{initialValues:{startDate:new Date},validate:function(e,t){return console.log("a",e,t)},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),400)}},(function(e){var t=e.isSubmitting,n=e.values,a=e.setFieldValue;return l.a.createElement("div",{className:"row clearfix"},l.a.createElement("div",{className:"header"}),l.a.createElement(v.a,null,l.a.createElement("div",{className:"row ml-4 mr-4"},l.a.createElement("div",{className:"form-group col-3 mb-2"},l.a.createElement(E.a,{selected:n.startDate,dateFormat:"MMMM d, yyyy",className:"form-control",name:"startDate",onChange:function(e){return a("startDate",e)}}))),l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"col-5 mb-4"}),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-outline-success mt-4 mb-4",disabled:t},"insert item"))))})))}}]),t}(l.a.Component),j=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).counterHandler=function(){n.setState({count:n.state.count+1})},n.state={count:0},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Its a Class Counter Component::  ",l.a.createElement("button",{onClick:this.counterHandler},"Increment Counter.  ",this.state.count," ")," "))}}]),t}(a.Component),w=n(181);var y=function(){var e=Object(a.useState)(0),t=Object(w.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("p",null,"Its a counter from Hooks.... ",l.a.createElement("button",{onClick:function(){return r(n+1)}}," Increment Counter ..",n)))};var D=function(){return l.a.createElement("div",null)},N=function(){return l.a.createElement("div",null,l.a.createElement("h1",null," Practice Landing Component....."),l.a.createElement("div",null,l.a.createElement("div",null,"1.Simple Date picker using react-datepicker:: ",l.a.createElement(f,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,"2.Formik + Date picker using react-datepicker  and  FORMIK:: ",l.a.createElement(p,null)),l.a.createElement("div",null,"3.Material Date picker :: ",l.a.createElement(k,null)),l.a.createElement("div",null,"4.DatePicker formik... :: ",l.a.createElement(C,null))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(j,null))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(y,null)),l.a.createElement("div",null,l.a.createElement(D,null))))};var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[190,1,2]]]);
//# sourceMappingURL=main.90d39a7e.chunk.js.map