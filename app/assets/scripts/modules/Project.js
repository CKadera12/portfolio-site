import $ from "jquery";

class Project {
constructor() {
	this.card = $(".card");
	this.portfolio = $(".portfolio");
	this.project = $(".project");
	
	this.events();
}

events() {
this.card.click(this.toggleTheMenu.bind(this));	
}

toggleTheMenu() {
	this.portfolio.toggleClass("portfolio--is-visible");
	this.project.toggleClass("project--is-visible");
}
} 

export default Project;