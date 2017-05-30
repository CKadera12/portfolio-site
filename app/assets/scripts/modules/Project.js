import $ from "jquery";

class Project {
constructor(element, parent) { 
	this.elementClicked = element;
	this.parentElement = parent;
	this.portfolio = $(".portfolio");
	this.gallery = $(".gallery"),
	this.project = $(".project"),
	this.returnToGallery = $(".back"),
	this.portfolioHeader = $(".portfolio__header");
	
	this.events();
}
	
	events(){
//this.elementClicked.click(this.toggle.bind(this));
this.parentElement.on("click", this.elementClicked, this.toggle.bind(this));
	}
	
	
	toggle() {
	console.log("working");
	window.scrollTo(0, 900);
	this.portfolioHeader.toggleClass("portfolio__view");
	this.project.toggleClass("project--is-visible");
	this.gallery.toggleClass("gallery--is-visible");
	}
}


export default Project;



/*
if (portfolioHeader.text() == "Portfolio")
	{
		portfolioHeader.text("Return to Gallery");
	}
		else
		{
		portfolioHeader.text("Portfolio");	
		} */
