$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  $(".bg-img1").css({
    width: (100+scroll/20)+"%",
    top: -(scroll/20)+"%",
    "-webkit-filter": "blur("+(scroll/100)+"px)",
    filter: "blur("+(scroll/10)+"px)",
    opacity: 70/scroll,
  });
});