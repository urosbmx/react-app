(this["webpackJsonpfood-bloger"]=this["webpackJsonpfood-bloger"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={recipe:"recepies_recipe__3fxeT"}},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=(a(12),a(2)),l=a.n(i),s=a(5),u=a(1),m=a(6),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients,o=e.url;return r.a.createElement("div",{className:p.a.recipe},r.a.createElement("h1",null,t),r.a.createElement("a",{href:o,target:"_blank"},"Food preparation"),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("p",null,a.toFixed(2)," Calories"),r.a.createElement("img",{src:n,alt:""}))},d=(a(14),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],p=i[1],d=Object(n.useState)("pork"),h=Object(u.a)(d,2),b=h[0],g=h[1];Object(n.useEffect)((function(){v()}),[b]);var v=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("a5f6b531","&app_key=").concat("87259a7a96af379302a4221d4dc3847a\t"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(m),p("")},className:"search-form"},r.a.createElement("input",{type:"text",className:"search-bar",value:m,onChange:function(e){p(e.target.value),console.log(m)}}),r.a.createElement("button",{type:"submit",className:"search-button"},"Search")),r.a.createElement("div",{className:"recepes"},a.map((function(e){return r.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})}))),r.a.createElement("div",{className:"footer"},"Designed by Uros Katanic   \xa0"))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f4d020d3.chunk.js.map