
var input_text=document.querySelector('input');
var nav_bottom=document.querySelector('.nav_bottom');

input_text.onfocus=function(){
       nav_bottom.style.display='block';
   
 }

 input_text.onblur = function () {
    nav_bottom.style.display = 'none';
}