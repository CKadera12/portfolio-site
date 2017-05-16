import $ from "jquery";

class WorkLoad {
constructor(cardID, file){
$.ajaxSetup ({cache: true});
this.card = cardID;
this.project = $(".project");
this.newHTML = "/assets/ajax/" + file;

this.events();
}


events(){
	this.card.click(this.loadProject.bind(this));
}



loadProject() {
this.project.load(this.newHTML);
}
}

export default WorkLoad;