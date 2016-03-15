// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
// ############## PARALLAX 1 #####################
new ScrollMagic.Scene({triggerElement: "#parallax1"})
.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax1"})
.setTween(".page-one__section", {y: "20%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax1"})
.setTween(".page-one-text__h3", 2.5, {scale: 1.2})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax1"})
.setTween(".page-one-title__h1", 2.5, {scale: 1.2})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax1"})
.setTween(".page-one-windows-apps__img", 2.5, {scale: 1.2})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax1"})
.setTween(".page-one-windows-apps__img", {y: "500%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);


// ############## PARALLAX 2 #####################


new ScrollMagic.Scene({triggerElement: "#parallax2"})
.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);



new ScrollMagic.Scene({triggerElement: "#parallax3"})
.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
.addIndicators()
.addTo(controller);
