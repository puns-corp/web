(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],m=0,f=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/web/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("99af"),n("d3b7"),n("96cf");var a,s,o,r,i,c,u=n("1da1"),l=n("2b0e"),m=n("bc3a"),f=n.n(m),d=n("a7fe"),h=n.n(d),p=n("2b27"),g=n.n(p),v="access_token",b="refresh_token",y="puns-corp.github.io",w="/web",$={expires:"7h"},j=function(){return g.a.get(v)},k=function(e){g.a.set(v,e,$.expires,w,y)},P=function(){g.a.remove(v,w,y)},C=function(){return g.a.get(b)},G=function(e){g.a.set(b,e,$.expires,w,y)},_=function(){g.a.remove(b,w,y)},O={getAccessToken:j,saveAccessToken:k,destroyAccessToken:P,getRefreshToken:C,saveRefreshToken:G,destroyRefreshToken:_},x=(n("45fc"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-page vw-100 vh-100"},[n("div",{staticClass:"container page "},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 vh-100 d-flex justify-content-center align-items-center"},[n("el-card",{staticClass:"px-3",scopedSlots:e._u([{key:"header",fn:function(){return[n("h4",{staticClass:"mb-0"},[e._v("Sign in")])]},proxy:!0}])},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(e.email,e.password)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control ",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control ",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("el-button",{staticClass:"my-3",attrs:{round:"",type:"primary","native-type":"submit"}},[e._v(" Sign in ")]),n("p",{staticClass:"text-xs-center"},[n("router-link",{attrs:{to:{name:"register"}}},[e._v(" Need an account? ")])],1)],1)])],1)])])])}),S=[],R=n("5530"),T="login",A="logout",I="register",H="createGame",N="fetchGame",U="fetchUser",E="fetchGames",M="fetchPlayers",F="createRoom",q="joinRoom",D="fetchRooms",J="fetchPasswordCategories",B="setScoreboard",z="leaveGame",L=n("2f62"),V={name:"Login",data:function(){return{email:null,password:null}},methods:Object(R["a"])(Object(R["a"])({},Object(L["b"])([T])),{},{onSubmit:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n[T]({email:e,password:t});case 2:case"end":return a.stop()}}),a)})))()}}),computed:Object(R["a"])(Object(R["a"])({},Object(L["c"])(["isAuthenticated"])),Object(L["d"])({errors:function(e){return e.auth.errors}})),created:function(){O.destroyAccessToken(),O.destroyRefreshToken()},watch:{isAuthenticated:function(e){e&&this.$router.push({name:"Home"})},errors:function(e){null!==e&&this.$notify.error({title:e,duration:3e3})}}},W=V,Q=n("2877"),Y=Object(Q["a"])(W,x,S,!1,null,"026aa684",null),K=Y.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth-page vw-100 vh-100"},[n("div",{staticClass:"container page "},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 vh-100 d-flex justify-content-center align-items-center"},[n("el-card",{staticClass:"px-3",scopedSlots:e._u([{key:"header",fn:function(){return[n("h4",{staticClass:"mb-0"},[e._v("Sign up")])]},proxy:!0}])},[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(e.nick,e.email,e.password)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.nick,expression:"nick"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.nick},on:{input:function(t){t.target.composing||(e.nick=t.target.value)}}})]),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("el-button",{staticClass:"my-3",attrs:{type:"primary","native-type":"submit",round:""}},[e._v(" Sign up ")]),n("p",{staticClass:"text-xs-center"},[n("router-link",{attrs:{to:{name:"login"}}},[e._v(" Have an account? ")])],1)],1)])],1)])])])},Z=[],ee={name:"Register",data:function(){return{nick:"",email:"",password:""}},methods:{onSubmit:function(e,t,n){var a=this;this.$store.dispatch(I,{nick:e,email:t,password:n}).then((function(){return a.$router.push({name:"Home"})}))}},computed:Object(R["a"])({},Object(L["d"])({errors:function(e){return e.auth.errors}})),watch:{errors:function(e){null!==e&&this.$notify.error({title:e,duration:3e3})}}},te=ee,ne=Object(Q["a"])(te,X,Z,!1,null,"b84fa1f0",null),ae=ne.exports,se=n("8c4f"),oe=n("ade3"),re="logOut",ie="setUser",ce="setError",ue="setGame",le="setGames",me="purgePlayers",fe="purgeGames",de="setRooms",he="purgeRooms",pe="setPlayers",ge="purgePlayers",ve="setPasswordsCategories",be="purgePasswordsCategories",ye="setAuth",we="setScoreboard",$e="cleanGameData",je={user:{},errors:null,isAuthenticated:!!O.getRefreshToken()},ke={getUser:function(e){return e.user},isAuthenticated:function(e){return e.isAuthenticated},getUserId:function(e){return e.user.id}},Pe=(a={},Object(oe["a"])(a,I,(function(e,t){return new Promise((function(n){bt.post("Authentication/Register",t).then((function(e){var t=e.data;O.saveAccessToken(t.data.accessToken),O.saveRefreshToken(t.data.refreshToken),n(t)})).catch((function(t){var n=t.data;O.destroyAccessToken(),O.destroyRefreshToken(),e.commit(ce,n.message)}))}))})),Object(oe["a"])(a,T,(function(e,t){return new Promise((function(n){bt.post("Authentication/Login",t).then((function(t){var a=t.data;O.saveAccessToken(a.data.accessToken),O.saveRefreshToken(a.data.refreshToken),e.commit(ye,!0),n(a)})).catch((function(t){var n=t.data;O.destroyAccessToken(),O.destroyRefreshToken(),e.commit(ce,n.message)}))}))})),Object(oe["a"])(a,A,(function(e){return new Promise((function(t){var n=O.getRefreshToken();bt.post("Authentication/RevokeToken",{refreshToken:n}).catch((function(e){var t=e.data;console.log(t)})).then((function(){O.destroyAccessToken(),O.destroyRefreshToken(),e.commit(ye,!1),e.commit(re),t()}))}))})),Object(oe["a"])(a,U,(function(e){return new Promise((function(t){bt.post("Authentication/FetchUser").then((function(n){var a=n.data;e.commit(ie,a.data.user),t(a)})).catch((function(e){var t=e.data;console.log(t)}))}))})),a),Ce=(s={},Object(oe["a"])(s,ce,(function(e,t){e.errors=t})),Object(oe["a"])(s,ie,(function(e,t){e.user=t})),Object(oe["a"])(s,re,(function(e){e.user=null,e.errors=null})),Object(oe["a"])(s,ye,(function(e,t){e.isAuthenticated=t})),s),Ge={state:je,actions:Pe,getters:ke,mutations:Ce},_e={players:[],passwordsCategories:[],game:{},scores:[]},Oe={getPlayers:function(e){return e.game.players},getGameMasterId:function(e){return e.game.gameMasterId},getGameId:function(e){return e.game.id},getPasswordCategories:function(e){return e.passwordsCategories},getGame:function(e){return e.game},getScores:function(e){return e.scores}},xe=(o={},Object(oe["a"])(o,H,(function(e,t){return new Promise((function(e){bt.post("Games/Create",{gameName:t}).then((function(t){var n=t.data;e(n)})).catch((function(e){var t=e.data;console.log(t)}))}))})),Object(oe["a"])(o,J,(function(e){return new Promise((function(t){bt.get("Games/FetchPasswords").then((function(n){var a=n.data;e.commit(ve,a.data),t(a)})).catch((function(){e.commit(be)}))}))})),Object(oe["a"])(o,M,(function(e){return new Promise((function(t){bt.get("Games/FetchPlayers").then((function(n){var a=n.data;e.commit(pe,a.data.players),t(a)})).catch((function(){e.commit(ge)}))}))})),Object(oe["a"])(o,N,(function(e){return new Promise((function(t){bt.get("Games/FetchGame").then((function(n){var a=n.data;e.commit(ue,a.data.game),t(a)})).catch((function(e){var t=e.data;console.log(t)}))}))})),Object(oe["a"])(o,we,(function(e,t){e.commit(we,t)})),Object(oe["a"])(o,z,(function(e){e.commit($e)})),o),Se=(r={},Object(oe["a"])(r,ue,(function(e,t){e.game=t})),Object(oe["a"])(r,me,(function(e){e.game=null})),Object(oe["a"])(r,ve,(function(e,t){e.passwordsCategories=t.passwordCategories})),Object(oe["a"])(r,be,(function(e){e.passwordsCategories=null})),Object(oe["a"])(r,pe,(function(e,t){e.game.players=t})),Object(oe["a"])(r,ge,(function(e){e.players=null})),Object(oe["a"])(r,we,(function(e,t){e.scores=t})),Object(oe["a"])(r,$e,(function(e){e.game={},e.scores=[]})),r),Re={state:_e,getters:Oe,mutations:Se,actions:xe},Te={games:[],rooms:[]},Ae={getGames:function(e){return e.games},getRooms:function(e){return e.rooms}},Ie=(i={},Object(oe["a"])(i,E,(function(e){return new Promise((function(t){bt.get("Rooms/FetchGames").then((function(n){var a=n.data;e.commit(le,a.data),t(a)})).catch((function(){e.commit(fe)}))}))})),Object(oe["a"])(i,F,(function(e,t){return new Promise((function(e){bt.post("Rooms/Create",{roomName:t,playerMinCount:2,playerMaxCount:10}).then((function(t){var n=t.data;console.log(n),e(n)})).catch((function(){}))}))})),Object(oe["a"])(i,D,(function(e){return new Promise((function(t){bt.get("Rooms/FetchRooms").then((function(n){var a=n.data;e.commit(de,a.data.rooms),t(a)})).catch((function(){e.commit(he)}))}))})),Object(oe["a"])(i,q,(function(e,t){return new Promise((function(e){bt.get("Rooms/Join",t).then((function(t){var n=t.data;e(n)})).catch((function(e){var t=e.data;console.log(t)}))}))})),i),He=(c={},Object(oe["a"])(c,le,(function(e,t){e.games=t.games})),Object(oe["a"])(c,fe,(function(e){e.games=null})),Object(oe["a"])(c,de,(function(e,t){e.rooms=t})),Object(oe["a"])(c,he,(function(e){e.rooms=null})),c),Ne={state:Te,getters:Ae,mutations:He,actions:Ie};l["default"].use(L["a"]);var Ue=new L["a"].Store({modules:{auth:Ge,game:Re,room:Ne}}),Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid px-0 game-board"},[n("el-menu",{staticClass:"el-menu-demo d-flex justify-content-end",attrs:{mode:"horizontal","background-color":"#2F2F2F"}},[n("el-menu-item",[n("el-button",{attrs:{type:"danger"},on:{click:e.logout}},[e._v("Log out")])],1)],1),n("div",{staticClass:"col-12 d-flex pt-4 d-flex"},[null!==e.user?n("div",{staticClass:"col-12 col-md-6 col-lg-3"},[n("el-card",{staticClass:"mb-3 overflow-auto"},[n("Room")],1),e.user.roomId?n("el-card",[n("Game")],1):e._e()],1):e._e(),e.game.id?n("div",{staticClass:"col-12 col-md-6 d-flex"},[n("el-card",{staticClass:"w-100"},[n("GameBoard")],1)],1):e._e(),e.scores.length>0?n("div",{staticClass:"col-6 col-md-3 d-flex"},[n("el-card",[n("ScoreBoard")],1)],1):e._e()])],1)},Me=[],Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"col-12"},[n("h5",[e._v("Players:")]),!e.isMinimumTwoPlayers&&e.isUserInGame?n("el-alert",{staticClass:"mb-2",attrs:{title:"Waiting for other player",type:"info",closable:!1}}):e._e(),e._l(e.players,(function(t){return n("p",{key:t.id,staticClass:"mb-0"},[e._v(" "+e._s(t.nick)+" ")])}))],2),!e.isGameStarted&&!e.isGameEnded&&e.isUserMaster&&e.isMinimumTwoPlayers?n("div",{staticClass:"col-12"},[n("el-button",{attrs:{type:"primary"},on:{click:this.startGame}},[e._v("Start Game")])],1):e._e(),""!==e.showingPlayer?n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h3",[e._v("Showing: "+e._s(e.showingPlayer))])])]):e._e(),e.isGameStarted&&!e.isGameEnded&&e.isUserShowingPlayer?n("div",{staticClass:"row"},[n("h4",[e._v("Choose category:")]),e._l(e.passwordsCategories,(function(t,a){return n("div",{key:t.id,staticClass:"col-12"},[n("el-button",{staticClass:"my-2",on:{click:function(t){return e.selectPasswordCategory(a)}}},[e._v(e._s(t.name))])],1)}))],2):e._e(),e.isGameStarted&&!e.isGameEnded&&e.isUserShowingPlayer&&e.password.length>0?n("div",{staticClass:"row"},[n("h4",[e._v("Your password is: "+e._s(e.password))])]):e._e(),e.playersAreAlreadyDownloaded&&e.isUserShowingPlayer?n("div",{staticClass:"row"},[n("h4",[e._v("Select the player who guessed:")]),e._l(e.playersWithoutUser,(function(t){return n("div",{key:t.id,staticClass:"col-12 my-2 "},[n("el-button",{staticClass:"w-100",attrs:{type:"primary",plain:""},on:{click:function(n){return e.selectNextPlayer(t.id)}}},[e._v(" "+e._s(t.nick)+" ")])],1)}))],2):e._e()])},qe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("h3",[e._v("Game Board")])])}],De=(n("4de4"),n("7db0"),n("b0c0"),{name:"GameBoard",data:function(){return{userInGame:!1,password:""}},computed:Object(R["a"])(Object(R["a"])({},Object(L["c"])({user:"getUser",gameId:"getGameId",passwordsCategories:"getPasswordCategories",game:"getGame",players:"getPlayers",gameMasterId:"getGameMasterId",userId:"getUserId"})),{},{playersWithoutUser:function(){var e=this;return this.players.filter((function(t){return t.id!==e.user.id}))},playersAreAlreadyDownloaded:function(){return this.players.length>=2},isUserMaster:function(){return null!==this.user&&null!==this.game&&this.userId===this.gameMasterId},isGameStarted:function(){return null!==this.game&&(this.game.gameStarted&&!this.game.gameEnded)},isGameEnded:function(){return null!==this.game&&(!this.game.gameStarted&&this.game.gameEnded)},isMinimumTwoPlayers:function(){return this.players.length>=2},isUserInGame:function(){return null!==this.user&&null!==this.user.gameId},showingPlayer:function(){var e=this;if(void 0!==this.players&&null!==this.players&&this.players>=2&&null!==this.game){var t=this.players.find((function(t){return t.id===e.game.showingPlayerId}));if(null!==t)return t.nick}return""},isUserShowingPlayer:function(){return null!==this.user&&null!==this.game&&this.user.id===this.game.showingPlayerId}}),methods:{userJoinedToGame:function(){this.fetchPlayers(),this.playerJoined(this.user.id),this.userInGame=!0},selectPasswordCategory:function(e){var t=this.passwordsCategories[e];this.password=t.passwords[Math.floor(Math.random()*t.passwords.length)].name},playerJoined:function(e){var t=this;this.$store.dispatch(M).then((function(){var n=t.players.find((function(t){return t.id===e}));t.$notify.success({title:"".concat(n.nick," joined the game"),duration:3e3})}))},playerQuit:function(e){var t=this.players.find((function(t){return t.id===e}));this.$notify.warning({title:"".concat(t.nick," left the game"),duration:3e3}),this.$store.dispatch(M)},gameStarted:function(){this.$notify.success({title:"The game has started",duration:3e3})},scoresReceived:function(e){var t=this;this.$store.dispatch(B,e.scores).then((function(){return t.$store.dispatch(N)}))},gameEnded:function(e){var t=this;this.$gameHub.quitGame(this.user.gameId).then((function(){t.$store.dispatch(U),t.$store.dispatch(z)})),this.$store.dispatch(N),this.$store.dispatch(E),this.$store.dispatch(U),this.$notify.success({title:"".concat(e," won! The game is over"),duration:3e3})},startGame:function(){var e=this;this.$gameHub.gameStart(this.game.id).then((function(){e.$store.dispatch(N);var t=e.players[Math.floor(Math.random()*e.players.length)];e.selectNextPlayer(t.id)}))},selectNextPlayer:function(e){this.$gameHub.playerGuessed(this.gameId,e)},playerGuessed:function(e){var t=this;e===this.user.id&&(this.$gameHub.newShowingPlayer(this.user.gameId,e).then((function(){return t.$notify.info({title:"Now you are showing",duration:3e3})})),this.userIsShowingPlayer=!0)},newShowingPlayer:function(e){var t=this;this.$store.dispatch(N).then((function(){var n=t.players.find((function(t){return t.id===e}));t.$notify.info({title:"".concat(n.nick," now showing"),duration:3e3})}))},fetchPlayers:function(){this.$store.dispatch(M,this.gameId)}},mounted:function(){var e=this;this.$parent.$on("user-joined-to-game",this.userJoinedToGame),this.$gameHub.$on("player-joined",this.playerJoined),this.$gameHub.$on("game-started",this.gameStarted),this.$gameHub.$on("scores-received",this.scoresReceived),this.$gameHub.$on("player-quit",this.playerQuit),this.$gameHub.$on("game-ended",this.gameEnded),this.$gameHub.$on("player-guessed",this.playerGuessed),this.$gameHub.$on("new-showing-player",this.newShowingPlayer),this.$gameHub.$on("fetch-passwords",this.fetchPasswords),this.$store.dispatch(J),this.$store.dispatch(M),this.$store.dispatch(U).then((function(){null!==e.user.gameId&&(e.$store.dispatch(N),e.$gameHub.joinGame(e.user.gameId))}))},destroyed:function(){this.$store.dispatch(z),this.$parent.$off("user-joined-to-game"),this.$gameHub.$off("player-joined"),this.$gameHub.$off("game-started"),this.$gameHub.$off("player-quit"),this.$gameHub.$off("game-ended"),this.$gameHub.$off("player-guessed"),this.$gameHub.$off("new-showing-player")}}),Je=De,Be=Object(Q["a"])(Je,Fe,qe,!1,null,"685f608c",null),ze=Be.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("h3",[e._v("Rooms:")]),n("div",{staticClass:"col-12 px-0"},[n("el-table",{attrs:{data:e.roomTable,"empty-text":"no rooms available"}},[n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.roomName)+" ")]}}])}),n("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.id===e.user.roomId?n("i",{staticClass:"el-icon-check"}):n("el-button",{attrs:{size:"mini",round:"",icon:"el-icon-circle-plus-outline",type:"success"},on:{click:function(n){return e.joinRoom(t.row.id)}}},[n("strong",[e._v(" JOIN ")])])]}}])})],1),n("el-pagination",{attrs:{small:"",layout:"prev, pager, next","page-size":5,total:e.rooms.length},on:{"current-change":e.movePage}})],1),n("h3",{staticClass:"mt-3"},[e._v("Create room:")]),n("div",{staticClass:"col-12"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.createRoom(e.roomName)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.roomName,expression:"roomName"}],staticClass:"form-control mt-2",attrs:{type:"text",placeholder:"Room name"},domProps:{value:e.roomName},on:{input:function(t){t.target.composing||(e.roomName=t.target.value)}}})]),n("el-button",{attrs:{round:"",block:"",type:"success",icon:"el-icon-circle-plus","native-type":"submit"}},[e._v(" Create ")])],1)])])])},Ve=[],We=(n("fb6a"),{name:"Room",data:function(){return{roomName:"",gameName:"",currentPage:1}},components:{},computed:Object(R["a"])(Object(R["a"])({},Object(L["c"])({user:"getUser",rooms:"getRooms"})),{},{roomTable:function(){return this.rooms.slice(5*(1===this.currentPage?0:this.currentPage-1),5)}}),created:function(){this.fetchRooms()},methods:{movePage:function(e){this.currentPage=e},joinRoom:function(e){var t=this;this.$store.dispatch(q,e).then((function(){return t.fetchData()}))},createRoom:function(e){var t=this;this.$store.dispatch(F,e).then((function(){return t.fetchData()}))},fetchUser:function(){this.$store.dispatch(U)},fetchRooms:function(){this.$store.dispatch(D)},fetchGames:function(){this.$store.dispatch(z),this.$store.dispatch(E)},fetchData:function(){this.fetchUser(),this.fetchRooms(),this.fetchGames()}}}),Qe=We,Ye=Object(Q["a"])(Qe,Le,Ve,!1,null,null,null),Ke=Ye.exports,Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("h3",[e._v("Games:")]),n("div",{staticClass:"col-12 px-0"},[n("el-table",{attrs:{data:e.games,"empty-text":"no games available"}},[n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),n("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.id===e.user.gameId?n("el-button",{attrs:{round:"",size:"mini",type:"danger",icon:"el-icon-close"},on:{click:function(n){return e.leaveGame(t.row.id)}}},[n("strong",[e._v(" LEAVE")])]):n("el-button",{attrs:{size:"mini",round:"",icon:"el-icon-circle-plus-outline",type:"success"},on:{click:function(n){return e.joinGame(t.row.id)}}},[n("strong",[e._v(" JOIN ")])])]}}])})],1),n("el-pagination",{attrs:{small:"",layout:"prev, pager, next","page-size":5,total:e.games.length},on:{"current-change":e.movePage}})],1),n("h3",{staticClass:"mt-3"},[e._v("Create game:")]),n("div",{staticClass:"col-12"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.createGame(e.gameName)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.gameName,expression:"gameName"}],staticClass:"form-control mt-2",attrs:{type:"text",placeholder:"Game name"},domProps:{value:e.gameName},on:{input:function(t){t.target.composing||(e.gameName=t.target.value)}}})]),n("el-button",{attrs:{round:"",block:"",type:"success",icon:"el-icon-circle-plus","native-type":"submit"}},[e._v(" Create ")])],1)])])])},Ze=[],et={name:"Room",data:function(){return{roomName:"",gameName:"",currentPage:1}},components:{},computed:Object(R["a"])(Object(R["a"])({},Object(L["c"])({games:"getGames",user:"getUser",rooms:"getRooms"})),{},{roomTable:function(){return this.rooms.slice(5*(1===this.currentPage?0:this.currentPage-1),5)}}),created:function(){this.fetchGames(),this.user.gameId&&this.fetchGame()},methods:{movePage:function(e){this.currentPage=e},leaveGame:function(){var e=this;this.$gameHub.removeFromGameGroup(this.user.gameId,this.user.id).then((function(){e.fetchUser(),e.$store.dispatch(z)}))},joinGame:function(e){var t=this;this.user.gameId&&this.leaveGame(),this.$gameHub.joinGame(e).then((function(){return t.fetchGame()})).then((function(){return t.fetchData()}))},createGame:function(){var e=this;this.$store.dispatch(H,this.gameName).then((function(){return e.fetchUser()})).then((function(){return e.fetchGames()})).then(this.$gameHub.joinGame(this.user.gameId)).then((function(){return e.fetchUser()})).then((function(){return e.fetchGame()}))},fetchUser:function(){this.$store.dispatch(U)},fetchGames:function(){this.$store.dispatch(E)},fetchGame:function(){this.$store.dispatch(N)},fetchData:function(){this.fetchUser(),this.fetchGames()}}},tt=et,nt=Object(Q["a"])(tt,Xe,Ze,!1,null,null,null),at=nt.exports,st=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row col-12"},[n("h1",[e._v("Score board")]),n("div",{staticClass:"d-flex flex-column"},e._l(e.getScores,(function(t){return n("div",{key:t.nickname},[e._v(" "+e._s(t.nickname)+" "+e._s(t.score)+" ")])})),0)])},ot=[],rt={name:"ScoreBoard",computed:Object(R["a"])({},Object(L["c"])(["getScores"]))},it=rt,ct=Object(Q["a"])(it,st,ot,!1,null,"3320cfce",null),ut=ct.exports,lt={name:"Home",components:{GameBoard:ze,Room:Ke,ScoreBoard:ut,Game:at},methods:{logout:function(){var e=this;this.$store.dispatch(A).then((function(){return e.$router.push({name:"login"})}))}},computed:Object(R["a"])({},Object(L["c"])({isAuthenticated:"isAuthenticated",user:"getUser",game:"getGame",scores:"getScores"})),created:function(){this.isAuthenticated||this.$router.push({name:"login"}),this.$gameHub.stopSignalR(),this.$store.dispatch(U),this.$gameHub.startSignalR()},beforeDestroy:function(){var e=this;this.$gameHub.removeFromGameGroup(this.user.gameId,this.user.id).then((function(){e.fetchUser(),e.$store.dispatch(z)})),this.$gameHub.stopSignalR()}},mt=lt,ft=Object(Q["a"])(mt,Ee,Me,!1,null,"babeddb0",null),dt=ft.exports;l["default"].use(se["a"]);var ht=[{path:"/",name:"Home",meta:{requiresAuth:!0},component:dt},{path:"/login",name:"login",component:K},{path:"/register",name:"register",component:ae}],pt=new se["a"]({routes:ht});pt.beforeEach((function(e,t,n){var a=Ue.getters.isAuthenticated;e.matched.some((function(e){return e.meta.requiresAuth}))&&(a?n():n({name:"login"})),e.matched.some((function(e){return!e.meta.requiresAuth}))&&(a?n({name:"Home"}):n())}));var gt=pt,vt={init:function(){l["default"].use(h.a,f.a),l["default"].axios.defaults.baseURL="https://localhost:44347/",this.setRequestInterceptor(),this.setResponseInterceptor()},setRequestInterceptor:function(){l["default"].axios.interceptors.request.use((function(e){var t=O.getAccessToken();return t&&(e.headers.Authorization="Bearer "+t),e}),(function(e){Promise.reject(e).then((function(e){return console.log(e)})),O.destroyAccessToken(),O.destroyRefreshToken()}))},setResponseInterceptor:function(){var e=this;l["default"].axios.interceptors.response.use((function(e){return e}),function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=n.response,a){t.next=7;break}return t.next=4,gt.push({name:"login"});case 4:a={data:{success:!1,message:"Connection error"}},t.next=17;break;case 7:if(401!==n.response.status&&403!==n.response.status){t.next=12;break}s=O.getRefreshToken(),null!=s&&e.post("Authentication/RefreshToken",{refreshToken:s}).then((function(e){var t=e.data;O.saveAccessToken(t.data.accessToken),O.saveRefreshToken(t.data.refreshToken),f.a.request(n.config).then((function(e){var t=e.data;return t})).catch((function(e){console.log(e)}))})).catch((function(){gt.push({name:"login"})})),t.next=17;break;case 12:if(400!==n.response){t.next=17;break}return O.destroyAccessToken(),O.destroyRefreshToken(),t.next=17,gt.push({name:"login"});case 17:return t.abrupt("return",Promise.reject(a));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},query:function(e,t){return l["default"].axios.get(e,t).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l["default"].axios.get("".concat(e,"/").concat(t)).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))},post:function(e,t){return l["default"].axios.post("".concat(e),t)},update:function(e,t,n){return l["default"].axios.put("".concat(e,"/").concat(t),n)},put:function(e,t){return l["default"].axios.put("".concat(e),t)},delete:function(e){return l["default"].axios.delete(e).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))}},bt=vt,yt=n("e87a"),wt={install:function(e){var t=new e;e.prototype.$gameHub=t;var n=null,a=null,s=!1,o="https://localhost:44347/gameHub";e.prototype.startSignalR=function(){function e(){return a=n.start().catch((function(t){return console.error("Failed to connect with hub",t),new Promise((function(t,n){return setTimeout((function(){return e().then(t).catch(n)}),5e3)}))})),a}n=(new yt["a"]).configureLogging(yt["b"].Debug).withUrl(o,{accessTokenFactory:O.getAccessToken}).build(),n.on("PlayerJoined",(function(e){t.$emit("player-joined",e)})),n.on("Scoreboard",(function(e){t.$emit("scores-received",e)})),n.on("GameStarted",(function(){t.$emit("game-started")})),n.on("PlayerQuit",(function(e){t.$emit("player-quit",e)})),n.on("GameEnded",(function(e){t.$emit("game-ended",e)})),n.on("PlayerGuessed",(function(e){t.$emit("player-guessed",e)})),n.on("SwitchPlayer",(function(){t.$emit("switch-player")})),n.on("NewShowingPlayer",(function(e){t.$emit("new-showing-player",e)})),n.on("PlayerScored",(function(e){t.$emit("player-scored",e)})),n.on("SendErrorMessage",(function(e){t.$emit("error-message",e)})),n.on("FetchPasswords",(function(e){t.$emit("fetch-passwords",e)})),n.onclose((function(){s||e()})),s=!1,e()},e.prototype.stopSignalR=function(){if(a)return s=!0,a.then((function(){return n.stop()})).then((function(){a=null}))},t.joinGame=function(e){if(a)return a.then((function(){return n.invoke("JoinGame",e)})).catch(console.error)},t.quitGame=function(e){if(a)return a.then((function(){return n.invoke("QuitGame",e)})).catch(console.error)},t.gameStart=function(e){if(a)return a.then((function(){return n.invoke("GameStart",e)})).catch(console.error)},t.gameEnd=function(e){if(a)return a.then((function(){return n.invoke("GameEnd",e)})).catch(console.error)},t.playerGuessed=function(e,t){if(a)return a.then((function(){return n.invoke("PlayerGuessed",e,t)})).catch(console.error)},t.newShowingPlayer=function(e,t){if(a)return a.then((function(){return n.invoke("NewShowingPlayer",e,t)})).catch(console.error)},t.removeFromGameGroup=function(e,t){if(a)return a.then((function(){return n.invoke("RemoveFromGameGroup",e,t)})).catch(console.error)}}},$t=n("7bb1"),jt=n("4c93");Object($t["c"])("required",jt["h"]),Object($t["c"])("email",jt["b"]),Object($t["c"])("confirmed",jt["a"]),Object($t["c"])("min",jt["e"]),Object($t["c"])("max",jt["c"]),Object($t["c"])("min_value",jt["f"]),Object($t["c"])("max_value",jt["d"]),Object($t["c"])("numeric",jt["g"]);var kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},Pt=[],Ct=(n("034f"),{}),Gt=Object(Q["a"])(Ct,kt,Pt,!1,null,null,null),_t=Gt.exports,Ot=(n("0fb7"),n("450d"),n("f529")),xt=n.n(Ot),St=(n("46a1"),n("e5f2")),Rt=n.n(St),Tt=(n("9e1f"),n("6ed5")),At=n.n(Tt),It=(n("be4f"),n("896a")),Ht=n.n(It),Nt=(n("bc1c"),n("4726")),Ut=n.n(Nt),Et=(n("f92a"),n("d775")),Mt=n.n(Et),Ft=(n("279e"),n("7d94")),qt=n.n(Ft),Dt=(n("fa4c"),n("e360")),Jt=n.n(Dt),Bt=(n("acb6"),n("c673")),zt=n.n(Bt),Lt=(n("e3ea"),n("7bc3")),Vt=n.n(Lt),Wt=(n("fd71"),n("a447")),Qt=n.n(Wt),Yt=(n("2f02"),n("fe11")),Kt=n.n(Yt),Xt=(n("ed7b"),n("e1a5")),Zt=n.n(Xt),en=(n("bdc7"),n("aa2f")),tn=n.n(en),nn=(n("de31"),n("c69e")),an=n.n(nn),sn=(n("a769"),n("5cc3")),on=n.n(sn),rn=(n("a673"),n("7b31")),cn=n.n(rn),un=(n("adec"),n("3d2d")),ln=n.n(un),mn=(n("6762"),n("dd3d")),fn=n.n(mn),dn=(n("a586"),n("7464")),hn=n.n(dn),pn=(n("28b2"),n("c7ad")),gn=n.n(pn),vn=(n("b0ee"),n("d180")),bn=n.n(vn),yn=(n("a335"),n("c0bb")),wn=n.n(yn),$n=(n("186a"),n("301f")),jn=n.n($n),kn=(n("96dc"),n("9cea")),Pn=n.n(kn),Cn=(n("9c49"),n("6640")),Gn=n.n(Cn),_n=(n("d2ac"),n("95b0")),On=n.n(_n),xn=(n("78a7"),n("33ca")),Sn=n.n(xn),Rn=(n("b8e0"),n("a4c4")),Tn=n.n(Rn),An=(n("e2f3"),n("06f9")),In=n.n(An),Hn=(n("f3e4"),n("9dda")),Nn=n.n(Hn),Un=(n("6b30"),n("c284")),En=n.n(Un),Mn=(n("f225"),n("89a9")),Fn=n.n(Mn),qn=(n("f4f9"),n("c2cc")),Dn=n.n(qn),Jn=(n("7a0f"),n("0f6c")),Bn=n.n(Jn),zn=(n("aaa5"),n("a578")),Ln=n.n(zn),Vn=(n("b5c2"),n("20cf")),Wn=n.n(Vn),Qn=(n("915d"),n("e04d")),Yn=n.n(Qn),Kn=(n("5e32"),n("6721")),Xn=n.n(Kn),Zn=(n("cbb5"),n("8bbc")),ea=n.n(Zn),ta=(n("e612"),n("dd87")),na=n.n(ta),aa=(n("075a"),n("72aa")),sa=n.n(aa),oa=(n("eca7"),n("3787")),ra=n.n(oa),ia=(n("425f"),n("4105")),ca=n.n(ia),ua=(n("b84d"),n("c216")),la=n.n(ua),ma=(n("8f24"),n("76b9")),fa=n.n(ma),da=(n("0c67"),n("299c")),ha=n.n(da),pa=(n("06f1"),n("6ac9")),ga=n.n(pa),va=(n("4ffc"),n("946e")),ba=n.n(va),ya=(n("d624"),n("3e9c")),wa=n.n(ya),$a=(n("826b"),n("c263")),ja=n.n($a),ka=(n("5466"),n("ecdf")),Pa=n.n(ka),Ca=(n("38a0"),n("ad41")),Ga=n.n(Ca),_a=(n("ae26"),n("845f")),Oa=n.n(_a),xa=(n("1951"),n("eedf")),Sa=n.n(xa),Ra=(n("016f"),n("486c")),Ta=n.n(Ra),Aa=(n("6611"),n("e772")),Ia=n.n(Aa),Ha=(n("1f1a"),n("4e4b")),Na=n.n(Ha),Ua=(n("e960"),n("b35b")),Ea=n.n(Ua),Ma=(n("d4df"),n("7fc1")),Fa=n.n(Ma),qa=(n("c526"),n("1599")),Da=n.n(qa),Ja=(n("560b"),n("dcdc")),Ba=n.n(Ja),za=(n("3c52"),n("0d7b")),La=n.n(za),Va=(n("fe07"),n("6ac5")),Wa=n.n(Va),Qa=(n("b5d8"),n("f494")),Ya=n.n(Qa),Ka=(n("9d4c"),n("e450")),Xa=n.n(Ka),Za=(n("10cb"),n("f3ad")),es=n.n(Za),ts=(n("34db"),n("3803")),ns=n.n(ts),as=(n("8bd8"),n("4cb2")),ss=n.n(as),os=(n("ce18"),n("f58e")),rs=n.n(os),is=(n("4ca3"),n("443e")),cs=n.n(is),us=(n("bd49"),n("18ff")),ls=n.n(us),ms=(n("960d"),n("defb")),fs=n.n(ms),ds=(n("cb70"),n("b370")),hs=n.n(ds),ps=(n("3db2"),n("58b8")),gs=n.n(ps),vs=(n("a7cc"),n("df33")),bs=n.n(vs),ys=(n("672e"),n("101e")),ws=n.n(ys),$s=(n("f9e3"),n("0fae"),{install:function(e){e.component("ValidationProvider",$t["b"]),e.component("ValidationObserver",$t["a"]),e.use(ws.a),e.use(bs.a),e.use(gs.a),e.use(hs.a),e.use(fs.a),e.use(ls.a),e.use(cs.a),e.use(rs.a),e.use(ss.a),e.use(ns.a),e.use(es.a),e.use(Xa.a),e.use(Ya.a),e.use(Wa.a),e.use(La.a),e.use(Ba.a),e.use(Da.a),e.use(Fa.a),e.use(Ea.a),e.use(Na.a),e.use(Ia.a),e.use(Ta.a),e.use(Sa.a),e.use(Oa.a),e.use(Ga.a),e.use(Pa.a),e.use(ja.a),e.use(wa.a),e.use(ba.a),e.use(ga.a),e.use(ha.a),e.use(fa.a),e.use(la.a),e.use(ca.a),e.use(ra.a),e.use(sa.a),e.use(na.a),e.use(ea.a),e.use(Xn.a),e.use(Yn.a),e.use(Wn.a),e.use(Ln.a),e.use(Bn.a),e.use(Dn.a),e.use(Fn.a),e.use(En.a),e.use(Nn.a),e.use(In.a),e.use(Tn.a),e.use(Sn.a),e.use(On.a),e.use(Gn.a),e.use(Pn.a),e.use(jn.a),e.use(wn.a),e.use(bn.a),e.use(gn.a),e.use(hn.a),e.use(fn.a),e.use(ln.a),e.use(cn.a),e.use(on.a),e.use(an.a),e.use(tn.a),e.use(Zt.a),e.use(Kt.a),e.use(Qt.a),e.use(Vt.a),e.use(zt.a),e.use(Jt.a),e.use(qt.a),e.use(Mt.a),e.use(Ut.a),e.use(Ht.a.directive),e.prototype.$loading=Ht.a.service,e.prototype.$msgbox=At.a,e.prototype.$alert=At.a.alert,e.prototype.$confirm=At.a.confirm,e.prototype.$prompt=At.a.prompt,e.prototype.$notify=Rt.a,e.prototype.$message=xt.a}}),js=$s;l["default"].config.productionTip=!1,l["default"].use(js),l["default"].use(wt),l["default"].use(g.a),bt.init(),new l["default"]({router:gt,store:Ue,render:function(e){return e(_t)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.4ff31fe1.js.map