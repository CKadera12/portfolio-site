import $ from "jquery";

class Project {
constructor(element) { 
	this.elementClicked = element;
	this.portfolio = $(".portfolio");
	var gallery = $(".gallery");
	var project = $(".project");
	this.returnToGallery = $(".back");
	var portfolioHeader = $(".portfolio__header");
	
	this.events();
}
	
	events(){
//this.elementClicked.click(this.toggle.bind(this));
this.portfolio.on("click", this.elementClicked, this.toggle.bind(this));

$(document).keyup(this.keyPressHandler.bind(this));
 }

  keyPressHandler(e) {
    if ((e.keyCode == 27) && ($(".project").hasClass("project--is-visible")))
	{
		console.log("esc pressed");
		$(".gallery").addClass("gallery--is-visible");
     	$(".project").removeClass("project--is-visible");
		
    }
  }

//this.project.on("click", this.elementClicked, toggle.bind(this));
//this.elementClicked.click(this.toggle.bind(this));

	
toggle(){
	console.log("working");
	window.scrollTo(0, 900);
	
	$(".project").toggleClass("project--is-visible");
	$(".gallery").toggleClass("gallery--is-visible");
}
}

export default Project;




/*if ($(".portfolio__header").text() == "Portfolio")
	{
		$(".portfolio__header").text("Return to Gallery");
	}
		else
		{
		$(".portfolio__header").text("Portfolio");	
		}*/
		
		//$(".portfolio__header").toggleClass("portfolio__view");