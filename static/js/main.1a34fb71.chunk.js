(this["webpackJsonpstudy-react-firebase-twitter"]=this["webpackJsonpstudy-react-firebase-twitter"]||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(5),o=a(16),i=a(2),s=a(3),m=a.n(s),p=a(9),f=a(18);a(38),a(40),a(51);f.initializeApp({apiKey:"AIzaSyB0oMnjGbKh4F0PPl7AQ9abiPciZLXMKxk",authDomain:"nwitter-74ec4.firebaseapp.com",databaseURL:"https://nwitter-74ec4.firebaseio.com",projectId:"nwitter-74ec4",storageBucket:"nwitter-74ec4.appspot.com",messagingSenderId:"805081871204",appId:"1:805081871204:web:b2140145cd365e890fc071"});var d=f,b=f.auth(),E=f.firestore(),h=f.storage(),v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],f=Object(n.useState)(!0),d=Object(u.a)(f,2),E=d[0],h=d[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),y=g[0],w=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=7;break}return e.next=5,b.createUserWithEmailAndPassword(a,i);case 5:e.next=9;break;case 7:return e.next=9,b.signInWithEmailAndPassword(a,i);case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),w(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:E?"Create Account":"Log In"}),y&&r.a.createElement("span",{className:"authError"},y)),r.a.createElement("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch"},E?"Sign in":"Create Account"))},g=a(6),y=a(17),w=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,b.signInWithPopup(n);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:y.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(v,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:y.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(g.a,{icon:y.a}))))},O=a(31),j=a(12),x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(t.text),f=Object(u.a)(s,2),d=f[0],b=f[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet")){e.next=6;break}return e.next=4,E.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return i((function(e){return!e}))},w=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.doc("nweets/".concat(t.id)).update({text:d});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:w,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:y,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,alt:"attac"}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(g.a,{icon:j.d})),r.a.createElement("span",{onClick:y},r.a.createElement(g.a,{icon:j.a})))))},N=a(53),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),f=s[0],d=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===f){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,E.collection("nweets").add(u);case 15:o(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(g.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f},alt:"attach"}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:j.c}))))},S=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){E.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},console.log(t),l.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},I=function(e){var t=e.refreshUser,a=e.userObj,c=Object(i.g)(),l=Object(n.useState)(a.displayName),o=Object(u.a)(l,2),s=o[0],f=o[1],d=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("nweets").where("creatorId","==",a.uid).orderBy("createdAt","desc").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d()}));var h=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=4;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:h,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){b.signOut(),c.push("/")}},"Log Out"))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:y.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:j.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},A=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(o.a,null,a&&r.a.createElement(C,{userObj:n}),r.a.createElement(i.d,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(S,{userObj:n})),r.a.createElement(i.b,{exact:!0,path:"/profile"},r.a.createElement(I,{userObj:n,refreshUser:t})),r.a.createElement(i.a,{from:"*",to:"/"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(i.a,{from:"*",to:"/"}))))};var F=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{refreshUser:function(){var e=b.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(i),userObj:i}):"Initializing...")};a(49);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1a34fb71.chunk.js.map