(this["webpackJsonpsearch-filter"]=this["webpackJsonpsearch-filter"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(2),s=t.n(i),o=(t(13),t(3)),c=t(4),m=t(6),u=t(5),l=t(7),g=[{id:1,name:"Seven Samurai",country:"Japan",director:"Akira Kurosawa",image:"assets/images/seven_samurai.jpg",genre:"Adventure",year:1954,rate:8.6},{id:2,name:"Oldboy",country:"Korea",director:"Park Chan-wook",image:"assets/images/oldboy.jpg",genre:"Drama",year:2003,rate:8.4},{id:3,name:"The Secret in Their Eyes",country:"Argentina",director:"Juan Jos\xe9 Campanella",image:"assets/images/the_secret_in_their_eyes.jpg",year:2009,rate:8.2},{id:4,name:"Parasite",country:"Korea",director:"Bong Joon Ho",image:"assets/images/parasite.jpg",year:2019,rate:8.5},{id:5,name:"Rashomon",country:"Japan",director:"Akira Kurosawa",image:"assets/images/rashomon.jpg",year:1950,rate:8.2},{id:6,name:"Wild Tales",country:"Argentina",director:"Dami\xe1n Szifron",image:"assets/images/wild_tales.jpg",year:2014,rate:8.1},{id:7,name:"Ikiru",country:"Japan",director:"Akira Kurosawa",image:"assets/images/ikiru.jpg",year:1952,rate:8.3},{id:8,name:"Three Idiots",country:"India",director:"Rajkumar Hirani",image:"assets/images/three_idiots.jpg",year:2009,rate:8.4},{id:9,name:"Nine Queens",country:"Argentina",director:"Fabi\xe1n Bielinsky",image:"assets/images/nine_queens.jpg",year:2e3,rate:7.9},{id:10,name:"A Prophet",country:"France",director:"Jacques Audiard",image:"assets/images/a_prophet.jpg",year:2009,rate:7.9}],d=(t(14),function(e){var a=e.movies;return 0===a.length?n.a.createElement("p",{className:"noresult"},"No result is found!"):a.map((function(e){return n.a.createElement("div",{key:e.id,className:"movie"},n.a.createElement("img",{src:e.image,alt:e.name}),n.a.createElement("h3",null,e.name))}))}),h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={movies:g,search:""},t.onChange=function(e){t.setState({search:e.target.value})},t.filteredMovies=function(e){var a=t.state.search;return e.filter((function(e){return-1!==e.name.toLocaleLowerCase().search(a.toLocaleLowerCase())}))},t}return Object(l.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"My best movies"),n.a.createElement("div",{className:"search"},n.a.createElement("input",{type:"text",name:"search",onChange:this.onChange,value:this.state.search}),n.a.createElement("button",{type:"submit"},"search")),n.a.createElement("div",{className:"grid"},n.a.createElement(d,{movies:this.filteredMovies(e)})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.456dc173.chunk.js.map