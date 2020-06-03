function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Bq4Z:function(e,t,n){"use strict";n.r(t),n.d(t,"SpreadsheetChangerModule",(function(){return S}));var r,s=n("ofXK"),i=n("tyNb"),a=n("3Pt+"),o=n("fXoL"),c=n("d3iT"),b=n("XJ2P"),d=["*"],l=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=o.Eb({type:r,selectors:[["app-ball-guy-bubble"]],ngContentSelectors:d,decls:2,vars:0,consts:[[1,"speech-bubble"]],template:function(e,t){1&e&&(o.dc(),o.Pb(0,"div",0),o.cc(1),o.Ob())},styles:['[_nghost-%COMP%]{padding-left:115px;background:url(ball-guy-face.f139ac5d7ceb38f68015.png) 0 0 no-repeat;min-height:110px;display:block}[_nghost-%COMP%]   .speech-bubble[_ngcontent-%COMP%]{display:block;width:100%;min-height:80px;padding:12px;border-radius:8px;background:#fff;-webkit-filter:drop-shadow(0 2px 4px rgba(0,0,0,.5));filter:drop-shadow(0 2px 4px rgba(0,0,0,.5))}[_nghost-%COMP%]   .speech-bubble[_ngcontent-%COMP%]:after{content:"";border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #fff;position:absolute;left:-10px;top:40px}']}),r);function p(e,t){if(1&e){var n=o.Qb();o.Pb(0,"li",10),o.Xb("click",(function(){o.jc(n);var e=t.$implicit;return o.Zb().fromHistory(e.id)})),o.oc(1),o.Ob()}if(2&e){var r=t.$implicit;o.zb(1),o.qc(" ",r.title," ")}}function u(e,t){1&e&&(o.Pb(0,"div"),o.oc(1," Contains valuables. "),o.Ob())}function h(e,t){1&e&&(o.Pb(0,"div"),o.oc(1," Contains breedables. "),o.Ob())}function f(e,t){if(1&e){var n=o.Qb();o.Nb(0),o.Pb(1,"div",2),o.oc(2),o.Ob(),o.mc(3,u,2,0,"div",11),o.mc(4,h,2,0,"div",11),o.Pb(5,"div",12),o.Pb(6,"button",13),o.Xb("click",(function(){o.jc(n);var e=t.$implicit;return o.Zb().saveSpreadsheet(e)})),o.oc(7,"Save as current spreadsheet"),o.Ob(),o.Ob(),o.Mb()}if(2&e){var r=t.$implicit;o.zb(2),o.pc(r.title),o.zb(1),o.ec("ngIf",r.hasValuables),o.zb(1),o.ec("ngIf",r.hasBreedables)}}function g(e,t){1&e&&(o.Pb(0,"div"),o.Pb(1,"app-ball-guy-bubble"),o.oc(2," Enter a spreadsheet Id to load a spreadsheet "),o.Ob(),o.Ob())}function v(e,t){1&e&&(o.Pb(0,"div"),o.oc(1," Load spreadsheet "),o.Ob())}function m(e,t){if(1&e&&(o.mc(0,g,3,0,"div",11),o.mc(1,v,2,0,"div",11)),2&e){var n=o.Zb();o.ec("ngIf",!n.hasRequested),o.zb(1),o.ec("ngIf",n.hasRequested)}}function y(e,t){1&e&&o.oc(0),2&e&&o.qc("Error: ",t.error.message,"")}var w,k,x,O=[{path:"",component:(w=function(){function e(t){_classCallCheck(this,e),this.spreadsheetFacade=t,this.classes="view",this.hasRequested=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.searchForm=new a.e({search:new a.b("")}),this.isLoading$=this.spreadsheetFacade.isLoading$(),this.spreadsheetHistory$=this.spreadsheetFacade.getSpreadsheetHistory$()}},{key:"submitSearch",value:function(){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value)}},{key:"saveSpreadsheet",value:function(e){this.spreadsheetFacade.updateCurrentSpreadsheet(e)}},{key:"fromHistory",value:function(e){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.loadSpreadsheet(e)}},{key:"trackBy",value:function(e,t){return t.id}}]),e}(),w.\u0275fac=function(e){return new(e||w)(o.Kb(c.a))},w.\u0275cmp=o.Eb({type:w,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&o.Bb(t.classes)},decls:18,vars:8,consts:[[1,"view-header","full-width"],[1,"view-sidebar"],[1,"view-subheader"],[3,"formGroup","submit"],["id","search","formControlName","search","placeholder","Look up spreadsheet by id"],["class","history-entry",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"view-content"],[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny","ngxSubscribeOnError"],["pendingTemplate",""],["errorTemplate",""],[1,"history-entry",3,"click"],[4,"ngIf"],[1,"button-row"],[1,"save-button",3,"click"]],template:function(e,t){if(1&e&&(o.Pb(0,"header",0),o.oc(1,"Change spreadsheet"),o.Ob(),o.Pb(2,"aside",1),o.Pb(3,"div",2),o.oc(4,"Spreadsheet search"),o.Ob(),o.Pb(5,"form",3),o.Xb("submit",(function(){return t.submitSearch()})),o.Lb(6,"input",4),o.Ob(),o.Pb(7,"div",2),o.oc(8," search history "),o.Ob(),o.Pb(9,"ul"),o.mc(10,p,2,1,"li",5),o.ac(11,"async"),o.Ob(),o.Ob(),o.Pb(12,"div",6),o.mc(13,f,8,3,"ng-container",7),o.Ob(),o.mc(14,m,2,2,"ng-template",null,8,o.nc),o.mc(16,y,1,1,"ng-template",null,9,o.nc)),2&e){var n=o.ic(15),r=o.ic(17);o.zb(5),o.ec("formGroup",t.searchForm),o.zb(5),o.ec("ngForOf",o.bc(11,6,t.spreadsheetHistory$))("ngForTrackBy",t.trackBy),o.zb(3),o.ec("ngxSubscribeOf",t.loadedSpreadsheet$)("ngxSubscribeBeforeAny",n)("ngxSubscribeOnError",r)}},directives:[a.k,a.i,a.f,a.a,a.h,a.d,s.i,b.c,s.j,l],pipes:[s.b],styles:["#search,.history-entry,.save-button{font-size:90%;font-weight:700;letter-spacing:-1px;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);align-items:center;width:100%;overflow:hidden;border:none;outline:none;padding:0 8px;background:#fff}.history-entry{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:16px}.save-button{width:auto}"],encapsulation:2}),w)}],P=((k=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:k}),k.\u0275inj=o.Hb({factory:function(e){return new(e||k)},imports:[[i.f.forChild(O)],i.f]}),k),C=n("PCNd"),S=((x=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:x}),x.\u0275inj=o.Hb({factory:function(e){return new(e||x)},imports:[[s.c,P,a.j,b.b,C.a]]}),x)}}]);