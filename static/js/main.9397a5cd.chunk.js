(this["webpackJsonpreact-hooks-counter"]=this["webpackJsonpreact-hooks-counter"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),o=n(3),i=n.n(o),a=(n(13),n(14),n(4)),u=n(5),l=n(7),h=n(6),d=(n(15),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={hour:23,minutes:30,seconds:10},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){var t=e.state,n=t.hour,c=t.seconds,s=t.minutes;c>0&&e.setState((function(e){return{seconds:e.seconds-1}})),0===c&&(0===s&&n<=0&&clearInterval(e.myInterval),0===s?e.setState((function(e){return{hour:e.hour-1,minutes:59,seconds:59}})):e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){var e=this.state,t=e.hour,n=e.minutes,s=e.seconds;return Object(c.jsx)("div",{children:-1===t&&59===n&&59===s?Object(c.jsx)("div",{id:"shuru",children:Object(c.jsx)("h1",{children:"Gatividi Shuru!"})}):Object(c.jsxs)("h1",{children:[t,":",n<10?"0".concat(n):n,":",Object(c.jsx)("span",{id:"sec",children:s<10?"0".concat(s):s})]})})}}]),n}(s.Component)),j=n.p+"static/media/logo.6ce24c58.svg";var v=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(c.jsx)("p",{children:Object(c.jsx)(d,{})})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.9397a5cd.chunk.js.map