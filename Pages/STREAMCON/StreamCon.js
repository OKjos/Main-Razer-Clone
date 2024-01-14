document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button-test");
    const displayedImage = document.querySelector(".displayed-image");
   
    buttons.forEach(button => {
       button.addEventListener("click", function() {
         const imagePath = button.getAttribute("data-image");
   
         // Show the selected image
         displayedImage.src = imagePath;
       });
    });
   });