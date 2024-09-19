const spelldle = document.getElementById("spelldle")
const taskr = document.getElementById("taskr")

const projects = [spelldle, taskr]
let count = 0;

function changeProject(movement) {
	count += movement;
	const curr = count % projects.length;
	projects.forEach((p, i) => {
		p.style.display = curr === i % projects.length ? "block" : "none";
	})
}