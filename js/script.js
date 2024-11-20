// Add custom JavaScript here

//js script to make navbar dark when user scroll vertical
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark');
      } else {
        navbar.classList.remove('bg-dark');
      }
    });
  }
  
  //invoke above function when dom content is loaded
  document.addEventListener('DOMContentLoaded', userScroll);