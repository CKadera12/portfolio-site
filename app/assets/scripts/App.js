import $ from "jquery";
import Project from "./modules/Project";  
import WorkLoad from "./modules/WorkLoad";
import RevealOnScroll from "./modules/RevealOnScroll"; 
      
var workLoad = new WorkLoad();
var project = new Project();  
new RevealOnScroll($(".card"), "90%");
new RevealOnScroll($(".contact__text-content"), "85%"); 