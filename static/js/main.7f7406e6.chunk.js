(this["webpackJsonpredux-meme-generator"]=this["webpackJsonpredux-meme-generator"]||[]).push([[0],{15:function(e,t,a){e.exports=a(30)},20:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=(a(20),a(2)),m=a(6),i=a(1),u=a(14),d=a(32),s=(a(27),{url:"",topText:"",bottomText:"",id:""}),E=function(e){var t=e.addMeme,a=Object(n.useState)(s),o=Object(u.a)(a,2),c=o[0],l=o[1],E=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(m.a)({},a,n))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",r.a.createElement("h1",null,"Meme Generator")),r.a.createElement("div",{style:{align:"center"}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(Object(i.a)(Object(i.a)({},c),{},{id:Object(d.a)()})),l(s)},className:"AddMemeForm"},r.a.createElement("label",{htmlFor:"url"},"URL"),r.a.createElement("input",{type:"text",name:"url",id:"url",placeholder:"Enter URL Here",value:c.url,onChange:E}),r.a.createElement("label",{htmlFor:"topText"},"Top Text"),r.a.createElement("input",{type:"text",name:"topText",id:"topText",placeholder:"Top Text",value:c.topText,onChange:E}),r.a.createElement("label",{htmlFor:"bottomText"},"Bottom Text"),r.a.createElement("input",{type:"text",name:"bottomText",id:"bottomText",placeholder:"Bottom Text",value:c.bottomText,onChange:E}),r.a.createElement("button",null,"Add Meme"))))},b=(a(28),function(e){var t=e.topText,a=e.bottomText,n=e.url,o=e.id,c=e.deleteMeme;return r.a.createElement("div",{className:"Meme"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"top-text"},t),r.a.createElement("img",{src:n,alt:"meme"}),r.a.createElement("span",{className:"bottom-text"},a," "),r.a.createElement("button",{id:"deleteBtn",onClick:function(){c(o)}},"Delete")))});a(29);var p=function(){var e=Object(l.d)((function(e){return e.memes}),l.b),t=Object(l.c)(),a=e.map((function(e){return r.a.createElement(b,{key:e.id,topText:e.topText,bottomText:e.bottomText,url:e.url,deleteMeme:function(){return a=e.id,void t({type:"REMOVE_MEME",id:a});var a}})}));return r.a.createElement("div",{className:"App"},r.a.createElement(E,{addMeme:function(e){t({type:"ADD_MEME",meme:e})}}),r.a.createElement("hr",null),a)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(5),v=a(13),f={memes:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MEME":return Object(i.a)(Object(i.a)({},e),{},{memes:[].concat(Object(v.a)(e.memes),[Object(i.a)({},t.meme)])});case"REMOVE_MEME":return Object(i.a)(Object(i.a)({},e),{},{memes:e.memes.filter((function(e){return e.id!==t.id}))});default:return e}},T=Object(x.b)(h);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:T},r.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.7f7406e6.chunk.js.map