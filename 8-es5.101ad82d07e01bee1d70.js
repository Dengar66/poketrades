!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==i.return||i.return()}finally{if(l)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{f8ci:function(t,i,a){"use strict";a.r(i),a.d(i,"BreedableModule",function(){return ee});var o=a("ofXK"),c=a("tyNb"),l=a("fXoL"),s=a("d3iT"),u=a("NtUI"),b=a("pEm8"),p=a("EAs/"),f=a("8I9x"),d=function(e,t){return[e,"breedables",t]};function g(e,t){if(1&e&&(l.Pb(0,"app-sub-navi-item",9),l.Zb(1,"slugify"),l.Lb(2,"app-item",7),l.Zb(3,"slugify"),l.Ob()),2&e){var n=t.$implicit,i=l.Yb(2);l.ec("link",l.ic(8,d,"/"+i.spreadsheetId,l.ac(1,4,n.title)))("text",n.title)("meta",n.ownedEntries+"/"+(n.data?n.data.length:"???")),l.zb(2),l.ec("slug",l.ac(3,6,n.title))}}var v=function(e){return[e,"breedables","overview"]};function h(e,t){if(1&e&&(l.Pb(0,"ul",5),l.Pb(1,"app-sub-navi-item",6),l.Lb(2,"app-item",7),l.Ob(),l.tc(3,g,4,11,"app-sub-navi-item",8),l.Ob()),2&e){var n=l.Yb();l.zb(1),l.ec("link",l.hc(4,v,"/"+n.spreadsheetId))("text","Overview"),l.zb(1),l.ec("slug","master"),l.zb(1),l.ec("ngForOf",n.worksheets)}}var y,m,w=((y=function(){function e(t){n(this,e),this.spreadsheetFacade=t,this.isView=!0,this.spreadsheetData$=this.spreadsheetFacade.getCurrentSpreadsheet$()}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.spreadsheetData$.subscribe({next:function(t){e.spreadsheetId=t.username?"u/"+t.username:t.id,e.worksheets=t.worksheets.filter(function(e){var t;return"Breedables"===(null===(t=e.config)||void 0===t?void 0:t.type)})}})}}]),e}()).\u0275fac=function(e){return new(e||y)(l.Kb(s.a))},y.\u0275cmp=l.Eb({type:y,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&l.Cb("view",t.isView)},decls:8,vars:1,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],["class","sub-navi",4,"ngIf"],[1,"view-content"],[1,"sub-navi"],[3,"link","text"],["category","ball",3,"slug"],[3,"link","text","meta",4,"ngFor","ngForOf"],[3,"link","text","meta"]],template:function(e,t){1&e&&(l.Pb(0,"header",0),l.vc(1,"breedables"),l.Ob(),l.Pb(2,"div",1),l.Lb(3,"app-grid-controller"),l.Ob(),l.Pb(4,"aside",2),l.tc(5,h,4,6,"ul",3),l.Ob(),l.Pb(6,"div",4),l.Lb(7,"router-outlet"),l.Ob()),2&e&&(l.zb(5),l.ec("ngIf",t.worksheets))},directives:[u.a,o.l,c.g,b.a,p.a,o.k],pipes:[f.a],styles:["@media screen and (max-width:720px){.view-header[_ngcontent-%COMP%]{order:1}.view-addional-content[_ngcontent-%COMP%]{order:3}.view-sidebar[_ngcontent-%COMP%]{order:2}.view-content[_ngcontent-%COMP%]{order:4}}"]}),y),k=a("vkgz"),O=a("eIep"),x=a("1Has"),I=a("XJ2P"),S=a("Ludi"),$=a("zttm"),P=a("cHJA"),A=((m=function(){function e(){n(this,e)}return r(e,[{key:"transform",value:function(e){return new P.a(e)}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275pipe=l.Jb({name:"castBreedable",type:m,pure:!0}),m);function C(e,t){if(1&e&&(l.Nb(0),l.Lb(1,"app-grid-item",4),l.Zb(2,"castBreedable"),l.Mb()),2&e){var n=t.$implicit;l.zb(1),l.ec("pokemon",l.ac(2,1,n))}}function F(e,t){if(1&e&&(l.Pb(0,"app-grid",2),l.tc(1,C,3,3,"ng-container",3),l.Ob()),2&e){var n=l.Yb().ngxAlias,i=l.Yb().ngxAlias,r=l.Yb();l.ec("appearance",i)("hideInactiveItems",!!n),l.zb(1),l.ec("ngForOf",null==r.worksheet?null:r.worksheet.data)("ngForTrackBy",r.trackBy)}}function z(e,t){if(1&e&&(l.Nb(0),l.tc(1,F,2,4,"app-grid",1),l.Mb()),2&e){var n=l.Yb(2);l.zb(1),l.ec("ngIf",n.worksheet)}}function B(e,t){if(1&e&&(l.Nb(0),l.tc(1,z,2,1,"ng-container",0),l.Zb(2,"async"),l.Mb()),2&e){var n=l.Yb();l.zb(1),l.ec("ngxAlias",l.ac(2,1,n.hideItems$))}}var M,L=((M=function(){function t(e,i,r,a){n(this,t),this.spreadsheetFacade=e,this.route=i,this.slugifyPipe=r,this.gridService=a,this.subscriptions=[],this.gridService.updateHideAppearanceControl(!1),this.gridService.updateHideInactiveItemsControl(!1),this.gridAppearance$=this.gridService.getGridAppearance$(),this.hideItems$=this.gridService.getHideItems$()}return r(t,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.pipe(Object(k.a)(function(t){var n;return e.worksheetTitle=null!==(n=t.get("worksheetTitle"))&&void 0!==n?n:""}),Object(O.a)(function(){return e.spreadsheetFacade.getCurrentSpreadsheet$()})).subscribe({next:function(t){var n;e.worksheet=null===(n=t.worksheets.filter(function(t){return e.slugifyPipe.transform(t.title)===e.worksheetTitle}))||void 0===n?void 0:n[0]}})}},{key:"trackBy",value:function(e,t){return t.id}},{key:"ngOnDestroy",value:function(){var t,n=e(this.subscriptions);try{for(n.s();!(t=n.n()).done;)t.value.unsubscribe()}catch(i){n.e(i)}finally{n.f()}}}]),t}()).\u0275fac=function(e){return new(e||M)(l.Kb(s.a),l.Kb(c.a),l.Kb(f.a),l.Kb(x.a))},M.\u0275cmp=l.Eb({type:M,selectors:[["app-ball"]],decls:2,vars:3,consts:[[4,"ngxAlias"],[3,"appearance","hideInactiveItems",4,"ngIf"],[3,"appearance","hideInactiveItems"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"]],template:function(e,t){1&e&&(l.tc(0,B,3,3,"ng-container",0),l.Zb(1,"async")),2&e&&l.ec("ngxAlias",l.ac(1,1,t.gridAppearance$))},directives:[I.a,o.l,S.a,o.k,$.a],pipes:[o.b,A],styles:[""]}),M),j=a("itXk"),E=a("LRne"),K=a("wBCF"),Y=a("DtKQ"),T=a("o4oE");function H(e,t){if(1&e&&(l.Nb(0),l.Pb(1,"div",9),l.Zb(2,"slugify"),l.Lb(3,"app-item",10),l.Zb(4,"slugify"),l.Ob(),l.Mb()),2&e){var n=t.$implicit,i=l.Yb().$implicit,r=l.Yb(2).$implicit;l.zb(1),l.Cb("active",null==r.entries[n.key][l.ac(2,5,i.pokemon)]?null:r.entries[n.key][l.ac(2,5,i.pokemon)].isOwned)("illegal",null===i[n.key]),l.zb(2),l.ec("slug",l.ac(4,7,n.key))}}function N(e,t){if(1&e&&(l.Pb(0,"div",5),l.Pb(1,"div",6),l.Lb(2,"app-pokemon",7),l.Zb(3,"nameToSlug"),l.vc(4),l.Ob(),l.tc(5,H,5,9,"ng-container",8),l.Zb(6,"keyvalue"),l.Ob()),2&e){var n=t.$implicit,i=l.Yb(2).$implicit;l.zb(2),l.ec("slug",l.ac(3,3,n.pokemon)),l.zb(2),l.xc(" ",n.pokemon,""),l.zb(1),l.ec("ngForOf",l.ac(6,5,i.entries))}}function Z(e,t){if(1&e&&(l.Nb(0),l.tc(1,N,7,7,"div",4),l.Mb()),2&e){var n=l.Yb().$implicit;l.zb(1),l.ec("ngForOf",n.legality)}}function J(e,t){if(1&e&&(l.Nb(0),l.Pb(1,"div",2),l.tc(2,Z,2,1,"ng-container",3),l.Ob(),l.Mb()),2&e){var n=t.$implicit;l.zb(2),l.ec("ngIf",n)}}function D(e,t){1&e&&l.vc(0,"Loading")}var X,_,V,U=[{path:"",component:w,children:[{path:"overview",component:(X=function(){function e(t,i,r){n(this,e),this.facade=t,this.db=i,this.gridService=r,this.gridService.updateHideAppearanceControl(!0),this.gridService.updateHideInactiveItemsControl(!0),this.data$=Object(j.b)([this.db.getBreedableLegality(),this.facade.getCurrentSpreadsheet$()]).pipe(Object(O.a)(function(e){var t;return Object(E.a)({legality:e[0],entries:null!==(t=e[1].overviewEntries)&&void 0!==t?t:{}})}))}return r(e,[{key:"ngOnInit",value:function(){}}]),e}(),X.\u0275fac=function(e){return new(e||X)(l.Kb(s.a),l.Kb(K.a),l.Kb(x.a))},X.\u0275cmp=l.Eb({type:X,selectors:[["app-overview"]],decls:3,vars:2,consts:[[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny"],["loading",""],[1,"legality-table"],[4,"ngIf"],["class","legality-row d-flex",4,"ngFor","ngForOf"],[1,"legality-row","d-flex"],[1,"name","d-flex"],[3,"slug"],[4,"ngFor","ngForOf"],[1,"ball-col"],["category","ball",3,"slug"]],template:function(e,t){if(1&e&&(l.tc(0,J,3,1,"ng-container",0),l.tc(1,D,1,0,"ng-template",null,1,l.uc)),2&e){var n=l.kc(2);l.ec("ngxSubscribeOf",t.data$)("ngxSubscribeBeforeAny",n)}},directives:[I.f,o.l,o.k,Y.a,p.a],pipes:[T.a,o.f,f.a],styles:[".legality-row{align-items:center;padding-right:10px;border-radius:5px;margin:8px 0}.legality-row .name{width:300px;align-items:center}.legality-row:nth-child(2n){background:#efefef}.legality-table{background:#fff;border-radius:12px;display:inline-block;padding:15px}.legality-table .ball-col .pokesprite{filter:grayscale(1) opacity(.3)}.legality-table .ball-col.active .pokesprite{filter:none}.legality-table .ball-col.illegal .pokesprite{filter:brightness(0) opacity(.3)}@media (prefers-color-scheme:dark){.legality-table{color:hsla(0,0%,100%,.8);background:#212121}.legality-row:nth-child(2n){background:#2f3232}}@media screen and (max-width:720px){.legality-row{flex-wrap:wrap}.legality-row .name{width:100%}}"],encapsulation:2}),X)},{path:":worksheetTitle",component:L}]}],G=((_=function e(){n(this,e)}).\u0275mod=l.Ib({type:_}),_.\u0275inj=l.Hb({factory:function(e){return new(e||_)},imports:[[c.f.forChild(U)],c.f]}),_),Q=a("PCNd"),R=a("21aE"),q=a("3Pt+"),W=a("C7wK"),ee=((V=function e(){n(this,e)}).\u0275mod=l.Ib({type:V}),V.\u0275inj=l.Hb({factory:function(e){return new(e||V)},providers:[f.a],imports:[[o.c,G,Q.a,R.a,I.e,q.l,W.a]]}),V)}}])}();