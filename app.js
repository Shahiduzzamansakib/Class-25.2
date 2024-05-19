let eye = document.querySelector('.eye')
let eye2 = document.querySelector('.eye2')
let input = document.querySelector('.input')

eye.addEventListener('click' ,function(){
   
   input.type = "text";
   eye.style.display = "none";
   eye2.style.display = "block";
});
eye2.addEventListener('click' ,function(){
  
   input.type = "password";
   eye2.style.display = "none";
   eye.style.display = "block";
});