(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{bff5a6a3704ae26a5687:function(t,e,n){"use strict";n.r(e);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),u=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("921c0b8c557fe6ba5da8")),l=n.n(f),s=n("9b4cf02f7f3c4453e043"),p=n.n(s),b=n("6938d226fd372a75cbf9"),d=n("4dd2a92e69dcbe1bab10"),y=n("387190e83edf0e5eb8f6");function m(t){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),1===a)e.children=r;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];e.children=c}if(e&&i)for(var f in i)void 0===e[f]&&(e[f]=i[f]);else e||(e=i||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=P(t);if(e){var r=P(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var F=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(i,t);var e,n,o,r=S(i);function i(){var t;h(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return _(j(t=r.call.apply(r,[this].concat(n))),"state",{valueForm:[]}),t}return e=i,(n=[{key:"submitForm",value:function(t){var e=this,n=this.state.valueForm;setTimeout((function(){e.setState({valueForm:t}),console.log("You submitted:\n\n".concat(n)),window.location.href="/app"}),500)}},{key:"render",value:function(){var t=this,e=u.a.name+" - Login Version 2",n=u.a.desc,o=this.props.classes;return v("div",{className:o.rootFull},void 0,v(a.Helmet,{},void 0,v("title",{},void 0,e),v("meta",{name:"description",content:n}),v("meta",{property:"og:title",content:e}),v("meta",{property:"og:description",content:n}),v("meta",{property:"twitter:title",content:e}),v("meta",{property:"twitter:description",content:n})),v("div",{className:o.containerSide},void 0,v(p.a,{smDown:!0},void 0,v("div",{className:o.opening},void 0,v(l.a,{variant:"h3",component:"h1",className:o.opening,gutterBottom:!0},void 0,"Welcome to\xa0",u.a.name),v(l.a,{variant:"h6",component:"p",className:o.subpening},void 0,"Please sign in to continue"))),v("div",{className:o.sideFormWrap},void 0,v(d.db,{onSubmit:function(e){return t.submitForm(e)}}))))}}])&&w(e.prototype,n),o&&w(e,o),i}(i.a.Component);e.default=Object(b.withStyles)(y.a)(F)}}]);