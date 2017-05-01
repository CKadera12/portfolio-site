import $ from "jquery";

class WorkLoad {
	
constructor(){
$.ajaxSetup ({cache: true});
$(".card").click(function() {
	
	var newHTML = "/assets/styles/work/work1.html";
	
	$(".project-load").load(newHTML);
})
}
}

export default WorkLoad;