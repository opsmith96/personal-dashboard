(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(25),r=n.n(i),s=(n(39),n(65)),j=n(59),o=n(60),d=n(62),b=n(61),h=n(63),l=n(64),x=n(15),O=n(58),u=Object(O.a)({icon:{fontSize:48}}),m=n(2),p=function(){var e=u(),t=function(){var e=Object(c.useState)(),t=Object(x.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),r=Object(x.a)(i,2),s=r[0],j=r[1],o=Object(c.useState)(),d=Object(x.a)(o,2),b=d[0],h=d[1],l=Object(c.useState)(),O=Object(x.a)(l,2),u=O[0],m=O[1],p=new Date;return p.setMinutes(0),p.setSeconds(0),Object(c.useEffect)((function(){fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.05&lon=9.98").then((function(e){return e.json()})).then((function(e){return e.properties.timeseries.forEach((function(e){if(new Date(e.time).toString()===p.toString()){var t=e.data.instant.details,n=t.air_temperature,c=t.wind_speed,i=t.cloud_area_fraction,r=t.wind_from_direction;a(n),j(c),h(i),m(r)}}))}))})),{temprature:n,windSpeed:s,cloudPercentage:b,windDirection:u}}(),n=t.temprature,a=t.windSpeed,i=t.cloudPercentage,r=t.windDirection;return Object(m.jsx)(s.a,{maxWidth:370,m:5,children:Object(m.jsx)(j.a,{elevation:3,children:Object(m.jsxs)(s.a,{p:2,children:[Object(m.jsxs)(o.a,{container:!0,spacing:3,alignItems:"center",children:[Object(m.jsx)(o.a,{item:!0,xs:3,children:Object(m.jsx)(b.a,{className:e.icon})}),Object(m.jsx)(o.a,{item:!0,xs:5,children:Object(m.jsx)(d.a,{variant:"h2",children:n})}),Object(m.jsx)(o.a,{item:!0,xs:4,children:Object(m.jsx)(d.a,{variant:"h2",children:"\xb0C"})}),Object(m.jsx)(o.a,{item:!0,xs:3,children:Object(m.jsx)(h.a,{style:{transform:"rotate("+r+"deg)"},className:e.icon})}),Object(m.jsx)(o.a,{item:!0,xs:5,children:Object(m.jsx)(d.a,{variant:"h2",children:a})}),Object(m.jsx)(o.a,{item:!0,xs:4,children:Object(m.jsx)(d.a,{variant:"h2",children:"m/s"})}),Object(m.jsx)(o.a,{item:!0,xs:3,children:Object(m.jsx)(l.a,{className:e.icon})}),Object(m.jsx)(o.a,{item:!0,xs:5,children:Object(m.jsx)(d.a,{variant:"h2",children:i})}),Object(m.jsx)(o.a,{item:!0,xs:4,children:Object(m.jsx)(d.a,{variant:"h2",children:"%"})})]}),Object(m.jsx)(d.a,{align:"center",children:"Larvik"})]})})})};var f=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(p,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.cec5be7d.chunk.js.map