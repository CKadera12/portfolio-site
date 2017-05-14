import $ from "jquery";
import WorkLoad from "./modules/WorkLoad";
import Project from "./modules/Project";  
import RevealOnScroll from "./modules/RevealOnScroll"; 
import Modal from "./modules/Modal";  
      
new WorkLoad($("#fedwatch"), "fedwatch.html");   
new WorkLoad($("#bout"), "bout.html");
new Project($(".card"));
new Project($(".project__close"));
//new RevealOnScroll($(".card"), "90%");  
var modal = new Modal();   