(function(e,b){typeof exports=="object"&&typeof module<"u"?module.exports=b(require("vue")):typeof define=="function"&&define.amd?define(["vue"],b):(e=typeof globalThis<"u"?globalThis:e||self,e.AtticDatepicker=b(e.Vue))})(this,function(e){"use strict";var Pe=Object.defineProperty;var qe=(e,b,T)=>b in e?Pe(e,b,{enumerable:!0,configurable:!0,writable:!0,value:T}):e[b]=T;var H=(e,b,T)=>(qe(e,typeof b!="symbol"?b+"":b,T),T);var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`@media (min-width: 768px){.attic-datepicker-calendar:before{--attic-datepicker-calendar: 0px;content:"";position:absolute;top:0;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--attic-datepicker-calendar) * -1) calc(var(--attic-datepicker-calendar) * -1),calc(100% + var(--attic-datepicker-calendar)) calc(var(--attic-datepicker-calendar) * -1),calc(100% + var(--attic-datepicker-calendar)) calc(100% + var(--attic-datepicker-calendar)));clip-path:polygon(calc(var(--attic-datepicker-calendar) * -1) calc(var(--attic-datepicker-calendar) * -1),calc(100% + var(--attic-datepicker-calendar)) calc(var(--attic-datepicker-calendar) * -1),calc(100% + var(--attic-datepicker-calendar)) calc(100% + var(--attic-datepicker-calendar)))}.attic-datepicker-calendar.place-left:before{left:2rem}.attic-datepicker-calendar.place-right:before{right:1.25rem}}
`;document.head.appendChild(__vite_style__);const b=c=>{const r=[];for(let l=0;l<=c.date(0).day();l++)r.push(c.date(0).subtract(l,"day"));return r.sort((l,t)=>l.date()-t.date())},T=c=>Array.from({length:c.daysInMonth()},(r,l)=>c.date(l+1)),te=c=>{const{instance:r,arg:l,value:t}=c;document.body.addEventListener("click",d=>{if(r.$el.contains(d.target))return r.showCalendar=!0;r.showCalendar=r.$el.contains(d.target)||document.getElementById(t)===d.target||t===d.target})};var J=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ne={exports:{}};(function(c,r){(function(l,t){c.exports=t()})(J,function(){var l=1e3,t=6e4,d=36e5,y="millisecond",o="second",h="minute",k="hour",$="day",S="week",s="month",w="quarter",E="year",B="date",I="Invalid Date",R=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},A=function(p,i,n){var u=String(p);return!u||u.length>=i?p:""+Array(i+1-u.length).join(n)+p},Q={s:A,z:function(p){var i=-p.utcOffset(),n=Math.abs(i),u=Math.floor(n/60),a=n%60;return(i<=0?"+":"-")+A(u,2,"0")+":"+A(a,2,"0")},m:function p(i,n){if(i.date()<n.date())return-p(n,i);var u=12*(n.year()-i.year())+(n.month()-i.month()),a=i.clone().add(u,s),m=n-a<0,f=i.clone().add(u+(m?-1:1),s);return+(-(u+(n-a)/(m?a-f:f-a))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:s,y:E,w:S,d:$,D:B,h:k,m:h,s:o,ms:y,Q:w}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},N="en",O={};O[N]=G;var K=function(p){return p instanceof Z},X=function p(i,n,u){var a;if(!i)return N;if(typeof i=="string"){var m=i.toLowerCase();O[m]&&(a=m),n&&(O[m]=n,a=m);var f=i.split("-");if(!a&&f.length>1)return p(f[0])}else{var g=i.name;O[g]=i,a=g}return!u&&a&&(N=a),a||!u&&N},v=function(p,i){if(K(p))return p.clone();var n=typeof i=="object"?i:{};return n.date=p,n.args=arguments,new Z(n)},D=Q;D.l=X,D.i=K,D.w=function(p,i){return v(p,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var Z=function(){function p(n){this.$L=X(n.locale,null,!0),this.parse(n)}var i=p.prototype;return i.parse=function(n){this.$d=function(u){var a=u.date,m=u.utc;if(a===null)return new Date(NaN);if(D.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var f=a.match(R);if(f){var g=f[2]-1||0,M=(f[7]||"0").substring(0,3);return m?new Date(Date.UTC(f[1],g,f[3]||1,f[4]||0,f[5]||0,f[6]||0,M)):new Date(f[1],g,f[3]||1,f[4]||0,f[5]||0,f[6]||0,M)}}return new Date(a)}(n),this.$x=n.x||{},this.init()},i.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},i.$utils=function(){return D},i.isValid=function(){return this.$d.toString()!==I},i.isSame=function(n,u){var a=v(n);return this.startOf(u)<=a&&a<=this.endOf(u)},i.isAfter=function(n,u){return v(n)<this.startOf(u)},i.isBefore=function(n,u){return this.endOf(u)<v(n)},i.$g=function(n,u,a){return D.u(n)?this[u]:this.set(a,n)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(n,u){var a=this,m=!!D.u(u)||u,f=D.p(n),g=function(W,V){var L=D.w(a.$u?Date.UTC(a.$y,V,W):new Date(a.$y,V,W),a);return m?L:L.endOf($)},M=function(W,V){return D.w(a.toDate()[W].apply(a.toDate("s"),(m?[0,0,0,0]:[23,59,59,999]).slice(V)),a)},_=this.$W,x=this.$M,j=this.$D,Y="set"+(this.$u?"UTC":"");switch(f){case E:return m?g(1,0):g(31,11);case s:return m?g(1,x):g(0,x+1);case S:var F=this.$locale().weekStart||0,U=(_<F?_+7:_)-F;return g(m?j-U:j+(6-U),x);case $:case B:return M(Y+"Hours",0);case k:return M(Y+"Minutes",1);case h:return M(Y+"Seconds",2);case o:return M(Y+"Milliseconds",3);default:return this.clone()}},i.endOf=function(n){return this.startOf(n,!1)},i.$set=function(n,u){var a,m=D.p(n),f="set"+(this.$u?"UTC":""),g=(a={},a[$]=f+"Date",a[B]=f+"Date",a[s]=f+"Month",a[E]=f+"FullYear",a[k]=f+"Hours",a[h]=f+"Minutes",a[o]=f+"Seconds",a[y]=f+"Milliseconds",a)[m],M=m===$?this.$D+(u-this.$W):u;if(m===s||m===E){var _=this.clone().set(B,1);_.$d[g](M),_.init(),this.$d=_.set(B,Math.min(this.$D,_.daysInMonth())).$d}else g&&this.$d[g](M);return this.init(),this},i.set=function(n,u){return this.clone().$set(n,u)},i.get=function(n){return this[D.p(n)]()},i.add=function(n,u){var a,m=this;n=Number(n);var f=D.p(u),g=function(x){var j=v(m);return D.w(j.date(j.date()+Math.round(x*n)),m)};if(f===s)return this.set(s,this.$M+n);if(f===E)return this.set(E,this.$y+n);if(f===$)return g(1);if(f===S)return g(7);var M=(a={},a[h]=t,a[k]=d,a[o]=l,a)[f]||1,_=this.$d.getTime()+n*M;return D.w(_,this)},i.subtract=function(n,u){return this.add(-1*n,u)},i.format=function(n){var u=this,a=this.$locale();if(!this.isValid())return a.invalidDate||I;var m=n||"YYYY-MM-DDTHH:mm:ssZ",f=D.z(this),g=this.$H,M=this.$m,_=this.$M,x=a.weekdays,j=a.months,Y=function(V,L,ee,P){return V&&(V[L]||V(u,m))||ee[L].slice(0,P)},F=function(V){return D.s(g%12||12,V,"0")},U=a.meridiem||function(V,L,ee){var P=V<12?"AM":"PM";return ee?P.toLowerCase():P},W={YY:String(this.$y).slice(-2),YYYY:this.$y,M:_+1,MM:D.s(_+1,2,"0"),MMM:Y(a.monthsShort,_,j,3),MMMM:Y(j,_),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:Y(a.weekdaysMin,this.$W,x,2),ddd:Y(a.weekdaysShort,this.$W,x,3),dddd:x[this.$W],H:String(g),HH:D.s(g,2,"0"),h:F(1),hh:F(2),a:U(g,M,!0),A:U(g,M,!1),m:String(M),mm:D.s(M,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:f};return m.replace(q,function(V,L){return L||W[V]||f.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(n,u,a){var m,f=D.p(u),g=v(n),M=(g.utcOffset()-this.utcOffset())*t,_=this-g,x=D.m(this,g);return x=(m={},m[E]=x/12,m[s]=x,m[w]=x/3,m[S]=(_-M)/6048e5,m[$]=(_-M)/864e5,m[k]=_/d,m[h]=_/t,m[o]=_/l,m)[f]||_,a?x:D.a(x)},i.daysInMonth=function(){return this.endOf(s).$D},i.$locale=function(){return O[this.$L]},i.locale=function(n,u){if(!n)return this.$L;var a=this.clone(),m=X(n,u,!0);return m&&(a.$L=m),a},i.clone=function(){return D.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},p}(),he=Z.prototype;return v.prototype=he,[["$ms",y],["$s",o],["$m",h],["$H",k],["$W",$],["$M",s],["$y",E],["$D",B]].forEach(function(p){he[p[1]]=function(i){return this.$g(i,p[0],p[1])}}),v.extend=function(p,i){return p.$i||(p(i,Z,v),p.$i=!0),v},v.locale=X,v.isDayjs=K,v.unix=function(p){return v(1e3*p)},v.en=O[N],v.Ls=O,v.p={},v})})(ne);const C=ne.exports;var ae={exports:{}};(function(c,r){(function(l,t){c.exports=t()})(J,function(){return function(l,t,d){var y=t.prototype,o=function(s){return s&&(s.indexOf?s:s.s)},h=function(s,w,E,B,I){var R=s.name?s:s.$locale(),q=o(R[w]),G=o(R[E]),A=q||G.map(function(N){return N.slice(0,B)});if(!I)return A;var Q=R.weekStart;return A.map(function(N,O){return A[(O+(Q||0))%7]})},k=function(){return d.Ls[d.locale()]},$=function(s,w){return s.formats[w]||function(E){return E.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(B,I,R){return I||R.slice(1)})}(s.formats[w.toUpperCase()])},S=function(){var s=this;return{months:function(w){return w?w.format("MMMM"):h(s,"months")},monthsShort:function(w){return w?w.format("MMM"):h(s,"monthsShort","months",3)},firstDayOfWeek:function(){return s.$locale().weekStart||0},weekdays:function(w){return w?w.format("dddd"):h(s,"weekdays")},weekdaysMin:function(w){return w?w.format("dd"):h(s,"weekdaysMin","weekdays",2)},weekdaysShort:function(w){return w?w.format("ddd"):h(s,"weekdaysShort","weekdays",3)},longDateFormat:function(w){return $(s.$locale(),w)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};y.localeData=function(){return S.bind(this)()},d.localeData=function(){var s=k();return{firstDayOfWeek:function(){return s.weekStart||0},weekdays:function(){return d.weekdays()},weekdaysShort:function(){return d.weekdaysShort()},weekdaysMin:function(){return d.weekdaysMin()},months:function(){return d.months()},monthsShort:function(){return d.monthsShort()},longDateFormat:function(w){return $(s,w)},meridiem:s.meridiem,ordinal:s.ordinal}},d.months=function(){return h(k(),"months")},d.monthsShort=function(){return h(k(),"monthsShort","months",3)},d.weekdays=function(s){return h(k(),"weekdays",null,null,s)},d.weekdaysShort=function(s){return h(k(),"weekdaysShort","weekdays",3,s)},d.weekdaysMin=function(s){return h(k(),"weekdaysMin","weekdays",2,s)}}})})(ae);const ue=ae.exports;var re={exports:{}};(function(c,r){(function(l,t){c.exports=t()})(J,function(){return function(l,t){t.prototype.weekday=function(d){var y=this.$locale().weekStart||0,o=this.$W,h=(o<y?o+7:o)-y;return this.$utils().u(d)?h:this.subtract(h,"day").add(d,"day")}}})})(re);const fe=re.exports;var oe={exports:{}};(function(c,r){(function(l,t){c.exports=t()})(J,function(){return function(l,t,d){t.prototype.isBetween=function(y,o,h,k){var $=d(y),S=d(o),s=(k=k||"()")[0]==="(",w=k[1]===")";return(s?this.isAfter($,h):!this.isBefore($,h))&&(w?this.isBefore(S,h):!this.isAfter(S,h))||(s?this.isBefore($,h):!this.isAfter($,h))&&(w?this.isAfter(S,h):!this.isBefore(S,h))}}})})(oe);const me=oe.exports,pe=()=>({calendar:e.computed(()=>({monthView:{date:r=>b(r).concat(T(r))}}))}),z=(c,r)=>{const l=c.__vccOpts||c;for(const[t,d]of r)l[t]=d;return l},we={name:"YearCalendar",setup(c,{emit:r}){e.inject("atticDatepicker");const l=e.inject("calendarView");return{years:e.computed(()=>{const y=[],o=parseInt(C().add(5,"years").subtract(105,"years").format("YYYY"));for(let h=0;h<=105;h++)y.push(o+h);return y.reverse()}),selectYear:y=>{l.value.date.value=l.value.date.value.year(y),r("changeView","dates")},dayjs:C}}},ye={class:"flex-1"},ge={class:"max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm"},De=["onClick"];function ke(c,r,l,t,d,y){return e.openBlock(),e.createElementBlock("div",ye,[e.createElementVNode("div",ge,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.years,o=>(e.openBlock(),e.createElementBlock("button",{type:"button",class:"w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white",onClick:h=>t.selectYear(o)},e.toDisplayString(o),9,De))),256))])])}const ie=z(we,[["render",ke]]),_e={name:"MonthsCalendar",setup(c,{emit:r}){e.inject("atticDatepicker");const l=e.inject("calendarView");return{selectMonth:d=>{l.value.date.value=l.value.date.value.month(d),r("changeView","dates")},dayjs:C}}},Me={class:"flex-1"},$e={class:"grid grid-cols-2 gap-3 font-bold text-sm w-full"},ve=["onClick"];function xe(c,r,l,t,d,y){return e.openBlock(),e.createElementBlock("div",Me,[e.createElementVNode("div",$e,[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(12,o=>e.createElementVNode("button",{type:"button",class:"rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2",onClick:h=>t.selectMonth(o-1)},e.toDisplayString(t.dayjs().month(o-1).format("MMMM")),9,ve)),64))])])}const se=z(_e,[["render",xe]]),Ve={name:"MonthCalendar",setup(c,{emit:r}){const l=e.inject("calendarView"),t=e.inject("atticDatepicker"),d=e.inject("showCalendar"),y=e.inject("monthDays"),o=e.inject("date");return{atticDatepicker:t,calendarView:l,isSameMonth:s=>s.isSame(o.value.format("YYYY-MM"),"month"),isInBetweenRange:s=>t.isRange&&t.selectedDate.value&&t.selectedEndDate.value&&s.isBetween(t.selectedDate.value,t.selectedEndDate.value),isSelectedDay:s=>t.selectedDate.value&&t.selectedDate.value.isSame(s)||t.selectedEndDate.value&&t.selectedEndDate.value.isSame(s),dayjs:C,monthDays:y,date:o,selectDate:s=>{t.selectDate(s),d.value=!t.ableToClose()}}}},be={class:"flex-1 flex"},Se=[e.createElementVNode("svg",{class:"w-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 444.531 444.531","xml:space":"preserve"},[e.createElementVNode("g",null,[e.createElementVNode("path",{d:`M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                          l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                          c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                          s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                          L213.13,222.409z`})])],-1)],Ce={class:"space-y-5"},Ee={class:"text-center font-bold"},Be={class:"grid grid-cols-7"},Oe={class:"font-semibold text-sm text-gray-400 text-center"},Ye={key:0},Ne=["onClick"],je={key:1,class:"h-full w-full bg-gray-100 absolute z-0"},Le=[e.createElementVNode("svg",{class:"w-3",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 444.531 444.531","xml:space":"preserve"},[e.createElementVNode("g",null,[e.createElementVNode("path",{d:`M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                    c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                    c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                    c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                    c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z`})])],-1)];function Te(c,r,l,t,d,y){return e.openBlock(),e.createElementBlock("div",be,[e.createElementVNode("button",{type:"button",onClick:r[0]||(r[0]=o=>t.calendarView.subtractMonth()),class:"w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"},Se),e.createElementVNode("div",Ce,[e.createElementVNode("h2",Ee,[e.createElementVNode("span",{class:"hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",onClick:r[1]||(r[1]=o=>c.$emit("changeView","months"))},e.toDisplayString(t.date.format("MMMM")),1),e.createElementVNode("span",{class:"hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",onClick:r[2]||(r[2]=o=>c.$emit("changeView","years"))},e.toDisplayString(t.date.format("YYYY")),1)]),e.createElementVNode("div",Be,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.dayjs.weekdaysMin(),o=>(e.openBlock(),e.createElementBlock("div",Oe,e.toDisplayString(o),1))),256)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.monthDays,o=>(e.openBlock(),e.createElementBlock("div",null,[t.isSameMonth(o)?(e.openBlock(),e.createElementBlock("div",Ye,[e.createElementVNode("div",{class:"mx-auto border-primary cursor-pointer font-bold text-sm relative",onClick:h=>t.selectDate(o)},[t.atticDatepicker.isRange&&t.isSelectedDay(o)&&t.atticDatepicker.selectedDate.value&&t.atticDatepicker.selectedEndDate.value?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["h-full w-1/2 bg-gray-100 absolute z-0",[{"right-0":t.atticDatepicker.isRange&&t.atticDatepicker.selectedDate.value&&t.atticDatepicker.selectedDate.value.isSame(o)},{"left-0":t.atticDatepicker.isRange&&t.atticDatepicker.selectedEndDate.value&&t.atticDatepicker.selectedEndDate.value.isSame(o)}]])},null,2)):e.createCommentVNode("",!0),t.isInBetweenRange(o)?(e.openBlock(),e.createElementBlock("div",je)):e.createCommentVNode("",!0),e.createElementVNode("span",{class:e.normalizeClass(["z-10 block relative text-center align-middle hover:rounded-full block w-12 h-12 text-center align-middle flex items-center justify-center",[{"bg-attic-primary text-white rounded-full":t.isSelectedDay(o)},{"hover:bg-gray-200":!t.isSelectedDay(o)}]])},e.toDisplayString(o.format("DD")),3)],8,Ne)])):e.createCommentVNode("",!0)]))),256))])]),e.createElementVNode("button",{type:"button",onClick:r[3]||(r[3]=o=>t.calendarView.addMonth()),class:"w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"},Le)])}const ce=z(Ve,[["render",Te]]),Re={name:"Calendar",props:{date:Object},components:{YearsCalendar:ie,MonthsCalendar:se,DatesCalendar:ce},setup(c){const{calendar:r}=pe(),l=e.ref("dates"),t=e.computed(()=>r.value.monthView.date(c.date)),d=e.ref(c.date);e.provide("date",d),e.provide("monthDays",t);const y=o=>{l.value=o};return e.watch(()=>c.date,(o,h)=>{d.value=o}),{displayView:l,changeView:y}}};function Ae(c,r,l,t,d,y){const o=e.resolveComponent("YearsCalendar"),h=e.resolveComponent("MonthsCalendar"),k=e.resolveComponent("DatesCalendar");return e.openBlock(),e.createElementBlock("div",null,[e.withDirectives(e.createVNode(o,{onChangeView:t.changeView},null,8,["onChangeView"]),[[e.vShow,t.displayView==="years"]]),e.withDirectives(e.createVNode(h,{onChangeView:t.changeView},null,8,["onChangeView"]),[[e.vShow,t.displayView==="months"]]),e.withDirectives(e.createVNode(k,{onChangeView:t.changeView},null,8,["onChangeView"]),[[e.vShow,t.displayView==="dates"]])])}const le=z(Re,[["render",Ae]]);class He{constructor(r,l,t,d){H(this,"modelValue");H(this,"selectedDate");H(this,"selectedEndDate");H(this,"isRange");H(this,"keepOpen");H(this,"format");this.modelValue=e.ref(null),this.selectedDate=e.ref(null),this.selectedEndDate=e.ref(null),this.keepOpen=d,this.isRange=t,this.format=l,e.watch(()=>this.selectedDate.value,(y,o)=>{this.getValue()}),e.watch(()=>this.selectedEndDate.value,(y,o)=>{this.getValue()}),this.setDates(r)}setDates(r){if(r){if(typeof r=="string"){this.selectedDate.value=C(r);return}typeof r=="object"&&this.isRange&&(this.selectedDate.value=C(r[0]),r.length>1&&(this.selectedEndDate.value=C(r[1])))}}selectDate(r){if(!this.isRange){this.selectedDate.value=r;return}if(this.selectedDate.value&&this.selectedEndDate.value){this.selectedDate.value=r,this.selectedEndDate.value=null;return}if(!this.selectedDate.value||r.diff(this.selectedDate.value,"day")<0){this.selectedDate.value=r;return}r.diff(this.selectedDate.value,"day")>0&&(this.selectedEndDate.value=r)}ableToClose(){return!!(!this.keepOpen&&(this.isRange&&this.selectedDate.value&&this.selectedEndDate.value||!this.isRange))}getValue(){if(!this.isRange&&this.selectedDate.value){this.modelValue.value=this.selectedDate.value.format(this.format);return}(this.selectedDate.value||this.selectedEndDate.value)&&(this.modelValue.value=[this.selectedDate.value?this.selectedDate.value.format(this.format):null,this.selectedEndDate.value?this.selectedEndDate.value.format(this.format):null])}}const Ke="";C.extend(ue),C.extend(fe),C.extend(me);const Ie={name:"AtticDatepicker",props:{modelValue:Object,endDate:String,format:{type:String,default:"DD MMM YYYY"},trigger:{type:String,default:null},showXMonths:Number,isRange:Boolean,keepOpen:Boolean},components:{Calendar:le,YearsCalendar:ie,MonthsCalendar:se,DatesCalendar:ce},directives:{attic:{mounted:(c,r)=>{te(r)},updated:(c,r)=>{te(r)}}},setup(c,{emit:r}){const l=e.ref(!1),t=new He(c.modelValue,c.format,c.isRange||c.isRange==="true",typeof c.keepOpen=="string"?c.keepOpen!=="false":c.keepOpen),d=e.computed(()=>{const o=e.ref(t.selectedDate.value??C()),h=()=>{o.value=o.value.subtract(1,"month")},k=()=>{o.value=o.value.add(1,"month")};return e.watch(()=>t.selectedDate.value,($,S)=>{o.value=$}),{subtractMonth:h,addMonth:k,date:o}}),y=()=>{t.modelValue.value=c.isRange?[]:null,t.selectedDate.value=null,t.selectedEndDate.value=null,l.value=!1};return e.watch(()=>t.modelValue.value,(o,h)=>{r("update:modelValue",o)}),e.provide("atticDatepicker",t),e.provide("showCalendar",l),e.provide("calendarView",d),e.provide("showXMonths",c.showXMonths),{clearDate:y,atticDatepicker:t,showCalendar:l,calendarView:d,dayjs:C}}},We={class:"md:space-y-2"},ze={key:0},Fe={key:1},Ue={key:2,class:"text-gray-400"},Je={key:0,class:"attic-datepicker-calendar place-left md:absolute fixed bg-white md:rounded-[28px] border py-5 px-6 md:shadow-xl z-[99] md:top-auto md:right-auto md:h-auto md:w-auto md:space-y-0 top-0 right-0 h-full w-full space-y-8"},Xe={class:"md:flex md:items-start md:space-x-3 md:space-y-0 space-y-8"};function Ze(c,r,l,t,d,y){const o=e.resolveComponent("Calendar"),h=e.resolveDirective("attic");return e.withDirectives((e.openBlock(),e.createElementBlock("div",We,[e.renderSlot(c.$slots,"default",{value:t.atticDatepicker.modelValue.value,placeholder:c.$attrs.placeholder,clear:t.clearDate},()=>[e.createElementVNode("div",e.mergeProps({class:"relative block w-full pl-3 pr-12 py-3 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none shadow"},c.$attrs),[!l.isRange&&t.atticDatepicker.selectedDate.value?(e.openBlock(),e.createElementBlock("span",ze,e.toDisplayString(t.atticDatepicker.modelValue.value),1)):l.isRange&&t.atticDatepicker.modelValue.value&&t.atticDatepicker.modelValue.value.length>1?(e.openBlock(),e.createElementBlock("span",Fe,e.toDisplayString(t.atticDatepicker.modelValue.value[0])+" ~ "+e.toDisplayString(t.atticDatepicker.modelValue.value[1]),1)):(e.openBlock(),e.createElementBlock("span",Ue,e.toDisplayString(c.$attrs.placeholder??"Select Date"),1))],16)]),e.createVNode(e.Transition,{"enter-from-class":"opacity-0 translate-y-3","enter-to-class":"opacity-100 translate-y-0","enter-active-class":"transform transition ease-out duration-200","leave-active-class":"transform transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-3"},{default:e.withCtx(()=>[t.showCalendar?(e.openBlock(),e.createElementBlock("div",Je,[e.createElementVNode("div",Xe,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(parseInt(l.showXMonths??1),k=>(e.openBlock(),e.createBlock(o,{date:t.calendarView.date.value.add(k-1,"month")},null,8,["date"]))),256))]),e.createElementVNode("button",{type:"button",class:"sm:hidden w-full bg-red-500 rounded text-white font-bold p-3",onClick:r[0]||(r[0]=k=>t.showCalendar=!1)}," Close ")])):e.createCommentVNode("",!0)]),_:1})])),[[h,l.trigger,"away"]])}const de=z(Ie,[["render",Ze]]);return Object.assign(de,{install:c=>{c.component("AtticDatepicker",de)}},{Calendar:le})});
