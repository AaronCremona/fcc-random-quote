function resizeGreyBackground() {
	var imgWidth = $(".album-art .img").css("width");
	console.log(imgWidth);
	$(".left-col-width").css("width", imgWidth);
}

$(document).ready(function(){
	resizeGreyBackground();

});

$(window).resize(function() {
	resizeGreyBackground();
});

var qm = quoteMachine;
qm.initQM();