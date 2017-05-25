import $ from "jquery";

class Navigation {
constructor() { 
this.project = $(".project");
this.returnToGallery = $(".back");
this.portfolio = $(".gallery");
	
this.events();
}

events() {
console.log(this.project);
this.project.on("click", this.returnToGallery, this.console.bind(this));	
}

console(){
	
console.log("back button works");

this.project.toggleClass("project--is-visible");
this.portfolio.toggleClass("gallery--is-visible");
}

}

export default Navigation;