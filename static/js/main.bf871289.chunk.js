(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(29)},21:function(e,a,t){},24:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(11),r=t.n(l),c=(t(21),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=t(8),p=t(12),h=t.n(p),E=(t(24),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,l=this.props.data.social.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},s.a.createElement("i",{className:e.className})))});return s.a.createElement("header",{id:"home"},s.a.createElement("nav",{id:"nav-wrap"},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:"current"},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"TESTIMONIALS")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("h1",{style:{fontFamily:"sans-serif"},className:"responsive-headline"},"I'm ",e,"."),s.a.createElement("h3",null,"I'm ",n," based ",s.a.createElement("span",null,a),". ",t,"."),s.a.createElement("hr",null),s.a.createElement("ul",{className:"social"},l))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#about"},s.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},s.a.createElement("i",{className:e.className})))});return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},e),s.a.createElement("ul",{className:"copyright"},s.a.createElement("li",null,"\xa9 Copyright 2019 Furkan Do\u011fan"))),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="resume/images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,l=this.props.data.address.city,r=this.props.data.address.state,c=this.props.data.address.zip,i=this.props.data.phone,o=this.props.data.email,m=this.props.data.resumedownload;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"profile-pic",src:a,alt:"Furkan Dogan Profile Pic"})),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,t),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact Details"),s.a.createElement("p",{className:"address"},s.a.createElement("span",null,e),s.a.createElement("br",null),s.a.createElement("span",null,n,s.a.createElement("br",null),l," / ",r,", ",c),s.a.createElement("br",null),s.a.createElement("span",null,i),s.a.createElement("br",null),s.a.createElement("span",null,o))),s.a.createElement("div",{className:"columns download"},s.a.createElement("p",null,s.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"button"},s.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map(function(e){return s.a.createElement("div",{key:e.school},s.a.createElement("h3",null,e.school),s.a.createElement("p",{className:"info"},e.degree," ",s.a.createElement("span",null,"\u2022"),s.a.createElement("em",{className:"date"},e.graduated)),s.a.createElement("p",null,e.description))}),a=this.props.data.work.map(function(e){return s.a.createElement("div",{key:e.company},s.a.createElement("h3",null,e.company),s.a.createElement("p",{className:"info"},e.title,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.years)),s.a.createElement("p",null," ",e.description," "))}),t=this.props.data.skills.map(function(e){var a="bar-expand "+e.name.toLowerCase();return s.a.createElement("li",{key:e.name},s.a.createElement("span",{style:{width:e.level},className:a}),s.a.createElement("em",null,e.name))});return s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"EDUCATION"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},e)))),s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"WORK"))),s.a.createElement("div",{className:"nine columns main-col"},a)),s.a.createElement("div",{className:"row skill"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"SKILLS"))),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("div",{className:"bars"},s.a.createElement("ul",{className:"skills"},t)))))}}]),a}(n.Component),N=t(13),b=t.n(N),y="user_c9G9Z6WCSWXQuyvEuQoym",w="template_tA3BGc00",O="gmail",j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleNameChange=function(e){t.setState({name:e.target.value})},t.handleEmailChange=function(e){t.setState({email:e.target.value})},t.handleSubjectChange=function(e){t.setState({subject:e.target.value})},t.handleMessageChange=function(e){t.setState({message:e.target.value})},t.handleSubmit=function(e){e.preventDefault();t.state.visible;t.setState({visible:!0}),t.sendFeedback({message_html:t.state.message,subject:t.state.subject,from_name:t.state.name,reply_to:t.state.email,to_name:"Furkan Do\u011fan"})},t.sendFeedback=function(e){b.a.send(O,w,e,y).then(function(e){var a=JSON.parse(JSON.stringify(t.state.errorMessage)),n=JSON.parse(JSON.stringify(t.state.successMessage)),s=(JSON.parse(JSON.stringify(t.state.visible)),JSON.parse(JSON.stringify(t.state.contact)));200===e.status?(a.display="none",n.display="unset",s.display="none",t.setState({visible:!1,errorMessage:a,successMessage:n,contact:s})):(a.display="unset",n.display="none",t.setState({visible:!1,errorMessage:a,successMessage:n}))},function(e){var a=JSON.parse(JSON.stringify(t.state.errorMessage)),n=JSON.parse(JSON.stringify(t.state.successMessage)),s=JSON.parse(JSON.stringify(t.state.visible));a.display="unset",n.display="none",t.setState({visible:s,errorMessage:a,successMessage:n}),console.log("FAILED...",e)})},t.state={name:"",email:"",subject:"",message:"",visible:!1,successMessage:{display:"none"},errorMessage:{display:"none"},contact:{display:"unset"}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,r=this.props.data.phone,c=this.props.data.contactmessage;return s.a.createElement("section",{id:"contact"},s.a.createElement("div",{className:"row section-head"},s.a.createElement("div",{className:"two columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Get In Touch."))),s.a.createElement("div",{className:"ten columns"},s.a.createElement("p",{className:"lead"},c))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"eight columns"},s.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},s.a.createElement("fieldset",null,s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactName"},"Name ",s.a.createElement("span",{className:"required"},"*")),s.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleNameChange})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactEmail"},"Email ",s.a.createElement("span",{className:"required"},"*")),s.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleEmailChange})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),s.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleSubjectChange})),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"contactMessage"},"Message ",s.a.createElement("span",{className:"required"},"*")),s.a.createElement("textarea",{cols:"50",rows:"5",id:"contactMessage",name:"contactMessage",onChange:this.handleMessageChange})),s.a.createElement("div",null,s.a.createElement("button",{className:"submit",onClick:this.handleSubmit},"SUBMIT"),s.a.createElement("span",{id:this.state.visible?"image-loader-in":"image-loader"},s.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),s.a.createElement("div",{id:"message-warning",style:this.state.errorMessage},"> There maybe some errors"),s.a.createElement("div",{id:"message-success",style:this.state.successMessage},s.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",s.a.createElement("br",null))),s.a.createElement("aside",{className:"four columns footer-widgets"},s.a.createElement("div",{className:"widget widget_contact"},s.a.createElement("h4",null,"Address and Phone"),s.a.createElement("p",{className:"address"},e,s.a.createElement("br",null),a," ",s.a.createElement("br",null),t,", ",n," ",l,s.a.createElement("br",null),s.a.createElement("span",null,r))))))}}]),a}(n.Component),k=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return s.a.createElement("li",{key:e.user},s.a.createElement("blockquote",null,s.a.createElement("p",null,e.text),s.a.createElement("cite",null,e.user)))});return s.a.createElement("section",{id:"testimonials"},s.a.createElement("div",{className:"text-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"two columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Client Testimonials"))),s.a.createElement("div",{className:"ten columns flex-container"},s.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),S=t(40),C=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map(function(e){var a="images/portfolio/"+e.image;return s.a.createElement(S.a,{key:e.title,item:!0,xs:4},s.a.createElement("div",{key:e.title,className:"columns"},s.a.createElement("div",{className:"portfolio-item"},s.a.createElement("div",{className:"item-wrap "},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.title},s.a.createElement("img",{alt:e.title,src:a}),s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"portfolio-item-meta"},s.a.createElement("h5",null,e.title),s.a.createElement("p",null,e.category))),s.a.createElement("div",{className:"link-icon"},s.a.createElement("i",{className:"fa fa-link"})))))))});return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",null,"Check Out Some of My Works."),s.a.createElement(S.a,{container:!0,spacing:1},s.a.createElement(S.a,{container:!0},e))))}}]),a}(n.Component),M=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resume/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E,{data:this.state.resumeData.main}),s.a.createElement(v,{data:this.state.resumeData.main}),s.a.createElement(g,{data:this.state.resumeData.resume}),s.a.createElement(C,{data:this.state.resumeData.portfolio}),s.a.createElement(k,{data:this.state.resumeData.testimonials}),s.a.createElement(j,{data:this.state.resumeData.main}),s.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(s.a.createElement(M,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/resume",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/resume","/service-worker.js");D?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):J(e)})}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.bf871289.chunk.js.map