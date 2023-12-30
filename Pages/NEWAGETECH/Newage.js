const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
        this.classList.add('active'); // Add 'active' class to the clicked button
    });
});