(this["webpackJsonpstudy-case-fleet"]=this["webpackJsonpstudy-case-fleet"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},53:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(26),i=c.n(n),s=(c(32),c(9)),r=(c(33),c(2)),o=c(1),l=function(e){var t=e.movies,c=e.id,n=Object(a.useState)(),i=Object(s.a)(n,2),r=i[0],l=i[1];return Object(a.useEffect)((function(){l(t.find((function(e){return String(c)===String(e.id)})))}),[r,c,t]),Object(o.jsx)(a.Fragment,{children:void 0!==r?Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row justify-content-md-center",children:[Object(o.jsx)("div",{className:"col-6 mb-4 text-center",children:Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(r.poster_path),alt:"movie poster",className:"img-thumbnail rounded mx-auto d-block "})}),Object(o.jsxs)("div",{className:"col-6 mt-4 mb-4 text-center",children:[Object(o.jsx)("h2",{children:r.original_title}),Object(o.jsxs)("div",{children:[" User score : ",r.vote_average]})]})]}),Object(o.jsx)("div",{className:" text-center",children:r.overview})]}):Object(o.jsx)("div",{})})},d=function(e){return Object(o.jsx)("div",{className:"Navbar",children:Object(o.jsx)("nav",{className:"navbar navbar-dark bg-info mb-3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("form",{onSubmit:e.onSubmit,children:Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search",onChange:e.handleChange,"aria-label":"Search",value:e.value})})})})})},j=c(14),b=c.n(j),u=c.p+"static/media/loading.4c0dabf6.gif",m=c(10),h=(c(53),function(e){var t=e.movies;return Object(o.jsx)("div",{className:"list-group list-group-scroll",children:t?Object(o.jsx)("div",{children:t.map((function(e){var t=e.title,c=e.id;return Object(o.jsx)(m.b,{to:"/movie/".concat(c),className:"list-group-item list-group-item-action text-left",children:t},c)}))}):"Error"})}),v=function(e){var t=e.movies;return Object(o.jsx)("div",{children:t.map((function(e,t){return Object(o.jsx)("div",{className:"accordion",id:"accordion-container".concat(t),children:Object(o.jsxs)("div",{className:"accordion-item",children:[Object(o.jsx)("h2",{className:"accordion-header",id:"heading".concat(t),children:Object(o.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse".concat(t),"aria-expanded":"true","aria-controls":"collapse".concat(t),children:e.title})}),Object(o.jsxs)("div",{id:"collapse".concat(t),className:"accordion-collapse collapse","aria-labelledby":"heading".concat(t),"data-bs-parent":"#accordion-container".concat(t),children:[Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"movie poster",className:"img-thumbnail mt-4 h-50 w-50 rounded mx-auto d-block"}),Object(o.jsxs)("div",{className:"accordion-body text-center",children:["User score : ",e.vote_average]}),Object(o.jsx)("div",{className:"accordion-body text-center",children:e.overview})]})]},e.id)},e.id)}))})};function O(){var e="d724349c02790ae2f347ffae502596a1",t="https://api.themoviedb.org/3",c=Object(a.useState)([]),n=Object(s.a)(c,2),i=n[0],j=n[1],m=Object(a.useState)(!0),O=Object(s.a)(m,2),x=O[0],g=O[1],p=Object(a.useState)(window.innerWidth),f=Object(s.a)(p,2),N=f[0],w=f[1],S=Object(a.useState)(""),y=Object(s.a)(S,2),_=y[0],k=y[1];Object(a.useEffect)((function(){var e=function(){w(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){""!==_?b.a.get("".concat(t,"/search/movie?api_key=").concat(e,"&query=").concat(_,"&page=1&include_adult=false")).then((function(e){j(e.data.results),g(!1)})).catch((function(e){console.log(e)})):b.a.get("".concat(t,"/movie/popular?api_key=").concat(e,"&language=en-US&page=1")).then((function(e){j(e.data.results),g(!1)})).catch((function(e){return console.log(e)}))}),[_]);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{handleChange:function(e){k(e.target.value)},value:_}),N>575?Object(o.jsx)("div",{className:"container mt-4",children:x?Object(o.jsx)("img",{src:u,alt:"loading...",className:"loader"}):Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-4",children:Object(o.jsx)(h,{movies:i})}),Object(o.jsx)("div",{className:"col-sm-8",children:Object(o.jsx)(r.a,{path:"/movie/:id",render:function(e){return Object(o.jsx)(l,{id:e.match.params.id,movies:i})}})})]})}):Object(o.jsx)("div",{children:Object(o.jsx)(v,{movies:i})})]})}var x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};i.a.render(Object(o.jsx)(m.a,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()}},[[59,1,2]]]);
//# sourceMappingURL=main.59c31012.chunk.js.map