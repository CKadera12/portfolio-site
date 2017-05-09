 import $ from "jquery";
import Project from "./modules/Project";  
import WorkLoad from "./modules/WorkLoad";
import RevealOnScroll from "./modules/RevealOnScroll"; 
import Modal from "./modules/Modal";
      
var workLoad = new WorkLoad();
var project = new Project();  
new RevealOnScroll($(".card"), "90%");  
var modal = new Modal();