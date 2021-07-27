(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),r=n.n(s),a=(n(12),n(13),n(2)),l=n(3),j=n(5),o=n(4),d=n(0),h=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.city,n=e.idx,c=e.deletecity;return Object(d.jsxs)("div",{className:"tilediv",children:[Object(d.jsx)("button",{id:"close",onClick:function(){return c(n)},children:"X"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t.location.name}),Object(d.jsx)("p",{children:t.location.region}),Object(d.jsx)("p",{children:t.location.tz_id})]}),Object(d.jsxs)("div",{className:"row_flex",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:t.current.condition.icon,alt:"icon"}),Object(d.jsx)("p",{id:"condition",children:t.current.condition.text})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{id:"temp",children:[t.current.temp_c,Object(d.jsx)("span",{className:"small",children:"\u2103"})]}),Object(d.jsxs)("p",{children:["Feels Like: ",Object(d.jsx)("span",{children:t.current.feelslike_c})]})]})]}),Object(d.jsxs)("div",{className:"row_flex",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsxs)("p",{children:["Pressure:  ",Object(d.jsx)("span",{children:t.current.pressure_mb}),"mb"]}),Object(d.jsxs)("p",{children:["Wind: ",Object(d.jsx)("span",{children:t.current.wind_kph}),"kph"]}),Object(d.jsxs)("p",{children:["Precipitation: ",Object(d.jsx)("span",{children:t.current.precip_mm}),"mm"]})]}),Object(d.jsxs)("div",{className:"left",children:[Object(d.jsxs)("p",{children:["Visibility: ",Object(d.jsx)("span",{children:t.current.vis_km}),"km"]}),Object(d.jsxs)("p",{children:["Humidity: ",Object(d.jsx)("span",{children:t.current.humidity}),"%"]}),Object(d.jsxs)("p",{children:["UV index: ",Object(d.jsx)("span",{children:t.current.uv})]})]})]})]},n)}}]),n}(c.Component),u=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).onsubmit=function(e){e.preventDefault();var t=document.getElementById("cityname").value,n=JSON.parse(localStorage.getItem("list"));n.push(t),localStorage.setItem("list",JSON.stringify(n)),Promise.all(n.map((function(e,t){return fetch("http://api.weatherapi.com/v1/current.json?key=2179903f2c2940eb89b202319211306&q=".concat(e,"&aqi=no")).then((function(e){return e.json()})).catch((function(e){console.log(e.message)}))}))).then((function(e){e[e.length-1].error&&(n.pop(),window.alert("Enter a valid City"),localStorage.setItem("list",JSON.stringify(n))),c.setState({data:e},(function(){n.length&&c.setState({display:!0})}))})),document.getElementById("cityname").value=""},c.deleteCity=function(e){var t=JSON.parse(localStorage.getItem("list")).filter((function(t,n){return n!==e}));localStorage.setItem("list",JSON.stringify(t));var n=c.state.data.filter((function(t,n){return n!==e}));c.setState({data:n})},c.state={data:[],display:!1},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("list"));Promise.all(t.map((function(e,t){return fetch("http://api.weatherapi.com/v1/current.json?key=2179903f2c2940eb89b202319211306&q=".concat(e,"&aqi=no")).then((function(e){return e.json()}))}))).then((function(n){e.setState({data:n},(function(){t.length&&e.setState({display:!0})}))}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{id:"main",children:[Object(d.jsxs)("form",{id:"heading",onSubmit:this.onsubmit,children:[Object(d.jsx)("h1",{children:"Live Weather"}),Object(d.jsx)("span",{children:"Enter city name: "}),Object(d.jsx)("input",{id:"cityname",type:"text"})]}),Object(d.jsx)("div",{id:"tiles",children:this.state.display?this.state.data.map((function(t,n){if(!t.error)return Object(d.jsx)(h,{deletecity:e.deleteCity,city:t,idx:n},n)})):Object(d.jsx)(d.Fragment,{})})]}),Object(d.jsx)("div",{id:"sign",children:Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"https://github.com/RameeshRoshan",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})})]})}}]),n}(i.a.Component);var b=function(){return Object(d.jsx)(u,{})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2f242580.chunk.js.map