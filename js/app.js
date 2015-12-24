function resize() {
	var imgWidth = $(".album-art .img").css("width"),
		albumContainerHeight = $(".album-container").css("height");

	$(".left-col-width").css("width", imgWidth);
	$('.lyric-container').css("min-height", albumContainerHeight);
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
