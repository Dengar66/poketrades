(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{f8ci:function(e,t,i){"use strict";i.r(t),i.d(t,"BreedableModule",(function(){return E}));var n=i("ofXK"),s=i("tyNb"),a=i("3Pt+"),c=i("fXoL"),r=i("d3iT"),o=i("1Has"),l=i("hLpi");function b(e,t){if(1&e&&(c.Nb(0,"span",4),c.mc(1),c.Mb()),2&e){const e=c.Wb();c.xb(1),c.nc(e.icon)}}const p=["*"];let d=(()=>{class e{constructor(){this.propagateChange=e=>{},this.controlID="pktrds-checkox-"+e.idCounter++}ngOnInit(){}writeValue(e){this.checked=!!e}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){this.onTouchedCallback=e}onChange(e){this.checked=e.target.checked,this.propagateChange(e.target.checked)}}return e.idCounter=0,e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["app-checkbox"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Ab("d-flex",!0)},inputs:{icon:"icon"},features:[c.wb([{provide:a.g,useExisting:Object(c.S)(()=>e),multi:!0}])],ngContentSelectors:p,decls:5,vars:3,consts:[[1,"inacitve-hider"],["type","checkbox",3,"id","checked","change"],["class","material-icons",4,"ngIf"],[1,"label"],[1,"material-icons"]],template:function(e,t){1&e&&(c.ac(),c.Nb(0,"label",0),c.Nb(1,"input",1),c.Ub("change",(function(e){return t.onChange(e)})),c.Mb(),c.kc(2,b,2,1,"span",2),c.Nb(3,"span",3),c.Zb(4),c.Mb(),c.Mb()),2&e&&(c.xb(1),c.cc("id",t.controlID),c.bc("checked",t.checked),c.xb(1),c.bc("ngIf",t.icon))},directives:[n.k],styles:[".inacitve-hider{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;color:#000;box-shadow:0 0 6px #000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:27px;cursor:pointer;display:inline-flex;align-items:center}.inacitve-hider input{display:none}.inacitve-hider .material-icons{padding:3px}.inacitve-hider .label{display:inline-flex;align-items:center;padding:3px;width:130px;height:30px}.inacitve-hider input:checked~.label,.inacitve-hider input:checked~.material-icons{background:#313330;color:#fff}"],encapsulation:2}),e})();var g=i("pEm8");let u=(()=>{class e{constructor(){this.pokesprite=!0}set slug(e){this.slugClass=e,this.classes=[this.slugClass,this.categoryClass].join(" ")}set category(e){this.categoryClass=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Cb({type:e,selectors:[["app-item"]],hostVars:4,hostBindings:function(e,t){2&e&&(c.zb(t.classes),c.Ab("pokesprite",t.pokesprite))},inputs:{slug:"slug",category:"category"},decls:0,vars:0,template:function(e,t){},encapsulation:2}),e})();var h=i("8I9x");const f=function(e,t){return[e,"breedables",t]};function v(e,t){if(1&e&&(c.Nb(0,"app-sub-navi-item",11),c.Xb(1,"slugify"),c.Jb(2,"app-item",9),c.Xb(3,"slugify"),c.Mb()),2&e){const e=t.$implicit,i=c.Wb(2);c.bc("link",c.ec(8,f,"/"+i.spreadsheetId,c.Yb(1,4,e.title)))("text",e.title)("meta",e.ownedEntries+"/"+e.data.length),c.xb(2),c.bc("slug",c.Yb(3,6,e.title))}}const k=function(e){return[e,"breedables","overview"]};function m(e,t){if(1&e&&(c.Nb(0,"ul",7),c.Nb(1,"app-sub-navi-item",8),c.Jb(2,"app-item",9),c.Mb(),c.kc(3,v,4,11,"app-sub-navi-item",10),c.Mb()),2&e){const e=c.Wb();c.xb(1),c.bc("link",c.dc(4,k,"/"+e.spreadsheetId))("text","Overview"),c.xb(1),c.bc("slug","master"),c.xb(1),c.bc("ngForOf",e.worksheets)}}let w=(()=>{class e{constructor(e,t){this.spreadsheetFacade=e,this.gridService=t,this.isView=!0}ngOnInit(){this.toggleInactivesControl=new a.b(!1),this.spreadsheetData$=this.spreadsheetFacade.getCurrentSpreadsheet$(),this.spreadsheetData$.subscribe({next:e=>{this.spreadsheetId=e.id,this.worksheets=e.worksheets.filter(e=>{var t;return"Breedables"===(null===(t=e.config)||void 0===t?void 0:t.type)})}})}changeGrid(e){this.gridService.updateGridAppearance(e)}changeGridInactives(){this.gridService.updateHideItems(this.toggleInactivesControl.value)}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(r.a),c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-index"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Ab("view",t.isView)},decls:10,vars:4,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"m-right-gap",3,"selectionChanged"],[3,"formControl","icon","change"],[1,"view-sidebar"],["class","sub-navi",4,"ngIf"],[1,"view-content"],[1,"sub-navi"],[3,"link","text"],["category","ball",3,"slug"],[3,"link","text","meta",4,"ngFor","ngForOf"],[3,"link","text","meta"]],template:function(e,t){1&e&&(c.Nb(0,"header",0),c.mc(1,"breedables"),c.Mb(),c.Nb(2,"div",1),c.Nb(3,"app-changer",2),c.Ub("selectionChanged",(function(e){return t.changeGrid(e)})),c.Mb(),c.Nb(4,"app-checkbox",3),c.Ub("change",(function(){return t.changeGridInactives()})),c.mc(5),c.Mb(),c.Mb(),c.Nb(6,"aside",4),c.kc(7,m,4,6,"ul",5),c.Mb(),c.Nb(8,"div",6),c.Jb(9,"router-outlet"),c.Mb()),2&e&&(c.xb(4),c.bc("formControl",t.toggleInactivesControl)("icon",t.toggleInactivesControl.value?"visibility_off":"visibility"),c.xb(1),c.oc(" ",t.toggleInactivesControl.value?"Unowned hidden":"Unowned visible"," "),c.xb(2),c.bc("ngIf",t.worksheets))},directives:[l.a,d,a.h,a.c,n.k,s.g,g.a,u,n.j],pipes:[h.a],styles:["@media screen and (max-width:720px){.view-header[_ngcontent-%COMP%]{order:1}.view-addional-content[_ngcontent-%COMP%]{order:3}.view-sidebar[_ngcontent-%COMP%]{order:2}.view-content[_ngcontent-%COMP%]{order:4}}"]}),e})();var y=i("vkgz"),x=i("eIep"),I=i("XJ2P"),C=i("Ludi"),O=i("zttm"),M=i("cHJA");let F=(()=>{class e{transform(e){return new M.a(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Hb({name:"castBreedable",type:e,pure:!0}),e})();function $(e,t){if(1&e&&(c.Lb(0),c.Jb(1,"app-grid-item",4),c.Xb(2,"castBreedable"),c.Kb()),2&e){const e=t.$implicit;c.xb(1),c.bc("pokemon",c.Yb(2,1,e))}}function N(e,t){if(1&e&&(c.Nb(0,"app-grid",2),c.kc(1,$,3,3,"ng-container",3),c.Mb()),2&e){const e=c.Wb().ngxAlias,t=c.Wb().ngxAlias,i=c.Wb();c.bc("appearance",t)("hideInactiveItems",e),c.xb(1),c.bc("ngForOf",null==i.worksheet?null:i.worksheet.data)("ngForTrackBy",i.trackBy)}}function A(e,t){if(1&e&&(c.Lb(0),c.kc(1,N,2,4,"app-grid",1),c.Kb()),2&e){const e=c.Wb(2);c.xb(1),c.bc("ngIf",e.worksheet)}}function S(e,t){if(1&e&&(c.Lb(0),c.kc(1,A,2,1,"ng-container",0),c.Xb(2,"async"),c.Kb()),2&e){const e=c.Wb();c.xb(1),c.bc("ngxAlias",c.Yb(2,1,e.hideItems$))}}let B=(()=>{class e{constructor(e,t,i,n){this.spreadsheetFacade=e,this.route=t,this.slugifyPipe=i,this.gridService=n,this.subscriptions=[]}ngOnInit(){this.gridAppearance$=this.gridService.getGridAppearance$(),this.hideItems$=this.gridService.getHideItems$(),this.route.paramMap.pipe(Object(y.a)(e=>this.worksheetTitle=e.get("worksheetTitle")),Object(x.a)(()=>this.spreadsheetFacade.getCurrentSpreadsheet$())).subscribe({next:e=>{var t;this.worksheet=null===(t=e.worksheets.filter(e=>this.slugifyPipe.transform(e.title)===this.worksheetTitle))||void 0===t?void 0:t[0]}})}trackBy(e,t){return t.id}ngOnDestroy(){for(const e of this.subscriptions)e.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(r.a),c.Ib(s.a),c.Ib(h.a),c.Ib(o.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-ball"]],decls:2,vars:3,consts:[[4,"ngxAlias"],[3,"appearance","hideInactiveItems",4,"ngIf"],[3,"appearance","hideInactiveItems"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"pokemon"]],template:function(e,t){1&e&&(c.kc(0,S,3,3,"ng-container",0),c.Xb(1,"async")),2&e&&c.bc("ngxAlias",c.Yb(1,1,t.gridAppearance$))},directives:[I.a,n.k,C.a,n.j,O.a],pipes:[n.b,F],styles:[""]}),e})();var j=i("itXk"),X=i("LRne"),W=i("wBCF"),J=i("DtKQ");function L(e,t){if(1&e&&(c.Nb(0,"div",8),c.Xb(1,"slugify"),c.Jb(2,"app-item",9),c.Xb(3,"slugify"),c.Mb()),2&e){const e=t.$implicit,i=c.Wb().$implicit,n=c.Wb().$implicit;c.Ab("active",null==n.entries[e.key][c.Yb(1,5,i.pokemon)]?null:n.entries[e.key][c.Yb(1,5,i.pokemon)].isOwned)("illegal",null===i[e.key]),c.xb(2),c.bc("slug",c.Yb(3,7,e.key))}}function Y(e,t){if(1&e&&(c.Nb(0,"div",4),c.Nb(1,"div",5),c.Jb(2,"app-pokemon",6),c.Xb(3,"slugify"),c.mc(4),c.Mb(),c.kc(5,L,4,9,"div",7),c.Xb(6,"keyvalue"),c.Mb()),2&e){const e=t.$implicit,i=c.Wb().$implicit;c.xb(2),c.bc("slug",c.Yb(3,3,e.pokemon)),c.xb(2),c.oc(" ",e.pokemon,""),c.xb(1),c.bc("ngForOf",c.Yb(6,5,i.entries))}}function P(e,t){if(1&e&&(c.Lb(0),c.Nb(1,"div",2),c.kc(2,Y,7,7,"div",3),c.Mb(),c.Kb()),2&e){const e=t.$implicit;c.xb(2),c.bc("ngForOf",e.legality)}}function T(e,t){1&e&&c.mc(0,"Loading")}const G=[{path:"",component:w,children:[{path:"overview",component:(()=>{class e{constructor(e,t){this.facade=e,this.db=t}ngOnInit(){this.data$=Object(j.a)([this.db.getBreedableLegality(),this.facade.getCurrentSpreadsheet$()]).pipe(Object(x.a)(e=>(console.log(e[1]),Object(X.a)({legality:e[0],entries:e[1].overviewEntries}))))}}return e.\u0275fac=function(t){return new(t||e)(c.Ib(r.a),c.Ib(W.a))},e.\u0275cmp=c.Cb({type:e,selectors:[["app-overview"]],decls:3,vars:2,consts:[[4,"ngxSubscribe","ngxSubscribeOf","ngxSubscribeBeforeAny"],["loading",""],[1,"legality-table"],["class","legality-row d-flex",4,"ngFor","ngForOf"],[1,"legality-row","d-flex"],[1,"name","d-flex"],[3,"slug"],["class","ball-col",3,"active","illegal",4,"ngFor","ngForOf"],[1,"ball-col"],["category","ball",3,"slug"]],template:function(e,t){if(1&e&&(c.kc(0,P,3,1,"ng-container",0),c.kc(1,T,1,0,"ng-template",null,1,c.lc)),2&e){const e=c.gc(2);c.bc("ngxSubscribeOf",t.data$)("ngxSubscribeBeforeAny",e)}},directives:[I.d,n.j,J.a,u],pipes:[h.a,n.f],styles:[".ball-col .pokesprite{-webkit-filter:grayscale(1) opacity(.3);filter:grayscale(1) opacity(.3)}.ball-col.active .pokesprite{-webkit-filter:none;filter:none}.ball-col.illegal .pokesprite{-webkit-filter:brightness(0) opacity(.3);filter:brightness(0) opacity(.3)}.legality-row{align-items:center;padding-right:10px;border-radius:5px;margin:8px 0}.legality-row .name{width:300px;align-items:center}.legality-row:nth-child(2n){background:#efefef}.legality-table{background:#fff;border-radius:12px;display:inline-block;padding:15px}"],encapsulation:2}),e})()},{path:":worksheetTitle",component:B}]}];let K=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(G)],s.f]}),e})();var D=i("PCNd"),V=i("21aE"),z=i("C7wK");let E=(()=>{class e{}return e.\u0275mod=c.Gb({type:e}),e.\u0275inj=c.Fb({factory:function(t){return new(t||e)},providers:[h.a],imports:[[n.c,K,D.a,V.a,I.c,a.j,z.a]]}),e})()}}]);