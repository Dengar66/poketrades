(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Bq4Z:function(e,t,s){"use strict";s.r(t),s.d(t,"SpreadsheetChangerModule",(function(){return P}));var r=s("ofXK"),n=s("tyNb"),i=s("3Pt+"),c=s("fXoL"),a=s("d3iT"),o=s("XJ2P"),d=s("NQo5");function b(e,t){if(1&e){const e=c.Qb();c.Pb(0,"li",11),c.Vb("click",(function(){c.kc(e);const s=t.$implicit;return c.Xb().fromHistory(s.id)})),c.sc(1),c.Ob()}if(2&e){const e=t.$implicit;c.zb(1),c.uc(" ",e.title," ")}}function h(e,t){1&e&&(c.Pb(0,"div"),c.sc(1," Contains valuables. "),c.Ob())}function u(e,t){1&e&&(c.Pb(0,"div"),c.sc(1," Contains breedables. "),c.Ob())}function l(e,t){if(1&e){const e=c.Qb();c.Nb(0),c.Pb(1,"div",2),c.sc(2),c.Ob(),c.qc(3,h,2,0,"div",13),c.qc(4,u,2,0,"div",13),c.Pb(5,"div",14),c.Pb(6,"button",15),c.Vb("click",(function(){c.kc(e);const t=c.Xb().$implicit;return c.Xb(2).saveSpreadsheet(t)})),c.sc(7,"Save as current spreadsheet"),c.Ob(),c.Ob(),c.Mb()}if(2&e){const e=c.Xb().$implicit;c.zb(2),c.tc(e.title),c.zb(1),c.dc("ngIf",e.hasValuables),c.zb(1),c.dc("ngIf",e.hasBreedables)}}function p(e,t){if(1&e&&(c.Nb(0),c.qc(1,l,8,3,"ng-container",13),c.Mb()),2&e){const e=t.$implicit;c.zb(1),c.dc("ngIf",e)}}function f(e,t){if(1&e&&(c.Nb(0),c.qc(1,p,2,1,"ng-container",12),c.Mb()),2&e){const e=c.Xb(),t=c.jc(17),s=c.jc(19);c.zb(1),c.dc("ngxSubscribeOf",e.loadedSpreadsheet$)("ngxSubscribeBeforeAny",t)("ngxSubscribeOnError",s)}}function g(e,t){1&e&&(c.Pb(0,"app-ball-guy-bubble"),c.sc(1," Enter a spreadsheet Id to load a spreadsheet "),c.Ob())}function m(e,t){1&e&&(c.Pb(0,"div"),c.sc(1," Load spreadsheet "),c.Ob())}function v(e,t){if(1&e&&c.qc(0,m,2,0,"div",13),2&e){const e=c.Xb();c.dc("ngIf",e.hasRequested)}}function y(e,t){1&e&&c.sc(0),2&e&&c.uc("Error: ",t.error.message,"")}const w=[{path:"",component:(()=>{class e{constructor(e){this.spreadsheetFacade=e,this.classes="view",this.hasRequested=!1,this.searchForm=new i.e({search:new i.b("")}),this.isLoading$=this.spreadsheetFacade.isLoading$(),this.spreadsheetHistory$=this.spreadsheetFacade.getSpreadsheetHistory$()}submitSearch(){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value)}saveSpreadsheet(e){this.spreadsheetFacade.updateCurrentSpreadsheet(e)}fromHistory(e){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.loadSpreadsheet(e)}trackBy(e,t){return t.id}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(a.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Bb(t.classes)},decls:20,vars:7,consts:[[1,"view-header","full-width"],[1,"view-sidebar"],[1,"view-subheader"],[3,"formGroup","submit"],["id","search","formControlName","search","placeholder","Look up spreadsheet by id"],["class","history-entry",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"view-content"],[4,"ngIf","ngIfElse"],["notRequestedYet",""],["pendingTemplate",""],["errorTemplate",""],[1,"history-entry",3,"click"],[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny","ngxSubscribeOnError"],[4,"ngIf"],[1,"button-row"],[1,"save-button",3,"click"]],template:function(e,t){if(1&e&&(c.Pb(0,"header",0),c.sc(1,"Change spreadsheet"),c.Ob(),c.Pb(2,"aside",1),c.Pb(3,"div",2),c.sc(4,"Spreadsheet search"),c.Ob(),c.Pb(5,"form",3),c.Vb("submit",(function(){return t.submitSearch()})),c.Lb(6,"input",4),c.Ob(),c.Pb(7,"div",2),c.sc(8," search history "),c.Ob(),c.Pb(9,"ul"),c.qc(10,b,2,1,"li",5),c.Yb(11,"async"),c.Ob(),c.Ob(),c.Pb(12,"div",6),c.qc(13,f,2,3,"ng-container",7),c.Ob(),c.qc(14,g,2,0,"ng-template",null,8,c.rc),c.qc(16,v,1,1,"ng-template",null,9,c.rc),c.qc(18,y,1,1,"ng-template",null,10,c.rc)),2&e){const e=c.jc(15);c.zb(5),c.dc("formGroup",t.searchForm),c.zb(5),c.dc("ngForOf",c.Zb(11,5,t.spreadsheetHistory$))("ngForTrackBy",t.trackBy),c.zb(3),c.dc("ngIf",t.loadedSpreadsheet$)("ngIfElse",e)}},directives:[i.m,i.j,i.f,i.a,i.i,i.d,r.k,r.l,o.e,d.a],pipes:[r.b],styles:["#search,.history-entry,.save-button{font-size:90%;font-weight:700;letter-spacing:-1px;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);align-items:center;width:100%;overflow:hidden;border:none;outline:none;padding:0 8px;background:#fff}.history-entry{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:16px}.save-button{width:auto}"],encapsulation:2}),e})()}];let S=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(w)],n.f]}),e})();var O=s("PCNd");let P=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[r.c,S,i.l,o.d,O.a]]}),e})()}}]);