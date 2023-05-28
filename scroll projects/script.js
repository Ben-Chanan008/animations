const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes () {
	const triggerPoint = window.innerHeight / 5 * 4;
	console.log(triggerPoint)

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;
		// console.log(boxTop)
		if (boxTop < triggerPoint) {
			box.classList.add('show')
		} else {
			box.classList.remove('show')
		}
	});
}

// function check () {
// 	console.log(9);
// }
