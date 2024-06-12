import{a as P,c as J,d as pe,e as fe,f as ve,g as we,h as ge,i as ye,j as G}from"./chunk-VUP574VM.js";import{$ as be,A as Ee,B as E,C as j,D as Ce,E as U,F as K,G as Q,H as Ae,I as Le,L as ke,M as xe,N as Te,O as Se,P as Re,Q as He,R as qe,S as Me,T as Oe,U as Ne,V as Ie,W as Pe,X as je,Y as Ue,Z as ze,_ as Xe,a as Be,aa as De,b as d,ba as w,ca as C,d as z,f as T,g as $e,i as X,j as A,k as We,l as m,m as V,n as S,o as B,p as Ye,q as Fe,r as D,s as $,t as _e,u as R,v as g,w as Z,x as H,y as ee,z as h}from"./chunk-EVDEOX5C.js";import"./chunk-AMFPQHTE.js";import{c as p}from"./chunk-RVK25XNW.js";p(),p(),p(),We();var q=(e,t)=>{h.hasClass("on")?(h.removeClass("on"),H.removeClass("close"),t?h.style="":w(h,"slideRightOut")):t?h.style="":w(h,"slideRightIn",()=>{h.addClass("on"),H.addClass("close")})},Je=()=>{let e=A(h,".inner");h.child(".tab")&&e.removeChild(h.child(".tab"));let t=document.createElement("ul"),s="active";t.className="tab",["contents","related","overview"].forEach(a=>{let o=h.child(".panel."+a);if(o.innerHTML.trim().length<1){a==="contents"&&X(U,"none");return}a==="contents"&&X(U,"");let n=document.createElement("li"),r=document.createElement("span"),i=document.createTextNode(o.getAttribute("data-title"));r.appendChild(i),n.appendChild(r),n.addClass(a+" item"),s?(o.addClass(s),n.addClass(s)):o.removeClass("active"),n.addEventListener("click",l=>{let c=l.currentTarget;c.hasClass("active")||(h.find(".tab .item").forEach(u=>{u.removeClass("active")}),h.find(".panel").forEach(u=>{u.removeClass("active")}),h.child(".panel."+c.className.replace(" item","")).addClass("active"),c.addClass("active"))}),t.appendChild(n),s=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),h.child(".panels").style.paddingTop=""):h.child(".panels").style.paddingTop=".625rem"},Ge=()=>{let e=r=>{let i=t[r];if(!i||i.hasClass("current"))return;d.each(".toc .active",c=>{c&&c.removeClass("active current")}),s.forEach(c=>{c&&c.removeClass("active")}),i.addClass("active current"),s[r]&&s[r].addClass("active");let l=i.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let c=d(l.child("a.toc-link").getAttribute("href"));c&&c.addClass("active")}l=l.parentNode}getComputedStyle(h).display!=="none"&&o.hasClass("active")&&C(o,i.offsetTop-o.offsetHeight/4)},t=d.all(".contents li");if(t.length<1)return;let s=[...t],a=null;s=s.map((r,i)=>{let l=r.child("a.toc-link"),c=d(decodeURI(l.getAttribute("href")));if(!c)return null;let u=c.child("a.anchor"),x=f=>{f.preventDefault();let I=d(decodeURI(f.currentTarget.getAttribute("href")));a=i,C(I,null,()=>{e(i),a=null})};return l.addEventListener("click",x),u&&u.addEventListener("click",f=>{x(f),fe(m.hostname+"/"+LOCAL.path+f.currentTarget.getAttribute("href"))}),c});let o=h.child(".contents.panel"),n=r=>{let i=0,l=r[i];if(l.boundingClientRect.top>0)return i=s.indexOf(l.target),i===0?0:i-1;for(;i<r.length;i++)if(r[i].boundingClientRect.top<=0)l=r[i];else return s.indexOf(l.target);return s.indexOf(l.target)};(()=>{let r=new IntersectionObserver(i=>{let l=n(i)+(B<0?1:0);a===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});s.forEach(i=>{i&&r.observe(i)})})()},te=()=>{C(0)},Ke=()=>{C(parseInt(String(T(_e))))},Qe=()=>{C(d("#comments"))},Ve=()=>{d.each(".menu .item:not(.title)",e=>{let t=e.child("a[href]"),s=e.parentNode.parentNode;if(!t)return;let a=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),o=!m.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),n=!t.onclick&&t.hostname===location.hostname&&(a||o);e.toggleClass("active",n),e.parentNode.child(".active")&&s.hasClass("dropdown")?s.removeClass("active").addClass("expand"):s.removeClass("expand")})};p();var y={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),R.setAttribute("style","display:block"),y.lock=!1},hide(e){m.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){y.lock||(m.loader.start&&w(R,0),document.body.addClass("loaded"),y.lock=!0)}};function Ze(){d.each(".overview .menu > .item",e=>{A(g,".menu").appendChild(e.cloneNode(!0))}),R.addEventListener("click",y.vanish),H.addEventListener("click",q),d(".dimmer").addEventListener("click",q),A(ee,".down").addEventListener("click",Ke),A(ee,".up").addEventListener("click",te),E||be(z(Z,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),je(E.child(".player")),Ue(E.child(".back-to-top")),ze(E.child(".chat")),Xe(E.child(".contents")),j.addEventListener("click",te),Ce.addEventListener("click",Qe),U.addEventListener("click",q),new IntersectionObserver(([e])=>{e.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([e])=>{e.isIntersecting?document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))}p(),p();var et=()=>{if(!d(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(s=>{s.target.hasClass("show")?e.unobserve(s.target):(s.isIntersecting||s.intersectionRatio>0)&&(s.target.addClass("show"),e.unobserve(s.target))})},{root:null,threshold:[.3]});d.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),d(".index.wrap .item:first-child").addClass("show"),d.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(s=>{t.addEventListener(s,()=>{d(".cards .item.active")&&d(".cards .item.active").removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(s=>{t.addEventListener(s,()=>{t.removeClass("active")},{passive:!0})})})};p(),p();var v=e=>{let t=d(".theme .ic");e==="dark"?($.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):($.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},tt=()=>{m.auto_dark.enable&&(new Date().getHours()>=m.auto_dark.start||new Date().getHours()<=m.auto_dark.end?v("dark"):v())},se=e=>{$.getAttribute("data-theme")==="dark"&&(e="#222"),d('meta[name="theme-color"]').setAttribute("content",e)},st=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?v("dark"):v()});let e=P.get("theme");e?v(e):m.darkmode&&v("dark")},ae=()=>{xe(T(g)),Te(T(Z)),Se(Q+T(d("#waves"))),Le!==window.innerWidth&&q(null,1),Re(window.innerHeight),He(window.innerWidth)},at=()=>{let e=window.innerHeight,t=Be(),s=t>e?t-e:document.body.scrollHeight-e,a=window.scrollY>Q,o=window.scrollY>0;se(a?"#FFF":"#222"),g.toggleClass("show",a),E.toggleClass("affix",o),Ee.toggleClass("affix",o),h.toggleClass("affix",window.scrollY>Ae&&document.body.offsetWidth>991),typeof S.y>"u"&&(S.y=window.scrollY),qe(S.y-window.scrollY),B<0?(g.removeClass("up"),g.toggleClass("down",a)):B>0&&(g.removeClass("down"),g.toggleClass("up",a)),S.y=window.scrollY;let n=Math.round(Math.min(100*window.scrollY/s,100))+"%";j.child("span").innerText!==n&&(j.child("span").innerText=n),(d("#sidebar").hasClass("affix")||d("#sidebar").hasClass("on"))&&$e(d(".percent"),n)},it=()=>{let e=d('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",V+m.favicon.hidden),document.title=LOCAL.favicon.hide,m.loader.switch&&y.show(),clearTimeout(Fe);break;case"visible":e.setAttribute("href",V+m.favicon.normal),document.title=LOCAL.favicon.show,m.loader.switch&&y.hide(1e3),Me(setTimeout(()=>{document.title=Ye},2e3));break}},{passive:!0})};p(),p(),p(),p();var ie=typeof window>"u",ot=!ie&&"loading"in HTMLImageElement.prototype,nt=!ie&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function rt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function lt(e,t){let s;return function(...a){s&&clearTimeout(s),s=setTimeout(()=>{s=void 0,e(...a)},t)}}var ct=32,dt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ht=Math.PI,Mt=ht*2;function ut(e='img[loading="lazy"]',{hash:t=!0,hashType:s="blurhash",placeholderSize:a=ct,updateSizesOnResize:o=!1,onImageLoad:n}={}){let r=new Set;for(let i of rt(e)){let l=W(i,{updateOnResize:o});if(o&&l&&r.add(l),!i.dataset.src&&!i.dataset.srcset)continue;if(nt||!ot){ne(i),F(i),Y(i);continue}if(i.src||(i.src=dt),i.complete&&i.naturalWidth>0){oe(i,n);continue}let c=()=>oe(i,n);i.addEventListener("load",c,{once:!0}),r.add(()=>i.removeEventListener("load",c))}return()=>{for(let i of r)i();r.clear()}}function oe(e,t){let s=new Image,{srcset:a,src:o,sizes:n}=e.dataset;if(n==="auto"){let r=re(e);r&&(s.sizes=`${r}px`)}else e.sizes&&(s.sizes=e.sizes);a&&(s.srcset=a),o&&(s.src=o),s.addEventListener("load",()=>{ne(e),F(e),Y(e),t?.(e)})}var M=new WeakMap;function W(e,t){if(e.dataset.sizes!=="auto")return;let s=re(e);if(s&&(e.sizes=`${s}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(a=>W(a,{skipChildren:!0})),t?.updateOnResize){if(!M.has(e)){let a=lt(()=>W(e),500),o=new ResizeObserver(a);M.set(e,o),o.observe(e)}return()=>{let a=M.get(e);a&&(a.disconnect(),M.delete(e))}}}function Y(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function F(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ne(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(F),[...t.querySelectorAll("source[data-src]")].forEach(Y))}function re(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var mt=()=>{J(),h.hasClass("on")&&w(h,0,()=>{h.removeClass("on"),H.removeClass("close")});let e=d("#main");e.innerHTML="",e.appendChild(R.lastChild.cloneNode(!0)),C(0)},le=e=>{Oe(0),Ne(window.location.href),G("katex"),ye("copy_tex"),G("mermaid");let t=new IntersectionObserver(function(s,a){s.forEach(o=>{if(o.isIntersecting){let n=o.target;n.style.backgroundImage=`url("${n.getAttribute("data-background-image")}")`,n.removeAttribute("data-background-image"),a.unobserve(n)}})},{root:null,threshold:.2});if(document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&d.each("script[data-pjax]",ge),Pe(document.title),ae(),Ve(),Je(),Ge(),LOCAL.ispost){import("./post-X4WJK443.js").then(({postBeauty:a})=>{a()});let s=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&s.disconnect()})},{root:null,threshold:.2});s.observe(d("#copyright"))}ut(),ve(),y.hide(500),setTimeout(()=>{pe()},500),et()};p();function b(e,t,s){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,s):t.call(s,e,0,[e])}var ce=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function _(e,t,s,a){ce(t,o=>{b(e,n=>{n.addEventListener(o,s,a)})})}function L(e,t,s={}){ce(t,a=>{let o=new CustomEvent(a,{bubbles:!0,cancelable:!0,...s});b(e,n=>{n.dispatchEvent(o)})})}function de(e){let t=e.text||e.textContent||e.innerHTML||"",s=e.src||"",a=e.parentNode||document.querySelector("head")||document.documentElement,o=document.createElement("script");return t.match("document.write")?!1:(o.type="text/javascript",o.id=e.id,s!==""&&(o.src=s,o.async=!1),t!==""&&o.appendChild(document.createTextNode(t)),a.appendChild(o),(a instanceof HTMLHeadElement||a instanceof HTMLBodyElement)&&a.contains(o)&&a.removeChild(o),!0)}function pt(e){e.tagName.toLowerCase()==="script"&&de(e),b(e.querySelectorAll("script"),t=>{let s=t;(!s.type||s.type.toLowerCase()==="text/javascript")&&(s.parentNode&&s.parentNode.removeChild(s),de(s))})}function ft(e,t,s,a=document){e.forEach(o=>{b(a.querySelectorAll(o),t,s)})}var O=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function he(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function vt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function ue(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let s=t.attributes;for(let a=0;a<s.length;a++)e.attributes.setNamedItem(s[a].cloneNode())}this.onSwitch()}function wt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:s={},switchesOptions:a={},history:o=!0,scrollTo:n=0,scrollRestoration:r=!0,cacheBust:i=!0,timeout:l=0,currentUrlFullReload:c=!1}={}){let u={elements:e,selectors:t,switches:s,switchesOptions:a,history:o,scrollTo:n,scrollRestoration:r,cacheBust:i,timeout:l,currentUrlFullReload:c};return u.switches.head||(u.switches.head=ue),u.switches.body||(u.switches.body=ue),u}var N="data-pjax-state";function me(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let s={...this.options},a=gt(e,t);if(a){e.setAttribute(N,a);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(N,"reload"),this.reload();return}e.setAttribute(N,"load"),s.triggerElement=e,this.loadUrl(e.href,s)}function gt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function yt(e){e.setAttribute(N,""),_(e,"click",t=>me.call(this,e,t)),_(e,"keyup",t=>{let s=t;s.keyCode===13&&me.call(this,e,s)})}function bt(e,t,s,a){if(a={...a||this.options},a.request=t,e===!1){L(document,"pjax:complete pjax:error",a);return}let o=window.history.state||{};window.history.replaceState({url:o.url||window.location.href,title:o.title||document.title,uid:o.uid||O(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let n=s;t.responseURL?s!==t.responseURL&&(s=t.responseURL):t.getResponseHeader("X-PJAX-URL")?s=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(s=t.getResponseHeader("X-XHR-Redirected-To"));let r=document.createElement("a");r.href=n;let i=r.hash;r.href=s,i&&!r.hash&&(r.hash=i,s=r.href),this.state.href=s,this.state.options=a;try{this.loadContent(e,a)}catch(l){return L(document,"pjax:error",a),console.error("Pjax switch fail: ",l),this.latestChance(s)}}function Et(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Ct(e,t,s){let a=new RegExp("([?&])"+t+"=.*?(&|$)","i"),o=e.indexOf("?")!==-1?"&":"?";return e.match(a)?e.replace(a,"$1"+t+"="+s+"$2"):e+o+t+"="+s}function At(e,t={},s){let a=t.requestOptions||{},o=(a.requestMethod||"GET").toUpperCase(),n=a.requestParams||null,r=null,i=new XMLHttpRequest,l=t.timeout;if(i.onreadystatechange=()=>{i.readyState===4&&(i.status===200?s(i.responseText,i,e,t):i.status!==0&&s(null,i,e,t))},i.onerror=c=>{console.error(c),s(null,i,e,t)},i.ontimeout=()=>{s(null,i,e,t)},n&&n.length){let c=n.map(u=>u.name+"="+u.value).join("&");switch(o){case"GET":e=e.split("?")[0],e+="?"+c;break;case"POST":r=c;break}}return t.cacheBust&&(e=Ct(e,"t",Date.now())),i.open(o,e,!0),i.timeout=l,i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("X-PJAX","true"),i.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),i.send(r),i}function Lt(e,t,s,a,o,n){let r=[];s.forEach(i=>{let l=a.querySelectorAll(i),c=o.querySelectorAll(i);if(l.length!==c.length)throw new Error(`DOM doesn't look the same on new loaded page: '${i}' - new ${l.length}, old ${c.length}`);b(l,(u,x)=>{let f=c[x],I=e[i]?e[i].bind(this,f,u,n,t[i]):he.bind(this,f,u,n);r.push(I)},this)},this),this.state.numPendingSwitches=r.length,r.forEach(i=>{i()})}function kt(e,t,s){for(let a of t){let o=e.querySelectorAll(a);for(let n=0;n<o.length;n++)if(o[n].contains(s))return!0}return!1}var k=class{constructor(e){this.state={numPendingSwitches:0,href:null,options:null},this.options=wt(e),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=O(),this.parseDOM(document),_(window,"popstate",t=>{let s=t;if(s.state){let a={...this.options};a.url=s.state.url,a.title=s.state.title,a.history=!1,a.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?a.backward=!0:a.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,a)}})}getElements(e){return e.querySelectorAll(this.options.elements)}parseDOM(e){b(this.getElements(e),Et,this)}refresh(e){this.parseDOM(e||document)}reload(){window.location.reload()}forEachSelectors(e,t,s){return ft.bind(this)(this.options.selectors,e,t,s)}switchSelectors(e,t,s,a){return Lt.bind(this)(this.options.switches,this.options.switchesOptions,e,t,s,a)}latestChance(e){window.location=e}onSwitch(){L(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(e,t){if(typeof e!="string"){L(document,"pjax:complete pjax:error",t);return}let s=document.implementation.createHTMLDocument("pjax"),a=/<html[^>]+>/gi,o=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,n=e.match(a);if(n&&n.length&&(n=n[0].match(o),n.length&&(n.shift(),n.forEach(r=>{let i=r.trim().split("=");i.length===1?s.documentElement.setAttribute(i[0],"true"):s.documentElement.setAttribute(i[0],i[1].slice(1,-1))}))),s.documentElement.innerHTML=e,document.activeElement&&kt(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,t)}loadUrl(e,t){t=typeof t=="object"?{...this.options,...t}:{...this.options},this.abortRequest(this.request),L(document,"pjax:send",t),this.request=this.doRequest(e,t,this.handleResponse.bind(this))}afterAllSwitches(){var e,t,s;this.options.selectors.forEach(o=>{b(document.querySelectorAll(o),n=>{pt(n)})});let a=this.state;if(!((e=a.options)===null||e===void 0)&&e.history&&(window.history.state||(this.lastUid=this.maxUid=O(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=O(),window.history.pushState({url:a.href,title:a.options.title,uid:this.maxUid,scrollPos:[0,0]},a.options.title,a.href)),this.forEachSelectors(o=>{this.parseDOM(o)},this),L(document,"pjax:complete pjax:success",a.options),!((t=a.options)===null||t===void 0)&&t.history){let o=document.createElement("a");if(o.href=this.state.href,o.hash){let n=o.hash.slice(1);n=decodeURIComponent(n);let r=0,i=document.getElementById(n)||document.getElementsByName(n)[0];if(i&&i.offsetParent)do r+=i.offsetTop,i=i.offsetParent;while(i);window.scrollTo(0,r)}else a.options.scrollTo!==!1&&(Array.isArray(a.options.scrollTo)?window.scrollTo(a.options.scrollTo[0],a.options.scrollTo[1]):window.scrollTo(0,a.options.scrollTo))}else!((s=a.options)===null||s===void 0)&&s.scrollRestoration&&a.options.scrollPos&&window.scrollTo(a.options.scrollPos[0],a.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(e){e&&e.readyState<4&&(e.onreadystatechange=()=>{},e.abort())}};k.prototype.attachLink=yt,k.prototype.doRequest=At,k.prototype.handleResponse=bt,k.switches={innerHTML:vt,outerHTML:he},p();function xt(){function e(){let t,s=A(d(".theme"),".ic"),a=z(D,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),o=()=>{w(a,{delay:2500,opacity:0},()=>{D.removeChild(a)})};s.hasClass("i-sun")?t=()=>{a.addClass("dark"),v("dark"),P.set("theme","dark"),o()}:(a.addClass("dark"),t=()=>{a.removeClass("dark"),v(),P.set("theme","light"),o()}),w(a,1,()=>{setTimeout(t,210)},()=>{X(a,"block")})}A(d("#rightNav"),".theme .ic").addEventListener("click",e)}var Tt=()=>{xt(),Ze(),Ie(new k({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),m.quicklink.ignores=LOCAL.ignores,import("./quicklink-EMRBDLC3.js").then(({listen:e})=>{e(m.quicklink)}),tt(),it(),st(),d("li.item.search > i").addEventListener("click",()=>{m.search!==null&&(K||De(z(D,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-J2ZNRTVN.js").then(({algoliaSearch:e})=>{e(ke)}),d.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",w(K,"shrinkIn",()=>{d(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-5KJ56XSX.js").then(e=>{e.default(m.fireworks)}),window.addEventListener("scroll",at,{passive:!0}),window.addEventListener("resize",ae,{passive:!0}),window.addEventListener("pjax:send",mt,{passive:!0}),window.addEventListener("pjax:success",le,{passive:!0}),window.addEventListener("beforeunload",()=>{J()}),le(1)};we(),window.addEventListener("DOMContentLoaded",Tt,{passive:!0}),console.log("%c Theme.ShokaX v"+m.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");/*! For license information please see siteInit.js.LEGAL.txt */
