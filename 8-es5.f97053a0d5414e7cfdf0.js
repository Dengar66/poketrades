!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{f8ci:function(t,i,a){"use strict";a.r(i),a.d(i,"BreedableModule",(function(){return ie}));var c=a("ofXK"),o=a("tyNb"),s=a("3Pt+"),l=a("fXoL"),u=a("d3iT"),b=a("1Has"),d=a("hLpi");function f(e,t){if(1&e&&(l.Pb(0,"span",4),l.tc(1),l.Ob()),2&e){var n=l.Xb();l.zb(1),l.uc(n.icon)}}var p,g=["*"],h=((p=function(){function e(){n(this,e),this.displayFlex=!0,this.checked=!1,this.propagateChange=function(e){},this.controlID="pktrds-checkbox-"+e.idCounter++}return r(e,[{key:"writeValue",value:function(e){this.checked=!!e}},{key:"registerOnChange",value:function(e){this.propagateChange=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"onChange",value:function(e){this.checked=e.target.checked,this.propagateChange(this.checked)}}]),e}()).idCounter=0,p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=l.Eb({type:p,selectors:[["app-checkbox"]],hostVars:2,hostBindings:function(e,t){2&e&&l.Cb("d-flex",t.displayFlex)},inputs:{icon:"icon"},features:[l.yb([{provide:s.g,useExisting:Object(l.T)((function(){return p})),multi:!0}])],ngContentSelectors:g,decls:5,vars:3,consts:[[1,"inacitve-hider"],["type","checkbox",3,"id","checked","change"],["class","material-icons",4,"ngIf"],[1,"label"],[1,"material-icons"]],template:function(e,t){1&e&&(l.cc(),l.Pb(0,"label",0),l.Pb(1,"input",1),l.Vb("change",(function(e){return t.onChange(e)})),l.Ob(),l.rc(2,f,2,1,"span",2),l.Pb(3,"span",3),l.bc(4),l.Ob(),l.Ob()),2&e&&(l.zb(1),l.ec("id",t.controlID),l.dc("checked",t.checked),l.zb(1),l.dc("ngIf",t.icon))},directives:[c.l],styles:[".inacitve-hider{-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#fff;color:#000;box-shadow:0 0 6px #000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:27px;cursor:pointer;display:inline-flex;align-items:center}.inacitve-hider input{display:none}.inacitve-hider .material-icons{padding:3px}.inacitve-hider .label{display:inline-flex;align-items:center;padding:3px;width:130px;height:30px}.inacitve-hider input:checked~.label,.inacitve-hider input:checked~.material-icons{background:#313330;color:#fff}"],encapsulation:2}),p),v=a("pEm8"),y=a("EAs/"),m=a("8I9x"),k=function(e,t){return[e,"breedables",t]};function w(e,t){if(1&e&&(l.Pb(0,"app-sub-navi-item",11),l.Yb(1,"slugify"),l.Lb(2,"app-item",9),l.Yb(3,"slugify"),l.Ob()),2&e){var n=t.$implicit,i=l.Xb(2);l.dc("link",l.hc(8,k,"/"+i.spreadsheetId,l.Zb(1,4,n.title)))("text",n.title)("meta",n.ownedEntries+"/"+(n.data?n.data.length:"???")),l.zb(2),l.dc("slug",l.Zb(3,6,n.title))}}var O=function(e){return[e,"breedables","overview"]};function x(e,t){if(1&e&&(l.Pb(0,"ul",7),l.Pb(1,"app-sub-navi-item",8),l.Lb(2,"app-item",9),l.Ob(),l.rc(3,w,4,11,"app-sub-navi-item",10),l.Ob()),2&e){var n=l.Xb();l.zb(1),l.dc("link",l.gc(4,O,"/"+n.spreadsheetId))("text","Overview"),l.zb(1),l.dc("slug","master"),l.zb(1),l.dc("ngForOf",n.worksheets)}}var I,C,P=((I=function(){function e(t,i){n(this,e),this.spreadsheetFacade=t,this.gridService=i,this.isView=!0,this.toggleInactivesControl=new s.b(!1),this.spreadsheetData$=this.spreadsheetFacade.getCurrentSpreadsheet$()}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.spreadsheetData$.subscribe({next:function(t){e.spreadsheetId=t.username?"u/"+t.username:t.id,e.worksheets=t.worksheets.filter((function(e){var t;return"Breedables"===(null===(t=e.config)||void 0===t?void 0:t.type)}))}})}},{key:"changeGrid",value:function(e){this.gridService.updateGridAppearance(e)}},{key:"changeGridInactives",value:function(){this.gridService.updateHideItems(this.toggleInactivesControl.value)}}]),e}()).\u0275fac=function(e){return new(e||I)(l.Kb(u.a),l.Kb(b.a))},I.\u0275cmp=l.Eb({type:I,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&l.Cb("view",t.isView)},decls:10,vars:4,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"m-right-gap",3,"selectionChanged"],[3,"formControl","icon","change"],[1,"view-sidebar"],["class","sub-navi",4,"ngIf"],[1,"view-content"],[1,"sub-navi"],[3,"link","text"],["category","ball",3,"slug"],[3,"link","text","meta",4,"ngFor","ngForOf"],[3,"link","text","meta"]],template:function(e,t){1&e&&(l.Pb(0,"header",0),l.tc(1,"breedables"),l.Ob(),l.Pb(2,"div",1),l.Pb(3,"app-changer",2),l.Vb("selectionChanged",(function(e){return t.changeGrid(e)})),l.Ob(),l.Pb(4,"app-checkbox",3),l.Vb("change",(function(){return t.changeGridInactives()})),l.tc(5),l.Ob(),l.Ob(),l.Pb(6,"aside",4),l.rc(7,x,4,6,"ul",5),l.Ob(),l.Pb(8,"div",6),l.Lb(9,"router-outlet"),l.Ob()),2&e&&(l.zb(4),l.dc("formControl",t.toggleInactivesControl)("icon",t.toggleInactivesControl.value?"visibility_off":"visibility"),l.zb(1),l.vc(" ",t.toggleInactivesControl.value?"Unowned hidden":"Unowned visible"," "),l.zb(2),l.dc("ngIf",t.worksheets))},directives:[d.a,h,s.i,s.c,c.l,o.g,v.a,y.a,c.k],pipes:[m.a],styles:["@media screen and (max-width:720px){.view-header[_ngcontent-%COMP%]{order:1}.view-addional-content[_ngcontent-%COMP%]{order:3}.view-sidebar[_ngcontent-%COMP%]{order:2}.view-content[_ngcontent-%COMP%]{order:4}}"]}),I),z=a("vkgz"),$=a("eIep"),F=a("XJ2P"),S=a("Ludi"),A=a("zttm"),X=a("cHJA"),B=((C=function(){function e(){n(this,e)}return r(e,[{key:"transform",value:function(e){return new X.a(e)}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275pipe=l.Jb({name:"castBreedable",type:C,pure:!0}),C);function j(e,t){if(1&e&&(l.Nb(0),l.Lb(1,"app-grid-item",4),l.Yb(2,"castBreedable"),l.Mb()),2&e){var n=t.$implicit;l.zb(1),l.dc("pokemon",l.Zb(2,1,n))}}function M(e,t){if(1&e&&(l.Pb(0,"app-grid",2),l.rc(1,j,3,3,"ng-container",3),l.Ob()),2&e){var n=l.Xb().ngxAlias,i=l.Xb().ngxAlias,r=l.Xb();l.dc("appearance",i)("hideInactiveItems",!!n),l.zb(1),l.dc("ngForOf",null==r.worksheet?null:r.worksheet.data)("ngForTrackBy",r.trackBy)}}function E(e,t){if(1&e&&(l.Nb(0),l.rc(1,M,2,4,"app-grid",1),l.Mb()),2&e){var n=l.Xb(2);l.zb(1),l.dc("ngIf",n.worksheet)}}function L(e,t){if(1&e&&(l.Nb(0),l.rc(1,E,2,1,"ng-container",0),l.Yb(2,"async"),l.Mb()),2&e){var n=l.Xb();l.zb(1),l.dc("ngxAlias",l.Zb(2,1,n.hideItems$))}}var T,K=((T=function(){function t(e,i,r,a){n(this,t),this.spreadsheetFacade=e,this.route=i,this.slugifyPipe=r,this.gridService=a,this.subscriptions=[],this.gridAppearance$=this.gridService.getGridAppearance$(),this.hideItems$=this.gridService.getHideItems$()}return r(t,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe(Object(z.a)((function(t){var n;return e.worksheetTitle=null!==(n=t.get("worksheetTitle"))&&void 0!==n?n:""})),Object($.a)((function(){return e.spreadsheetFacade.getCurrentSpreadsheet$()}))).subscribe({next:function(t){var n;e.worksheet=null===(n=t.worksheets.filter((function(t){return e.slugifyPipe.transform(t.title)===e.worksheetTitle})))||void 0===n?void 0:n[0]}})}},{key:"trackBy",value:function(e,t){return t.id}},{key:"ngOnDestroy",value:function(){var t,n=e(this.subscriptions);try{for(n.s();!(t=n.n()).done;)t.value.unsubscribe()}catch(i){n.e(i)}finally{n.f()}}}]),t}()).\u0275fac=function(e){return new(e||T)(l.Kb(u.a),l.Kb(o.a),l.Kb(m.a),l.Kb(b.a))},T.\u0275cmp=l.Eb({type:T,selectors:[["app-ball"]],decls:2,vars:3,consts:[[4,"ngxAlias"],[3,"appearance","hideInactiveItems",4,"ngIf"],[3,"appearance","hideInactiveItems"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"]],template:function(e,t){1&e&&(l.rc(0,L,3,3,"ng-container",0),l.Yb(1,"async")),2&e&&l.dc("ngxAlias",l.Zb(1,1,t.gridAppearance$))},directives:[F.a,c.l,S.a,c.k,A.a],pipes:[c.b,B],styles:[""]}),T),Z=a("itXk"),Y=a("LRne"),N=a("wBCF"),V=a("DtKQ");function D(e,t){if(1&e&&(l.Nb(0),l.Pb(1,"div",9),l.Yb(2,"slugify"),l.Lb(3,"app-item",10),l.Yb(4,"slugify"),l.Ob(),l.Mb()),2&e){var n=t.$implicit,i=l.Xb().$implicit,r=l.Xb(2).$implicit;l.zb(1),l.Cb("active",null==r.entries[n.key][l.Zb(2,5,i.pokemon)]?null:r.entries[n.key][l.Zb(2,5,i.pokemon)].isOwned)("illegal",null===i[n.key]),l.zb(2),l.dc("slug",l.Zb(4,7,n.key))}}function G(e,t){if(1&e&&(l.Pb(0,"div",5),l.Pb(1,"div",6),l.Lb(2,"app-pokemon",7),l.Yb(3,"slugify"),l.tc(4),l.Ob(),l.rc(5,D,5,9,"ng-container",8),l.Yb(6,"keyvalue"),l.Ob()),2&e){var n=t.$implicit,i=l.Xb(2).$implicit;l.zb(2),l.dc("slug",l.Zb(3,3,n.pokemon)),l.zb(2),l.vc(" ",n.pokemon,""),l.zb(1),l.dc("ngForOf",l.Zb(6,5,i.entries))}}function H(e,t){if(1&e&&(l.Nb(0),l.rc(1,G,7,7,"div",4),l.Mb()),2&e){var n=l.Xb().$implicit;l.zb(1),l.dc("ngForOf",n.legality)}}function J(e,t){if(1&e&&(l.Nb(0),l.Pb(1,"div",2),l.rc(2,H,2,1,"ng-container",3),l.Ob(),l.Mb()),2&e){var n=t.$implicit;l.zb(2),l.dc("ngIf",n)}}function _(e,t){1&e&&l.tc(0,"Loading")}var U,Q,R,q=[{path:"",component:P,children:[{path:"overview",component:(U=function(){function e(t,i){n(this,e),this.facade=t,this.db=i,this.data$=Object(Z.a)([this.db.getBreedableLegality(),this.facade.getCurrentSpreadsheet$()]).pipe(Object($.a)((function(e){var t;return Object(Y.a)({legality:e[0],entries:null!==(t=e[1].overviewEntries)&&void 0!==t?t:{}})})))}return r(e,[{key:"ngOnInit",value:function(){}}]),e}(),U.\u0275fac=function(e){return new(e||U)(l.Kb(u.a),l.Kb(N.a))},U.\u0275cmp=l.Eb({type:U,selectors:[["app-overview"]],decls:3,vars:2,consts:[[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny"],["loading",""],[1,"legality-table"],[4,"ngIf"],["class","legality-row d-flex",4,"ngFor","ngForOf"],[1,"legality-row","d-flex"],[1,"name","d-flex"],[3,"slug"],[4,"ngFor","ngForOf"],[1,"ball-col"],["category","ball",3,"slug"]],template:function(e,t){if(1&e&&(l.rc(0,J,3,1,"ng-container",0),l.rc(1,_,1,0,"ng-template",null,1,l.sc)),2&e){var n=l.jc(2);l.dc("ngxSubscribeOf",t.data$)("ngxSubscribeBeforeAny",n)}},directives:[F.f,c.l,c.k,V.a,y.a],pipes:[m.a,c.f],styles:[".legality-row{align-items:center;padding-right:10px;border-radius:5px;margin:8px 0}.legality-row .name{width:300px;align-items:center}.legality-row:nth-child(2n){background:#efefef}.legality-table{background:#fff;border-radius:12px;display:inline-block;padding:15px}.legality-table .ball-col .pokesprite{filter:grayscale(1) opacity(.3)}.legality-table .ball-col.active .pokesprite{filter:none}.legality-table .ball-col.illegal .pokesprite{filter:brightness(0) opacity(.3)}"],encapsulation:2}),U)},{path:":worksheetTitle",component:K}]}],W=((Q=function e(){n(this,e)}).\u0275mod=l.Ib({type:Q}),Q.\u0275inj=l.Hb({factory:function(e){return new(e||Q)},imports:[[o.f.forChild(q)],o.f]}),Q),ee=a("PCNd"),te=a("21aE"),ne=a("C7wK"),ie=((R=function e(){n(this,e)}).\u0275mod=l.Ib({type:R}),R.\u0275inj=l.Hb({factory:function(e){return new(e||R)},providers:[m.a],imports:[[c.c,W,ee.a,te.a,F.e,s.l,ne.a]]}),R)}}])}();