(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{rpxx:function(e,t,i){"use strict";i.r(t),i.d(t,"ToolsModule",(function(){return dt}));var o=i("ofXK"),n=i("tyNb"),s=i("fXoL"),a=i("pEm8"),l=i("EAs/");const r=function(){return["breeding"]},c=function(){return["shiny-dex"]};let u=(()=>{class e{constructor(){this.classes=!0}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-tools"]],hostVars:2,hostBindings:function(e,t){2&e&&s.Cb("view",t.classes)},decls:11,vars:6,consts:[[1,"view-header"],[1,"view-addional-content"],[1,"view-sidebar"],[1,"sub-navi"],[3,"link","text"],["category","key-item","slug","oval-charm"],["category","key-item","slug","shiny-charm"],[1,"view-content"]],template:function(e,t){1&e&&(s.Pb(0,"header",0),s.uc(1,"Tools"),s.Ob(),s.Lb(2,"div",1),s.Pb(3,"aside",2),s.Pb(4,"ul",3),s.Pb(5,"app-sub-navi-item",4),s.Lb(6,"app-item",5),s.Ob(),s.Pb(7,"app-sub-navi-item",4),s.Lb(8,"app-item",6),s.Ob(),s.Ob(),s.Ob(),s.Pb(9,"div",7),s.Lb(10,"router-outlet"),s.Ob()),2&e&&(s.zb(5),s.ec("link",s.gc(4,r))("text","Breeding"),s.zb(2),s.ec("link",s.gc(5,c))("text","Shiny Dex"))},directives:[a.a,l.a,n.g],styles:[""],encapsulation:2}),e})();var p=i("3Pt+"),h=i("cp0P"),d=i("vkgz"),b=i("JX91"),m=i("lJxs"),g=i("5+tZ"),f=i("cHJA"),v=i("wBCF"),_=i("d3iT"),y=i("XJ2P"),O=i("u47x"),w=i("8LU1"),x=i("FKr1"),k=i("quSY"),P=i("XNiG"),A=i("NXyV"),C=i("VRyK"),S=i("LRne"),E=i("xgIS"),F=i("rDax"),I=i("vxfF"),j=i("FtGj"),M=i("nLfN"),L=i("+rOU"),T=i("GU7r"),z=(i("1G5W"),i("IzEk")),R=(i("R0Ic"),i("R1ws"),i("cH1L"));let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=s.Fb({type:e}),e})();const D=new s.q("MatFormField");let K=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[o.c,x.e,T.c],x.e]}),e})();var V=i("eIep"),$=i("pLZG"),Y=i("D0XW"),W=i("7o/Q"),B=i("WMd4");class H{constructor(e,t){this.delay=e,this.scheduler=t}call(e,t){return t.subscribe(new q(e,this.delay,this.scheduler))}}class q extends W.a{constructor(e,t,i){super(e),this.delay=t,this.scheduler=i,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const t=e.source,i=t.queue,o=e.scheduler,n=e.destination;for(;i.length>0&&i[0].time-o.now()<=0;)i.shift().notification.observe(n);if(i.length>0){const t=Math.max(0,i[0].time-o.now());this.schedule(e,t)}else this.unsubscribe(),t.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule(q.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const t=this.scheduler,i=new X(t.now()+this.delay,e);this.queue.push(i),!1===this.active&&this._schedule(t)}_next(e){this.scheduleNotification(B.a.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification(B.a.createComplete()),this.unsubscribe()}}class X{constructor(e,t){this.time=e,this.notification=t}}const Z=["panel"];function G(e,t){if(1&e&&(s.Pb(0,"div",0,1),s.cc(2),s.Ob()),2&e){const e=s.Yb();s.ec("id",e.id)("ngClass",e._classList)}}const U=["*"];let J=0;class Q{constructor(e,t){this.source=e,this.option=t}}class ee{}const te=Object(x.l)(ee),ie=new s.q("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}});let oe=(()=>{class e extends te{constructor(e,t,i){super(),this._changeDetectorRef=e,this._elementRef=t,this._activeOptionChanges=k.a.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new s.n,this.opened=new s.n,this.closed=new s.n,this.optionActivated=new s.n,this._classList={},this.id="mat-autocomplete-"+J++,this._autoActiveFirstOption=!!i.autoActiveFirstOption}get isOpen(){return this._isOpen&&this.showPanel}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(e){this._autoActiveFirstOption=Object(w.b)(e)}set classList(e){this._classList=e&&e.length?e.split(" ").reduce((e,t)=>(e[t.trim()]=!0,e),{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""}ngAfterContentInit(){this._keyManager=new O.b(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){const t=new Q(this,e);this.optionSelected.emit(t)}_setVisibilityClasses(e){e[this._visibleClass]=this.showPanel,e[this._hiddenClass]=!this.showPanel}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(s.h),s.Kb(s.l),s.Kb(ie))},e.\u0275dir=s.Fb({type:e,viewQuery:function(e,t){var i;1&e&&(s.qc(s.L,!0),s.xc(Z,!0)),2&e&&(s.jc(i=s.Xb())&&(t.template=i.first),s.jc(i=s.Xb())&&(t.panel=i.first))},inputs:{displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",classList:["class","classList"],panelWidth:"panelWidth"},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[s.wb]}),e})(),ne=(()=>{class e extends oe{constructor(){super(...arguments),this._visibleClass="mat-autocomplete-visible",this._hiddenClass="mat-autocomplete-hidden"}}return e.\u0275fac=function(t){return se(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["mat-autocomplete"]],contentQueries:function(e,t,i){var o;1&e&&(s.Db(i,x.c,!0),s.Db(i,x.f,!0)),2&e&&(s.jc(o=s.Xb())&&(t.optionGroups=o),s.jc(o=s.Xb())&&(t.options=o))},hostAttrs:[1,"mat-autocomplete"],inputs:{disableRipple:"disableRipple"},exportAs:["matAutocomplete"],features:[s.yb([{provide:x.d,useExisting:e}]),s.wb],ngContentSelectors:U,decls:1,vars:0,consts:[["role","listbox",1,"mat-autocomplete-panel",3,"id","ngClass"],["panel",""]],template:function(e,t){1&e&&(s.dc(),s.sc(0,G,3,2,"ng-template"))},directives:[o.j],styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),e})();const se=s.Rb(ne);let ae=(()=>{class e{constructor(e){this.elementRef=e}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(s.l))},e.\u0275dir=s.Fb({type:e}),e})(),le=(()=>{class e extends ae{}return e.\u0275fac=function(t){return re(t||e)},e.\u0275dir=s.Fb({type:e,selectors:[["","matAutocompleteOrigin",""]],exportAs:["matAutocompleteOrigin"],features:[s.wb]}),e})();const re=s.Rb(le),ce=new s.q("mat-autocomplete-scroll-strategy"),ue={provide:ce,deps:[F.a],useFactory:function(e){return()=>e.scrollStrategies.reposition()}},pe={provide:p.g,useExisting:Object(s.T)(()=>de),multi:!0};let he=(()=>{class e{constructor(e,t,i,o,n,s,a,l,r,c){this._element=e,this._overlay=t,this._viewContainerRef=i,this._zone=o,this._changeDetectorRef=n,this._dir=a,this._formField=l,this._document=r,this._viewportRuler=c,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=k.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new P.a,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(A.a)(()=>this.autocomplete&&this.autocomplete.options?Object(C.a)(...this.autocomplete.options.map(e=>e.onSelectionChange)):this._zone.onStable.pipe(Object(z.a)(1),Object(V.a)(()=>this.optionSelections))),this._scrollStrategy=s}get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(e){this._autocompleteDisabled=Object(w.b)(e)}ngAfterViewInit(){const e=this._getWindow();void 0!==e&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const e=this._getWindow();void 0!==e&&e.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Object(C.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object($.a)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Object($.a)(()=>this._overlayAttached)):Object(S.a)()).pipe(Object(m.a)(e=>e instanceof x.h?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return Object(C.a)(Object(E.a)(this._document,"click"),Object(E.a)(this._document,"touchend")).pipe(Object($.a)(e=>{const t=this._isInsideShadowRoot&&e.composedPath?e.composedPath()[0]:e.target,i=this._formField?this._formField._elementRef.nativeElement:null,o=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&t!==this._element.nativeElement&&(!i||!i.contains(t))&&(!o||!o.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)}))}writeValue(e){Promise.resolve(null).then(()=>this._setTriggerValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){const t=e.keyCode;if(t!==j.e||Object(j.o)(e)||e.preventDefault(),this.activeOption&&t===j.d&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){const i=this.autocomplete._keyManager.activeItem,o=t===j.l||t===j.b;this.panelOpen||t===j.k?this.autocomplete._keyManager.onKeydown(e):o&&this._canOpen()&&this.openPanel(),(o||this.autocomplete._keyManager.activeItem!==i)&&this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0)}}_handleInput(e){let t=e.target,i=t.value;"number"===t.type&&(i=""==i?null:parseFloat(i)),this._previousValue!==i&&(this._previousValue=i,this._onChange(i),this._canOpen()&&this._document.activeElement===e.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_floatLabel(e=!1){this._formField&&"auto"===this._formField.floatLabel&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const e=this._zone.onStable.pipe(Object(z.a)(1)),t=this.autocomplete.options.changes.pipe(Object(d.a)(()=>this._positionStrategy.reapplyLastPosition()),function(e,t=Y.a){var i;const o=(i=e)instanceof Date&&!isNaN(+i)?+e-t.now():Math.abs(e);return e=>e.lift(new H(o,t))}(0));return Object(C.a)(e,t).pipe(Object(V.a)(()=>{const e=this.panelOpen;return this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelOpen&&(this._overlayRef.updatePosition(),e!==this.panelOpen&&this.autocomplete.opened.emit()),this.panelClosingActions}),Object(z.a)(1)).subscribe(e=>this._setValueAndClose(e))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(e){const t=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(e):e,i=null!=t?t:"";this._formField?this._formField._control.value=i:this._element.nativeElement.value=i,this._previousValue=i}_setValueAndClose(e){e&&e.source&&(this._clearPreviousSelectedOption(e.source),this._setTriggerValue(e.source.value),this._onChange(e.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(e.source)),this.closePanel()}_clearPreviousSelectedOption(e){this.autocomplete.options.forEach(t=>{t!==e&&t.selected&&t.deselect()})}_attachOverlay(){null==this._isInsideShadowRoot&&(this._isInsideShadowRoot=!!Object(M.c)(this._element.nativeElement));let e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new L.d(this.autocomplete.template,this._viewContainerRef),e=this._overlay.create(this._getOverlayConfig()),this._overlayRef=e,e.keydownEvents().subscribe(e=>{(e.keyCode===j.e&&!Object(j.o)(e)||e.keyCode===j.l&&Object(j.o)(e,"altKey"))&&(this._resetActiveItem(),this._closeKeyEventStream.next(),e.stopPropagation(),e.preventDefault())}),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&e&&e.updateSize({width:this._getPanelWidth()})})),e&&!e.hasAttached()&&(e.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const t=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&t!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new F.b({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir})}_getOverlayPosition(){const e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){const t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}];let n;n="above"===this.position?o:"below"===this.position?t:[...t,...o],e.withPositions(n)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)}_canOpen(){const e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this._autocompleteDisabled}_getWindow(){var e;return(null===(e=this._document)||void 0===e?void 0:e.defaultView)||window}_scrollToOption(e){const t=this.autocomplete,i=Object(x.i)(e,t.options,t.optionGroups);if(0===e&&1===i)t._setScrollTop(0);else{const i=t.options.toArray()[e];if(i){const e=i._getHostElement(),o=Object(x.j)(e.offsetTop,e.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(o)}}}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(s.l),s.Kb(F.a),s.Kb(s.P),s.Kb(s.z),s.Kb(s.h),s.Kb(ce),s.Kb(R.b,8),s.Kb(D,9),s.Kb(o.d,8),s.Kb(I.d))},e.\u0275dir=s.Fb({type:e,inputs:{position:["matAutocompletePosition","position"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"],autocomplete:["matAutocomplete","autocomplete"],connectedTo:["matAutocompleteConnectedTo","connectedTo"]},features:[s.xb]}),e})(),de=(()=>{class e extends he{constructor(){super(...arguments),this._aboveClass="mat-autocomplete-panel-above"}}return e.\u0275fac=function(t){return be(t||e)},e.\u0275dir=s.Fb({type:e,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-autocomplete-trigger"],hostVars:7,hostBindings:function(e,t){1&e&&s.Wb("focusin",(function(){return t._handleFocus()}))("blur",(function(){return t._onTouched()}))("input",(function(e){return t._handleInput(e)}))("keydown",(function(e){return t._handleKeydown(e)})),2&e&&s.Ab("autocomplete",t.autocompleteAttribute)("role",t.autocompleteDisabled?null:"combobox")("aria-autocomplete",t.autocompleteDisabled?null:"list")("aria-activedescendant",t.panelOpen&&t.activeOption?t.activeOption.id:null)("aria-expanded",t.autocompleteDisabled?null:t.panelOpen.toString())("aria-owns",t.autocompleteDisabled||!t.panelOpen||null==t.autocomplete?null:t.autocomplete.id)("aria-haspopup",!t.autocompleteDisabled)},exportAs:["matAutocompleteTrigger"],features:[s.yb([pe]),s.wb]}),e})();const be=s.Rb(de);let me=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},providers:[ue],imports:[[F.c,x.g,x.e,o.c],I.a,x.g,x.e]}),e})();var ge=i("DtKQ"),fe=i("EY2u");i("3UWI");const ve=Object(M.f)({passive:!0});let _e=(()=>{class e{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return fe.a;const t=Object(w.d)(e),i=this._monitoredElements.get(t);if(i)return i.subject;const o=new P.a,n="cdk-text-field-autofilled",s=e=>{"cdk-text-field-autofill-start"!==e.animationName||t.classList.contains(n)?"cdk-text-field-autofill-end"===e.animationName&&t.classList.contains(n)&&(t.classList.remove(n),this._ngZone.run(()=>o.next({target:e.target,isAutofilled:!1}))):(t.classList.add(n),this._ngZone.run(()=>o.next({target:e.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",s,ve),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:o,unlisten:()=>{t.removeEventListener("animationstart",s,ve)}}),o}stopMonitoring(e){const t=Object(w.d)(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return e.\u0275fac=function(t){return new(t||e)(s.Tb(M.a),s.Tb(s.z))},e.\u0275prov=Object(s.Gb)({factory:function(){return new e(Object(s.Tb)(M.a),Object(s.Tb)(s.z))},token:e,providedIn:"root"}),e})(),ye=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[M.b]]}),e})();const Oe=new s.q("MAT_INPUT_VALUE_ACCESSOR"),we=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let xe=0;class ke{constructor(e,t,i,o){this._defaultErrorStateMatcher=e,this._parentForm=t,this._parentFormGroup=i,this.ngControl=o}}const Pe=Object(x.m)(ke);let Ae=(()=>{class e extends Pe{constructor(e,t,i,o,n,s,a,l,r,c){super(s,o,n,i),this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=l,this._formField=c,this._uid="mat-input-"+xe++,this.focused=!1,this.stateChanges=new P.a,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Object(M.e)().has(e));const u=this._elementRef.nativeElement,p=u.nodeName.toLowerCase();this._inputValueAccessor=a||u,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&r.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",e=>{let t=e.target;t.value||t.selectionStart||t.selectionEnd||(t.setSelectionRange(1,1),t.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===p,this._isTextarea="textarea"===p,this._isNativeSelect&&(this.controlType=u.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=Object(w.b)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=Object(w.b)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Object(M.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Object(w.b)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var e,t;const i=(null===(t=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===t?void 0:t.call(e))?null:this.placeholder;if(i!==this._previousPlaceholder){const e=this._elementRef.nativeElement;this._previousPlaceholder=i,i?e.setAttribute("placeholder",i):e.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){we.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(s.l),s.Kb(M.a),s.Kb(p.h,10),s.Kb(p.k,8),s.Kb(p.f,8),s.Kb(x.a),s.Kb(Oe,10),s.Kb(_e),s.Kb(s.z),s.Kb(D,8))},e.\u0275dir=s.Fb({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(e,t){1&e&&s.Wb("focus",(function(){return t._focusChanged(!0)}))("blur",(function(){return t._focusChanged(!1)}))("input",(function(){return t._onInput()})),2&e&&(s.Sb("disabled",t.disabled)("required",t.required),s.Ab("id",t.id)("data-placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.errorState)("aria-required",t.required.toString()),s.Cb("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[s.yb([{provide:N,useExisting:e}]),s.wb,s.xb]}),e})(),Ce=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},providers:[x.a],imports:[[ye,K],ye,K]}),e})();var Se=i("eMGv"),Ee=i("Qu3c"),Fe=i("Ludi"),Ie=i("zttm"),je=i("NQo5"),Me=i("8I9x");let Le=(()=>{class e{transform(e,t){return e?e.filter(e=>e.move===t):[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s.Jb({name:"filterLevelUpMoves",type:e,pure:!0}),e})();function Te(e,t){if(1&e&&(s.Pb(0,"mat-option",10),s.Lb(1,"app-pokemon",4),s.Zb(2,"slugify"),s.uc(3),s.Ob()),2&e){const e=t.$implicit;s.ec("value",e),s.zb(1),s.ec("slug",s.ac(2,3,e.pokemon)),s.zb(2),s.wc(" ",e.pokemon," ")}}function ze(e,t){if(1&e&&(s.Pb(0,"app-type-badge",17),s.uc(1),s.Ob()),2&e){const e=t.$implicit;s.ec("type",e),s.zb(1),s.vc(e)}}function Re(e,t){if(1&e&&(s.Nb(0),s.uc(1),s.Mb()),2&e){const e=t.$implicit;s.zb(1),s.vc(e)}}function Ne(e,t){1&e&&s.Lb(0,"app-pokemon",24)}function De(e,t){if(1&e&&(s.Nb(0),s.uc(1),s.Mb()),2&e){const e=s.Yb().$implicit;s.zb(1),s.wc(" ",e.value.hasHiddenAbility?"HA":"NON-HA"," ")}}function Ke(e,t){if(1&e&&(s.Pb(0,"td"),s.uc(1),s.Ob()),2&e){const e=t.$implicit,i=s.Yb().$implicit,o=s.Yb(6);s.Cb("is-em",o.isEggMove(i.value.moves[e])),s.zb(1),s.wc(" ",i.value.moves[e]," ")}}function Ve(e,t){if(1&e&&(s.Nb(0),s.Pb(1,"tr"),s.Pb(2,"td",19),s.Lb(3,"app-item",20),s.Zb(4,"slugify"),s.Ob(),s.Pb(5,"td",21),s.sc(6,Ne,1,0,"app-pokemon",22),s.Ob(),s.Pb(7,"td"),s.sc(8,De,2,1,"ng-container",9),s.Ob(),s.sc(9,Ke,2,3,"td",23),s.Pb(10,"td"),s.uc(11),s.Ob(),s.Ob(),s.Mb()),2&e){const e=t.$implicit,i=s.Yb(6);s.zb(1),s.Cb("is-owned",e.value.isOwned),s.zb(2),s.ec("slug",s.ac(4,7,e.key)),s.zb(3),s.ec("ngIf",i.hasMaxEggmoves(e.value)),s.zb(2),s.ec("ngIf",e.value.isOwned),s.zb(1),s.ec("ngxRepeat",4),s.zb(2),s.wc(" ",e.value.nature," ")}}function $e(e,t){if(1&e&&(s.Nb(0),s.Pb(1,"table",18),s.sc(2,Ve,12,9,"ng-container",15),s.Zb(3,"keyvalue"),s.Ob(),s.Mb()),2&e){const e=s.Yb(5);s.zb(2),s.ec("ngForOf",s.ac(3,1,e.sheetBreeadbles))}}const Ye=function(e){return{iconSlug:e}};function We(e,t){if(1&e&&(s.Lb(0,"app-grid-item",28),s.Zb(1,"slugify")),2&e){const e=s.Yb().$implicit,t=s.Yb(6);s.ec("pokemon",t.asPokemon(s.hc(3,Ye,s.ac(1,1,e.key))))}}function Be(e,t){if(1&e&&(s.Nb(0),s.sc(1,We,2,5,"app-grid-item",27),s.Mb()),2&e){const e=t.$implicit,i=s.Yb().$implicit,o=s.Yb(2).$implicit;s.zb(1),s.ec("ngIf",e.key!==o.name&&e.value.eggMoves.includes(i))}}function He(e,t){if(1&e&&(s.Nb(0),s.Pb(1,"div",25),s.uc(2),s.Ob(),s.Pb(3,"app-grid",26),s.sc(4,Be,2,1,"ng-container",15),s.Zb(5,"keyvalue"),s.Ob(),s.Mb()),2&e){const e=t.$implicit,i=s.Yb(5);s.zb(2),s.vc(e),s.zb(2),s.ec("ngForOf",s.ac(5,2,i.parentMoves))}}function qe(e,t){if(1&e&&(s.Lb(0,"app-grid-item",28),s.Zb(1,"slugify")),2&e){const e=s.Yb(2).$implicit,t=s.Yb(6);s.ec("pokemon",t.asPokemon(s.hc(3,Ye,s.ac(1,1,e.key))))}}function Xe(e,t){if(1&e&&(s.Nb(0),s.sc(1,qe,2,5,"app-grid-item",27),s.Mb()),2&e){const e=t.ngIf;s.zb(1),s.ec("ngIf",e.length)}}function Ze(e,t){if(1&e&&(s.Nb(0),s.sc(1,Xe,2,1,"ng-container",9),s.Zb(2,"filterLevelUpMoves"),s.Mb()),2&e){const e=t.$implicit,i=s.Yb().$implicit;s.zb(1),s.ec("ngIf",s.bc(2,1,e.value.levelUpMoves,i))}}function Ge(e,t){if(1&e&&(s.Nb(0),s.Pb(1,"div",25),s.uc(2),s.Ob(),s.Pb(3,"app-grid",26),s.sc(4,Ze,3,4,"ng-container",15),s.Zb(5,"keyvalue"),s.Ob(),s.Mb()),2&e){const e=t.$implicit,i=s.Yb(5);s.zb(2),s.vc(e),s.zb(2),s.ec("ngForOf",s.ac(5,2,i.parentMoves))}}function Ue(e,t){if(1&e&&(s.Nb(0),s.Pb(1,"div",12),s.Pb(2,"h2",13),s.uc(3),s.Ob(),s.sc(4,ze,2,2,"app-type-badge",14),s.Pb(5,"div"),s.Pb(6,"b"),s.uc(7,"Abilities:"),s.Ob(),s.sc(8,Re,2,1,"ng-container",15),s.Ob(),s.Pb(9,"div"),s.Pb(10,"b"),s.uc(11,"Hidden Ability:"),s.Ob(),s.uc(12),s.Ob(),s.Ob(),s.sc(13,$e,4,3,"ng-container",9),s.Pb(14,"div"),s.Pb(15,"h2"),s.uc(16,"Inheritance"),s.Ob(),s.Pb(17,"div",16),s.sc(18,He,6,4,"ng-container",15),s.Ob(),s.Ob(),s.Pb(19,"div"),s.Pb(20,"h2"),s.uc(21,"Leveling"),s.Ob(),s.Pb(22,"div",16),s.sc(23,Ge,6,4,"ng-container",15),s.Ob(),s.Ob(),s.Mb()),2&e){const e=s.Yb().$implicit,t=s.Yb(3);s.zb(3),s.wc("",e.name," information"),s.zb(1),s.ec("ngForOf",e.types),s.zb(4),s.ec("ngForOf",e.abilities),s.zb(4),s.wc(" ",e.hiddenAbility?e.hiddenAbility:"-",""),s.zb(1),s.ec("ngIf",t.sheetBreeadbles),s.zb(5),s.ec("ngForOf",t.eggMoves),s.zb(5),s.ec("ngForOf",t.eggMoves)}}function Je(e,t){if(1&e&&(s.Nb(0),s.sc(1,Ue,24,7,"ng-container",11),s.Mb()),2&e){const e=t.$implicit;s.Yb(3);const i=s.kc(2);s.zb(1),s.ec("ngIf",e)("ngIfElse",i)}}function Qe(e,t){if(1&e&&(s.Nb(0),s.sc(1,Je,2,2,"ng-container",0),s.Mb()),2&e){const e=s.Yb(2);s.zb(1),s.ec("ngxSubscribeOf",e.selectedPokemon$)}}function et(e,t){if(1&e){const e=s.Qb();s.Nb(0),s.Pb(1,"label",2,3),s.Lb(3,"app-pokemon",4),s.Pb(4,"input",5),s.Wb("focusin",(function(t){return s.mc(e),s.Yb().selectInputText(t)})),s.Ob(),s.Ob(),s.Pb(5,"mat-autocomplete",6,7),s.Wb("optionSelected",(function(t){return s.mc(e),s.Yb().selectPokemon(t)})),s.sc(7,Te,4,5,"mat-option",8),s.Zb(8,"async"),s.Ob(),s.sc(9,Qe,2,1,"ng-container",9),s.Mb()}if(2&e){const e=s.kc(2),t=s.kc(6),i=s.Yb();s.zb(3),s.ec("slug",i.selectedPokemon?i.selectedPokemon.iconSlug:"unknown"),s.zb(1),s.ec("formControl",i.control)("matAutocomplete",t)("matAutocompleteConnectedTo",e),s.zb(1),s.ec("displayWith",i.displayFn),s.zb(2),s.ec("ngForOf",s.ac(8,7,i.filteredPokemon)),s.zb(2),s.ec("ngIf",i.selectedPokemon$)}}function tt(e,t){1&e&&(s.Pb(0,"app-ball-guy-bubble"),s.uc(1,"The Pokemon you're looking for was not found. The database might not be up to date. "),s.Ob())}let it=(()=>{class e{constructor(e,t){this.database=e,this.spreadsheetFacade=t,this.placeHolderPokemon={id:"",name:"",dex:"",ability:"",isOwned:!0,hasHiddenAbility:!1,isShiny:!1,iconSlug:"",moves:[]},this.parentMoves=null,this.control=new p.b(""),this.breedables$=this.database.getBreedableLegality().pipe(Object(d.a)(e=>{this.breedables=e})),t.getCurrentSpreadsheet$().subscribe(e=>{e.hasBreedables&&(this.worksheets=e.worksheets.filter(e=>{var t;return"Breedables"===(null===(t=e.config)||void 0===t?void 0:t.type)}))}),this.filteredPokemon=this.control.valueChanges.pipe(Object(b.a)(""),Object(m.a)(e=>this._filter(e)))}_filter(e){var t;const i=this._normalizeValue(e);return(null===(t=this.breedables)||void 0===t?void 0:t.filter(e=>this._normalizeValue(e.pokemon).includes(i)))||[]}_normalizeValue(e){let t;return t="string"!=typeof e?(null==e?void 0:e.pokemon)||"":e,t.toLowerCase().replace(/\s/g,"")}displayFn(e){return e.pokemon}selectPokemon(e){this.selectedPokemon$=this.database.findPokemon(e.option.value.pokemon).pipe(Object(d.a)(e=>{var t;this.selectedPokemon=e,this.sheetBreeadbles={},null===(t=this.worksheets)||void 0===t||t.forEach(t=>{var i,o,n;const s=null===(i=t.data)||void 0===i?void 0:i.filter(t=>t.gsx$name.$t===e.name);(null==s?void 0:s.length)&&(null===(o=t.config)||void 0===o?void 0:o.ball)&&this.sheetBreeadbles&&(this.sheetBreeadbles[null===(n=t.config)||void 0===n?void 0:n.ball]=new f.a(s[0]))}),this.database.getEggMovesForPokemon(e.name).subscribe({next:e=>{this.eggMoves=e}}),this.database.getEggGroupParents(e.eggGroups).pipe(Object(g.a)(e=>{const t={};for(const i of e)t[i.name]=this.database.getMovesForPokemon(i.name);return Object(h.a)(t)})).subscribe(e=>{this.parentMoves=e})}))}isEggMove(e){var t;return null===(t=this.eggMoves)||void 0===t?void 0:t.includes(e)}asPokemon(e){return Object.assign(Object.assign({},this.placeHolderPokemon),e)}hasMaxEggmoves(e){var t,i;let o=0;const n=Math.min(null!==(i=null===(t=this.eggMoves)||void 0===t?void 0:t.length)&&void 0!==i?i:-1,4);for(let s=0;s<4&&(!this.isEggMove(e.moves[s])||(o++,o!==n));s++);return o===n}selectInputText(e){e.target.select()}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(v.a),s.Kb(_.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-breeding"]],decls:3,vars:1,consts:[[4,"ngxSubscribe","ngxSubscribeOf"],["pokemonNotFound",""],["matAutocompleteOrigin","",1,"poke-autocomplete-input-wrapper"],["origin","matAutocompleteOrigin"],[3,"slug"],["placeholder","Select Pok\xe9mon","matInput","",1,"poke-autocomplete-input",3,"formControl","matAutocomplete","matAutocompleteConnectedTo","focusin"],["autoActiveFirstOption","",1,"poke-autocomplete",3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],[4,"ngIf","ngIfElse"],[1,"card"],[1,"m-0"],["size","small",3,"type",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"breeding-move-grid"],["size","small",3,"type"],[1,"breeding-pokemon-table"],[1,"ball-col"],["category","ball",3,"slug"],[1,"egg-col"],["matTooltip","This breedable has the maximum amount of egg moves!","slug","egg",4,"ngIf"],[3,"is-em",4,"ngxRepeat"],["matTooltip","This breedable has the maximum amount of egg moves!","slug","egg"],[1,"move-name"],["appearance","minimal"],[3,"pokemon",4,"ngIf"],[3,"pokemon"]],template:function(e,t){1&e&&(s.sc(0,et,10,9,"ng-container",0),s.sc(1,tt,2,0,"ng-template",null,1,s.tc)),2&e&&s.ec("ngxSubscribeOf",t.breedables$)},directives:[y.f,le,ge.a,Ae,p.a,de,p.i,p.c,ne,o.k,o.l,x.f,Se.a,l.a,y.c,Ee.b,Fe.a,Ie.a,je.a],pipes:[o.b,Me.a,o.f,Le],styles:['.poke-autocomplete .mat-option{padding:0 16px 0 0}.poke-autocomplete .mat-option-text{display:inline-flex;align-items:flex-end;height:48px}.poke-autocomplete-input{line-height:48px;color:rgba(0,0,0,.87);font-size:16px;flex-grow:1;border:none;outline:none}.poke-autocomplete-input-wrapper{display:flex;background:#fff;color:rgba(0,0,0,.87);min-width:112px;overflow:auto;-webkit-overflow-scrolling:touch;max-width:none;max-height:256px;position:relative;width:100%;border-top-left-radius:4px;border-top-right-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.breeding-move-grid{display:grid;grid-template-columns:fit-content(0) 1fr;grid-template-rows:1fr;gap:20px 0;grid-template-areas:". ."}.breeding-move-grid .move-name{white-space:nowrap;background:#2b2828;color:#fff;border-top-left-radius:4px;border-bottom-left-radius:4px;padding:12px;font-weight:500;z-index:1;box-shadow:0 3px 5px rgba(0,0,0,.4)}.breeding-move-grid .grid.minimal{background:#fff;border-top-right-radius:4px;border-bottom-right-radius:4px;padding:4px 8px;box-shadow:0 3px 5px rgba(0,0,0,.4)}.breeding-move-grid .grid.minimal .grid-item{background:rgba(117,104,226,.1)}.breeding-pokemon-table{background:#fff;border-radius:3px;border-collapse:collapse;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.breeding-pokemon-table tr:nth-child(2n){background:#efefef}.breeding-pokemon-table tr:not(.is-owned){background:#464646}.breeding-pokemon-table td{padding:3px 8px;text-align:center}.breeding-pokemon-table .pokesprite.ball{margin-top:2px;margin-bottom:-2px}.breeding-pokemon-table .ball-col{padding-right:0}.breeding-pokemon-table .egg-col{padding-left:0;padding-right:0;overflow:hidden}.breeding-pokemon-table .is-em{font-weight:500}.breeding-pokemon-table .pokesprite.egg{margin-top:-30px;margin-left:-20px;margin-right:-20px}'],encapsulation:2}),e})();var ot=i("itXk");let nt=(()=>{class e{transform(e){const t=e.pokemon;return t.isShiny=!0,t.isOwned=!!e.amountShinies,t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s.Jb({name:"shinyDexEntryToPokemon",type:e,pure:!0}),e})();function st(e,t){if(1&e&&(s.Nb(0),s.Lb(1,"app-grid-item",4),s.Zb(2,"shinyDexEntryToPokemon"),s.Mb()),2&e){const e=t.$implicit;s.zb(1),s.ec("pokemon",s.ac(2,1,e[1]))}}function at(e,t){if(1&e&&(s.Pb(0,"app-grid",2),s.sc(1,st,3,3,"ng-container",3),s.Ob()),2&e){const e=t.ngIf;s.zb(1),s.ec("ngForOf",e)}}function lt(e,t){if(1&e&&(s.Nb(0),s.sc(1,at,2,1,"app-grid",1),s.Zb(2,"async"),s.Mb()),2&e){const e=s.Yb();s.zb(1),s.ec("ngIf",s.ac(2,1,e.shinies$))}}const rt=[{path:"",component:u,children:[{path:"breeding",component:it},{path:"shiny-dex",component:(()=>{class e{constructor(e,t){this.databases=e,this.spreadsheets=t,this.allShinyWorksheets=[],this.partialShinyWorksheets=[]}ngOnInit(){this.shinies$=Object(ot.a)([this.spreadsheets.getCurrentSpreadsheet$(),this.databases.getPokemon()]).pipe(Object(V.a)(([e,t])=>{this.allShinyWorksheets=e.worksheets.filter(e=>{var t,i,o;return"shinies"===(null===(i=null===(t=e.config)||void 0===t?void 0:t.subType)||void 0===i?void 0:i.toLowerCase())&&Object(w.b)(null===(o=e.config)||void 0===o?void 0:o.includeShinies)}),this.partialShinyWorksheets=e.worksheets.filter(e=>{var t,i,o;return"shinies"!==(null===(i=null===(t=e.config)||void 0===t?void 0:t.subType)||void 0===i?void 0:i.toLowerCase())&&Object(w.b)(null===(o=e.config)||void 0===o?void 0:o.includeShinies)});const i={};for(const o of t)o.canBeShiny&&Object.assign(i,{[o.name]:{pokemon:o,amountShinies:0}});for(const o of this.allShinyWorksheets)if(o.data)for(const e of o.data){const t=e.gsx$name.$t;i[t]?i[t].amountShinies++:console.log("not found",t)}for(const o of this.partialShinyWorksheets)if(o.data)for(const e of o.data){const t=e.gsx$name.$t,o=!!e.gsx$isshiny.$t;(e.isShiny||o)&&(i[t]?i[t].amountShinies++:console.log("not found",t))}return Object(S.a)(Object.entries(i))}))}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(v.a),s.Kb(_.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-shiny-dex"]],decls:1,vars:1,consts:[[4,"ngIf"],["appearance","minimal",4,"ngIf"],["appearance","minimal"],[4,"ngFor","ngForOf"],[3,"pokemon"]],template:function(e,t){1&e&&s.sc(0,lt,3,3,"ng-container",0),2&e&&s.ec("ngIf",t.shinies$)},directives:[o.l,Fe.a,o.k,Ie.a],pipes:[o.b,nt],styles:[""],encapsulation:2}),e})()}]}];let ct=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(rt)],n.f]}),e})();var ut=i("PCNd"),pt=i("C7wK"),ht=i("21aE");let dt=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[ct,o.c,ut.a,pt.a,Ce,p.l,me,y.g,y.b,ht.a,y.d,Ee.c]]}),e})()}}]);