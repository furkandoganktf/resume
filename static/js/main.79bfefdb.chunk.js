(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(62)},54:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),l=a.n(s),i=(a(54),a(6)),o=a(7),c=a(9),m=a(8),d=a(38),u=a(31),h=a.n(u),p=a(21),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,a=this.props.data.description,n=this.props.data.address.city,s=this.props.data.social.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},r.a.createElement("i",{className:e.className})))});return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"TESTIMONIALS")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")),r.a.createElement(p.b,{to:"/reading"},r.a.createElement("li",{className:"read"},">READING LIST")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{style:{fontFamily:"sans-serif"},className:"responsive-headline"},"I'm ",e,"."),r.a.createElement("h3",null,"I'm ",n," based ",r.a.createElement("span",null,t),". ",a,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},s))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},r.a.createElement("i",{className:e.className})))});return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null," \xa9 ",(new Date).getFullYear()," by Furkan Do\u011fan"))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="/resume/images/"+this.props.data.image,a=this.props.data.bio,n=this.props.data.address.street,s=this.props.data.address.city,l=this.props.data.address.state,i=this.props.data.address.zip,o=this.props.data.phone,c=this.props.data.email,m=this.props.data.resumedownload;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:t,alt:"Furkan Dogan Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement(p.b,{to:"/me"},r.a.createElement("h2",null,"About Me")),r.a.createElement("p",null,a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,n,r.a.createElement("br",null),s," / ",l,", ",i),r.a.createElement("br",null),r.a.createElement("span",null,o),r.a.createElement("br",null),r.a.createElement("span",null,c))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"button"},r.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),v=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map(function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return r.a.createElement("div",{key:e.company},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null," ",e.description," "))}),a=this.props.data.skills.map(function(e){var t="bar-expand "+e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{width:e.level},className:t}),r.a.createElement("em",null,e.name))});return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"EDUCATION"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},e)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"WORK"))),r.a.createElement("div",{className:"nine columns main-col"},t)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"SKILLS"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},a)))))}}]),a}(n.Component),b=a(42),w=a.n(b),y="user_r2RMrGHEGfxgkowqjaOUr",N="template_y6qlh6wY",k="gmail",O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({name:e.target.value})},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handleSubjectChange=function(e){n.setState({subject:e.target.value})},n.handleMessageChange=function(e){n.setState({message:e.target.value})},n.handleSubmit=function(e){e.preventDefault();n.state.visible;n.setState({visible:!0}),n.sendFeedback({message_html:n.state.message,subject:n.state.subject,from_name:n.state.name,reply_to:n.state.email,to_name:"Furkan Do\u011fan"})},n.sendFeedback=function(e){w.a.send(k,N,e,y).then(function(e){var t=JSON.parse(JSON.stringify(n.state.errorMessage)),a=JSON.parse(JSON.stringify(n.state.successMessage)),r=(JSON.parse(JSON.stringify(n.state.visible)),JSON.parse(JSON.stringify(n.state.contact)));200===e.status?(t.display="none",a.display="unset",r.display="none",n.setState({visible:!1,errorMessage:t,successMessage:a,contact:r})):(t.display="unset",a.display="none",n.setState({visible:!1,errorMessage:t,successMessage:a}))},function(e){var t=JSON.parse(JSON.stringify(n.state.errorMessage)),a=JSON.parse(JSON.stringify(n.state.successMessage)),r=JSON.parse(JSON.stringify(n.state.visible));t.display="unset",a.display="none",n.setState({visible:r,errorMessage:t,successMessage:a}),console.log("FAILED...",e)})},n.state={name:"",email:"",subject:"",message:"",visible:!1,successMessage:{display:"none"},errorMessage:{display:"none"},contact:{display:"unset"}},n}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.street,a=this.props.data.address.city,n=this.props.data.address.state,s=this.props.data.address.zip,l=this.props.data.phone,i=this.props.data.contactmessage;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Get In Touch."))),r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},i))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"eight columns"},r.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},r.a.createElement("fieldset",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactName"},"Name ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleNameChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactEmail"},"Email ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleEmailChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),r.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleSubjectChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactMessage"},"Message ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("textarea",{cols:"50",rows:"5",id:"contactMessage",name:"contactMessage",onChange:this.handleMessageChange})),r.a.createElement("div",null,r.a.createElement("button",{className:"submit",onClick:this.handleSubmit},"SUBMIT"),r.a.createElement("span",{id:this.state.visible?"image-loader-in":"image-loader"},r.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),r.a.createElement("div",{id:"message-warning",style:this.state.errorMessage},"> There maybe some errors"),r.a.createElement("div",{id:"message-success",style:this.state.successMessage},r.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",r.a.createElement("br",null))),r.a.createElement("aside",{className:"four columns footer-widgets"},r.a.createElement("div",{className:"widget widget_contact"},r.a.createElement("h4",null,"Address and Phone"),r.a.createElement("p",{className:"address"},e,r.a.createElement("br",null),t," ",r.a.createElement("br",null),a,", ",n," ",s,r.a.createElement("br",null),r.a.createElement("span",null,l))))))}}]),a}(n.Component),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return r.a.createElement("li",{key:e.user},r.a.createElement("blockquote",null,r.a.createElement("p",null,e.text),r.a.createElement("cite",null,e.user)))});return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Client Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),S=a(43),C=function(e){window.open(e.target.getAttribute("href"),"_newtab")},L=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=[];return this.props.data&&this.props.data.projects.forEach(function(t){var a="images/portfolio/"+t.image;e.push({src:a,width:1,height:1,alt:t.title,href:t.url})}),r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Check Out Some of My Works."),r.a.createElement(S.a,{photos:e,margin:4,onClick:C})))}}]),a}(n.Component),M=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={foo:"bar",resumeData:{}},n}return Object(o.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resume/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(g,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.resume}),r.a.createElement(L,{data:this.state.resumeData.portfolio}),r.a.createElement(j,{data:this.state.resumeData.testimonials}),r.a.createElement(O,{data:this.state.resumeData.main}),r.a.createElement(E,{data:this.state.resumeData.main}))}}]),a}(n.Component),D=a(87),I=a(30),x=a(88),A=a(89),J=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).aboutPart1="I'm Furkan Do\u011fan. I'm Ankara based Software Developer. Experienced Partner with a demonstrated history of working in the software industry.Skilled in Java, Go, Python, JavaScript and Algorithms. Strong entrepreneurship professional with a software development focused in Computer Engineering from Middle East Technical University. My adventure started with my department and my first job was developing an Alexa app for education of children who have some disabilities. After that i have started working in a company named NETAS and there I have worked for big scale projects. And then, I have worked for company named Quanimo and completed 3 different projects by myself from scratch. One of the project was a secure video platform for medicine students. And the other two was also for education, one was generating a psychological reports for each student according to their exam results and the last one was an online education portal for high schools. After all these I have started work for a company which produce EMG sensors. I have builded a system architecture so the system was able to work with different sensor with simultaneously with the help of processing/threading and then I was able to show extracted features from raw data on the our user interface in real-time. Firstly I decided to use Python to get the data from the sensors and process them with the help of ML, then I had to find a DBMS which can work with the time-series data. I have worked with PostgreSQL and MongoDB before but I thought I don\u2019t need them so I have started to search. I have found a DBMS named RethinkDB which was makes building and scaling realtime apps dramatically easier. Then I have choose a template for React and decided to use NodeJS as a server. So I was getting the data from sensors simultaneously then processing it and saving to RethinkDB and with the help of change feed functionality of RethinkDB I was able to get recent data with NodeJS and then sending data to React with sockets. System was working perfectly without any delay issue and we started to try this system with English Premier League football clubs like Liverpool, Chelsea and Crystal Palace, they love it. This is my work adventure and beside these I am also enjoying to solve algorithm problems and develop something fun. For example, I developed an app named Kardo with my home-mate in one night and now it has like 120k download. In brief, I love creating systems that solve a real-life problem that\u2019s why I want to be part of ",n.aboutPart2=" and in later times working as ",n.aboutPart3=", I believe that I have learned how to learn and this is the key of success and this is Me, Myself and ",n.url1="https://www.toptal.com/full-stack",n.url2="https://www.toptal.com/software-architect",n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null),r.a.createElement(x.a,{style:{margin:0,padding:0,maxWidth:"100%"}},r.a.createElement(I.a,{component:"div",style:{backgroundColor:"rgb(247,241,227)",minHeight:"100vh",textAlign:"center"}},r.a.createElement(p.b,{to:"/"},r.a.createElement(I.a,{variant:"h1",component:"h2",gutterBottom:!0},"Me, Myself and ",r.a.createElement("a",{href:"/"},"/"))),r.a.createElement(I.a,{variant:"h3",gutterBottom:!0,style:{margin:0}},this.aboutPart1,r.a.createElement(A.a,{href:this.url1,target:"_blank"},"Full-Stack Developer Network"),this.aboutPart2,r.a.createElement(A.a,{href:this.url2,target:"_blank"},"Software-Architect"),this.aboutPart3,r.a.createElement(A.a,{href:"/"},"/")))))}}]),a}(n.Component),F=a(24),R=a(45),T=a(25),P={root:{fontFamily:'"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',fontWeight:300},header:{backgroundColor:"#03a9f4",color:"white",padding:"16px",fontSize:"1.5em"}},B=function(e){var t=e.style?Object(T.a)(Object(T.a)({},P.root),e.style):P.root;return r.a.createElement("div",{className:"title",style:t},r.a.createElement("div",{style:P.header},e.title),e.children)},_=["All","General","Machine Learning","JavaScript","Python","Java","C/C++","Go","React","Node","Django","Spring","Database","UI/UX","iOS","Interview","Security","Life"],H={sidebar:{width:180,height:"100%"},sidebarLink:{display:"block",padding:"5px 0px",color:"#757575",textDecoration:"none"},sidebarLinkSelected:{display:"block",padding:"5px 0px",color:"red",textDecoration:"none"},content:{padding:"16px",backgroundColor:"white"}},G=function(e){for(var t=e.style?Object(T.a)(Object(T.a)({},H.sidebar),e.style):H.sidebar,a=[],n=0;n<_.length;n++)a.push(r.a.createElement("a",{key:n,href:"#top",onClick:e.filterList},r.a.createElement("li",{id:_[n],className:"sidebarLink",style:_[n].toLowerCase()===e.filterValue.toLowerCase()?H.sidebarLinkSelected:H.sidebarLink},_[n])));return r.a.createElement(B,{id:"top",title:"Menu",style:t},r.a.createElement("div",{style:H.content},r.a.createElement("li",{className:"sidebarLink",style:H.sidebarLink},r.a.createElement("a",{href:"/"},"Home")),a))},W=a(90),U=a(96),z=a(91),V=a(92),Q=a(93),q=a(94),K=a(95),Y={contentHeaderMenuLink:{textDecoration:"none",color:"white",padding:8,backgroundColor:"transparent"},content:{padding:"16px"},card:{maxWidth:450},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:"red"},controlArea:{float:"right"},readButton:{backgroundColor:"#00d1b2",color:"white"}},X=window.matchMedia("(min-width: 800px)"),$=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).CardGenerator=function(){var e=[];return n.state.filteredList.forEach(function(t,a){e.push(r.a.createElement(W.a,{key:a,item:!0,xs:6,sm:6,md:3,lg:3},r.a.createElement(U.a,{style:Y.card},r.a.createElement(z.a,{title:t.title,subheader:t.dateAdded}),r.a.createElement(V.a,{style:Y.media,image:t.image,title:t.title}),r.a.createElement(Q.a,null,r.a.createElement(I.a,{variant:"h6"},t.description)),r.a.createElement(q.a,{style:Y.controlArea},r.a.createElement(K.a,{size:"large",style:Y.readButton,href:t.url,target:"_blank"},"Read!")))))}),e},n.filterList=function(e){var t=e.target.innerText.toLowerCase(),a=n.state.readingList,r="all"===t?a:a.filter(function(e){return e.categories.includes(t)});n.setState({filteredList:r,filterValue:t})},n.state={docked:X.matches,open:!1,readingList:[],filteredList:[],filterValue:"all"},n.mediaQueryChanged=n.mediaQueryChanged.bind(Object(F.a)(n)),n.toggleOpen=n.toggleOpen.bind(Object(F.a)(n)),n.onSetOpen=n.onSetOpen.bind(Object(F.a)(n)),n}return Object(o.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resume/readingList.json",dataType:"json",cache:!1,success:function(e){var t=e.readingList.reverse();this.setState({readingList:t,filteredList:t})}.bind(this),error:function(e,t,a){console.log(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData(),X.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){X.removeListener(this.mediaQueryChanged)}},{key:"onSetOpen",value:function(e){this.setState({open:e})}},{key:"mediaQueryChanged",value:function(){this.setState({docked:X.matches,open:!1})}},{key:"toggleOpen",value:function(e){this.setState({open:!this.state.open}),e&&e.preventDefault()}},{key:"render",value:function(){var e=r.a.createElement(G,{filterValue:this.state.filterValue,filterList:this.filterList.bind(this)}),t=r.a.createElement("span",null,!this.state.docked&&r.a.createElement("button",{onClick:this.toggleOpen,style:Y.contentHeaderMenuLink},"="),r.a.createElement("span",null," Reading List")),a={sidebar:e,docked:this.state.docked,open:this.state.open,onSetOpen:this.onSetOpen};return r.a.createElement(R.a,Object.assign({styles:{content:{backgroundColor:"#f1f1f1"}}},a),r.a.createElement(B,{title:t},r.a.createElement("div",{className:"content",style:Y.content},r.a.createElement(W.a,{container:!0,spacing:4},this.CardGenerator()))))}}]),a}(r.a.Component),Z=a(10),ee=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/resume/"},r.a.createElement(Z.d,null,r.a.createElement(Z.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(Z.b,{path:"/reading",render:function(e){return r.a.createElement($,e)}}),r.a.createElement(Z.b,{path:"/me",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(Z.a,{from:"*",to:"/"})))}}]),a}(n.Component),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(ee,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/resume",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/resume","/service-worker.js");te?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ae(e)})}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.79bfefdb.chunk.js.map