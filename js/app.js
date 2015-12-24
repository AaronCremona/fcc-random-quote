function resize() {
	var imgWidth = $(".album-art .img").css("width"),
		albumContainerHeight = $(".album-container").css("height");
	console.log(imgWidth);

	$(".left-col-width").css("width", imgWidth);
	$('.lyric-container').css("min-height", albumContainerHeight);
}

$(window).load(function(){
	resize();
});

$(window).resize(function() {
	resize();
});

qm.init();
