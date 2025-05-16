try{let t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9bdedae2-1a5f-451a-bd52-2f8f7329f28a",t._sentryDebugIdIdentifier="sentry-dbid-9bdedae2-1a5f-451a-bd52-2f8f7329f28a")}catch(t){}"use strict";exports.id=2668,exports.ids=[2668],exports.modules={10369:(t,e,i)=>{i.d(e,{lB:()=>d});let s=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],n=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function a(t){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${l(t)}></audio>
    </slot>
    <slot></slot>
  `}function r(t){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${l(t)}></video>
    </slot>
    <slot></slot>
  `}function o(t,{tag:e,is:i}){let o=globalThis.document?.createElement?.(e,{is:i}),l=o?function(t){let e=[];for(let i=Object.getPrototypeOf(t);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let t=Object.getOwnPropertyNames(i);e.push(...t)}return e}(o):[];return class d extends t{static getTemplateHTML=e.endsWith("audio")?a:r;static shadowRootOptions={mode:"open"};static Events=s;static #t=!1;static get observedAttributes(){return d.#e(),[...o?.constructor?.observedAttributes??[],...n]}static #e(){if(this.#t)return;this.#t=!0;let t=new Set(this.observedAttributes);for(let e of(t.delete("muted"),l))if(!(e in this.prototype))if("function"==typeof o[e])this.prototype[e]=function(...t){return this.#i(),(()=>{if(this.call)return this.call(e,...t);let i=this.nativeEl?.[e];return i?.apply(this.nativeEl,t)})()};else{let i={get(){this.#i();let i=e.toLowerCase();if(t.has(i)){let t=this.getAttribute(i);return null!==t&&(""===t||t)}return this.get?.(e)??this.nativeEl?.[e]}};e!==e.toUpperCase()&&(i.set=function(i){this.#i();let s=e.toLowerCase();return t.has(s)?void(!0===i||!1===i||null==i?this.toggleAttribute(s,!!i):this.setAttribute(s,i)):this.set?void this.set(e,i):void(this.nativeEl&&(this.nativeEl[e]=i))}),Object.defineProperty(this.prototype,e,i)}}#s=!1;#n=null;#a=new Map;#r;get;set;call;get nativeEl(){return this.#i(),this.#n??this.querySelector(":scope > [slot=media]")??this.querySelector(e)??this.shadowRoot?.querySelector(e)??null}set nativeEl(t){this.#n=t}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(t){this.toggleAttribute("muted",t)}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",`${t}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(t){this.setAttribute("preload",`${t}`)}#i(){this.#s||(this.#s=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let t=function(t){let e={};for(let i of t)e[i.name]=i.value;return e}(this.attributes);i&&(t.is=i),e&&(t.part=e),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}for(let t of(this.nativeEl.muted=this.hasAttribute("muted"),l))this.#o(t);for(let t of(this.#r=new MutationObserver(this.#l.bind(this)),this.shadowRoot.addEventListener("slotchange",this),this.#d(),this.constructor.Events))this.shadowRoot?.addEventListener(t,this,!0)}handleEvent(t){if("slotchange"===t.type)return void this.#d();t.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(t.type,{detail:t.detail}))}#d(){let t=new Map(this.#a),e=this.shadowRoot?.querySelector("slot:not([name])");(e?.assignedElements({flatten:!0}).filter(t=>["track","source"].includes(t.localName))).forEach(e=>{t.delete(e);let i=this.#a.get(e);i||(i=e.cloneNode(),this.#a.set(e,i),this.#r?.observe(e,{attributes:!0})),this.nativeEl?.append(i),this.#h(i)}),t.forEach((t,e)=>{t.remove(),this.#a.delete(e)})}#l(t){for(let e of t)if("attributes"===e.type){let{target:t,attributeName:i}=e,s=this.#a.get(t);s&&i&&(s.setAttribute(i,t.getAttribute(i)??""),this.#h(s))}}#h(t){t&&"track"===t.localName&&t.default&&("chapters"===t.kind||"metadata"===t.kind)&&"disabled"===t.track.mode&&(t.track.mode="hidden")}#o(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(t,e,i){this.#i(),this.#u(t,e,i)}#u(t,e,i){!["id","class"].includes(t)&&(!d.observedAttributes.includes(t)&&this.constructor.observedAttributes.includes(t)||(null===i?this.nativeEl?.removeAttribute(t):this.nativeEl?.getAttribute(t)!==i&&this.nativeEl?.setAttribute(t,i)))}connectedCallback(){this.#i()}}}function l(t){let e="";for(let i in t){if(!n.includes(i))continue;let s=t[i];""===s?e+=` ${i}`:e+=` ${i}="${s}"`}return e}let d=o(globalThis.HTMLElement??class{},{tag:"video"});o(globalThis.HTMLElement??class{},{tag:"audio"})},52668:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(27490),n=i(10369);class a extends n.lB{static shadowRootOptions={...n.lB.shadowRootOptions};static getTemplateHTML=t=>{let{src:e,...i}=t;return n.lB.getTemplateHTML(i)};#c;attributeChangedCallback(t,e,i){"src"!==t&&super.attributeChangedCallback(t,e,i),"src"===t&&e!=i&&this.load()}async load(){if(this.#c)this.api.attachSource(this.src);else{this.#c=!0;let t=await i.e(3603).then(i.bind(i,53603));this.api=t.MediaPlayer().create(),this.api.initialize(this.nativeEl,this.src,this.autoplay)}}}globalThis.customElements&&!globalThis.customElements.get("dash-video")&&globalThis.customElements.define("dash-video",a);var r=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),o={className:"class",htmlFor:"for"},l=function({react:t,tagName:e,elementClass:i,events:s,displayName:n,toAttributeName:a=function(t){return t.toLowerCase()},toAttributeValue:l=function(t){return"boolean"==typeof t?t?"":void 0:"function"==typeof t?void 0:"object"!=typeof t||null===t?t:void 0}}){let d=Number.parseInt(t.version)>=19,h=t.forwardRef((s,n)=>{var h,u;let c=t.useRef(null);t.useRef(new Map);let p={},f={},b={},g={};for(let[t,e]of Object.entries(s)){if(r.has(t)){b[t]=e;continue}let s=a(o[t]??t);if(t in i.prototype&&!(t in((null==(h=globalThis.HTMLElement)?void 0:h.prototype)??{}))&&!(null==(u=i.observedAttributes)?void 0:u.some(t=>t===s))){g[t]=e;continue}if(t.startsWith("on")){p[t]=e;continue}let n=l(e);s&&null!=n&&(f[s]=String(n),d||(b[s]=n)),s&&d&&(b[s]=e)}if((null==i?void 0:i.getTemplateHTML)&&(null==i?void 0:i.shadowRootOptions)){let{mode:e,delegatesFocus:n}=i.shadowRootOptions;b.children=[t.createElement("template",{shadowrootmode:e,shadowrootdelegatesfocus:n,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(f,s)}}),b.children]}return t.createElement(e,{...b,ref:t.useCallback(t=>{c.current=t,"function"==typeof n?n(t):null!==n&&(n.current=t)},[n])})});return h.displayName=n??i.name,h}({react:s,tagName:"dash-video",elementClass:a})}};
//# sourceMappingURL=2668.js.map