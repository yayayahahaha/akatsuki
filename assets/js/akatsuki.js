document.addEventListener("DOMContentLoaded", function() {
	var btns = document.querySelectorAll(".btn");
	for (var i = 0; i < btns.length; i++) {
		clickMaker(btns[i], i);
	}

	/* down below is content part, ignore it for temporally */
	return;
});

function messArray(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}