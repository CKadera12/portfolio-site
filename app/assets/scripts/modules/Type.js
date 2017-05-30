import $ from "jquery";
import type from "mattboldt.typed.js";


class Type {
	constructor () {
document.addEventListener('DOMContentLoaded', function() {
	
	Typed.new('.hero__text', {
		strings: ["First sentence.", "second sentence."],
		typeSpeed: 0
	});
});
	}
}

export default Type;
