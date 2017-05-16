import $ from "jquery";
import WorkLoad from "./modules/WorkLoad";
import Project from "./modules/Project";  
import RevealOnScroll from "./modules/RevealOnScroll"; 
import Modal from "./modules/Modal";  
      
new WorkLoad($("#fedwatch"), "fedwatch.html");   
new WorkLoad($("#tonyhinchcliffe"), "tony-hinchcliffe.html"); 
new WorkLoad($("#brandoningram"), "brandon-ingram.html"); 
new WorkLoad($("#bout"), "bout.html");
/*new Project($(".portfolio__header"), "Portfolio");*/
new Project($(".card"));
new Project($(".project__header"));

//new RevealOnScroll($(".card"), "90%");  
var modal = new Modal();  