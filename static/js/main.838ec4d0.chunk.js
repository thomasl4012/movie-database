(this["webpackJsonpstudy-case-fleet"]=this["webpackJsonpstudy-case-fleet"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(25),i=c.n(n),s=(c(38),c(15)),o=c(26),r=c(27),l=c(32),d=c(30),h=(c(39),c(2)),j=c(31),m=c(33),b=c(1),u=function(e){var t=e.movies,c=Object(m.a)(e,["movies"]),n=Object(a.useState)([]),i=Object(j.a)(n,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){o(t.find((function(e){return String(c.match.params.id)===String(e.id)})))}),[s,c.match.params.id,t]),console.log(s),Object(b.jsx)(a.Fragment,{children:s.length!==[]?Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row justify-content-md-center",children:[Object(b.jsx)("div",{className:"col-6 mb-4 text-center",children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(s.poster_path),alt:"movie poster",className:"img-thumbnail rounded mx-auto d-block "})}),Object(b.jsxs)("div",{className:"col-6 mt-4 mb-4 text-center",children:[Object(b.jsx)("h2",{className:!0,children:s.original_title}),Object(b.jsxs)("div",{children:[" User score : ",s.vote_average]})]})]}),Object(b.jsx)("div",{className:" text-center",children:s.overview})]}):"Error no match found"})},v=function(e){return Object(b.jsx)("div",{className:"Navbar",children:Object(b.jsx)("nav",{className:"navbar navbar-dark bg-info mb-3",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search",onChange:e.handleChange,"aria-label":"Search"})})})})},p=c(28),g=c.n(p),O=c.p+"static/media/loading.4c0dabf6.gif",x=c(9),f=(c(59),function(e){var t=e.movies;return Object(b.jsx)("div",{className:"list-group list-group-scroll",children:t?Object(b.jsx)("div",{children:t.map((function(e){var t=e.title,c=e.id;return Object(b.jsx)(x.b,{to:"/movie/".concat(c),className:"list-group-item list-group-item-action text-left",children:t},c)}))}):"Error"})}),N=function(e){var t=e.movies;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)("div",{className:"accordion",id:"accordion-container".concat(t),children:Object(b.jsxs)("div",{className:"accordion-item",children:[Object(b.jsx)("h2",{className:"accordion-header",id:"heading".concat(t),children:Object(b.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse".concat(t),"aria-expanded":"true","aria-controls":"collapse".concat(t),children:e.title})}),Object(b.jsxs)("div",{id:"collapse".concat(t),className:"accordion-collapse collapse","aria-labelledby":"heading".concat(t),"data-bs-parent":"#accordion-container".concat(t),children:[Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:"movie poster",className:"img-thumbnail mt-4 h-50 w-50 rounded mx-auto d-block"}),Object(b.jsxs)("div",{className:"accordion-body text-center",children:["User score : ",e.vote_average]}),Object(b.jsx)("div",{className:"accordion-body text-center",children:e.overview})]})]},e.id)},e.id)}))})},w=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).apiKey="d724349c02790ae2f347ffae502596a1",e.baseUrl="https://api.themoviedb.org/3",e.state={movies:[],loading:!0,search:"",width:0},e.handleChange=function(t){e.setState({search:t.target.value})},e.updateDimensions=function(){e.setState({width:window.innerWidth})},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.updateDimensions),this.updateDimensions(),g.a.get("".concat(this.baseUrl,"/list/7091212?api_key=").concat(this.apiKey)).then((function(t){e.setState({movies:t.data.items,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading,a=e.search,n=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return this.state.width>575?Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(v,{handleChange:this.handleChange}),Object(b.jsx)("div",{className:"container mt-4",children:c?Object(b.jsx)("img",{src:O,alt:"loading...",className:"loader"}):Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-sm-4",children:Object(b.jsx)(f,{movies:n})}),Object(b.jsx)("div",{className:"col-sm-8",children:Object(b.jsx)(h.a,{path:"/movie/:id",component:function(e){return Object(b.jsx)(u,Object(s.a)(Object(s.a)({},e),{},{movies:t}))}})})]})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{handleChange:this.handleChange}),Object(b.jsx)(N,{movies:n})]})}}]),c}(a.Component),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};i.a.render(Object(b.jsx)(x.a,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),y()}},[[65,1,2]]]);
//# sourceMappingURL=main.838ec4d0.chunk.js.map