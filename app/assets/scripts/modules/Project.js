import $ from "jquery";

class Project {
constructor(element) { 
	this.clickElement = element;
	this.portfolio = $(".gallery");
	this.project = $(".project");
	this.events();
}

events() { 
/*this.clickElement.live("click", this.toggleTheMenu.bind(this));*/
this.clickElement.click("click", this.toggleTheMenu.bind(this));
}

toggleTheMenu() {
	this.project.toggleClass("project--is-visible");
	this.portfolio.toggleClass("gallery--is-visible");
}
} 

export default Project;