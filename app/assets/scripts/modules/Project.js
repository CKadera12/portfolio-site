import $ from "jquery";

class Project {
constructor(element) { 
	this.clickElement = element;
	this.portfolio = $(".gallery");
	this.project = $(".project");
	this.returnToGallery = $(".back");
	this.portfolioHeader = $(".portfolio__header");
	this.events();
}

events() { 
/*this.clickElement.live("click", this.toggleTheMenu.bind(this));*/
this.clickElement.click (this.toggleTheMenu.bind(this));
}

toggleTheMenu() {
	if (this.portfolioHeader.text() == "Portfolio")
	{
		this.portfolioHeader.text("Return to Gallery");
	}
		else
		{
		this.portfolioHeader.text("Portfolio");	
		}
		
	this.portfolioHeader.toggleClass("portfolio__view");
	this.project.toggleClass("project--is-visible");
	this.portfolio.toggleClass("gallery--is-visible");
}
} 

export default Project;
