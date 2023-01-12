const firstTitle = document.querySelector(".welcome h1");
const menuIcon = document.querySelector("nav a");
const moveMenu = document.querySelector(".sideMenu");
const menuButton = document.querySelector(".menuButton");




// Request 1: Click to Change Text.

firstTitle.addEventListener("click", () => {
  firstTitle.textContent = "Have a Good Time!";
});

// Request 2: Click to Show/Close Menu.

menuIcon.addEventListener("click", () => {
  moveMenu.style.display = "block";
});


menuButton.addEventListener("click", () => {
  moveMenu.style.display = "none";
})



// Request 3: Click to Show More Content Boxes.


