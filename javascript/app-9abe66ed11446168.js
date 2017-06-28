webpackJsonp([0],{12:function(e,t,n){e.exports=n(7)(20)},20:function(e,t,n){function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ActivitiesScreen=t.SingleActivityScreen=t.ActivityListItem=void 0;var l=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(6),f=o(c),s=n(3),p=n(8),d=r(p),y=n(67),h=r(y),m=n(33),v=o(m),b=n(21),g=t.ActivityListItem=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:0},n}return u(t,e),l(t,[{key:"render",value:function(){var e=this;return f.default.createElement(s.View,{style:_.activityView},f.default.createElement(b.Link,{style:{},to:"/activity/"+this.props.id},f.default.createElement(s.Text,{style:_.activityName},"[",this.state.count,"] ",this.props.name)),f.default.createElement(s.TouchableHighlight,{onPress:function(){return e.addEvent()}},f.default.createElement(s.View,{style:_.buttonView},f.default.createElement(s.Text,{style:_.buttonText},"+"))))}},{key:"componentWillMount",value:function(){var e=this;d.database().ref("events/"+this.props.id).on("value",function(t){e.setState({count:t.numChildren()})})}},{key:"componentWillUnmount",value:function(){d.database().ref("events/"+this.props.id).off("value")}},{key:"addEvent",value:function(){var e=(new Date).getTime();d.database().ref("events/"+this.props.id+"/"+e).set(1)}}]),t}(f.default.Component),_=(t.SingleActivityScreen=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={activity:null,events:[]},n}return u(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.params.id;d.database().ref("/activities/"+t).once("value",function(t){e.setState({activity:t.val()})}),d.database().ref("/events/"+t).on("value",function(t){var n=v.default.map(v.default.keys(t.toJSON()),function(e){return h.LocalDateTime._ofEpochMillis(e,h.ZoneOffset.UTC)});e.setState({events:n})})}},{key:"componentWillUnmount",value:function(){var e=this.props.params.id;d.database().ref("/events/"+e).off("value")}},{key:"render",value:function(){var e=v.default.map(this.state.events,function(e){return f.default.createElement(s.Text,{key:""+e},""+e)});return f.default.createElement(s.View,{style:{flex:1}},e,f.default.createElement(b.Link,{style:{},to:"/"},f.default.createElement(s.Text,null,"Back")))}}]),t}(f.default.Component),t.ActivitiesScreen=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.ds=new s.ListView.DataSource({rowHasChanged:function(e,t){return e!==t}}),n.state={loading:!0,dataSource:n.ds.cloneWithRows([])},n}return u(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this;d.database().ref("activities").once("value",function(t){var n=v.default.map(t.toJSON(),function(e,t){return v.default.assign({key:t,id:t},e)});e.setState({dataSource:e.ds.cloneWithRows(n),loading:!1})})}},{key:"render",value:function(){return f.default.createElement(s.View,{style:_.container},this.state.loading?f.default.createElement(s.ActivityIndicator,null):f.default.createElement(s.ListView,{enableEmptySections:!0,dataSource:this.state.dataSource,renderRow:function(e){return f.default.createElement(g,e)}}))}}]),t}(f.default.Component),s.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},activityView:{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:5,padding:10,borderColor:"#999999",borderStyle:"solid",borderWidth:1},activityName:{color:"#333333",fontSize:24},buttonView:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgb(33, 150, 243)",borderRadius:2,padding:5,width:34,height:34},buttonText:{color:"white",fontSize:20,height:24}}))},21:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Route=t.Router=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),c=r(l),f=n(3),s=n(76),p=r(s),d=n(68),y=r(d),h=t.Router=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={href:"/"},n}return i(t,e),u(t,[{key:"getChildContext",value:function(){return{Router:{href:this.state.href,go:this.go.bind(this)}}}},{key:"go",value:function(e){this.setState({href:e})}},{key:"render",value:function(){return c.default.createElement(f.View,null,this.props.children)}}]),t}(c.default.Component);h.childContextTypes={Router:p.default.shape({href:p.default.string,go:p.default.func})},(t.Route=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.parser=new y.default(e.path),n}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.parser=new y.default(e.path)}},{key:"render",value:function(){var e=this.parser.match(this.context.Router.href);console.debug(this.props.path,this.context.Router.href,e);var t=c.default.createElement(this.props.component,{params:e});return c.default.createElement(f.View,null,e&&t)}}]),t}(c.default.Component)).contextTypes=h.childContextTypes,(t.Link=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return c.default.createElement(f.TouchableHighlight,{onPress:function(){return e.context.Router.go(e.props.to)}},c.default.createElement(f.View,null,this.props.children))}}]),t}(c.default.Component)).contextTypes=h.childContextTypes},3:function(e,t,n){e.exports=n(7)(153)},36:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ExampleApp=void 0;var u=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),c=r(l),f=n(3),s=n(8),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=n(38),y=n(39),h=n(20),m=n(33),v=r(m),b=n(21);v.default.once(function(){p.initializeApp({apiKey:"AIzaSyCeBVaIXYwjEpU289jf7JCeq0zMfzWUxoU",authDomain:"last-time-b6bf0.firebaseapp.com",databaseURL:"https://last-time-b6bf0.firebaseio.com"}),"web"!==f.Platform.OS&&(e.localStorage=function(){function e(){i(this,e)}return u(e,null,[{key:"clear",value:function(){f.AsyncStorage.clear()}},{key:"getItemPromise",value:function(e){return new Promise(function(t,n){f.AsyncStorage.getItem(e,function(e,r){e?n(e):t(r)})})}},{key:"getItem",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getItemPromise(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},null,this)}},{key:"key",value:function(e){return null}},{key:"removeItem",value:function(e){f.AsyncStorage.removeItem(e)}},{key:"setItem",value:function(e,t){f.AsyncStorage.setItem(e,t)}}]),e}())})();var g=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(b.Router,null,c.default.createElement(f.View,null,c.default.createElement(b.Route,{path:"/",component:_}),c.default.createElement(b.Route,{path:"/activity/:id",component:h.SingleActivityScreen})))}}]),t}(c.default.Component);t.default=g;var _=t.ExampleApp=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={user:null},n}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this;p.auth().onAuthStateChanged(function(t){e.setState({user:t})})}},{key:"render",value:function(){return c.default.createElement(f.View,{style:w.container},this.state.user?c.default.createElement(y.MainScreen,null):c.default.createElement(d.LoginScreen,null))}}]),t}(c.default.Component),w=f.StyleSheet.create({container:{flex:1}})}).call(t,n(12))},37:function(e,t,n){var r=n(3),o=n(36),a=function(e){return e&&e.__esModule?e:{default:e}}(o);r.AppRegistry.registerComponent("ExampleApp",function(){return a.default}),r.AppRegistry.runApplication("ExampleApp",{rootTag:window.document.getElementById("react-root")})},38:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.LoginScreen=void 0;var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(3),f=n(8),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),p=(t.LoginScreen=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={error:null,email:"igor@borges.me",password:"123456"},n}return a(t,e),i(t,[{key:"render",value:function(){var e=this;return l.default.createElement(c.View,{style:p.container},l.default.createElement(c.TextInput,{defaultValue:this.state.email,placeholder:"me@email.com",onChangeText:function(t){return e.setState({email:t})}}),l.default.createElement(c.TextInput,{defaultValue:this.state.password,placeholder:"password",secureTextEntry:!0,onChangeText:function(t){return e.setState({password:t})}}),l.default.createElement(c.Button,{title:"Login",onPress:function(){return e.doLogin()}}),l.default.createElement(c.Text,{style:p.errorText},this.state.error&&this.state.error.message))}},{key:"doLogin",value:function(){var e=this,t=this.state,n=t.email,r=t.password;n&&r&&(this.setState({error:null}),s.auth().signInWithEmailAndPassword(n,r).catch(function(t){e.setState({error:t})}))}}]),t}(l.default.Component),c.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},errorText:{color:"red"}}))},39:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MainScreen=void 0;var i=function(){function e(e,t){for(var n=0;t.length>n;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),l=function(e){return e&&e.__esModule?e:{default:e}}(u),c=n(3),f=n(20),s=n(8),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=(t.MainScreen=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this;return l.default.createElement(c.View,{style:d.container},l.default.createElement(f.ActivitiesScreen,null),l.default.createElement(c.Button,{title:"Logout",onPress:function(){return e.onLogout()}}))}},{key:"onLogout",value:function(){p.auth().signOut()}}]),t}(l.default.Component),c.StyleSheet.create({container:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}))},6:function(e,t,n){e.exports=n(7)(6)},7:function(e,t){e.exports=react},76:function(e,t,n){e.exports=n(7)(3)},77:function(e,t,n){e.exports=n(7)(340)}},[37]);