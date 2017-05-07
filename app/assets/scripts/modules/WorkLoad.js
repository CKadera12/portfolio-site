import $ from "jquery";

class WorkLoad {
constructor(){
$.ajaxSetup ({cache: true});
$(".card").click(function() {
	
	var newHTML = "/assets/styles/work/fedwatch.html";
	
	
	$(".project").load(newHTML);
})
}
}

export default WorkLoad;