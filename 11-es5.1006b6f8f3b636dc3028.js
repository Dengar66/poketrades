!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Bq4Z:function(r,n,i){"use strict";i.r(n),i.d(n,"SpreadsheetChangerModule",function(){return B});var a=i("ofXK"),s=i("tyNb"),o=i("3Pt+"),c=i("fXoL"),b=i("d3iT"),d=i("XJ2P"),l=i("NQo5"),u=i("4Kj8");function h(e,t){if(1&e){var r=c.Rb();c.Qb(0,"li",11),c.Xb("click",function(){c.oc(r);var e=t.$implicit;return c.Zb().fromHistory(e.id)}),c.wc(1),c.Pb()}if(2&e){var n=t.$implicit;c.zb(1),c.yc(" ",n.title," ")}}function f(e,t){1&e&&(c.Qb(0,"div",18),c.Qb(1,"div",19),c.wc(2,"Contains valuables!"),c.Pb(),c.Qb(3,"div",20),c.wc(4,"Valuables are Pok\xe9mon with a certain rarity. Event, shiny, competitive, legendary Pok\xe9mon and others. "),c.Pb(),c.Pb())}function p(e,t){1&e&&(c.Qb(0,"div",18),c.Qb(1,"div",19),c.wc(2,"Contains breedables!"),c.Pb(),c.Qb(3,"div",20),c.wc(4,"Breedables are Pok\xe9mon, which can be bred or are a result of breeding. They are usually collected in different kind of balls like Bulbasaur in a Friend Ball. "),c.Pb(),c.Pb())}function v(e,t){if(1&e){var r=c.Rb();c.Ob(0),c.Qb(1,"div",2),c.wc(2),c.Pb(),c.Mb(3,"div",14),c.uc(4,f,5,0,"div",15),c.uc(5,p,5,0,"div",15),c.Qb(6,"div",16),c.Qb(7,"button",17),c.Xb("click",function(){c.oc(r);var e=c.Zb().$implicit;return c.Zb(2).saveSpreadsheet(e)}),c.wc(8,"Save as current spreadsheet"),c.Pb(),c.Pb(),c.Nb()}if(2&e){var n=c.Zb().$implicit;c.zb(2),c.xc(n.title),c.zb(2),c.fc("ngIf",n.hasValuables),c.zb(1),c.fc("ngIf",n.hasBreedables)}}function g(e,t){if(1&e&&(c.Ob(0),c.uc(1,v,9,3,"ng-container",13),c.Nb()),2&e){var r=t.$implicit;c.zb(1),c.fc("ngIf",r)}}function w(e,t){if(1&e&&(c.Ob(0),c.uc(1,g,2,1,"ng-container",12),c.Nb()),2&e){var r=c.Zb(),n=c.lc(17),i=c.lc(19);c.zb(1),c.fc("ngxSubscribeOf",r.loadedSpreadsheet$)("ngxSubscribeBeforeAny",n)("ngxSubscribeOnError",i)}}function m(e,t){1&e&&(c.Qb(0,"app-ball-guy-bubble"),c.Qb(1,"div"),c.wc(2,"Enter a spreadsheet ID to load a spreadsheet."),c.Pb(),c.Qb(3,"div"),c.wc(4,"Make sure the spreadsheet with that given ID is published to web and made from the template!"),c.Pb(),c.Qb(5,"div"),c.wc(6,"Currently no other spreadsheet template it supported."),c.Pb(),c.Pb())}function y(e,t){1&e&&(c.Qb(0,"div"),c.Mb(1,"app-spinner",21),c.Qb(2,"div",22),c.wc(3,"Load spreadsheet"),c.Pb(),c.Pb())}function P(e,t){if(1&e&&c.uc(0,y,4,0,"div",13),2&e){var r=c.Zb();c.fc("ngIf",r.hasRequested)}}function k(e,t){1&e&&c.wc(0),2&e&&c.yc("Error: ",t.error.message,"")}var x,Q,S,F=[{path:"",component:(x=function(){function r(t){e(this,r),this.spreadsheetFacade=t,this.classes="view spreadsheet-changer-view",this.hasRequested=!1,this.searchForm=new o.e({search:new o.b("")}),this.isLoading$=this.spreadsheetFacade.isLoading$(),this.spreadsheetHistory$=this.spreadsheetFacade.getSpreadsheetHistory$()}var n,i,a;return n=r,(i=[{key:"submitSearch",value:function(){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.searchSpreadsheet(this.searchForm.controls.search.value)}},{key:"saveSpreadsheet",value:function(e){this.spreadsheetFacade.updateCurrentSpreadsheet(e)}},{key:"fromHistory",value:function(e){this.hasRequested=!0,this.loadedSpreadsheet$=this.spreadsheetFacade.loadSpreadsheet(e)}},{key:"trackBy",value:function(e,t){return t.id}}])&&t(n.prototype,i),a&&t(n,a),r}(),x.\u0275fac=function(e){return new(e||x)(c.Lb(b.a))},x.\u0275cmp=c.Fb({type:x,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Bb(t.classes)},decls:20,vars:7,consts:[[1,"view-header","full-width"],[1,"view-sidebar"],[1,"view-subheader"],[3,"formGroup","submit"],["id","search","formControlName","search","placeholder","Look up spreadsheet by id"],["class","history-entry",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"view-content"],[4,"ngIf","ngIfElse"],["notRequestedYet",""],["pendingTemplate",""],["errorTemplate",""],[1,"history-entry",3,"click"],[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny","ngxSubscribeOnError"],[4,"ngIf"],[1,""],["class","collection-infos",4,"ngIf"],[1,"button-row"],[1,"save-button",3,"click"],[1,"collection-infos"],[1,"title"],[1,"text"],[1,"centered-spinner"],[1,"t-align-center"]],template:function(e,t){if(1&e&&(c.Qb(0,"header",0),c.wc(1,"Change spreadsheet"),c.Pb(),c.Qb(2,"aside",1),c.Qb(3,"div",2),c.wc(4,"Spreadsheet search"),c.Pb(),c.Qb(5,"form",3),c.Xb("submit",function(){return t.submitSearch()}),c.Mb(6,"input",4),c.Pb(),c.Qb(7,"div",2),c.wc(8," search history "),c.Pb(),c.Qb(9,"ul"),c.uc(10,h,2,1,"li",5),c.ac(11,"async"),c.Pb(),c.Pb(),c.Qb(12,"div",6),c.uc(13,w,2,3,"ng-container",7),c.Pb(),c.uc(14,m,7,0,"ng-template",null,8,c.vc),c.uc(16,P,1,1,"ng-template",null,9,c.vc),c.uc(18,k,1,1,"ng-template",null,10,c.vc)),2&e){var r=c.lc(15);c.zb(5),c.fc("formGroup",t.searchForm),c.zb(5),c.fc("ngForOf",c.bc(11,5,t.spreadsheetHistory$))("ngForTrackBy",t.trackBy),c.zb(3),c.fc("ngIf",t.loadedSpreadsheet$)("ngIfElse",r)}},directives:[o.m,o.j,o.f,o.a,o.i,o.d,a.k,a.l,d.f,l.a,u.a],pipes:[a.b],styles:["#search,.history-entry,.save-button{font-size:90%;font-weight:500;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);align-items:center;width:100%;overflow:hidden;border:none;outline:none;padding:0 8px;background:#fff}.history-entry{cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-bottom:16px}.save-button{cursor:pointer;width:auto}.spreadsheet-changer-view .centered-spinner{margin:20px auto}.collection-infos{margin-top:16px}.collection-infos .title{font-size:18px}.collection-infos .text{margin:0 0 8px;line-height:1.4;color:rgba(0,0,0,.9)}@media (prefers-color-scheme:dark){#search,.history-entry,.save-button{background:#21262d;color:#efe2e3}.collection-infos .title{color:#efe2e3}.collection-infos .text{color:hsla(0,0%,100%,.7)}}@media screen and (max-width:720px){.spreadsheet-changer-view .view-sidebar{order:2}}"],encapsulation:2}),x)}],I=((Q=function t(){e(this,t)}).\u0275mod=c.Jb({type:Q}),Q.\u0275inj=c.Ib({factory:function(e){return new(e||Q)},imports:[[s.f.forChild(F)],s.f]}),Q),$=i("PCNd"),B=((S=function t(){e(this,t)}).\u0275mod=c.Jb({type:S}),S.\u0275inj=c.Ib({factory:function(e){return new(e||S)},imports:[[a.c,I,o.l,d.e,$.a]]}),S)}}])}();