"use strict";(self.webpackChunkonline_shop_pharmacy=self.webpackChunkonline_shop_pharmacy||[]).push([[255],{9255:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var i,t,o,s,l,c,d,p,a,u=r(1413),h=r(5861),x=r(4687),f=r.n(x),m=r(1134),g=r(6727),j=r(4695),Z=r(168),b=r(5867),v=b.ZP.form(i||(i=(0,Z.Z)(["\n@media (min-width: 768px) {\n    padding-left: 40px;\n    padding-right: 40px;\n}\n\n@media (min-width: 1440px) {\n    padding-left: 100px;\n    padding-right: 100px;\n}\n"]))),y=b.ZP.label(t||(t=(0,Z.Z)(["\nwidth: 100%;\n"]))),k=b.ZP.select(o||(o=(0,Z.Z)(["\nmargin-top: 10px;\nmargin-bottom: 30px;\nwidth: 100%;\nheight: 50px;\nborder-radius: 10px;\nbackground: #FFFFFF;\noutline: none;\n"]))),w=b.ZP.input(s||(s=(0,Z.Z)(["\nmargin-bottom: ",";\nmargin-top: ",";\npadding-left: ",";\nwidth: 100%;\nheight: 44px;\nborder-radius: 20px;\nbackground: #FFFFFF;\noutline: none;\n\nborder: 1px solid #1D1E211A;\n\n&::placeholder{\n    padding-left: 20px;\n    font-family: Inter;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1,5;\n    color: #1D1E2166;\n}\n\n@media (min-width: 1440px) {\n    &::placeholder {\n        font-size: 22px;\n    }\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),F=b.ZP.textarea(l||(l=(0,Z.Z)(["\nmargin-bottom: ",";\nmargin-top: ",";\npadding-left: ",";\nwidth: 100%;\nheight: 300px;\nborder-radius: 10px;\nbackground: #FFFFFF;\noutline: none;\n\nborder: 1px solid #1D1E211A;\n\n&::placeholder{\n    padding-left: 20px;\n    padding-top: 10px;\n    font-family: Inter;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1,5;\n    color: #1D1E2166;\n}\n\n@media (min-width: 1440px) {\n    &::placeholder {\n     font-size: 22px; \n    }\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),P=b.ZP.span(c||(c=(0,Z.Z)(["\ncolor: red;\n"]))),C=b.ZP.div(d||(d=(0,Z.Z)(["\ndisplay: flex;\njustify-content: center;\ngap:20px;\n"]))),z=b.ZP.button(p||(p=(0,Z.Z)(["\npadding: 10px;\ncolor: white;\nbackground:",";\nborder-radius: 10px;\ncursor: pointer;\n"])),(function(n){return n.theme.colors.green})),S=b.ZP.button(a||(a=(0,Z.Z)(["\npadding: 10px;\ncolor: ",";\nborder: 2px solid ",";   \nborder-radius: 10px;\ncursor: pointer;\n\n&:hover{\ncolor: ",";\nbackground:",";    \n}\n"])),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.green})),_=r(9434),N=r(208),D=r(7689),I=r(184),A=g.Ry().shape({type:g.Z_().required("\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0442\u0438\u043f \u043f\u043e\u0441\u043b\u0443\u0433\u0438"),fullName:g.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435"),email:g.Z_().email("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443").required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435"),phone:g.Z_().matches(/^[\d\-+()\s]*$/,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443").nullable()}),q=function(){var n=(0,_.I0)(),e=(0,D.s0)(),r=(0,m.cI)({resolver:(0,j.X)(A)}),i=r.register,t=r.handleSubmit,o=r.reset,s=r.formState.errors,l=function(){var e=(0,h.Z)(f().mark((function e(r){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),n((0,N.gr)(r)),e.prev=2,e.next=5,fetch("https://temple-app-peter-and-paul-backend.onrender.com/api/email/send-services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:e.sent.ok?(console.log("\u041f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e"),o()):console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043f\u0438\u0441\u044c\u043c\u0430"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,I.jsxs)(v,{onSubmit:t(l),children:[(0,I.jsx)(y,{htmlFor:"type",children:"\u0422\u0438\u043f \u043f\u043e\u0441\u043b\u0443\u0433\u0438:"}),(0,I.jsxs)(k,(0,u.Z)((0,u.Z)({id:"type"},i("type")),{},{children:[(0,I.jsx)("option",{value:"",children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0442\u0438\u043f"}),(0,I.jsx)("option",{value:"\u0417\u0430 \u0443\u043f\u043e\u043a\u0456\u0439",children:"\u0417\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"}),(0,I.jsx)("option",{value:"\u0417\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f",children:"\u0417\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f"})]})),s.type&&(0,I.jsx)("p",{children:s.type.message}),(0,I.jsx)(y,{htmlFor:"fullName",children:"\u041f\u043e\u0432\u043d\u0435 \u0456\u043c'\u044f \u0430\u0431\u043e \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430:"}),(0,I.jsx)(F,(0,u.Z)((0,u.Z)({id:"fullName"},i("fullName")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u0430\u0431\u043e \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430"})),s.fullName&&(0,I.jsx)("p",{children:s.fullName.message}),(0,I.jsx)(y,{htmlFor:"email",children:"\u0414\u043b\u044f \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u043e\u0433\u043e \u0437\u0432'\u044f\u0437\u043a\u0443 (email):"}),(0,I.jsx)(w,(0,u.Z)((0,u.Z)({type:"email",id:"email"},i("email")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443"})),s.email&&(0,I.jsx)("p",{children:s.email.message}),(0,I.jsxs)(y,{htmlFor:"phone",children:["\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d ",(0,I.jsx)(P,{children:"* \u041d\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e:"})]}),(0,I.jsx)(w,(0,u.Z)((0,u.Z)({type:"text",id:"phone"},i("phone")),{},{placeholder:"+380"})),s.phone&&(0,I.jsx)("p",{children:s.phone.message}),(0,I.jsxs)(C,{children:[(0,I.jsx)(z,{type:"submit",children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"}),(0,I.jsx)(S,{type:"button",onClick:function(){e("/donation")},children:"\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u0430"})]})]})},E=r(397),T=r(3873);function H(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(E.p,{Tittle:!0,title:"\u0417\u0430\u043f\u0438\u0441\u043a\u0438 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f \u0442\u0430 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"}),(0,I.jsx)(q,{}),(0,I.jsx)(T.g,{})]})}},3873:function(n,e,r){r.d(e,{g:function(){return H}});var i,t,o,s,l,c,d,p,a,u,h,x=r(9439),f=r(9434),m=r(208),g=function(n){return n.check.password},j=r(2791),Z=r(168),b=r(5867),v=b.ZP.div(i||(i=(0,Z.Z)(["\nmargin-top: 20px;\npadding: 20px; \nfont-family: Arial;\n"]))),y=b.ZP.div(t||(t=(0,Z.Z)(["\n    width: 35%;\n    position: relative;\n    display: flex;\n    align-items: center;\n"]))),k=b.ZP.div(o||(o=(0,Z.Z)(["\n    position: absolute;\n    right: 10px;\n    cursor: pointer;\n    font-size: 1.2em;\n    color: gray;\n\n    &:hover {\n        color: black;\n    }\n"]))),w=b.ZP.input(s||(s=(0,Z.Z)(["\nwidth: 100%;\npadding: 10px;\npadding-right: 50px;\nfont-size: 16px;\nmargin-bottom: 10px;\nborder: 1px solid #ccc;\nborder-radius: 5px;\n"]))),F=b.ZP.button(l||(l=(0,Z.Z)(["\ndisplay: block;\nmargin-top: 10px;\npadding: 10px 20px;\nfont-size: 16px;\nbackground-color: #007bff;\ncolor: #fff;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\n"]))),P=b.ZP.div(c||(c=(0,Z.Z)(["\nmargin-top: 20px;\n@media (min-width: 768px) {\n    display: flex;\n    gap:10px;\n    justify-content: center;\n    \n}\n"]))),C=b.ZP.button(d||(d=(0,Z.Z)(["\ndisplay: block;\nmargin-top: 10px;\npadding: 10px 20px;\nfont-size: 16px;\nbackground-color: #28a745;\ncolor: #fff;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\n"]))),z=b.ZP.ul(p||(p=(0,Z.Z)(["\nmargin-top: 20px;\ndisplay: flex;\nflex-direction: column;\ngap:20px;\n\n"]))),S=b.ZP.span(a||(a=(0,Z.Z)(["\ntext-decoration: underline;\n"]))),_=b.ZP.li(u||(u=(0,Z.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\n\npadding:20px;\nlist-style: none;\nborder: 1px solid ",";\nborder-radius: 10px;\n"])),(function(n){return n.theme.colors.green})),N=b.ZP.span(h||(h=(0,Z.Z)(["\n/* font-size: 24px; */\nfont-weight: 600;\n"]))),D=r(7609),I=r(184),A=function(n){var e=n.services,r=(0,f.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(z,{children:e.map((function(n){var e=new Date(n.updatedAt).toLocaleDateString("uk-UA",{year:"numeric",month:"long",day:"numeric"});return(0,I.jsxs)(_,{children:[(0,I.jsxs)("div",{children:[(0,I.jsxs)("h4",{children:[(0,I.jsx)(N,{children:"\u0412\u0438\u0434 \u043f\u043e\u0441\u043b\u0443\u0433\u0438: "})," ",(0,I.jsx)(S,{children:n.type})]}),(0,I.jsxs)("p",{children:[(0,I.jsx)(N,{children:"\u0406\u043c'\u044f: "})," ",n.fullName]}),(0,I.jsxs)("p",{children:[(0,I.jsx)(N,{children:"\u041f\u043e\u0448\u0442\u0430: "})," ",n.email]}),(0,I.jsxs)("p",{children:[(0,I.jsx)(N,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "})," ",n.phone]}),(0,I.jsxs)("p",{children:[(0,I.jsx)(N,{children:"\u0414\u0430\u0442\u0430: "})," ",e]})]}),(0,I.jsx)("svg",{width:32,height:32,onClick:function(){r((0,m.wo)(n._id))},children:(0,I.jsx)("use",{xlinkHref:D.Z+"#icon-dump"})})]},n._id)}))})})},q=function(n){return n.services.services},E=r(3071),T=r(7689),H=function(){var n=(0,f.v9)(g),e=(0,j.useState)(!1),r=(0,x.Z)(e,2),i=r[0],t=r[1],o=(0,j.useState)(""),s=(0,x.Z)(o,2),l=s[0],c=s[1],d=(0,j.useState)(""),p=(0,x.Z)(d,2),a=p[0],u=p[1],h=(0,f.v9)(q),Z=(0,f.I0)(),b=(0,T.TH)(),z=function(n){u(n)},S=h.filter((function(n){return n.type.trim()===a.trim()}));return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(v,{children:[(0,I.jsx)("h3",{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,I.jsxs)(y,{children:[(0,I.jsx)(w,{type:i?"text":"password",value:l,onChange:function(n){c(n.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,I.jsx)(k,{onClick:function(){t((function(n){return!n}))},children:i?(0,I.jsx)(E.tgn,{}):(0,I.jsx)(E.dSq,{})})]}),(0,I.jsx)(F,{onClick:function(){Z((0,m.oH)(l)),Z((0,m.CS)())},children:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),n.success&&"/online-services"===b.pathname&&(0,I.jsxs)(P,{children:[(0,I.jsx)(C,{onClick:function(){return z("\u0417\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f")},children:"\u0417\u0430\u043f\u0438\u0441\u043a\u0438 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f"}),(0,I.jsx)(C,{onClick:function(){return z("\u0417\u0430 \u0443\u043f\u043e\u043a\u0456\u0439")},children:"\u0417\u0430\u043f\u0438\u0441\u043a\u0438 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"})]}),n.success&&"/feedback"===b.pathname&&(0,I.jsx)(P,{children:(0,I.jsx)(C,{children:"\u041b\u0438\u0441\u0442\u0438"})}),a&&(0,I.jsx)(A,{services:S})]})})}},397:function(n,e,r){r.d(e,{p:function(){return l}});var i,t=r(168),o=r(5867).ZP.h2(i||(i=(0,t.Z)(["\nmargin-bottom: 20px;\nmargin-top: 20px;\ntext-align: center;\nfont-size: 28px;\n\ncursor: pointer;\n\n&:hover{\n    text-decoration: underline;\n}\n\n@media (min-width: 768px) {\n    font-size: 34px;\n}\n\n@media (min-width: 1440px) {\n    font-size:40px;\n}\n"]))),s=r(184),l=function(n){var e=n.title,r=n.handleClick,i=void 0===r?function(){}:r;return(0,s.jsx)(o,{onClick:i,children:e})}}}]);
//# sourceMappingURL=255.0dddea4e.chunk.js.map