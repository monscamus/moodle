/*
YUI 3.4.1 (build 4118)
Copyright 2011 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("event-resize",function(e){var b=e.Env.evt.dom_wrappers,d=e.config.win,c="event:"+e.stamp(d)+"resizenative",a;e.Event.define("windowresize",{on:(e.UA.gecko&&e.UA.gecko<1.91)?function(h,f,g){f._handle=e.Event._attach(["resize",function(i){g.fire(new e.DOMEventFacade(i,d,b[c]));}],{facade:false});}:function(i,g,h){var f=e.config.windowResizeDelay||100;g._handle=e.Event._attach(["resize",function(j){if(g._timer){g._timer.cancel();}g._timer=e.later(f,e,function(){h.fire(new e.DOMEventFacade(j,d,b[c]));});}],{facade:false});},detach:function(g,f){if(f._timer){f._timer.cancel();}f._handle.detach();}});},"3.4.1",{requires:["event-synthetic"]});