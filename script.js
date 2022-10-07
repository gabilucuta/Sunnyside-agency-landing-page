document.getElementById("hamburger").addEventListener("click", displayMenu);

var a = document.getElementById('mobileMenu');

function displayMenu(){
   if(a.style.opacity == '0')
   {
    a.classList.toggle('fade');
    a.style.opacity = '1';
   }else{
    a.style.opacity = '0';
   }
}