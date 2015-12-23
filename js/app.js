function resizeGreyBackground() {
	var imgWidth = $(".album-art .img").css("width"),
		albumContainerHeight = $(".album-container").css("height");
	$(".left-col-width").css("width", imgWidth);
	$('.lyric-container').css("height", albumContainerHeight);
}

$(document).ready(function(){
	resizeGreyBackground();

});

$(window).resize(function() {
	resizeGreyBackground();
});

var qm = quoteMachine;
qm.initQM();