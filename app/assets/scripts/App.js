import $ from "jquery";
import WorkLoad from "./modules/WorkLoad";  
import Project from "./modules/Project";  

import Modal from "./modules/Modal";   
import Form from "./modules/Form";                        
import Fade from "./modules/Fade";                     
import ChangeProject from "./modules/ChangeProject";
//import PositionChange from "./modules/PositionChange.js"; 
      
new WorkLoad($("#fedwatch"), "fedwatch.html");
new WorkLoad($("#tonyhinchcliffe"), "tony-hinchcliffe.html");
new WorkLoad($("#brandoningram"), "brandon-ingram.html");
new WorkLoad($("#bout"), "bout.html");
new WorkLoad($("#49ers"), "49ers.html");
new WorkLoad($("#psycho"), "psycho.html");    
new Project('.card');
new Project('.project__back');
new ChangeProject('#fedwatch');     
new ChangeProject('#bout'); 
new ChangeProject('#49ers'); 
new ChangeProject('#brandon-ingram'); 
new ChangeProject('#tony-hinchcliffe'); 
 

//var positionChange = new PositionChange(); 
var fade = new Fade(); 
var modal = new Modal();  
var form = new Form(); 
//var type = new Type(); 