function resize() {
  var imgWidth = parseInt($(".album-art .img").css("width"), 10);
  if (imgWidth === 0) {
    setTimeout(resize, 400);
  }
  $(".left-col-width").css("width", imgWidth + "px");
  
  if (parseInt($(window).width,10) >= 992) {
    var albumContainerHeight = parseInt($(".album-container").css("height"), 10);
    $('.lyric-container').css("min-height", albumContainerHeight + "px");
  }
  
  var containerHeight = parseInt($(".main-container").css("height"), 10);
  var backgroundHeight = parseInt($(".background-container").css("height"), 10);
  if (containerHeight > backgroundHeight) {
    $(".background-container, .overlay").css("height", containerHeight + "px");
  }
}

$(window).load(function(){
	resize();
});

$(window).resize(function() {
	resize();
});

$('#shuffle').on("click", function() {
	qm.newRandomQuote()
});

qm.init();
