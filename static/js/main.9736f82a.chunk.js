(this["webpackJsonpseoul-city"]=this["webpackJsonpseoul-city"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),c=a(11),u=a(4),i=a(5),s=a(7),m=a(6),p=a(8),d=a(9),f=(a(27),a(28),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"HOME"))}}]),t}(n.Component)),h=(a(29),[{id:"sema",nav:"SeMA",name:"Seoul Museum of Art",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Seoul Museum of Art"]},{id:"mmca",nav:"MMCA",name:"Museum of Modern and Contemporary Art",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Museum of Modern and Contemporary Art"]},{id:"leeum",nav:"Leeum",name:"Samsung Leeum Museum of Art",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Samsung Leeum Museum of Art"]},{id:"apma",nav:"APMA",name:"Amore Pacific Museum of Art",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Amore Pacific Museum of Art"]},{id:"sac",nav:"SAC",name:"Seoul Arts Center",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Seoul Arts Center"]},{id:"ddp",nav:"DDP",name:"Dongdaemun Design Plaza",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Dongdaemun Design Plaza"]},{id:"kukje",nav:"Kukje Gallery",name:"Kukje Gallery",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Kukje Gallery"]},{id:"lmoa",nav:"LMOA",name:"Lotte Museum of Art",wallpaper:null,photos:[],homepage:null,address:[" "],description:["Lotte Museum of Art"]}]),v=function(){var e=Object(d.e)().id,t=h.filter((function(t){return t.id===e}))[0],a=t.name;t.wallpaper,t.photos,t.homepage,t.address,t.description;return l.a.createElement("div",null,l.a.createElement("p",null,"".concat(a)))},g=(a(35),function(e){function t(e){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toggleNavigation,a=e.collapsed;return l.a.createElement("div",{className:["nav-overlay",a?"collapsed":null].join(" ")},l.a.createElement("div",{className:["nav-bar-container",a?"collapsed":null].join(" ")},l.a.createElement("div",{className:"closeButton"},l.a.createElement("p",{onClick:function(){return t()}}," \xd7 ")),l.a.createElement(c.b,{exact:!0,to:"/",className:"nav-text home",onClick:function(){return t()}},"SEOUL"),h.map((function(e,a){return l.a.createElement(c.b,{to:"/Place/".concat(e.id),className:"nav-text",onClick:function(){return t()}},e.nav)}))))}}]),t}(n.Component)),b=(a(36),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Footer"))}}]),t}(n.Component)),j=(a(37),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.toggleNavigation;return l.a.createElement("div",{class:"hamburger",onClick:function(){return e()}},l.a.createElement("div",{class:"bar"}),l.a.createElement("div",{class:"bar"}),l.a.createElement("div",{class:"bar"}))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={collapsed:!0},a.toggleNavigation=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.collapsed;return l.a.createElement("div",{className:"container"},l.a.createElement(g,{toggleNavigation:this.toggleNavigation,collapsed:e}),l.a.createElement("div",{className:"content"},l.a.createElement(j,{toggleNavigation:this.toggleNavigation}),l.a.createElement(d.a,{exact:!0,path:"/"},l.a.createElement(f,null)),l.a.createElement(d.a,{exact:!0,path:"/Place/:id"},l.a.createElement(v,null)),l.a.createElement(b,null)))}}]),t}(n.Component),O=(a(38),l.a.createElement(c.a,null,l.a.createElement(E,null)));o.a.render(O,document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9736f82a.chunk.js.map