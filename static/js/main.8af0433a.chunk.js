(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{306:function(e,t,n){e.exports=n(530)},309:function(e,t,n){},530:function(e,t,n){"use strict";n.r(t);n(307),n(308),n(309);var a=n(0),r=n.n(a),l=n(75),c=n.n(l),i=n(37),o=n(103),s=n(144),u=n(29),m=n(26),d=n(270),h={count:0},p={increment:function(){return{type:"INCREMENT_COUNT"}},decrement:function(){return{type:"DECREMENT_COUNT"}}},E=function(e,t){return e=e||h,"INCREMENT_COUNT"===t.type?Object(u.a)({},e,{count:e.count+1}):"DECREMENT_COUNT"===t.type?Object(u.a)({},e,{count:e.count-1}):e},f={smallMenu:!1},b={toggleSideMenu:function(){return{type:"TOGGLE_MENU"}}},g=function(e,t){return e=e||f,"TOGGLE_MENU"===t.type?Object(u.a)({},e,{smallMenu:!e.smallMenu}):e},v=n(305),j=n(43),y=n.n(j),O=n(76),w={users:[{name:"Albiona",email:"alb@gmail.com",role:"Admin",caloryLimit:123},{name:"Albiona",email:"alb@gmail.com",role:"Admin",caloryLimit:123},{name:"Albiona",email:"alb@gmail.com",role:"Admin",caloryLimit:123}]},C={getUsers:function(){return function(){var e=Object(O.a)(y.a.mark(function e(t,n){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},removeUser:function(e){return function(){var t=Object(O.a)(y.a.mark(function t(n,a){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"DELETE_USER",users:a().userManagement.users.filter(function(t){return t.id!==e})});case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},editUser:function(e){return function(){var t=Object(O.a)(y.a.mark(function t(n,a){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_USER",users:a().userManagement.users.map(function(t){return t.id===e.id?e:t})});case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},addUser:function(e){return function(){var t=Object(O.a)(y.a.mark(function t(n,a){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_USER",user:Object.assign({},e,{id:Math.random()})});case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}},U=function(e,t){return e=e||w,"GET_ALL_USERS"===t.type?Object(u.a)({},e,{users:t.users}):"DELETE_USER"===t.type?Object(u.a)({},e,{users:t.users}):"UPDATE_USER"===t.type?Object(u.a)({},e,{users:t.users}):"ADD_USER"===t.type?Object(u.a)({},e,{users:[].concat(Object(v.a)(e.users),[t.user])}):e},M={text:""},k={search:function(e){return function(){var t=Object(O.a)(y.a.mark(function t(n,a){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SEARCH_BY_TEXT",text:e});case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}},S=function(e,t){return e=e||M,"SEARCH_BY_TEXT"===t.type?Object(u.a)({},e,{text:t.text}):e};var N=n(534),x=n(34),A=n(35),T=n(38),I=n(36),R=n(39),_=n(9),L=n(533),D=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).style={alignSelf:"center",paddingLeft:"4px"},n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{whiteSpace:"nowrap",display:"inline-flex"}},r.a.createElement(_.f,{size:"large",color:this.props.color,name:this.props.name}),r.a.createElement("div",{style:this.style,hidden:this.props.hideText},this.props.children))}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:"dashboard"},n.handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n.changeSize=function(){return n.setState({smallSidebar:!n.props.smallMenu})},n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"getMenu",value:function(){var e=this.state.activeItem;return r.a.createElement(_.j,{fixed:"left",borderless:!0,className:(this.props.smallMenu?"small-side":"")+" side",vertical:!0},r.a.createElement(_.j.Item,{as:L.a,to:"/",name:"dashboard",active:"dashboard"===e,onClick:this.handleItemClick},r.a.createElement(D,{hideText:this.props.smallMenu,color:"teal",name:"home"},"Dashboard")),r.a.createElement(_.j.Item,{as:L.a,to:"/appointments",name:"appointments",active:"appointments"===e,onClick:this.handleItemClick},r.a.createElement(D,{hideText:this.props.smallMenu,name:"calendar"},"Appointments")),r.a.createElement(_.j.Item,{as:L.a,to:"/userManagement",name:"userManagement",active:"userManagement"===e,onClick:this.handleItemClick},r.a.createElement(D,{hideText:this.props.smallMenu,name:"users"},"Patients")),r.a.createElement(_.j.Item,{as:L.a,to:"/card",name:"card",active:"card"===e,onClick:this.handleItemClick},r.a.createElement(D,{hideText:this.props.smallMenu,name:"time"},"Card")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"parent"},r.a.createElement("div",{className:(this.props.smallMenu?"small-side ":"")+"side"},this.getMenu()),r.a.createElement("div",{className:(this.props.smallMenu?"small-content ":"")+"content"},this.props.children))}}]),t}(a.Component),H=Object(i.b)(function(e){return e.sideMenu},function(e){return Object(m.b)(b,e)})(F),z=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(_.d.Column,{textAlign:"center"},[{name:"Elliot Fu",bio:"Elliot has been a member since July 2012",button:"More Info"},{name:"James Frank",bio:"James has been a member since Sep 2011",button:"More Info"},{name:"Algo Hemil",bio:"Algo has been a member since Nov 2015",button:"More Info"}].map(function(e){return r.a.createElement(_.m,null,r.a.createElement(_.e,{as:"h4"},"Basic Plan"),r.a.createElement("p",null,e.bio),r.a.createElement(_.a,null,e.button))}))}}]),t}(a.Component),G=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(_.l,{hoverable:!0,trigger:r.a.createElement(_.f,{size:"large",name:"mail outline",color:"grey"}),position:"bottom right",verticalOffset:18,size:"small"},r.a.createElement(z,null))}}]),t}(a.Component),B=function(e){function t(){var e,n;Object(x.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"doSearch",value:function(e){this.props.actions.search(e.target.value)}},{key:"render",value:function(){return r.a.createElement(_.j,{fixed:"top",className:"top-menu"},r.a.createElement(_.j.Item,{className:"logo-space-menu-item"},r.a.createElement("div",{className:"display-inline logo-space"},r.a.createElement(_.g,{src:"./logo.png"}),r.a.createElement("p",null,"Ferexim"))),r.a.createElement(_.j.Item,{className:"no-border",onClick:this.props.actions.toggleSideMenu},r.a.createElement(_.f,{name:"bars"})),r.a.createElement(_.j.Item,{className:"no-border drop-left-padding"},r.a.createElement(_.h,{className:"icon",icon:"search",placeholder:"Search...",onChange:this.doSearch.bind(this)})),r.a.createElement(_.j.Menu,{position:"right"},r.a.createElement(_.j.Item,{className:"no-border",position:"right"},r.a.createElement(G,null),r.a.createElement(_.i,{className:"label-on-corner",color:"teal",size:"mini",floating:!0,circular:!0},"22")),r.a.createElement(_.j.Item,{className:"no-border",position:"right"},r.a.createElement("div",{className:"display-inline"},r.a.createElement(_.g,{circular:!0,size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/jenny.jpg"}),"Albiona"))))}}]),t}(a.Component),J=Object(i.b)(function(e){return e.sideMenu},function(e){return{actions:Object(m.b)(Object.assign({},b,k),e)}})(B),W=function(e){return r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"menu"},r.a.createElement(J,null)),r.a.createElement("div",{className:"main-content"},r.a.createElement(H,null,e.children)))},P=Object(i.b)()(function(e){return r.a.createElement(_.m,null,r.a.createElement("h1",null,"React Admin Dashboard"))}),X=n(138),Y=n(100),$=function(e){function t(e){var n;return Object(x.a)(this,t),(n=Object(T.a)(this,Object(I.a)(t).call(this,e))).getTableData=function(e){return e.state.userManagement.users.filter(function(t){return t.name.includes(e.state.searchStore.text)}).map(function(e){return r.a.createElement(_.n.Row,null,r.a.createElement(_.n.Cell,null,e.name+(e.password?' | Pass: "'+e.password+'" !!Attention':"")),r.a.createElement(_.n.Cell,null,e.email),r.a.createElement(_.n.Cell,null,e.role),r.a.createElement(_.n.Cell,null,e.caloryLimit),r.a.createElement(_.n.Cell,null,r.a.createElement(_.a,{onClick:function(){return n.selectUserForEditing(e.id)},size:"mini",icon:!0},r.a.createElement(_.f,{name:"pencil"})),r.a.createElement(_.a,{onClick:function(){return n.deleteUser(e.id)},color:"red",size:"mini",icon:!0},r.a.createElement(_.f,{name:"delete"}))))})},n.deleteUser=function(e){n.props.removeUser(e)},n.selectUserForEditing=function(e){var t=n.props.state.userManagement.users.find(function(t){return t.id===e});n.setState({newUser:t})},n.handleSubmit=function(){n.state.newUser.id?n.props.editUser(n.state.newUser):n.props.addUser(n.state.newUser),n.clearUserForm()},n.handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,r=t.name;n.setState({newUser:Object.assign({},n.state.newUser,Object(X.a)({},r,a))})},n.onDropdownSelection=function(e,t){var a=t.value;n.setState({newUser:Object.assign({},n.state.newUser,{role:a})})},n.clearUserForm=function(){n.setState({newUser:{name:"",email:"",role:"",caloryLimit:0}})},n.state={newUser:{name:"",email:"",role:"",caloryLimit:0}},n.handleSubmit=n.handleSubmit.bind(Object(Y.a)(Object(Y.a)(n))),n}return Object(R.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return this.props.state.userManagement.users?[r.a.createElement(_.m,null,r.a.createElement(_.e,null,"Registered Users"),r.a.createElement(_.n,{compact:!0,celled:!0},r.a.createElement(_.n.Header,{fullWidth:!0},r.a.createElement(_.n.Row,null,r.a.createElement(_.n.HeaderCell,null,"Name"),r.a.createElement(_.n.HeaderCell,null,"Email"),r.a.createElement(_.n.HeaderCell,null,"Role"),r.a.createElement(_.n.HeaderCell,null,"Calory Limit"),r.a.createElement(_.n.HeaderCell,{width:2},"Actions"))),r.a.createElement(_.n.Body,null,this.getTableData(this.props)),r.a.createElement(_.n.Footer,{fullWidth:!0},r.a.createElement(_.n.Row,null,r.a.createElement(_.n.HeaderCell,{colSpan:5}))))),r.a.createElement(_.m,null,r.a.createElement(_.c,null,r.a.createElement(_.c.Group,{unstackable:!0,widths:2},r.a.createElement(_.c.Field,null,r.a.createElement("label",null,"Username"),r.a.createElement(_.h,{type:"text",name:"name",value:this.state.newUser.name,onChange:this.handleChange,placeholder:"Enter name..."})),r.a.createElement(_.c.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement(_.h,{type:"text",name:"email",value:this.state.newUser.email,onChange:this.handleChange,placeholder:"Enter email..."}))),r.a.createElement(_.c.Group,{unstackable:!0,widths:2},r.a.createElement(_.c.Field,null,r.a.createElement("label",null,"Role"),r.a.createElement(_.h,{type:"text",onChange:this.handleChange,name:"role",value:this.state.newUser.role,placeholder:"Enter role..."})),r.a.createElement(_.c.Field,null,r.a.createElement("label",null,"Calory Limit"),r.a.createElement(_.h,{type:"number",onChange:this.handleChange,name:"caloryLimit",value:this.state.newUser.caloryLimit,placeholder:"Select Calory Limit",fluid:!0}))),r.a.createElement(_.a,{primary:!0,type:"submit",onClick:this.handleSubmit},"Submit"),r.a.createElement(_.a,{onClick:this.clearUserForm},"Clear")))]:r.a.createElement(_.k,null,"USERMNG Loading")}}]),t}(a.Component),q=Object(i.b)(function(e){return{state:{searchStore:e.searchStore,userManagement:e.userManagement}}},function(e){return Object(m.b)(C,e)})($),K=(n(529),Object(i.b)(function(e){return e.card},function(e){return Object(m.b)(p,e)})(function(e){return r.a.createElement(_.b,null,r.a.createElement(_.g,{src:"https://semantic-ui.com/images/avatar/large/elliot.jpg"}),r.a.createElement(_.b.Content,null,r.a.createElement(_.b.Header,null,"Matthew"),r.a.createElement(_.b.Meta,null,r.a.createElement("span",{className:"date"},"Joined in 2015")),r.a.createElement(_.b.Description,null,"Matthew is a musician living in Nashville.")),r.a.createElement(_.b.Content,{extra:!0},r.a.createElement("a",{href:"#"},r.a.createElement(_.f,{name:"user"}),"22 Friends")))})),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Z=document.getElementsByTagName("base")[0].getAttribute("href"),ee=Object(s.a)({basename:Z}),te=function(e,t){var n={card:E,sideMenu:g,userManagement:U,searchStore:S},a=[d.a,Object(o.b)(e)],r=[],l=Object(m.c)(Object(u.a)({},n,{routing:o.c}));return Object(m.e)(l,t,m.d.apply(void 0,[m.a.apply(void 0,a)].concat(r)))}(ee,window.initialReduxState),ne=document.getElementById("root");c.a.render(r.a.createElement(i.a,{store:te},r.a.createElement(o.a,{history:ee},r.a.createElement(function(){return r.a.createElement(W,null,r.a.createElement(N.a,{exact:!0,path:"/",component:P}),r.a.createElement(N.a,{path:"/userManagement",component:q}),r.a.createElement(N.a,{path:"/card",component:K}))},null))),ne),function(){if("serviceWorker"in navigator){if(new URL("/react_admin_dashboard",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react_admin_dashboard","/service-worker.js");Q?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):V(e)})}}()}},[[306,1,2]]]);
//# sourceMappingURL=main.8af0433a.chunk.js.map