!function(o,t,n,a){"use strict";o.gsap.registerPlugin(t.MotionPathPlugin,n.DrawSVGPlugin,a.GSDevTools),o.gsap.set("#foundlogo",{autoAlpha:0}),o.gsap.timeline().add(function(){let t=o.gsap.timeline();return t.to("#foundlogo",{autoAlpha:0}),t}()),a.GSDevTools.create()}(gsap,MotionPathPlugin,DrawSVGPlugin,GSDevTools);