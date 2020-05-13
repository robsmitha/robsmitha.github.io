(this["webpackJsonprobsmitha.github.io"]=this["webpackJsonprobsmitha.github.io"]||[]).push([[0],{33:function(e,a,t){e.exports=t(52)},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(29),c=t.n(s),l=(t(38),t(10)),m=t(11),o=t(13),i=t(12),u=(t(39),t(32)),d=t(19),p=t(58),g=t(62),h=t(63),b=t(53),E=t(54),v=t(55),f=t(56),N=t(9),k=(t(40),t(6)),x=t(8),w=t(18),y=t(7),j=t.n(y),O=t(14),_=null!==sessionStorage.getItem("cache")?new Map(JSON.parse(sessionStorage.getItem("cache"))):new Map;function C(e){return S.apply(this,arguments)}function S(){return(S=Object(O.a)(j.a.mark((function e(a){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_.has(a)){e.next=3;break}return t=_.get(a),e.abrupt("return",t.json);case 3:return e.next=5,fetch(a);case 5:if(void 0===(n=e.sent)||!n.ok){e.next=13;break}return e.next=9,n.json();case 9:return r=e.sent,_.set(a,{json:r,cached_at:(new Date).getTime()}),sessionStorage.setItem("cache",JSON.stringify(Array.from(_.entries()))),e.abrupt("return",r);case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R="https://api.github.com",L="robsmitha",H={getUser:function(){return C("".concat(R,"/users/").concat(L))},getUserRepos:function(){return C("".concat(R,"/users/").concat(L,"/repos?sort=pushed&direction=desc"))},getStarred:function(){return C("".concat(R,"/users/").concat(L,"/starred"))},getRepo:function(e){return C("".concat(R,"/repos/").concat(L,"/").concat(e))},getCommits:function(e){return C("".concat(R,"/repos/").concat(L,"/").concat(e,"/commits"))},getLanguages:function(e){return C("".concat(R,"/repos/").concat(L,"/").concat(e,"/languages"))},getCommit:function(e,a){return C("".concat(R,"/repos/").concat(L,"/").concat(e,"/commits/").concat(a))}};var D=r.a.createContext(),M=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={user:{loading:!0,success:!1,data:null}},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"getUser",value:function(){var e=Object(O.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getUser();case 2:a=e.sent,this.setState({user:{loading:!1,success:null!==a,data:a}});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(D.Provider,{value:{user:this.state.user}},this.props.children)}}]),t}(n.Component),T=D.Consumer,q=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null,(function(e){var a=e.user;return r.a.createElement(b.a,{className:"border-0 shadow mb-5 mb-lg-0"},r.a.createElement(E.a,{className:"bg-gray-100 py-4 border-0 text-center"},r.a.createElement(N.b,{to:"/"},r.a.createElement("img",{className:"d-block avatar avatar-xxl p-2 mb-2 mx-auto",src:!a.loading&&a.success&&null!==a.data.avatar_url?a.data.avatar_url:"https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/robsmitha.png",loading:"lazy"})),r.a.createElement("h5",null,!a.loading&&a.success?a.data.name:"Rob Smitha"),r.a.createElement("p",{className:"text-muted text-sm mb-0"},!a.loading&&a.success?a.data.location:"United States")),r.a.createElement(v.a,{flush:!0},r.a.createElement(N.b,{to:"/",className:"list-group-item list-group-item-action"},r.a.createElement(k.a,{icon:x.f,className:"text-secondary"}),"\xa0 Home"),r.a.createElement(f.a,{className:"small text-muted"},r.a.createElement(k.a,{icon:x.c}),"\xa0 External links"),r.a.createElement("a",{href:"https://github.com/robsmitha",target:"_blank",className:"list-group-item list-group-item-action",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:w.a,className:"text-github"}),"\xa0 GitHub"),r.a.createElement("a",{href:"https://www.linkedin.com/in/robsmitha/",target:"_blank",className:"list-group-item list-group-item-action",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:w.b,className:"text-linkedin"}),"\xa0 LinkedIn"),r.a.createElement("a",{href:"https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/files/Rob+Smitha+Resume.pdf",target:"_blank",className:"list-group-item list-group-item-action",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:x.e,className:"text-resume"}),"\xa0 Resume")))}))}}]),t}(n.Component),U=t(26),I=(t(49),t(57)),z=t(59),W=t(60),J=t(61),A=t(66),B=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).toggleNavbar=function(){n.setState({collapsed:!n.state.collapsed})},n.collapseNavbar=function(){n.setState({collapsed:!0})},n.state={collapsed:!0,navHeight:56},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.querySelector(".avatar").onload=function(){var a=document.querySelector(".main-nav");e.setState({navHeight:null!==a?a.clientHeight:56})}}},{key:"render",value:function(){var e=this;return r.a.createElement(T,null,(function(a){var t,n=a.user;return r.a.createElement("section",{className:"main-nav-header",style:{paddingTop:e.state.navHeight+"px"}},r.a.createElement(I.a,{className:"main-nav navbar navbar-expand-lg fixed-top navbar-light shadow bg-light p-3"},r.a.createElement(p.a,null,r.a.createElement(z.a,{className:"mr-auto mr-lg-0 d-block d-md-none",tag:N.b,to:"/"},r.a.createElement("div",{className:"media"},r.a.createElement("img",(t={className:"avatar",src:!n.loading&&n.success&&null!==n.data.avatar_url?n.data.avatar_url:"https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/robsmitha.png"},Object(U.a)(t,"className","rounded-circle img-fluid"),Object(U.a)(t,"style",{width:"4rem"}),t)),"\xa0",r.a.createElement("div",{className:"media-body"},r.a.createElement("span",{className:"d-block"},"Rob Smitha"),r.a.createElement("small",{className:"text-muted d-block"},"Software Engineer")))),r.a.createElement(W.a,{className:"p-2 border-0",onClick:e.toggleNavbar},r.a.createElement(k.a,{icon:e.state.collapsed?x.a:x.j})),r.a.createElement("div",{style:{top:e.state.navHeight+"px"},className:"navbar-collapse offcanvas-collapse bg-light ".concat(e.state.collapsed?"":" open"),id:"navbarsExampleDefault"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement(J.a,null,r.a.createElement(A.a,{tag:N.b,to:"/",onClick:e.collapseNavbar},r.a.createElement(k.a,{icon:x.f,className:"text-secondary"}),"\xa0Home"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"navbar-text small text-muted"},r.a.createElement(k.a,{icon:x.c}),"\xa0 External links"),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://github.com/robsmitha",target:"_blank",className:"nav-link",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:w.a,className:"text-github"}),"\xa0GitHub")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/robsmitha/",target:"_blank",className:"nav-link",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:w.b,className:"text-linkedin"}),"\xa0LinkedIn")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/files/Rob+Smitha+Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},r.a.createElement(k.a,{icon:x.e,className:"text-resume"}),"\xa0Resume")))))))}))}}]),t}(n.Component),G=function(e){var a=e.children;return r.a.createElement("section",null,r.a.createElement(B,null),r.a.createElement(p.a,{className:"py-3 py-md-4"},r.a.createElement(g.a,null,r.a.createElement(h.a,{md:"3",className:"d-none d-md-block"},r.a.createElement(q,null)),r.a.createElement(h.a,{md:"9"},a))))},P=function(e){var a=e.component,t=Object(u.a)(e,["component"]);return r.a.createElement(d.a,Object.assign({},t,{render:function(e){return r.a.createElement(G,null,r.a.createElement(a,e))}}))},F=(t(50),function(e){var a=void 0!==e.message?e.message:"";return r.a.createElement("span",null,r.a.createElement("span",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),a)}),Q=function(e){var a="/devicon/devicon-original-wordmark.svg";if(void 0!==e.language&&null!==e.language)switch(e.language.toLowerCase()){case"c#":a="/csharp/csharp-original.svg";break;case"javascript":a="/javascript/javascript-plain.svg";break;case"css":a="/css3/css3-original-wordmark.svg";break;case"html":a="/html5/html5-original-wordmark.svg";break;case"typescript":a="/typescript/typescript-original.svg"}return r.a.createElement("img",Object.assign({src:"https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/vendor/devicons"+a,alt:e.language},e))},$=t(64),K=function(e){var a=window.innerWidth<768?"200px":"300px",t="";switch(e.svg){case void 0:case null:case"":var n=["undraw_server_down_s4lk","undraw_blank_canvas_3rbb","undraw_bug_fixing_oc7a","undraw_cancel_u1it","undraw_page_not_found_su7k","undraw_QA_engineers_dg5p","undraw_warning_cyit","undraw_not_found_60pq","empty"];t=n[Math.floor(Math.random()*n.length)];break;default:t=e.svg}return r.a.createElement("img",Object.assign({width:a,src:"https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/vendor/unDraw/"+t+".svg",alt:e.svg},e))},V=function(e){var a=void 0!==e.message?e.message:"";return r.a.createElement(g.a,null,r.a.createElement(h.a,{xs:"12"},r.a.createElement(K,{className:"d-block mx-auto"})),r.a.createElement(h.a,{xs:"12"},r.a.createElement(g.a,{className:"h-100 justify-content-center align-items-center"},r.a.createElement(h.a,null,r.a.createElement("p",{className:"lead mt-2 text-muted text-center"},r.a.createElement(k.a,{icon:x.b}),"\xa0",a)))))},X=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={repos:{loading:!0,success:!1,data:null},starred:{loading:!0,success:!1,data:null}},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getUserRepos(),this.getStarred()}},{key:"getUserRepos",value:function(){var e=Object(O.a)(j.a.mark((function e(){var a,t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getUserRepos();case 2:a=e.sent,n=(t=null!==a)?a.filter((function(e){return null!==e.description&&e.description.length>0})):[],this.setState({repos:{loading:!1,success:t,data:n}});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStarred",value:function(){var e=Object(O.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getStarred();case 2:a=e.sent,this.setState({starred:{loading:!1,success:null!==a,data:a}});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.repos,t=e.starred;return r.a.createElement(T,null,(function(e){var n=e.user;return r.a.createElement("div",null,r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Welcome"),r.a.createElement("h2",{className:"mb-4"},!n.loading&&n.success?r.a.createElement("span",null,"Hello, I'm ",n.data.name.split(" ")[0],"!"):r.a.createElement("span",null,"Hello, I'm Rob!")),n.loading?r.a.createElement(F,{message:"Loading user, please wait.."}):a.success?r.a.createElement("p",{className:"lead text-muted mt-2"},n.data.bio):r.a.createElement("p",{className:"lead text-muted mt-2"},"Full Stack Web Development with .NET and JavaScript."),r.a.createElement("hr",null),r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Projects"),r.a.createElement("h3",{className:"mb-4 h4"},"Repositories"),r.a.createElement("div",{className:"mb-3"},r.a.createElement(g.a,null,a.loading?r.a.createElement(F,{message:"Loading repos, please wait.."}):a.success?a.data.map((function(e,a){return r.a.createElement(h.a,{md:"4",key:e.name,className:"mb-4 hover-animate"},r.a.createElement(N.b,{className:"text-decoration-none",to:"/repo/:name".replace(":name",e.name)},r.a.createElement(b.a,{className:"h-100 text-center shadow border-0"},r.a.createElement($.a,null,r.a.createElement(Q,{className:"bd-placeholder-img mb-2 mr-2 rounded",language:e.language}),r.a.createElement("strong",{className:"text-gray-dark"},e.name),r.a.createElement("p",{className:"pb-3 mb-0 small lh-125 text-muted"},e.description)))))})):r.a.createElement(h.a,null,r.a.createElement(V,{message:"Could not load repos"})))),r.a.createElement("hr",null),r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Tools"),r.a.createElement("h3",{className:"mb-4 h4"},"Resources"),r.a.createElement("div",{className:"mb-3"},r.a.createElement(g.a,null,t.loading?r.a.createElement(F,{message:"Loading tools, please wait.."}):t.success?t.data.map((function(e,a){return r.a.createElement(h.a,{xs:"6",sm:"auto",key:e.name,className:"mb-4 text-center"},r.a.createElement("a",{target:"_blank",href:e.html_url,rel:"noopener noreferrer",className:"text-muted"},r.a.createElement(Q,{className:"bd-placeholder-img mb-2 rounded",language:e.language}),r.a.createElement("small",{className:"d-block text-gray-dark"},e.name)))})):r.a.createElement(h.a,null,r.a.createElement(V,{message:"Could not load tools."})))))}))}}]),t}(n.Component),Y=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={name:n.props.match.params.name,repo:{loading:!0,success:!1,data:null},commits:{loading:!0,success:!1,data:null},languages:{loading:!0,success:!1,data:null}},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getRepo(),this.getLanguages(),this.getCommits()}},{key:"getRepo",value:function(){var e=Object(O.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getRepo(this.state.name);case 2:a=e.sent,this.setState({repo:{loading:!1,success:null!==a,data:a}});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCommits",value:function(){var e=Object(O.a)(j.a.mark((function e(){var a,t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getCommits(this.state.name);case 2:a=e.sent,t=a.reduce((function(e,a){var t=a.commit.committer.date.split("T")[0];return e[t]||(e[t]=[]),e[t].push(a),e}),{}),n=Object.keys(t).map((function(e){return{date:e,commits:t[e]}})),this.setState({commits:{loading:!1,success:null!==n,data:n}});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getLanguages",value:function(){var e=Object(O.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getLanguages(this.state.name);case 2:a=e.sent,this.setState({languages:{loading:!1,success:null!==a,data:a}});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.repo,t=e.name,n=e.languages,s=e.commits;return r.a.createElement("div",null,r.a.createElement("div",{className:"mb-4"},r.a.createElement(N.b,{to:"/"},"Home")," \u2212 ",null!==a.data?a.data.name:t),r.a.createElement("div",{className:"mb-3"},r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Repository"),a.loading?r.a.createElement(F,{message:"Loading repo, please wait.."}):a.success?r.a.createElement("div",null,r.a.createElement("h2",{className:"d-block mb-4"},a.data.name),r.a.createElement("p",{className:"lead mt-2"},a.data.description),r.a.createElement("a",{href:a.data.html_url,type:"button",className:"btn btn-light",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:w.a}),"\xa0Continue to GiHub"),r.a.createElement("hr",null)):r.a.createElement(V,{message:"Could not load repo."})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Languages"),r.a.createElement("h3",{className:"d-block mb-4"},"Breakdown"),n.loading?r.a.createElement(F,{message:"Loading languages, please wait.."}):n.success?r.a.createElement("div",null,r.a.createElement(g.a,null,Object.keys(n.data).map((function(e){return r.a.createElement(h.a,{key:e,className:"mb-3 text-md-left text-center"},r.a.createElement(Q,{className:"bd-placeholder-img mb-2 mr-2 rounded",language:e}),r.a.createElement("small",{className:"text-muted lead"},n.data[e]))})))):r.a.createElement(V,{message:"Could not load languages."})),r.a.createElement("hr",null),r.a.createElement("div",{className:"mb-3"},r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Commits"),r.a.createElement("h3",{className:"d-block mb-4"},"Activity"),s.loading?r.a.createElement(F,{message:"Loading commits, please wait.."}):s.success?r.a.createElement("div",null,r.a.createElement("div",{className:"commits-listing commits-listing-padded"},s.data.map((function(e){return r.a.createElement("div",{key:e.date},r.a.createElement("div",{className:"commit-group-title"},r.a.createElement(k.a,{className:"git-commit",icon:x.g}),r.a.createElement("small",null,new Date(e.date).toDateString())),r.a.createElement("div",{className:"commit-group pb-3 mb-0 small lh-125"},r.a.createElement(v.a,null,e.commits.map((function(e){return r.a.createElement(N.b,{key:e.sha,className:"list-group-item list-group-item-action",to:"/repo/:name/commit/:sha".replace(":name",a.data.name).replace(":sha",e.sha)},r.a.createElement("div",{className:"media"},r.a.createElement("img",{src:e.author.avatar_url,className:"bd-placeholder-img mb-2 mr-2 rounded"}),"\xa0",r.a.createElement("div",{className:"media-body"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("small",{className:"d-block mb-2 text-break"},e.commit.message),r.a.createElement("div",{className:"blockquote-footer small"},e.author.login," on\xa0",r.a.createElement("cite",{title:"Commited on"},new Date(e.commit.author.date).toLocaleTimeString()))))))})))))})))):r.a.createElement(V,{message:"Could not load commits."})))}}]),t}(n.Component),Z=t(65),ee=function(e){var a="light";switch(e.status.toLowerCase()){case"modified":a="primary";break;case"renamed":a="light";break;case"added":a="success";break;case"removed":a="danger"}return r.a.createElement(Z.a,Object.assign({color:a},e),e.status)},ae=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={name:n.props.match.params.name,sha:n.props.match.params.sha,commit:{loading:!0,success:!1,data:null}},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getCommit()}},{key:"getCommit",value:function(){var e=Object(O.a)(j.a.mark((function e(){var a,t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,t=a.name,n=a.sha,e.next=3,H.getCommit(t,n);case 3:r=e.sent,this.setState({commit:{loading:!1,success:null!==r,data:r}});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.commit,t=e.name,n=e.sha;return r.a.createElement("div",{className:"h-100"},r.a.createElement("div",{className:"mb-4"},r.a.createElement(N.b,{to:"/"},"Home"),"\xa0\u2212\xa0",r.a.createElement(N.b,{to:"/repo/:name".replace(":name",t)},t),"\xa0\u2212\xa0",r.a.createElement("span",{className:"text-break"},n)),r.a.createElement("div",{className:"mb-3"},r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Commit"),a.loading?r.a.createElement(F,{message:"Loading commit, please wait.."}):a.success?r.a.createElement("div",null,r.a.createElement("h2",{className:"d-block mb-4"},"Message"),r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0 lead"},a.data.commit.message),r.a.createElement("div",{className:"blockquote-footer"},a.data.commit.committer.name," on\xa0",r.a.createElement("cite",{title:"Commited on"},new Date(a.data.commit.committer.date).toLocaleString()))),r.a.createElement("hr",null),r.a.createElement("p",{className:"subtitle text-sm text-primary"},"Stats"),r.a.createElement("h2",{className:"d-block mb-4"},"Changes"),r.a.createElement("p",{className:"lead mt-2"},"Showing ",r.a.createElement("strong",null,a.data.files.length," changed files "),"with ",r.a.createElement("strong",{className:"text-success"},a.data.stats.additions," additions "),"and ",r.a.createElement("strong",{className:"text-danger"},a.data.stats.deletions," deletions.")),r.a.createElement(v.a,{flush:!0},a.data.files.map((function(e,a){return r.a.createElement("a",{target:"_blank",rel:"norefeffer noopener",href:e.blob_url,className:"list-group-item list-group-item-action px-1",key:a},r.a.createElement("span",{className:"d-block"},r.a.createElement("small",{className:"text-nowrap"},r.a.createElement(k.a,{icon:x.d}),"\xa0"),r.a.createElement("span",{className:"text-break"},e.filename)),r.a.createElement("div",null,r.a.createElement(ee,{status:e.status}),"\xa0",r.a.createElement("span",{className:"text-success"},r.a.createElement(k.a,{icon:x.i}),"\xa0",e.additions,"\xa0"),r.a.createElement("span",{className:"text-danger"},r.a.createElement(k.a,{icon:x.h}),"\xa0",e.deletions)))})),r.a.createElement("a",{href:a.data.html_url,type:"button",className:"list-group-item list-group-item-action",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:w.a}),"\xa0See full commit on GitHub"))):r.a.createElement("div",null,r.a.createElement("h2",{className:"d-block mb-4"},t," - ",n),r.a.createElement(K,{icon:"undraw_not_found_60pq"}),r.a.createElement("p",{className:"lead mt-2"},"Could not load the commit."))))}}]),t}(n.Component),te=r.a.createContext(),ne=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).changeTheme=function(e){var a=e.target.value;console.log(a),n.setState({theme:a})},n.state={theme:null},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(te.Provider,{value:{theme:this.state.theme,changeTheme:this.changeTheme}},this.props.children)}}]),t}(n.Component),re=(te.Consumer,function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentWillMount",value:function(){this.unlisten=this.props.history.listen((function(e,a){window.scrollTo(0,0)}))}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){return r.a.createElement(ne,null,r.a.createElement(M,null,r.a.createElement(P,{exact:!0,path:"/",component:X}),r.a.createElement(P,{exact:!0,path:"/repo/:name",component:Y}),r.a.createElement(P,{exact:!0,path:"/repo/:name/commit/:sha",component:ae})))}}]),t}(n.Component)),se=Object(d.e)(re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(51);var ce=document.getElementsByTagName("base")[0].getAttribute("href"),le=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{basename:ce},r.a.createElement(se,null))),le),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.7d18437f.chunk.js.map