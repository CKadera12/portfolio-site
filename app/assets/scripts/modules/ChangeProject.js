import $ from 'jquery';

class ChangeProject {
	constructor(project){
		this.changeProject = project;
		this.portfolio = $(".portfolio");
		this.project = $(".project");
		
		this.newHTML = "/assets/ajax/" + project.split('#').pop() + '.html';
		
		this.events();
	}
	
	events(){
	this.portfolio.on("click", this.changeProject, this.loadProject.bind(this));	
		
	}
	
	loadProject() {
		this.project.load(this.newHTML);
		window.scrollTo(0, 850);
		
		
	}
}
export default ChangeProject;