(this.webpackJsonparabiadex=this.webpackJsonparabiadex||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),u=(t(14),t(15),t(4)),i=t(5),o=t(6),s=t(7),m=t(8),h=t(1),b=function(e){var a=e.handelchange,t=e.label,n=Object(h.a)(e,["handelchange","label"]);return c.a.createElement("div",{className:"group"},t?c.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input ")},t,c.a.createElement("br",null)):null,c.a.createElement("input",Object.assign({className:"form-input",onChange:a},n)))},d=function(e){var a=e.children,t=Object(h.a)(e,["children"]);return c.a.createElement("button",Object.assign({className:"custom-button"},t),a)},v=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handelSubmit=function(e){e.preventDefault(),n.setstate({account_name:"",private_key:""})},n.handelChange=function(e){var a=e.target,t=a.value,c=a.name;n.setState(Object(u.a)({},c,t))},n.state={account_name:"",private_key:""},n}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Login"},c.a.createElement("h2",null,"Login with your jungle testnet account and it's private key"),c.a.createElement("form",{onSubmit:this.handelSubmit},c.a.createElement(b,{name:"account_name",value:this.state.account_name,handelchange:this.handelChange,label:"account_name",required:!0}),c.a.createElement(b,{name:"private_key",value:this.state.private_key,handelchange:this.handelChange,label:"private_key",required:!0}),c.a.createElement(d,{type:"submit"},"Login")))}}]),t}(c.a.Component);var p=function(){return c.a.createElement(v,null)};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9585b04e.chunk.js.map