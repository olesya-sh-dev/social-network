"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[800],{2800:function(t,s,e){e.r(s),e.d(s,{default:function(){return A},withRouter:function(){return F}});var r=e(5671),n=e(3144),i=e(136),o=e(4104),u=e(8683),a=e(364),p="Post_item__vzTeX",c=e(184),d=function(t){var s=t.id,e=t.message,r=t.likesCount;return(0,c.jsxs)("div",{className:p,children:[(0,c.jsx)("img",{src:"https://img.freepik.com/free-psd/3d-illustration-of-human-avatar-or-profile_23-2150671126.jpg?w=826&t=st=1710060640~exp=1710061240~hmac=fa56f439f19eeeda890180f1251e1ddf4a6dfbc9ce457fdae0df22339311cafe"}),e,(0,c.jsx)("div",{children:(0,c.jsxs)("span",{children:["like ",r]})})]},s)},l={newPostForm:"Profile_newPostForm__UYwc+"},f=e(6139),h=e(704),m=e(4193),x=e(1117),j=e(2791),v=j.memo((function(t){var s=t.posts.map((function(t,s){return(0,c.jsx)(d,{id:t.id,message:t.message,likesCount:t.likesCount},s)}));return(0,c.jsxs)("div",{children:["My post",(0,c.jsx)(_,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,c.jsx)("div",{className:l.posts,children:s})]})})),g=(0,m.D)(10),_=(0,h.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,c.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(f.Z,{component:x.gx,name:"newPostText",placeholder:"Enter your message",validate:[m.C,g]})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"Add post"})})]})})),P=e(6708),b=(0,a.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,P.Wl)(s))}}}))(v),k=e(6746),w="Person_info__Wfh9d",S="Person_description__bF67C",C=e(9439),Z=function(t){var s=(0,j.useState)(!1),e=(0,C.Z)(s,2),r=e[0],n=e[1],i=(0,j.useState)(t.status),o=(0,C.Z)(i,2),u=o[0],a=o[1];(0,j.useEffect)((function(){a(t.status)}),[t.status]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{children:[!r&&(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"_______"})}),r&&(0,c.jsx)("div",{children:(0,c.jsx)("input",{onBlur:function(){n(!1),t.updateStatus(u)},autoFocus:!0,value:u,onChange:function(t){a(t.currentTarget.value)}})})]})})},N=function(t){var s=t.profile,e=t.status,r=t.updateStatus;return s?(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:"https://plus.unsplash.com/premium_photo-1709493205281-cf7a93041a16?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})}),(0,c.jsxs)("div",{className:w,children:[(0,c.jsx)("img",{src:s.photos.large}),(0,c.jsxs)("div",{className:S,children:[(0,c.jsx)("span",{children:s.fullName}),(0,c.jsxs)("span",{children:[s.aboutMe,"l"]}),(0,c.jsxs)("span",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",s.lookingForAJobDescription]}),(0,c.jsx)(Z,{status:e,updateStatus:r})]})]})]}):(0,c.jsx)(k.p,{})},y=function(t){return(0,c.jsxs)("div",{children:[(0,c.jsx)(N,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,c.jsx)(b,{})]})},D=e(7689),T=e(7781);function F(t){return function(s){var e=(0,D.TH)(),r=(0,D.s0)(),n=(0,D.UO)();return(0,c.jsx)(t,(0,u.Z)((0,u.Z)({},s),{},{router:{location:e,navigate:r,params:n}}))}}var M=function(t){(0,i.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var t="31073";"string"!==typeof this.props.router.params&&"userId"in this.props.router.params?(t=this.props.router.params.userId,this.props.getUserProfileThunkCreator(Number(t))):this.props.getUserProfileThunkCreator(Number(t)),this.props.getStatus(Number(t))}},{key:"render",value:function(){return(0,c.jsx)(y,(0,u.Z)((0,u.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(j.Component),A=(0,T.qC)(F,(0,a.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status}}),{getUserProfileThunkCreator:P.om,getStatus:P.lR,updateStatus:P.Nf}))(M)}}]);
//# sourceMappingURL=800.54f95f74.chunk.js.map