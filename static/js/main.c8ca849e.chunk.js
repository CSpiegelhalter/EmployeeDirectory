(this.webpackJsonpeployeedirectory=this.webpackJsonpeployeedirectory||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(16),a=n.n(s),c=(n(22),n(23),n(3)),i=n(4),o=n(6),d=n(5),l=(n(24),n(0)),h=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{style:{backgroundColor:"blue"},children:[Object(l.jsx)("h1",{children:"Employee Directory"}),Object(l.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results"})]})}}]),n}(r.Component);var u=function(e){var t=e.users;function n(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return console.log(t),Object(l.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,s=e.picture,a=e.phone,c=e.email,i=e.dob;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:s.medium,alt:r.first+" "+r.last+"'s profile picture"})}),Object(l.jsxs)("td",{children:[r.first," ",r.last]}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"send email to: "+c,target:"__blank",children:c})}),Object(l.jsx)("td",{children:n(i.date)})]},t.uuid)})):Object(l.jsx)(l.Fragment,{})})};var j=function(e){var t=e.headings,n=e.users,r=e.handleSort;return Object(l.jsx)("div",{children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:t.map((function(e){var t=e.name,n=e.width;return Object(l.jsx)("th",{className:"col-md-2",style:{width:n},onClick:function(){r(t.toLowerCase())},children:t},t)}))})}),Object(l.jsx)(u,{users:n})]})})},b=n(17),O=n.n(b),f=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")};var p=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("input",{value:e.filteredUsers,onChange:e.handleSearchChange,type:"text",placeholder:"Search employees"})})},m=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={users:[{}],order:"decend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"15%"},{name:"Name",width:"15%"},{name:"Phone",width:"15%"},{name:"Email",width:"15%"},{name:"DOB",width:"15%"}],e.handleSearchChange=function(t){var n=t.target.value,r=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({filteredUsers:r})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{handleSearchChange:this.handleSearchChange}),Object(l.jsx)(j,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})]})}}]),n}(r.Component);var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(m,{})]})};a.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c8ca849e.chunk.js.map