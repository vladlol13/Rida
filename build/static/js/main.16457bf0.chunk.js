(this["webpackJsonptest-rida"]=this["webpackJsonptest-rida"]||[]).push([[0],{26:function(n,e,t){n.exports=t(39)},31:function(n,e,t){},39:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(22),o=t.n(c),i=(t(31),t(13)),u=t(6),l=t.n(u),f=t(12),s=t(14),d=t(2),v=t(3),p=t(1);function m(){var n=Object(d.a)(["\n    color: blue;\n    font-size: 40px;\n    font-weight: bold;\n"]);return m=function(){return n},n}var h=v.a.p(m()),k=function(){return a.a.createElement("div",null,a.a.createElement(h,null,"Chuk's joke"))};function b(){var n=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 600px;\n    height: 200px;\n    border: solid 3px red;\n    padding: 50px;\n    font-weight: 700;\n    font-size: 20px;\n\n"]);return b=function(){return n},n}var j=v.a.p(b()),x=function(n){var e=n.joke;return a.a.createElement("div",null,a.a.createElement(j,null,e.value))};function g(){var n=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: pink;\n    border: solid red 2px;\n    cursor: pointer;\n    margin: 5px;\n    height: 40px;\n    width: 200px;\n    &:hover {\n        background-color:red;\n    }\n"]);return g=function(){return n},n}var E=v.a.div(g()),w=function(){var n=Object(f.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.chucknorris.io/jokes/random",{method:"GET"});case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function O(){var n=Object(d.a)(["\n    background-color: blue;\n    color: white;\n    width: 20%;\n    text-align: center;\n    cursor: pointer;\n    &:hover {\n        background-color: black;\n    }\n"]);return O=function(){return n},n}function y(){var n=Object(d.a)(["\n    width: 80%;\n    \n"]);return y=function(){return n},n}function C(){var n=Object(d.a)(["\n    display: flex;\n    width: 600px;\n    min-height: 40px;\n    border: 1.5px solid orange;\n    margin-top: 10px;\n"]);return C=function(){return n},n}var J=v.a.div(C()),S=v.a.div(y()),I=v.a.div(O()),F=function(n){var e=n.jokes,t=n.deleteFavJoke,r=n.clearAllHandler;return a.a.createElement(a.a.Fragment,null,e.map((function(n){return a.a.createElement(J,{key:n.id},a.a.createElement(S,null,n.value),a.a.createElement(I,{onClick:function(){return t(n)}},"Delete"))})),a.a.createElement(E,{onClick:r},"Clear all"))};function A(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);return A=function(){return n},n}function z(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 600px;\n"]);return z=function(){return n},n}function B(){var n=Object(d.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);return B=function(){return n},n}var D=v.a.div(B()),G=v.a.div(z()),H=v.a.div(A());var N=Object(p.f)((function(n){var e=n.history,t=a.a.useState({value:"joke"}),r=Object(s.a)(t,2),c=r[0],o=r[1],u=a.a.useState([]),d=Object(s.a)(u,2),v=d[0],m=d[1];a.a.useEffect((function(){m(JSON.parse(localStorage.getItem("favJokes")))}),[]),a.a.useEffect((function(){localStorage.setItem("favJokes",JSON.stringify(v))}),[v]);var h=function(){var n=Object(f.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w();case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=a.a.useState(null),j=Object(s.a)(b,2),g=j[0],O=j[1],y=function(n){m(v.filter((function(e){return n.id!==e.id})))};return a.a.createElement(D,null,a.a.createElement(G,null,a.a.createElement(k,null),a.a.createElement(H,{onClick:function(){"/fav"===e.location.pathname?e.push("/"):e.push("/fav")}},"Fav")),a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/"},a.a.createElement(x,{joke:c}),a.a.createElement(E,{onClick:h},"Get joke"),a.a.createElement(E,{onClick:function(){g?(clearInterval(g),O(null)):O(setInterval(h,3e3))}},"Let's have dis jokes rolli'n"),a.a.createElement(E,{onClick:function(){return function(n){v.find((function(e){return n.id===e.id}))?y(n):[].concat(Object(i.a)(v),[n]).length>10?m([].concat(Object(i.a)(v),[n]).filter((function(n,e){return e>0}))):m([].concat(Object(i.a)(v),[n]))}(c)}},v.find((function(n){return c.id===n.id}))?"Delete from fav":"Add to fav")),a.a.createElement(p.a,{exact:!0,path:"/fav"},a.a.createElement(F,{jokes:v,deleteFavJoke:y,clearAllHandler:function(){m([])}}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(16);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W.a,null,a.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.16457bf0.chunk.js.map