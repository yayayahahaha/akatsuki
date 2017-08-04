document.addEventListener("DOMContentLoaded", function() {
	var btns = document.querySelectorAll(".btn");
	for (var i = 0; i < btns.length; i++) {
		clickMaker(btns[i], i);
	}

	/* down below is content part, ignore it for temporally */
	return;
});

function clickMaker(obj, number, callback) {
	obj.onclick = function() {
		$(".perspectiveView").animate({
				scrollTop: document.all.forHeight.offsetHeight * number,
			},
			1000);
	}
}