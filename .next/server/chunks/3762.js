try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="18a83478-3ea9-49c7-8f6a-17a4c0c85a08",e._sentryDebugIdIdentifier="sentry-dbid-18a83478-3ea9-49c7-8f6a-17a4c0c85a08")}catch(e){}"use strict";exports.id=3762,exports.ids=[3762],exports.modules={23762:(e,t,i)=>{let a,r,s,n,o;i.r(t),i.d(t,{default:()=>ue});var l,d,u,h,c,m,p,v,E,b,g,f,A,y,k,w,I,_,T,S,C,L,M,D,R,x,N,O,U,P,W,H,B,V,$,F,G,K,q,Y,j,Q,Z,z,X,J,ee,et,ei,ea,er,es,en,eo,el,ed,eu,eh,ec,em,ep,ev,eE,eb,eg,ef,eA,ey,ek,ew,eI,e_,eT,eS,eC,eL,eM,eD,eR,ex,eN,eO,eU,eP,eW,eH,eB,eV,e$,eF,eG,eK,eq,eY,ej,eQ,eZ,ez,eX,eJ,e0,e1,e2,e3,e5,e4,e7,e8,e6,e9,te,tt,ti,ta,tr,ts,tn,to,tl,td,tu,th,tc,tm,tp,tv,tE,tb,tg,tf,tA,ty,tk,tw,tI,t_,tT,tS,tC,tL,tM,tD,tR,tx,tN,tO,tU,tP,tW,tH,tB,tV,t$,tF,tG,tK,tq,tY,tj,tQ,tZ,tz,tX,tJ,t0,t1,t2,t3,t5,t4,t7,t8,t6,t9,ie,it,ii,ia,ir,is,io,il,id,iu,ih,ic,im,ip,iv,iE,ib,ig,iA,iy,ik,iw,iI,i_,iT,iS,iC,iL,iM,iD,iR,ix,iN,iO,iU,iP,iW,iH,iB,iV,i$,iF,iG,iK,iq,iY,ij,iQ,iZ,iz,iX,iJ,i0,i1,i2,i3,i5,i4,i7,i8,i6,i9,ae=i(49431),at=i(27490);let ai={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},aa={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},ar={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},as=Object.entries(ar),an=as.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),ao=as.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(ao).reduce((e,[t,i])=>{let a=an[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let al=Object.entries(an).reduce((e,[t,i])=>{let a=ao[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),ad={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},au={DISABLED:"disabled",SHOWING:"showing"},ah={MOUSE:"mouse",TOUCH:"touch"},ac={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},am={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ap={FULLSCREEN:"fullscreen"};function av(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function aE(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function ab(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ag(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function af(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function aA(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let ay=e=>new Promise(t=>setTimeout(t,e)),ak=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],aw=(e,t)=>{let i=1===e?ak[t].singular:ak[t].plural;return`${e} ${i}`},aI=e=>{if(!af(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&aw(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function a_(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),s=Math.floor(e/3600),n=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(s=r=a="0"),r=(((s=s>0||o>0?s+":":"")||n>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+s+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let aT={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."},aS={en:aT},aC=(null==(d=null==(l=globalThis.navigator)?void 0:l.language)?void 0:d.split("-")[0])||"en",aL=e=>{aC=e},aM=(e,t={})=>{var i;return((null==(i=aS[aC])?void 0:i[e])||aT[e]).replace(/\{(\w+)\}/g,(e,i)=>void 0!==t[i]?String(t[i]):`{${i}}`)};class aD{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class aR extends aD{}class ax extends aR{constructor(){super(...arguments),this.role=null}}class aN{observe(){}unobserve(){}disconnect(){}}let aO={createElement:function(){return new aU.HTMLElement},createElementNS:function(){return new aU.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},aU={ResizeObserver:aN,document:aO,Node:aR,Element:ax,HTMLElement:class extends ax{constructor(){super(...arguments),this.innerHTML=""}get content(){return new aU.DocumentFragment}},DocumentFragment:class extends aD{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},aP="undefined"==typeof window||void 0===window.customElements,aW=Object.keys(aU).every(e=>e in globalThis),aH=aP&&!aW?aU:globalThis,aB=aP&&!aW?aO:globalThis.document,aV=new WeakMap,a$=e=>{let t=aV.get(e);return t||aV.set(e,t=new Set),t},aF=new aH.ResizeObserver(e=>{for(let t of e)for(let e of a$(t.target))e(t)});function aG(e,t){a$(e).add(t),aF.observe(e)}function aK(e,t){let i=a$(e);i.delete(t),i.size||aF.unobserve(e)}function aq(e){var t;return null!=(t=aY(e))?t:aX(e,"media-controller")}function aY(e){var t;let{MEDIA_CONTROLLER:i}=aa,a=e.getAttribute(i);if(a)return null==(t=a0(e))?void 0:t.getElementById(a)}let aj=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},aQ=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},aZ=(e,t)=>aQ(e,t)[0],az=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||az(e,t.getRootNode().host)),aX=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||aX(e.getRootNode().host,t)};function aJ(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=aJ(i.shadowRoot))?t:i:null}function a0(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function a1(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function a2(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||a3(e,t)}function a3(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],s=null==r?void 0:r[r.length-1];return(null==s?void 0:s.sheet)?(null==s||s.sheet.insertRule(`${t}{}`,s.sheet.cssRules.length),null==(a=s.sheet.cssRules)?void 0:a[s.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function a5(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function a4(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}a5(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function a7(e,t){return e.hasAttribute(t)}function a8(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}a7(e,t)!=i&&e.toggleAttribute(t,i)}function a6(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function a9(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;a6(e,t,void 0)!==a&&e.setAttribute(t,a)}var re=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rt=(e,t,i)=>(re(e,t,"read from private field"),i?i.call(e):t.get(e)),ri=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ra=(e,t,i,a)=>(re(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rr=aB.createElement("template");rr.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class rs extends aH.HTMLElement{constructor(e={}){if(super(),ri(this,u,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=rr.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=aB.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[aa.MEDIA_CONTROLLER,an.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===aa.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rt(this,u))?void 0:a.unassociateElement)||r.call(a,this),ra(this,u,null)),i&&this.isConnected&&(ra(this,u,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=rt(this,u))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ra(this,u,function(e){var t;let i=e.getAttribute(aa.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aX(e,"media-controller")}(this)),this.getAttribute(aa.MEDIA_CONTROLLER)&&(null==(t=null==(e=rt(this,u))?void 0:e.associateElement)||t.call(e,this)),null==(i=rt(this,u))||i.addEventListener("pointerdown",this),null==(a=rt(this,u))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(aa.MEDIA_CONTROLLER)&&(null==(t=null==(e=rt(this,u))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=rt(this,u))||i.removeEventListener("pointerdown",this),null==(a=rt(this,u))||a.removeEventListener("click",this),ra(this,u,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:s,height:n}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>s||l>n||0===s&&0===n)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===ah.TOUCH)return void this.handleTap(e);if(d===ah.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return a7(this,an.MEDIA_PAUSED)}set mediaPaused(e){a8(this,an.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?ai.MEDIA_PLAY_REQUEST:ai.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aH.CustomEvent(t,{composed:!0,bubbles:!0}))}}u=new WeakMap,aH.customElements.get("media-gesture-receiver")||aH.customElements.define("media-gesture-receiver",rs);var rn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ro=(e,t,i)=>(rn(e,t,"read from private field"),i?i.call(e):t.get(e)),rl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rd=(e,t,i,a)=>(rn(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ru=(e,t,i)=>(rn(e,t,"access private method"),i);let rh={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},rc=aB.createElement("template");rc.innerHTML=`
  <style>
    
    :host([${an.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${rh.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${rh.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${rh.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${rh.AUDIO}])[${rh.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${rh.AUDIO}])[${rh.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${rh.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${rh.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${rh.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${rh.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${rh.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: var(--media-control-transition-in, opacity 0.25s);
    }

    
    :host([${rh.USER_INACTIVE}]:not([${an.MEDIA_PAUSED}]):not([${an.MEDIA_IS_AIRPLAYING}]):not([${an.MEDIA_IS_CASTING}]):not([${rh.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${rh.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: var(--media-control-transition-out, opacity 1s);
    }

    :host([${rh.USER_INACTIVE}]:not([${rh.NO_AUTOHIDE}]):not([${an.MEDIA_PAUSED}]):not([${an.MEDIA_IS_CASTING}]):not([${rh.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    :host([${rh.USER_INACTIVE}][${rh.AUTOHIDE_OVER_CONTROLS}]:not([${rh.NO_AUTOHIDE}]):not([${an.MEDIA_PAUSED}]):not([${an.MEDIA_IS_CASTING}]):not([${rh.AUDIO}])) * {
     --media-cursor: none;
     cursor: none;
    }


    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${rh.AUDIO}])[${an.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;let rm=Object.values(an);function rp(e,t){var i,a,r;if(!e.isConnected)return;let s=Object.fromEntries((null!=(i=e.getAttribute(rh.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),n=(a=s,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(s).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(ao.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(ao.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class rv extends aH.HTMLElement{constructor(){super(),rl(this,E),rl(this,A),rl(this,k),rl(this,I),rl(this,T),rl(this,C),rl(this,h,0),rl(this,c,null),rl(this,m,null),rl(this,p,void 0),this.breakpointsComputed=!1,rl(this,v,new MutationObserver(ru(this,E,b).bind(this))),rl(this,g,!1),rl(this,f,e=>{ro(this,g)||(setTimeout(()=>{!function(e){rp(e.target,e.contentRect.width)}(e),rd(this,g,!1)},0),rd(this,g,!0))}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(rc.content.cloneNode(!0)));let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){ro(this,c)&&this.mediaUnsetCallback(ro(this,c));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[rh.AUTOHIDE,rh.GESTURES_DISABLED].concat(rm).filter(e=>![an.MEDIA_RENDITION_LIST,an.MEDIA_AUDIO_TRACK_LIST,an.MEDIA_CHAPTERS_CUES,an.MEDIA_WIDTH,an.MEDIA_HEIGHT,an.MEDIA_ERROR,an.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==rh.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(rd(this,c,e),e.localName.includes("-")&&await aH.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ro(this,v).observe(this,{childList:!0,subtree:!0}),aG(this,ro(this,f));let t=null!=this.getAttribute(rh.AUDIO)?aM("audio player"):aM("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(rh.USER_INACTIVE,""),rp(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=aH.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;ro(this,v).disconnect(),aK(this,ro(this,f)),this.media&&this.mediaUnsetCallback(this.media),null==(e=aH.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){rd(this,c,null)}handleEvent(e){switch(e.type){case"pointerdown":rd(this,h,e.timeStamp);break;case"pointermove":ru(this,A,y).call(this,e);break;case"pointerup":ru(this,k,w).call(this,e);break;case"mouseleave":ru(this,I,_).call(this);break;case"mouseup":this.removeAttribute(rh.KEYBOARD_CONTROL);break;case"keyup":ru(this,C,L).call(this),this.setAttribute(rh.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);rd(this,p,isNaN(t)?0:t)}get autohide(){return(void 0===ro(this,p)?2:ro(this,p)).toString()}get breakpoints(){return a6(this,rh.BREAKPOINTS)}set breakpoints(e){a9(this,rh.BREAKPOINTS,e)}get audio(){return a7(this,rh.AUDIO)}set audio(e){a8(this,rh.AUDIO,e)}get gesturesDisabled(){return a7(this,rh.GESTURES_DISABLED)}set gesturesDisabled(e){a8(this,rh.GESTURES_DISABLED,e)}get keyboardControl(){return a7(this,rh.KEYBOARD_CONTROL)}set keyboardControl(e){a8(this,rh.KEYBOARD_CONTROL,e)}get noAutohide(){return a7(this,rh.NO_AUTOHIDE)}set noAutohide(e){a8(this,rh.NO_AUTOHIDE,e)}get autohideOverControls(){return a7(this,rh.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){a8(this,rh.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return a7(this,rh.USER_INACTIVE)}set userInteractive(e){a8(this,rh.USER_INACTIVE,e)}}h=new WeakMap,c=new WeakMap,m=new WeakMap,p=new WeakMap,v=new WeakMap,E=new WeakSet,b=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},g=new WeakMap,f=new WeakMap,A=new WeakSet,y=function(e){if("mouse"!==e.pointerType&&e.timeStamp-ro(this,h)<250)return;ru(this,T,S).call(this),clearTimeout(ro(this,m));let t=this.hasAttribute(rh.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&ru(this,C,L).call(this)},k=new WeakSet,w=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(rh.USER_INACTIVE);[this,this.media].includes(e.target)&&t?ru(this,I,_).call(this):ru(this,C,L).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&ru(this,C,L).call(this)},I=new WeakSet,_=function(){if(0>ro(this,p)||this.hasAttribute(rh.USER_INACTIVE))return;this.setAttribute(rh.USER_INACTIVE,"");let e=new aH.CustomEvent(ao.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},T=new WeakSet,S=function(){if(!this.hasAttribute(rh.USER_INACTIVE))return;this.removeAttribute(rh.USER_INACTIVE);let e=new aH.CustomEvent(ao.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},C=new WeakSet,L=function(){ru(this,T,S).call(this),clearTimeout(ro(this,m));let e=parseInt(this.autohide);e<0||rd(this,m,setTimeout(()=>{ru(this,I,_).call(this)},1e3*e))},aH.customElements.get("media-container")||aH.customElements.define("media-container",rv);var rE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rb=(e,t,i)=>(rE(e,t,"read from private field"),i?i.call(e):t.get(e)),rg=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rf=(e,t,i,a)=>(rE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rA{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){rg(this,N),rg(this,M,void 0),rg(this,D,void 0),rg(this,R,void 0),rg(this,x,new Set),rf(this,M,e),rf(this,D,t),rf(this,R,new Set(i))}[Symbol.iterator](){return rb(this,N,O).values()}get length(){return rb(this,N,O).size}get value(){var e;return null!=(e=[...rb(this,N,O)].join(" "))?e:""}set value(e){var t;e!==this.value&&(rf(this,x,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...rb(this,N,O)][e]}values(){return rb(this,N,O).values()}forEach(e,t){rb(this,N,O).forEach(e,t)}add(...e){var t,i;e.forEach(e=>rb(this,x).add(e)),(""!==this.value||(null==(t=rb(this,M))?void 0:t.hasAttribute(`${rb(this,D)}`)))&&(null==(i=rb(this,M))||i.setAttribute(`${rb(this,D)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>rb(this,x).delete(e)),null==(t=rb(this,M))||t.setAttribute(`${rb(this,D)}`,`${this.value}`)}contains(e){return rb(this,N,O).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}M=new WeakMap,D=new WeakMap,R=new WeakMap,x=new WeakMap,N=new WeakSet,O=function(){return rb(this,x).size?rb(this,x):rb(this,R)};let ry=(e="")=>e.split(/\s+/),rk=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?ad.CAPTIONS:ad.SUBTITLES,language:i,label:r}},rw=(e="",t={})=>ry(e).map(e=>{let i=rk(e);return{...t,...i}}),rI=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?rk(e):e):"string"==typeof e?rw(e):[e]:[],r_=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,rT=(e=[])=>Array.prototype.map.call(e,r_).join(" "),rS=(e,t)=>i=>i[e]===t,rC=e=>{let t=Object.entries(e).map(([e,t])=>rS(e,t));return e=>t.every(t=>t(e))},rL=(e,t=[],i=[])=>{let a=rI(i).map(rC);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},rM=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:rC(t);return Array.from(e.textTracks).filter(i)},rD=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(an.MEDIA_SUBTITLES_SHOWING)},rR=e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}},rx="exitFullscreen"in aB?"exitFullscreen":"webkitExitFullscreen"in aB?"webkitExitFullscreen":"webkitCancelFullScreen"in aB?"webkitCancelFullScreen":void 0,rN=e=>{var t;let{documentElement:i}=e;if(rx){let e=null==(t=null==i?void 0:i[rx])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},rO="fullscreenElement"in aB?"fullscreenElement":"webkitFullscreenElement"in aB?"webkitFullscreenElement":void 0,rU=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[rO];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===ap.FULLSCREEN?i:a},rP=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let s=rU(e);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let e=s.shadowRoot;if(!(rO in e))return az(s,r);for(;null==e?void 0:e[rO];){if(e[rO]===r)return!0;e=null==(t=e[rO])?void 0:t.shadowRoot}}return!1},rW="fullscreenEnabled"in aB?"fullscreenEnabled":"webkitFullscreenEnabled"in aB?"webkitFullscreenEnabled":void 0,rH=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[rW])||i&&"webkitSupportsFullscreen"in i},rB=()=>{var e;return a||(a=null==(e=null==aB?void 0:aB.createElement)?void 0:e.call(aB,"video"))},rV=async(e=rB())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([r$(e,i.signal),rF(e,t)]);return i.abort(),a},r$=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),rF=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await ay(10)}return e.volume!==t},rG=/.*Version\/.*Safari\/.*/.test(aH.navigator.userAgent),rK=(e=rB())=>(!aH.matchMedia("(display-mode: standalone)").matches||!rG)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),rq=(e=rB())=>rH({documentElement:aB,media:e}),rY=rq(),rj=rK(),rQ=!!aH.WebKitPlaybackTargetAvailabilityEvent,rZ=!!aH.chrome,rz=e=>rM(e.media,e=>[ad.SUBTITLES,ad.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),rX=e=>rM(e.media,e=>e.mode===au.SHOWING&&[ad.SUBTITLES,ad.CAPTIONS].includes(e.kind)),rJ=(e,t)=>{let i=rz(e),a=rX(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)rL(au.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:s,label:n,kind:o}=t;rL(au.DISABLED,i,a),rL(au.SHOWING,i,[{language:s,label:n,kind:o}])}}},r0=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?r1(e,t):Object.entries(e).every(([e,i])=>e in t&&r0(i,t[e])))),r1=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>r0(e,t[i])))},r2=Object.values(am),r3=rV().then(e=>r=e),r5=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof aH.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=aH.customElements.get(t);i&&e instanceof i||(await aH.customElements.whenDefined(t),aH.customElements.upgrade(e))}))},r4={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{aH.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===aH.localStorage.getItem("media-chrome-pref-muted");r4.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?aH.localStorage.removeItem("media-chrome-pref-volume"):aH.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=aH.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;r4.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&af(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[am.LIVE,am.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(r2.includes(r))return r===am.UNKNOWN?a:r;let s=t.duration;return s===1/0?am.LIVE:Number.isFinite(s)?am.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=r4.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===am.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(r4.mediaStreamType.get(e)!==am.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>rz(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>rX(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:s}=t;if(!r)return;let n=e=>{var i;s.defaultSubtitles&&(e&&![ad.CAPTIONS,ad.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||rJ(t,!0))};return r.addEventListener("loadstart",n),null==(i=r.textTracks)||i.addEventListener("addtrack",n),null==(a=r.textTracks)||a.addEventListener("removetrack",n),()=>{var e,t;r.removeEventListener("loadstart",n),null==(e=r.textTracks)||e.removeEventListener("addtrack",n),null==(t=r.textTracks)||t.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=rM(i,{kind:ad.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==s||s.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==s||s.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&az(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!aB.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else aB.pictureInPictureElement&&aB.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>rP(e),set(e,t){e?rR(t):rN(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&aH.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!rY||!rq(t))return ac.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!rj||!rK(t))return ac.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return ac.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&r3.then(t=>e(t?void 0:ac.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return rZ&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?ac.UNAVAILABLE:void 0:ac.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>rQ?(null==t?void 0:t.availability)==="not-available"?ac.UNAVAILABLE:void 0:ac.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:ac.UNAVAILABLE:ac.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?ac.UNAVAILABLE:void 0:ac.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},r7={[ai.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,s;let n,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=rM(l,{kind:ad.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),n=i.href}}let u=e.mediaDuration.get(t),h=null==(s=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:s.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:n,mediaPreviewCoords:o,mediaPreviewChapter:h}},[ai.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[ai.MEDIA_PLAY_REQUEST](e,t){var i,a,r,s;let n=e.mediaStreamType.get(t)===am.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(n&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(s=null==(r=t.options)?void 0:r.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[ai.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[ai.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[ai.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[ai.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[ai.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[ai.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let s=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(s)))return;let n=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(s-n,t)},[ai.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,s=rz(t),n=rI(i),o=null==(a=n[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&aH.localStorage.setItem("media-chrome-pref-subtitles-lang",o),rL(au.SHOWING,s,n)},[ai.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=rz(t);rL(au.DISABLED,a,null!=i?i:[])},[ai.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){rJ(t,i)},[ai.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[ai.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[ai.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[ai.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[ai.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[ai.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[ai.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[ai.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[ai.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},r8=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=r4,requestMap:r=r7,options:s={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let o,l=[],d={options:{...s}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0!=e&&(r0(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u))))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,s,u,p,v,E,b,g,f,A,y,k,w,I,_;let T=!!o;if(o={...d,...null!=o?o:{},...e},T)return;await r5(...Object.values(e));let S=l.length>0&&0===t&&n,C=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),M=(null==(s=d.media)?void 0:s.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),R=(null==(E=d.media)?void 0:E.remote)!==(null==(b=o.media)?void 0:b.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(C||S),O=!!(null==(g=d.media)?void 0:g.textTracks)&&(L||S),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(M||S),P=!!(null==(A=d.media)?void 0:A.audioTracks)&&(D||S),W=!!(null==(y=d.media)?void 0:y.remote)&&(R||S),H=!!d.documentElement&&(x||S),B=N||O||U||P||W||H,V=0===l.length&&1===t&&n,$=!!o.media&&(C||V),F=!!(null==(k=o.media)?void 0:k.textTracks)&&(L||V),G=!!(null==(w=o.media)?void 0:w.videoRenditions)&&(M||V),K=!!(null==(I=o.media)?void 0:I.audioTracks)&&(D||V),q=!!(null==(_=o.media)?void 0:_.remote)&&(R||V),Y=!!o.documentElement&&(x||V),j=$||F||G||K||q||Y;if(!(B||j)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:s=[],remoteEvents:n=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),$&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),G&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,s.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,n.forEach(t=>{var i,a;c&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),q&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&H&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&B&&v(),j&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:s}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode)return void h(r[t](a,d,e));"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}};var r6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r9=(e,t,i)=>(r6(e,t,"read from private field"),i?i.call(e):t.get(e)),se=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},st=(e,t,i,a)=>(r6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),si=(e,t,i)=>(r6(e,t,"access private method"),i);let sa=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],sr={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class ss extends rv{constructor(){super(),se(this,$),se(this,G),se(this,q),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,se(this,U,new rA(this,sr.HOTKEYS)),se(this,P,void 0),se(this,W,void 0),se(this,H,void 0),se(this,B,void 0),se(this,V,e=>{var t;null==(t=r9(this,W))||t.dispatch(e)}),this.associateElement(this);let e={};st(this,H,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new aH.CustomEvent(al[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(sr.NO_HOTKEYS,sr.HOTKEYS,sr.DEFAULT_STREAM_TYPE,sr.DEFAULT_SUBTITLES,sr.DEFAULT_DURATION,sr.LANG)}get mediaStore(){return r9(this,W)}set mediaStore(e){var t,i;if(r9(this,W)&&(null==(t=r9(this,B))||t.call(this),st(this,B,void 0)),st(this,W,e),!r9(this,W)&&!this.hasAttribute(sr.NO_DEFAULT_STORE))return void si(this,$,F).call(this);st(this,B,null==(i=r9(this,W))?void 0:i.subscribe(r9(this,H)))}get fullscreenElement(){var e;return null!=(e=r9(this,P))?e:this}set fullscreenElement(e){var t;this.hasAttribute(sr.FULLSCREEN_ELEMENT)&&this.removeAttribute(sr.FULLSCREEN_ELEMENT),st(this,P,e),null==(t=r9(this,W))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return a7(this,sr.DEFAULT_SUBTITLES)}set defaultSubtitles(e){a8(this,sr.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return a6(this,sr.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){a9(this,sr.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return a5(this,sr.DEFAULT_DURATION)}set defaultDuration(e){a4(this,sr.DEFAULT_DURATION,e)}get noHotkeys(){return a7(this,sr.NO_HOTKEYS)}set noHotkeys(e){a8(this,sr.NO_HOTKEYS,e)}get keysUsed(){return a6(this,sr.KEYS_USED)}set keysUsed(e){a9(this,sr.KEYS_USED,e)}get liveEdgeOffset(){return a5(this,sr.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){a4(this,sr.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return a7(this,sr.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){a8(this,sr.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return a7(this,sr.NO_VOLUME_PREF)}set noVolumePref(e){a8(this,sr.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return a7(this,sr.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){a8(this,sr.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return a7(this,sr.NO_DEFAULT_STORE)}set noDefaultStore(e){a8(this,sr.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,s,n,o,l,d,u;if(super.attributeChangedCallback(e,t,i),e===sr.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(sr.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===sr.HOTKEYS)r9(this,U).value=i;else if(e===sr.DEFAULT_SUBTITLES&&i!==t)null==(a=r9(this,W))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(sr.DEFAULT_SUBTITLES)}});else if(e===sr.DEFAULT_STREAM_TYPE)null==(s=r9(this,W))||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(sr.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===sr.LIVE_EDGE_OFFSET)null==(n=r9(this,W))||n.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(sr.LIVE_EDGE_OFFSET)?+this.getAttribute(sr.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sr.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(sr.LIVE_EDGE_OFFSET)}});else if(e===sr.SEEK_TO_LIVE_OFFSET)null==(o=r9(this,W))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(sr.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sr.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===sr.NO_AUTO_SEEK_TO_LIVE)null==(l=r9(this,W))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(sr.NO_AUTO_SEEK_TO_LIVE)}});else if(e===sr.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;st(this,P,e),null==(u=r9(this,W))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===sr.LANG&&i!==t&&aL(i)}connectedCallback(){var e,t;r9(this,W)||this.hasAttribute(sr.NO_DEFAULT_STORE)||si(this,$,F).call(this),null==(e=r9(this,W))||e.dispatch({type:"documentelementchangerequest",detail:aB}),super.connectedCallback(),r9(this,W)&&!r9(this,B)&&st(this,B,null==(t=r9(this,W))?void 0:t.subscribe(r9(this,H))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),r9(this,W)&&(null==(t=r9(this,W))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=r9(this,W))||i.dispatch({type:ai.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),r9(this,B)&&(null==(a=r9(this,B))||a.call(this),st(this,B,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=r9(this,W))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=r9(this,W))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){sE(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=sb(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(ai).forEach(t=>{e.addEventListener(t,r9(this,V))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(ai).forEach(t=>{e.removeEventListener(t,r9(this,V))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),r9(this,W)&&Object.entries(r9(this,W).getState()).forEach(([t,i])=>{sE([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",si(this,q,Y))}disableHotkeys(){this.removeEventListener("keydown",si(this,q,Y)),this.removeEventListener("keyup",si(this,G,K))}get hotkeys(){return a6(this,sr.HOTKEYS)}set hotkeys(e){a9(this,sr.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,s;let n,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(sr.KEYS_USED))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||r9(this,U).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&r9(this,U).contains("nospace")))switch(e.key){case" ":case"k":n=r9(this,W).getState().mediaPaused?ai.MEDIA_PLAY_REQUEST:ai.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new aH.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.mediaStore.getState().mediaVolumeLevel?ai.MEDIA_UNMUTE_REQUEST:ai.MEDIA_MUTE_REQUEST,this.dispatchEvent(new aH.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=this.mediaStore.getState().mediaIsFullscreen?ai.MEDIA_EXIT_FULLSCREEN_REQUEST:ai.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new aH.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new aH.CustomEvent(ai.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(sr.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(sr.KEYBOARD_BACKWARD_SEEK_OFFSET):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new aH.CustomEvent(ai.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(sr.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(sr.KEYBOARD_FORWARD_SEEK_OFFSET):10;o=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),l=new aH.CustomEvent(ai.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}U=new WeakMap,P=new WeakMap,W=new WeakMap,H=new WeakMap,B=new WeakMap,V=new WeakMap,$=new WeakSet,F=function(){var e;this.mediaStore=r8({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(sr.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(sr.DEFAULT_DURATION)?+this.getAttribute(sr.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(sr.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(sr.LIVE_EDGE_OFFSET)?+this.getAttribute(sr.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(sr.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(sr.SEEK_TO_LIVE_OFFSET):this.hasAttribute(sr.LIVE_EDGE_OFFSET)?+this.getAttribute(sr.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(sr.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(sr.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(sr.NO_SUBTITLES_LANG_PREF)}})},G=new WeakSet,K=function(e){let{key:t}=e;if(!sa.includes(t))return void this.removeEventListener("keyup",si(this,G,K));this.keyboardShortcutHandler(e)},q=new WeakSet,Y=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!sa.includes(a))return void this.removeEventListener("keyup",si(this,G,K));[" ","ArrowLeft","ArrowRight"].includes(a)&&!(r9(this,U).contains(`no${a.toLowerCase()}`)||" "===a&&r9(this,U).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",si(this,G,K),{once:!0})};let sn=Object.values(an),so=Object.values(ar),sl=e=>{var t,i,a,r;let{observedAttributes:s}=e.constructor;!s&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(aH.customElements.upgrade(e),{observedAttributes:s}=e.constructor);let n=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,aa.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(s||n)?(s||n).filter(e=>sn.includes(e)):[]},sd=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&aH.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof aH.customElements.get(e.nodeName.toLowerCase()))&&aH.customElements.upgrade(e),so.some(t=>t in e)},su=e=>sd(e)||!!sl(e).length,sh=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},sc={[an.MEDIA_SUBTITLES_LIST]:rT,[an.MEDIA_SUBTITLES_SHOWING]:rT,[an.MEDIA_SEEKABLE]:sh,[an.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(sh).join(" "),[an.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[an.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(av).join(" ")},[an.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(ab).join(" ")}},sm=async(e,t,i)=>{var a,r;if(e.isConnected||await ay(0),"boolean"==typeof i||null==i)return a8(e,t,i);if("number"==typeof i)return a4(e,t,i);if("string"==typeof i)return a9(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let s=null!=(r=null==(a=sc[t])?void 0:a.call(sc,i))?r:i;return e.setAttribute(t,s)},sp=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},sv=(e,t)=>{if(sp(e))return;let i=(e,t)=>{var i,a;su(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>sv(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!su(e))return void aH.customElements.whenDefined(a).then(()=>{i(e,t)});i(e,t)},sE=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=sl(e),r=t.toLowerCase();a.includes(r)&&sm(e,r,i)})},sb=(e,t,i)=>{sv(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(ai.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(ai.UNREGISTER_MEDIA_STATE_RECEIVER,r);let s=[],n=e=>{let a=e.target;"media"!==a.name&&(s.forEach(e=>sv(e,i)),(s=[...a.assignedElements({flatten:!0})]).forEach(e=>sv(e,t)))};e.addEventListener("slotchange",n);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:s,target:n,attributeName:o}=e;"childList"===s?(Array.prototype.forEach.call(a,e=>sv(e,t)),Array.prototype.forEach.call(r,e=>sv(e,i))):"attributes"===s&&o===aa.MEDIA_CHROME_ATTRIBUTES&&(su(n)?t(n):i(n))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{sv(e,i),e.removeEventListener("slotchange",n),o.disconnect(),e.removeEventListener(ai.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(ai.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};aH.customElements.get("media-controller")||aH.customElements.define("media-controller",ss);var sg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sf=(e,t,i)=>(sg(e,t,"read from private field"),i?i.call(e):t.get(e)),sA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sy=(e,t,i,a)=>(sg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sk=(e,t,i)=>(sg(e,t,"access private method"),i);let sw={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"},sI=aB.createElement("template");sI.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: var(--media-cursor, pointer);
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class s_ extends aH.HTMLElement{constructor(e={}){var t;if(super(),sA(this,J),sA(this,j,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",sA(this,Q,e=>{this.preventClick||this.handleClick(e),setTimeout(sf(this,Z),0)}),sA(this,Z,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),sA(this,z,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",sf(this,z));this.preventClick||this.handleClick(e)}),sA(this,X,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",sf(this,z));this.addEventListener("keyup",sf(this,z),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let i=sI.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=aB.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(i.querySelector('slot[name="tooltip-content"]').innerHTML=null!=(t=e.tooltipContent)?t:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",sw.TOOLTIP_PLACEMENT,aa.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",sf(this,Q)),this.addEventListener("keydown",sf(this,X)),this.tabIndex=0}disable(){this.removeEventListener("click",sf(this,Q)),this.removeEventListener("keydown",sf(this,X)),this.removeEventListener("keyup",sf(this,z)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===aa.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sf(this,j))?void 0:a.unassociateElement)||r.call(a,this),sy(this,j,null)),i&&this.isConnected&&(sy(this,j,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=sf(this,j))?void 0:n.associateElement)||o.call(n,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===sw.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),sf(this,Z).call(this)}connectedCallback(){var e,t,i;let{style:a}=a2(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(aa.MEDIA_CONTROLLER);r&&(sy(this,j,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sf(this,j))?void 0:t.associateElement)||i.call(t,this)),aH.customElements.whenDefined("media-tooltip").then(()=>sk(this,J,ee).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=sf(this,j))?void 0:e.unassociateElement)||t.call(e,this),sy(this,j,null),this.removeEventListener("mouseenter",sf(this,Z)),this.removeEventListener("focus",sf(this,Z)),this.removeEventListener("click",sf(this,Q))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return a6(this,sw.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){a9(this,sw.TOOLTIP_PLACEMENT,e)}get mediaController(){return a6(this,aa.MEDIA_CONTROLLER)}set mediaController(e){a9(this,aa.MEDIA_CONTROLLER,e)}get disabled(){return a7(this,sw.DISABLED)}set disabled(e){a8(this,sw.DISABLED,e)}get noTooltip(){return a7(this,sw.NO_TOOLTIP)}set noTooltip(e){a8(this,sw.NO_TOOLTIP,e)}handleClick(e){}}j=new WeakMap,Q=new WeakMap,Z=new WeakMap,z=new WeakMap,X=new WeakMap,J=new WeakSet,ee=function(){this.addEventListener("mouseenter",sf(this,Z)),this.addEventListener("focus",sf(this,Z)),this.addEventListener("click",sf(this,Q));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},aH.customElements.get("media-chrome-button")||aH.customElements.define("media-chrome-button",s_);let sT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,sS=aB.createElement("template");sS.innerHTML=`
  <style>
    :host([${an.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${an.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${an.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${an.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${sT}</slot>
    <slot name="exit">${sT}</slot>
  </slot>
`;let sC=`
  <slot name="tooltip-enter">${aM("start airplay")}</slot>
  <slot name="tooltip-exit">${aM("stop airplay")}</slot>
`,sL=e=>{let t=e.mediaIsAirplaying?aM("stop airplay"):aM("start airplay");e.setAttribute("aria-label",t)};class sM extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_IS_AIRPLAYING,an.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:sS,tooltipContent:sC,...e})}connectedCallback(){super.connectedCallback(),sL(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_IS_AIRPLAYING&&sL(this)}get mediaIsAirplaying(){return a7(this,an.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){a8(this,an.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return a6(this,an.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){a9(this,an.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new aH.CustomEvent(ai.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}aH.customElements.get("media-airplay-button")||aH.customElements.define("media-airplay-button",sM);let sD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,sR=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,sx=aB.createElement("template");sx.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${sD}</slot>
    <slot name="off">${sR}</slot>
  </slot>
`;let sN=`
  <slot name="tooltip-enable">${aM("Enable captions")}</slot>
  <slot name="tooltip-disable">${aM("Disable captions")}</slot>
`,sO=e=>{e.setAttribute("aria-checked",rD(e).toString())};class sU extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_SUBTITLES_LIST,an.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:sx,tooltipContent:sN,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",aM("closed captions")),sO(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_SUBTITLES_SHOWING&&sO(this)}get mediaSubtitlesList(){return sP(this,an.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sW(this,an.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return sP(this,an.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sW(this,an.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new aH.CustomEvent(ai.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let sP=(e,t)=>{let i=e.getAttribute(t);return i?rw(i):[]},sW=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=rT(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aH.customElements.get("media-captions-button")||aH.customElements.define("media-captions-button",sU);let sH=aB.createElement("template");sH.innerHTML=`
  <style>
  :host([${an.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${an.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${an.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${an.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let sB=`
  <slot name="tooltip-enter">${aM("Start casting")}</slot>
  <slot name="tooltip-exit">${aM("Stop casting")}</slot>
`,sV=e=>{let t=e.mediaIsCasting?aM("stop casting"):aM("start casting");e.setAttribute("aria-label",t)};class s$ extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_IS_CASTING,an.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:sH,tooltipContent:sB,...e})}connectedCallback(){super.connectedCallback(),sV(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_IS_CASTING&&sV(this)}get mediaIsCasting(){return a7(this,an.MEDIA_IS_CASTING)}set mediaIsCasting(e){a8(this,an.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return a6(this,an.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){a9(this,an.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?ai.MEDIA_EXIT_CAST_REQUEST:ai.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new aH.CustomEvent(e,{composed:!0,bubbles:!0}))}}aH.customElements.get("media-cast-button")||aH.customElements.define("media-cast-button",s$);var sF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sG=(e,t,i)=>(sF(e,t,"read from private field"),i?i.call(e):t.get(e)),sK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sq=(e,t,i,a)=>(sF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sY=(e,t,i)=>(sF(e,t,"access private method"),i);let sj={OPEN:"open",ANCHOR:"anchor"};class sQ extends aH.HTMLElement{constructor(){super(),sK(this,er),sK(this,en),sK(this,el),sK(this,eu),sK(this,ec),sK(this,ep),sK(this,et,!1),sK(this,ei,null),sK(this,ea,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[sj.OPEN,sj.ANCHOR]}get open(){return a7(this,sj.OPEN)}set open(e){a8(this,sj.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":sY(this,eu,eh).call(this,e);break;case"focusout":sY(this,ec,em).call(this,e);break;case"keydown":sY(this,ep,ev).call(this,e)}}connectedCallback(){sY(this,er,es).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){sY(this,er,es).call(this),e===sj.OPEN&&i!==t&&(this.open?sY(this,en,eo).call(this):sY(this,el,ed).call(this))}focus(){sq(this,ei,aJ());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}et=new WeakMap,ei=new WeakMap,ea=new WeakMap,er=new WeakSet,es=function(){if(!sG(this,et)&&(sq(this,et,!0),!this.shadowRoot)){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);this.shadowRoot.innerHTML=`
        ${this.constructor.getTemplateHTML(e)}
      `,queueMicrotask(()=>{let{style:e}=a2(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},en=new WeakSet,eo=function(){var e;null==(e=sG(this,ea))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},el=new WeakSet,ed=function(){var e;null==(e=sG(this,ea))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},eu=new WeakSet,eh=function(e){sq(this,ea,e.relatedTarget),az(this,e.relatedTarget)||(this.open=!this.open)},ec=new WeakSet,em=function(e){var t;!az(this,e.relatedTarget)&&(null==(t=sG(this,ei))||t.focus(),sG(this,ea)&&sG(this,ea)!==e.relatedTarget&&this.open&&(this.open=!1))},ep=new WeakSet,ev=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(n)&&(e.preventDefault(),e.stopPropagation(),"Tab"===n?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===n&&(null==(s=sG(this,ei))||s.focus(),this.open=!1))},sQ.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},sQ.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},aH.customElements.get("media-chrome-dialog")||aH.customElements.define("media-chrome-dialog",sQ);var sZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sz=(e,t,i)=>(sZ(e,t,"read from private field"),i?i.call(e):t.get(e)),sX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sJ=(e,t,i,a)=>(sZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),s0=(e,t,i)=>(sZ(e,t,"access private method"),i);let s1=aB.createElement("template");s1.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: var(--media-cursor, pointer);
      pointer-events: auto;
      touch-action: none; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: var(--media-cursor, pointer);

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb,
    ::slotted([slot=thumb]) {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      translate: -50%;
      position: absolute;
      left: 0;
      cursor: var(--media-cursor, pointer);
    }

    #thumb {
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      border: var(--media-range-thumb-border, none);
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <slot name="thumb">
        <div id="thumb" part="thumb"></div>
      </slot>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class s2 extends aH.HTMLElement{constructor(){super(),sX(this,e_),sX(this,eS),sX(this,eL),sX(this,eD),sX(this,ex),sX(this,eO),sX(this,eP),sX(this,eH),sX(this,eE,void 0),sX(this,eb,void 0),sX(this,eg,void 0),sX(this,ef,void 0),sX(this,eA,{}),sX(this,ey,[]),sX(this,ek,()=>{if(this.range.matches(":focus-visible")){let{style:e}=a2(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),sX(this,ew,()=>{let{style:e}=a2(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),sX(this,eI,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(s1.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),sJ(this,eg,this.shadowRoot.querySelector("#startpoint")),sJ(this,ef,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",aa.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===aa.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sz(this,eE))?void 0:a.unassociateElement)||r.call(a,this),sJ(this,eE,null)),i&&this.isConnected&&(sJ(this,eE,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=sz(this,eE))?void 0:n.associateElement)||o.call(n,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),s0(this,eS,eC).call(this)):(this.range.setAttribute(e,i),s0(this,eL,eM).call(this)))}connectedCallback(){var e,t,i;let{style:a}=a2(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),sz(this,eA).pointer=a2(this.shadowRoot,"#pointer"),sz(this,eA).progress=a2(this.shadowRoot,"#progress"),sz(this,eA).thumb=a2(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),sz(this,eA).activeSegment=a2(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(aa.MEDIA_CONTROLLER);r&&(sJ(this,eE,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sz(this,eE))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",sz(this,ek)),this.shadowRoot.addEventListener("focusout",sz(this,ew)),s0(this,eS,eC).call(this),aG(this.container,sz(this,eI))}disconnectedCallback(){var e,t;s0(this,eL,eM).call(this),null==(t=null==(e=sz(this,eE))?void 0:e.unassociateElement)||t.call(e,this),sJ(this,eE,null),this.shadowRoot.removeEventListener("focusin",sz(this,ek)),this.shadowRoot.removeEventListener("focusout",sz(this,ew)),aK(this.container,sz(this,eI))}updatePointerBar(e){var t;null==(t=sz(this,eA).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=sz(this,eA).progress)||e.style.setProperty("width",`${i}%`),null==(t=sz(this,eA).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];sJ(this,ey,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[s,n]=[0===e,e===i.length-1],o=s?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=n?a:i[e+1],d=`calc(${(l-r)*100}%${s||n?"":" - var(--segments-gap)"})`,u=aB.createElementNS("http://www.w3.org/2000/svg","rect"),h=a2(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,s=a.y-i.y,n=r*r+s*s;return 0===n?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*s)/n))}(e.clientX,e.clientY,sz(this,eg).getBoundingClientRect(),sz(this,ef).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":s0(this,eH,eB).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":s0(this,ex,eN).call(this,e);break;case"pointerdown":s0(this,eD,eR).call(this,e);break;case"pointerup":s0(this,eO,eU).call(this);break;case"pointerleave":s0(this,eP,eW).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}eE=new WeakMap,eb=new WeakMap,eg=new WeakMap,ef=new WeakMap,eA=new WeakMap,ey=new WeakMap,ek=new WeakMap,ew=new WeakMap,eI=new WeakMap,e_=new WeakSet,eT=function(e){let t=sz(this,eA).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=sz(this,ey).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},eS=new WeakSet,eC=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},eL=new WeakSet,eM=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=aH.window)||e.removeEventListener("pointerup",this),null==(t=aH.window)||t.removeEventListener("pointermove",this)},eD=new WeakSet,eR=function(e){var t;sJ(this,eb,e.composedPath().includes(this.range)),null==(t=aH.window)||t.addEventListener("pointerup",this)},ex=new WeakSet,eN=function(e){var t;"mouse"!==e.pointerType&&s0(this,eD,eR).call(this,e),this.addEventListener("pointerleave",this),null==(t=aH.window)||t.addEventListener("pointermove",this)},eO=new WeakSet,eU=function(){var e;null==(e=aH.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},eP=new WeakSet,eW=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=aH.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=sz(this,eA).activeSegment)||t.style.removeProperty("transform")},eH=new WeakSet,eB=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),s0(this,e_,eT).call(this,e),this.dragging&&("mouse"!==e.pointerType||!sz(this,eb))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},aH.customElements.get("media-chrome-range")||aH.customElements.define("media-chrome-range",s2);var s3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s5=(e,t,i)=>(s3(e,t,"read from private field"),i?i.call(e):t.get(e)),s4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s7=(e,t,i,a)=>(s3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let s8=aB.createElement("template");s8.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class s6 extends aH.HTMLElement{constructor(){super(),s4(this,eV,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(s8.content.cloneNode(!0)))}static get observedAttributes(){return[aa.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===aa.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=s5(this,eV))?void 0:a.unassociateElement)||r.call(a,this),s7(this,eV,null)),i&&this.isConnected&&(s7(this,eV,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=s5(this,eV))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(aa.MEDIA_CONTROLLER);a&&(s7(this,eV,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=s5(this,eV))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=s5(this,eV))?void 0:e.unassociateElement)||t.call(e,this),s7(this,eV,null)}}eV=new WeakMap,aH.customElements.get("media-control-bar")||aH.customElements.define("media-control-bar",s6);var s9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ne=(e,t,i)=>(s9(e,t,"read from private field"),i?i.call(e):t.get(e)),nt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ni=(e,t,i,a)=>(s9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let na=aB.createElement("template");na.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class nr extends aH.HTMLElement{constructor(){super(),nt(this,e$,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(na.content.cloneNode(!0)))}static get observedAttributes(){return[aa.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===aa.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ne(this,e$))?void 0:a.unassociateElement)||r.call(a,this),ni(this,e$,null)),i&&this.isConnected&&(ni(this,e$,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=ne(this,e$))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let{style:a}=a2(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(aa.MEDIA_CONTROLLER);r&&(ni(this,e$,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=ne(this,e$))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ne(this,e$))?void 0:e.unassociateElement)||t.call(e,this),ni(this,e$,null)}}e$=new WeakMap,aH.customElements.get("media-text-display")||aH.customElements.define("media-text-display",nr);var ns=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nn=(e,t,i)=>(ns(e,t,"read from private field"),i?i.call(e):t.get(e)),no=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nl=(e,t,i,a)=>(ns(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class nd extends nr{constructor(){super(),no(this,eF,void 0),nl(this,eF,this.shadowRoot.querySelector("slot")),nn(this,eF).textContent=a_(0)}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===an.MEDIA_DURATION&&(nn(this,eF).textContent=a_(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return a5(this,an.MEDIA_DURATION)}set mediaDuration(e){a4(this,an.MEDIA_DURATION,e)}}eF=new WeakMap,aH.customElements.get("media-duration-display")||aH.customElements.define("media-duration-display",nd);let nu={2:aM("Network Error"),3:aM("Decode Error"),4:aM("Source Not Supported"),5:aM("Encryption Error")},nh={2:aM("A network error caused the media download to fail."),3:aM("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:aM("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:aM("The media is encrypted and there are no keys to decrypt it.")},nc=e=>{var t,i;return 1===e.code?null:{title:null!=(t=nu[e.code])?t:`Error ${e.code}`,message:null!=(i=nh[e.code])?i:e.message}};var nm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},np=(e,t,i)=>(nm(e,t,"read from private field"),i?i.call(e):t.get(e)),nv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nE=(e,t,i,a)=>(nm(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);function nb(e){var t;let{title:i,message:a}=null!=(t=nc(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let ng=[an.MEDIA_ERROR_CODE,an.MEDIA_ERROR_MESSAGE];class nf extends sQ{constructor(){super(...arguments),nv(this,eG,null)}static get observedAttributes(){return[...super.observedAttributes,...ng]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!ng.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==nc(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return np(this,eG)}set mediaError(e){nE(this,eG,e)}get mediaErrorCode(){return a5(this,"mediaerrorcode")}set mediaErrorCode(e){a4(this,"mediaerrorcode",e)}get mediaErrorMessage(){return a6(this,"mediaerrormessage")}set mediaErrorMessage(e){a9(this,"mediaerrormessage",e)}}eG=new WeakMap,nf.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${nb({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},nf.formatErrorMessage=nb,aH.customElements.get("media-error-dialog")||aH.customElements.define("media-error-dialog",nf);let nA=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,ny=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,nk=aB.createElement("template");nk.innerHTML=`
  <style>
    :host([${an.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${an.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${an.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${an.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${nA}</slot>
    <slot name="exit">${ny}</slot>
  </slot>
`;let nw=`
  <slot name="tooltip-enter">${aM("Enter fullscreen mode")}</slot>
  <slot name="tooltip-exit">${aM("Exit fullscreen mode")}</slot>
`,nI=e=>{let t=e.mediaIsFullscreen?aM("exit fullscreen mode"):aM("enter fullscreen mode");e.setAttribute("aria-label",t)};class n_ extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_IS_FULLSCREEN,an.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nk,tooltipContent:nw,...e})}connectedCallback(){super.connectedCallback(),nI(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_IS_FULLSCREEN&&nI(this)}get mediaFullscreenUnavailable(){return a6(this,an.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){a9(this,an.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return a7(this,an.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){a8(this,an.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?ai.MEDIA_EXIT_FULLSCREEN_REQUEST:ai.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new aH.CustomEvent(e,{composed:!0,bubbles:!0}))}}aH.customElements.get("media-fullscreen-button")||aH.customElements.define("media-fullscreen-button",n_);let{MEDIA_TIME_IS_LIVE:nT,MEDIA_PAUSED:nS}=an,{MEDIA_SEEK_TO_LIVE_REQUEST:nC,MEDIA_PLAY_REQUEST:nL}=ai,nM=aB.createElement("template");nM.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${nT}]:not([${nS}])) slot[name=indicator] > *,
  :host([${nT}]:not([${nS}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${nT}]:not([${nS}])) {
    cursor: var(--media-cursor, not-allowed);
  }

  slot[name=text]{
    text-transform: uppercase;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">${aM("live")}</slot>
`;let nD=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?aM("seek to live"):aM("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class nR extends s_{static get observedAttributes(){return[...super.observedAttributes,nS,nT]}constructor(e={}){super({slotTemplate:nM,...e})}connectedCallback(){nD(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),nD(this)}get mediaPaused(){return a7(this,an.MEDIA_PAUSED)}set mediaPaused(e){a8(this,an.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return a7(this,an.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){a8(this,an.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new aH.CustomEvent(nC,{composed:!0,bubbles:!0})),this.hasAttribute(nS)&&this.dispatchEvent(new aH.CustomEvent(nL,{composed:!0,bubbles:!0})))}}aH.customElements.get("media-live-button")||aH.customElements.define("media-live-button",nR);var nx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nN=(e,t,i)=>(nx(e,t,"read from private field"),i?i.call(e):t.get(e)),nO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nU=(e,t,i,a)=>(nx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let nP={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},nW=aB.createElement("template"),nH=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;nW.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${an.MEDIA_LOADING}]:not([${an.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${an.MEDIA_LOADING}]:not([${an.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${an.MEDIA_LOADING}]:not([${an.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${nH}</slot>
<div id="status" role="status" aria-live="polite">${aM("media loading")}</div>
`;class nB extends aH.HTMLElement{constructor(){if(super(),nO(this,eK,void 0),nO(this,eq,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=nW.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[aa.MEDIA_CONTROLLER,an.MEDIA_PAUSED,an.MEDIA_LOADING,nP.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,s,n,o;e===nP.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===aa.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nN(this,eK))?void 0:a.unassociateElement)||r.call(a,this),nU(this,eK,null)),i&&this.isConnected&&(nU(this,eK,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=nN(this,eK))?void 0:n.associateElement)||o.call(n,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(aa.MEDIA_CONTROLLER);a&&(nU(this,eK,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=nN(this,eK))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nN(this,eK))?void 0:e.unassociateElement)||t.call(e,this),nU(this,eK,null)}get loadingDelay(){return nN(this,eq)}set loadingDelay(e){nU(this,eq,e);let{style:t}=a2(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return a7(this,an.MEDIA_PAUSED)}set mediaPaused(e){a8(this,an.MEDIA_PAUSED,e)}get mediaLoading(){return a7(this,an.MEDIA_LOADING)}set mediaLoading(e){a8(this,an.MEDIA_LOADING,e)}get mediaController(){return a6(this,aa.MEDIA_CONTROLLER)}set mediaController(e){a9(this,aa.MEDIA_CONTROLLER,e)}get noAutohide(){return a7(this,nP.NO_AUTOHIDE)}set noAutohide(e){a8(this,nP.NO_AUTOHIDE,e)}}eK=new WeakMap,eq=new WeakMap,aH.customElements.get("media-loading-indicator")||aH.customElements.define("media-loading-indicator",nB);let{MEDIA_VOLUME_LEVEL:nV}=an,n$=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,nF=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,nG=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,nK=aB.createElement("template");nK.innerHTML=`
  <style>
  
  :host(:not([${nV}])) slot[name=icon] slot:not([name=high]), 
  :host([${nV}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${nV}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${nV}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${nV}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${nV}=off])) slot[name=tooltip-unmute],
  :host([${nV}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${n$}</slot>
    <slot name="low">${nF}</slot>
    <slot name="medium">${nF}</slot>
    <slot name="high">${nG}</slot>
  </slot>
`;let nq=`
  <slot name="tooltip-mute">${aM("Mute")}</slot>
  <slot name="tooltip-unmute">${aM("Unmute")}</slot>
`,nY=e=>{let t="off"===e.mediaVolumeLevel?aM("unmute"):aM("mute");e.setAttribute("aria-label",t)};class nj extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:nK,tooltipContent:nq,...e})}connectedCallback(){nY(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===an.MEDIA_VOLUME_LEVEL&&nY(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return a6(this,an.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){a9(this,an.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?ai.MEDIA_UNMUTE_REQUEST:ai.MEDIA_MUTE_REQUEST;this.dispatchEvent(new aH.CustomEvent(e,{composed:!0,bubbles:!0}))}}aH.customElements.get("media-mute-button")||aH.customElements.define("media-mute-button",nj);let nQ=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,nZ=aB.createElement("template");nZ.innerHTML=`
  <style>
  :host([${an.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${an.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${an.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${an.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${nQ}</slot>
    <slot name="exit">${nQ}</slot>
  </slot>
`;let nz=`
  <slot name="tooltip-enter">${aM("Enter picture in picture mode")}</slot>
  <slot name="tooltip-exit">${aM("Exit picture in picture mode")}</slot>
`,nX=e=>{let t=e.mediaIsPip?aM("exit picture in picture mode"):aM("enter picture in picture mode");e.setAttribute("aria-label",t)};class nJ extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_IS_PIP,an.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nZ,tooltipContent:nz,...e})}connectedCallback(){nX(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===an.MEDIA_IS_PIP&&nX(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return a6(this,an.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){a9(this,an.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return a7(this,an.MEDIA_IS_PIP)}set mediaIsPip(e){a8(this,an.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?ai.MEDIA_EXIT_PIP_REQUEST:ai.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new aH.CustomEvent(e,{composed:!0,bubbles:!0}))}}aH.customElements.get("media-pip-button")||aH.customElements.define("media-pip-button",nJ);var n0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n1=(e,t,i)=>(n0(e,t,"read from private field"),i?i.call(e):t.get(e)),n2=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let n3={RATES:"rates"},n5=[1,1.2,1.5,1.7,2],n4=aB.createElement("template");n4.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class n7 extends s_{constructor(e={}){super({slotTemplate:n4,tooltipContent:aM("Playback rate"),...e}),n2(this,eY,new rA(this,n3.RATES,{defaultValue:n5})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_PLAYBACK_RATE,n3.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===n3.RATES&&(n1(this,eY).value=i),e===an.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aM("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return n1(this,eY)}set rates(e){e?Array.isArray(e)&&(n1(this,eY).value=e.join(" ")):n1(this,eY).value=""}get mediaPlaybackRate(){return a5(this,an.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){a4(this,an.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new aH.CustomEvent(ai.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}eY=new WeakMap,aH.customElements.get("media-playback-rate-button")||aH.customElements.define("media-playback-rate-button",n7);let n8=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,n6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,n9=aB.createElement("template");n9.innerHTML=`
  <style>
    :host([${an.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${an.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${an.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${an.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${n8}</slot>
    <slot name="pause">${n6}</slot>
  </slot>
`;let oe=`
  <slot name="tooltip-play">${aM("Play")}</slot>
  <slot name="tooltip-pause">${aM("Pause")}</slot>
`,ot=e=>{let t=e.mediaPaused?aM("play"):aM("pause");e.setAttribute("aria-label",t)};class oi extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_PAUSED,an.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:n9,tooltipContent:oe,...e})}connectedCallback(){ot(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===an.MEDIA_PAUSED&&ot(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return a7(this,an.MEDIA_PAUSED)}set mediaPaused(e){a8(this,an.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?ai.MEDIA_PLAY_REQUEST:ai.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aH.CustomEvent(e,{composed:!0,bubbles:!0}))}}aH.customElements.get("media-play-button")||aH.customElements.define("media-play-button",oi);let oa={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},or=aB.createElement("template");or.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let os=e=>{e.style.removeProperty("background-image")},on=(e,t)=>{e.style["background-image"]=`url('${t}')`};class oo extends aH.HTMLElement{static get observedAttributes(){return[oa.PLACEHOLDER_SRC,oa.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(or.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===oa.SRC&&(null==i?this.image.removeAttribute(oa.SRC):this.image.setAttribute(oa.SRC,i)),e===oa.PLACEHOLDER_SRC&&(null==i?os(this.image):on(this.image,i))}get placeholderSrc(){return a6(this,oa.PLACEHOLDER_SRC)}set placeholderSrc(e){a9(this,oa.SRC,e)}get src(){return a6(this,oa.SRC)}set src(e){a9(this,oa.SRC,e)}}aH.customElements.get("media-poster-image")||aH.customElements.define("media-poster-image",oo);var ol=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},od=(e,t,i)=>(ol(e,t,"read from private field"),i?i.call(e):t.get(e)),ou=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oh=(e,t,i,a)=>(ol(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oc extends nr{constructor(){super(),ou(this,ej,void 0),oh(this,ej,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(od(this,ej).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return a6(this,an.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){a9(this,an.MEDIA_PREVIEW_CHAPTER,e)}}ej=new WeakMap,aH.customElements.get("media-preview-chapter-display")||aH.customElements.define("media-preview-chapter-display",oc);var om=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},op=(e,t,i)=>(om(e,t,"read from private field"),i?i.call(e):t.get(e)),ov=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oE=(e,t,i,a)=>(om(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ob=aB.createElement("template");ob.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class og extends aH.HTMLElement{constructor(){super(),ov(this,eQ,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ob.content.cloneNode(!0)))}static get observedAttributes(){return[aa.MEDIA_CONTROLLER,an.MEDIA_PREVIEW_IMAGE,an.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(aa.MEDIA_CONTROLLER);a&&(oE(this,eQ,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=op(this,eQ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=op(this,eQ))?void 0:e.unassociateElement)||t.call(e,this),oE(this,eQ,null)}attributeChangedCallback(e,t,i){var a,r,s,n,o;[an.MEDIA_PREVIEW_IMAGE,an.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===aa.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=op(this,eQ))?void 0:a.unassociateElement)||r.call(a,this),oE(this,eQ,null)),i&&this.isConnected&&(oE(this,eQ,null==(s=this.getRootNode())?void 0:s.getElementById(i)),null==(o=null==(n=op(this,eQ))?void 0:n.associateElement)||o.call(n,this)))}get mediaPreviewImage(){return a6(this,an.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){a9(this,an.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(an.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e)return void this.removeAttribute(an.MEDIA_PREVIEW_COORDS);this.setAttribute(an.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,s]=e,n=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/r,parseInt(l)/s),c=Math.max(parseInt(d)/r,parseInt(u)/s),m=h<1,p=m?h:c>1?c:1,{style:v}=a2(this.shadowRoot,":host"),E=a2(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=m?"min":"max";v.setProperty(`${g}-width`,"initial","important"),v.setProperty(`${g}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${s*p}px`;let f=()=>{E.width=`${this.imgWidth*p}px`,E.height=`${this.imgHeight*p}px`,E.display="block"};b.src!==n&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,f()},b.src=n,f()),f(),E.transform=`translate(-${i*p}px, -${a*p}px)`}}eQ=new WeakMap,aH.customElements.get("media-preview-thumbnail")||aH.customElements.define("media-preview-thumbnail",og);var of=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oA=(e,t,i)=>(of(e,t,"read from private field"),i?i.call(e):t.get(e)),oy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ok=(e,t,i,a)=>(of(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ow extends nr{constructor(){super(),oy(this,eZ,void 0),ok(this,eZ,this.shadowRoot.querySelector("slot")),oA(this,eZ).textContent=a_(0)}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_PREVIEW_TIME&&null!=i&&(oA(this,eZ).textContent=a_(parseFloat(i)))}get mediaPreviewTime(){return a5(this,an.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){a4(this,an.MEDIA_PREVIEW_TIME,e)}}eZ=new WeakMap,aH.customElements.get("media-preview-time-display")||aH.customElements.define("media-preview-time-display",ow);let oI={SEEK_OFFSET:"seekoffset"},o_=aB.createElement("template");o_.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class oT extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_CURRENT_TIME,oI.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:o_,tooltipContent:aM("Seek backward"),...e})}connectedCallback(){this.seekOffset=a5(this,oI.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===oI.SEEK_OFFSET&&(this.seekOffset=a5(this,oI.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return a5(this,oI.SEEK_OFFSET,30)}set seekOffset(e){a4(this,oI.SEEK_OFFSET,e),this.setAttribute("aria-label",aM("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),aj(aZ(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return a5(this,an.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){a4(this,an.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new aH.CustomEvent(ai.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aH.customElements.get("media-seek-backward-button")||aH.customElements.define("media-seek-backward-button",oT);let oS={SEEK_OFFSET:"seekoffset"},oC=aB.createElement("template");oC.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class oL extends s_{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_CURRENT_TIME,oS.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:oC,tooltipContent:aM("Seek forward"),...e})}connectedCallback(){this.seekOffset=a5(this,oS.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===oS.SEEK_OFFSET&&(this.seekOffset=a5(this,oS.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return a5(this,oS.SEEK_OFFSET,30)}set seekOffset(e){a4(this,oS.SEEK_OFFSET,e),this.setAttribute("aria-label",aM("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),aj(aZ(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return a5(this,an.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){a4(this,an.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new aH.CustomEvent(ai.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aH.customElements.get("media-seek-forward-button")||aH.customElements.define("media-seek-forward-button",oL);var oM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oD=(e,t,i)=>(oM(e,t,"read from private field"),i?i.call(e):t.get(e)),oR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ox=(e,t,i,a)=>(oM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oN={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},oO=[...Object.values(oN),an.MEDIA_CURRENT_TIME,an.MEDIA_DURATION,an.MEDIA_SEEKABLE],oU=["Enter"," "],oP="&nbsp;/&nbsp;",oW=(e,{timesSep:t=oP}={})=>{var i,a;let r=e.hasAttribute(oN.REMAINING),s=e.hasAttribute(oN.SHOW_DURATION),n=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?a_(0-(l-n)):a_(n);return s?`${d}${t}${a_(l)}`:d},oH=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return void e.setAttribute("aria-valuetext","video not loaded, unknown time.");let s=e.hasAttribute(oN.REMAINING),n=e.hasAttribute(oN.SHOW_DURATION),o=s?aI(0-(r-i)):aI(i);if(!n)return void e.setAttribute("aria-valuetext",o);let l=aI(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class oB extends nr{constructor(){super(),oR(this,ez,void 0),ox(this,ez,this.shadowRoot.querySelector("slot")),oD(this,ez).innerHTML=`${oW(this)}`}static get observedAttributes(){return[...super.observedAttributes,...oO,"disabled"]}connectedCallback(){let{style:e}=a2(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",aM("playback time"));let t=e=>{let{key:i}=e;if(!oU.includes(i))return void this.removeEventListener("keyup",t);this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!oU.includes(r))return void this.removeEventListener("keyup",t);this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){oO.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return a7(this,oN.REMAINING)}set remaining(e){a8(this,oN.REMAINING,e)}get showDuration(){return a7(this,oN.SHOW_DURATION)}set showDuration(e){a8(this,oN.SHOW_DURATION,e)}get noToggle(){return a7(this,oN.NO_TOGGLE)}set noToggle(e){a8(this,oN.NO_TOGGLE,e)}get mediaDuration(){return a5(this,an.MEDIA_DURATION)}set mediaDuration(e){a4(this,an.MEDIA_DURATION,e)}get mediaCurrentTime(){return a5(this,an.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){a4(this,an.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(an.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(an.MEDIA_SEEKABLE);this.setAttribute(an.MEDIA_SEEKABLE,e.join(":"))}update(){let e=oW(this);oH(this),e!==oD(this,ez).innerHTML&&(oD(this,ez).innerHTML=e)}}ez=new WeakMap,aH.customElements.get("media-time-display")||aH.customElements.define("media-time-display",oB);var oV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o$=(e,t,i)=>(oV(e,t,"read from private field"),i?i.call(e):t.get(e)),oF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oG=(e,t,i,a)=>(oV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oK=(e,t,i,a)=>({set _(value){oG(e,t,value,i)},get _(){return o$(e,t,a)}});class oq{constructor(e,t,i){oF(this,eX,void 0),oF(this,eJ,void 0),oF(this,e0,void 0),oF(this,e1,void 0),oF(this,e2,void 0),oF(this,e3,void 0),oF(this,e5,void 0),oF(this,e4,void 0),oF(this,e7,0),oF(this,e8,(e=performance.now())=>{oG(this,e7,requestAnimationFrame(o$(this,e8))),oG(this,e1,performance.now()-o$(this,e0));let t=1e3/this.fps;if(o$(this,e1)>t){oG(this,e0,e-o$(this,e1)%t);let i=1e3/((e-o$(this,eJ))/++oK(this,e2)._),a=(e-o$(this,e3))/1e3/this.duration,r=o$(this,e5)+a*this.playbackRate;r-o$(this,eX).valueAsNumber>0?oG(this,e4,this.playbackRate/this.duration/i):(oG(this,e4,.995*o$(this,e4)),r=o$(this,eX).valueAsNumber+o$(this,e4)),this.callback(r)}}),oG(this,eX,e),this.callback=t,this.fps=i}start(){0===o$(this,e7)&&(oG(this,e0,performance.now()),oG(this,eJ,o$(this,e0)),oG(this,e2,0),o$(this,e8).call(this))}stop(){0!==o$(this,e7)&&(cancelAnimationFrame(o$(this,e7)),oG(this,e7,0))}update({start:e,duration:t,playbackRate:i}){let a=e-o$(this,eX).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),oG(this,e5,e),oG(this,e3,performance.now()),this.duration=t,this.playbackRate=i}}eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e3=new WeakMap,e5=new WeakMap,e4=new WeakMap,e7=new WeakMap,e8=new WeakMap;var oY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oj=(e,t,i)=>(oY(e,t,"read from private field"),i?i.call(e):t.get(e)),oQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oZ=(e,t,i,a)=>(oY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oz=(e,t,i)=>(oY(e,t,"access private method"),i);let oX=e=>{let t=e.range,i=aI(+o1(e)),a=aI(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},oJ=aB.createElement("template");oJ.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${an.MEDIA_PREVIEW_IMAGE}], [${an.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${an.MEDIA_PREVIEW_IMAGE}], [${an.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${an.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${an.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${an.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${an.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${an.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${an.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${an.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${an.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${an.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${an.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${an.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${an.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let o0=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},o1=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class o2 extends s2{constructor(){super(),oQ(this,to),oQ(this,td),oQ(this,tc),oQ(this,tp),oQ(this,tE),oQ(this,tg),oQ(this,tA),oQ(this,tk),oQ(this,e6,void 0),oQ(this,e9,void 0),oQ(this,te,void 0),oQ(this,tt,void 0),oQ(this,ti,void 0),oQ(this,ta,void 0),oQ(this,tr,void 0),oQ(this,ts,void 0),oQ(this,tn,void 0),oQ(this,th,e=>{this.dragging||(af(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.container.appendChild(oJ.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),oZ(this,te,this.shadowRoot.querySelectorAll('[part~="box"]')),oZ(this,ti,this.shadowRoot.querySelector('[part~="preview-box"]')),oZ(this,ta,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);oZ(this,tr,parseInt(e.getPropertyValue("--media-box-padding-left"))),oZ(this,ts,parseInt(e.getPropertyValue("--media-box-padding-right"))),oZ(this,e9,new oq(this.range,oj(this,th),60))}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_PAUSED,an.MEDIA_DURATION,an.MEDIA_SEEKABLE,an.MEDIA_CURRENT_TIME,an.MEDIA_PREVIEW_IMAGE,an.MEDIA_PREVIEW_TIME,an.MEDIA_PREVIEW_CHAPTER,an.MEDIA_BUFFERED,an.MEDIA_PLAYBACK_RATE,an.MEDIA_LOADING,an.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",aM("seek")),oz(this,to,tl).call(this),oZ(this,e6,this.getRootNode()),null==(e=oj(this,e6))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),oz(this,to,tl).call(this),null==(e=oj(this,e6))||e.removeEventListener("transitionstart",this),oZ(this,e6,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===an.MEDIA_CURRENT_TIME||e===an.MEDIA_PAUSED||e===an.MEDIA_ENDED||e===an.MEDIA_LOADING||e===an.MEDIA_DURATION||e===an.MEDIA_SEEKABLE?(oj(this,e9).update({start:o0(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),oz(this,to,tl).call(this),oX(this)):e===an.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===an.MEDIA_DURATION||e===an.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=oj(this,tn),this.updateBar()))}get mediaChaptersCues(){return oj(this,tn)}set mediaChaptersCues(e){var t;oZ(this,tn,e),this.updateSegments(null==(t=oj(this,tn))?void 0:t.map(e=>({start:o0(this,e.startTime),end:o0(this,e.endTime)})))}get mediaPaused(){return a7(this,an.MEDIA_PAUSED)}set mediaPaused(e){a8(this,an.MEDIA_PAUSED,e)}get mediaLoading(){return a7(this,an.MEDIA_LOADING)}set mediaLoading(e){a8(this,an.MEDIA_LOADING,e)}get mediaDuration(){return a5(this,an.MEDIA_DURATION)}set mediaDuration(e){a4(this,an.MEDIA_DURATION,e)}get mediaCurrentTime(){return a5(this,an.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){a4(this,an.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return a5(this,an.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){a4(this,an.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(an.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(an.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(an.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(an.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(an.MEDIA_SEEKABLE);this.setAttribute(an.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return a6(this,an.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){a9(this,an.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return a5(this,an.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){a4(this,an.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return a7(this,an.MEDIA_ENDED)}set mediaEnded(e){a8(this,an.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=o0(this,r)}let{style:a}=a2(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=a2(this.shadowRoot,"#current-rail"),t=a2(this.shadowRoot,'[part~="current-box"]'),i=oz(this,tc,tm).call(this,oj(this,ta)),a=oz(this,tp,tv).call(this,i,this.range.valueAsNumber),r=oz(this,tE,tb).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":oz(this,tk,tw).call(this);break;case"pointermove":oz(this,tg,tf).call(this,e);break;case"pointerup":case"pointerleave":oz(this,tA,ty).call(this,null);break;case"transitionstart":az(e.target,this)&&setTimeout(()=>oz(this,to,tl).call(this),0)}}}e6=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakMap,tr=new WeakMap,ts=new WeakMap,tn=new WeakMap,to=new WeakSet,tl=function(){oz(this,td,tu).call(this)?oj(this,e9).start():oj(this,e9).stop()},td=new WeakSet,tu=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&a1(this)},th=new WeakMap,tc=new WeakSet,tm=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?aX(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,s=-(a.left-i.left-r/2),n=i.right-a.left-r/2;return{box:{width:r,min:s,max:n},bounds:i,range:a}},tp=new WeakSet,tv=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:s}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tE=new WeakSet,tb=function(e,t){let{width:i,min:a,max:r}=e.box,s=t*e.range.width;if(s<a+oj(this,tr)){let t=e.range.left-e.bounds.left-oj(this,tr);return`${s-i/2+t}px`}if(s>r-oj(this,ts)){let t=e.bounds.right-e.range.right-oj(this,ts);return`${s+i/2-t-e.range.width}px`}return 0},tg=new WeakSet,tf=function(e){let t=[...oj(this,te)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void oz(this,tA,ty).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=a2(this.shadowRoot,"#preview-rail"),r=a2(this.shadowRoot,'[part~="preview-box"]'),s=oz(this,tc,tm).call(this,oj(this,ti)),n=(e.clientX-s.range.left)/s.range.width;n=Math.max(0,Math.min(1,n));let o=oz(this,tp,tv).call(this,s,n),l=oz(this,tE,tb).call(this,s,n);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${s.box.width}px`),1>Math.abs(Math.round(oj(this,tt))-Math.round(n*i))&&n>.01&&n<.99||(oZ(this,tt,n*i),oz(this,tA,ty).call(this,oj(this,tt)))},tA=new WeakSet,ty=function(e){this.dispatchEvent(new aH.CustomEvent(ai.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},tk=new WeakSet,tw=function(){oj(this,e9).stop();let e=o1(this);this.dispatchEvent(new aH.CustomEvent(ai.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},aH.customElements.get("media-time-range")||aH.customElements.define("media-time-range",o2);let o3={PLACEMENT:"placement",BOUNDS:"bounds"},o5=aB.createElement("template");o5.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class o4 extends aH.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!a1(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=aX(this,"#"+this.bounds))?e:aq(this);if(!a)return;let{x:r,width:s}=a.getBoundingClientRect(),{x:n,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=n-r+d-h,m=n+o-(r+s)+d+h;return c<0?void this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):void this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o5.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[o3.PLACEMENT,o3.BOUNDS]}get placement(){return a6(this,o3.PLACEMENT)}set placement(e){a9(this,o3.PLACEMENT,e)}get bounds(){return a6(this,o3.BOUNDS)}set bounds(e){a9(this,o3.BOUNDS,e)}}aH.customElements.get("media-tooltip")||aH.customElements.define("media-tooltip",o4);let o7=e=>e.mediaMuted?0:e.mediaVolume,o8=e=>`${Math.round(100*e)}%`;class o6 extends s2{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_VOLUME,an.MEDIA_MUTED,an.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new aH.CustomEvent(ai.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",aM("volume"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===an.MEDIA_VOLUME||e===an.MEDIA_MUTED)&&(this.range.valueAsNumber=o7(this),this.range.setAttribute("aria-valuetext",o8(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return a5(this,an.MEDIA_VOLUME,1)}set mediaVolume(e){a4(this,an.MEDIA_VOLUME,e)}get mediaMuted(){return a7(this,an.MEDIA_MUTED)}set mediaMuted(e){a8(this,an.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return a6(this,an.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){a9(this,an.MEDIA_VOLUME_UNAVAILABLE,e)}}aH.customElements.get("media-volume-range")||aH.customElements.define("media-volume-range",o6);var o9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},le=(e,t,i)=>(o9(e,t,"read from private field"),i?i.call(e):t.get(e)),lt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},li=(e,t,i,a)=>(o9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let la={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof lh&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof lh?a.element[a.attributeName]=t:a.value=t}}}};class lr extends aH.DocumentFragment{constructor(e,t,i=la){var a;super(),lt(this,tI,void 0),lt(this,t_,void 0),this.append(e.content.cloneNode(!0)),li(this,tI,ls(this)),li(this,t_,i),null==(a=i.createCallback)||a.call(i,this,le(this,tI),t),i.processCallback(this,le(this,tI),t)}update(e){le(this,t_).processCallback(this,le(this,tI),e)}}tI=new WeakMap,t_=new WeakMap;let ls=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let s=new lu;for([i,a]of lo(r.value))if(i){let i=new lh(e,r.name,r.namespaceURI);s.append(i),t.push([a,i])}else s.append(a);r.value=s.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let s=r.data;if(1===r.nodeType||s.includes("{{")){let n=[];if(s)for([i,a]of lo(s))if(i){let i=new lc(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new lm(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else ls(r,t);return t},ln={},lo=e=>{let t="",i=0,a=ln[e],r=0,s;if(a)return a;for(a=[];s=e[r];r++)"{"===s&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==s||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=s||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),ln[e]=a};class ll{get value(){return""}set value(e){}toString(){return this.value}}let ld=new WeakMap;class lu{constructor(){lt(this,tT,[])}[Symbol.iterator](){return le(this,tT).values()}get length(){return le(this,tT).length}item(e){return le(this,tT)[e]}append(...e){for(let t of e)t instanceof lh&&ld.set(t,this),le(this,tT).push(t)}toString(){return le(this,tT).join("")}}tT=new WeakMap;class lh extends ll{constructor(e,t,i){super(),lt(this,tD),lt(this,tS,""),lt(this,tC,void 0),lt(this,tL,void 0),lt(this,tM,void 0),li(this,tC,e),li(this,tL,t),li(this,tM,i)}get attributeName(){return le(this,tL)}get attributeNamespace(){return le(this,tM)}get element(){return le(this,tC)}get value(){return le(this,tS)}set value(e){le(this,tS)!==e&&(li(this,tS,e),le(this,tD,tR)&&1!==le(this,tD,tR).length?le(this,tC).setAttributeNS(le(this,tM),le(this,tL),le(this,tD,tR).toString()):null==e?le(this,tC).removeAttributeNS(le(this,tM),le(this,tL)):le(this,tC).setAttributeNS(le(this,tM),le(this,tL),e))}get booleanValue(){return le(this,tC).hasAttributeNS(le(this,tM),le(this,tL))}set booleanValue(e){if(le(this,tD,tR)&&1!==le(this,tD,tR).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}tS=new WeakMap,tC=new WeakMap,tL=new WeakMap,tM=new WeakMap,tD=new WeakSet,tR=function(){return ld.get(this)};class lc extends ll{constructor(e,t){super(),lt(this,tx,void 0),lt(this,tN,void 0),li(this,tx,e),li(this,tN,t?[...t]:[new Text])}get replacementNodes(){return le(this,tN)}get parentNode(){return le(this,tx)}get nextSibling(){return le(this,tN)[le(this,tN).length-1].nextSibling}get previousSibling(){return le(this,tN)[0].previousSibling}get value(){return le(this,tN).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),li(this,tN,function(e,t,i,a=null){let r=0,s,n,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(s=t[r];r<l;)o=i[r++],n=s?s.nextSibling:a,s==o?s=n:r<l&&i[r]==n?(e.replaceChild(o,s),s=n):e.insertBefore(o,s);for(;s!=a;)n=s.nextSibling,e.removeChild(s),s=n}return i}(le(this,tN)[0].parentNode,le(this,tN),t,this.nextSibling))}}tx=new WeakMap,tN=new WeakMap;class lm extends lc{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let lp={string:e=>String(e)};class lv{constructor(e){this.template=e,this.state=void 0}}let lE=new WeakMap,lb=new WeakMap,lg={partial:(e,t)=>{t[e.expression]=new lv(e.template)},if:(e,t)=>{var i;if(lk(e.expression,t))if(lE.get(e)!==e.template){lE.set(e,e.template);let i=new lr(e.template,t,lA);e.replace(i),lb.set(e,i)}else null==(i=lb.get(e))||i.update(t);else e.replace(""),lE.delete(e),lb.delete(e)}},lf=Object.keys(lg),lA={processCallback(e,t,i){var a,r;if(i)for(let[e,s]of t){if(s instanceof lm){if(!s.directive){let e=lf.find(e=>s.template.hasAttribute(e));e&&(s.directive=e,s.expression=s.template.getAttribute(e))}null==(a=lg[s.directive])||a.call(lg,s,i);continue}let t=lk(e,i);if(t instanceof lv){lE.get(s)!==t.template?(lE.set(s,t.template),s.value=t=new lr(t.template,t.state,lA),lb.set(s,t)):null==(r=lb.get(s))||r.update(t.state);continue}t?(s instanceof lh&&s.attributeName.startsWith("aria-")&&(t=String(t)),s instanceof lh?"boolean"==typeof t?s.booleanValue=t:"function"==typeof t?s.element[s.attributeName]=t:s.value=t:(s.value=t,lE.delete(s),lb.delete(s))):s instanceof lh?s.value=void 0:(s.value=void 0,lE.delete(s),lb.delete(s))}}},ly={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=lp[t])?void 0:i.call(lp,e)}};function lk(e,t={}){var i,a,r,s,n,o,l;let d=(function(e,t){let i,a,r,s=[];for(;e;){for(let s in r=null,i=e.length,t)(a=t[s].exec(e))&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&s.push({token:e.substr(0,i),type:void 0}),r&&s.push(r),e=e.substr(i+(r?r.token.length:0))}return s})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lw(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return lw(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(s=l[e+1])?void 0:s.token,d=null==(n=l[e+2])?void 0:n.token;i&&"="===a&&(o[i]=l_(d,t))}return i}if(1===d.length)return lI(d[0])?l_(d[0].token,t):lw(e);if(2===d.length){let i=ly[null==(o=d[0])?void 0:o.token];return i&&lI(d[1])?i(l_(d[1].token,t)):lw(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=ly[i];if(!a||!lI(d[0])||!lI(d[2]))return lw(e);let r=l_(d[0].token,t);return a(r,"|"===i?d[2].token:l_(d[2].token,t))}}function lw(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lI({type:e}){return["number","boolean","string","param"].includes(e)}function l_(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):aA(e)?parseFloat(e):t[e]}var lT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lS=(e,t,i)=>(lT(e,t,"read from private field"),i?i.call(e):t.get(e)),lC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lL=(e,t,i,a)=>(lT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lM=(e,t,i)=>(lT(e,t,"access private method"),i);let lD={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},lR=aB.createElement("template");lR.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class lx extends aH.HTMLElement{constructor(){super(),lC(this,tW),lC(this,tB),lC(this,tO,void 0),lC(this,tU,void 0),lC(this,tP,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(lD[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(ao.BREAKPOINTS_COMPUTED,this.render),lM(this,tW,tH).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=lS(this,tO))?e:this.constructor.template}set template(e){lL(this,tP,null),lL(this,tO,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>lD[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=lD[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(aA(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&lM(this,tB,tV).call(this)}connectedCallback(){lM(this,tB,tV).call(this)}createRenderer(){this.template&&this.template!==lS(this,tU)&&(lL(this,tU,this.template),this.renderer=new lr(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(lR.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function lN(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function lO(e){return e.split("-")[0]}tO=new WeakMap,tU=new WeakMap,tP=new WeakMap,tW=new WeakSet,tH=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},tB=new WeakSet,tV=function(){var e;let t=this.getAttribute("template");if(!t||t===lS(this,tP))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){lL(this,tP,t),lL(this,tO,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(lL(this,tP,t),lN(t).then(e=>{let t=aB.createElement("template");t.innerHTML=e,lL(this,tO,t),this.createRenderer()}).catch(console.error))},lx.observedAttributes=["template"],lx.processor=lA,aH.customElements.get("media-theme")||aH.customElements.define("media-theme",lx);class lU extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class lP extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var lW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lH=(e,t,i)=>(lW(e,t,"read from private field"),i?i.call(e):t.get(e)),lB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lV=(e,t,i,a)=>(lW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l$=(e,t,i)=>(lW(e,t,"access private method"),i);function lF({type:e,text:t,value:i,checked:a}){let r=aB.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let s=aB.createElement("span");return s.textContent=t,r.append(s),r}function lG(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let lK=aB.createElement("template");lK.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    } 

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: var(--media-cursor, default);
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: var(--media-cursor, pointer);
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let lq={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class lY extends aH.HTMLElement{constructor(){super(),lB(this,tQ),lB(this,tX),lB(this,t0),lB(this,t2),lB(this,t5),lB(this,t6),lB(this,ie),lB(this,ii),lB(this,ir),lB(this,io),lB(this,id),lB(this,ih),lB(this,im),lB(this,iv),lB(this,ib),lB(this,iA),lB(this,ik),lB(this,t$,null),lB(this,tF,null),lB(this,tG,null),lB(this,tK,new Set),lB(this,tq,void 0),lB(this,tY,!1),lB(this,tj,null),lB(this,tz,()=>{let e=lH(this,tK),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));lV(this,tK,t)}),lB(this,t7,()=>{l$(this,t6,t9).call(this),l$(this,ie,it).call(this,!1)}),lB(this,t8,()=>{l$(this,t6,t9).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),lV(this,tq,new MutationObserver(lH(this,tz))),lH(this,tq).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[lq.DISABLED,lq.HIDDEN,lq.STYLE,lq.ANCHOR,aa.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":l$(this,tQ,tZ).call(this,e);break;case"invoke":l$(this,t0,t1).call(this,e);break;case"click":l$(this,ii,ia).call(this,e);break;case"toggle":l$(this,io,il).call(this,e);break;case"focusout":l$(this,ih,ic).call(this,e);break;case"keydown":l$(this,im,ip).call(this,e)}}connectedCallback(){var e,t;lV(this,tj,a3(this.shadowRoot,":host")),l$(this,tX,tJ).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),lV(this,t$,aY(this)),null==(t=null==(e=lH(this,t$))?void 0:e.associateElement)||t.call(e,this),this.hidden||(aG(lQ(this),lH(this,t7)),aG(this,lH(this,t8)))}disconnectedCallback(){var e,t;aK(lQ(this),lH(this,t7)),aK(this,lH(this,t8)),this.disable(),null==(t=null==(e=lH(this,t$))?void 0:e.unassociateElement)||t.call(e,this),lV(this,t$,null)}attributeChangedCallback(e,t,i){var a,r,s,n;e===lq.HIDDEN&&i!==t?(lH(this,tY)||lV(this,tY,!0),this.hidden?l$(this,t5,t4).call(this):l$(this,t2,t3).call(this),this.dispatchEvent(new lP({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===aa.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=lH(this,t$))?void 0:a.unassociateElement)||r.call(a,this),lV(this,t$,null)),i&&this.isConnected&&(lV(this,t$,aY(this)),null==(n=null==(s=lH(this,t$))?void 0:s.associateElement)||n.call(s,this))):e===lq.DISABLED&&i!==t?null==i?this.enable():this.disable():e===lq.STYLE&&i!==t&&l$(this,tX,tJ).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=a0(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lj)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&l$(this,ik,iw).call(this,t)}focus(){if(lV(this,tF,aJ()),this.items.length){l$(this,iA,iy).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=l$(this,iv,iE).call(this,e);i&&(l$(this,ik,iw).call(this,i,"checkbox"===i.type),lH(this,tG)&&!this.hidden&&(null==(t=lH(this,tF))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,s=null!=(i=null!=(t=l$(this,iv,iE).call(this,e))?t:l$(this,ib,ig).call(this))?i:r[0],n=Math.max(0,r.indexOf(s));"ArrowDown"===a?n++:"ArrowUp"===a?n--:"Home"===e.key?n=0:"End"===e.key&&(n=r.length-1),n<0&&(n=r.length-1),n>r.length-1&&(n=0),l$(this,iA,iy).call(this,r[n]),r[n].focus()}}function lj(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function lQ(e){var t;return null!=(t=e.getAttribute("bounds")?aX(e,`#${e.getAttribute("bounds")}`):aq(e)||e.parentElement)?t:e}t$=new WeakMap,tF=new WeakMap,tG=new WeakMap,tK=new WeakMap,tq=new WeakMap,tY=new WeakMap,tj=new WeakMap,tQ=new WeakSet,tZ=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||lH(this,tz).call(this)},tz=new WeakMap,tX=new WeakSet,tJ=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},t0=new WeakSet,t1=function(e){lV(this,tG,e.relatedTarget),az(this,e.relatedTarget)||(this.hidden=!this.hidden)},t2=new WeakSet,t3=function(){var e;null==(e=lH(this,tG))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),aG(lQ(this),lH(this,t7)),aG(this,lH(this,t8))},t5=new WeakSet,t4=function(){var e;null==(e=lH(this,tG))||e.setAttribute("aria-expanded","false"),aK(lQ(this),lH(this,t7)),aK(this,lH(this,t8))},t7=new WeakMap,t8=new WeakMap,t6=new WeakSet,t9=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(lO(i))?"y":"x")?"y":"x",s="y"===r?"height":"width",n=lO(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[s]/2-t[s]/2;switch(n){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=lQ(this).getBoundingClientRect(),r=a.width-t-e,s=a.height-i-this.offsetHeight,{style:n}=lH(this,tj);n.setProperty("position","absolute"),n.setProperty("right",`${Math.max(0,r)}px`),n.setProperty("--_menu-bottom",`${s}px`);let o=getComputedStyle(this),l=n.getPropertyValue("--_menu-bottom")===o.bottom?s:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},ie=new WeakSet,it=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=lH(this,tj);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),l$(this,t6,t9).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),l$(this,t6,t9).call(this);a.removeProperty("--media-menu-transition-in")},ii=new WeakSet,ia=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(lH(this,ir,is))){null==(t=lH(this,tF))||t.focus(),this.hidden=!0;return}let i=l$(this,iv,iE).call(this,e);!i||i.hasAttribute("disabled")||(l$(this,iA,iy).call(this,i),this.handleSelect(e))},ir=new WeakSet,is=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},io=new WeakSet,il=function(e){if(e.target===this)return;l$(this,id,iu).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new lU({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);l$(this,ie,it).call(this,!0)},id=new WeakSet,iu=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},ih=new WeakSet,ic=function(e){var t;az(this,e.relatedTarget)||(lH(this,tY)&&(null==(t=lH(this,tF))||t.focus()),lH(this,tG)&&lH(this,tG)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},im=new WeakSet,ip=function(e){var t,i,a,r,s;let{key:n,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(n))if(e.preventDefault(),e.stopPropagation(),"Tab"===n){if(lH(this,tY)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===n?(null==(s=lH(this,tF))||s.focus(),lH(this,tY)&&(this.hidden=!0)):"Enter"===n||" "===n?this.handleSelect(e):this.handleMove(e)},iv=new WeakSet,iE=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},ib=new WeakSet,ig=function(){return this.items.find(e=>0===e.tabIndex)},iA=new WeakSet,iy=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},ik=new WeakSet,iw=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},lY.template=lK,aH.customElements.get("media-chrome-menu")||aH.customElements.define("media-chrome-menu",lY);var lZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lz=(e,t,i)=>(lZ(e,t,"read from private field"),i?i.call(e):t.get(e)),lX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lJ=(e,t,i,a)=>(lZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l0=(e,t,i)=>(lZ(e,t,"access private method"),i);let l1=aB.createElement("template");l1.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: var(--media-cursor, pointer);
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: var(--media-cursor, pointer);
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let l2={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class l3 extends aH.HTMLElement{constructor(){super(),lX(this,iT),lX(this,iC),lX(this,iM),lX(this,ix),lX(this,iO),lX(this,iP),lX(this,iI,!1),lX(this,i_,void 0),lX(this,iR,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,s=aB.createElement("span");s.textContent=null!=r?r:"",i.replaceChildren(s)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[l2.TYPE,l2.DISABLED,l2.CHECKED,l2.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),l5(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":l0(this,iT,iS).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":l0(this,iO,iU).call(this,e);break;case"keyup":l0(this,ix,iN).call(this,e)}}attributeChangedCallback(e,t,i){e===l2.CHECKED&&l5(this)&&!lz(this,iI)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===l2.TYPE&&i!==t?this.role="menuitem"+i:e===l2.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(l2.DISABLED)||this.enable(),this.role="menuitem"+this.type,lJ(this,i_,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),l0(this,iP,iW).call(this)}disconnectedCallback(){this.disable(),l0(this,iP,iW).call(this),lJ(this,i_,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=a0(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(l2.TYPE))?e:""}set type(e){this.setAttribute(l2.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(l2.VALUE))?e:this.text}set value(e){this.setAttribute(l2.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(l5(this))return"true"===this.getAttribute("aria-checked")}set checked(e){l5(this)&&(lJ(this,iI,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!l5(this)&&this.invokeTargetElement&&az(this,e.target)&&this.invokeTargetElement.dispatchEvent(new lU({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function l5(e){return"radio"===e.type||"checkbox"===e.type}iI=new WeakMap,i_=new WeakMap,iT=new WeakSet,iS=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?l0(this,iC,iL).call(this):l0(this,iM,iD).call(this))},iC=new WeakSet,iL=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",lz(this,iR)),this.submenuElement.addEventListener("addmenuitem",lz(this,iR)),this.submenuElement.addEventListener("removemenuitem",lz(this,iR)),lz(this,iR).call(this)},iM=new WeakSet,iD=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",lz(this,iR)),this.submenuElement.removeEventListener("addmenuitem",lz(this,iR)),this.submenuElement.removeEventListener("removemenuitem",lz(this,iR)),lz(this,iR).call(this)},iR=new WeakMap,ix=new WeakSet,iN=function(e){let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",l0(this,ix,iN));this.handleClick(e)},iO=new WeakSet,iU=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",l0(this,ix,iN));this.addEventListener("keyup",l0(this,ix,iN),{once:!0})},iP=new WeakSet,iW=function(){var e;let t=null==(e=lz(this,i_))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},l3.template=l1,aH.customElements.get("media-chrome-menu-item")||aH.customElements.define("media-chrome-menu-item",l3);let l4=aB.createElement("template");l4.innerHTML=lY.template.innerHTML+`
  <style>
    :host {
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-settings-menu-background,
          var(--media-menu-background,
            var(--media-control-background,
              var(--media-secondary-color, var(--_menu-bg)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class l7 extends lY{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aq(this).querySelector("media-settings-menu-button")}}l7.template=l4,aH.customElements.get("media-settings-menu")||aH.customElements.define("media-settings-menu",l7);let l8=aB.createElement("template");l8.innerHTML=l3.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(iH=l8.content)?void 0:iH.querySelector)&&(l8.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class l6 extends l3{}l6.template=l8,aH.customElements.get("media-settings-menu-item")||aH.customElements.define("media-settings-menu-item",l6);class l9 extends s_{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=a0(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new lU({relatedTarget:this}))}}aH.customElements.get("media-chrome-menu-button")||aH.customElements.define("media-chrome-menu-button",l9);let de=aB.createElement("template");de.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class dt extends l9{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:de,tooltipContent:aM("Settings")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aM("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aq(this).querySelector("media-settings-menu")}}aH.customElements.get("media-settings-menu-button")||aH.customElements.define("media-settings-menu-button",dt);var di=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},da=(e,t,i)=>(di(e,t,"read from private field"),i?i.call(e):t.get(e)),dr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ds=(e,t,i,a)=>(di(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dn=(e,t,i)=>(di(e,t,"access private method"),i);class dl extends lY{constructor(){super(...arguments),dr(this,i$),dr(this,iG),dr(this,iB,[]),dr(this,iV,void 0)}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_AUDIO_TRACK_LIST,an.MEDIA_AUDIO_TRACK_ENABLED,an.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===an.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===an.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;ds(this,iB,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(ag)),dn(this,i$,iF).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dn(this,iG,iK))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dn(this,iG,iK))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=aq(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return da(this,iB)}set mediaAudioTrackList(e){ds(this,iB,e),dn(this,i$,iF).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=a6(this,an.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){a9(this,an.MEDIA_AUDIO_TRACK_ENABLED,e)}}iB=new WeakMap,iV=new WeakMap,i$=new WeakSet,iF=function(){if(da(this,iV)===JSON.stringify(this.mediaAudioTrackList))return;ds(this,iV,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=lF({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(e)}},iG=new WeakSet,iK=function(){if(null==this.value)return;let e=new aH.CustomEvent(ai.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aH.customElements.get("media-audio-track-menu")||aH.customElements.define("media-audio-track-menu",dl);let dd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,du=aB.createElement("template");du.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${dd}</slot>
`;class dh extends l9{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_AUDIO_TRACK_ENABLED,an.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:du,tooltipContent:aM("Audio")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aM("Audio"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aq(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=a6(this,an.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){a9(this,an.MEDIA_AUDIO_TRACK_ENABLED,e)}}aH.customElements.get("media-audio-track-menu-button")||aH.customElements.define("media-audio-track-menu-button",dh);var dc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dm=(e,t,i)=>(dc(e,t,"read from private field"),i?i.call(e):t.get(e)),dp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dv=(e,t,i,a)=>(dc(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dE=(e,t,i)=>(dc(e,t,"access private method"),i);let db=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,dg=aB.createElement("template");dg.innerHTML=lY.template.innerHTML+`
  <slot name="captions-indicator" hidden>${db}</slot>`;class df extends lY{constructor(){super(...arguments),dp(this,iY),dp(this,iQ),dp(this,iq,void 0)}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_SUBTITLES_LIST,an.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_SUBTITLES_LIST&&t!==i?dE(this,iY,ij).call(this):e===an.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dE(this,iQ,iZ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dE(this,iQ,iZ))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aq(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return dA(this,an.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dy(this,an.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dA(this,an.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dy(this,an.MEDIA_SUBTITLES_SHOWING,e)}}iq=new WeakMap,iY=new WeakSet,ij=function(){var e;if(dm(this,iq)===JSON.stringify(this.mediaSubtitlesList))return;dv(this,iq,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=lF({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=lF({type:"radio",text:this.formatMenuItemText(t.label,t),value:r_(t),checked:this.value==r_(t)});i.prepend(lG(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(lG(this,"captions-indicator")),this.defaultSlot.append(i)}},iQ=new WeakSet,iZ=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(an.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aH.CustomEvent(ai.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aH.CustomEvent(ai.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},df.template=dg;let dA=(e,t)=>{let i=e.getAttribute(t);return i?rw(i):[]},dy=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=rT(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aH.customElements.get("media-captions-menu")||aH.customElements.define("media-captions-menu",df);var dk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dI=(e,t,i,a)=>(dk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let d_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,dS=aB.createElement("template");dS.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${d_}</slot>
    <slot name="off">${dT}</slot>
  </slot>
`;let dC=e=>{e.setAttribute("aria-checked",rD(e).toString())};class dL extends l9{constructor(e={}){super({slotTemplate:dS,tooltipContent:aM("Captions"),...e}),dw(this,iz,void 0),dI(this,iz,!1)}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_SUBTITLES_LIST,an.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aM("closed captions")),dC(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_SUBTITLES_SHOWING&&dC(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aq(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return dM(this,an.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dD(this,an.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dM(this,an.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dD(this,an.MEDIA_SUBTITLES_SHOWING,e)}}iz=new WeakMap;let dM=(e,t)=>{let i=e.getAttribute(t);return i?rw(i):[]},dD=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=rT(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aH.customElements.get("media-captions-menu-button")||aH.customElements.define("media-captions-menu-button",dL);var dR=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dx=(e,t,i)=>(dR(e,t,"read from private field"),i?i.call(e):t.get(e)),dN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dO=(e,t,i)=>(dR(e,t,"access private method"),i);let dU={RATES:"rates"};class dP extends lY{constructor(){super(),dN(this,iJ),dN(this,i1),dN(this,iX,new rA(this,dU.RATES,{defaultValue:n5})),dO(this,iJ,i0).call(this)}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_PLAYBACK_RATE,dU.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===an.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===dU.RATES&&t!=i&&(dx(this,iX).value=i,dO(this,iJ,i0).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dO(this,i1,i2))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dO(this,i1,i2))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aq(this).querySelector("media-playback-rate-menu-button")}get rates(){return dx(this,iX)}set rates(e){e?Array.isArray(e)&&(dx(this,iX).value=e.join(" ")):dx(this,iX).value="",dO(this,iJ,i0).call(this)}get mediaPlaybackRate(){return a5(this,an.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){a4(this,an.MEDIA_PLAYBACK_RATE,e)}}iX=new WeakMap,iJ=new WeakSet,i0=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=lF({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(t)}},i1=new WeakSet,i2=function(){if(!this.value)return;let e=new aH.CustomEvent(ai.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aH.customElements.get("media-playback-rate-menu")||aH.customElements.define("media-playback-rate-menu",dP);var dW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dH=(e,t,i)=>(dW(e,t,"read from private field"),i?i.call(e):t.get(e)),dB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let dV={RATES:"rates"},d$=[1,1.2,1.5,1.7,2],dF=aB.createElement("template");dF.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;class dG extends l9{constructor(e={}){super({slotTemplate:dF,tooltipContent:aM("Playback rate"),...e}),dB(this,i3,new rA(this,dV.RATES,{defaultValue:d$})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_PLAYBACK_RATE,dV.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===dV.RATES&&(dH(this,i3).value=i),e===an.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aM("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aq(this).querySelector("media-playback-rate-menu")}get rates(){return dH(this,i3)}set rates(e){e?Array.isArray(e)&&(dH(this,i3).value=e.join(" ")):dH(this,i3).value=""}get mediaPlaybackRate(){return a5(this,an.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){a4(this,an.MEDIA_PLAYBACK_RATE,e)}}i3=new WeakMap,aH.customElements.get("media-playback-rate-menu-button")||aH.customElements.define("media-playback-rate-menu-button",dG);var dK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dq=(e,t,i)=>(dK(e,t,"read from private field"),i?i.call(e):t.get(e)),dY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dj=(e,t,i,a)=>(dK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dQ=(e,t,i)=>(dK(e,t,"access private method"),i);class dZ extends lY{constructor(){super(...arguments),dY(this,i7),dY(this,i6),dY(this,i5,[]),dY(this,i4,{})}static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_RENDITION_LIST,an.MEDIA_RENDITION_SELECTED,an.MEDIA_RENDITION_UNAVAILABLE,an.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===an.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",dQ(this,i7,i8).call(this);else if(e===an.MEDIA_RENDITION_LIST&&t!==i)dj(this,i5,null==i?void 0:i.split(/\s+/).map(aE)),dQ(this,i7,i8).call(this);else e===an.MEDIA_HEIGHT&&t!==i&&dQ(this,i7,i8).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dQ(this,i6,i9))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dQ(this,i6,i9))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aq(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return dq(this,i5)}set mediaRenditionList(e){dj(this,i5,e),dQ(this,i7,i8).call(this)}get mediaRenditionSelected(){return a6(this,an.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){a9(this,an.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return a5(this,an.MEDIA_HEIGHT)}set mediaHeight(e){a4(this,an.MEDIA_HEIGHT,e)}}i5=new WeakMap,i4=new WeakMap,i7=new WeakSet,i8=function(){if(dq(this,i4).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&dq(this,i4).mediaHeight===this.mediaHeight)return;dq(this,i4).mediaRenditionList=JSON.stringify(this.mediaRenditionList),dq(this,i4).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=lF({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(e)}let i=lF({type:"radio",text:t?this.formatMenuItemText(`Auto (${this.mediaHeight}p)`):this.formatMenuItemText("Auto"),value:"auto",checked:t}),a=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";i.dataset.description=a,i.prepend(lG(this,"checked-indicator")),this.defaultSlot.append(i)},i6=new WeakSet,i9=function(){if(null==this.value)return;let e=new aH.CustomEvent(ai.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aH.customElements.get("media-rendition-menu")||aH.customElements.define("media-rendition-menu",dZ);let dz=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,dX=aB.createElement("template");dX.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${dz}</slot>
`;class dJ extends l9{static get observedAttributes(){return[...super.observedAttributes,an.MEDIA_RENDITION_SELECTED,an.MEDIA_RENDITION_UNAVAILABLE,an.MEDIA_HEIGHT]}constructor(){super({slotTemplate:dX,tooltipContent:aM("Quality")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aM("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aq(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return a6(this,an.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){a9(this,an.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return a5(this,an.MEDIA_HEIGHT)}set mediaHeight(e){a4(this,an.MEDIA_HEIGHT,e)}}aH.customElements.get("media-rendition-menu-button")||aH.customElements.define("media-rendition-menu-button",dJ);let d0=aH.document?.createElement?.("template");d0&&(d0.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only \`Auto\` is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              \`visibility\` didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class d1 extends lx{static template=d0}aH.customElements&&!aH.customElements.get("media-theme-sutro")&&aH.customElements.define("media-theme-sutro",d1);var d2=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),d3={className:"class",htmlFor:"for"},d5=function({react:e,tagName:t,elementClass:i,events:a,displayName:r,toAttributeName:s=function(e){return e.toLowerCase()},toAttributeValue:n=function(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:"object"!=typeof e||null===e?e:void 0}}){let o=Number.parseInt(e.version)>=19,l=e.forwardRef((a,r)=>{let l=e.useRef(null);e.useRef(new Map);let d={},u={},h={},c={};for(let[e,t]of Object.entries(a)){if(d2.has(e)){h[e]=t;continue}let a=s(d3[e]??e);if(e in i.prototype&&!(e in(globalThis.HTMLElement?.prototype??{}))&&!i.observedAttributes?.some(e=>e===a)){c[e]=t;continue}if(e.startsWith("on")){d[e]=t;continue}let r=n(t);a&&null!=r&&(u[a]=String(r),o||(h[a]=r)),a&&o&&(h[a]=t)}if(i?.getTemplateHTML&&i?.shadowRootOptions){let{mode:t,delegatesFocus:a}=i.shadowRootOptions;h.children=[e.createElement("template",{shadowrootmode:t,shadowrootdelegatesfocus:a,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(u)}}),h.children]}return e.createElement(t,{...h,ref:e.useCallback(e=>{l.current=e,"function"==typeof r?r(e):null!==r&&(r.current=e)},[r])})});return l.displayName=r??i.name,l}({react:at,tagName:"media-theme-sutro",elementClass:d1});let d4="mux.com",d7=(e,{token:t,thumbnailTime:i,width:a,customDomain:r=d4}={})=>{let s=null==t?i:void 0,{aud:n}=function(e){let t=(e??"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}(t);if(!t||"t"===n)return`https://image.${r}/${e}/thumbnail.webp${function(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}({token:t,time:s,width:a})}`};JSON.parse(process.env.NEXT_PUBLIC_DEV_VIDEO_OPTS??process.env.NEXT_PUBLIC_VIDEO_OPTS??"{}");let d8=(0,at.forwardRef)((e,t)=>{if("string"==typeof e.playbackId)return s??(s=(0,at.lazy)(()=>i.e(9708).then(i.bind(i,79708)))),(0,ae.jsx)(s,{ref:t,...e,controls:!1});let a=function(e){if("string"==typeof e)return e.split(/[#?]/)[0].split(".").pop()?.trim()}(e.src);return"m3u8"===a?(n??(n=(0,at.lazy)(()=>i.e(669).then(i.bind(i,20669)))),(0,ae.jsx)(n,{ref:t,...e,controls:!1})):"mpd"===a?(o??(o=(0,at.lazy)(()=>i.e(2668).then(i.bind(i,52668)))),(0,ae.jsx)(o,{ref:t,...e,controls:!1})):(0,ae.jsx)("video",{ref:t,...e,controls:!1})}),d6=(0,at.forwardRef)((e,t)=>{let i,a,{style:r,children:s,asset:n,controls:o=!0,poster:l,blurDataURL:d,theme:u=d5,...h}=e,c=at.Children.toArray(s).find(e=>"object"==typeof e&&"type"in e&&"poster"===e.props.slot);(0,at.isValidElement)(c)&&(l="",d=void 0,i=c,s=at.Children.toArray(s).filter(e=>e!==c));let m={},p=n?function(e){let t=e.providerMetadata?.mux??e.externalIds;return t?.playbackId}(n):void 0,v=!0;if(p&&n?.status==="ready"&&(h.src=void 0,h.playbackId=p,l&&((v=l!==d7(p,h))||(a=`${d7(p,{...h,width:480})} 480w,${d7(p,{...h,width:640})} 640w,${d7(p,{...h,width:960})} 960w,${d7(p,{...h,width:1280})} 1280w,${d7(p,{...h,width:1600})} 1600w,${d7(p,{...h})} 1920w`))),d){let e=!v&&d===n?.blurDataURL,t=v&&d!==n?.blurDataURL;if(e||t){var E;m.gridArea="1/1",m.width="100%",m.height="100%",m.color="transparent",m.backgroundSize="cover",m.backgroundPosition="center",m.backgroundRepeat="no-repeat",m.backgroundImage=`url('data:image/svg+xml;charset=utf-8,${E=d,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${E}"/></g></svg>`.replace(/#/g,"%23")}')`}}if(delete h.thumbnailTime,o&&u){let e=h["data-next-video"];return l&&(i=(0,ae.jsx)("img",{slot:"poster",src:v?l:void 0,srcSet:a,style:m,decoding:"async","aria-hidden":"true"}),l=""),(0,ae.jsxs)(u,{"data-next-video":e,style:{display:"grid",...r},children:[i,(0,ae.jsx)(at.Suspense,{fallback:null,children:(0,ae.jsxs)(d8,{suppressHydrationWarning:!0,ref:t,style:{gridArea:"1/1"},slot:"media",poster:l,crossOrigin:"",...h,children:[p&&(0,ae.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${p}/storyboard.vtt`}),s]})})]})}return(0,ae.jsx)(at.Suspense,{fallback:null,children:(0,ae.jsxs)(d8,{suppressHydrationWarning:!0,ref:t,style:{gridArea:"1/1",...r},controls:!1!==o||void 0,poster:l,crossOrigin:"",...h,children:[p&&(0,ae.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:`https://image.mux.com/${p}/storyboard.vtt`}),s]})})});var d9=i(22114);let ue=({src:e,poster:t,height:i,width:a,onPosterLoaded:r})=>{let s=(0,at.useMemo)(()=>{if(a/i>9/16)return"100%";let e=500,t=641;return 641*i/a>500&&(t=500*a/i),`${t}px`},[i,a]);return(0,ae.jsx)("div",{style:{maxHeight:"90%",maxWidth:"100%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:(0,ae.jsx)(d6,{controls:!0,src:e,onError:e=>{console.error(e)},style:{maxHeight:"100%",maxWidth:s,position:"relative"},playsInline:!0,crossOrigin:"anonymous",children:(0,ae.jsx)(d9.default,{slot:"poster",src:t,fill:!0,alt:"Some peeps doing something awesome",onLoad:r})})})}}};
//# sourceMappingURL=3762.js.map