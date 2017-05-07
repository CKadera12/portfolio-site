import $ from "jquery";

class Project {
constructor() { 
	this.card = $(".card");
	this.portfolio = $(".gallery");
	this.project = $(".project"); 
	
	this.events();
}

events() {
this.card.click(this.toggleTheMenu.bind(this));	
}

toggleTheMenu() {
	
	this.project.toggleClass("project--is-visible");
	this.portfolio.toggleClass("gallery--is-visible");
}
} 

export default Project;