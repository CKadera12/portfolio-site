import $ from "jquery";
import WorkLoad from "./modules/WorkLoad";
import Project from "./modules/Project";  
import RevealOnScroll from "./modules/RevealOnScroll"; 
import Modal from "./modules/Modal"; 
import Form from "./modules/Form"; 
import Navigation from "./modules/Navigation";
      
new WorkLoad($("#fedwatch"), "fedwatch.html");
new WorkLoad($("#tonyhinchcliffe"), "tony-hinchcliffe.html");
new WorkLoad($("#brandoningram"), "brandon-ingram.html");
new WorkLoad($("#bout"), "bout.html");
new WorkLoad($("#49ers"), "49ers.html");
new Project($(".card"));
new Project($(".portfolio__header"));


//new RevealOnScroll($(".card"), "90%");  
var modal = new Modal(); 
var form = new Form();
var navigation = new Navigation();