(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(17),a=n.n(r),i=n(7),o=n(2),j=n(18),u=n(19),m=n(23),l=n(22),b=n(1),d=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(b.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component),v=d,h=n(12),O=n.n(h),p=n(20),x=n(15);n(30);var f=function(e){var t=e.id,n=e.coverImg,c=e.title,s=e.summary,r=e.genres,a=e.year;return Object(b.jsx)("div",{className:"movie",children:Object(b.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{coverImg:n,title:c,summary:s,genres:r}},children:[Object(b.jsx)("img",{src:n,alt:c,title:c}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:c}),Object(b.jsx)("h5",{className:"movie__year",children:a}),Object(b.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genres",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})})};n(36);var y=function(){var e=Object(c.useState)(!0),t=Object(x.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(x.a)(r,2),i=a[0],o=a[1],j=function(){var e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),console.log(i),Object(b.jsx)("section",{className:"container",children:n?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{})}):Object(b.jsx)("div",{className:"movies",children:i.map((function(e){return Object(b.jsx)(f,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};n(37);var g=function(){return Object(b.jsxs)("div",{className:"nav",children:[Object(b.jsx)(i.b,{to:"/",children:"Home"}),Object(b.jsx)(i.b,{to:"/about",children:"About"})]})};var _=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(g,{}),Object(b.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(b.jsx)(o.a,{path:"/movie/:id",component:v})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.50789886.chunk.js.map