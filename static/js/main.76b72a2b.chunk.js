(this["webpackJsonpstudy-case-fleet"]=this["webpackJsonpstudy-case-fleet"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(25),i=a.n(n),s=(a(36),a(26)),o=a(27),r=a(31),l=a(29),d=(a(37),a(2)),h=a(30),b=a(1),m=function(e){var t=e.movies,a=e.id,n=Object(c.useState)(),i=Object(h.a)(n,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){o(t.find((function(e){return String(a)===String(e.id)})))}),[s,a,t]),Object(b.jsx)(c.Fragment,{children:void 0!==s?Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row justify-content-md-center",children:[Object(b.jsx)("div",{className:"col-6 mb-4 text-center",children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(s.poster_path),alt:"movie poster",className:"img-thumbnail rounded mx-auto d-block "})}),Object(b.jsxs)("div",{className:"col-6 mt-4 mb-4 text-center",children:[Object(b.jsx)("h2",{children:s.original_title}),Object(b.jsxs)("div",{children:[" User score : ",s.vote_average]})]})]}),Object(b.jsx)("div",{className:" text-center",children:s.overview})]}):Object(b.jsx)("div",{})})};var j=function(e){var t=Object(d.e)();return Object(b.jsx)("button",{className:e.className,type:"button",onClick:function(){t.push("https://thomasl4012.github.io/movie-database/"),window.location.reload()},children:e.children})},u=function(e){return Object(b.jsx)("div",{className:"Navbar",children:Object(b.jsx)("nav",{className:"navbar navbar-dark bg-info mb-3",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("form",{onSubmit:e.onSubmit,children:Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search",onChange:e.handleChange,"aria-label":"Search",value:e.value})}),e.searchState?Object(b.jsx)(j,{className:"btn btn-secondary mt-2 mb-2",children:"Go Home"}):""]})})})},v=a(15),p=a.n(v),g=a.p+"static/media/loading.4c0dabf6.gif",x=a(9),O=(a(62),function(e){var t=e.movies;return Object(b.jsx)("div",{className:"list-group list-group-scroll",children:t?Object(b.jsx)("div",{children:t.map((function(e){var t=e.title,a=e.id;return Object(b.jsx)(x.b,{to:"/movie/".concat(a),className:"list-group-item list-group-item-action text-left",children:t},a)}))}):"Error"})}),f=function(e){var t=e.movies;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)("div",{className:"accordion",id:"accordion-container".concat(t),children:Object(b.jsxs)("div",{className:"accordion-item",children:[Object(b.jsx)("h2",{className:"accordion-header",id:"heading".concat(t),children:Object(b.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse".concat(t),"aria-expanded":"true","aria-controls":"collapse".concat(t),children:e.title})}),Object(b.jsxs)("div",{id:"collapse".concat(t),className:"accordion-collapse collapse","aria-labelledby":"heading".concat(t),"data-bs-parent":"#accordion-container".concat(t),children:[Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"movie poster",className:"img-thumbnail mt-4 h-50 w-50 rounded mx-auto d-block"}),Object(b.jsxs)("div",{className:"accordion-body text-center",children:["User score : ",e.vote_average]}),Object(b.jsx)("div",{className:"accordion-body text-center",children:e.overview})]})]},e.id)},e.id)}))})},N=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).apiKey="d724349c02790ae2f347ffae502596a1",e.baseUrl="https://api.themoviedb.org/3",e.state={movies:[],loading:!0,search:"",width:0,searchState:!1},e.handleChange=function(t){e.setState({search:t.target.value})},e.onSubmit=function(t){t.preventDefault(),p.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(e.apiKey,"&query=").concat(e.state.search,"&page=1&include_adult=false")).then((function(t){e.setState({movies:t.data.results,searchState:!0})})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({width:window.innerWidth}),p.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(this.apiKey,"&language=en-US&page=1")).then((function(t){e.setState({movies:t.data.results,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e,t=this.state,a=t.movies,c=t.loading,n=t.searchState,i=t.search;return e=this.state.width>575?Object(b.jsx)("div",{className:"container mt-4",children:c?Object(b.jsx)("img",{src:g,alt:"loading...",className:"loader"}):Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-sm-4",children:Object(b.jsx)(O,{movies:a})}),Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsx)(d.a,{path:"/movie/:id",render:function(e){return Object(b.jsx)(m,{id:e.match.params.id,movies:a})}})})]})}):Object(b.jsx)("div",{children:Object(b.jsx)(f,{movies:a})}),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{handleChange:this.handleChange,onSubmit:this.onSubmit,searchState:n,value:i}),e]})}}]),a}(c.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};i.a.render(Object(b.jsx)(x.a,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),y()}},[[63,1,2]]]);
//# sourceMappingURL=main.76b72a2b.chunk.js.map