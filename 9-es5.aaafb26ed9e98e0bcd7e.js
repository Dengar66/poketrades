!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Bq4Z:function(r,n,i){"use strict";i.r(n),i.d(n,"SpreadsheetChangerModule",(function(){return I}));var a=i("ofXK"),s=i("tyNb"),c=i("3Pt+"),o=i("fXoL"),b=i("d3iT"),d=i("XJ2P"),u=i("NQo5");function h(e,t){if(1&e){var r=o.Qb();o.Pb(0,"li",11),o.Vb("click",(function(){o.lc(r);var e=t.$implicit;return o.Xb().fromHistory(e.id)})),o.tc(1),o.Ob()}if(2&e){var n=t.$implicit;o.zb(1),o.vc(" ",n.title," ")}}function l(e,t){1&e&&(o.Pb(0,"div"),o.tc(1," Contains valuables. "),o.Ob())}function f(e,t){1&e&&(o.Pb(0,"div"),o.tc(1," Contains breedables. "),o.Ob())}function p(e,t){if(1&e){var r=o.Qb();o.Nb(0),o.Pb(1,"div",2),o.tc(2),o.Ob(),o.rc(3,l,2,0,"div",13),o.rc(4,f,2,0,"div",13),o.Pb(5,"div",14),o.Pb(6,"button",15),o.Vb("click",(function(){o.lc(r);var e=o.Xb().$implicit;return o.Xb(2).saveSpreadsheet(e)})),o.tc(7,"Save as current spreadsheet"),o.Ob(),o.Ob(),o.Mb()}if(2&e){var n=o.Xb().$implicit;o.zb(2),o.uc(n.title),o.zb(1),o.dc("ngIf",n.hasValuables),o.zb(1),o.dc("ngIf",n.hasBreedables)}}function v(e,t){if(1&e&&(o.Nb(0),o.rc(1,p,8,3,"ng-container",13),o.Mb()),2&e){var r=t.$implicit;o.zb(1),o.dc("ngIf",r)}}function g(e,t){if(1&e&&(o.Nb(0),o.rc(1,v,2,1,"ng-container",12),o.Mb()),2&e){var r=o.Xb(),n=o.jc(17),i=o.jc(19);o.zb(1),o.dc("ngxSubscribeOf",r.loadedSpreadsheet$)("ngxSubscribeBeforeAny",n)("ngxSubscribeOnError",i)}}function m(e,t){1&e&&(o.Pb(0,"app-ball-guy-bubble"),o.tc(1," Enter a spreadsheet Id to load a spreadsheet "),o.Ob())}function y(e,t){1&e&&(o.Pb(0,"div"),o.tc(1," Load spreadsheet "),o.Ob())}function w(e,t){if(1&e&&o.rc(0,y,2,0,"div",13),2&e){var r=o.Xb();o.dc("ngIf",r.hasRequested)}}function O(e,t){1&e&&o.tc(0),2&e&&o.vc("Error: ",t.error.message,"")}var S,k,P,x=[{path:"",component:(S=function(){function r(t){e(this,r),this.spreadsheetFacade=t,this.classes="view",this.hasRequested=!1,this.searchForm=new c.e({search:new c.b("")}),this.isLoading$=this.spreadsheetFacade.isLoading$(),this.spreadsheetHistory$=this.spreadsheetFacade.getSpreadsheetHistory$()}var n,i,a;return n=r,(i=[{key:"submitSearch",value:function(){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value)}},{key:"saveSpreadsheet",value:function(e){this.spreadsheetFacade.updateCurrentSpreadsheet(e)}},{key:"fromHistory",value:function(e){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.loadSpreadsheet(e)}},{key:"trackBy",value:function(e,t){return t.id}}])&&t(n.prototype,i),a&&t(n,a),r}(),S.\u0275fac=function(e){return new(e||S)(o.Kb(b.a))},S.\u0275cmp=o.Eb({type:S,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&o.Bb(t.classes)},decls:20,vars:7,consts:[[1,"view-header","full-width"],[1,"view-sidebar"],[1,"view-subheader"],[3,"formGroup","submit"],["id","search","formControlName","search","placeholder","Look up spreadsheet by id"],["class","history-entry",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"view-content"],[4,"ngIf","ngIfElse"],["notRequestedYet",""],["pendingTemplate",""],["errorTemplate",""],[1,"history-entry",3,"click"],[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny","ngxSubscribeOnError"],[4,"ngIf"],[1,"button-row"],[1,"save-button",3,"click"]],template:function(e,t){if(1&e&&(o.Pb(0,"header",0),o.tc(1,"Change spreadsheet"),o.Ob(),o.Pb(2,"aside",1),o.Pb(3,"div",2),o.tc(4,"Spreadsheet search"),o.Ob(),o.Pb(5,"form",3),o.Vb("submit",(function(){return t.submitSearch()})),o.Lb(6,"input",4),o.Ob(),o.Pb(7,"div",2),o.tc(8," search history "),o.Ob(),o.Pb(9,"ul"),o.rc(10,h,2,1,"li",5),o.Yb(11,"async"),o.Ob(),o.Ob(),o.Pb(12,"div",6),o.rc(13,g,2,3,"ng-container",7),o.Ob(),o.rc(14,m,2,0,"ng-template",null,8,o.sc),o.rc(16,w,1,1,"ng-template",null,9,o.sc),o.rc(18,O,1,1,"ng-template",null,10,o.sc)),2&e){var r=o.jc(15);o.zb(5),o.dc("formGroup",t.searchForm),o.zb(5),o.dc("ngForOf",o.Zb(11,5,t.spreadsheetHistory$))("ngForTrackBy",t.trackBy),o.zb(3),o.dc("ngIf",t.loadedSpreadsheet$)("ngIfElse",r)}},directives:[c.m,c.j,c.f,c.a,c.i,c.d,a.k,a.l,d.f,u.a],pipes:[a.b],styles:["#search,.history-entry,.save-button{font-size:90%;font-weight:700;letter-spacing:-1px;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);align-items:center;width:100%;overflow:hidden;border:none;outline:none;padding:0 8px;background:#fff}.history-entry{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:16px}.save-button{width:auto}"],encapsulation:2}),S)}],F=((k=function t(){e(this,t)}).\u0275mod=o.Ib({type:k}),k.\u0275inj=o.Hb({factory:function(e){return new(e||k)},imports:[[s.f.forChild(x)],s.f]}),k),$=i("PCNd"),I=((P=function t(){e(this,t)}).\u0275mod=o.Ib({type:P}),P.\u0275inj=o.Hb({factory:function(e){return new(e||P)},imports:[[a.c,F,c.l,d.e,$.a]]}),P)}}])}();