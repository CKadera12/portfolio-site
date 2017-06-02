import $ from "jquery";
import WorkLoad from "./modules/WorkLoad";
import Project from "./modules/Project";  
import RevealOnScroll from "./modules/RevealOnScroll"; 
import Modal from "./modules/Modal"; 
import Form from "./modules/Form"; 
import Fade from "./modules/Fade";
import Parallax from "./modules/ParallaxMouse";
import ChangeProject from "./modules/ChangeProject";
import PositionChange from "./modules/PositionChange.js";
//import Type from "./modules/Type";
       
new WorkLoad($("#fedwatch"), "fedwatch.html");
new WorkLoad($("#tonyhinchcliffe"), "tony-hinchcliffe.html");
new WorkLoad($("#brandoningram"), "brandon-ingram.html");
new WorkLoad($("#bout"), "bout.html");
new WorkLoad($("#49ers"), "49ers.html");  
//new RevealOnScroll($(".card"), "80%");  
new Project('.card');
new Project('.project__back');
new ChangeProject('#fedwatch');
new ChangeProject('#bout');


var positionChange = new PositionChange();
var parallax = new Parallax();
var fade = new Fade(); 
var modal = new Modal(); 
var form = new Form(); 
//var type = new Type(); 