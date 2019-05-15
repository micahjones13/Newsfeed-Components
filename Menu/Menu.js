
const toggleMenu = (para) => {
  // Toggle the "menu--open" class on your menu refence. 
  
  para.classList.toggle('menu--open'); //DON"T NEED DOT
  console.log('triggered toggle menu');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (event) => {
  toggleMenu(menu);
});
