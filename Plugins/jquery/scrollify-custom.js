$(function() {
	
    $.scrollify({
        section : ".panel",
      interstitialSection : ".footer",
        easing: "easeOutExpo",
        scrollSpeed: 800,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
      });
  });