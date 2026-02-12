/*!
* Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2025 Fonticons, Inc.
*/
function e(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(e){if(Array.isArray(e))return e}function n(t){if(Array.isArray(t))return e(t)}function r(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function o(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=y(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function s(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function l(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function u(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?f(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,n){return t(e)||l(e,n)||y(e,n)||u()}function h(e){return n(e)||c(e)||y(e)||d()}function g(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function _(e){var t=g(e,`string`);return typeof t==`symbol`?t:t+``}function v(e){"@babel/helpers - typeof";return v=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},v(e)}function y(t,n){if(t){if(typeof t==`string`)return e(t,n);var r={}.toString.call(t).slice(8,-1);return r===`Object`&&t.constructor&&(r=t.constructor.name),r===`Map`||r===`Set`?Array.from(t):r===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}var b=function(){},x={},ee={},te=null,ne={mark:b,measure:b};try{typeof window<`u`&&(x=window),typeof document<`u`&&(ee=document),typeof MutationObserver<`u`&&(te=MutationObserver),typeof performance<`u`&&(ne=performance)}catch{}var re=(x.navigator||{}).userAgent,ie=re===void 0?``:re,S=x,C=ee,ae=te,w=ne;S.document;var T=!!C.documentElement&&!!C.head&&typeof C.addEventListener==`function`&&typeof C.createElement==`function`,oe=~ie.indexOf(`MSIE`)||~ie.indexOf(`Trident/`),se,ce=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,le=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,ue={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},de={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},fe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],E=`classic`,D=`duotone`,pe=`sharp`,me=`sharp-duotone`,he=`chisel`,ge=`etch`,_e=`jelly`,ve=`jelly-duo`,ye=`jelly-fill`,be=`notdog`,xe=`notdog-duo`,Se=`slab`,Ce=`slab-press`,we=`thumbprint`,Te=`utility`,Ee=`utility-duo`,De=`utility-fill`,Oe=`whiteboard`,ke=`Classic`,Ae=`Duotone`,je=`Sharp`,Me=`Sharp Duotone`,Ne=`Chisel`,Pe=`Etch`,Fe=`Jelly`,Ie=`Jelly Duo`,Le=`Jelly Fill`,Re=`Notdog`,ze=`Notdog Duo`,Be=`Slab`,Ve=`Slab Press`,He=`Thumbprint`,Ue=`Utility`,We=`Utility Duo`,Ge=`Utility Fill`,Ke=`Whiteboard`,qe=[E,D,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe];se={},s(s(s(s(s(s(s(s(s(s(se,E,ke),D,Ae),pe,je),me,Me),he,Ne),ge,Pe),_e,Fe),ve,Ie),ye,Le),be,Re),s(s(s(s(s(s(s(s(se,xe,ze),Se,Be),Ce,Ve),we,He),Te,Ue),Ee,We),De,Ge),Oe,Ke);var Je={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Ye={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Xe=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Ze={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},Qe=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],$e={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},et=[`kit`];s(s({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var tt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},nt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},rt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},it={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},at,O={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ot=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];at={},s(s(s(s(s(s(s(s(s(s(at,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),`notdog`,`Notdog`),s(s(s(s(s(s(s(s(at,`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),s(s({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var st={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},ct={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},lt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},ut=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ot,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),dt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],ft=[1,2,3,4,5,6,7,8,9,10],pt=ft.concat([11,12,13,14,15,16,17,18,19,20]),mt=[].concat(h(Object.keys(ct)),dt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,O.GROUP,O.SWAP_OPACITY,O.PRIMARY,O.SECONDARY],ft.map(function(e){return`${e}x`}),pt.map(function(e){return`w-${e}`})),ht={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},k=`___FONT_AWESOME___`,gt=16,_t=`fa`,vt=`svg-inline--fa`,A=`data-fa-i2svg`,yt=`data-fa-pseudo-element`,bt=`data-fa-pseudo-element-pending`,xt=`data-prefix`,St=`data-icon`,Ct=`fontawesome-i2svg`,wt=`async`,Tt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Et=[`::before`,`::after`,`:before`,`:after`],Dt=function(){try{return!0}catch{return!1}}();function j(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[E]}})}var Ot=p({},ue);Ot[E]=p(p(p(p({},{"fa-duotone":`duotone`}),ue[E]),$e.kit),$e[`kit-duotone`]);var kt=j(Ot),At=p({},Ze);At[E]=p(p(p(p({},{duotone:`fad`}),At[E]),it.kit),it[`kit-duotone`]);var jt=j(At),Mt=p({},lt);Mt[E]=p(p({},Mt[E]),rt.kit);var Nt=j(Mt),Pt=p({},st);Pt[E]=p(p({},Pt[E]),tt.kit),j(Pt);var Ft=ce,It=`fa-layers-text`,Lt=le,Rt=p({},Je);j(Rt);var zt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Bt=de,Vt=[].concat(h(et),h(mt)),M=S.FontAwesomeConfig||{};function Ht(e){var t=C.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Ut(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}C&&typeof C.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=m(e,2),n=t[0],r=t[1],i=Ut(Ht(n));i!=null&&(M[r]=i)});var Wt={styleDefault:`solid`,familyDefault:E,cssPrefix:_t,replacementClass:vt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};M.familyPrefix&&(M.cssPrefix=M.familyPrefix);var N=p(p({},Wt),M);N.autoReplaceSvg||(N.observeMutations=!1);var P={};Object.keys(Wt).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(t){N[e]=t,F.forEach(function(e){return e(P)})},get:function(){return N[e]}})}),Object.defineProperty(P,`familyPrefix`,{enumerable:!0,set:function(e){N.cssPrefix=e,F.forEach(function(e){return e(P)})},get:function(){return N.cssPrefix}}),S.FontAwesomeConfig=P;var F=[];function Gt(e){return F.push(e),function(){F.splice(F.indexOf(e),1)}}var I=gt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kt(e){if(!(!e||!T)){var t=C.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=C.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return C.head.insertBefore(t,r),e}}var qt=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Jt(){for(var e=12,t=``;e-- >0;)t+=qt[Math.random()*62|0];return t}function R(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Yt(e){return e.classList?R(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Xt(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Zt(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Xt(e[n])}" `},``).trim()}function z(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Qt(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function $t(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:`translate(${n/2} 256)`},a=`translate(${t.x*32}, ${t.y*32}) `,o=`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `,s=`rotate(${t.rotate} 0 0)`,c={transform:`${a} ${o} ${s}`},l={transform:`translate(${r/2*-1} -256)`};return{outer:i,inner:c,path:l}}function en(e){var t=e.transform,n=e.width,r=n===void 0?gt:n,i=e.height,a=i===void 0?gt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&oe?c+=`translate(${t.x/I-r/2}em, ${t.y/I-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/I}em), calc(-50% + ${t.y/I}em)) `:c+=`translate(${t.x/I}em, ${t.y/I}em) `,c+=`scale(${t.size/I*(t.flipX?-1:1)}, ${t.size/I*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var tn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function nn(){var e=_t,t=vt,n=P.cssPrefix,r=P.replacementClass,i=tn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var rn=!1;function an(){P.autoAddCss&&!rn&&(Kt(nn()),rn=!0)}var on={mixout:function(){return{dom:{css:nn,insertCss:an}}},hooks:function(){return{beforeDOMElementCreation:function(){an()},beforeI2svg:function(){an()}}}},B=S||{};B[k]||(B[k]={}),B[k].styles||(B[k].styles={}),B[k].hooks||(B[k].hooks={}),B[k].shims||(B[k].shims=[]);var V=B[k],sn=[],cn=function(){C.removeEventListener(`DOMContentLoaded`,cn),ln=1,sn.map(function(e){return e()})},ln=!1;T&&(ln=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),ln||C.addEventListener(`DOMContentLoaded`,cn));function un(e){T&&(ln?setTimeout(e,0):sn.push(e))}function H(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Xt(e):`<${t} ${Zt(r)}>${a.map(H).join(``)}</${t}>`}function dn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},pn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:fn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function mn(e){return h(e).length===1?e.codePointAt(0).toString(16):null}function hn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function gn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=hn(t);typeof V.hooks.addPack==`function`&&!r?V.hooks.addPack(e,hn(t)):V.styles[e]=p(p({},V.styles[e]||{}),i),e===`fas`&&gn(`fa`,t)}var U=V.styles,_n=V.shims,vn=Object.keys(Nt),yn=vn.reduce(function(e,t){return e[t]=Object.keys(Nt[t]),e},{}),bn=null,xn={},Sn={},Cn={},wn={},Tn={};function En(e){return~Vt.indexOf(e)}function Dn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!En(i)?i:null}var On=function(){var e=function(e){return pn(U,function(t,n,r){return t[r]=pn(n,e,{}),t},{})};xn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Sn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Tn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in U||P.autoFetchSvg,n=pn(_n,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Cn=n.names,wn=n.unicodes,bn=K(P.styleDefault,{family:P.familyDefault})};Gt(function(e){bn=K(e.styleDefault,{family:P.familyDefault})}),On();function kn(e,t){return(xn[e]||{})[t]}function An(e,t){return(Sn[e]||{})[t]}function W(e,t){return(Tn[e]||{})[t]}function jn(e){return Cn[e]||{prefix:null,iconName:null}}function Mn(e){var t=wn[e],n=kn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function G(){return bn}var Nn=function(){return{prefix:null,iconName:null,rest:[]}};function Pn(e){var t=E,n=vn.reduce(function(e,t){return e[t]=`${P.cssPrefix}-${t}`,e},{});return qe.forEach(function(r){(e.includes(n[r])||e.some(function(e){return yn[r].includes(e)}))&&(t=r)}),t}function K(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?E:t,r=kt[n][e];if(n===D&&!e)return`fad`;var i=jt[n][e]||jt[n][r],a=e in V.styles?e:null;return i||a||null}function Fn(e){var t=[],n=null;return e.forEach(function(e){var r=Dn(P.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function In(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Ln=ut.concat(Qe);function q(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=In(e.filter(function(e){return Ln.includes(e)})),a=In(e.filter(function(e){return!Ln.includes(e)})),o=i.filter(function(e){return r=e,!fe.includes(e)}),s=m(o,1)[0],c=s===void 0?null:s,l=Pn(i),u=p(p({},Fn(a)),{},{prefix:K(c,{family:l})});return p(p(p({},u),Vn({values:e,family:l,styles:U,config:P,canonical:u,givenPrefix:r})),Rn(n,r,u))}function Rn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?jn(i):{},o=W(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!U.far&&U.fas&&!P.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var zn=qe.filter(function(e){return e!==E||e!==D}),Bn=Object.keys(lt).filter(function(e){return e!==E}).map(function(e){return Object.keys(lt[e])}).flat();function Vn(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===D,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&zn.includes(n)&&(Object.keys(s).find(function(e){return Bn.includes(e)})||l.autoFetchSvg)&&(r.prefix=Xe.get(n).defaultShortPrefixId,r.iconName=W(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=G()||`fas`),r}var Hn=function(){function e(){r(this,e),this.definitions={}}return a(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=p(p({},e.definitions[n]||{}),t[n]),gn(n,t[n]);var r=Nt[E][n];r&&gn(r,t[n]),On()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Un=[],J={},Y={},Wn=Object.keys(Y);function Gn(e,t){var n=t.mixoutsTo;return Un=e,J={},Object.keys(Y).forEach(function(e){Wn.indexOf(e)===-1&&delete Y[e]}),Un.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),v(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){J[e]||(J[e]=[]),J[e].push(r[e])})}e.provides&&e.provides(Y)}),n}function Kn(e,t){var n=[...arguments].slice(2);return(J[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function X(e){var t=[...arguments].slice(1);(J[e]||[]).forEach(function(e){e.apply(null,t)})}function Z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Y[e]?Y[e].apply(null,t):void 0}function qn(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||G();if(t)return t=W(n,t)||t,dn(Jn.definitions,n,t)||dn(V.styles,n,t)}var Jn=new Hn,Q={noAuto:function(){P.autoReplaceSvg=!1,P.observeMutations=!1,X(`noAuto`)},config:P,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(X(`beforeI2svg`,e),Z(`pseudoElements2svg`,e),Z(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,un(function(){Yn({autoReplaceSvgRoot:t}),X(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(v(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=K(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${P.cssPrefix}-`)>-1||e.match(Ft))){var r=q(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||G(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=G();return{prefix:i,iconName:W(i,e)||e}}}},library:Jn,findIconDefinition:qn,toHtml:H},Yn=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?C:e;(Object.keys(V.styles).length>0||P.autoFetchSvg)&&T&&P.autoReplaceSvg&&Q.dom.i2svg({node:t})};function Xn(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return H(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(T){var t=C.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Zn(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Qt(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};i.style=z(p(p({},a),{},{"transform-origin":`${l.x+o.x/16}em ${l.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Qn(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${P.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:p(p({},i),{},{id:o}),children:r}]}]}function $n(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function er(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,m=f.width,h=f.height,g=[P.replacementClass,a?`${P.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),_={children:[],attributes:p(p({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:g,role:l.attributes.role||`img`,viewBox:`0 0 ${m} ${h}`})};!$n(l.attributes)&&!l.attributes[`aria-hidden`]&&(_.attributes[`aria-hidden`]=`true`),d&&(_.attributes[A]=``);var v=p(p({},_),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:p({},l.styles)}),y=r.found&&n.found?Z(`generateAbstractMask`,v)||{children:[],attributes:{}}:Z(`generateAbstractIcon`,v)||{children:[],attributes:{}},b=y.children,x=y.attributes;return v.children=b,v.attributes=x,s?Qn(v):Zn(v)}function tr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=p(p({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[A]=``);var l=p({},a.styles);Qt(i)&&(l.transform=en({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=z(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function nr(e){var t=e.content,n=e.extra,r=p(p({},n.attributes),{},{class:n.classes.join(` `)}),i=z(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var rr=V.styles;function ir(e){var t=e[0],n=e[1],r=e.slice(4),i=m(r,1)[0],a=null;return a=Array.isArray(i)?{tag:`g`,attributes:{class:`${P.cssPrefix}-${Bt.GROUP}`},children:[{tag:`path`,attributes:{class:`${P.cssPrefix}-${Bt.SECONDARY}`,fill:`currentColor`,d:i[0]}},{tag:`path`,attributes:{class:`${P.cssPrefix}-${Bt.PRIMARY}`,fill:`currentColor`,d:i[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:i}},{found:!0,width:t,height:n,icon:a}}var ar={found:!1,width:512,height:512};function or(e,t){!Dt&&!P.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function sr(e,t){var n=t;return t===`fa`&&P.styleDefault!==null&&(t=G()),new Promise(function(r,i){if(n===`fa`){var a=jn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&rr[t]&&rr[t][e]){var o=rr[t][e];return r(ir(o))}or(e,t),r(p(p({},ar),{},{icon:P.showMissingIcons&&e&&Z(`missingIconAbstract`)||{}}))})}var cr=function(){},lr=P.measurePerformance&&w&&w.mark&&w.measure?w:{mark:cr,measure:cr},$=`FA "7.1.0"`,ur=function(e){return lr.mark(`${$} ${e} begins`),function(){return dr(e)}},dr=function(e){lr.mark(`${$} ${e} ends`),lr.measure(`${$} ${e}`,`${$} ${e} begins`,`${$} ${e} ends`)},fr={begin:ur,end:dr},pr=function(){};function mr(e){return typeof(e.getAttribute?e.getAttribute(A):null)==`string`}function hr(e){var t=e.getAttribute?e.getAttribute(xt):null,n=e.getAttribute?e.getAttribute(St):null;return t&&n}function gr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function _r(){return P.autoReplaceSvg===!0?Sr.replace:Sr[P.autoReplaceSvg]||Sr.replace}function vr(e){return C.createElementNS(`http://www.w3.org/2000/svg`,e)}function yr(e){return C.createElement(e)}function br(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?vr:yr:t;if(typeof e==`string`)return C.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(br(e,{ceFn:n}))}),r}function xr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Sr={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(br(e),t)}),t.getAttribute(A)===null&&P.keepOriginalSource){var n=C.createComment(xr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Yt(t).indexOf(P.replacementClass))return Sr.replace(e);var r=RegExp(`${P.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===P.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return H(e)}).join(`
`);t.setAttribute(A,``),t.innerHTML=a}};function Cr(e){e()}function wr(e,t){var n=typeof t==`function`?t:pr;if(e.length===0)n();else{var r=Cr;P.mutateApproach===wt&&(r=S.requestAnimationFrame||Cr),r(function(){var t=_r(),r=fr.begin(`mutate`);e.map(t),r(),n()})}}var Tr=!1;function Er(){Tr=!0}function Dr(){Tr=!1}var Or=null;function kr(e){if(ae&&P.observeMutations){var t=e.treeCallback,n=t===void 0?pr:t,r=e.nodeCallback,i=r===void 0?pr:r,a=e.pseudoElementsCallback,o=a===void 0?pr:a,s=e.observeMutationsRoot,c=s===void 0?C:s;Or=new ae(function(e){if(!Tr){var t=G();R(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!mr(e.addedNodes[0])&&(P.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&P.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&mr(e.target)&&~zt.indexOf(e.attributeName))if(e.attributeName===`class`&&hr(e.target)){var r=q(Yt(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(xt,a||t),s&&e.target.setAttribute(St,s)}else gr(e.target)&&i(e.target)})}}),T&&Or.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ar(){Or&&Or.disconnect()}function jr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Mr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=q(Yt(e));return i.prefix||=G(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=An(i.prefix,e.innerText)||kn(i.prefix,mn(e.innerText))),!i.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Nr(e){return R(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Pr(){return{iconName:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Mr(e),r=n.iconName,i=n.prefix,a=n.rest,o=Nr(e),s=Kn(`parseNodeAttributes`,{},e),c=t.styleParser?jr(e):[];return p({iconName:r,prefix:i,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:o}},s)}var Ir=V.styles;function Lr(e){var t=P.autoReplaceSvg===`nest`?Fr(e,{styleParser:!1}):Fr(e);return~t.extra.classes.indexOf(It)?Z(`generateLayersText`,e,t):Z(`generateSvgReplacementMutation`,e,t)}function Rr(){return[].concat(h(Qe),h(ut))}function zr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var n=C.documentElement.classList,r=function(e){return n.add(`${Ct}-${e}`)},i=function(e){return n.remove(`${Ct}-${e}`)},a=P.autoFetchSvg?Rr():fe.concat(Object.keys(Ir));a.includes(`fa`)||a.push(`fa`);var o=[`.${It}:not([${A}])`].concat(a.map(function(e){return`.${e}:not([${A}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=R(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=fr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Lr(t);n&&e.push(n)}catch(e){Dt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){wr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lr(e).then(function(e){e&&wr([e],t)})}function Vr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:qn(t||{}),i=n.mask;return i&&=(i||{}).icon?i:qn(i||{}),e(r,p(p({},n),{},{mask:i}))}}var Hr=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?L:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,m=f===void 0?{}:f,h=t.styles,g=h===void 0?{}:h;if(e){var _=e.prefix,v=e.iconName,y=e.icon;return Xn(p({type:`icon`},e),function(){return X(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),er({icons:{main:ir(y),mask:s?ir(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:v,transform:p(p({},L),r),symbol:a,maskId:l,extra:{attributes:m,styles:g,classes:d}})})}},Ur={mixout:function(){return{icon:Vr(Hr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=zr,e.nodeCallback=Br,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?C:t,r=e.callback;return zr(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([sr(n,r),o.iconName?sr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=m(o,2),u=l[0],d=l[1];t([e,er({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=z(a);o.length>0&&(n.style=o);var s;return Qt(i)&&(s=Z(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Wr={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Xn({type:`layer`},function(){X(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${P.cssPrefix}-layers`].concat(h(r)).join(` `)},children:n}]})}}}},Gr={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Xn({type:`counter`,content:e},function(){return X(`beforeDOMElementCreation`,{content:e,params:t}),nr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${P.cssPrefix}-layers-counter`].concat(h(a))}})})}}}},Kr={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?L:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Xn({type:`text`,content:e},function(){return X(`beforeDOMElementCreation`,{content:e,params:t}),tr({content:e,transform:p(p({},L),r),extra:{attributes:s,styles:l,classes:[`${P.cssPrefix}-layers-text`].concat(h(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(oe){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,tr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},qr=RegExp(`"`,`ug`),Jr=[1105920,1112319],Yr=p(p(p(p({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ye),ht),nt),Xr=Object.keys(Yr).reduce(function(e,t){return e[t.toLowerCase()]=Yr[t],e},{}),Zr=Object.keys(Xr).reduce(function(e,t){var n=Xr[t];return e[t]=n[900]||h(Object.entries(n))[0][1],e},{});function Qr(e){var t=e.replace(qr,``);return mn(h(t)[0]||``)}function $r(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(qr,``),r=n.codePointAt(0),i=r>=Jr[0]&&r<=Jr[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function ei(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Xr[n]||{})[i]||Zr[n]}function ti(e,t){var n=`${bt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=R(e.children).filter(function(e){return e.getAttribute(yt)===t})[0],o=S.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Lt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=ei(s,l),m=Qr(d),h=c[0].startsWith(`FontAwesome`),g=$r(o),_=kn(f,m),v=_;if(h){var y=Mn(m);y.iconName&&y.prefix&&(_=y.iconName,f=y.prefix)}if(_&&!g&&(!a||a.getAttribute(xt)!==f||a.getAttribute(St)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var b=Pr(),x=b.extra;x.attributes[yt]=t,sr(_,f).then(function(i){var a=er(p(p({},b),{},{icons:{main:i,mask:Nn()},prefix:f,iconName:v,extra:x,watchable:!0})),o=C.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return H(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ni(e){return Promise.all([ti(e,`::before`),ti(e,`::after`)])}function ri(e){return e.parentNode!==document.head&&!~Tt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ii=function(e){return!!e&&Et.some(function(t){return e.includes(t)})},ai=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=o(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ii(a)){var s=Et.reduce(function(e,t){return e.replace(t,``)},a);s!==``&&s!==`*`&&t.add(s)}}}catch(e){r.e(e)}finally{r.f()}return t};function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var n;if(t)n=e;else if(P.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=o(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var s=a.value;try{var c=o(s.cssRules),l;try{for(c.s();!(l=c.n()).done;){var u=l.value,d=ai(u.selectorText),f=o(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;r.add(m)}}catch(e){f.e(e)}finally{f.f()}}}catch(e){c.e(e)}finally{c.f()}}catch(e){P.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${s.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var h=Array.from(r).join(`, `);try{n=e.querySelectorAll(h)}catch{}}return new Promise(function(e,t){var r=R(n).filter(ri).map(ni),i=fr.begin(`searchPseudoElements`);Er(),Promise.all(r).then(function(){i(),Dr(),e()}).catch(function(){i(),Dr(),t()})})}}var si={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=oi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?C:t;P.searchPseudoElements&&oi(n)}}},ci=!1,li={mixout:function(){return{dom:{unwatch:function(){Er(),ci=!0}}}},hooks:function(){return{bootstrap:function(){kr(Kn(`mutationObserverCallbacks`,{}))},noAuto:function(){Ar()},watch:function(e){var t=e.observeMutationsRoot;ci?Dr():kr(Kn(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},ui=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},di={mixout:function(){return{parse:{transform:function(e){return ui(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=ui(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={transform:`translate(${r/2} 256)`},o=`translate(${n.x*32}, ${n.y*32}) `,s=`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `,c=`rotate(${n.rotate} 0 0)`,l={transform:`${o} ${s} ${c}`},u={transform:`translate(${i/2*-1} -256)`},d={outer:a,inner:l,path:u};return{tag:`g`,attributes:p({},d.outer),children:[{tag:`g`,attributes:p({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:p(p({},t.icon.attributes),d.path)}]}]}}}},fi={x:0,y:0,width:`100%`,height:`100%`};function pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function mi(e){return e.tag===`g`?e.children:[e]}Gn([on,Ur,Wr,Gr,Kr,si,li,di,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?q(n.split(` `).map(function(e){return e.trim()})):Nn();return r.prefix||=G(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=$t({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:p(p({},fi),{},{fill:`white`})},m=c.children?{children:c.children.map(pi)}:{},h={tag:`g`,attributes:p({},d.inner),children:[pi(p({tag:c.tag,attributes:p(p({},c.attributes),d.path)},m))]},g={tag:`g`,attributes:p({},d.outer),children:[h]},_=`mask-${a||Jt()}`,v=`clip-${a||Jt()}`,y={tag:`mask`,attributes:p(p({},fi),{},{id:_,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,g]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:mi(u)},y]};return t.push(b,{tag:`rect`,attributes:p({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${_})`},fi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;S.matchMedia&&(t=S.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:p(p({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=p(p({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:p(p({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:p(p({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:p(p({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:p(p({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:p(p({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:p(p({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:p(p({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Q}),Q.noAuto;var hi=Q.config;Q.library,Q.dom;var gi=Q.parse;Q.findIconDefinition,Q.toHtml;var _i=Q.icon;Q.layer,Q.text,Q.counter;var vi={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},yi={prefix:`fas`,iconName:`trophy`,icon:[512,512,[127942],`f091`,`M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1-54.1-30.3-102.9-87.4-109.9-189.9-1.9-28.1 21-49.7 47.1-49.7l49.6 0c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zM101.5 112l-52.4 0c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6zM380 256.8c40.5-23.8 77.1-66.1 83.3-144.8L411 112c-6.2 60.9-17.4 108.2-31 144.8z`]},bi={prefix:`fas`,iconName:`palette`,icon:[512,512,[127912],`f53f`,`M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z`]},xi={prefix:`fas`,iconName:`book`,icon:[448,512,[128212],`f02d`,`M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z`]},Si={prefix:`fas`,iconName:`certificate`,icon:[576,512,[],`f0a3`,`M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z`]},Ci={prefix:`fas`,iconName:`spider`,icon:[512,512,[128375],`f717`,`M369.3-31c11.9-3.5 24.4 2.7 29 13.9l.8 2.3 40 136c2.5 8.4 .1 17.5-6.1 23.7l-64.1 64.1 76.4-20.8 19.9-59.8 .9-2.3c5-11.1 17.7-16.8 29.5-12.9 11.8 3.9 18.5 16.1 15.8 28l-.7 2.4-24 72c-2.5 7.6-8.7 13.4-16.5 15.6l-91.1 24.8 91.1 24.8c7.7 2.1 13.9 8 16.5 15.6l24 72 .7 2.4c2.7 11.9-4.1 24.1-15.8 28-11.8 3.9-24.5-1.8-29.5-12.9l-.9-2.3-19.9-59.8-76.4-20.8 64.1 64.1c6.1 6.1 8.5 15.1 6.2 23.4l-40 144-.8 2.3c-4.4 11.3-16.8 17.7-28.8 14.4-12-3.3-19.3-15.2-17.2-27.2l.5-2.4 36.2-130.5-37.2-37.2C351 406 308.4 448 256 448s-95-42-96-94.1l-37 37 36 122.3 .6 2.4c2.2 11.9-4.9 23.9-16.8 27.4-11.9 3.5-24.4-2.7-29-13.9l-.8-2.3-40-136c-2.5-8.4-.1-17.5 6.1-23.8l64.1-64.1-76.4 20.8-19.9 59.8-.9 2.3c-5 11.1-17.7 16.8-29.5 12.9s-18.5-16.1-15.8-28l.7-2.4 24-72c2.5-7.6 8.7-13.4 16.5-15.6l91.1-24.8-91.1-24.8c-7.7-2.1-13.9-8-16.5-15.6l-24-72-.7-2.4c-2.7-11.9 4.1-24.1 15.8-28s24.5 1.8 29.5 12.9l.9 2.3 19.9 59.8 76.4 20.8-64.1-64.1c-6.2-6.2-8.5-15.3-6.1-23.7l40-136 .8-2.3c4.6-11.3 17.1-17.4 29-13.9 11.9 3.5 19 15.5 16.8 27.4l-.6 2.4-36 122.3 53 53c1-43.3 36.4-78.1 79.9-78.1s78.9 34.8 79.9 78.2l53.1-53.1-36-122.3-.6-2.4c-2.2-12 4.9-23.9 16.8-27.4z`]},wi={prefix:`fas`,iconName:`microphone`,icon:[384,512,[],`f130`,`M192 0C139 0 96 43 96 96l0 128c0 53 43 96 96 96s96-43 96-96l0-128c0-53-43-96-96-96zM48 184c0-13.3-10.7-24-24-24S0 170.7 0 184l0 40c0 97.9 73.3 178.7 168 190.5l0 49.5-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-49.5c94.7-11.8 168-92.6 168-190.5l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 79.5-64.5 144-144 144S48 303.5 48 224l0-40z`]},Ti={prefix:`fas`,iconName:`sun`,icon:[576,512,[9728],`f185`,`M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z`]},Ei={prefix:`fas`,iconName:`code`,icon:[576,512,[],`f121`,`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`]},Di={prefix:`fas`,iconName:`hurricane`,icon:[384,512,[],`f751`,`M0 208C0 104.4 75.7 18.5 174.9 2.6 184 1.2 192 8.6 192 17.9l0 63.3c0 8.4 6.5 15.3 14.7 16.5 100.3 14.9 177.3 101.3 177.3 205.7 0 103.6-75.7 189.5-174.9 205.4-9.2 1.5-17.1-5.9-17.1-15.2l0-63.3C192 421.9 185.5 415 177.3 413.7 77 398.9 0 312.4 0 208zm288 48a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z`]},Oi={prefix:`fas`,iconName:`x`,icon:[384,512,[120],`58`,`M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z`]},ki={prefix:`fas`,iconName:`play`,icon:[448,512,[9654],`f04b`,`M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z`]},Ai={prefix:`fas`,iconName:`dove`,icon:[512,512,[128330],`f4ba`,`M496 64c13.2 0 20.7 15.1 12.8 25.6L480 128 480 304c0 79.5-64.5 144-144 144l-112 0-46.3 46.3c-10.4 10.4-26.5 12.4-39.1 4.8L41.5 440.9c-17-10.2-15-35.5 3.4-42.9L160 352C23.8 311.1 7.5 169.8 22 95.7 25.6 77.9 45.3 71.4 61.3 80.2L320 224 320 144c0-44.2 35.8-80 80-80l96 0zm-96 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM182.5-9.6c12.4-13.7 33.3-8.9 42.5 7.1l56.4 98.3c-5.8 14.4-9.2 30.1-9.4 46.5L138.1 68c10.1-31.6 27-58.4 44.4-77.6z`]},ji={prefix:`fas`,iconName:`brain`,icon:[512,512,[129504],`f5dc`,`M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z`]},Mi={prefix:`fas`,iconName:`user`,icon:[448,512,[128100,62144,62470,`user-alt`,`user-large`],`f007`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z`]},Ni={prefix:`fas`,iconName:`bookmark`,icon:[384,512,[128278,61591],`f02e`,`M64 0C28.7 0 0 28.7 0 64L0 480c0 11.5 6.2 22.2 16.2 27.8s22.3 5.5 32.2-.4L192 421.3 335.5 507.4c9.9 5.9 22.2 6.1 32.2 .4S384 491.5 384 480l0-416c0-35.3-28.7-64-64-64L64 0z`]},Pi={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},Fi={prefix:`fas`,iconName:`moon`,icon:[512,512,[127769,9214],`f186`,`M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z`]},Ii={prefix:`fas`,iconName:`pen`,icon:[512,512,[128394],`f304`,`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`]},Li={prefix:`fas`,iconName:`phone`,icon:[512,512,[128222,128379],`f095`,`M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z`]},Ri={prefix:`fas`,iconName:`book-bookmark`,icon:[448,512,[],`e0bb`,`M96 512l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-66.7c18.6-6.6 32-24.4 32-45.3l0-288c0-26.5-21.5-48-48-48l-48 0 0 169.4c0 12.5-10.1 22.6-22.6 22.6-6 0-11.8-2.4-16-6.6L272 144 230.6 185.4c-4.2 4.2-10 6.6-16 6.6-12.5 0-22.6-10.1-22.6-22.6L192 0 96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96zM64 416c0-17.7 14.3-32 32-32l256 0 0 64-256 0c-17.7 0-32-14.3-32-32z`]},zi={prefix:`fas`,iconName:`chevron-down`,icon:[448,512,[],`f078`,`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`]},Bi={prefix:`fas`,iconName:`globe`,icon:[512,512,[127760],`f0ac`,`M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z`]},Vi={prefix:`fas`,iconName:`dharmachakra`,icon:[512,512,[9784],`f655`,`M337.8 205.7l48.6-42.5c13.8 19.3 23.4 41.9 27.4 66.2l-64.4 4.3c-2.4-10.1-6.4-19.5-11.6-28zm140.1 19.5c-5.3-38.8-20.6-74.5-43.2-104.3l.8-.7C449 108.4 449.7 87.6 437 75s-33.4-12-45.2 1.5l-.7 .8c-29.8-22.6-65.5-37.9-104.3-43.2l.1-1.1c1.2-17.9-13-33-30.9-33s-32.1 15.2-30.9 33l.1 1.1c-38.8 5.3-74.5 20.6-104.3 43.2l-.7-.8C108.4 63 87.6 62.3 75 75s-12 33.4 1.5 45.2l.8 .7c-22.6 29.8-37.9 65.5-43.2 104.3l-1.1-.1c-17.9-1.2-33 13-33 30.9s15.2 32.1 33 30.9l1.1-.1c5.3 38.8 20.6 74.5 43.2 104.3l-.8 .7C63 403.6 62.3 424.4 75 437s33.4 12 45.2-1.5l.7-.8c29.8 22.6 65.5 37.9 104.3 43.2l-.1 1.1c-1.2 17.9 13 33 30.9 33s32.1-15.2 30.9-33l-.1-1.1c38.8-5.3 74.5-20.6 104.3-43.2l.7 .8c11.8 13.5 32.5 14.2 45.2 1.5s12-33.4-1.5-45.2l-.8-.7c22.6-29.8 37.9-65.5 43.2-104.3l1.1 .1c17.9 1.2 33-13 33-30.9s-15.2-32.1-33-30.9l-1.1 .1zM163.2 125.6c19.3-13.8 41.9-23.4 66.2-27.5l4.3 64.4c-10 2.4-19.5 6.4-28 11.6l-42.5-48.6zm-65 103.8c4.1-24.4 13.7-46.9 27.5-66.2l48.6 42.5c-5.3 8.5-9.2 18-11.6 28l-64.4-4.3zm27.5 119.4c-13.8-19.3-23.4-41.9-27.5-66.2l64.4-4.3c2.4 10.1 6.4 19.5 11.6 28l-48.6 42.5zm103.8 65c-24.4-4.1-46.9-13.7-66.2-27.4l42.5-48.6c8.5 5.3 18 9.2 28 11.6l-4.3 64.4zm119.4-27.4c-19.3 13.8-41.9 23.4-66.2 27.4l-4.3-64.4c10-2.4 19.5-6.4 28-11.6l42.5 48.6zm65-103.8c-4.1 24.4-13.7 46.9-27.4 66.2l-48.6-42.5c5.3-8.6 9.2-18 11.6-28l64.4 4.3zm-65-156.9l-42.5 48.6c-8.6-5.3-18-9.2-28-11.6l4.3-64.4c24.4 4.1 46.9 13.7 66.2 27.5zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z`]},Hi={prefix:`fas`,iconName:`robot`,icon:[640,512,[129302],`f544`,`M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z`]},Ui={prefix:`fas`,iconName:`bolt`,icon:[448,512,[9889,`zap`],`f0e7`,`M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z`]},Wi={prefix:`fas`,iconName:`briefcase`,icon:[512,512,[128188],`f0b1`,`M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z`]},Gi={prefix:`fas`,iconName:`desktop`,icon:[512,512,[128421,61704,`desktop-alt`],`f390`,`M64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L96 320c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32z`]},Ki={prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]},qi={prefix:`fab`,iconName:`github`,icon:[512,512,[],`f09b`,`M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z`]},Ji={prefix:`fab`,iconName:`linkedin`,icon:[448,512,[],`f08c`,`M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z`]},Yi={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z`]},Xi={prefix:`fab`,iconName:`gitlab`,icon:[512,512,[],`f296`,`M504 204.6l-.7-1.8-69.7-181.8c-1.4-3.6-3.9-6.6-7.2-8.6-2.4-1.6-5.1-2.5-8-2.8s-5.7 .1-8.4 1.1-5.1 2.7-7.1 4.8c-1.9 2.1-3.3 4.7-4.1 7.4l-47 144-190.5 0-47.1-144c-.8-2.8-2.2-5.3-4.1-7.4-2-2.1-4.4-3.7-7.1-4.8-2.6-1-5.5-1.4-8.4-1.1s-5.6 1.2-8 2.8c-3.2 2-5.8 5.1-7.2 8.6L9.8 202.8 9 204.6c-10 26.2-11.3 55-3.5 82 7.7 26.9 24 50.7 46.4 67.6l.3 .2 .6 .4 106 79.5c38.5 29.1 66.7 50.3 84.6 63.9 3.7 1.9 8.3 4.3 13 4.3s9.3-2.4 13-4.3c17.9-13.5 46.1-34.9 84.6-63.9l106.7-79.9 .3-.3c22.4-16.9 38.7-40.6 45.6-67.5 8.6-27 7.4-55.8-2.6-82z`]},Zi={prefix:`fab`,iconName:`viber`,icon:[512,512,[],`f409`,`M444.3 49.9c-12.7-11.7-64.1-49-178.7-49.5 0 0-135.1-8.1-200.9 52.3-36.6 36.6-49.5 90.3-50.9 156.8s-3.1 191.1 117 224.9l.1 0-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM458.2 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9 .4-85.7 .4-85.7l0 0C43.4 372.7 49.4 266.6 50.5 211.1s11.6-101 42.6-131.6c55.7-50.5 170.4-43 170.4-43 96.9 .4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9 .6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4 .7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5 .9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9 .1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7 .5 133 51.4 133.7 139.2zM375.2 329l0 .2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8l.2 0c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1 .8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z`]},Qi={prefix:`fab`,iconName:`dev`,icon:[448,512,[],`f6cc`,`M120.1 208.3c-3.9-2.9-7.8-4.3-11.6-4.3l-17.4 0 0 104.5 17.4 0c3.9 0 7.8-1.4 11.6-4.3s5.8-7.3 5.8-13.1l0-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32L43.9 32C19.7 32 .1 51.6 0 75.8L0 436.2C.1 460.4 19.7 480 43.9 480l360.2 0c24.2 0 43.8-19.6 43.9-43.8l0-360.4C447.9 51.6 428.3 32 404.1 32zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3l-46.4 0 0-165.5 47.4 0c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7l-53.3 0 0 38.4 32.6 0 0 29.6-32.6 0 0 38.4 53.3 0 0 29.6-62.2 0c-11.2 .3-20.4-8.5-20.7-19.7l0-125.1c-.3-11.1 8.6-20.4 19.7-20.7l63.2 0 0 29.5zM358.5 317.8c-13.2 30.7-36.8 24.6-47.4 0l-38.5-144.8 32.6 0 29.7 113.7 29.6-113.7 32.6 0-38.5 144.8z`]},$i={prefix:`fab`,iconName:`whatsapp`,icon:[448,512,[],`f232`,`M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z`]},ea={prefix:`fab`,iconName:`twitter`,icon:[512,512,[],`f099`,`M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z`]};export{Li as A,gi as B,vi as C,Fi as D,wi as E,yi as F,Mi as I,Oi as L,Hi as M,Ci as N,bi as O,Ti as P,hi as R,Ai as S,Di as T,zi as _,Ji as a,Gi as b,$i as c,xi as d,Ri as f,Si as g,Wi as h,Xi as i,ki as j,Ii as k,Ki as l,ji as m,Yi as n,ea as o,Ni as p,qi as r,Zi as s,Qi as t,Ui as u,Pi as v,Bi as w,Vi as x,Ei as y,_i as z};