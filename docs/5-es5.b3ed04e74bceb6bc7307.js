function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,a=!0,o=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){o=!0,r=e},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{f8ci:function(e,t,n){"use strict";n.r(t),n.d(t,"BreedableModule",(function(){return K}));var i,r=n("ofXK"),a=n("tyNb"),o=n("fXoL"),s=n("4dR+"),c=n("8I9x"),l=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Bb({type:i,selectors:[["app-sub-navi-item"]],inputs:{text:"text",link:"link"},decls:9,vars:7,consts:[[3,"routerLink"],[1,"icon"],[1,"content"],[1,"title"],[1,"meta-info"]],template:function(e,t){1&e&&(o.Mb(0,"li"),o.Vb(1,"slugify"),o.Mb(2,"a",0),o.Ib(3,"div",1),o.Mb(4,"div",2),o.Mb(5,"span",3),o.fc(6),o.Lb(),o.Mb(7,"span",4),o.fc(8,"Test"),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&e&&(o.yb(o.Wb(1,5,t.text)),o.wb(2),o.Zb("routerLink",t.link),o.wb(4),o.gc(t.text))},directives:[a.c],pipes:[c.a],styles:["li[_ngcontent-%COMP%]{margin:0;height:auto;flex-flow:row wrap}li[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:90%;font-weight:700;letter-spacing:-1px;line-height:0;color:#000;background:#fff;background:linear-gradient(115deg,#fff,#fff 70.7%,#46504f 71%);border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);width:100%}li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:linear-gradient(115deg,#000,#000 70.7%,#46504f 71%);color:#fff}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{flex-basis:32px;height:32px}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-basis:calc(100% - 48px - 0.5rem);display:flex;justify-content:space-between}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .meta-info[_ngcontent-%COMP%]{color:#fff;font-weight:500;font-size:100%;text-align:right}"]}),i),u=function(e,t){return["/breedables",e,t]};function f(e,t){if(1&e&&(o.Ib(0,"app-sub-navi-item",7),o.Vb(1,"slugify")),2&e){var n=t.$implicit,i=o.Ub(2);o.Zb("link",o.ac(4,u,i.spreadsheetId,o.Wb(1,2,n.title)))("text",n.title)}}function p(e,t){if(1&e&&(o.Mb(0,"ul",5),o.ec(1,f,2,7,"app-sub-navi-item",6),o.Lb()),2&e){var n=o.Ub();o.wb(1),o.Zb("ngForOf",n.worksheets)}}var b,h,g,d,m=((b=function(){function e(t){_classCallCheck(this,e),this.spreadsheetDataService=t,this.isView=!0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.spreadsheetData$=this.spreadsheetDataService.getSpreadsheetInformation(),this.spreadsheetData$.subscribe({next:function(t){e.spreadsheetId=t.id,e.worksheets=t.worksheets.filter((function(e){var t;return"Breedables"===(null===(t=e.config)||void 0===t?void 0:t.type)}))}})}}]),e}()).\u0275fac=function(e){return new(e||b)(o.Hb(s.a))},b.\u0275cmp=o.Bb({type:b,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&o.zb("view",t.isView)},decls:6,vars:1,consts:[[1,"view-heder"],[1,"view-addional-content"],[1,"view-sidebar"],["class","sub-navi",4,"ngIf"],[1,"view-content"],[1,"sub-navi"],[3,"link","text",4,"ngFor","ngForOf"],[3,"link","text"]],template:function(e,t){1&e&&(o.Ib(0,"header",0),o.Ib(1,"div",1),o.Mb(2,"aside",2),o.ec(3,p,2,1,"ul",3),o.Lb(),o.Mb(4,"div",4),o.Ib(5,"router-outlet"),o.Lb()),2&e&&(o.wb(3),o.Zb("ngIf",t.worksheets))},directives:[r.i,a.e,r.h,l],pipes:[c.a],styles:[""]}),b),y=n("vkgz"),v=n("eIep"),k=((h=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=o.Bb({type:h,selectors:[["app-grid-item"]],inputs:{pokemon:"pokemon",appearance:"appearance"},decls:0,vars:0,template:function(e,t){},styles:[""]}),h),w=["*"],C=((d=function(){function e(t){_classCallCheck(this,e),this.elementRef=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var e=this.elementRef.nativeElement.textContent,t=new Image;t.src="https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/".concat(e,".png"),this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.childNodes[0]),this.elementRef.nativeElement.appendChild(t)}}]),e}()).\u0275fac=function(e){return new(e||d)(o.Hb(o.l))},d.\u0275cmp=o.Bb({type:d,selectors:[["app-pokemon"]],hostAttrs:[1,"pkspr"],ngContentSelectors:w,decls:1,vars:0,template:function(e,t){1&e&&(o.Yb(),o.Xb(0))},styles:[".pkspr[class*=pkmn-][_ngcontent-%COMP%]{width:68px;height:56px}"]}),d),_=((g=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=o.Bb({type:g,selectors:[["app-minimal"]],hostAttrs:[1,"grid-item"],inputs:{pokemon:"pokemon"},decls:4,vars:3,consts:[[1,"icon"]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Mb(1,"app-pokemon"),o.fc(2),o.Vb(3,"slugify"),o.Lb(),o.Lb()),2&e&&(o.wb(2),o.gc(o.Wb(3,1,t.pokemon.name)))},directives:[C],pipes:[c.a],styles:[".grid.minimal{grid-gap:6px;grid-template-columns:repeat(auto-fit,40px)}.grid.minimal .grid-item{height:40px;width:40px;border:none;background:hsla(0,0%,100%,.22);border-radius:5px}.grid.minimal .grid-item .icon{width:68px;height:56px;margin-left:-14px;flex-basis:40px;margin-top:-16px}"],encapsulation:2}),g);function x(e,t){if(1&e&&(o.Kb(0),o.Ib(1,"app-minimal",4),o.Jb()),2&e){var n=o.Ub().$implicit;o.wb(1),o.Zb("pokemon",n.pokemon)}}function O(e,t){if(1&e&&(o.Kb(0),o.Kb(1,2),o.ec(2,x,2,1,"ng-container",3),o.Jb(),o.Jb()),2&e){var n=o.Ub(2);o.wb(1),o.Zb("ngSwitch",n.appearance),o.wb(1),o.Zb("ngSwitchCase","minimal")}}function I(e,t){if(1&e&&(o.Kb(0),o.ec(1,O,3,2,"ng-container",1),o.Jb()),2&e){var n=o.Ub();o.wb(1),o.Zb("ngForOf",n.items)}}var M,P,A=((M=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngAfterContentInit",value:function(){var e=this;this.items||(this.items=this.contentChildren.toArray()),this.contentChildren.changes.subscribe((function(t){e.items=t.toArray()}))}},{key:"ngOnInit",value:function(){}},{key:"class",get:function(){var e;return null!==(e=this.appearance)&&void 0!==e?e:"normal"}}]),e}()).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=o.Bb({type:M,selectors:[["app-grid"]],contentQueries:function(e,t,n){var i;1&e&&o.Ab(n,k,!1),2&e&&o.bc(i=o.Tb())&&(t.contentChildren=i)},hostAttrs:[1,"grid"],hostVars:2,hostBindings:function(e,t){2&e&&o.yb(t.class)},inputs:{appearance:"appearance"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"pokemon"]],template:function(e,t){1&e&&o.ec(0,I,2,1,"ng-container",0),2&e&&o.Zb("ngIf",t.items)},directives:[r.i,r.h,r.j,r.k,_],styles:[".grid{display:grid}"],encapsulation:2}),M),B=function(){function e(t){_classCallCheck(this,e),t&&Object.assign(this,t)}return _createClass(e,[{key:"ability",get:function(){return this.gsx$ability.$t}},{key:"dex",get:function(){return this.gsx$dex.$t}},{key:"hasHiddenAbility",get:function(){return"x"===this.gsx$hasha.$t}},{key:"name",get:function(){return this.gsx$name.$t}}]),e}(),F=((P=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){return new B(e)}}]),e}()).\u0275fac=function(e){return new(e||P)},P.\u0275pipe=o.Gb({name:"castBreedable",type:P,pure:!0}),P);function L(e,t){if(1&e&&(o.Kb(0),o.Ib(1,"app-grid-item",3),o.Vb(2,"castBreedable"),o.Jb()),2&e){var n=t.$implicit;o.wb(1),o.Zb("pokemon",o.Wb(2,1,n))}}function S(e,t){if(1&e&&(o.Mb(0,"app-grid",1),o.ec(1,L,3,3,"ng-container",2),o.Lb()),2&e){var n=o.Ub();o.wb(1),o.Zb("ngForOf",null==n.worksheet?null:n.worksheet.data)("ngForTrackBy",n.trackBy)}}var T,$,j,Z,E,V=[{path:"",component:m,children:[{path:":id/:worksheetTitle",component:(T=function(){function e(t,n,i){_classCallCheck(this,e),this.spreadsheetDataService=t,this.route=n,this.slugifyPipe=i,this.subscriptions=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe(Object(y.a)((function(t){return e.worksheetTitle=t.get("worksheetTitle")})),Object(v.a)((function(){return e.spreadsheetDataService.getSpreadsheetInformation()}))).subscribe({next:function(t){var n;e.worksheet=null===(n=t.worksheets.filter((function(t){return e.slugifyPipe.transform(t.title)===e.worksheetTitle})))||void 0===n?void 0:n[0],console.log("Www",e.worksheet)}})}},{key:"trackBy",value:function(e,t){return e+t.dex}},{key:"ngOnDestroy",value:function(){var e,t=_createForOfIteratorHelper(this.subscriptions);try{for(t.s();!(e=t.n()).done;)e.value.unsubscribe()}catch(n){t.e(n)}finally{t.f()}}}]),e}(),T.\u0275fac=function(e){return new(e||T)(o.Hb(s.a),o.Hb(a.a),o.Hb(c.a))},T.\u0275cmp=o.Bb({type:T,selectors:[["app-ball"]],decls:1,vars:1,consts:[["appearance","minimal",4,"ngIf"],["appearance","minimal"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"]],template:function(e,t){1&e&&o.ec(0,S,2,2,"app-grid",0),2&e&&o.Zb("ngIf",t.worksheet)},directives:[r.i,A,r.h,k],pipes:[F],styles:[""]}),T)}]}],H=(($=function e(){_classCallCheck(this,e)}).\u0275mod=o.Fb({type:$}),$.\u0275inj=o.Eb({factory:function(e){return new(e||$)},imports:[[a.d.forChild(V)],a.d]}),$),D=n("PCNd"),J=((E=function e(){_classCallCheck(this,e)}).\u0275mod=o.Fb({type:E}),E.\u0275inj=o.Eb({factory:function(e){return new(e||E)},imports:[[r.b]]}),E),U=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=o.Fb({type:Z}),Z.\u0275inj=o.Eb({factory:function(e){return new(e||Z)},imports:[[r.b,J,D.a]]}),Z),K=((j=function e(){_classCallCheck(this,e)}).\u0275mod=o.Fb({type:j}),j.\u0275inj=o.Eb({factory:function(e){return new(e||j)},providers:[c.a],imports:[[r.b,H,D.a,U]]}),j)}}]);