parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t=document.getElementById("btn-next"),e=document.getElementById("btn-prev"),n=document.querySelectorAll(".slider__slide"),c=document.querySelectorAll(".slider__dot"),a=0,s=0,r=0,i=function(t){n.forEach(function(t){return t.classList.remove("active")}),n[t].classList.add("active")},o=function(t){c.forEach(function(t){return t.classList.remove("active")}),c[t].classList.add("active")},l=function(t){i(t),o(t)},d=function(){r===n.length-1?l(r=0):l(r+=1)},u=function(){0===r?(r=n.length-1,l(r)):l(r-=1)};c.forEach(function(t,e){t.addEventListener("click",function(){l(r=e)})}),t.addEventListener("click",d),e.addEventListener("click",u);var m=3600,v=document.getElementById("timer");function f(){var t=Math.floor(m/60),e=m%60;e=e<10?"0".concat(e):e,v.innerHTML="Осталось: ".concat(t," минут ").concat(e," секунд"),m-=1}setInterval(f,1e3);var y=document.getElementById("matches"),L=document.getElementById("battles"),E=document.getElementById("matchesList"),h=document.getElementById("battlesList"),g=document.querySelector(".card__matches-wrapper"),p=document.querySelectorAll(".card-bet"),I=document.querySelector(".card__battles-wrapper"),_=document.querySelectorAll(".card-battle"),B=document.getElementById("prevCard"),x=document.getElementById("nextCard"),b=document.querySelectorAll(".schedule__actions-dot"),k=p[0].clientWidth,q=_[0].clientWidth;g.style.transform="translateX(".concat(-k*a,"px)"),I.style.transform="translateX(".concat(-q*a,"px)");var S=function(){b.forEach(function(t){return t.classList.remove("active")}),b[s].classList.add("active")};x.addEventListener("click",function(){a>=p.length-1||a>=_.length-1||(E.classList.contains("active")&&(g.style.transition="transform 0.3s ease-in-out",a+=1,g.style.transform="translateX(".concat(-k*a,"px)")),h.classList.contains("active")&&(I.style.transition="transform 0.3s ease-in-out",a+=1,I.style.transform="translateX(".concat(-q*a,"px)")),s<4?(s+=1,S()):(s=0,S()))}),B.addEventListener("click",function(){a<=0||a<=0||(E.classList.contains("active")&&(g.style.transition="transform 0.3s ease-in-out",a-=1,g.style.transform="translateX(".concat(-k*a,"px)")),h.classList.contains("active")&&(I.style.transition="transform 0.3s ease-in-out",a-=1,I.style.transform="translateX(".concat(-q*a,"px)")),s>0?(s-=1,S()):(s=4,S()))});var X=function(){h.classList.remove("active"),E.classList.add("active"),s=0,S(),a=0},A=function(){E.classList.remove("active"),h.classList.add("active"),s=0,S(),a=0};y.addEventListener("click",X),L.addEventListener("click",A);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/esports_landing/src.e31bb0bc.js.map