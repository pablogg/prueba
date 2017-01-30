/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojbutton","ojs/ojmenu","ojs/ojlistview"],function(a,g){a.Ee=function(a,b,e){this.A=a;this.ba=b;this.KZ=e};a.Ee.prototype.bh=function(){this.ba.removeClass("oj-navigationlist-expanded oj-navigationlist-vertical")};a.Ee.prototype.Ax=function(){return Promise.resolve(null)};a.Ee.prototype.xx=function(){return Promise.resolve(null)};a.Ee.prototype.y0=function(){return!1};a.Ee.prototype.kP=function(){};a.Ee.prototype.BP=function(a,b){a.attr("aria-selected",
b?"true":"false")};a.Ee.prototype.MO=function(){var a=this.A.element.attr("role"),b=this.ba.attr("role");a&&"presentaion"!=a&&!b&&(this.A.element.attr("role","presentation"),this.ba.attr("role",a))};a.Ee.prototype.C0=function(){};a.Ee.prototype.D0=function(){};a.Ee.prototype.Bu=function(a,d,e){return b.u.Bu.apply(this.A,arguments)};a.Ee.prototype.Dx=function(a){return b.u.Dx.apply(this.A,arguments)};a.Ee.prototype.fh=function(a){return b.u.fh.apply(this.A,arguments)};a.Ee.prototype.Hu=function(a,
d){b.u.Hu.apply(this.A,arguments)};a.Ee.prototype.Init=function(){this.ba.addClass("oj-navigationlist-expanded oj-navigationlist-vertical")};a.Ee.prototype.yk=function(a){return b.u.yk.apply(this.A,arguments)};a.Ee.prototype.EB=function(){};a.Ee.prototype.g0=function(){};a.Ee.prototype.mx=function(){};a.Ee.prototype.Wp=function(a){return b.u.Wp.apply(this.A,arguments)};a.Ee.prototype.Xp=function(a){return b.u.Xp.apply(this.A,arguments)};a.Ni=function(b,d,e){a.Ni.u.constructor.call(this,b,d,e)};a.b.sa(a.Ni,
a.Ee,"oj.HorizontalNavListHandler");a.Ni.prototype.bh=function(){this.ba.removeClass("oj-navigationlist-expanded oj-navigationlist-horizontal");this.ba.find("."+this.A.zx).remove()};a.Ni.prototype.BP=function(a,b){a.attr("aria-pressed",b?"true":"false")};a.Ni.prototype.Bu=function(a,d,e){a===g.ui.keyCode.LEFT?a=this.A.jl()?g.ui.keyCode.DOWN:g.ui.keyCode.UP:a===g.ui.keyCode.RIGHT&&(a=this.A.jl()?g.ui.keyCode.UP:g.ui.keyCode.DOWN);a=b.u.Bu.call(this.A,a,d,e);"top"===this.A.V.options.edge&&this.A.N.elem[0].scrollIntoView(!1);
return a};a.Ni.prototype.Dx=function(a){return a===this.A.Bl||a===this.A.sl||a===this.A.Bg||a===this.A.kh};a.Ni.prototype.kP=function(a){a=this.A.TM(a);a.attr("role","button");a[0].hasAttribute("aria-selected")&&(a.attr("aria-pressed","false"),a.removeAttr("aria-selected"))};a.Ni.prototype.MO=function(){var a=this;this.ba.attr("role","toolbar");this.A.element.attr("role","presentation");this.A.element.find("."+this.A.Ug()+":visible").each(function(b){0<b&&a.Z3(this,b)})};a.Ni.prototype.Z3=function(a,
b){var e=g(a),f=e.prev();0<b&&e.is(":visible")&&f.length&&!f.is("li."+this.A.zx)&&e.before('\x3cli role\x3d"separator" class\x3d"'+this.A.zx+'"\x3e\x3c/li\x3e')};a.Ni.prototype.C0=function(a,b){this.Z3(a,b.index)};a.Ni.prototype.D0=function(a){a=g(a);var b=a.prev();b.length&&b.is("li."+this.A.zx)?b.remove():(a=a.next(),a.is("li."+this.A.zx)&&a.remove())};a.Ni.prototype.yk=function(a){return this.A.mg(g(a))[0].hasAttribute("aria-pressed")};a.Ni.prototype.Init=function(){this.ba.addClass("oj-navigationlist-expanded oj-navigationlist-horizontal")};
a.Ni.prototype.EB=function(){};a.$n=function(b,d,e){a.$n.u.constructor.call(this,b,d,e)};a.b.sa(a.$n,a.Ee,"oj.CollapsibleNavListHandler");a.$n.prototype.bh=function(){this.ba.removeClass("oj-navigationlist-collapsible oj-navigationlist-vertical")};a.$n.prototype.Init=function(){this.ba.addClass("oj-navigationlist-collapsible oj-navigationlist-vertical")};a.$n.prototype.Ax=function(a,d,e){return b.u.JO.apply(this.A,arguments)};a.$n.prototype.xx=function(a,d,e,f){return b.u.HO.apply(this.A,arguments)};
a.$n.prototype.y0=function(a,b,e,f){var h=0<e.children("."+this.A.ti()).length;if(b===this.A.Bg||b===this.A.kh)return b===this.A.Bg&&!this.A.jl()||b===this.A.kh&&this.A.jl()?this.A.fh(e)===this.A.Lm&&this.A.Qr(e,a,!0,f,!0,!0):this.A.fh(e)===this.A.Km&&this.A.wu(e,a,!0,f,!0,!0,!0),!0;if(h&&(b===g.ui.keyCode.ENTER||b===g.ui.keyCode.SPACE)){if(0>=e.length)return;this.A.fh(e)===this.A.Km?this.A.wu(e,null,!0,f,!0,!0,!0):this.A.fh(e)===this.A.Lm&&this.A.Qr(e,null,!0,f,!0,!0);return!0}return!1};a.$n.prototype.EB=
function(){};a.ee=function(b,d,e){a.ee.u.constructor.call(this,b,d,e);this.QZ=[]};a.b.sa(a.ee,a.$n,"oj.SlidingNavListHandler");a.ee.prototype.bh=function(){this.ba.removeClass("oj-navigationlist-slider oj-navigationlist-vertical");this.vw.remove()};a.ee.prototype.Kda=function(b,d,e,f,g){var k=this,l=this.A.hk();this.A.jl();var m=this.A.hk().hasClass("oj-focus-ancestor"),r;r=d?"sliderExpand":"sliderCollapse";a.$.ym(l,r,this.A.Hw(r)).then(function(){k.WW(b,d,e,f,m);g(null)})};a.ee.prototype.WW=function(a,
b,e,f,g){null!==this.A.zf&&(e&&(g&&this.A.hk().addClass("oj-focus-ancestor"),f&&0===f.button&&this.A.b0(!0),this.A.PG(e,f),this.A.b0(!1)),b?this.A.KO(a.children("."+this.A.ti())):this.A.IO(a.children("."+this.A.ti())))};a.ee.prototype.Ax=function(a,b,e){var f,h=new Promise(function(a){f=a}),k=g(a).parents(".oj-navigationlist-item-element:first"),l=k.children("."+this.A.ti()),m,r=null,t=k.closest("."+this.A.Wr);if(0<t.length){t.removeClass(this.A.Wr);k.addClass(this.A.Wr);var r=l.find("."+this.A.Ug()+
":eq(0)"),s=k.parentsUntil(t,"ul"),s=t.is(this.A.element)?s.get().concat(t.get()):s.get(),p=this,q,s=g(s.reverse());s.each(function(a,b){m=g(b).is(p.A.element)?p.A.WY():p.A.QY(g(b).parent());q=a===s.length-1?k:g(s.get(a+1)).parent();p.zpa(p.A.yg(q[0]),p.A.QY(q),m);p.QZ.push(q)})}b?this.Kda(k,!0,r,e,f):(this.WW(k,!0,r,e,!1),f(null));k.siblings().attr("aria-hidden","true");k.children("."+this.A.Sf()).children("."+this.A.co).attr("aria-hidden","true");l.removeAttr("aria-hidden");a.css("display","");
k.addClass("oj-skipfocus");return h};a.ee.prototype.xx=function(a,b,e,f){var g;b=new Promise(function(a){g=a});var k=a.children("."+this.A.ti()),l=a.parent();a.children("."+this.A.Sf()).children("."+this.A.co).removeAttr("aria-hidden");k.attr("aria-hidden","true");a.siblings().removeAttr("aria-hidden");a.removeClass("oj-skipfocus");a.removeClass(this.A.Wr);0===a.closest("."+this.A.Wr).length&&(l.closest("."+this.A.Ug()).addClass(this.A.Wr),this.A.element.is(l)&&this.A.element.addClass(this.A.Wr));
e?this.Kda(a,!1,k.parent(),f,g):(this.WW(a,!1,k.parent(),f,!1),g(null));this.xCa();return b};a.ee.prototype.BP=function(a,b){b?a.attr("aria-describedby","selectedLabel"):a.removeAttr("aria-describedby")};a.ee.prototype.fh=function(a){a=this.A.mg(a).attr("aria-expanded");return"true"===a?this.A.Lm:"false"===a?this.A.Km:this.A.$0};a.ee.prototype.Hu=function(a,b){b===this.A.Lm?(this.A.mg(a).attr("aria-expanded","true"),a.removeClass(this.A.d0).addClass(this.A.m0)):b===this.A.Km&&(this.A.mg(a).attr("aria-expanded",
"false"),a.removeClass(this.A.m0).addClass(this.A.d0))};a.ee.prototype.kP=function(a,b){var e=this.A.mg(a);e.attr("role","menuitem");b.attr("id")||b.uniqueId();var f=a.children("."+this.A.ti());0<f.length&&(e.attr("aria-haspopup","true"),f.attr("role","menu"),f.css("display",""),a.removeAttr("aria-expanded"),e.attr("aria-expanded","false"))};a.ee.prototype.MO=function(){this.ba.attr("role","menu");this.A.element.attr("role","presentation")};a.ee.prototype.Init=function(a){this.ba.addClass("oj-navigationlist-slider oj-navigationlist-vertical");
a.element.addClass("oj-navigationlist-current");this.Bqa(a);this.$ya()};a.ee.prototype.Bqa=function(a){var b;this.vw=g(document.createElement("div"));this.vw.addClass("oj-navigationlist-toolbar");this.UV=g(document.createElement("a"));this.xd=g(document.createElement("a"));this.xd.addClass("oj-navigationlist-previous-button");this.xd.css("visibility","hidden").attr("tabindex","-1");this.UV.addClass("oj-navigationlist-previous-link").attr("tabindex","-1");this.CD=g(document.createElement("label"));
this.CD.addClass("oj-navigationlist-current-header").text(this.A.WY());this.ZL=g(document.createElement("span"));this.ZL.attr("role","separator").attr("aria-orientation","vertical").addClass("oj-navigationlist-toolbar-separator");this.ai=g(document.createElement("button"));this.ai.addClass("oj-navigationlist-hierarchical-button").attr("tabindex","-1");this.fg=g(document.createElement("ul"));this.fg.addClass("oj-navigationlist-hierarchical-menu").hide();b=g(document.createElement("label"));b.addClass("oj-helper-hidden-accessible").attr("aria-hidden",
"true").attr("id","selectedLabel");b.text(this.KZ.F("selectedLabel"));this.UV.append(this.CD);this.vw.append(this.xd);this.vw.append(this.UV).append(this.ZL).append(this.ai).append(this.fg).append(b);this.ba.prepend(this.vw);this.zL(a.hierarchyMenuDisplayThresholdLevel)};a.ee.prototype.g0=function(a){var b=this.QZ.pop();b&&this.A.Qr(b,a,!0,null,!0,!0)};a.ee.prototype.$ya=function(){var a=this,b=this.fg.uniqueId().attr("id");this.fg.ojMenu({openOptions:{position:{my:"end top",at:"end bottom"}},select:function(b,
d){for(var h=d.item.nextAll(),k,l,m=a.QZ,r=d.item.data("key");0<m.length&&(l=m.pop(),k=a.A.yg(l[0]),a.A.Qr(g(l),b,!0,k,!0,!0),r!==k););h.remove();d.item.remove();a.fg.ojMenu("refresh")}});this.ai.ojButton({label:this.KZ.F("hierMenuBtnLabel"),display:"icons",icons:{start:"oj-fwk-icon oj-hier-icon"},menu:"#"+b,disabled:!0,chroming:"half"});this.xd.ojButton({label:this.KZ.F("previousIcon"),display:"icons",icons:{start:"oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext"},chroming:"half"})};
a.ee.prototype.zpa=function(a,b,e){var f;if(this.ai){var h=this.fg.find("li").length,k=g(document.createElement("li")),l=g(document.createElement("a"));l.attr("href","#");k.append(l);if(0<h){for(f=0;f<h;f++)0<f&&l.append(g(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));l.append(g(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"))}f=g(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");
f.text(e);l.append(f);k.data("key",a);this.fg.append(k);this.fg.ojMenu("refresh");this.zL(this.A.ce("hierarchyMenuDisplayThresholdLevel"));this.ai.ojButton("option","disabled",!1);this.xd.css("visibility","visible");this.A.hk().hasClass("oj-focus-ancestor")&&this.xd.attr("tabindex","0");this.CD.text(b)}};a.ee.prototype.mx=function(a){this.A.ce("hierarchyMenuDisplayThresholdLevel")!==a.hierarchyMenuDisplayThresholdLevel&&this.zL(a.hierarchyMenuDisplayThresholdLevel)};a.ee.prototype.zL=function(a){var b=
this.fg.find("li").length;-1===a||b<a?(this.ZL.css("visibility","hidden"),this.ai[0]===document.activeElement&&this.ba.focusin(),this.ai.css("visibility","hidden")):b>=a&&(this.ZL.css("visibility","visible"),this.ai.css("visibility","visible"))};a.ee.prototype.xCa=function(){if(this.ai){var a=this.fg.find("li").last().remove();this.fg.ojMenu("refresh");this.zL(this.A.ce("hierarchyMenuDisplayThresholdLevel"));0===this.fg.children("li").length?(this.ai.ojButton("option","disabled",!0),this.xd.css("visibility",
"hidden"),this.xd.attr("tabindex","-1"),this.CD.text(this.A.WY())):this.CD.text(a.children("a").text())}};a.ee.prototype.EB=function(a,b){a.removeClass(this.A.Wr);b.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden")};a.ee.prototype.Aaa=function(a){a?((a=this.fg.find("li").length)&&this.xd.attr("tabindex","0"),this.ai.attr("tabindex","0")):(this.xd.attr("tabindex","-1"),this.ai.attr("tabindex","-1"))};a.ee.prototype.Xp=function(a){g.contains(this.vw.get(0),
a.target)||this.fg.get(0)===a.relatedTarget||(this.Aaa(!0),b.u.Xp.apply(this.A,arguments))};a.ee.prototype.Wp=function(a){g.contains(this.vw.get(0),a.relatedTarget)||this.fg.get(0)===a.relatedTarget?this.A.LB():(null!=a.relatedTarget&&g.contains(this.ba.get(0),a.relatedTarget)||this.Aaa(!1),b.u.Wp.apply(this.A,arguments))};var b=function(b,d){function e(){}a.b.sa(e,b,"");g.extend(e.prototype,d);return e}(a.JV,{co:"oj-navigationlist-item-content",m0:"oj-expanded",d0:"oj-collapsed",Wr:"oj-navigationlist-current",
zx:"oj-navigationlist-divider",oma:"oj-navigationlist-category-divider",cQ:"oj-navigationlist-item-label",l2:"oj-navigationlist-icon-only",r2:"oj-navigationlist-item-icon",zMa:"oj-navigationlist-horizontal",K2:"oj-navigationlist-has-icons",L2:"oj-navigationlist-item-no-icon",Lna:"oj-navigationlist-item-title",M2:"oj-navigationlist",N2:"oj-navigationlist-touch",Mna:"oj-navigationlist-listview-container",rH:"IsTitleAttrDueToTruncation",HP:"oj-navigationlist-app-level",qQ:"oj-navigationlist-page-level",
lQ:"navigationListItemIconHastitle",Nna:"oj-navigationlist-nofollow-link",QY:function(a){a=this.OM(a);return a.is("a")?g.trim(a.text()):g.trim(a.find("."+this.Lna).text())},OM:function(a){var b=a.children("."+this.co);0===b.length&&(b=a.children("."+this.Sf()).children("."+this.co),0===b.length&&(b=a.children("."+this.Sf()).children(":not(."+this.jr()+"):not(."+this.Hn()+")")));return b},jl:function(){return"rtl"===this.V.nd()},eu:function(){this.Tc.MO();b.u.eu.apply(this,arguments)},Yha:function(a,
b){this.Tc.C0(a,b)},zZ:function(a){this.Tc.D0(a);b.u.zZ.apply(this,arguments)},Aca:function(a){var b,e,f,h=a.children();a.removeAttr("style").removeClass(this.K2).removeAttr("aria-hidden");for(a=0;a<h.length;a++)b=h[a],b=g(b),b.hasClass(this.zx)?b.remove():(e=this.OM(b),e.removeClass(this.co).removeClass(this.L2).removeAttr("aria-haspopup"),(f=e.children("."+this.r2))&&0<f.length&&(f.removeAttr("role"),f.removeAttr("aria-label"),this.JCa(f)),b.removeClass("oj-default").removeAttr("role").removeAttr("aria-disabled").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed"),
f=this.mg(b),f.removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-pressed"),e.children("."+this.cQ).contents().unwrap(),f.data(this.rH)&&f.removeAttr("title"),f=b.children("ul"),0<f.length?(this.Tc.EB(b,e,f),this.Aca(f)):this.Tc.EB(b,e))},UG:function(a){return a.hasClass(this.co)||a.hasClass(this.jr())||a.hasClass(this.Hn())?!1:b.u.UG.apply(this,arguments)},B0:function(a){return a.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)&&!a.hasClass(this.co)||a.hasClass("oj-component")},
qBa:function(a){var b={drillMode:"none"!==a.drillMode?"collapsible":"none",selection:null!==a.selection?[a.selection]:[],item:a.item,data:a.data,selectionMode:"single"};b.element=this.$s;b.item.focusable=function(a){return g(a.data).is("li")?!g(a.data).hasClass("oj-disabled"):!g(a.parentElement).hasClass("oj-disabled")};return b=g.extend(g.extend({},a),b)},WY:function(){return this.V.options.rootLabel?this.V.options.rootLabel:this.V.F("defaultRootLabel")},ZG:function(){this.V.element.attr("aria-multiselectable",
!1)},Xp:function(a){return this.Tc.Xp(a)},Wp:function(a){return this.Tc.Wp(a)},bH:function(){this.V.element.attr("tabIndex",0)},pP:function(){this.V.element.removeAttr("tabIndex")},q1:function(){this.V.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable")},pr:function(c){var d=this,e=c.V.element;e.addClass(this.M2);a.D.jf()&&e.addClass(this.N2);this.$s=e.children("ul:first");0===this.$s.length&&(this.$s=g(document.createElement("ul")),e.append(this.$s));e=g(document.createElement("div"));
e.addClass(this.Mna);this.$s.wrap(e);c=this.qBa(c);b.u.pr.call(this,c);this.element.removeClass("oj-component-initnode");this.V._on(this.V.element,{mouseup:function(a){d.VR(a)},"click .oj-navigationlist-previous-link":function(a){d.HC(a)},"keydown .oj-navigationlist-previous-link":function(a){a.keyCode===g.ui.keyCode.ENTER&&d.HC(a)},"click .oj-navigationlist-previous-button":function(a){d.HC(a)},"keydown .oj-navigationlist-previous-button":function(a){a.keyCode===g.ui.keyCode.ENTER&&d.HC(a)},"keydown .oj-navigationlist-element":function(a){a.keyCode!==
g.ui.keyCode.ESCAPE||a.isDefaultPrevented()||d.HC(a)},"mouseenter a.oj-navigationlist-item-content":function(a){a=g(a.currentTarget);var b=a.find("."+d.cQ);b[0].offsetWidth<b[0].scrollWidth&&!a.attr("title")&&(a.attr("title",b.text().trim()),a.data(d.rH,"true"))},"mouseleave a.oj-navigationlist-item-content":function(a){var b=g(a.currentTarget);b.data(d.rH)&&(b.removeData(d.rH),b.removeAttr("title"));d.VR(a)}})},HC:function(a){this.Tc.g0(a)},s$:function(){var b=this.V.options.drillMode,d=this.V.options.edge;
this.Tc="sliding"===b?new a.ee(this,this.V.element,this.V):"collapsible"===b?new a.$n(this,this.V.element,this.V):"none"===b&&"top"===d?new a.Ni(this,this.V.element,this.V):new a.Ee(this,this.V.element,this.V);this.Tc.Init(this.options);this.fda(this.V.options.navigationLevel)},fda:function(a){"none"===this.V.options.drillMode&&("application"===a?(this.V.element.addClass(this.HP),this.V.element.removeClass(this.qQ)):"page"===a&&(this.V.element.addClass(this.qQ),this.V.element.removeClass(this.HP)))},
VR:function(a){a=this.Hm(g(a.target));null!=a&&this.xB(a,"oj-active",!1)},Wz:function(){this.s$();b.u.Wz.apply(this,arguments)},RG:function(a){b.u.RG.apply(this,arguments);var d=this.Hm(g(a.target));d&&!d.hasClass("oj-disabled")&&this.xB(d,"oj-active",!0)},vB:function(a){this.VR(a);b.u.vB.apply(this,arguments)},t0:function(){return"oj-navigationlist-listview"},$O:function(){return"oj-navigationlist-element"},gj:function(){return"oj-navigationlist-item"},vp:function(){return"oj-navigationlist-focused-element"},
Ug:function(){return"oj-navigationlist-item-element"},Hn:function(){return"oj-navigationlist-collapse-icon"},jr:function(){return"oj-navigationlist-expand-icon"},LY:function(a){return"oj-navigationlist-depth-"+a},Sf:function(){return"oj-navigationlist-group-item"},ti:function(){return"oj-navigationlist-group"},lA:function(){return"oj-navigationlist-collapsible-transition"},Iw:function(){return this.lA()},JO:function(a,b,e){return this.Tc.Ax(a,b,e)},HO:function(a,b,e,f){return this.Tc.xx(a,b,e,f)},
Bu:function(a,b,e){return this.Tc.Bu(a,b,e)},Dx:function(a){return this.Tc.Dx(a)},fh:function(a){return this.Tc.fh(a)},Hu:function(a,b){this.Tc.Hu(a,b)},cP:function(a){var d=this.Hm(g(a.target));null!=d&&0!==d.length&&(this.Dk(d)?a.preventDefault():this.UG(g(a.target))||(d=this.OM(d).attr("href"),d&&"#"!==d&&0===a.button&&(a.shiftKey||a.ctrlKey)||(b.u.cP.apply(this,arguments),a.preventDefault())))},QG:function(a){var b,e,f;if(this.N)if(b=a.keyCode,e=this.N.elem,f=this.N.key,b===g.ui.keyCode.HOME||
b===g.ui.keyCode.END){var h;h=b===g.ui.keyCode.HOME?this.element.find("."+this.co+":visible").first().closest("."+this.Ug()):this.element.find("."+this.co+":visible").last().closest("."+this.Ug());this.PG(h,a);a.preventDefault()}else h=this.z0(a),b=this.Tc.y0(a,b,e,f),!0!==h&&!0!==b||a.preventDefault()},b0:function(a){this.kqa=a},X0:function(){var a=this;return function(){return!!a.kqa}},Xla:function(){return!0},dH:function(a,d,e){var f=this.N.elem;this.yk(f[0])&&!this.Uk(f)&&this.YS(a,f)&&(b.u.dH.apply(this,
arguments),this.ZU(f))},xB:function(a,b,e){var f;a=g(a);"oj-selected"===b&&this.Tc.BP(this.mg(a),e);f=a.children("."+this.Sf());0<f.length&&(a=g(f[0]));"oj-focus"===b?e?this.Oy(a):this.qv(a):e?a.addClass(b):a.removeClass(b);a.hasClass("oj-selected")||a.hasClass("oj-hover")||a.hasClass("oj-active")||a.hasClass("oj-disabled")?a.removeClass("oj-default"):a.addClass("oj-default")},yk:function(a){return!g(a).hasClass("oj-disabled")&&this.Tc.yk(g(a))},Ek:function(a,b,e){return"ready"!==a?this.V._trigger(a,
b,e):!0},Aj:function(a,b,e){if("selection"===a){var f=e._context,g=f&&f.bl&&f.bl.items;g&&(f.bl.item=g,f.bl.items=void 0);b&&0<b.length?this.V.option(a,b[0],e):this.V.option(a,null,e)}else this.V.option(a,b,e);this.options[a]=b},j1:function(a){return null!=a.data||null!=a.drillMode||null!=a.item||null!=a.display||null!=a.edge},Ega:function(){return"oj-navigationlist-option-defaults"},mx:function(a,d){var e={eka:[]},f;void 0!==a.hierarchyMenuDisplayThresholdLevel&&this.Tc.mx(a);void 0!==a.navigationLevel&&
this.fda(a.navigationLevel);void 0!==a.selection&&(f=a.selection);e.nKa=b.u.mx.call(this,a,d);void 0!==f&&void 0===a.selection&&e.eka.push("selection");void 0!==f&&(a.selection=f);return e},dP:function(a){var d;if(void 0!==a.selection)if(d=a.selection){var e=this.ce("selection");e&&0!==e.length&&e[0]===d?delete a.selection:(e=this.Ue(d))&&this.yk(e)?this.YS(null,g(e))?(a.selection=[d],this.ZU(g(e))):delete a.selection:delete a.selection}else a.selection=[];b.u.dP.call(this,a)},ce:function(a){var b=
this.V.option(a);return"selection"===a?b?[b]:[]:null===b?this.options[a]:b},Yc:function(){return a.Components.Yc(this.V.element)},GB:function(a,d){!a.hasClass("oj-disabled")&&this.yk(a[0])&&(!this.Uk(a)&&this.YS(d,a)?(b.u.GB.apply(this,arguments),this.ZU(a)):this.PG(a,d))},YS:function(a,b){var e=this.yg(b[0]);return this.Ek("beforeSelect",a,{item:b,key:e})},ZU:function(a){if(this.V.element.hasClass(this.Nna))return!1;var b=this.OM(a);a=b.attr("href");b=b.attr("target");return a&&"#"!==a?(b&&"_self"!==
b?window.open(a,b):window.location.href=a,!0):!1},Uk:function(a){var b;b=this.ce("selection");a=this.yg(a[0]);return-1<b.indexOf(a)?!0:!1},kEa:function(a,b){a.attr("title")||a.attr("title",b)},JCa:function(a){a.data(this.lQ)?a.removeData(this.lQ):a.removeAttr("title")},Qw:function(a,d){var e=g(a);if(e.hasClass(this.oma))e.removeClass(this.Ug()),e.removeClass(this.vp()),e.removeClass(this.gj()),e.removeAttr("aria-selected"),e.children().remove(),e.attr("role","separator");else{var f=this.Hn(),h=this.jr(),
k=this.r2,l=e.children("."+this.Sf()),m;0<l.length?(l.addClass(this.gj()),m=l.children(":not(."+h+"):not(."+f+")"),h=l.children("."+h),0===h.length&&(h=l.children("."+f)),h.attr("role","presentation"),h.removeAttr("aria-labelledby"),e.hasClass("oj-disabled")&&l.addClass("oj-disabled")):m=e.children().first();m.addClass(this.co);f=m.wrapInner('\x3cspan class\x3d"'+this.cQ+'"\x3e\x3c/span\x3e').find("."+k);0<f.length?(f.insertBefore(f.parent()),f.attr("title")&&f.data(this.lQ,f.attr("title")),"icons"===
this.V.options.display&&(this.V.element.addClass(this.l2),k=this.QY(e),f.attr("aria-label",k),f.attr("role","img"),this.kEa(f,k)),e.closest("ul").addClass(this.K2)):m.addClass(this.L2);e.hasClass("oj-disabled")?this.mg(e).attr("aria-disabled","true"):0<l.length?l.addClass("oj-default"):e.addClass("oj-default");this.Tc.kP(e,m);b.u.Qw.apply(this,arguments)}},getNodeBySubId:function(a){var b;if(null===a)return this.element?this.element[0]:null;b=a.subId;return"oj-navigationlist-item"===b?(a=a.key,a=
this.Ue(a)):"oj-navigationlist-previous-link"===b?this.Tc.xd?this.Tc.xd[0]:null:"oj-navigationlist-hierarchical-button"===b?this.Tc.ai?this.Tc.ai[0]:null:"oj-navigationlist-hierarchical-menu"===b?this.Tc.fg?this.Tc.fg[0]:null:null},getSubIdByNode:function(a){if(this.Tc.xd&&this.Tc.xd[0]===a)return{subId:"oj-navigationlist-previous-link"};if(this.Tc.ai&&this.Tc.ai[0]===a)return{subId:"oj-navigationlist-hierarchical-button"};if(this.Tc.fg&&this.Tc.fg[0]===a)return{subId:"oj-navigationlist-hierarchical-menu"};
a=this.Hm(a);return null!=a&&0<a.length&&(a=this.yg(a[0]),null!=a)?{subId:"oj-navigationlist-item",key:a}:null},getContextByNode:function(a){return(a=b.u.getContextByNode.call(this,a))&&"oj-listview-item"==a.subId?(a.subId="oj-navigationlist-item",a):null},refresh:function(){this.rca();this.s$();b.u.refresh.apply(this,arguments)},rca:function(){this.V.element.removeClass(this.l2);this.V.element.removeClass(this.HP);this.V.element.removeClass(this.qQ);this.Aca(this.element);this.Tc.bh()},destroy:function(){this.rca();
b.u.destroy.apply(this,arguments);this.$s.unwrap();this.$s.is(":empty")&&this.$s.remove();this.V.element.removeClass(this.M2+" "+this.N2);this.V._off(this.element,"click");this.V._off(this.element,"focus");this.V._off(this.element,"blur");this.V._off(this.element,"mouseover");this.V._off(this.element,"mousein");this.V._off(this.element,"mouseout");this.V._off(this.element,"keydown")}});(function(){a.Ra("oj.ojNavigationList",g.oj.baseComponent,{widgetEventPrefix:"oj",options:{currentItem:null,drillMode:"none",
edge:"start",hierarchyMenuDisplayThresholdLevel:0,rootLabel:null,selection:null,expanded:"auto",data:null,display:"all",navigationLevel:"page",item:{renderer:null,selectable:!0},beforeSelect:null,beforeCollapse:null,beforeCurrentItem:null,collapse:null,beforeExpand:null,expand:null,optionChange:null},_ComponentCreate:function(){this._super();this.ab()},Nh:function(){this._super();this.Bh.Wz()},ph:function(a,b,e){this.Bh.Zia(a,b,e)},ab:function(){for(var a in this.options)this.Fea(a,this.options[a]);
this.$L(this.options.drillMode,this.options.display,this.options.edge);this.Bh=new b;a={V:this};a=g.extend(this.options,a);this.Bh.pr(a)},getNodeBySubId:function(a){return this.Bh.getNodeBySubId(a)},getSubIdByNode:function(a){return this.Bh.getSubIdByNode(a)},getContextByNode:function(a){return this.Bh.getContextByNode(a)},expand:function(a,b){this.Bh.sY(a,b,!0,!0)},collapse:function(a,b){this.Bh.kfa(a,b,!0)},getExpanded:function(){return this.Bh.getExpanded()},$L:function(a,b,e){if("none"!==a){if("icons"===
b)throw"Icon only navigation list should have drillMode set to 'none'.";if("top"===e)throw"Horizontal navigation list should have drillMode set to 'none'.";}},Fea:function(a,b){var e=!0;"drillMode"===a?e="none"===b||"collapsible"===b||"sliding"===b:"display"===a?e="all"===b||"icons"===b:"edge"===a&&(e="top"===b||"start"===b);if(!e)throw"Invalid value: "+b+" for key: "+a;},_setOption:function(a,b){this.Fea(a,b);switch(a){case "drillMode":this.$L(b,this.options.display,this.options.edge);break;case "display":this.$L(this.options.drillMode,
b,this.options.edge);break;case "edge":this.$L(this.options.drillMode,this.options.display,b)}return this._super(a,b)},_setOptions:function(a,b){var e,f=this.Bh.mx(a,b);for(e in a)0>f.eka.indexOf(e)&&this._setOption(e,a[e],b);f.nKa&&this.Bh.refresh();return this},Gj:function(){this.Bh.$ia()},hq:function(){this.Bh.XA()},refresh:function(){this._super();this.Bh.refresh()},whenReady:function(){return this.Bh.whenReady()},_destroy:function(){this.Bh.destroy();this._super();delete this.Bh}});a.Components.Wn({ojNavigationList:{hierarchyMenuDisplayThresholdLevel:a.Components.Ne(function(){return(a.Wc.De("oj-navigationlist-option-defaults")||
{}).hierarchyMenuDisplayThresholdLevel})}})})();a.Components.Xa("ojNavigationList","baseComponent",{properties:{currentItem:{type:"Object"},data:{},display:{type:"string"},drillMode:{type:"string"},edge:{type:"string"},expanded:{type:"Array|string"},hierarchyMenuDisplayThresholdLevel:{type:"number"},item:{},navigationLevel:{type:"string"},rootLabel:{type:"string"},selection:{type:"string"}},methods:{collapse:{},expand:{},getContextByNode:{},getExpanded:{},refresh:{},whenReady:{}},extension:{_widgetName:"ojNavigationList"}});
a.Components.register("oj-navigation-list",a.Components.getMetadata("ojNavigationList"))});