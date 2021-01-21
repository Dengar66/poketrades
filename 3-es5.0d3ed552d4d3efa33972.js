!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1Has":function(i,t,a){"use strict";a.d(t,"a",function(){return d});var o=a("2Vo4"),c=a("8LU1"),r=a("fXoL"),d=function(){var i=function(){function i(){e(this,i);var n=localStorage.getItem("gridAppearanceType"),t=Object(c.b)(localStorage.getItem("hideItems"));n="detailed"!==n&&"normal"!==n?"minimal":n,this.gridAppearance=new o.a(n),this.hideInactiveItems=new o.a(null!==t&&t),this.hideAppearanceControl=new o.a(!1),this.hideInactiveItemsControl=new o.a(!1)}return n(i,[{key:"getGridAppearance$",value:function(){return this.gridAppearance.asObservable()}},{key:"updateGridAppearance",value:function(e){this.gridAppearance.next(e),localStorage.setItem("gridAppearanceType",e)}},{key:"getHideItems$",value:function(){return this.hideInactiveItems.asObservable()}},{key:"getHideItems",value:function(){return this.hideInactiveItems.getValue()}},{key:"updateHideItems",value:function(e){return localStorage.setItem("hideItems",String(e)),this.hideInactiveItems.next(e)}},{key:"getHideInactiveItemsControl$",value:function(){return this.hideInactiveItemsControl.asObservable()}},{key:"updateHideInactiveItemsControl",value:function(e){return this.hideInactiveItemsControl.next(e)}},{key:"getHideAppearanceControl$",value:function(){return this.hideAppearanceControl.asObservable()}},{key:"updateHideAppearanceControl",value:function(e){return this.hideAppearanceControl.next(e)}}]),i}();return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=r.Hb({token:i,factory:i.\u0275fac,providedIn:"root"}),i}()},"21aE":function(i,n,t){"use strict";t.d(n,"a",function(){return p});var a=t("ofXK"),o=t("C7wK"),c=t("PCNd"),r=t("3Pt+"),d=t("XJ2P"),s=t("NFeN"),l=t("fXoL"),p=function(){var i=function i(){e(this,i)};return i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(e){return new(e||i)},imports:[[a.c,o.a,c.a,r.l,d.e,s.b]]}),i}()},C7wK:function(i,n,t){"use strict";t.d(n,"a",function(){return c});var a=t("ofXK"),o=t("fXoL"),c=function(){var i=function i(){e(this,i)};return i.\u0275mod=o.Jb({type:i}),i.\u0275inj=o.Ib({factory:function(e){return new(e||i)},imports:[[a.c]]}),i}()},DtKQ:function(i,n,t){"use strict";t.d(n,"a",function(){return o});var a=t("fXoL"),o=function(){var i=function i(){e(this,i),this.pokesprite=!0,this.pokemon=!0,this.shiny=!1};return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.Fb({type:i,selectors:[["app-pokemon"]],hostVars:8,hostBindings:function(e,i){2&e&&(a.Bb(i.slug),a.Db("pokesprite",i.pokesprite)("pokemon",i.pokemon)("shiny",i.shiny))},inputs:{shiny:"shiny",slug:"slug"},decls:0,vars:0,template:function(e,i){},styles:[".pokesprite.pokemon{z-index:1}"],encapsulation:2}),i}()},Ludi:function(i,t,a){"use strict";a.d(t,"a",function(){return te});var o=a("zttm"),c=a("fXoL"),r=a("ofXK"),d=a("DtKQ"),s=["pokemon",""];function l(e,i){if(1&e&&(c.Qb(0,"div",1),c.Mb(1,"app-pokemon",2),c.Pb()),2&e){var n=c.Zb();c.zb(1),c.fc("shiny",n.pokemon.isShiny)("slug",n.pokemon.iconSlug)}}var p,b,g=((b=function(){function i(){e(this,i),this.isGridItem=!0}return n(i,[{key:"inactive",get:function(){var e;return!(null===(e=this.pokemon)||void 0===e?void 0:e.isOwned)}}]),i}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=c.Fb({type:b,selectors:[["app-minimal","pokemon",""]],hostVars:4,hostBindings:function(e,i){2&e&&c.Db("grid-item",i.isGridItem)("inactive",i.inactive)},inputs:{pokemon:"pokemon"},attrs:s,decls:1,vars:1,consts:[["class","icon",4,"ngIf"],[1,"icon"],[3,"shiny","slug"]],template:function(e,i){1&e&&c.uc(0,l,2,2,"div",0),2&e&&c.fc("ngIf",i.pokemon)},directives:[r.l,d.a],styles:[".grid.minimal{grid-gap:6px;grid-template-columns:repeat(auto-fit,40px)}.grid.minimal .grid-item{height:40px;width:40px;border:none;background:hsla(0,0%,100%,.22);border-radius:5px}.grid.minimal .grid-item.inactive .pokesprite{filter:grayscale(1) opacity(.2)}.grid.minimal .grid-item .icon{width:68px;height:56px;margin-left:-14px;flex-basis:40px;margin-top:-16px}@media (prefers-color-scheme:dark){.grid.minimal .grid-item{background:rgba(0,0,0,.22)}}"],encapsulation:2}),b),u=((p=function(){function i(){var n;e(this,i),this.classes="grid-item",this.isInactive=!(null===(n=this.pokemon)||void 0===n?void 0:n.isOwned)}return n(i,[{key:"pokemon",get:function(){return this._pokemon},set:function(e){var i;this._pokemon=e,this.isInactive=!(null===(i=this._pokemon)||void 0===i?void 0:i.isOwned)}}]),i}()).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=c.Fb({type:p,selectors:[["app-normal"]],hostVars:4,hostBindings:function(e,i){2&e&&(c.Bb(i.classes),c.Db("inactive",i.isInactive))},inputs:{pokemon:"pokemon"},decls:9,vars:5,consts:[[1,"icon-wrapper"],["alt","",1,"icon-foundation",3,"src"],[1,"icon"],[3,"shiny","slug"],[1,"information"]],template:function(e,i){1&e&&(c.Qb(0,"div",0),c.Mb(1,"img",1),c.Qb(2,"div",2),c.Mb(3,"app-pokemon",3),c.Pb(),c.Pb(),c.Qb(4,"div",4),c.Qb(5,"div"),c.wc(6),c.Pb(),c.Qb(7,"div"),c.wc(8),c.Pb(),c.Pb()),2&e&&(c.zb(1),c.fc("src","assets/images/pokesprite-pokeball.svg",c.pc),c.zb(2),c.fc("shiny",!(null==i.pokemon||!i.pokemon.isShiny))("slug",null==i.pokemon?null:i.pokemon.iconSlug),c.zb(3),c.xc(null==i.pokemon?null:i.pokemon.name),c.zb(2),c.xc(null==i.pokemon?null:i.pokemon.ability))},directives:[d.a],styles:[".grid.normal{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:15px}.grid.normal .grid-item{line-height:20px;color:#000;background:#fff;border-radius:42px;margin:0;height:auto;display:grid;grid-template-columns:68px 1fr 68px;box-shadow:0 3px 5px rgba(0,0,0,.4);font-family:Kulim Park,sans-serif}.grid.normal .grid-item .information div{height:25px;display:flex;align-items:center}.grid.normal .grid-item.inactive{color:rgba(0,0,0,.3)}.grid.normal .grid-item.inactive .icon-wrapper{filter:grayscale(1) opacity(.1)}@media screen and (max-width:720px){.grid.normal{grid-template-columns:1fr}}.icon-wrapper{position:relative;height:50px;width:68px}.icon-wrapper .icon-foundation{position:absolute;left:14px;bottom:5px;width:40px;opacity:.3}.icon-wrapper .icon{position:absolute;bottom:5px}.icon-wrapper .item{position:absolute;bottom:0;right:2px}@media (prefers-color-scheme:dark){.grid.normal .grid-item{background:#212121;color:#dfd3d4}.grid.normal .grid-item.inactive{color:rgba(223,211,212,.3)}}"],encapsulation:2}),p),f=a("cp0P"),m=a("LRne"),v=a("wBCF"),h=a("XJ2P"),k=a("eMGv"),y=a("NFeN");function x(e,i){if(1&e&&(c.Qb(0,"app-type-badge",20),c.wc(1),c.Pb()),2&e){var n=i.$implicit;c.fc("type",n),c.zb(1),c.xc(n)}}function w(e,i){if(1&e&&(c.Ob(0),c.uc(1,x,2,2,"app-type-badge",19),c.Nb()),2&e){var n=c.Zb().$implicit;c.zb(1),c.fc("ngForOf",n.types)}}function I(e,i){1&e&&(c.Qb(0,"app-type-badge",21),c.wc(1),c.Pb()),2&e&&(c.zb(1),c.xc("unknown"))}function z(e,i){1&e&&c.Mb(0,"mat-icon",22)}function P(e,i){1&e&&(c.Qb(0,"div",38),c.wc(1,"IVs"),c.Pb())}function Q(e,i){1&e&&(c.Qb(0,"div",39),c.wc(1,"EVs"),c.Pb())}function C(e,i){if(1&e&&(c.Qb(0,"div",40),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.ivs.hp)}}function S(e,i){if(1&e&&(c.Qb(0,"div",40),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.evs.hp)}}function O(e,i){if(1&e&&(c.Qb(0,"div",41),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.ivs.atk)}}function Z(e,i){if(1&e&&(c.Qb(0,"div",41),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.evs.atk)}}function F(e,i){if(1&e&&(c.Qb(0,"div",42),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.ivs.def)}}function $(e,i){if(1&e&&(c.Qb(0,"div",42),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.evs.def)}}function A(e,i){if(1&e&&(c.Qb(0,"div",43),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.ivs.spa)}}function B(e,i){if(1&e&&(c.Qb(0,"div",43),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.evs.spa)}}function X(e,i){if(1&e&&(c.Qb(0,"div",44),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.ivs.spd)}}function L(e,i){if(1&e&&(c.Qb(0,"div",44),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.evs.spd)}}function N(e,i){if(1&e&&(c.Qb(0,"div",45),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.ivs.spe)}}function D(e,i){if(1&e&&(c.Qb(0,"div",45),c.wc(1),c.Pb()),2&e){var n=c.Zb(4);c.zb(1),c.xc(n.pokemon.evs.spe)}}function M(e,i){if(1&e&&(c.Qb(0,"div"),c.Qb(1,"div",23),c.wc(2,"Stats"),c.Pb(),c.uc(3,P,2,0,"div",24),c.uc(4,Q,2,0,"div",25),c.Qb(5,"div",26),c.wc(6,"HP"),c.Pb(),c.uc(7,C,2,1,"div",27),c.uc(8,S,2,1,"div",27),c.Qb(9,"div",28),c.wc(10,"Attack"),c.Pb(),c.uc(11,O,2,1,"div",29),c.uc(12,Z,2,1,"div",29),c.Qb(13,"div",30),c.wc(14,"Defense"),c.Pb(),c.uc(15,F,2,1,"div",31),c.uc(16,$,2,1,"div",31),c.Qb(17,"div",32),c.wc(18,"Sp. Atk"),c.Pb(),c.uc(19,A,2,1,"div",33),c.uc(20,B,2,1,"div",33),c.Qb(21,"div",34),c.wc(22,"Sp. Def"),c.Pb(),c.uc(23,X,2,1,"div",35),c.uc(24,L,2,1,"div",35),c.Qb(25,"div",36),c.wc(26,"Speed"),c.Pb(),c.uc(27,N,2,1,"div",37),c.uc(28,D,2,1,"div",37),c.Pb()),2&e){var n=c.Zb(3);c.Cb("detailed-stats row ",n.natureClass,""),c.Db("ev-iv",n.pokemon.ivs&&n.pokemon.evs),c.zb(3),c.fc("ngIf",n.pokemon.ivs),c.zb(1),c.fc("ngIf",n.pokemon.evs),c.zb(3),c.fc("ngIf",n.pokemon.ivs),c.zb(1),c.fc("ngIf",n.pokemon.evs),c.zb(3),c.fc("ngIf",n.pokemon.ivs),c.zb(1),c.fc("ngIf",n.pokemon.evs),c.zb(3),c.fc("ngIf",n.pokemon.ivs),c.zb(1),c.fc("ngIf",n.pokemon.evs),c.zb(3),c.fc("ngIf",n.pokemon.ivs),c.zb(1),c.fc("ngIf",n.pokemon.evs),c.zb(3),c.fc("ngIf",n.pokemon.ivs),c.zb(1),c.fc("ngIf",n.pokemon.evs),c.zb(3),c.fc("ngIf",n.pokemon.ivs),c.zb(1),c.fc("ngIf",n.pokemon.evs)}}function j(e,i){if(1&e&&c.Mb(0,"li"),2&e){var n=i.$implicit,t=c.Zb(4);c.Db("on",n<t.pokemon.dynamaxLevel)}}function G(e,i){1&e&&(c.Qb(0,"div",46),c.Qb(1,"div",15),c.wc(2,"Dynamax Level"),c.Pb(),c.Qb(3,"ul"),c.uc(4,j,1,2,"li",47),c.Pb(),c.Pb()),2&e&&(c.zb(4),c.fc("ngxRepeat",10))}function V(e,i){if(1&e&&(c.Qb(0,"div",48),c.Qb(1,"div",15),c.wc(2,"Nature"),c.Pb(),c.Qb(3,"span",16),c.wc(4),c.Pb(),c.Pb()),2&e){var n=c.Zb(3);c.zb(4),c.xc(n.pokemon.nature)}}function H(e,i){1&e&&(c.Qb(0,"span",53),c.Mb(1,"app-pokemon",54),c.Pb()),2&e&&(c.zb(1),c.fc("slug","egg"))}function K(e,i){if(1&e&&(c.Qb(0,"div",51),c.Qb(1,"span"),c.wc(2),c.Pb(),c.uc(3,H,2,1,"span",52),c.Pb()),2&e){var n=i.$implicit,t=i.index,a=c.Zb().ngIf,o=c.Zb().ngIf;c.Bb("move-"+(null!=o[t]&&o[t].type?o[t].type:"unknown")),c.zb(2),c.xc(n),c.zb(1),c.fc("ngIf",a[t])}}function T(e,i){if(1&e&&(c.Ob(0),c.uc(1,K,4,4,"div",50),c.Nb()),2&e){var n=c.Zb(4);c.zb(1),c.fc("ngForOf",n.pokemon.moves)}}function E(e,i){if(1&e&&(c.Qb(0,"div",49),c.uc(1,T,2,1,"ng-container",0),c.ac(2,"async"),c.Pb()),2&e){var n=c.Zb(3);c.zb(1),c.fc("ngIf",c.bc(2,1,n.isEggMove$))}}function _(e,i){if(1&e&&(c.Ob(0),c.Qb(1,"div",2),c.wc(2),c.Pb(),c.Qb(3,"div",3),c.Qb(4,"div",4),c.Mb(5,"img",5),c.Mb(6,"app-pokemon",6),c.Pb(),c.Qb(7,"div",7),c.Qb(8,"div",8),c.uc(9,w,2,1,"ng-container",0),c.uc(10,I,2,1,"app-type-badge",9),c.Pb(),c.Qb(11,"div",10),c.uc(12,z,1,0,"mat-icon",11),c.Pb(),c.Pb(),c.Pb(),c.uc(13,M,29,19,"div",12),c.uc(14,G,5,1,"div",13),c.Qb(15,"div",14),c.Qb(16,"div",15),c.wc(17,"Ability"),c.Pb(),c.Qb(18,"span",16),c.wc(19),c.Pb(),c.Pb(),c.uc(20,V,5,1,"div",17),c.uc(21,E,3,3,"div",18),c.ac(22,"async"),c.Nb()),2&e){var n=i.$implicit,t=c.Zb(2);c.zb(2),c.xc(t.pokemon.name),c.zb(4),c.fc("shiny",t.pokemon.isShiny)("slug",t.pokemon.iconSlug),c.zb(3),c.fc("ngIf",n),c.zb(1),c.fc("ngIf",!n),c.zb(2),c.fc("ngIf",t.pokemon.isShiny),c.zb(1),c.fc("ngIf",t.pokemon.ivs||t.pokemon.evs),c.zb(1),c.fc("ngIf",t.pokemon.dynamaxLevel),c.zb(5),c.xc(t.pokemon.ability),c.zb(1),c.fc("ngIf",t.natureClass),c.zb(1),c.fc("ngIf",c.bc(22,11,t.moves$))}}function J(e,i){if(1&e&&(c.Ob(0),c.uc(1,_,23,13,"ng-container",1),c.Nb()),2&e){var n=c.Zb();c.zb(1),c.fc("ngxSubscribeOf",n.dbpokemon$)}}var R,U=((R=function(){function i(n){e(this,i),this.databaseFacadeService=n,this.isGridItem=!0,this.natureClass=""}return n(i,[{key:"ngOnInit",value:function(){this.initPokemonAttributes()}},{key:"ngOnChanges",value:function(e){this.initPokemonAttributes()}},{key:"initPokemonAttributes",value:function(){var e,i=this;this.pokemon&&(this.natureClass=this.pokemon.nature&&this.databaseFacadeService.isNature(this.pokemon.nature)?this.pokemon.nature.toLowerCase():"",this.dbpokemon$=this.databaseFacadeService.findPokemon(null===(e=this.pokemon)||void 0===e?void 0:e.name),this.moves$=Object(f.a)(this.pokemon.moves.map(function(e){return i.databaseFacadeService.findMove(e)})),this.isEggMove$=Object(f.a)(this.pokemon.moves.map(function(e){return i.pokemon?i.databaseFacadeService.isEggMove(i.pokemon.name,e):Object(m.a)(!1)})))}},{key:"inactive",get:function(){var e;return!(null===(e=this.pokemon)||void 0===e?void 0:e.isOwned)}}]),i}()).\u0275fac=function(e){return new(e||R)(c.Lb(v.a))},R.\u0275cmp=c.Fb({type:R,selectors:[["app-detailed"]],hostVars:4,hostBindings:function(e,i){2&e&&c.Db("grid-item",i.isGridItem)("inactive",i.inactive)},inputs:{pokemon:"pokemon"},features:[c.xb],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngxSubscribe","ngxSubscribeOf"],[1,"detailed-header","dark-bg"],[1,"detailed-species-info","d-flex"],[1,"detailed-species-icon"],["alt","","src","assets/images/pokesprite-pokeball.svg",1,"icon-foundation"],[3,"shiny","slug"],[1,"detailed-pokemon-info","row"],[1,"detailed-types"],["type","unknown","size","small",4,"ngIf"],[1,"shiny-icon-wrapper"],["svgIcon","shiny-stars",4,"ngIf"],[3,"class","ev-iv",4,"ngIf"],["class","detailed-dynamax row ",4,"ngIf"],[1,"detailed-ability","row"],[1,"detailed-label","dark-bg"],[1,"detailed-text"],["class","detailed-nature row ",4,"ngIf"],["class","detailed-moves",4,"ngIf"],["size","small",3,"type",4,"ngFor","ngForOf"],["size","small",3,"type"],["type","unknown","size","small"],["svgIcon","shiny-stars"],[1,"detailed-label","dark-bg","t-align-center"],["class","iv",4,"ngIf"],["class","ev",4,"ngIf"],[1,"detailed-label","dark-bg","t-align-center","hp"],["class","hp",4,"ngIf"],[1,"detailed-label","dark-bg","t-align-center","atk"],["class","atk",4,"ngIf"],[1,"detailed-label","dark-bg","t-align-center","def"],["class","def",4,"ngIf"],[1,"detailed-label","dark-bg","t-align-center","spa"],["class","spa",4,"ngIf"],[1,"detailed-label","dark-bg","t-align-center","spd"],["class","spd",4,"ngIf"],[1,"detailed-label","dark-bg","t-align-center","spe"],["class","spe",4,"ngIf"],[1,"iv"],[1,"ev"],[1,"hp"],[1,"atk"],[1,"def"],[1,"spa"],[1,"spd"],[1,"spe"],[1,"detailed-dynamax","row"],[3,"on",4,"ngxRepeat"],[1,"detailed-nature","row"],[1,"detailed-moves"],["class","detailed-move d-flex",3,"class",4,"ngFor","ngForOf"],[1,"detailed-move","d-flex"],["class","egg-icon",4,"ngIf"],[1,"egg-icon"],[3,"slug"]],template:function(e,i){1&e&&c.uc(0,J,2,1,"ng-container",0),2&e&&c.fc("ngIf",i.pokemon&&i.dbpokemon$)},directives:[r.l,h.f,d.a,r.k,k.a,y.a,h.c],pipes:[r.b],styles:[".grid.detailed{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:15px}.grid.detailed .grid-item{color:#000;flex-direction:column;background:hsla(0,0%,100%,.95);margin:0;height:auto;display:flex;box-shadow:0 3px 5px rgba(0,0,0,.4);transition:all .3s}.grid.detailed .grid-item:hover{transform:translateY(-5px);box-shadow:0 3px 10px 0 rgba(0,0,0,.4)}.grid.detailed .grid-item.inactive{filter:grayscale(1) opacity(.5)}.grid.detailed .grid-item.inactive:hover{filter:grayscale(0) opacity(1)}.grid.detailed .grid-item.inactive .type-badge{filter:grayscale(1)}.grid.detailed .grid-item .detailed-species-info{margin-top:-12px}.grid.detailed .grid-item .detailed-species-icon{position:relative;display:flex;width:90px;justify-content:center;align-items:center}.grid.detailed .grid-item .icon-foundation{position:absolute;left:50%;bottom:3px;width:40px;opacity:.3;transform:translateX(-20px)}.grid.detailed .grid-item .detailed-species{border-bottom:4px solid transparent}.grid.detailed .grid-item .row{margin:0 0 3px}.grid.detailed .grid-item .dark-bg{background:#dbdbdb}.grid.detailed .grid-item .detailed-types,.grid.detailed .grid-item .shiny-icon-wrapper{border-top:14px solid transparent}.grid.detailed .grid-item .shiny-icon-wrapper{height:38px;width:24px}.grid.detailed .grid-item .shiny-icon-wrapper svg{color:red}.grid.detailed .grid-item .detailed-pokemon-info{padding:4px 10px;display:flex;align-items:center;justify-content:space-between;flex:1 1 auto}.grid.detailed .grid-item .detailed-pokemon-info .detailed-label{margin-left:-10px}.grid.detailed .grid-item .detailed-pokemon-info .type-badge{margin-right:5px}.grid.detailed .grid-item .detailed-header{padding:7px;font-weight:700}.grid.detailed .grid-item .detailed-stats{display:grid;grid-template-columns:80px 1fr;grid-gap:3px 10px}.grid.detailed .grid-item .detailed-stats.ev-iv{grid-template-columns:80px 1fr 1fr}.grid.detailed .grid-item .detailed-label{padding:4px 10px;width:80px;text-align:center}.grid.detailed .grid-item .inactive{color:rgba(0,0,0,.3)}.grid.detailed .grid-item .inactive .icon-wrapper{filter:grayscale(1) opacity(.1)}.detailed-text{display:flex;justify-content:center;padding:4px 10px}.detailed-ability,.detailed-dynamax,.detailed-nature{display:flex}.detailed-dynamax .detailed-label,.detailed-dynamax ul{flex-basis:50%}.detailed-dynamax ul{display:flex;justify-content:space-evenly;border-left:15px solid transparent;border-right:5px solid transparent}.detailed-dynamax ul li{transform:skewX(-20deg);height:100%;width:7%;background:#e8e8e8}.detailed-dynamax ul li.on:first-child{background:#33eafa}.detailed-dynamax ul li.on:nth-child(2){background:#5adffe}.detailed-dynamax ul li.on:nth-child(3){background:#65c2fd}.detailed-dynamax ul li.on:nth-child(4){background:#52a3f4}.detailed-dynamax ul li.on:nth-child(5){background:#987afc}.detailed-dynamax ul li.on:nth-child(6){background:#b977fd}.detailed-dynamax ul li.on:nth-child(7){background:#dc51ea}.detailed-dynamax ul li.on:nth-child(8){background:#f631be}.detailed-dynamax ul li.on:nth-child(9){background:#e8288d}.detailed-dynamax ul li.on:nth-child(10){background:#e52674}:root{--nature-plus-color:#f22;--nature-minus-color:#126ee0}.adamant .atk,.bold .def,.brave .atk,.calm .spd,.careful .spd,.hasty .spe,.impish .def,.jolly .spe,.lonely .atk,.mild .spa,.modest .spa,.naive .spe,.naughty .atk,.quiet .spa,.rash .spa,.relaxed .def,.sassy .spd,.timid .spe{color:var(--nature-plus-color)}.adamant .spa,.bold .atk,.brave .spe,.calm .atk,.careful .spa,.hasty .def,.impish .spa,.jolly .spa,.lonely .def,.mild .def,.modest .atk,.naive .spd,.naughty .spd,.quiet .spe,.rash .spd,.relaxed .spe,.sassy .spe,.timid .atk{color:var(--nature-minus-color)}.atk,.def,.ev,.hp,.iv,.spa,.spd,.spe{padding:4px 0}.detailed-move{margin-bottom:3px}.detailed-moves{padding:0 4px}.detailed-moves [class*=move-]{padding:6px 6px 6px 36px;border-radius:3px;background-repeat:no-repeat;background-blend-mode:screen;background-size:24px;background-position:3px;justify-content:space-between;background-color:#dbdbdb}.detailed-moves .move-water{background-color:#8cade0;background-image:url(water.48703a921b5c9fd43ba0.png)}.detailed-moves .move-dark{background-color:#8f8e94;background-image:url(dark.d9da922f4f86171947f2.png)}.detailed-moves .move-psychic{background-color:#eba1a2;background-image:url(psychic.a5bb00f19be130afe278.png)}.detailed-moves .move-fighting{background-color:#cd8b99;background-image:url(fighting.6f07755564aeb8f6bd5d.png)}.detailed-moves .move-poison{background-color:#bd98d2;background-image:url(poison.b16edaa831719df29e05.png)}.detailed-moves .move-normal{background-color:#acb4b7;background-image:url(normal.a10d949b16747d3dce00.png)}.detailed-moves .move-ghost{background-color:#8e97be;background-image:url(ghost.608b237fafeebde86299.png)}.detailed-moves .move-steel{background-color:#90acb8;background-image:url(steel.2cce7180f019ea62686c.png)}.detailed-moves .move-ground{background-color:#e19f87;background-image:url(ground.0ab6764cb9f6e0e157ae.png)}.detailed-moves .move-dragon{background-color:#7a99cf;background-image:url(dragon.7c873236b82e620ebda0.png)}.detailed-moves .move-fairy{background-color:#f2adec;background-image:url(fairy.b7f8f95be18da24b5c84.png)}.detailed-moves .move-fire{background-color:#ffb68d;background-image:url(fire.8e48835626ec35ec3bad.png)}.detailed-moves .move-bug{background-color:#add080;background-image:url(bug.ac28e4805e26656217dc.png)}.detailed-moves .move-ice{background-color:#9cdacd;background-image:url(ice.726378deda34a83a8a3c.png)}.detailed-moves .move-flying{background-color:#aebde4;background-image:url(flying.f126652191a894e43904.png)}.detailed-moves .move-rock{background-color:#d3c8a8;background-image:url(rock.ea5781eb0bd50201e1c2.png)}.detailed-moves .move-grass{background-color:#94cc8f;background-image:url(grass.b3f154ee2518a6968934.png)}.detailed-moves .move-electric{background-color:#f6dc85;background-image:url(electric.ae0021eff57f1ff3ab3a.png)}.detailed-moves .egg-icon{overflow:hidden;height:21px;width:42px;display:flex;align-items:flex-end}.detailed-moves .egg-icon .pkspr.egg{margin-left:-16px}@media screen and (max-width:1400px){.grid.detailed{grid-template-columns:1fr 1fr 1fr}}@media screen and (max-width:1200px){.grid.detailed{grid-template-columns:1fr 1fr}}@media screen and (max-width:900px){.grid.detailed{grid-template-columns:1fr}}@media (prefers-color-scheme:dark){:root{--nature-plus-color:#f35b96;--nature-minus-color:#45c6f0}.grid.detailed .grid-item{background:#212121;color:#dfd3d4}.grid.detailed .grid-item .dark-bg{background:#161b22}.grid.detailed .grid-item.inactive{color:rgba(223,211,212,.3)}.grid.detailed .grid-item .shiny-icon-wrapper svg{color:#b51010}.detailed-moves .move-water{background-color:#576781}.detailed-moves .move-dark{background-color:#58585b}.detailed-moves .move-psychic{background-color:#866162}.detailed-moves .move-fighting{background-color:#77565d}.detailed-moves .move-poison{background-color:#6f5d7a}.detailed-moves .move-normal{background-color:#676b6c}.detailed-moves .move-ghost{background-color:#585c70}.detailed-moves .move-steel{background-color:#59676d}.detailed-moves .move-ground{background-color:#816054}.detailed-moves .move-dragon{background-color:#4e5d78}.detailed-moves .move-fairy{background-color:#896786}.detailed-moves .move-fire{background-color:#906c57}.detailed-moves .move-bug{background-color:#677951}.detailed-moves .move-ice{background-color:#5f7e77}.detailed-moves .move-flying{background-color:#686f82}.detailed-moves .move-rock{background-color:#7a7565}.detailed-moves .move-grass{background-color:#5b7758}.detailed-moves .move-electric{background-color:#8b7f53}}"],encapsulation:2}),R);function q(e,i){if(1&e&&(c.Ob(0),c.Mb(1,"app-minimal",4),c.Nb()),2&e){var n=c.Zb().$implicit;c.zb(1),c.fc("pokemon",n.pokemon)}}function Y(e,i){if(1&e&&(c.Ob(0),c.Mb(1,"app-normal",4),c.Nb()),2&e){var n=c.Zb().$implicit;c.zb(1),c.fc("pokemon",n.pokemon)}}function W(e,i){if(1&e&&(c.Ob(0),c.Mb(1,"app-detailed",4),c.Nb()),2&e){var n=c.Zb().$implicit;c.zb(1),c.fc("pokemon",n.pokemon)}}function ee(e,i){if(1&e&&(c.Ob(0),c.Ob(1,2),c.uc(2,q,2,1,"ng-container",3),c.uc(3,Y,2,1,"ng-container",3),c.uc(4,W,2,1,"ng-container",3),c.Nb(),c.Nb()),2&e){var n=c.Zb(2);c.zb(1),c.fc("ngSwitch",n.appearance),c.zb(1),c.fc("ngSwitchCase","minimal"),c.zb(1),c.fc("ngSwitchCase","normal"),c.zb(1),c.fc("ngSwitchCase","detailed")}}function ie(e,i){if(1&e&&(c.Ob(0),c.uc(1,ee,5,4,"ng-container",1),c.Nb()),2&e){var n=c.Zb();c.zb(1),c.fc("ngForOf",n.items)("ngForTrackBy",n.trackByFn)}}var ne,te=((ne=function(){function i(){e(this,i),this.isGrid=!0,this.hideInactiveItems=!1}return n(i,[{key:"ngAfterContentInit",value:function(){var e=this;this.items||(this.items=this.contentChildren.toArray()),this.contentChildren.changes.subscribe(function(i){e.items=i.toArray()})}},{key:"trackByFn",value:function(e,i){var n,t;return null!==(t=null===(n=i.pokemon)||void 0===n?void 0:n.id)&&void 0!==t?t:""}},{key:"class",get:function(){var e;return null!==(e=this.appearance)&&void 0!==e?e:"normal"}}]),i}()).\u0275fac=function(e){return new(e||ne)},ne.\u0275cmp=c.Fb({type:ne,selectors:[["app-grid"]],contentQueries:function(e,i,n){var t;1&e&&c.Eb(n,o.a,!1),2&e&&c.kc(t=c.Yb())&&(i.contentChildren=t)},hostVars:6,hostBindings:function(e,i){2&e&&(c.Bb(i.class),c.Db("grid",i.isGrid)("hide-inactives",i.hideInactiveItems))},inputs:{hideInactiveItems:"hideInactiveItems",appearance:"appearance"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"pokemon"]],template:function(e,i){1&e&&c.uc(0,ie,2,2,"ng-container",0),2&e&&c.fc("ngIf",i.items)},directives:[r.l,r.k,r.m,r.n,g,u,U],styles:[".grid{display:grid}.grid.hide-inactives .grid-item.inactive{display:none}"],encapsulation:2}),ne)},NtUI:function(i,t,a){"use strict";a.d(t,"a",function(){return k});var o=a("3Pt+"),c=a("fXoL"),r=a("1Has"),d=a("ofXK");function s(e,i){if(1&e){var n=c.Rb();c.Ob(0),c.Qb(1,"label",1),c.Qb(2,"input",2),c.Xb("change",function(e){return c.oc(n),c.Zb().emitChange(e)}),c.Pb(),c.Qb(3,"span",3),c.wc(4,"view_comfy"),c.Pb(),c.Qb(5,"span",4),c.wc(6,"Minimal"),c.Pb(),c.Pb(),c.Qb(7,"label",1),c.Qb(8,"input",5),c.Xb("change",function(e){return c.oc(n),c.Zb().emitChange(e)}),c.Pb(),c.Qb(9,"span",3),c.wc(10,"view_headline"),c.Pb(),c.Qb(11,"span",4),c.wc(12,"Normal"),c.Pb(),c.Pb(),c.Qb(13,"label",1),c.Qb(14,"input",6),c.Xb("change",function(e){return c.oc(n),c.Zb().emitChange(e)}),c.Pb(),c.Qb(15,"span",3),c.wc(16,"view_column"),c.Pb(),c.Qb(17,"span",4),c.wc(18,"Detailed"),c.Pb(),c.Pb(),c.Nb()}if(2&e){var t=i.ngIf;c.zb(2),c.fc("checked","minimal"===t),c.zb(6),c.fc("checked","normal"===t),c.zb(6),c.fc("checked","detailed"===t)}}var l,p=((l=function(){function i(n){e(this,i),this.gridService=n,this.classes="grid-changer",this.selectionChanged=new c.n,this.appearance$=this.gridService.getGridAppearance$()}return n(i,[{key:"ngOnInit",value:function(){}},{key:"emitChange",value:function(e){this.selectionChanged.emit(e.target.defaultValue)}}]),i}()).\u0275fac=function(e){return new(e||l)(c.Lb(r.a))},l.\u0275cmp=c.Fb({type:l,selectors:[["app-changer"]],hostVars:2,hostBindings:function(e,i){2&e&&c.Bb(i.classes)},outputs:{selectionChanged:"selectionChanged"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"grid-changer-option"],["value","minimal","name","changer","type","radio",3,"checked","change"],[1,"material-icons"],[1,"label"],["value","normal","name","changer","type","radio",3,"checked","change"],["value","detailed","name","changer","type","radio",3,"checked","change"]],template:function(e,i){1&e&&(c.uc(0,s,19,3,"ng-container",0),c.ac(1,"async")),2&e&&c.fc("ngIf",c.bc(1,1,i.appearance$))},directives:[d.l],pipes:[d.b],styles:[".grid-changer{-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#fff;color:#000;box-shadow:0 0 6px #000;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:30px}.grid-changer .grid-changer-option{cursor:pointer;display:inline-flex;align-items:center}.grid-changer input{display:none}.grid-changer .material-icons{padding:3px}.grid-changer .label{padding:3px;display:none;line-height:24px;width:85px;height:30px}.grid-changer input:checked~.label,.grid-changer input:checked~.material-icons{background:#313330;color:#fff;display:inline-flex;align-items:center;cursor:default}@media (prefers-color-scheme:dark){.grid-changer{background:#21262d;color:#efe2e3}.grid-changer input:checked~.label,.grid-changer input:checked~.material-icons{background:#161b22;color:#58a6ff}}"],encapsulation:2}),l);function b(e,i){if(1&e&&(c.Qb(0,"span",4),c.wc(1),c.Pb()),2&e){var n=c.Zb();c.zb(1),c.xc(n.icon)}}var g,u=["*"],f=((g=function(){function i(){e(this,i),this.displayFlex=!0,this.checked=!1,this.propagateChange=function(e){},this.controlID="pktrds-checkbox-"+i.idCounter++}return n(i,[{key:"writeValue",value:function(e){this.checked=!!e}},{key:"registerOnChange",value:function(e){this.propagateChange=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"onChange",value:function(e){this.checked=e.target.checked,this.propagateChange(this.checked)}}]),i}()).idCounter=0,g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=c.Fb({type:g,selectors:[["app-checkbox"]],hostVars:2,hostBindings:function(e,i){2&e&&c.Db("d-flex",i.displayFlex)},inputs:{icon:"icon"},features:[c.yb([{provide:o.g,useExisting:Object(c.T)(function(){return g}),multi:!0}])],ngContentSelectors:u,decls:5,vars:3,consts:[[1,"inacitve-hider"],["type","checkbox",3,"id","checked","change"],["class","material-icons",4,"ngIf"],[1,"label"],[1,"material-icons"]],template:function(e,i){1&e&&(c.ec(),c.Qb(0,"label",0),c.Qb(1,"input",1),c.Xb("change",function(e){return i.onChange(e)}),c.Pb(),c.uc(2,b,2,1,"span",2),c.Qb(3,"span",3),c.dc(4),c.Pb(),c.Pb()),2&e&&(c.zb(1),c.gc("id",i.controlID),c.fc("checked",i.checked),c.zb(1),c.fc("ngIf",i.icon))},directives:[d.l],styles:[".inacitve-hider{-webkit-user-select:none;-moz-user-select:none;user-select:none;background:#fff;color:#000;box-shadow:0 0 6px #000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:27px;cursor:pointer;display:inline-flex;align-items:center}.inacitve-hider input{display:none}.inacitve-hider .material-icons{padding:3px}.inacitve-hider .label{display:inline-flex;align-items:center;padding:3px;width:130px;height:30px}.inacitve-hider input:checked~.label,.inacitve-hider input:checked~.material-icons{background:#313330;color:#fff}@media (prefers-color-scheme:dark){.inacitve-hider{background:#21262d;color:#efe2e3}.inacitve-hider input:checked~.label,.inacitve-hider input:checked~.material-icons{background:#161b22;color:#58a6ff}}"],encapsulation:2}),g);function m(e,i){if(1&e){var n=c.Rb();c.Qb(0,"app-changer",2),c.Xb("selectionChanged",function(e){return c.oc(n),c.Zb().changeGrid(e)}),c.Pb()}}function v(e,i){if(1&e){var n=c.Rb();c.Qb(0,"app-checkbox",3),c.Xb("change",function(){return c.oc(n),c.Zb().changeGridInactives()}),c.wc(1),c.Pb()}if(2&e){var t=c.Zb();c.fc("formControl",t.toggleInactivesControl)("icon",t.toggleInactivesControl.value?"visibility_off":"visibility"),c.zb(1),c.yc(" ",t.toggleInactivesControl.value?"Unowned hidden":"Unowned visible","\n")}}var h,k=((h=function(){function i(n){e(this,i),this.gridService=n,this.setClass=!0,this.toggleInactivesControl=new o.b(this.gridService.getHideItems()),this.hideAppearance$=this.gridService.getHideAppearanceControl$(),this.hideInactives$=this.gridService.getHideInactiveItemsControl$()}return n(i,[{key:"ngOnInit",value:function(){}},{key:"changeGrid",value:function(e){this.gridService.updateGridAppearance(e)}},{key:"changeGridInactives",value:function(){this.gridService.updateHideItems(this.toggleInactivesControl.value)}}]),i}()).\u0275fac=function(e){return new(e||h)(c.Lb(r.a))},h.\u0275cmp=c.Fb({type:h,selectors:[["app-grid-controller"]],hostVars:2,hostBindings:function(e,i){2&e&&c.Db("grid-controller",i.setClass)},decls:4,vars:6,consts:[["class","m-right-gap",3,"selectionChanged",4,"ngIf"],[3,"formControl","icon","change",4,"ngIf"],[1,"m-right-gap",3,"selectionChanged"],[3,"formControl","icon","change"]],template:function(e,i){1&e&&(c.uc(0,m,1,0,"app-changer",0),c.ac(1,"async"),c.uc(2,v,2,3,"app-checkbox",1),c.ac(3,"async")),2&e&&(c.fc("ngIf",!1===c.bc(1,2,i.hideAppearance$)),c.zb(2),c.fc("ngIf",!1===c.bc(3,4,i.hideInactives$)))},directives:[d.l,p,f,o.i,o.c],pipes:[d.b],styles:[".grid-controller{display:flex;align-items:center}"],encapsulation:2}),h)},eMGv:function(i,t,a){"use strict";a.d(t,"a",function(){return c});var o=a("fXoL"),c=function(){var i=function(){function i(){e(this,i),this.type="unknown",this.size="normal",this.isTypeBade=!0}return n(i,[{key:"typeClass",get:function(){var e;return(null===(e=this.type)||void 0===e?void 0:e.toLowerCase())||""}},{key:"sizeClass",get:function(){return"small"===this.size}}]),i}();return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Fb({type:i,selectors:[["app-type-badge"]],hostVars:6,hostBindings:function(e,i){2&e&&(o.Bb(i.typeClass),o.Db("type-badge",i.isTypeBade)("small",i.sizeClass))},inputs:{type:"type",size:"size"},decls:0,vars:0,template:function(e,i){},styles:[".type-badge{background-image:url(types-en.601cafda8c49a98daadc.png);height:44px;width:200px;display:inline-block;background-size:600% 300%;border-radius:3px}.type-badge.unknown{background-image:url(type-unknown.6ac7b5791a0c78738b02.png);background-size:contain}.type-badge.small{width:100px;height:22px}.type-badge.normal{background-position:0 0}.type-badge.fighting{background-position:20% 0}.type-badge.flying{background-position:40% 0}.type-badge.poison{background-position:60% 0}.type-badge.ground{background-position:80% 0}.type-badge.rock{background-position:100% 0}.type-badge.bug{background-position:0 50%}.type-badge.ghost{background-position:20% 50%}.type-badge.steel{background-position:40% 50%}.type-badge.fire{background-position:60% 50%}.type-badge.water{background-position:80% 50%}.type-badge.grass{background-position:100% 50%}.type-badge.electric{background-position:0 100%}.type-badge.psychic{background-position:20% 100%}.type-badge.ice{background-position:40% 100%}.type-badge.dragon{background-position:60% 100%}.type-badge.dark{background-position:80% 100%}.type-badge.fairy{background-position:100% 100%}"],encapsulation:2}),i}()},pEm8:function(i,n,t){"use strict";t.d(n,"a",function(){return p});var a=t("fXoL"),o=t("ofXK"),c=t("tyNb"),r=t("8I9x");function d(e,i){if(1&e&&(a.Qb(0,"li"),a.ac(1,"slugify"),a.Qb(2,"a",1),a.Qb(3,"div",2),a.dc(4),a.Pb(),a.Qb(5,"div",3),a.Qb(6,"span",4),a.wc(7),a.Pb(),a.Qb(8,"span",5),a.wc(9),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e){var n=a.Zb();a.Bb(a.bc(1,8,n.text)),a.zb(2),a.fc("routerLink",n.link),a.zb(3),a.Db("no-meta",!n.meta),a.zb(2),a.xc(n.text),a.zb(2),a.xc(n.meta)}}var s=[[["app-item"],["app-pokemon"]]],l=["app-item, app-pokemon"],p=function(){var i=function i(){e(this,i),this.subNaviClass=!0};return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.Fb({type:i,selectors:[["app-sub-navi-item"]],hostVars:2,hostBindings:function(e,i){2&e&&a.Db("sub-navi-item",i.subNaviClass)},inputs:{text:"text",link:"link",meta:"meta"},ngContentSelectors:l,decls:1,vars:1,consts:[[3,"class",4,"ngIf"],["routerLinkActive","active",3,"routerLink"],[1,"icon"],[1,"content"],[1,"title"],[1,"meta-info"]],template:function(e,i){1&e&&(a.ec(s),a.uc(0,d,10,10,"li",0)),2&e&&a.fc("ngIf",i.text)},directives:[o.l,c.e,c.d],pipes:[r.a],styles:['.sub-navi-item li{margin:0;height:auto;flex-flow:row wrap;display:flex;align-items:center}.sub-navi-item li a{font-size:14.4px;font-weight:700;line-height:32px;color:#000;border-radius:42px;box-shadow:0 3px 5px rgba(0,0,0,.4);display:flex;align-items:center;width:100%;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.sub-navi-item li a .icon{background:#fff;flex-basis:32px;height:32px}.sub-navi-item li a .content{position:relative;flex-basis:calc(100% - 48px - 0.5rem);display:flex;justify-content:space-between;height:32px}.sub-navi-item li a .content:before{background-color:#46504f;right:-150px;width:198px;height:240px;content:"";display:block;position:absolute;top:-32px;transform-origin:left top;transform:rotate(24deg);z-index:1}.sub-navi-item li a .content.no-meta:before{background-color:#fff}.sub-navi-item li a .content .title{flex-grow:1;background:#fff}.sub-navi-item li a .content .meta-info{z-index:6;color:#fff;font-weight:500;font-size:100%;text-align:right}.sub-navi-item li a.active .content.no-meta:before,.sub-navi-item li a.active .content .title,.sub-navi-item li a.active .icon{background:#000;color:#fff}@media (prefers-color-scheme:dark){.sub-navi-item li a .content.no-meta:before,.sub-navi-item li a .content .title,.sub-navi-item li a .icon{background:#212121;color:hsla(0,0%,100%,.8)}.sub-navi-item li a .content.no-meta:before{background-color:#212121}}'],encapsulation:2}),i}()},zttm:function(i,n,t){"use strict";t.d(n,"a",function(){return o});var a=t("fXoL"),o=function(){var i=function i(){e(this,i)};return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=a.Fb({type:i,selectors:[["app-grid-item"]],inputs:{pokemon:"pokemon",appearance:"appearance"},decls:0,vars:0,template:function(e,i){},styles:[""],encapsulation:2}),i}()}}])}();