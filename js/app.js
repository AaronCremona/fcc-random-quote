function resize() {
	var imgWidth = $(".album-art .img").css("width"),
		albumContainerHeight = $(".album-container").css("height");
	$(".left-col-width").css("width", imgWidth);
	$('.lyric-container').css("min-height", albumContainerHeight);
}

$(document).ready(function(){
	resize();

});

$(window).resize(function() {
	resize();
});

var qm = quoteMachine;
qm.initQM();