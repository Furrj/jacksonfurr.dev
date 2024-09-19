const spelldle = document.getElementById("spelldle")
const chatter = document.getElementById("chatter")

const projects = [spelldle, chatter]
let count = 0;

function changeProject(movement) {
	count += movement;
	const curr = Math.abs(count % projects.length);
	projects.forEach((p, i) => {
		p.style.display = curr === i % projects.length ? "block" : "none";
	})
}