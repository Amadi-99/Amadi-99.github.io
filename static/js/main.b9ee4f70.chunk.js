(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var i,a,r=t(1),o=t(27),c=t.n(o),s=t(11),l=t(8),d=t(4),m=t(5),b=t(0),h=m.b.div(i||(i=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function j(n){var e=n.heading,t=void 0===e?"Col Heading":e,i=n.links,a=void 0===i?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:i;return Object(b.jsxs)(h,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:a.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,g=m.b.div(a||(a=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function x(n){var e=n.children;return Object(b.jsx)(g,{className:"para",children:Object(b.jsx)("p",{children:e})})}var u=m.b.div(p||(p=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Amadi Anuththara"}),Object(b.jsx)(x,{children:"A hardworking and proactive Information Technology Undergraduate who is willing to learn Information Technology concepts and Programming"})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(j,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(j,{heading:"Contact Info",links:[{title:"amadianuththara111@gmail.com",path:"amadianuththara111@gmail.com"},{title:"Kalutara, Sri Lanka",path:"https://www.google.com/maps/d/embed?mid=1NJWOi62qfQi9WovWHpC1J8dZXx0&msa=0&hl=en&ie=UTF8&t=m&ll=6.594271000000003%2C79.96326&spn=0.020463%2C0.027466&z=15&output=embed"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(j,{heading:"Social Links",links:[{title:"GitHub",path:"https://github.com/Amadi-99"},{title:"LinkedIn",path:"https://www.linkedin.com/in/amadi-anuththara-714016224/?trk=people_directory&originalSubdomain=lk"},{title:"Behance",path:"https://www.behance.net/amadianuththara"},{title:"Facebook",path:"https://www.facebook.com/amadianuththara.yatawathura"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(x,{children:["\xa9 2021 - Ayan Khan | Designed By"," ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://webcifar.com",children:"web cifar"})," "]})})})]})}var _,O=t(19),v=t(10),w=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function y(){var n=Object(r.useState)(!1),e=Object(O.a)(n,2),t=e[0],i=e[1];return Object(b.jsxs)(w,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(v.f,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(v.a,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}function k(){var n=Object(l.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var N,I,S=t.p+"static/media/AboutPage-img.5ba35abc.jpg",z=m.b.div(N||(N=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function L(n){var e=n.title,t=void 0===e?"Title":e,i=n.items,a=void 0===i?["HTML","CSS"]:i;return Object(b.jsxs)(z,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:a.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(x,{children:n})},e)}))})]})}var B,A=m.b.div(I||(I=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function C(n){var e=n.btnText,t=void 0===e?"test":e,i=n.btnLink,a=void 0===i?"test":i,r=n.outline,o=void 0!==r&&r;return Object(b.jsx)(A,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:a,children:t})})}var M,T=m.b.div(B||(B=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function D(){return Object(b.jsx)(T,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(x,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(C,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var P,E=m.b.div(M||(M=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function R(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(E,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(b.jsx)("span",{children:"Amadi Anuththara"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A Software Developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsxs)(x,{children:["I am from Kalutara, Sri Lanka. A place of beauty and nature. I am a Undergraduate student of University of Sri Jayewardenepura.I am following BSc(Hons) degree in Information Technology. I started coding in high school. Coding is also an art for me and now I have the opportunity to design with the coding.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I love art and design. I always try to design stuff with my unique point of view. I also love to create design that can be usefull to others.And also, I am working as a Graphic Designer and Vedio Editor.I see myself as a relentless problem-solver, and I\u2019m always looking for a new challenge. ",Object(b.jsx)("br",{})]})})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:S,alt:"me"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(L,{title:"Collage",items:["C.W.W. Kannangara Central College"]}),Object(b.jsx)(L,{title:"Univarsity",items:["University Of Sri Jayewardenepura"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(L,{title:"FrontEnd",items:["HTML","CSS","JavaScript"]}),Object(b.jsx)(L,{title:"BackEnd",items:["Python","Java","Node"]}),Object(b.jsx)(L,{title:"Design",items:["Photoshop","After Effects","Premiere Pro","Illustrator"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Membership"}),Object(b.jsx)(L,{title:"Jul 2021",items:["Institute of Electrical and Electronics Engineers (IEEE)"]}),Object(b.jsx)(L,{title:"Oct 2021",items:["Jupura Youth Assurance Society"]}),Object(b.jsx)(L,{title:"Jul 2020",items:["Jupura Flames"]})]})]})]}),Object(b.jsx)(D,{})]})})}var H,J=m.b.div(P||(P=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function W(n){var e=n.icon,t=void 0===e?Object(b.jsx)(v.h,{}):e,i=n.text,a=void 0===i?"I need text ":i;return Object(b.jsxs)(J,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(x,{children:a})})]})}var F=m.b.div(H||(H=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function K(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,i=n.heading,a=void 0===i?"need heading":i;return Object(b.jsxs)(F,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:a})]})}var U,V=t.p+"static/media/contact_img.87202544.jpg",q=m.b.div(U||(U=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Q(){return Object(b.jsx)(q,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(K,{heading:"contact",subheading:"get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(W,{icon:Object(b.jsx)(v.e,{}),text:"0761184229"}),Object(b.jsx)(W,{icon:Object(b.jsx)(v.d,{}),text:"amadianuththara111@gmail.com"}),Object(b.jsx)(W,{text:"Kaluthara, Sri Lanka"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:V,alt:"me"})})]})]})})}var Y,G=t.p+"static/media/map.7d98ba39.png",X=m.b.div(Y||(Y=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),G);function Z(){return Object(b.jsx)(X,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"map__card",children:[Object(b.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(b.jsx)(x,{children:"Kalutara, Sri Lanka"}),Object(b.jsx)("a",{className:"map__card__link",href:"https://www.google.com/maps/d/embed?mid=1NJWOi62qfQi9WovWHpC1J8dZXx0&msa=0&hl=en&ie=UTF8&t=m&ll=6.594271000000003%2C79.96326&spn=0.020463%2C0.027466&z=15&output=embed",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function $(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q,{}),Object(b.jsx)(Z,{})]})}var nn,en,tn=t.p+"static/media/about-sec-img.856333c9.png",an=m.b.div(nn||(nn=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function rn(){return Object(b.jsx)(an,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(K,{subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(x,{children:"A hardworking and proactive Information Technology Undergraduate who is willing to learn Information Technology concepts and Programming"}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(C,{btnText:"Works",btnLink:"/projects"}),Object(b.jsx)(C,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{className:"aboutImg",src:tn,alt:"Img"})})]})})}var on,cn=m.b.div(en||(en=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function sn(n){var e=n.icon,t=void 0===e?Object(b.jsx)(v.c,{}):e,i=n.title,a=void 0===i?"Web Design":i,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":r;return Object(b.jsxs)(cn,{className:"servicesItem",children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:a}),Object(b.jsx)(x,{children:o})]})}var ln=m.b.div(on||(on=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function dn(){return Object(b.jsx)(ln,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(K,{subheading:"What i am following",heading:"Achievements"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(sn,{icon:Object(b.jsx)(v.g,{}),title:"app Dev",desc:"I develop mobile application. I create mobile app with eye catching ui. "}),Object(b.jsx)(sn,{icon:Object(b.jsx)(v.c,{}),title:"web design",desc:"I do ui/ux design for the website that helps website to get a unique look."}),Object(b.jsx)(sn,{icon:Object(b.jsx)(v.b,{}),title:"web dev",desc:"I also develop the websites. I create high performance website with high speed."})]})]})})}var mn,bn=t(53),hn=t(51),jn=t(52),pn=t(50),gn=t.p+"static/media/projectImg.771236e1.png",xn=m.b.div(mn||(mn=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function un(n){var e=n.img,t=void 0===e?gn:e,i=n.title,a=void 0===i?"Project Name":i,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":r;return Object(b.jsxs)(xn,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:a})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(46);var fn,_n=t(54),On=t.p+"static/media/Ocean-WebSite.a504698c.png",vn=t.p+"static/media/ERS.d8fde0ff.png",wn=t.p+"static/media/HMSL.843cbbd0.png",yn=t.p+"static/media/TravelApp.6609f577.jpg",kn=[{id:Object(_n.a)(),name:"Exam Result System",desc:"An application to analyse subject results. I developed this system using python language with SQLite databases.",img:vn},{id:Object(_n.a)(),name:"Hospital Management System",desc:"Using this system you can manage all data in the hospital. I developed this system using Java language with MySQL databases. ",img:wn},{id:Object(_n.a)(),name:"Travel App",desc:"Using this app you can find best Tuarisum Places in Sri Lanka. Also you will get a better idea about the Tuarisum Places.",img:yn},{id:Object(_n.a)(),name:"World Ocean",desc:"A Static website that will show the performance of the website. Also you will get some useful information related to the Ocean.",img:On}];jn.a.use([pn.a]);var Nn=m.b.div(fn||(fn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function In(){return Object(b.jsx)(Nn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(K,{subheading:"some of my recent works",heading:"Projects"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(bn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:kn.map((function(n,e){if(!(e>=5))return Object(b.jsx)(hn.a,{children:Object(b.jsx)(un,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}var Sn,zn,Ln=t.p+"static/media/heroSection-img.0eae9030.jpg",Bn=t.p+"static/media/social-media-arrow.f5e093ce.svg",An=t.p+"static/media/scroll-down-arrow.b013ca45.svg",Cn=m.b.div(Sn||(Sn=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function Mn(){return Object(b.jsx)(Cn,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, This is"}),Object(b.jsx)("span",{className:"hero__name",children:"Amadi Anuththara"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:Ln,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(x,{children:"A hardworking and proactive Information Technology Undergraduate who is willing to learn Information Technology concepts and Programming."}),Object(b.jsx)(C,{btnText:"see my works",btnLink:"/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:Bn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://facebook.com/webcifar",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://twitter.com/webcifar",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://isntagram.com/web_cifar",target:"_blank",rel:"noreferrer",children:"IG"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://webcifar.com",target:"_blank",rel:"noreferrer",children:"LI"})})]})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:An,alt:"ScrollDown Arrow"})]})]})})})}function Tn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Mn,{}),Object(b.jsx)(rn,{}),Object(b.jsx)(dn,{}),Object(b.jsx)(In,{}),Object(b.jsx)(D,{})]})}var Dn,Pn=m.b.div(zn||(zn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function En(){var n=Object(r.useState)(""),e=Object(O.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(kn),o=Object(O.a)(a,2),c=o[0],s=o[1];Object(r.useEffect)((function(){""!==t&&s((function(){return kn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Pn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(K,{heading:"Projects",subheading:"some of my recent works"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(kn)},placeholder:"Project Name"}),Object(b.jsx)(v.i,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(un,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}function Rn(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(k,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(R,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)($,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(En,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Tn,{})})]}),Object(b.jsx)(f,{})]})})}var Hn,Jn=Object(m.a)(Dn||(Dn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Wn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Fn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Kn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Un=Object(m.a)(Hn||(Hn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Wn,Fn,Kn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Jn,{}),Object(b.jsx)(Un,{}),Object(b.jsx)(Rn,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b9ee4f70.chunk.js.map