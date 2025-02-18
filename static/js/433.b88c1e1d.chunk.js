"use strict";(self.webpackChunkonline_shop_pharmacy=self.webpackChunkonline_shop_pharmacy||[]).push([[433],{2433:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var i,t,o,s,c,d,l,a,p,u,h=r(1413),x=r(5861),m=r(4687),f=r.n(m),g=r(1134),j=r(6727),Z=r(4695),b=r(168),v=r(5867),k=v.ZP.form(i||(i=(0,b.Z)(["\n@media (min-width: 768px) {\n    padding-left: 40px;\n    padding-right: 40px;\n}\n\n@media (min-width: 1440px) {\n    padding-left: 100px;\n    padding-right: 100px;\n}\n"]))),y=v.ZP.label(t||(t=(0,b.Z)(["\nwidth: 100%;\n"]))),w=v.ZP.select(o||(o=(0,b.Z)(["\nmargin-top: 10px;\nmargin-bottom: 30px;\nwidth: 100%;\nheight: 50px;\nborder-radius: 10px;\nbackground: #FFFFFF;\noutline: none;\n"]))),F=v.ZP.input(s||(s=(0,b.Z)(["\nmargin-bottom: ",";\nmargin-top: ",";\npadding-left: ",";\nwidth: 100%;\nheight: 44px;\nborder-radius: 20px;\nbackground: #FFFFFF;\noutline: none;\n\nborder: 1px solid #1D1E211A;\n\n&::placeholder{\n    padding-left: 20px;\n    font-family: Inter;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1,5;\n    color: #1D1E2166;\n}\n\n@media (min-width: 1440px) {\n    &::placeholder {\n        font-size: 22px;\n    }\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),P=v.ZP.textarea(c||(c=(0,b.Z)(["\nmargin-bottom: ",";\nmargin-top: ",";\npadding-left: ",";\nwidth: 100%;\nheight: 300px;\nborder-radius: 10px;\nbackground: #FFFFFF;\noutline: none;\n\nborder: 1px solid #1D1E211A;\n\n&::placeholder{\n    padding-left: 20px;\n    padding-top: 10px;\n    font-family: Inter;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1,5;\n    color: #1D1E2166;\n}\n\n@media (min-width: 1440px) {\n    &::placeholder {\n     font-size: 22px; \n    }\n  }\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),C=v.ZP.span(d||(d=(0,b.Z)(["\ncolor: red;\n"]))),S=v.ZP.div(l||(l=(0,b.Z)(["\ndisplay: flex;\njustify-content: center;\ngap:20px;\n"]))),q=v.ZP.button(a||(a=(0,b.Z)(["\npadding: 10px;\ncolor: white;\nbackground:",";\nborder-radius: 10px;\n\ncursor: pointer;\n\n&:hover {\ncolor: black;\n}\n"])),(function(n){return n.theme.colors.green})),z=v.ZP.button(p||(p=(0,b.Z)(["\npadding: 10px;\ncolor: ",";\nborder: 2px solid ",";   \nborder-radius: 10px;\ncursor: pointer;\n\n&:hover{\ncolor: ",";\nbackground:",";    \n}\n"])),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.green})),_=r(9434),D=r(208),I=r(7689),N=r(184),H=j.Ry().shape({type:j.Z_().required("\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0442\u0438\u043f \u043f\u043e\u0441\u043b\u0443\u0433\u0438"),fullName:j.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435"),email:j.Z_().email("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443").required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435"),phone:j.Z_().matches(/^[\d\-+()\s]*$/,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443").nullable()}),T=function(){var n=(0,_.I0)(),e=(0,I.s0)(),r=(0,g.cI)({resolver:(0,Z.X)(H)}),i=r.register,t=r.handleSubmit,o=r.reset,s=r.formState.errors,c=function(){var e=(0,x.Z)(f().mark((function e(r){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),n((0,D.gr)(r)),e.prev=2,e.next=5,fetch("https://temple-app-peter-and-paul-backend.onrender.com/api/email/send-services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:e.sent.ok?(console.log("\u041f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e"),o()):console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043f\u0438\u0441\u044c\u043c\u0430"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,N.jsxs)(k,{onSubmit:t(c),children:[(0,N.jsx)(y,{htmlFor:"type",children:"\u0422\u0438\u043f \u043f\u043e\u0441\u043b\u0443\u0433\u0438:"}),(0,N.jsxs)(w,(0,h.Z)((0,h.Z)({id:"type"},i("type")),{},{children:[(0,N.jsx)("option",{value:"",children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"}),(0,N.jsx)("option",{value:"\u0417\u0430 \u0443\u043f\u043e\u043a\u0456\u0439",children:"\u0437\u0430\u043f\u0438\u0441\u043a\u0430 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"}),(0,N.jsx)("option",{value:"\u0417\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f",children:"\u0437\u0430\u043f\u0438\u0441\u043a\u0430 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f"}),(0,N.jsx)("option",{value:"\u0441\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f",children:"\u0441\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f"}),(0,N.jsx)("option",{value:"\u0441\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439",children:"\u0441\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"}),(0,N.jsx)("option",{value:"\u043c\u043e\u043b\u0435\u0431\u0435\u043d\u044c \u043d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0442\u0430 \u0456\u043d\u0448\u0443 \u043f\u043e\u0442\u0440\u0435\u0431\u0443",children:"\u043c\u043e\u043b\u0435\u0431\u0435\u043d\u044c \u043d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0442\u0430 \u0456\u043d\u0448\u0443 \u043f\u043e\u0442\u0440\u0435\u0431\u0443"})]})),s.type&&(0,N.jsx)("p",{children:s.type.message}),(0,N.jsx)(y,{htmlFor:"fullName",children:"\u041f\u043e\u0432\u043d\u0435 \u0456\u043c'\u044f \u0430\u0431\u043e \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430:"}),(0,N.jsx)(P,(0,h.Z)((0,h.Z)({id:"fullName"},i("fullName")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u0430\u0431\u043e \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430"})),s.fullName&&(0,N.jsx)("p",{children:s.fullName.message}),(0,N.jsx)(y,{htmlFor:"email",children:"\u0414\u043b\u044f \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u043e\u0433\u043e \u0437\u0432'\u044f\u0437\u043a\u0443 (email):"}),(0,N.jsx)(F,(0,h.Z)((0,h.Z)({type:"email",id:"email"},i("email")),{},{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0443 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443"})),s.email&&(0,N.jsx)("p",{children:s.email.message}),(0,N.jsxs)(y,{htmlFor:"phone",children:["\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d ",(0,N.jsx)(C,{children:"* \u041d\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e:"})]}),(0,N.jsx)(F,(0,h.Z)((0,h.Z)({type:"text",id:"phone"},i("phone")),{},{placeholder:"+380"})),s.phone&&(0,N.jsx)("p",{children:s.phone.message}),(0,N.jsxs)(S,{children:[(0,N.jsx)(q,{type:"submit",children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"}),(0,N.jsx)(z,{type:"button",onClick:function(){e("/donation")},children:"\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u0430"})]})]})},A=r(431),E=r(285),$=v.ZP.div(u||(u=(0,b.Z)(["\npadding: 20px;\nbackground-color: ",";\n"])),(function(n){return n.theme.colors.yellow}));function M(){return(0,N.jsxs)($,{children:[(0,N.jsx)(A.p,{Tittle:!0,title:"\u0417\u0430\u043f\u0438\u0441\u043a\u0438 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f \u0442\u0430 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"}),(0,N.jsx)(T,{}),(0,N.jsx)(E.g,{})]})}},285:function(n,e,r){r.d(e,{g:function(){return rn}});var i,t,o,s,c,d,l,a,p,u,h,x,m,f,g,j,Z,b=r(9439),v=r(9434),k=r(208),y=r(4288),w=r(2791),F=r(168),P=r(5867),C=P.ZP.div(i||(i=(0,F.Z)(["\nmargin-top: 20px;\npadding: 20px; \nfont-family: Arial;\n"]))),S=P.ZP.div(t||(t=(0,F.Z)(["\n    width: 70%;\n    position: relative;\n    display: flex;\n    align-items: center;\n\n    @media (min-width: 768px) {\n        width: 35%;\n    }\n"]))),q=P.ZP.div(o||(o=(0,F.Z)(["\n    position: absolute;\n    right: 10px;\n    cursor: pointer;\n    font-size: 1.2em;\n    color: gray;\n\n    &:hover {\n        color: black;\n    }\n"]))),z=P.ZP.input(s||(s=(0,F.Z)(["\nwidth: 100%;\npadding: 10px;\npadding-right: 50px;\nfont-size: 16px;\nmargin-bottom: 10px;\nborder: 1px solid #ccc;\nborder-radius: 5px;\n"]))),_=P.ZP.button(c||(c=(0,F.Z)(["\ndisplay: block;\nmargin-top: 10px;\npadding: 10px 20px;\nfont-size: 16px;\nbackground-color:",";\ncolor: #fff;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\n\n&:hover{\ncolor: ",";\nbackground-color:white;\n}\n"])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.red})),D=P.ZP.div(d||(d=(0,F.Z)(["\nmargin-top: 20px;\n@media (min-width: 768px) {\n    display: flex;\n    gap:10px;\n    justify-content: center;\n    \n}\n"]))),I=P.ZP.button(l||(l=(0,F.Z)(["\ndisplay: block;\nmargin-top: 10px;\npadding: 10px 20px;\nfont-size: 16px;\nbackground-color: #28a745;\ncolor: #fff;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\n\n&:hover{\ncolor: black;\n}\n"]))),N=P.ZP.p(a||(a=(0,F.Z)(["\ncolor: red;\nmargin-top: 10px; \n"]))),H=P.ZP.div(p||(p=(0,F.Z)(["\n  margin-top: 20px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: #007BFF; /* \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0438\u043a\u043e\u043d\u043a\u0438 */\n  transition: color 0.3s ease, transform 0.3s ease;\n  \n  &:hover {\n    color: #0056b3; /* \u0446\u0432\u0435\u0442 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 */\n    transform: scale(1.1); /* \u043b\u0451\u0433\u043a\u043e\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 */\n  }\n"]))),T=P.ZP.ul(u||(u=(0,F.Z)(["\nmargin-top: 20px;\ndisplay: flex;\nflex-direction: column;\ngap:20px;\n\n"]))),A=P.ZP.span(h||(h=(0,F.Z)(["\ntext-decoration: underline;\n"]))),E=P.ZP.li(x||(x=(0,F.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\n\npadding:20px;\nlist-style: none;\nborder: 1px solid ",";\nborder-radius: 10px;\n"])),(function(n){return n.theme.colors.green})),$=P.ZP.span(m||(m=(0,F.Z)(["\n/* font-size: 24px; */\nfont-weight: 600;\n"]))),M=r(7609),O=r(7689),R=r(184),X=function(n){var e=n.services,r=(0,v.I0)(),i=(0,O.TH)();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(T,{children:e.map((function(n){var e=new Date(n.updatedAt).toLocaleDateString("uk-UA",{year:"numeric",month:"long",day:"numeric"});return(0,R.jsxs)(E,{children:[(0,R.jsxs)("div",{children:["/online-services"===i.pathname&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("h4",{children:[(0,R.jsx)($,{children:"\u0412\u0438\u0434 \u043f\u043e\u0441\u043b\u0443\u0433\u0438: "})," ",(0,R.jsx)(A,{children:n.type})]}),(0,R.jsxs)("p",{children:[(0,R.jsx)($,{children:"\u0406\u043c'\u044f: "})," ",n.fullName]})]}),"/feedback"===i.pathname&&(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)("p",{children:[(0,R.jsx)($,{children:"\u041b\u0438\u0441\u0442: "})," ",n.fullName]})}),(0,R.jsxs)("p",{children:[(0,R.jsx)($,{children:"\u041f\u043e\u0448\u0442\u0430: "})," ",n.email]}),(0,R.jsxs)("p",{children:[(0,R.jsx)($,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "})," ",n.phone]}),(0,R.jsxs)("p",{children:[(0,R.jsx)($,{children:"\u0414\u0430\u0442\u0430: "})," ",e]})]}),"/online-services"===i.pathname&&(0,R.jsx)("svg",{width:32,height:32,onClick:function(){r((0,k.wo)(n._id))},children:(0,R.jsx)("use",{xlinkHref:M.Z+"#icon-dump"})}),"/feedback"===i.pathname&&(0,R.jsx)("svg",{width:32,height:32,onClick:function(){r((0,k.qq)(n._id))},children:(0,R.jsx)("use",{xlinkHref:M.Z+"#icon-dump"})})]},n._id)}))})})},B=function(n){return n.services.services},J=function(n){return n.feedbacks.feedbacks},L=r(3071),Q=r(1413),U=r(1134),Y=r(6727),G=r(4695),K=P.ZP.label(f||(f=(0,F.Z)(["\nwidth: 100%;\n"]))),V=P.ZP.input(g||(g=(0,F.Z)(["\nwidth: 100%;\nheight: 50px;\n\nmargin-bottom: ",";\nmargin-top: ",";\npadding-left: ",";\npadding-right: ",";\n\nborder-radius: 10px;\nbackground: #FFFFFF;\noutline: none;\n\nborder: 1px solid ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.colors.red})),W=P.ZP.button(j||(j=(0,F.Z)(["\ndisplay: block;\nmargin-top: 10px;\npadding: 10px 20px;\nfont-size: 16px;\nbackground-color:",";\ncolor: #fff;\nborder: none;\nborder-radius: 5px;\ncursor: pointer;\n\n&:hover{\ncolor: black;\nbackground-color: #28a745;\n}\n"])),(function(n){return n.theme.colors.red})),nn=(P.ZP.p(Z||(Z=(0,F.Z)(["\ncolor: red;\nmargin-top: 10px; \n"]))),Y.Ry().shape({title:Y.Z_().required("\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0431\u043e\u0433\u043e\u0441\u043b\u0443\u0436\u0456\u043d\u043d\u044f"),date:Y.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435").matches(/^\d{4}-\d{2}-\d{2}$/,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0430\u0442\u0443 \u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 \u0420\u0420\u0420\u0420-\u041c\u041c-\u0414\u0414"),time:Y.Z_().required("\u0426\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435").matches(/^([0-1]\d|2[0-3]):[0-5]\d$/,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0447\u0430\u0441 \u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0456 HH:MM")})),en=function(){var n=(0,v.I0)(),e=(0,U.cI)({resolver:(0,G.X)(nn)}),r=e.register,i=e.handleSubmit,t=e.reset,o=e.formState.errors;return(0,R.jsxs)("form",{onSubmit:i((function(e){console.log(e),n((0,k.tI)(e)),t()})),children:[(0,R.jsxs)("div",{children:[(0,R.jsx)(K,{htmlFor:"title",children:"\u041d\u0430\u0437\u0432\u0430 \u0431\u043e\u0433\u043e\u0441\u043b\u0443\u0436\u0456\u043d\u043d\u044f:"}),(0,R.jsx)(V,(0,Q.Z)({id:"title",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0431\u043e\u0433\u043e\u0441\u043b\u0443\u0436\u0456\u043d\u043d\u044f"},r("title",{required:"Title is required"}))),o.title&&(0,R.jsx)("span",{children:o.title.message})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)(K,{htmlFor:"date",children:"\u0414\u0430\u0442\u0430:"}),(0,R.jsx)(V,(0,Q.Z)({id:"date",type:"date"},r("date",{required:"Date is required"}))),o.date&&(0,R.jsx)("span",{children:o.date.message})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)(K,{htmlFor:"time",children:"\u0427\u0430\u0441:"}),(0,R.jsx)(V,(0,Q.Z)({id:"time",type:"time"},r("time",{required:"Time is required"}))),o.time&&(0,R.jsx)("span",{children:o.time.message})]}),(0,R.jsx)(W,{type:"submit",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438 \u0440\u043e\u0437\u043a\u043b\u0430\u0434"})]})},rn=function(){var n=(0,v.v9)(y.v),e=(0,v.v9)(J),r=(0,v.v9)(B),i=(0,w.useState)(!1),t=(0,b.Z)(i,2),o=t[0],s=t[1],c=(0,w.useState)(""),d=(0,b.Z)(c,2),l=d[0],a=d[1],p=(0,w.useState)(""),u=(0,b.Z)(p,2),h=u[0],x=u[1],m=(0,w.useState)(!1),f=(0,b.Z)(m,2),g=f[0],j=f[1],Z=(0,w.useState)(""),F=(0,b.Z)(Z,2),P=F[0],T=F[1],A=(0,w.useState)(!1),E=(0,b.Z)(A,2),$=E[0],M=E[1],Q=(0,v.I0)(),U=(0,O.TH)(),Y=function(n){x(n)},G=r.filter((function(n){return n.type.trim()===h.trim()}));return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(C,{children:[(0,R.jsx)("h3",{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,R.jsxs)(S,{children:[(0,R.jsx)(z,{type:o?"text":"password",value:l,onChange:function(n){a(n.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,R.jsx)(q,{onClick:function(){s(!o)},children:o?(0,R.jsx)(L.dSq,{}):(0,R.jsx)(L.tgn,{})})]}),(0,R.jsx)(_,{onClick:function(){T(""),Q((0,k.oH)(l)),Q((0,k.CS)()),Q((0,k.$Y)()),a(""),n.success||T("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u0432\u0456\u0440\u043d\u0438\u0439")},children:"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),P&&!n.success&&(0,R.jsx)(N,{children:P}),n.success&&"/online-services"===U.pathname&&(0,R.jsxs)(D,{children:[(0,R.jsx)(I,{onClick:function(){return Y("\u0417\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f")},children:"\u0417\u0430\u043f\u0438\u0441\u043a\u0438 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432'\u044f"}),(0,R.jsx)(I,{onClick:function(){return Y("\u0417\u0430 \u0443\u043f\u043e\u043a\u0456\u0439")},children:"\u0417\u0430\u043f\u0438\u0441\u043a\u0438 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"}),(0,R.jsx)(I,{onClick:function(){return Y("\u0441\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f")},children:"\u0421\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f"}),(0,R.jsx)(I,{onClick:function(){return Y("\u0441\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439")},children:"\u0421\u043e\u0440\u043e\u043a\u043e\u0443\u0441\u0442 \u0437\u0430 \u0443\u043f\u043e\u043a\u0456\u0439"}),(0,R.jsx)(I,{onClick:function(){return Y("\u043c\u043e\u043b\u0435\u0431\u0435\u043d\u044c \u043d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0442\u0430 \u0456\u043d\u0448\u0443 \u043f\u043e\u0442\u0440\u0435\u0431\u0443")},children:"\u041c\u043e\u043b\u0435\u0431\u0435\u043d\u044c \u043d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0442\u0430 \u0456\u043d\u0448\u0443 \u043f\u043e\u0442\u0440\u0435\u0431\u0443"})]}),n.success&&"/feedback"===U.pathname&&(0,R.jsx)(D,{children:(0,R.jsx)(I,{onClick:function(){j(!g)},children:"\u041b\u0438\u0441\u0442\u0438"})}),n.success&&"/schedule"===U.pathname&&(0,R.jsx)(D,{children:(0,R.jsx)(I,{onClick:function(){M(!$)},children:"\u0420\u043e\u0437\u043a\u043b\u0430\u0434 \u0431\u043e\u0433\u043e\u0441\u043b\u0443\u0436\u0456\u043d\u044c"})}),(h||g||$)&&(0,R.jsxs)("div",{id:"printableArea",children:[h&&(0,R.jsx)(X,{services:G}),g&&e&&(0,R.jsx)(X,{services:e}),$&&(0,R.jsx)(en,{})]}),n.success&&(h||g)&&(0,R.jsx)(H,{onClick:function(){window.print()},children:(0,R.jsx)(L.rcQ,{size:24,style:{cursor:"pointer"}})})]})})}},431:function(n,e,r){r.d(e,{p:function(){return o}});var i=r(4550),t=r(184),o=function(n){var e=n.title,r=n.handleClick,o=void 0===r?function(){}:r;return(0,t.jsx)(i.D,{onClick:o,children:e})}},4550:function(n,e,r){r.d(e,{D:function(){return o}});var i,t=r(168),o=r(5867).ZP.h2(i||(i=(0,t.Z)(["\nmargin-bottom: 20px;\nmargin-top: 20px;\ntext-align: center;\nfont-size: 28px;\ncolor: ",";\n/* text-shadow: -2px -2px 0px rgb(231, 251, 48), 2px 2px 0px rgb(41, 198, 223); */\n\ncursor: pointer;\n\n&:hover{\n    text-decoration: underline;\n}\n\n@media (min-width: 768px) {\n    font-size: 34px;\n}\n\n@media (min-width: 1440px) {\n    font-size:40px;\n}\n"])),(function(n){return n.theme.colors.red}))},4288:function(n,e,r){r.d(e,{v:function(){return i}});var i=function(n){return n.check.password}}}]);
//# sourceMappingURL=433.b88c1e1d.chunk.js.map