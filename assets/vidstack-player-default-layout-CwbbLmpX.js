const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BTigPj2h-BdMsZrou.js","assets/app-DQftvuFJ.js"])))=>i.map(i=>d[i]);
var ps=Object.defineProperty;var ms=Object.getPrototypeOf;var vs=Reflect.get;var de=e=>{throw TypeError(e)};var fs=(e,t,s)=>t in e?ps(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var _=(e,t,s)=>fs(e,typeof t!="symbol"?t+"":t,s),Pt=(e,t,s)=>t.has(e)||de("Cannot "+s);var m=(e,t,s)=>(Pt(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?de("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),D=(e,t,s,n)=>(Pt(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s),f=(e,t,s)=>(Pt(e,t,"access private method"),s);var Gt=(e,t,s)=>vs(ms(e),s,t);import{bJ as g,h as he,j as P,o as at,bI as $e,cg as hs,aD as C,g as R,bG as $s,aB as bs,bD as gs,w as S,ch as be,C as ys,ci as ge,cj as $,bC as xs,q as jt,c4 as ye,aF as st,ck as xe,aL as Ss,cl as Ts,A as ws,bF as Se,cm as bt,k as ot,cn as ks,s as Cs,af as As,co as Ds,bw as Ms,z as V,cp as Is,bN as Os,_ as _s,aG as Te,l as Lt,bR as Ps,cq as Gs,cr as Ls,cs as Ns,cf as we}from"./app-DQftvuFJ.js";import{A as E,T as Bs,D as ce,x as l,s as Fs,L as ke}from"./vidstack-CwTj4H1w-CpWB4nJy.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=e=>e??E;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={ATTRIBUTE:1,CHILD:2,BOOLEAN_ATTRIBUTE:4},wt=e=>(...t)=>({_$litDirective$:e,values:t});let Zt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vt=class extends Zt{constructor(t){if(super(t),this.et=E,t.type!==gt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===E||t==null)return this.ft=void 0,this.et=t;if(t===Bs)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const s=[t];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Vt.directiveName="unsafeHTML",Vt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rt extends Vt{}Rt.directiveName="unsafeSVG",Rt.resultType=2;const Vs=wt(Rt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=e=>e.strings===void 0,Es={},Ws=(e,t=Es)=>e._$AH=t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(e,t)=>{var s,n;const i=e._$AN;if(i===void 0)return!1;for(const o of i)(n=(s=o)._$AO)===null||n===void 0||n.call(s,t,!1),nt(o,t);return!0},yt=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},Ce=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Hs(t)}};function Ks(e){this._$AN!==void 0?(yt(this),this._$AM=e,Ce(this)):this._$AM=e}function Qs(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=s;o<n.length;o++)nt(n[o],!1),yt(n[o]);else n!=null&&(nt(n,!1),yt(n));else nt(this,e)}const Hs=e=>{var t,s,n,i;e.type==gt.CHILD&&((t=(n=e)._$AP)!==null&&t!==void 0||(n._$AP=Qs),(s=(i=e)._$AQ)!==null&&s!==void 0||(i._$AQ=Ks))};class Ae extends Zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),Ce(this),this.isConnected=t._$AU}_$AO(t,s=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)===null||n===void 0||n.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),s&&(nt(this,t),yt(this))}setValue(t){if(Rs(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}var G,lt,H,O,Et,Wt,De,Me;class Us extends Ae{constructor(s){super(s);h(this,O);h(this,G,null);h(this,lt,!1);h(this,H,null);D(this,lt,s.type===gt.ATTRIBUTE||s.type===gt.BOOLEAN_ATTRIBUTE)}render(s){return s!==m(this,G)&&(this.disconnected(),D(this,G,s),this.isConnected&&f(this,O,Et).call(this)),m(this,G)?f(this,O,Wt).call(this,he(m(this,G))):E}reconnected(){f(this,O,Et).call(this)}disconnected(){var s;(s=m(this,H))==null||s.call(this),D(this,H,null)}}G=new WeakMap,lt=new WeakMap,H=new WeakMap,O=new WeakSet,Et=function(){m(this,G)&&D(this,H,P(f(this,O,Me).bind(this)))},Wt=function(s){return m(this,lt)?Yt(s):s},De=function(s){this.setValue(f(this,O,Wt).call(this,s))},Me=function(){var s;f(this,O,De).call(this,(s=m(this,G))==null?void 0:s.call(this))};function a(e){return wt(Us)(g(e))}var U,rt,St,ut,Kt;class Ie{constructor(t,s){h(this,ut);h(this,U);h(this,rt);_(this,"elements",new Set);h(this,St,$e(f(this,ut,Kt).bind(this)));D(this,U,t),D(this,rt,s)}connect(){f(this,ut,Kt).call(this);const t=new MutationObserver(m(this,St));for(const s of m(this,U))t.observe(s,{childList:!0,subtree:!0});at(()=>t.disconnect()),at(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){hs(t)?(s.textContent="",s.append(t)):(ce(null,s),ce(t,s)),s.style.display||(s.style.display="contents");const n=s.firstElementChild;if(!n)return;const i=s.getAttribute("data-class");i&&n.classList.add(...i.split(" "))}}U=new WeakMap,rt=new WeakMap,St=new WeakMap,ut=new WeakSet,Kt=function(t){if(t&&!t.some(i=>i.addedNodes.length))return;let s=!1,n=m(this,U).flatMap(i=>[...i.querySelectorAll("slot")]);for(const i of n)!i.hasAttribute("name")||this.elements.has(i)||(this.elements.add(i),s=!0);s&&m(this,rt).call(this,this.elements)};let zs=0,ht="data-slot-id";var z,Tt,q,$t;class Oe{constructor(t){h(this,q);h(this,z);_(this,"slots");h(this,Tt,$e(f(this,q,$t).bind(this)));D(this,z,t),this.slots=new Ie(t,f(this,q,$t).bind(this))}connect(){this.slots.connect(),f(this,q,$t).call(this);const t=new MutationObserver(m(this,Tt));for(const s of m(this,z))t.observe(s,{childList:!0});at(()=>t.disconnect())}}z=new WeakMap,Tt=new WeakMap,q=new WeakSet,$t=function(){for(const t of m(this,z))for(const s of t.children){if(s.nodeType!==1)continue;const n=s.getAttribute("slot");if(!n)continue;s.style.display="none";let i=s.getAttribute(ht);i||s.setAttribute(ht,i=++zs+"");for(const o of this.slots.elements){if(o.getAttribute("name")!==n||o.getAttribute(ht)===i)continue;const r=document.importNode(s,!0);n.includes("-icon")&&r.classList.add("vds-icon"),r.style.display="",r.removeAttribute("slot"),this.slots.assign(r,o),o.setAttribute(ht,i)}}};function qs({name:e,class:t,state:s,paths:n,viewBox:i="0 0 32 32"}){return l`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${Yt(e??s)}
  >
    ${R(n)?Vs(n):a(n)}
  </svg>`}var j,dt,K,_e,Qt;class js{constructor(t){h(this,K);h(this,j,{});h(this,dt,!1);_(this,"slots");this.slots=new Ie(t,f(this,K,Qt).bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(t=>{D(this,j,t),D(this,dt,!0),f(this,K,Qt).call(this)})}}j=new WeakMap,dt=new WeakMap,K=new WeakSet,_e=function*(){for(const t of Object.keys(m(this,j))){const s=`${t}-icon`;for(const n of this.slots.elements)n.name===s&&(yield{icon:m(this,j)[t],slot:n})}},Qt=function(){if(m(this,dt))for(const{icon:t,slot:s}of f(this,K,_e).call(this))this.slots.assign(t,s)};class Ys extends js{connect(){super.connect();const{player:t}=C();if(!t.el)return;let s,n=new IntersectionObserver(i=>{i[0]?.isIntersecting&&(s?.(),s=void 0,this.load())});n.observe(t.el),s=at(()=>n.disconnect())}}const Nt=new WeakMap,kt=wt(class extends Ae{render(e){return E}update(e,[t]){var s;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=(s=e.options)===null||s===void 0?void 0:s.host,this.ot(this.lt=e.element)),E}ot(e){var t;if(typeof this.G=="function"){const s=(t=this.dt)!==null&&t!==void 0?t:globalThis;let n=Nt.get(s);n===void 0&&(n=new WeakMap,Nt.set(s,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,s;return typeof this.G=="function"?(t=Nt.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(s=this.G)===null||s===void 0?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Pe=xs();function u(){return $s(Pe)}const Zs={colorScheme:"system",download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:"bottom",noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1};var ct,Y,B,pt,Ht;class Ct extends bs{constructor(){super(...arguments);h(this,pt);h(this,ct);h(this,Y,g(()=>{const s=this.$props.when();return f(this,pt,Ht).call(this,s)}));h(this,B,g(()=>{const s=this.$props.smallWhen();return f(this,pt,Ht).call(this,s)}))}get isMatch(){return m(this,Y).call(this)}get isSmallLayout(){return m(this,B).call(this)}onSetup(){D(this,ct,C()),this.setAttributes({"data-match":m(this,Y),"data-sm":()=>m(this,B).call(this)?"":null,"data-lg":()=>m(this,B).call(this)?null:"","data-size":()=>m(this,B).call(this)?"sm":"lg","data-no-scrub-gesture":this.$props.noScrubGesture}),gs(Pe,{...this.$props,when:m(this,Y),smallWhen:m(this,B),userPrefersAnnouncements:S(!0),userPrefersKeyboardAnimations:S(!0),menuPortal:S(null)})}onAttach(s){be(s,this.$props.colorScheme)}}ct=new WeakMap,Y=new WeakMap,B=new WeakMap,pt=new WeakSet,Ht=function(s){return s!=="never"&&(ys(s)?s:g(()=>s(m(this,ct).player.state))())},_(Ct,"props",Zs);const Ge=Ct.prototype;ye(Ge,"isMatch");ye(Ge,"isSmallLayout");function Le(e,t){P(()=>{const{player:s}=C(),n=s.el;return n&&st(n,"data-layout",t()&&e),()=>n?.removeAttribute("data-layout")})}function k(e,t){return e()?.[t]??t}function Jt(){return a(()=>{const{translations:e,userPrefersAnnouncements:t}=u();return t()?l`<media-announcer .translations=${a(e)}></media-announcer>`:null})}function M(e,t=""){return l`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:""}`}
  ></slot>`}function vt(e){return e.map(t=>M(t))}function d(e,t){return a(()=>k(e,t))}function Xt({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=$(),n=a(()=>{const o=k(t,"AirPlay"),r=xe(s());return`${o} ${r}`}),i=d(t,"AirPlay");return l`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${n}>
          ${M("airplay")}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ne({tooltip:e}){const{translations:t}=u(),{remotePlaybackState:s}=$(),n=a(()=>{const o=k(t,"Google Cast"),r=xe(s());return`${o} ${r}`}),i=d(t,"Google Cast");return l`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${n}>
          ${M("google-cast")}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${i}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function At({tooltip:e}){const{translations:t}=u(),s=d(t,"Play"),n=d(t,"Pause");return l`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${d(t,"Play")}
        >
          ${vt(["play","pause","replay"])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${s}</span>
        <span class="vds-pause-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function pe({tooltip:e,ref:t=Ds}){const{translations:s}=u(),n=d(s,"Mute"),i=d(s,"Unmute");return l`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${d(s,"Mute")}
          ${kt(t)}
        >
          ${vt(["mute","volume-low","volume-high"])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function te({tooltip:e}){const{translations:t}=u(),s=d(t,"Closed-Captions On"),n=d(t,"Closed-Captions Off");return l`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${d(t,"Captions")}
        >
          ${vt(["cc-on","cc-off"])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${n}</span>
        <span class="vds-cc-off-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Js(){const{translations:e}=u(),t=d(e,"Enter PiP"),s=d(e,"Exit PiP");return l`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${d(e,"PiP")}
        >
          ${vt(["pip-enter","pip-exit"])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${s}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Be({tooltip:e}){const{translations:t}=u(),s=d(t,"Enter Fullscreen"),n=d(t,"Exit Fullscreen");return l`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${d(t,"Fullscreen")}
        >
          ${vt(["fs-enter","fs-exit"])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${s}</span>
        <span class="vds-fs-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function me({backward:e,tooltip:t}){const{translations:s,seekStep:n}=u(),i=e?"Seek Backward":"Seek Forward",o=d(s,i);return l`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${a(()=>(e?-1:1)*n())}
          aria-label=${o}
        >
          ${M(e?"seek-backward":"seek-forward")}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${d(s,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Fe(){const{translations:e}=u(),{live:t}=$(),s=d(e,"Skip To Live"),n=d(e,"LIVE");return t()?l`
        <media-live-button class="vds-live-button" aria-label=${s}>
          <span class="vds-live-button-text">${n}</span>
        </media-live-button>
      `:null}function ee(){return a(()=>{const{download:e,translations:t}=u(),s=e();if(Ss(s))return null;const{source:n,title:i}=$(),o=n(),r=Ts({title:i(),src:o,download:s});return R(r?.url)?l`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${d(t,"Download")}
                href=${ws(r.url,{download:r.name})}
                download=${r.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${d(t,"Download")}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function se(){const{translations:e}=u();return l`
    <media-captions
      class="vds-captions"
      .exampleText=${d(e,"Captions look like this")}
    ></media-captions>
  `}function L(){return l`<div class="vds-controls-spacer"></div>`}function Ve(e,t){return l`
    <media-menu-portal .container=${a(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function Re(e,t,s,n){let i=R(t)?document.querySelector(t):t;i||(i=e?.closest("dialog")),i||(i=document.body);const o=document.createElement("div");o.style.display="contents",o.classList.add(s),i.append(o),P(()=>{if(!o)return;const{viewType:p}=$(),c=n();st(o,"data-view-type",p()),st(o,"data-sm",c),st(o,"data-lg",!c),st(o,"data-size",c?"sm":"lg")});const{colorScheme:r}=u();return be(o,r),o}function Ee({placement:e,tooltip:t,portal:s}){const{textTracks:n}=C(),{viewType:i,seekableStart:o,seekableEnd:r}=$(),{translations:p,thumbnails:c,menuPortal:y,noModal:b,menuGroup:v,smallWhen:x}=u();if(g(()=>{const ds=o(),cs=r(),re=S(null);return Se(n,"chapters",re.set),!re()?.cues.filter(ue=>ue.startTime<=cs&&ue.endTime>=ds)?.length})())return null;const w=g(()=>b()?bt(e):x()?null:bt(e)),tt=g(()=>!x()&&v()==="bottom"&&i()==="video"?26:0),et=S(!1);function ls(){et.set(!0)}function rs(){et.set(!1)}const us=l`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${a(w)}
      offset=${a(tt)}
    >
      ${a(()=>et()?l`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${a(c)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return l`
    <media-menu class="vds-chapters-menu vds-menu" @open=${ls} @close=${rs}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${d(p,"Chapters")}
          >
            ${M("menu-chapters")}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${jt(t)?a(t):t}
        >
          ${d(p,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${Ve(y,us)}
    </media-menu>
  `}function Bt(e){const{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g," ")}const ne={type:"color"},Xs={type:"radio",values:{"Monospaced Serif":"mono-serif","Proportional Serif":"pro-serif","Monospaced Sans-Serif":"mono-sans","Proportional Sans-Serif":"pro-sans",Casual:"casual",Cursive:"cursive","Small Capitals":"capitals"}},tn={type:"slider",min:0,max:400,step:25,upIcon:null,downIcon:null},en={type:"slider",min:0,max:100,step:5,upIcon:null,downIcon:null},sn={type:"radio",values:["None","Drop Shadow","Raised","Depressed","Outline"]},xt={fontFamily:"pro-sans",fontSize:"100%",textColor:"#ffffff",textOpacity:"100%",textShadow:"none",textBg:"#000000",textBgOpacity:"100%",displayBg:"#000000",displayBgOpacity:"0%"},W=Object.keys(xt).reduce((e,t)=>({...e,[t]:S(xt[t])}),{});for(const e of Object.keys(W)){const t=localStorage.getItem(`vds-player:${ot(e)}`);R(t)&&W[e].set(t)}function nn(){for(const e of Object.keys(W)){const t=xt[e];W[e].set(t)}}let ve=!1,Ft=new Set;function an(){const{player:e}=C();Ft.add(e),at(()=>Ft.delete(e)),ve||(Cs(()=>{for(const t of As(W)){const s=W[t],n=xt[t],i=`--media-user-${ot(t)}`,o=`vds-player:${ot(t)}`;P(()=>{const r=s(),p=r===n,c=p?null:on(e,t,r);for(const y of Ft)y.el?.style.setProperty(i,c);p?localStorage.removeItem(o):localStorage.setItem(o,r)})}},null),ve=!0)}function on(e,t,s){switch(t){case"fontFamily":const n=s==="capitals"?"small-caps":"";return e.el?.style.setProperty("--media-user-font-variant",n),rn(s);case"fontSize":case"textOpacity":case"textBgOpacity":case"displayBgOpacity":return ln(s);case"textColor":return`rgb(${Bt(s)} / var(--media-user-text-opacity, 1))`;case"textShadow":return un(s);case"textBg":return`rgb(${Bt(s)} / var(--media-user-text-bg-opacity, 1))`;case"displayBg":return`rgb(${Bt(s)} / var(--media-user-display-bg-opacity, 1))`}}function ln(e){return(parseInt(e)/100).toString()}function rn(e){switch(e){case"mono-serif":return'"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';case"mono-sans":return'"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';case"pro-sans":return'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';case"casual":return'"Comic Sans MS", Impact, Handlee, fantasy';case"cursive":return'"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';case"capitals":return'"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';default:return'"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'}}function un(e){switch(e){case"drop shadow":return"rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";case"raised":return"rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";case"depressed":return"rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";case"outline":return"rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";default:return""}}let dn=0;function I({label:e="",value:t="",children:s}){if(!e)return l`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${s}</div>
      </div>
    `;const n=`vds-menu-section-${++dn}`;return l`
    <section class="vds-menu-section" role="group" aria-labelledby=${n}>
      <div class="vds-menu-section-title">
        <header id=${n}>${e}</header>
        ${t?l`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${s}</div>
    </section>
  `}function ft({label:e,children:t}){return l`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function Q({label:e,icon:t,hint:s}){return l`
    <media-menu-button class="vds-menu-item">
      ${M("menu-arrow-left","vds-menu-close-icon")}
      ${t?M(t,"vds-menu-item-icon"):null}
      <span class="vds-menu-item-label">${a(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${s?a(s):null} </span>
      ${M("menu-arrow-right","vds-menu-open-icon")}
    </media-menu-button>
  `}function cn({value:e=null,options:t,hideLabel:s=!1,children:n=null,onChange:i=null}){function o(r){const{value:p,label:c}=r;return l`
      <media-radio class="vds-radio" value=${p}>
        ${M("menu-radio-check")}
        ${s?null:l`
              <span class="vds-radio-label" data-part="label">
                ${R(c)?c:a(c)}
              </span>
            `}
        ${jt(n)?n(r):n}
      </media-radio>
    `}return l`
    <media-radio-group
      class="vds-radio-group"
      value=${R(e)?e:e?a(e):""}
      @change=${i}
    >
      ${V(t)?t.map(o):a(()=>t().map(o))}
    </media-radio-group>
  `}function pn(e){return V(e)?e.map(t=>({label:t,value:t.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Dt(){return l`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Mt(){return l`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function It({label:e=null,value:t=null,upIcon:s="",downIcon:n="",children:i,isMin:o,isMax:r}){const p=e||t,c=[n?M(n,"down"):null,i,s?M(s,"up"):null];return l`
    <div
      class=${`vds-menu-item vds-menu-slider-item${p?" group":""}`}
      data-min=${a(()=>o()?"":null)}
      data-max=${a(()=>r()?"":null)}
    >
      ${p?l`
            <div class="vds-menu-slider-title">
              ${[e?l`<div>${e}</div>`:null,t?l`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}const mn={...tn,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"},ie={...en,upIcon:"menu-opacity-up",downIcon:"menu-opacity-down"};function vn(){return a(()=>{const{hasCaptions:e}=$(),{translations:t}=u();return e()?l`
      <media-menu class="vds-font-menu vds-menu">
        ${Q({label:()=>k(t,"Caption Styles")})}
        <media-menu-items class="vds-menu-items">
          ${[I({label:d(t,"Font"),children:[fn(),hn()]}),I({label:d(t,"Text"),children:[$n(),gn(),bn()]}),I({label:d(t,"Text Background"),children:[yn(),xn()]}),I({label:d(t,"Display Background"),children:[Sn(),Tn()]}),I({children:[wn()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function fn(){return N({label:"Family",option:Xs,type:"fontFamily"})}function hn(){return N({label:"Size",option:mn,type:"fontSize"})}function $n(){return N({label:"Color",option:ne,type:"textColor"})}function bn(){return N({label:"Opacity",option:ie,type:"textOpacity"})}function gn(){return N({label:"Shadow",option:sn,type:"textShadow"})}function yn(){return N({label:"Color",option:ne,type:"textBg"})}function xn(){return N({label:"Opacity",option:ie,type:"textBgOpacity"})}function Sn(){return N({label:"Color",option:ne,type:"displayBg"})}function Tn(){return N({label:"Opacity",option:ie,type:"displayBgOpacity"})}function wn(){const{translations:e}=u();return l`
    <button class="vds-menu-item" role="menuitem" @click=${nn}>
      <span class="vds-menu-item-label">${a(()=>k(e,"Reset"))}</span>
    </button>
  `}function N({label:e,option:t,type:s}){const{player:n}=C(),{translations:i}=u(),o=W[s],r=()=>k(i,e);function p(){Os(),n.dispatchEvent(new Event("vds-font-change"))}if(t.type==="color"){let b=function(v){o.set(v.target.value),p()};return ft({label:a(r),children:l`
        <input
          class="vds-color-picker"
          type="color"
          .value=${a(o)}
          @input=${b}
        />
      `})}if(t.type==="slider"){let b=function(et){o.set(et.detail+"%"),p()};const{min:v,max:x,step:T,upIcon:w,downIcon:tt}=t;return It({label:a(r),value:a(o),upIcon:w,downIcon:tt,isMin:()=>o()===v+"%",isMax:()=>o()===x+"%",children:l`
        <media-slider
          class="vds-slider"
          min=${v}
          max=${x}
          step=${T}
          key-step=${T}
          .value=${a(()=>parseInt(o()))}
          aria-label=${a(r)}
          @value-change=${b}
          @drag-value-change=${b}
        >
          ${Dt()}${Mt()}
        </media-slider>
      `})}const c=pn(t.values),y=()=>{const b=o(),v=c.find(x=>x.value===b)?.label||"";return k(i,R(v)?v:v())};return l`
    <media-menu class=${`vds-${ot(s)}-menu vds-menu`}>
      ${Q({label:r,hint:y})}
      <media-menu-items class="vds-menu-items">
        ${cn({value:o,options:c,onChange({detail:b}){o.set(b),p()}})}
      </media-menu-items>
    </media-menu>
  `}function Ot({label:e,checked:t,defaultChecked:s=!1,storageKey:n,onChange:i}){const{translations:o}=u(),r=n?localStorage.getItem(n):null,p=S(!!(r??s)),c=S(!1),y=a(Ms(p)),b=d(o,e);n&&i(he(p)),t&&P(()=>void p.set(t()));function v(w){w?.button!==1&&(p.set(tt=>!tt),n&&localStorage.setItem(n,p()?"1":""),i(p(),w),c.set(!1))}function x(w){Is(w)&&v()}function T(w){w.button===0&&c.set(!0)}return l`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${b}
      aria-checked=${y}
      data-active=${a(()=>c()?"":null)}
      @pointerup=${v}
      @pointerdown=${T}
      @keydown=${x}
    ></div>
  `}function kn(){return a(()=>{const{translations:e}=u();return l`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${Q({label:()=>k(e,"Accessibility"),icon:"menu-accessibility"})}
        <media-menu-items class="vds-menu-items">
          ${[I({children:[Cn(),An()]}),I({children:[vn()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Cn(){const{userPrefersAnnouncements:e,translations:t}=u(),s="Announcements";return ft({label:d(t,s),children:Ot({label:s,storageKey:"vds-player::announcements",onChange(n){e.set(n)}})})}function An(){return a(()=>{const{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:s}=u(),{viewType:n}=$();if(g(()=>n()!=="video"||s())())return null;const o="Keyboard Animations";return ft({label:d(e,o),children:Ot({label:o,defaultChecked:!0,storageKey:"vds-player::keyboard-animations",onChange(r){t.set(r)}})})})}function Dn(){return a(()=>{const{noAudioGain:e,translations:t}=u(),{audioTracks:s,canSetAudioGain:n}=$();return g(()=>!(n()&&!e())&&s().length<=1)()?null:l`
      <media-menu class="vds-audio-menu vds-menu">
        ${Q({label:()=>k(t,"Audio"),icon:"menu-audio"})}
        <media-menu-items class="vds-menu-items">
          ${[Mn(),In()]}
        </media-menu-items>
      </media-menu>
    `})}function Mn(){return a(()=>{const{translations:e}=u(),{audioTracks:t}=$(),s=d(e,"Default");return g(()=>t().length<=1)()?null:I({children:l`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${Q({label:()=>k(e,"Track")})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${s}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function In(){return a(()=>{const{noAudioGain:e,translations:t}=u(),{canSetAudioGain:s}=$();if(g(()=>!s()||e())())return null;const{audioGain:i}=$();return I({label:d(t,"Boost"),value:a(()=>Math.round(((i()??1)-1)*100)+"%"),children:[It({upIcon:"menu-audio-boost-up",downIcon:"menu-audio-boost-down",children:On(),isMin:()=>((i()??1)-1)*100<=We(),isMax:()=>((i()??1)-1)*100===Ke()})]})})}function On(){const{translations:e}=u(),t=d(e,"Boost"),s=We,n=Ke,i=_n;return l`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Dt()}${Mt()}
    </media-audio-gain-slider>
  `}function We(){const{audioGains:e}=u(),t=e();return V(t)?t[0]??0:t.min}function Ke(){const{audioGains:e}=u(),t=e();return V(t)?t[t.length-1]??300:t.max}function _n(){const{audioGains:e}=u(),t=e();return V(t)?t[1]-t[0]||25:t.step}function Pn(){return a(()=>{const{translations:e}=u(),{hasCaptions:t}=$(),s=d(e,"Off");return t()?l`
      <media-menu class="vds-captions-menu vds-menu">
        ${Q({label:()=>k(e,"Captions"),icon:"menu-captions"})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${s}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function Gn(){return a(()=>{const{translations:e}=u();return l`
      <media-menu class="vds-playback-menu vds-menu">
        ${Q({label:()=>k(e,"Playback"),icon:"menu-playback"})}
        <media-menu-items class="vds-menu-items">
          ${[I({children:Ln()}),Nn(),Rn()]}
        </media-menu-items>
      </media-menu>
    `})}function Ln(){const{remote:e}=C(),{translations:t}=u(),s="Loop";return ft({label:d(t,s),children:Ot({label:s,storageKey:"vds-player::user-loop",onChange(n,i){e.userPrefersLoopChange(n,i)}})})}function Nn(){return a(()=>{const{translations:e}=u(),{canSetPlaybackRate:t,playbackRate:s}=$();return t()?I({label:d(e,"Speed"),value:a(()=>s()===1?k(e,"Normal"):s()+"x"),children:[It({upIcon:"menu-speed-up",downIcon:"menu-speed-down",children:Fn(),isMin:()=>s()===Qe(),isMax:()=>s()===He()})]}):null})}function Qe(){const{playbackRates:e}=u(),t=e();return V(t)?t[0]??0:t.min}function He(){const{playbackRates:e}=u(),t=e();return V(t)?t[t.length-1]??2:t.max}function Bn(){const{playbackRates:e}=u(),t=e();return V(t)?t[1]-t[0]||.25:t.step}function Fn(){const{translations:e}=u(),t=d(e,"Speed"),s=Qe,n=He,i=Bn;return l`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${a(s)}
      max=${a(n)}
      step=${a(i)}
      key-step=${a(i)}
    >
      ${Dt()}${Mt()}
    </media-speed-slider>
  `}function Vn(){const{remote:e,qualities:t}=C(),{autoQuality:s,canSetQuality:n,qualities:i}=$(),{translations:o}=u(),r="Auto";return g(()=>!n()||i().length<=1)()?null:ft({label:d(o,r),children:Ot({label:r,checked:s,onChange(c,y){c?e.requestAutoQuality(y):e.changeQuality(t.selectedIndex,y)}})})}function Rn(){return a(()=>{const{hideQualityBitrate:e,translations:t}=u(),{canSetQuality:s,qualities:n,quality:i}=$(),o=g(()=>!s()||n().length<=1),r=g(()=>Fs(n()));return o()?null:I({label:d(t,"Quality"),value:a(()=>{const p=i()?.height,c=e()?null:i()?.bitrate,y=c&&c>0?`${(c/1e6).toFixed(2)} Mbps`:null,b=k(t,"Auto");return p?`${p}p${y?` (${y})`:""}`:b}),children:[It({upIcon:"menu-quality-up",downIcon:"menu-quality-down",children:En(),isMin:()=>r()[0]===i(),isMax:()=>r().at(-1)===i()}),Vn()]})})}function En(){const{translations:e}=u(),t=d(e,"Quality");return l`
    <media-quality-slider class="vds-quality-slider vds-slider" aria-label=${t}>
      ${Dt()}${Mt()}
    </media-quality-slider>
  `}function Ue({placement:e,portal:t,tooltip:s}){return a(()=>{const{viewType:n}=$(),{translations:i,menuPortal:o,noModal:r,menuGroup:p,smallWhen:c}=u(),y=g(()=>r()?bt(e):c()?null:bt(e)),b=g(()=>!c()&&p()==="bottom"&&n()==="video"?26:0),v=S(!1);an();function x(){v.set(!0)}function T(){v.set(!1)}const w=l`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${a(y)}
        offset=${a(b)}
      >
        ${a(()=>v()?[Gn(),kn(),Dn(),Pn()]:null)}
      </media-menu-items>
    `;return l`
      <media-menu class="vds-settings-menu vds-menu" @open=${x} @close=${T}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${d(i,"Settings")}
            >
              ${M("menu-settings","vds-rotate-icon")}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${jt(s)?a(s):s}
          >
            ${d(i,"Settings")}
          </media-tooltip-content>
        </media-tooltip>
        ${Ve(o,w)}
      </media-menu>
    `})}function ae({orientation:e,tooltip:t}){return a(()=>{const{pointer:s,muted:n,canSetVolume:i}=$();if(s()==="coarse"&&!n())return null;if(!i())return pe({tooltip:t});const o=S(void 0),r=ks(o);return l`
      <div class="vds-volume" ?data-active=${a(r)} ${kt(o.set)}>
        ${pe({tooltip:t})}
        <div class="vds-volume-popup">${Wn({orientation:e})}</div>
      </div>
    `})}function Wn({orientation:e}={}){const{translations:t}=u(),s=d(t,"Volume");return l`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${s}
      orientation=${Yt(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function oe(){const e=S(void 0),t=S(0),{thumbnails:s,translations:n,sliderChaptersMinWidth:i,disableTimeSlider:o,seekStep:r,noScrubGesture:p}=u(),c=d(n,"Seek"),y=a(o),b=a(()=>t()<i()),v=a(s);return ge(e,()=>{const x=e();x&&t.set(x.clientWidth)}),l`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${c}
      key-step=${a(r)}
      ?disabled=${y}
      ?no-swipe-gesture=${a(p)}
      ${kt(e.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${b}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${v}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function Kn(){return l`
    <div class="vds-time-group">
      ${a(()=>{const{duration:e}=$();return e()?[l`<media-time class="vds-time" type="current"></media-time>`,l`<div class="vds-time-divider">/</div>`,l`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function Qn(){return a(()=>{const{live:e,duration:t}=$();return e()?Fe():t()?l`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function ze(){return a(()=>{const{live:e}=$();return e()?Fe():Kn()})}function qe(){return a(()=>{const{textTracks:e}=C(),{title:t,started:s}=$(),n=S(null);return Se(e,"chapters",n.set),n()&&(s()||!t())?je():l`<media-title class="vds-chapter-title"></media-title>`})}function je(){return l`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}class Ye extends Ys{async loadIcons(){const t=(await _s(async()=>{const{icons:n}=await import("./vidstack-BTigPj2h-BdMsZrou.js");return{icons:n}},__vite__mapDeps([0,1]))).icons,s={};for(const n of Object.keys(t))s[n]=qs({name:n,paths:t[n]});return s}}var F;let Hn=(F=class extends Ct{},_(F,"props",{...Gt(F,F,"props"),when:({viewType:t})=>t==="audio",smallWhen:({width:t})=>t<576}),F);function Un(){return[Jt(),se(),l`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[me({backward:!0,tooltip:"top start"}),At({tooltip:"top"}),me({tooltip:"top"}),zn(),oe(),Qn(),ae({orientation:"vertical",tooltip:"top"}),te({tooltip:"top"}),ee(),Xt({tooltip:"top"}),qn()]}
        </media-controls-group>
      </media-controls>
    `]}function zn(){return a(()=>{let e=S(void 0),t=S(!1),s=C(),{title:n,started:i,currentTime:o,ended:r}=$(),{translations:p}=u(),c=Gs(e),y=()=>i()||o()>0;const b=()=>{const T=r()?"Replay":y()?"Continue":"Play";return`${k(p,T)}: ${n()}`};P(()=>{c()&&document.activeElement===document.body&&s.player.el?.focus({preventScroll:!0})});function v(){const T=e(),w=!!T&&!c()&&T.clientWidth<T.children[0].clientWidth;T&&Ls(T,"vds-marquee",w),t.set(w)}function x(){return l`
        <span class="vds-title-text">
          ${a(b)}${a(()=>y()?je():null)}
        </span>
      `}return ge(e,v),n()?l`
          <span class="vds-title" title=${a(b)} ${kt(e.set)}>
            ${[x(),a(()=>t()&&!c()?x():null)]}
          </span>
        `:L()})}function qn(){const e="top end";return[Ee({tooltip:"top",placement:e,portal:!0}),Ue({tooltip:"top end",placement:e,portal:!0})]}var mt,Z,A,Ze,Je,Xe,ts,es,ss;class Ut extends Te(ke,Hn){constructor(){super(...arguments);h(this,A);h(this,mt);h(this,Z,S(!1))}onSetup(){this.forwardKeepAlive=!1,D(this,mt,C()),this.classList.add("vds-audio-layout"),f(this,A,Xe).call(this)}onConnect(){Le("audio",()=>this.isMatch),f(this,A,Je).call(this)}render(){return a(f(this,A,Ze).bind(this))}}mt=new WeakMap,Z=new WeakMap,A=new WeakSet,Ze=function(){return this.isMatch?Un():null},Je=function(){const{menuPortal:s}=u();P(()=>{if(!this.isMatch)return;const n=Re(this,this.menuContainer,"vds-audio-layout",()=>this.isSmallLayout),i=n?[this,n]:[this];return(this.$props.customIcons()?new Oe(i):new Ye(i)).connect(),s.set(n),()=>{n.remove(),s.set(null)}})},Xe=function(){const{pointer:s}=m(this,mt).$state;P(()=>{s()==="coarse"&&P(f(this,A,ts).bind(this))})},ts=function(){if(!m(this,Z).call(this)){Lt(this,"pointerdown",f(this,A,es).bind(this),{capture:!0});return}Lt(this,"pointerdown",s=>s.stopPropagation()),Lt(window,"pointerdown",f(this,A,ss).bind(this))},es=function(s){const{target:n}=s;Ps(n)&&n.closest(".vds-time-slider")&&(s.stopImmediatePropagation(),this.setAttribute("data-scrubbing",""),m(this,Z).set(!0))},ss=function(){m(this,Z).set(!1),this.removeAttribute("data-scrubbing")},_(Ut,"tagName","media-audio-layout"),_(Ut,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jn=wt(class extends Zt{constructor(){super(...arguments),this.key=E}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(Ws(e),this.key=t),s}}),it=class it extends Ct{};_(it,"props",{...Gt(it,it,"props"),when:({viewType:t})=>t==="video",smallWhen:({width:t,height:s})=>t<576||s<380});let zt=it;function ns(){return a(()=>{const e=C(),{noKeyboardAnimations:t,userPrefersKeyboardAnimations:s}=u();if(g(()=>t()||!s())())return null;const i=S(!1),{lastKeyboardAction:o}=e.$state;P(()=>{i.set(!!o());const v=setTimeout(()=>i.set(!1),500);return()=>{i.set(!1),window.clearTimeout(v)}});const r=g(()=>{const v=o()?.action;return v&&i()?ot(v):null}),p=g(()=>`vds-kb-action${i()?"":" hidden"}`),c=g(Yn),y=g(()=>{const v=Zn();return v?Ns(v):null});function b(){const v=y();return v?l`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${v}</div>
        </div>
      `:null}return l`
      <div class=${a(p)} data-action=${a(r)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${a(c)}</div>
        </div>
        ${a(()=>jn(o(),b()))}
      </div>
    `})}function Yn(){const{$state:e}=C(),t=e.lastKeyboardAction()?.action,s=e.audioGain()??1;switch(t){case"toggleMuted":return e.muted()?"0%":fe(e.volume(),s);case"volumeUp":case"volumeDown":return fe(e.volume(),s);default:return""}}function fe(e,t){return`${Math.round(e*t*100)}%`}function Zn(){const{$state:e}=C();switch(e.lastKeyboardAction()?.action){case"togglePaused":return e.paused()?"kb-pause-icon":"kb-play-icon";case"toggleMuted":return e.muted()||e.volume()===0?"kb-mute-icon":e.volume()>=.5?"kb-volume-up-icon":"kb-volume-down-icon";case"toggleFullscreen":return`kb-fs-${e.fullscreen()?"enter":"exit"}-icon`;case"togglePictureInPicture":return`kb-pip-${e.pictureInPicture()?"enter":"exit"}-icon`;case"toggleCaptions":return e.hasCaptions()?`kb-cc-${e.textTrack()?"on":"off"}-icon`:null;case"volumeUp":return"kb-volume-up-icon";case"volumeDown":return"kb-volume-down-icon";case"seekForward":return"kb-seek-forward-icon";case"seekBackward":return"kb-seek-backward-icon";default:return null}}function Jn(){return[Jt(),is(),_t(),ns(),se(),l`<div class="vds-scrim"></div>`,l`
      <media-controls class="vds-controls">
        ${[ti(),L(),l`<media-controls-group class="vds-controls-group"></media-controls-group>`,L(),l`
            <media-controls-group class="vds-controls-group">
              ${oe()}
            </media-controls-group>
          `,l`
            <media-controls-group class="vds-controls-group">
              ${[At({tooltip:"top start"}),ae({orientation:"horizontal",tooltip:"top"}),ze(),qe(),te({tooltip:"top"}),Xn(),Xt({tooltip:"top"}),Ne({tooltip:"top"}),ee(),Js(),Be({tooltip:"top end"})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Xn(){return a(()=>{const{menuGroup:e}=u();return e()==="bottom"?le():null})}function ti(){return l`
    <media-controls-group class="vds-controls-group">
      ${a(()=>{const{menuGroup:e}=u();return e()==="top"?[L(),le()]:null})}
    </media-controls-group>
  `}function ei(){return[Jt(),is(),_t(),se(),ns(),l`<div class="vds-scrim"></div>`,l`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Xt({tooltip:"top start"}),Ne({tooltip:"bottom start"}),L(),te({tooltip:"bottom"}),ee(),le(),ae({orientation:"vertical",tooltip:"bottom end"})]}
        </media-controls-group>

        ${L()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[L(),At({tooltip:"top"}),L()]}
        </media-controls-group>

        ${L()}

        <media-controls-group class="vds-controls-group">
          ${[ze(),qe(),Be({tooltip:"top end"})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${oe()}
        </media-controls-group>
      </media-controls>
    `,ni()]}function si(){return l`
    <div class="vds-load-container">
      ${[_t(),At({tooltip:"top"})]}
    </div>
  `}function ni(){return a(()=>{const{duration:e}=$();return e()===0?null:l`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function _t(){return l`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function le(){const{menuGroup:e,smallWhen:t}=u(),s=()=>e()==="top"||t()?"bottom":"top",n=g(()=>`${s()} ${e()==="top"?"end":"center"}`),i=g(()=>`${s()} end`);return[Ee({tooltip:n,placement:i,portal:!0}),Ue({tooltip:n,placement:i,portal:!0})]}function is(){return a(()=>{const{noGestures:e}=u();return e()?null:l`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var J,X,as,os;class qt extends Te(ke,zt){constructor(){super(...arguments);h(this,X);h(this,J)}onSetup(){this.forwardKeepAlive=!1,D(this,J,C()),this.classList.add("vds-video-layout")}onConnect(){Le("video",()=>this.isMatch),f(this,X,as).call(this)}render(){return a(f(this,X,os).bind(this))}}J=new WeakMap,X=new WeakSet,as=function(){const{menuPortal:s}=u();P(()=>{if(!this.isMatch)return;const n=Re(this,this.menuContainer,"vds-video-layout",()=>this.isSmallLayout),i=n?[this,n]:[this];return(this.$props.customIcons()?new Oe(i):new Ye(i)).connect(),s.set(n),()=>{n.remove(),s.set(null)}})},os=function(){const{load:s}=m(this,J).$props,{canLoad:n,streamType:i,nativeControls:o}=m(this,J).$state;return!o()&&this.isMatch?s()==="play"&&!n()?si():i()==="unknown"?_t():this.isSmallLayout?ei():Jn():null},_(qt,"tagName","media-video-layout"),_(qt,"attrs",{smallWhen:{converter(s){return s!=="never"&&!!s}}});we(Ut);we(qt);
