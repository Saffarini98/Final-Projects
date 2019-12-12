import $ from "jquery";

var animate = function(selector) {
  var targetSection = $(selector);
  var sectionTop = targetSection.offset().top;

  $(window).scroll(function(e) {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop()
    if (scrollTop + windowHeight > sectionTop) {
      if (!targetSection.hasClass("animated")) {
        targetSection.addClass("animated");

      }
    } else {
      // targetSection.removeClass("animated");
    }
    console.log({
      windowHeight,
      scrollTop,
      sectionTop
    });
  })
}

export default animate;