(this.webpackJsonpchedu=this.webpackJsonpchedu||[]).push([[0],{279:function(e,t,n){"use strict";n.r(t);var a,o=n(287),i=n(0),r=n.n(i),s=n(284),l=n(285),d=n(4),c=(n(165),n(8)),h=n(74),g=n(283),j=n(288),u=n(160),w=n(7),f=n(131),b=n.n(f),C=n(58),A=n.p+"static/media/Logo.039b3c57.png",x=n(1),O=C.a.get("window").width,y=C.a.get("window").height,m=function(e){var t={Email:e};b.a.post("http://chedu.at:5000/NewDemoUser",t).then((function(t){console.log("Email Sent! \n Post request sent! "+e)})).catch((function(e){console.log(e)}))},I=w.a.create({topSize:{height:y/10},triangleCorner:{position:"absolute",right:0,bottom:0,width:0,height:200,backgroundColor:"transparent",borderStyle:"solid",borderLeftWidth:C.a.get("window").width,borderRightWidth:y/.8,borderBottomWidth:y/1,borderLeftColor:"transparent",borderRightColor:"transparent",borderBottomColor:"#0e113f",zIndex:-100},YearTitle:{marginTop:60,margin:10,fontSize:40,fontWeight:"bold",color:"#00578a"},YearHeader:{textAlign:"left",fontSize:30,margin:10},YearTextField:{fontSize:15,margin:10},SprintViewBox:{margin:10,padding:20,width:O-100,borderRadius:50,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:5,elevation:4},Logo:{width:O/3,height:O/3,margin:10,borderRadius:10},input:{height:40,margin:12,borderWidth:1,borderRadius:10,padding:10},h2Title:{fontWeight:"bold",fontSize:30,margin:10},EmailText:{fontSize:15,margin:10},Button:{width:40,margin:12,borderWidth:1,borderRadius:10,padding:10},Container:{flexGrow:1},Horizontal:{flexDirection:"row"},Title:{fontWeight:"bold",fontSize:100},CheduBlue:{color:"#00578a"},CheduDarkBlue:{color:"#0e113f"},InputField:{margin:10,padding:20,borderRadius:10,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:5,elevation:4},BottonVield:{height:50,width:200,margin:20,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:5,elevation:4,justifyContent:"center",alignItems:"center"},BaseShadow:{margin:10,padding:20,borderRadius:10,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:5,elevation:4}}),B=function(e){e.navigation;var t=r.a.useState(null),n=Object(d.a)(t,2),a=n[0],o=n[1];return Object(x.jsx)(c.a,{style:I.Container,children:Object(x.jsxs)(c.a,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)(c.a,{style:I.topSize}),Object(x.jsx)(c.a,{style:{flexDirection:"row"},children:Object(x.jsxs)(c.a,{style:I.BaseShadow,children:[Object(x.jsxs)(h.a,{style:I.Title,children:[Object(x.jsx)(h.a,{style:I.CheduBlue,children:"Ch"}),Object(x.jsx)(h.a,{style:I.CheduDarkBlue,children:"Edu"})]}),Object(x.jsx)(h.a,{children:"Learn how to play chess!"})]})}),Object(x.jsx)(c.a,{style:I.BaseShadow,children:Object(x.jsx)(h.a,{children:"Welcome to our Diploma Project, we are currently in development!"})}),Object(x.jsx)(c.a,{style:I.BaseShadow,children:Object(x.jsx)(h.a,{children:"Thank you for visiting our website!"})}),Object(x.jsxs)(c.a,{style:I.InputField,children:[Object(x.jsx)(h.a,{style:I.h2Title,children:"Updates and Progress"}),Object(x.jsx)(h.a,{style:I.EmailText,children:"Do you want to get updates how we progress? Insert your E-mail down below:"}),Object(x.jsxs)(c.a,{style:{flexDirection:"row"},children:[Object(x.jsx)(g.a,{style:I.input,onChangeText:o,value:a,placeholder:"Email"}),Object(x.jsx)(j.a,{style:I.Button,onPress:function(){m(a)},title:"Submit"})]})]}),Object(x.jsx)(c.a,{style:I.triangleCorner}),Object(x.jsx)(h.a,{style:I.YearTitle,children:"Our Progress:"}),Object(x.jsxs)(c.a,{children:[Object(x.jsxs)(c.a,{style:I.SprintViewBox,children:[Object(x.jsx)(h.a,{style:I.YearHeader,children:"1 Juni - 11 September"}),Object(x.jsxs)(h.a,{style:I.YearTextField,children:["Main React Native setup ","\n","Server ","\n","Domain DNS setup","\n","TypeScript first research"]})]}),Object(x.jsxs)(c.a,{style:I.SprintViewBox,children:[Object(x.jsx)(h.a,{style:I.YearHeader,children:"1 October - 30. October"}),Object(x.jsxs)(h.a,{style:I.YearTextField,children:["React Native: ","\n","~ Basic UI ","\n","~ Basic Chess Board ","\n","\n","Server: ","\n","~ Basic Data Base ","\n","~ Basic E-mail Client"," ","\n","~ Basic Chess API"]})]})]}),Object(x.jsx)(u.a,{source:"data:image/png;base64,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",style:I.Logo}),Object(x.jsx)(c.a,{style:I.topSize})]})})},p=w.a.create({Title:{fontWeight:"bold",fontSize:20},CheduBlue:{color:"#00578a"},CheduDarkBlue:{color:"#0e113f"},BottonVield:{height:100,width:100,marginBottom:80,backgroundColor:"white",borderRadius:90,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BaseShadow:{margin:15,padding:10,borderRadius:20,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4}}),E=function(){return Object(x.jsx)(c.a,{style:{flex:1},children:Object(x.jsx)(c.a,{style:{flex:1},children:Object(x.jsx)(c.a,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:Object(x.jsxs)(c.a,{style:p.BaseShadow,children:[Object(x.jsx)(h.a,{style:p.Title,children:"Intro Sequence!"}),Object(x.jsxs)(c.a,{style:{flexDirection:"row"},children:[Object(x.jsx)(c.a,{style:p.BaseShadow,children:Object(x.jsx)(j.a,{onPress:function(){alert("Beginner Pressed!")},title:"Beginner"})}),Object(x.jsx)(c.a,{style:p.BaseShadow,children:Object(x.jsx)(j.a,{onPress:function(){alert("Experiente Pressed!")},title:"Experiente"})})]}),Object(x.jsx)(h.a,{children:"Learn how to play chess!"})]})})})})},S=n(147),v=(n(250),n(32),C.a.get("window").width,C.a.get("window").height),P=w.a.create({Title:{fontWeight:"bold",fontSize:80},Buttons:{margin:15,width:150},buttonView:{flex:1,flexDirection:"column",alignContent:"center",justifyContent:"center",height:v/10*8,margin:30,padding:20},CheduBlue:{color:"#00578a"},PlayLog:{flex:1,height:v/10*8,width:80,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},CheduDarkBlue:{color:"#0e113f"},ChessBoard:{height:v/10*5,width:v/10*5,margin:40,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},ChessBoardChildren:{fontSize:10,borderWidth:2},BottonVield:{height:100,width:100,marginBottom:80,backgroundColor:"white",borderRadius:90,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BaseShadow:{padding:20,borderRadius:20,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4}}),T=function(e){var t=e.navigation;return Object(x.jsx)(c.a,{style:{flexGrow:1},children:Object(x.jsx)(c.a,{style:{flexGrow:1,justifyContent:"center",alignItems:"center"},children:Object(x.jsxs)(c.a,{style:{flexDirection:"row"},children:[Object(x.jsxs)(c.a,{style:P.buttonView,children:[Object(x.jsx)(c.a,{style:P.Buttons,children:Object(x.jsx)(j.a,{style:P.Buttons,onPress:function(){t.navigate("Home")},title:"EXIT"})}),Object(x.jsx)(c.a,{style:P.Buttons,children:Object(x.jsx)(j.a,{title:"SETTINGS"})}),Object(x.jsx)(c.a,{style:P.Buttons,children:Object(x.jsx)(j.a,{title:"SAVE"})})]}),Object(x.jsx)(c.a,{style:P.ChessBoard,children:Object(x.jsx)(S.a,{id:"BasicBoard"})}),Object(x.jsx)(c.a,{style:P.PlayLog,children:Object(x.jsx)(h.a,{children:"Play Log"})})]})})})},R=(C.a.get("window").width,C.a.get("window").height),k=w.a.create({Title:{fontWeight:"bold",fontSize:80},Buttons:{margin:15,width:150},buttonView:{flex:1,flexDirection:"column",alignContent:"center",justifyContent:"center",height:R/10*8,margin:30,padding:20},CheduBlue:{color:"#00578a"},PlayLog:{flex:1,height:R/10*8,width:80,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},CheduDarkBlue:{color:"#0e113f"},ChessBoard:{height:R/10*8.5,width:R/10*8.5,margin:20,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BottonVield:{height:100,width:100,marginBottom:80,backgroundColor:"white",borderRadius:90,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BaseShadow:{padding:20,borderRadius:20,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4}}),H=function(e){var t=e.navigation;return Object(x.jsx)(c.a,{style:{flexGrow:1},children:Object(x.jsx)(c.a,{style:{justifyContent:"center",alignItems:"center"},children:Object(x.jsx)(c.a,{style:{flexDirection:"row-reverse"},children:Object(x.jsxs)(c.a,{style:k.buttonView,children:[Object(x.jsx)(c.a,{style:k.Buttons,children:Object(x.jsx)(j.a,{style:k.Buttons,onPress:function(){t.navigate("Home")},title:"EXIT"})}),Object(x.jsx)(c.a,{style:k.Buttons,children:Object(x.jsx)(j.a,{title:"SETTINGS"})}),Object(x.jsx)(c.a,{style:k.Buttons,children:Object(x.jsx)(j.a,{title:"SAVE"})})]})})})})},Q=n(286),J=(C.a.get("window").width,C.a.get("window").height),V=function(e,t){console.log(e,t)},D=w.a.create({Input:{margin:20},Title:{fontWeight:"bold",fontSize:60,marginTop:10,marginBottom:20},Buttons:{margin:15,width:150},buttonView:{flex:1,flexDirection:"column",alignContent:"center",justifyContent:"center",height:J/10*8,margin:30,padding:20},CheduBlue:{color:"#00578a"},PlayLog:{flex:1,height:J/10*8,width:80,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},CheduDarkBlue:{color:"#0e113f"},ChessBoard:{height:J/10*8.5,width:J/10*8.5,margin:20,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BottonVield:{height:100,width:100,marginBottom:80,backgroundColor:"white",borderRadius:90,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BaseShadow:{padding:20,borderRadius:20,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4}}),L=function(e){var t=e.navigation,n=r.a.useState(null),a=Object(d.a)(n,2),o=a[0],i=a[1],s=r.a.useState(null),l=Object(d.a)(s,2),u=l[0],w=l[1];return Object(x.jsx)(c.a,{style:{flexGrow:1},children:Object(x.jsx)(c.a,{style:{justifyContent:"center",alignItems:"center"},children:Object(x.jsxs)(c.a,{style:{flexDirection:"column"},children:[Object(x.jsx)(Q.a,{style:D.Title,children:"Login"}),Object(x.jsx)(h.a,{children:"Username"}),Object(x.jsx)(g.a,{style:D.Input,value:o,onChangeText:i,placeholder:"Username",keyboardType:"numeric"}),Object(x.jsx)(h.a,{children:"Password"}),Object(x.jsx)(g.a,{secureTextEntry:"true",style:D.Input,value:u,onChangeText:w,placeholder:"Password",keyboardType:"numeric"}),Object(x.jsx)(j.a,{style:D.Buttons,onPress:function(){V(o,u),t.navigate("Home")},title:"Login"})]})})})},Y=(C.a.get("window").width,C.a.get("window").height,w.a.create({}),function(e){e.navigation;return Object(x.jsx)(c.a,{style:{flexGrow:1}})}),U=n(18),M=(C.a.get("window").width,C.a.get("window").height,w.a.create({Mainview:{flexGrow:1},Title:{fontWeight:"bold",fontSize:100},CheduBlue:{color:"#00578a"},CheduDarkBlue:{color:"#0e113f"},Column:(a={flexDirection:"column"},Object(U.a)(a,"flexDirection","row"),Object(U.a)(a,"alignSelf","center"),Object(U.a)(a,"justifyContent","space-between"),a),Row:{flex:1,flexDirection:"row",alignSelf:"center",justifyContent:"space-between"},BaseShadow:{margin:10,padding:20,borderRadius:10,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:5,elevation:4},Logo:{width:100,height:100,margin:10}})),X=function(e){var t=e.navigation;return Object(x.jsx)(c.a,{style:M.Mainview,children:Object(x.jsxs)(c.a,{children:[Object(x.jsxs)(c.a,{style:M.Column,children:[Object(x.jsxs)(h.a,{style:M.Title,children:[Object(x.jsx)(h.a,{style:M.CheduBlue,children:"Ch"}),Object(x.jsx)(h.a,{style:M.CheduDarkBlue,children:"Edu"})]}),Object(x.jsx)(u.a,{source:A,style:M.Logo})]}),Object(x.jsxs)(c.a,{style:M.Row,children:[Object(x.jsx)(c.a,{style:M.BaseShadow,children:Object(x.jsx)(j.a,{onPress:function(){t.navigate("Profile")},title:"Profile"})}),Object(x.jsx)(c.a,{style:M.BaseShadow,children:Object(x.jsx)(j.a,{onPress:function(){t.navigate("Game")},title:"Start Game"})})]})]})})},G=(C.a.get("window").width,C.a.get("window").height),z=function(e,t,n){console.log(e,n,t)},K=w.a.create({Input:{margin:20},Title:{fontWeight:"bold",fontSize:60,marginTop:10,marginBottom:20},Buttons:{margin:15,width:150},buttonView:{flex:1,flexDirection:"column",alignContent:"center",justifyContent:"center",height:G/10*8,margin:30,padding:20},CheduBlue:{color:"#00578a"},PlayLog:{flex:1,height:G/10*8,width:80,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},CheduDarkBlue:{color:"#0e113f"},ChessBoard:{height:G/10*8.5,width:G/10*8.5,margin:20,backgroundColor:"white",borderRadius:20,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BottonVield:{height:100,width:100,marginBottom:80,backgroundColor:"white",borderRadius:90,alignSelf:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4,justifyContent:"center",alignItems:"center"},BaseShadow:{padding:20,borderRadius:20,backgroundColor:"white",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4}}),N=function(e){var t=e.navigation,n=r.a.useState(null),a=Object(d.a)(n,2),o=a[0],i=a[1],s=r.a.useState(null),l=Object(d.a)(s,2),u=l[0],w=l[1],f=r.a.useState(null),b=Object(d.a)(f,2),C=b[0],A=b[1];return Object(x.jsx)(c.a,{style:{flexGrow:1},children:Object(x.jsx)(c.a,{style:{justifyContent:"center",alignItems:"center"},children:Object(x.jsxs)(c.a,{style:{flexDirection:"column"},children:[Object(x.jsx)(Q.a,{style:K.Title,children:"Register"}),Object(x.jsx)(h.a,{children:"Username"}),Object(x.jsx)(g.a,{style:K.Input,value:o,onChangeText:i,placeholder:"Username",keyboardType:"numeric"}),Object(x.jsx)(h.a,{children:"Email"}),Object(x.jsx)(g.a,{secureTextEntry:"true",style:K.Input,value:C,onChangeText:A,placeholder:"Email",keyboardType:"numeric"}),Object(x.jsx)(h.a,{children:"Password"}),Object(x.jsx)(g.a,{secureTextEntry:"true",style:K.Input,value:u,onChangeText:w,placeholder:"Password",keyboardType:"numeric"}),Object(x.jsx)(j.a,{style:K.Buttons,onPress:function(){z(o,u,C),t.navigate("Home")},title:"Login"})]})})})},F=Object(l.a)(),W=function(){return Object(x.jsx)(s.a,{children:Object(x.jsxs)(F.Navigator,{children:[Object(x.jsx)(F.Screen,{name:"Home",component:B,options:{title:"ChEdu"}}),Object(x.jsx)(F.Screen,{name:"Homepage",component:X}),Object(x.jsx)(F.Screen,{name:"Intro",component:E}),Object(x.jsx)(F.Screen,{name:"ChessBoard",component:T}),Object(x.jsx)(F.Screen,{name:"Setting",component:H}),Object(x.jsx)(F.Screen,{name:"Profile",component:Y}),Object(x.jsx)(F.Screen,{name:"Login",component:L}),Object(x.jsx)(F.Screen,{name:"Register",component:N}),Object(x.jsx)(F.Screen,{name:"Temp",component:Y}),Object(x.jsx)(F.Screen,{name:"Game",component:Y})]})})},q=n(94);o.a.registerComponent(q.a,(function(){return W})),o.a.runApplication(q.a,{rootTag:document.getElementById("root")})},94:function(e){e.exports=JSON.parse('{"a":"ChEdu"}')}},[[279,1,2]]]);
//# sourceMappingURL=main.6200ace0.chunk.js.map