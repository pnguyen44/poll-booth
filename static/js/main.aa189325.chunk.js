(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5355:function(e,t,n){e.exports=n(5528)},5360:function(e,t,n){},5361:function(e,t,n){},5476:function(e,t,n){e.exports=n.p+"static/media/survey-icon.4083cb0d.png"},5528:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),s=n.n(o),i=(n(5360),n(14)),c=n(15),l=n(17),u=n(16),p=n(18),h=(n(5361),n(29)),m=n(39),v=n(21),d=n(20),y=n(131),f=n.n(y),b=n(132),E=n.n(b),O=n(25),g=n.n(O),j=n(63),S=n.n(j),C=n(130),k=n.n(C),w=n(61),x=n.n(w),N=n(87),T=n.n(N),M=n(60),F=n.n(M),q=n(2),D=n.n(q),R=n(30),A=n.n(R),B=n(26),P=n.n(B),G=n(22),_=n.n(G),J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(A.a,{className:e.root,elevation:1},r.a.createElement(g.a,{variant:"h2",component:"h3"},"Poll Booth"),r.a.createElement("br",null),r.a.createElement(g.a,{component:"h2",variant:"h4",gutterBottom:!0},"The survey app."),r.a.createElement("br",null),r.a.createElement(P.a,{variant:"contained",color:"primary",component:h.b,to:"/surveys"},"Get Started"))))}}]),t}(r.a.Component);J.contextTypes={router:D.a.object};var W=Object(d.withStyles)(function(e){var t;return{root:(t={backgroundColor:"#d9e4f2",textAlign:"center"},Object(v.a)(t,e.breakpoints.down("lg"),{margin:"80px 250px",padding:50}),Object(v.a)(t,e.breakpoints.down("md"),{margin:"30px 150px",padding:50}),Object(v.a)(t,e.breakpoints.down("xs"),{margin:"20px 50px",padding:30}),t)}})(J),Q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mobileAnchorEl:null},n.handleMobileMenuOpen=function(e){n.setState({mobileAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileAnchorEl:null})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.mobileAnchorEl,t=this.props.classes,a=r.a.createElement(k.a,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleMobileMenuClose},r.a.createElement(h.b,{to:"/"},r.a.createElement(T.a,{onClick:this.handleMobileMenuClose},"Home")),r.a.createElement(h.b,{to:"/surveys"},r.a.createElement(T.a,{onClick:this.handleMobileMenuClose},"Surveys")));return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement("img",{src:n(5476),alt:"app-logo",style:{width:"50px",marginLeft:"1vw",paddingRight:"14px"}}),r.a.createElement(g.a,{variant:"h6",color:"inherit",className:t.grow},"Poll Booth"),r.a.createElement("div",{className:t.desktopMenu},r.a.createElement(S.a,{color:"inherit",className:t.link,component:h.b,to:"/"},r.a.createElement(F.a,null)),r.a.createElement(h.b,{className:t.link,to:"/surveys"},"Surveys")),r.a.createElement("div",{className:t.mobileMenu},r.a.createElement(S.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(x.a,null)),a))),r.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(W,e)}}))}}]),t}(r.a.Component),U=Object(d.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},link:{marginRight:15,color:"white",textDecoration:"none"},mobileMenu:Object(v.a)({},e.breakpoints.between("md","lg"),{display:"none"}),desktopMenu:Object(v.a)({},e.breakpoints.between("xs","sm"),{display:"none"})}})(Q),H=n(88),I=n.n(H),L=n(24),z=n.n(L),V=n(35),X=n(133),$=n.n(X),K=n(135),Y=n.n(K),Z=n(45),ee=n.n(Z),te=n(134),ne=n.n(te),ae=n(70),re=n.n(ae),oe=n(64),se="https://poll-booth-api.herokuapp.com",ie="http://localhost:3000",ce="localhost"===window.location.hostname?ie:se,le=function(e){if(e.ok)return e;throw new Error("Recieved status in 400 or 500 range.")},ue=function(e,t){return fetch(ce+"/surveys",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({survey:{title:e,question:t}})})},pe=function(e){return fetch(ce+"/surveys/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}})},he={createSurveySuccess:"Survey added.",createSurveyfailure:"Error on create survey",deleteSurveyFailure:"Error on delete survey",getSurveyFailure:"Error. Please check connection"},me=n(65),ve=n.n(me),de=n(69),ye=n.n(de),fe=n(67),be=n.n(fe),Ee=n(68),Oe=n.n(Ee),ge=n(66),je=n.n(ge),Se=n(34),Ce=n(49),ke=n.n(Ce),we=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var n=t.target,a=n.id,r=n.value,o=e.state.survey.options.map(function(e,t){return t===Number(a)&&(e=r),e}),s=Object(Se.a)({},e.state.survey,{options:o});e.setState({survey:s}),e.props.setFormOptions(e.state.survey.options)},e.state={survey:{options:["","","",""]}},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.survey.options,n=t.map(function(n,a){return r.a.createElement(ke.a,{required:a<2,key:a,id:a.toString(),label:"Option ".concat(a+1),value:t[a],onChange:e.handleChange,margin:"normal",fullWidth:!0})});return r.a.createElement(r.a.Fragment,null,n)}}]),t}(r.a.Component),xe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.id,r=t.value,o=Object(Se.a)({},n.state.survey,Object(v.a)({},a,r));n.setState({survey:o}),n.props.setSurvey(n.state.survey)},n.state={survey:{title:"",question:""}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.survey;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{autoFocus:!0,required:!0,id:"title",label:"Title",value:e.title,onChange:this.handleChange,margin:"normal",fullWidth:!0}),r.a.createElement(ke.a,{required:!0,id:"question",label:"Question",value:e.question,onChange:this.handleChange,margin:"normal",fullWidth:!0}))}}]),t}(r.a.Component),Ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleClickOpen=function(t){return function(){e.setState({open:!0,scroll:t})}},e.handleClose=function(){e.setState({open:!1})},e.state={open:!1,scroll:"paper"},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.survey;return r.a.createElement("div",null,r.a.createElement("button",{className:t.button,onClick:this.handleClickOpen("paper")},r.a.createElement(oe.b,null)),r.a.createElement(ve.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"edit-survey-dialog"},r.a.createElement(je.a,{id:"edit-survey-dialog"},"Edit Survey"),r.a.createElement(be.a,null,r.a.createElement(Oe.a,null),r.a.createElement(xe,{survey:n,setSurvey:this.setSurvey}),r.a.createElement(we,{survey:n,setFormOptions:this.setFormOptions})),r.a.createElement(ye.a,null,r.a.createElement(P.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement(P.a,{onClick:this.handleClose,color:"primary"},"Cancel"))))}}]),t}(r.a.Component),Te=(Object(d.withStyles)(function(e){return{button:{outline:"none",border:"none",background:"rgba(0, 0, 0, 0)",justifyContent:"flex-end"}}})(Ne),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onDeleteSurvey=function(){var e=n.props,t=e.surveys,a=e.survey.id;pe(a).then(le).then(function(){var e=t.filter(function(e){return e.id!==a});n.props.setSurveys({surveys:e})}).catch(function(){return n.props.flash(he.deleteSurveyFailure,"flash-error")})},n.onEditSurvey=function(){},n.state={survey:{},surveys:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.surveys!==e.surveys&&this.setState({surveys:this.props.surveys})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=(e.flash,e.survey,this.props.survey),a=n.title,o=n.question,s=n.id;return r.a.createElement(re.a,{className:t.row,hover:!0},r.a.createElement(ee.a,{align:"left",padding:"default",className:t.titleCol},r.a.createElement(h.b,{to:"/surveys/".concat(s)},a)),r.a.createElement(ee.a,{align:"left",padding:"default",className:t.questionCol},o),r.a.createElement(ee.a,{align:"left",padding:"none",className:t.btnCol},r.a.createElement("button",{onClick:this.onDeleteSurvey,className:t.button},r.a.createElement(oe.a,null))))}}]),t}(r.a.Component)),Me=Object(d.withStyles)(function(e){return{row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default},width:"auto"},btnCol:{width:"6%",marginRight:5},titleCol:{width:"10%"},questionCol:{},button:{outline:"none",border:"none",background:"rgba(0, 0, 0, 0)",justifyContent:"flex-end"}}})(Te),Fe=Object(d.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:30}}})(ee.a),qe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={surveys:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onGetSurveys",value:function(){var e=Object(V.a)(z.a.mark(function e(){var t=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ce+"/surveys",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({surveys:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(V.a)(z.a.mark(function e(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onGetSurveys();case 2:this.props.setSurveys({surveys:this.state.surveys});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.surveys!==e.surveys&&this.setState({surveys:this.props.surveys})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.surveys,a=e.flash,o=e.setSurveys,s=n.map(function(e){return r.a.createElement(Me,{key:e.id,survey:e,surveys:n,flash:a,setSurveys:o})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.header},r.a.createElement(g.a,{variant:"h4",gutterBottom:!0},"Survey Dashboard")),r.a.createElement(A.a,{className:t.root},r.a.createElement($.a,{className:t.table},r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(Fe,{align:"left"},"Survey"),r.a.createElement(Fe,{align:"left"},"Question"),r.a.createElement(Fe,{align:"left",padding:"none"},"Delete"))),r.a.createElement(Y.a,null,s))))}}]),t}(r.a.Component),De=Object(d.withStyles)(function(e){return{header:{width:"100%",marginTop:25,textAlign:"center"},root:Object(v.a)({overflowX:"auto",margin:"0px 10rem"},e.breakpoints.down("sm"),{margin:"0px 1rem"}),table:{},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(qe),Re=n(89),Ae=n(62),Be=function(e){if(e.ok)return e;throw new Error("Recieved status in 400 or 500 range.")},Pe=function(e,t){return fetch(ce+"/options",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({option:{survey_id:e,name:t,vote_count:0}})})},Ge=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return fetch(ce+"/options/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({option:{name:t,vote_count:n}})})},_e={createOptionSuccess:"Option added.",createOptionfailure:"Error on create option",updateOptionFailure:"Error on submiting survey",deleteOptionFailure:"Error on delete option"},Je=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setFormOptions=function(e){n.setState({formOptions:e})},n.setSurvey=function(e){n.setState({survey:e})},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1,survey:{title:"",question:"",options:[]},formOptions:[],surveys:[]},n.handleSubmit=n.handleSubmit.bind(Object(Ae.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onCreateSurvey",value:function(){var e=Object(V.a)(z.a.mark(function e(){var t,n,a,r=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.survey,n=t.title,a=t.question,e.next=3,ue(n,a).then(le).then(function(e){return e.json()}).then(function(e){var t=Object(Se.a)({},r.state.survey,{id:e.id});r.setState({survey:t})}).then(function(){r.onCreateOptions()}).then(function(){r.handleClose(),r.props.flash(he.createSurveySuccess,"flash-success")}).catch(function(){r.handleClose(),r.props.flash(he.createSurveyfailure,"flash-error")});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onCreateOptions",value:function(){var e=Object(V.a)(z.a.mark(function e(){var t,n,a,r,o,s,i,c,l,u,p,h=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.survey,n=t.id,a=Object.values(this.state.formOptions).filter(function(e){return""!==e}),this.setState({options:[]}),r=!0,o=!1,s=void 0,e.prev=7,i=a[Symbol.iterator]();case 9:if(r=(c=i.next()).done){e.next=16;break}return l=c.value,e.next=13,Pe(n,l).then(Be).then(function(e){return e.json()}).then(function(e){var t=e,n=[].concat(Object(Re.a)(h.state.options),[t]);h.setState({options:n})}).catch(function(){h.props.flash(_e.createOptionfailure,"flash-error")});case 13:r=!0,e.next=9;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),o=!0,s=e.t0;case 22:e.prev=22,e.prev=23,r||null==i.return||i.return();case 25:if(e.prev=25,!o){e.next=28;break}throw s;case 28:return e.finish(25);case 29:return e.finish(22);case 30:u=Object(Se.a)({},this.state.survey,{options:this.state.options}),p=[].concat(Object(Re.a)(this.state.surveys),[u]),this.props.setSurveys({surveys:p});case 33:case"end":return e.stop()}},e,this,[[7,18,22,30],[23,,25,29]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(V.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.onCreateSurvey();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.surveys!==e.surveys&&this.setState({surveys:this.props.surveys})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(P.a,{className:e.button,variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Create Survey"),r.a.createElement(ve.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",className:e.dialog},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(je.a,{id:"form-dialog-title"},"Create New Survey"),r.a.createElement(be.a,null,r.a.createElement(Oe.a,null),r.a.createElement(xe,{setSurvey:this.setSurvey}),r.a.createElement(we,{setFormOptions:this.setFormOptions})),r.a.createElement(ye.a,null,r.a.createElement(P.a,{type:"submit",color:"primary"},"Submit"),r.a.createElement(P.a,{onClick:this.handleClose,color:"primary"},"Cancel")))))}}]),t}(r.a.Component),We=Object(d.withStyles)(function(e){return{button:{margin:"10px 10px 0px"},input:{display:"none"},dialog:{marginTop:70}}})(Je),Qe=n(137),Ue=n.n(Qe),He=n(136),Ie=n.n(He),Le=n(138),ze=n.n(Le),Ve=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleCancel=function(){n.props.history.push("/surveys")},n.handleChange=function(e){n.setState({optionChoosen:e.target.value})},n.handleSubmitClick=function(){var e=n.state,t=e.optionChoosen,a=e.survey;if(""!==t){var r,o=!0,s=!1,i=void 0;try{for(var c,l=a.options[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value;u.name===t&&(r=u)}}catch(v){s=!0,i=v}finally{try{o||null==l.return||l.return()}finally{if(s)throw i}}var p=r.vote_count+1;r=Object(Se.a)({},r,{vote_count:p});var h=a.options.map(function(e){return e.id===r.id?r:e}),m=Object(Se.a)({},a,{options:h});Ge(r.id,r.name,r.vote_count).then(Be).then(function(){n.props.setSurvey({survey:m}),n.props.history.push("/surveys/".concat(n.id,"/result"))}).catch(function(){return n.props.flash(_e.updateOptionFailure,"flash-error")})}else n.props.flash("Please select an option.","flash-error")},n.state={survey:{options:[]},optionChoosen:"",option:{}},n.id=n.props.match.params.id,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onGetSurvey",value:function(){var e=Object(V.a)(z.a.mark(function e(){var t=this;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(n=this.id,fetch(ce+"/surveys/"+n,{headers:{"Content-Type":"application/json"}})).then(le).then(function(e){return e.json()}).then(function(e){t.setState({survey:e})}).catch(function(){return t.props.flash(he.getSurveyFailure,"flash-error")});case 2:case"end":return e.stop()}var n},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(V.a)(z.a.mark(function e(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onGetSurvey();case 2:this.props.setSurvey({survey:this.state.survey});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state.survey,n=t.options.map(function(e){return r.a.createElement(Ie.a,{key:e.id,value:e.name,control:r.a.createElement(Ue.a,{color:"primary"}),label:e.name})});return r.a.createElement(A.a,{className:e.root},r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(_.a,{container:!0,spacing:16,direction:"column"},r.a.createElement(_.a,{item:!0},r.a.createElement(g.a,{variant:"h5",component:"h3",align:"center"},t.title),r.a.createElement(g.a,{className:e.question,variant:"h6",component:"h3"},t.question)),r.a.createElement(_.a,{item:!0},r.a.createElement(ze.a,{value:this.state.value,onChange:this.handleChange},n)),r.a.createElement(_.a,{container:!0,justify:"center"},r.a.createElement(_.a,{item:!0,className:e.bottomContainer},r.a.createElement(P.a,{onClick:this.handleSubmitClick,variant:"contained",color:"primary",className:e.button},"Submit"),r.a.createElement(P.a,{variant:"contained",onClick:this.handleCancel,color:"primary",className:e.button},"Cancel"))))))}}]),t}(r.a.Component),Xe=Object(d.withStyles)(function(e){return{root:Object(v.a)({margin:"50px 20rem",padding:50},e.breakpoints.down("sm"),{margin:"50px 1rem",padding:20}),button:Object(v.a)({margin:e.spacing.unit},e.breakpoints.down("sm"),{}),bottomContainer:{},question:{marginTop:20}}})(Ve),$e=n(139),Ke=n.n($e),Ye=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).chartRef=r.a.createRef(),n.handleCancel=function(){n.props.history.push("/surveys")},n.state={survey:{option:e.survey.options}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.chartRef.current.getContext("2d"),t=this.props.survey.options,n=t.map(function(e){return e.name}),a=t.map(function(e){return e.vote_count});new Ke.a(e,{type:"pie",data:{labels:n,datasets:[{data:a,backgroundColor:["red","green","blue","yellow"]}]},options:{}})}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.survey;return r.a.createElement(A.a,{className:t.root},r.a.createElement(_.a,{item:!0,xs:12},r.a.createElement(_.a,{container:!0,spacing:16,direction:"column",alignItems:"center"},r.a.createElement(_.a,{item:!0},r.a.createElement(g.a,{variant:"h5",component:"h3",align:"center"},"Survey: ",n.title),r.a.createElement(g.a,{className:t.question,variant:"h6",component:"h3"},"Survey Question: ",n.question)),r.a.createElement(_.a,{item:!0},r.a.createElement("canvas",{id:"myChart",ref:this.chartRef})),r.a.createElement(_.a,{item:!0},r.a.createElement(P.a,{variant:"contained",onClick:this.handleCancel,color:"primary",className:t.button},"Back To Dashboard")))))}}]),t}(r.a.Component),Ze=Object(d.withStyles)(function(e){return{root:Object(v.a)({margin:"41px 19rem",padding:36},e.breakpoints.down("sm"),{margin:"50px 1rem",padding:20})}})(Ye),et=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setSurveys=function(e){n.setState(e)},n.setSurvey=function(e){n.setState(e)},n.flash=function(e,t){n.setState({flashMessage:e,flashType:t}),clearTimeout(n.messageTimeout),n.messageTimeout=setTimeout(function(){return n.setState({flashMessage:null})},2e3)},n.state={surveys:[],survey:{},flashMessage:"",flashType:null},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Object(d.createMuiTheme)({palette:{primary:I.a,secondary:I.a},typography:{useNextVariants:!0}}),n=this.state,a=n.survey,o=n.surveys,s=n.flashMessage,i=n.flashType;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.MuiThemeProvider,{theme:t},r.a.createElement(h.a,null,r.a.createElement(U,null),s&&r.a.createElement(_.a,{container:!0,justify:"center"},r.a.createElement(_.a,{item:!0,xs:12,className:i},s)),r.a.createElement(m.a,{exact:!0,path:"/surveys",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(We,{flash:e.flash,surveys:o,setSurveys:e.setSurveys}),r.a.createElement(De,{flash:e.flash,surveys:o,setSurveys:e.setSurveys}))}}),r.a.createElement(m.a,{exact:!0,path:"/surveys/:id",render:function(t){return r.a.createElement(Xe,Object.assign({},t,{flash:e.flash,surveys:o,survey:a,setSurvey:e.setSurvey}))}}),r.a.createElement(m.a,{exact:!0,path:"/surveys/:id/result",render:function(t){return r.a.createElement(Ze,Object.assign({},t,{flash:e.flash,surveys:o,survey:a}))}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5355,1,2]]]);
//# sourceMappingURL=main.aa189325.chunk.js.map