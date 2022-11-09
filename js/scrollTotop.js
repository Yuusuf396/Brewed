const header = document.querySelector('#header');
const nav = document.querySelector('.navbar');
 
const navHeight = nav.getBoundingClientRect().height;

 
// const linksDiv = document.querySelector('.nav_ul')

const stickyNav = function (entries) {
  const [entry] = entries;
  
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
} 
 
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin:`-${navHeight}px`,
});

headerObserver.observe(header);

 
 


  
let mybutton = document.getElementById("myBtn");

 
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    console.log('w');
  } else {
    mybutton.style.display = "none";
  }
}
 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 


 
 
 

// reveal = () => {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("available");
//     } else {
//       reveals[i].classList.remove("available");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);
