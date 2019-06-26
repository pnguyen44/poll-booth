(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5360:function(e,t,n){e.exports=n(5535)},5365:function(e,t,n){},5366:function(e,t,n){},5512:function(e,t,n){e.exports=n.p+"static/media/survey-icon.4083cb0d.png"},5535:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(27),o=n.n(s),i=(n(5365),n(16)),c=n(17),l=n(19),u=n(18),p=n(20),h=(n(5366),n(28)),m=n(38),v=n(15),f=n(22),d=n(133),y=n.n(d),b=n(134),E=n.n(b),g=n(49),O=n.n(g),j=n(88),S=n.n(j),C=n(132),k=n.n(C),w=n(64),x=n.n(w),N=n(90),M=n.n(N),T=n(2),F=n.n(T),q=n(37),R=n.n(q),D=n(25),A=n.n(D),B=n(14),G=n.n(B),P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(R.a,{className:e.root,elevation:1},r.a.createElement("h2",null,"Poll Booth"),r.a.createElement("h3",null,"Create, view, or take surveys"),r.a.createElement("br",null),r.a.createElement(A.a,{variant:"contained",color:"primary",component:h.b,to:"/surveys"},"Get Started"))))}}]),t}(r.a.Component);P.contextTypes={router:F.a.object};var _=Object(f.withStyles)(function(e){var t;return{root:(t={backgroundColor:"#d9e4f2",textAlign:"center"},Object(v.a)(t,e.breakpoints.down("lg"),{margin:"80px 250px",padding:50,fontSize:20}),Object(v.a)(t,e.breakpoints.down("md"),{margin:"30px 150px",padding:50}),Object(v.a)(t,e.breakpoints.down("xs"),{margin:"20px 50px",padding:30,fontSize:16}),t)}})(P),U=n(92),W=n(24),z=n.n(W),H=n(32),I=n(33),J=n(66),V=n(67),L=n.n(V),Q=n(71),Y=n.n(Q),X=n(69),$=n.n(X),K=n(70),Z=n.n(K),ee=n(68),te=n.n(ee),ne=n(50),ae=n.n(ne),re=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var n=t.target,a=n.id,r=n.value,s=e.state.survey.options.map(function(e,t){return t===Number(a)&&(e=r),e}),o=Object(H.a)({},e.state.survey,{options:s});e.setState({survey:o}),e.props.setFormOptions(s)},e.state={survey:{options:["","","",""]}},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.survey.options,n=t.map(function(n,a){return r.a.createElement(ae.a,{required:a<2,key:a,id:a.toString(),label:"Option ".concat(a+1),value:t[a],onChange:e.handleChange,margin:"normal",fullWidth:!0})});return r.a.createElement(r.a.Fragment,null,n)}}]),t}(r.a.Component),se=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.id,r=t.value,s=Object(H.a)({},n.state.survey,Object(v.a)({},a,r));n.setState({survey:s}),n.props.setSurvey(s)},n.state={survey:{title:"",question:""}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.survey;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{autoFocus:!0,required:!0,id:"title",label:"Title",value:e.title,onChange:this.handleChange,margin:"normal",fullWidth:!0}),r.a.createElement(ae.a,{required:!0,id:"question",label:"Question",value:e.question,onChange:this.handleChange,margin:"normal",fullWidth:!0}))}}]),t}(r.a.Component),oe="https://poll-booth-api.herokuapp.com",ie="http://localhost:3000",ce="localhost"===window.location.hostname?ie:oe,le=function(e){if(e.ok)return e;throw new Error("Recieved status in 400 or 500 range.")},ue=function(e,t){return fetch(ce+"/surveys",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({survey:{title:e,question:t}})})},pe=function(e){return fetch(ce+"/surveys/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}})},he={createSurveySuccess:"Survey added.",createSurveyfailure:"Error on create survey",deleteSurveyFailure:"Error on delete survey",getSurveyFailure:"Error. Please check connection"},me=function(e){if(e.ok)return e;throw new Error("Recieved status in 400 or 500 range.")},ve=function(e,t){return fetch(ce+"/options",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({option:{survey_id:e,name:t,vote_count:0}})})},fe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return fetch(ce+"/options/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({option:{name:t,vote_count:n}})})},de={createOptionSuccess:"Option added.",createOptionfailure:"Error on create option",updateOptionFailure:"Error on submiting survey",deleteOptionFailure:"Error on delete option"},ye=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setFormOptions=function(e){n.setState({formOptions:e})},n.setSurvey=function(e){n.setState({survey:e})},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.optionsIsUnique=function(){var e=n.state.formOptions,t=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(t=(s=o.next()).done);t=!0){var i=s.value,c=e.indexOf(i),l=e.lastIndexOf(i);if(-1!==c&&l===c)return!0}}catch(u){a=!0,r=u}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}return!1},n.state={open:!1,survey:{title:"",question:"",options:[]},formOptions:[],surveys:[]},n.handleSubmit=n.handleSubmit.bind(Object(J.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onCreateSurvey",value:function(){var e=Object(I.a)(z.a.mark(function e(){var t,n,a,r=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.survey,n=t.title,a=t.question,e.next=3,ue(n,a).then(le).then(function(e){return e.json()}).then(function(e){var t=Object(H.a)({},r.state.survey,{id:e.id});r.setState({survey:t})}).then(function(){r.onCreateOptions()}).then(function(){r.handleClose(),r.props.flash(he.createSurveySuccess,"flash-success")}).catch(function(){r.handleClose(),r.props.flash(he.createSurveyfailure,"flash-error")});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onCreateOptions",value:function(){var e=Object(I.a)(z.a.mark(function e(){var t,n,a,r,s,o,i,c,l,u,p,h=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.survey,n=t.id,a=Object.values(this.state.formOptions).filter(function(e){return""!==e}),this.setState({options:[]}),r=!0,s=!1,o=void 0,e.prev=7,i=a[Symbol.iterator]();case 9:if(r=(c=i.next()).done){e.next=16;break}return l=c.value,e.next=13,ve(n,l).then(me).then(function(e){return e.json()}).then(function(e){var t=e,n=[].concat(Object(U.a)(h.state.options),[t]);h.setState({options:n})}).catch(function(){h.props.flash(de.createOptionfailure,"flash-error")});case 13:r=!0,e.next=9;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),s=!0,o=e.t0;case 22:e.prev=22,e.prev=23,r||null==i.return||i.return();case 25:if(e.prev=25,!s){e.next=28;break}throw o;case 28:return e.finish(25);case 29:return e.finish(22);case 30:u=Object(H.a)({},this.state.survey,{options:this.state.options}),p=[].concat(Object(U.a)(this.state.surveys),[u]),this.props.setSurveys({surveys:p});case 33:case"end":return e.stop()}},e,this,[[7,18,22,30],[23,,25,29]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(I.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.optionsIsUnique()){e.next=7;break}return e.next=5,this.onCreateSurvey();case 5:e.next=9;break;case 7:this.handleClose(),this.props.flash("Options must be unique","flash-error");case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.surveys!==e.surveys&&this.setState({surveys:this.props.surveys})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{color:"inherit",className:e.button,onClick:this.handleClickOpen},"Create Survey"),r.a.createElement(L.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",className:e.dialog},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(te.a,{id:"form-dialog-title"},"Create New Survey"),r.a.createElement($.a,null,r.a.createElement(Z.a,null),r.a.createElement(se,{setSurvey:this.setSurvey}),r.a.createElement(re,{setFormOptions:this.setFormOptions})),r.a.createElement(Y.a,null,r.a.createElement(A.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement(A.a,{onClick:this.handleClose,color:"primary"},"Cancel")))))}}]),t}(r.a.Component),be=Object(f.withStyles)(function(e){return{button:{paddingLeft:"16px",marginRight:15},input:{display:"none"},dialog:{marginTop:70}}})(ye),Ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mobileAnchorEl:null},n.handleMobileMenuOpen=function(e){n.setState({mobileAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileAnchorEl:null})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.mobileAnchorEl,t=this.props.classes,a=r.a.createElement(k.a,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleMobileMenuClose},r.a.createElement(h.b,{to:"/"},r.a.createElement(M.a,{onClick:this.handleMobileMenuClose},"HOME")),r.a.createElement(h.b,{to:"/surveys"},r.a.createElement(M.a,{onClick:this.handleMobileMenuClose},"SURVEYS")),r.a.createElement(be,{flash:this.props.flash,surveys:this.props.surveys,setSurveys:this.props.setSurveys}));return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement("img",{src:n(5512),alt:"app-logo",style:{width:"50px",marginLeft:"1vw",paddingRight:"14px"}}),r.a.createElement(O.a,{variant:"h6",color:"inherit",component:h.b,to:"/",className:t.grow},"Poll Booth"),r.a.createElement("div",{className:t.desktopMenu},r.a.createElement(A.a,null,r.a.createElement(h.b,{className:t.link,to:"/surveys"},"SURVEYS")),r.a.createElement(be,{flash:this.props.flash,surveys:this.props.surveys,setSurveys:this.props.setSurveys})),r.a.createElement("div",{className:t.mobileMenu},r.a.createElement(S.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(x.a,null)),a))),r.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(_,e)}}))}}]),t}(r.a.Component),ge=Object(f.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},link:{color:"white",textDecoration:"none"},mobileMenu:Object(v.a)({},e.breakpoints.between("md","lg"),{display:"none"}),desktopMenu:Object(v.a)({flexGrow:12},e.breakpoints.between("xs","sm"),{display:"none"})}})(Ee),Oe=n(91),je=n.n(Oe),Se=n(138),Ce=n.n(Se),ke=n(140),we=n.n(ke),xe=n(39),Ne=n.n(xe),Me=n(139),Te=n.n(Me),Fe=n(72),qe=n.n(Fe),Re=n(137),De=n(135),Ae=n.n(De),Be=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).chartRef=r.a.createRef(),e.state={survey:{}},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d"),t=this.props.survey.options,n=t.map(function(e){return e.name}),a=t.map(function(e){return e.vote_count});new Ae.a(e,{type:"pie",data:{labels:n,datasets:[{data:a,backgroundColor:["red","green","blue","yellow"]}]},options:{}})}},{key:"render",value:function(){var e=this.props,t=e.survey,n=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{item:!0,className:n.root},r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(G.a,{item:!0,className:n.surveyHeader},r.a.createElement("h3",null,t.title)),r.a.createElement(G.a,{container:!0,direction:"column"},r.a.createElement(G.a,{item:!0},r.a.createElement("h3",{style:{padding:10,textAlign:"center"}},t.question))),r.a.createElement(G.a,{item:!0},r.a.createElement("canvas",{id:"myChart",ref:this.chartRef})))))}}]),t}(r.a.Component),Ge=Object(f.withStyles)(function(e){var t;return{root:(t={paddingBottom:15,backgroundColor:"#2196f30f"},Object(v.a)(t,e.breakpoints.down("sm"),{fontSize:12}),Object(v.a)(t,"textAlign","center"),t),surveyHeader:{backgroundColor:"black",color:"white",textAlign:"center",padding:1}}})(Be),Pe=n(65),_e=n.n(Pe),Ue=n(51),We=n.n(Ue),ze=n(136),He=n.n(ze),Ie=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e.transition=r.a.forwardRef(function(e,t){return window.innerWidth<300?r.a.createElement(He.a,Object.assign({direction:"up",ref:t},e)):null}),e.state={open:!1},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=window.innerWidth<400;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{item:!0,style:{textAlign:"center"}},r.a.createElement(We.a,{title:"Result"},r.a.createElement(_e.a,{onClick:this.handleClickOpen}))),r.a.createElement(L.a,{fullScreen:e,transitioncomponent:e?this.transition:void 0,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-Result"},r.a.createElement(te.a,{id:"form-dialog-Result"},"Survey Result"),r.a.createElement($.a,null,r.a.createElement(Z.a,null),r.a.createElement(G.a,{item:!0,xs:12,align:"center"},r.a.createElement(Ge,{survey:this.props.survey}))),r.a.createElement(Y.a,null,r.a.createElement(A.a,{onClick:this.handleClose,color:"primary"},"Close"))))}}]),t}(r.a.Component),Je=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onDeleteSurvey=function(){var e=n.props,t=e.surveys,a=e.survey.id;pe(a).then(le).then(function(){var e=t.filter(function(e){return e.id!==a});n.props.setSurveys({surveys:e})}).catch(function(){return n.props.flash(he.deleteSurveyFailure,"flash-error")})},n.state={survey:{},surveys:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"hasResult",value:function(e){return e.options.filter(function(e){return e.vote_count>0}).length>0}},{key:"componentDidUpdate",value:function(e){this.props.surveys!==e.surveys&&this.setState({surveys:this.props.surveys})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.survey,a=this.props.survey,s=a.title,o=a.question,i=a.id;return r.a.createElement(qe.a,{className:t.row,hover:!0},r.a.createElement(Ne.a,{style:{textDecoration:"underline"},align:"left",padding:"default",className:t.titleCol},r.a.createElement(We.a,{title:"View"},r.a.createElement(h.b,{to:"/surveys/".concat(i)},s))),r.a.createElement(Ne.a,{align:"left",padding:"none",className:t.questionCol},o),r.a.createElement(Ne.a,{align:"left",padding:"none",className:t.btnCol},this.hasResult(n)?r.a.createElement(Ie,{survey:this.props.survey}):null),r.a.createElement(Ne.a,{align:"left",padding:"none",className:t.btnCol},r.a.createElement(We.a,{title:"Delete"},r.a.createElement("button",{onClick:this.onDeleteSurvey,className:t.button},r.a.createElement(Re.a,null)))))}}]),t}(r.a.Component),Ve=Object(f.withStyles)(function(e){return{row:{"&:nth-of-type(odd)":{backgroundColor:"#2196f30f"},width:"auto"},btnCol:{width:"6%",marginRight:5},titleCol:{},questionCol:{},button:{outline:"none",border:"none",background:"rgba(0, 0, 0, 0)",justifyContent:"flex-end"}}})(Je),Le=Object(f.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:30}}})(Ne.a),Qe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={surveys:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onGetSurveys",value:function(){var e=Object(I.a)(z.a.mark(function e(){var t=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ce+"/surveys",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({surveys:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(I.a)(z.a.mark(function e(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onGetSurveys();case 2:this.props.setSurveys({surveys:this.state.surveys});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.surveys!==e.surveys&&this.setState({surveys:this.props.surveys})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.surveys,a=e.flash,s=e.setSurveys,o=n.map(function(e){return r.a.createElement(Ve,{key:e.id,survey:e,surveys:n,flash:a,setSurveys:s})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.header},r.a.createElement("h3",null,"Survey Dashboard")),r.a.createElement(R.a,{className:t.root},r.a.createElement(Ce.a,{className:t.table},r.a.createElement(Te.a,null,r.a.createElement(qe.a,null,r.a.createElement(Le,{align:"left",padding:"default"},"Survey"),r.a.createElement(Le,{align:"left",padding:"none"},"Question"),r.a.createElement(Le,{align:"left",padding:"none"}),r.a.createElement(Le,{align:"left",padding:"none"}))),r.a.createElement(we.a,null,o))))}}]),t}(r.a.Component),Ye=Object(f.withStyles)(function(e){return{header:{width:"100%",marginTop:25,textAlign:"center"},root:Object(v.a)({overflowX:"auto",margin:"0px 10rem"},e.breakpoints.down("sm"),{margin:"0px 1rem",fontSize:20}),table:{},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(Qe),Xe=n(142),$e=n.n(Xe),Ke=n(141),Ze=n.n(Ke),et=n(143),tt=n.n(et),nt=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleCancel=function(){n.props.history.push("/surveys")},n.handleChange=function(e){n.setState({optionChoosen:e.target.value})},n.handleSubmitClick=function(){var e=n.state,t=e.optionChoosen,a=e.survey;if(""!==t){var r,s=!0,o=!1,i=void 0;try{for(var c,l=a.options[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var u=c.value;u.name===t&&(r=u)}}catch(v){o=!0,i=v}finally{try{s||null==l.return||l.return()}finally{if(o)throw i}}var p=r.vote_count+1;r=Object(H.a)({},r,{vote_count:p});var h=a.options.map(function(e){return e.id===r.id?r:e}),m=Object(H.a)({},a,{options:h});fe(r.id,r.name,r.vote_count).then(me).then(function(){n.props.setSurvey({survey:m}),n.props.history.push("/surveys/".concat(n.id,"/result"))}).catch(function(){return n.props.flash(de.updateOptionFailure,"flash-error")})}else n.props.flash("Please select an option.","flash-error")},n.state={survey:{options:[]},optionChoosen:"",option:{}},n.id=n.props.match.params.id,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onGetSurvey",value:function(){var e=Object(I.a)(z.a.mark(function e(){var t=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(n=this.id,fetch(ce+"/surveys/"+n,{headers:{"Content-Type":"application/json"}})).then(le).then(function(e){return e.json()}).then(function(e){t.setState({survey:e})}).catch(function(){return t.props.flash(he.getSurveyFailure,"flash-error")});case 2:case"end":return e.stop()}var n},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(I.a)(z.a.mark(function e(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onGetSurvey();case 2:this.props.setSurvey({survey:this.state.survey});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state.survey,n=t.options.map(function(e){return r.a.createElement(Ze.a,{key:e.id,value:e.name,control:r.a.createElement($e.a,{color:"primary"}),label:e.name})});return r.a.createElement(G.a,{className:e.root},r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(G.a,{container:!0,spacing:16,direction:"column",className:e.surveyContainer},r.a.createElement(G.a,{item:!0,className:e.surveyHeader},r.a.createElement("h4",null,t.title)),r.a.createElement(G.a,{item:!0,className:e.surveyBody},r.a.createElement("h4",{className:e.question},t.question),r.a.createElement(tt.a,{value:this.state.value,onChange:this.handleChange},n)),r.a.createElement(G.a,{container:!0,justify:"center"},r.a.createElement(G.a,{item:!0,className:e.bottomContainer},r.a.createElement(A.a,{onClick:this.handleSubmitClick,variant:"contained",color:"primary",className:e.button},"Submit"),r.a.createElement(A.a,{variant:"contained",onClick:this.handleCancel,color:"primary",className:e.button},"Cancel"))))))}}]),t}(r.a.Component),at=Object(f.withStyles)(function(e){var t;return{root:(t={paddingBottom:20},Object(v.a)(t,e.breakpoints.down("lg"),{margin:"50px 20rem"}),Object(v.a)(t,e.breakpoints.down("sm"),{margin:"50px 10rem",fontSize:15}),Object(v.a)(t,e.breakpoints.down("xs"),{margin:"50px 1rem"}),Object(v.a)(t,"backgroundColor","#2196f30f"),t),button:Object(v.a)({margin:e.spacing.unit},e.breakpoints.down("sm"),{}),question:{marginTop:20},surveyHeader:{margin:"0px 9px",backgroundColor:"black",textAlign:"center",color:"white"},surveyBody:{margin:"0px 22px"}}})(nt),rt=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleCancel=function(){n.props.history.push("/surveys")},n.state={},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.survey;return r.a.createElement("div",null,r.a.createElement(G.a,{className:t.root},r.a.createElement(G.a,{item:!0,classes:t.result},r.a.createElement(Ge,{survey:n}))),r.a.createElement(G.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(G.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"contained",onClick:this.handleCancel,color:"primary",className:t.button},"Back To Dashboard"))))}}]),t}(r.a.Component),st=Object(f.withStyles)(function(e){var t;return{root:(t={},Object(v.a)(t,e.breakpoints.down("lg"),{margin:"50px 20rem"}),Object(v.a)(t,e.breakpoints.down("sm"),{margin:"50px 10rem"}),Object(v.a)(t,e.breakpoints.down("xs"),{margin:"50px 1rem"}),Object(v.a)(t,"backgroundColor","#2196f30f"),t)}})(rt),ot=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setSurveys=function(e){n.setState(e)},n.setSurvey=function(e){n.setState(e)},n.flash=function(e,t){n.setState({flashMessage:e,flashType:t}),clearTimeout(n.messageTimeout),n.messageTimeout=setTimeout(function(){return n.setState({flashMessage:null})},2e3)},n.state={surveys:[],survey:{},flashMessage:"",flashType:null},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object(f.createMuiTheme)({palette:{primary:je.a,secondary:je.a},typography:{useNextVariants:!0}}),n=this.state,a=n.survey,s=n.surveys,o=n.flashMessage,i=n.flashType;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.MuiThemeProvider,{theme:t},r.a.createElement(h.a,{basename:"/"},r.a.createElement(ge,{flash:this.flash,surveys:s,setSurveys:this.setSurveys}),o&&r.a.createElement(G.a,{container:!0,justify:"center"},r.a.createElement(G.a,{item:!0,xs:12,className:i},o)),r.a.createElement(m.a,{exact:!0,path:"/surveys",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,{flash:e.flash,surveys:s,setSurveys:e.setSurveys}))}}),r.a.createElement(m.a,{exact:!0,path:"/surveys/:id",render:function(t){return r.a.createElement(at,Object.assign({},t,{flash:e.flash,surveys:s,survey:a,setSurvey:e.setSurvey}))}}),r.a.createElement(m.a,{exact:!0,path:"/surveys/:id/result",render:function(e){return r.a.createElement(st,Object.assign({},e,{survey:a}))}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5360,1,2]]]);
//# sourceMappingURL=main.0245089b.chunk.js.map