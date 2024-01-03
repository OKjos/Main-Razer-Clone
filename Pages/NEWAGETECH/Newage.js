const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active')); 
        this.classList.add('active'); 
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.final-submit-button');
    const errorContainer = document.querySelector('.error-container');

    button.addEventListener('click', function() {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Error: Failed to send';
        
        const existingErrorMessage = errorContainer.querySelector('.error-message');
        if (existingErrorMessage) {
            errorContainer.removeChild(existingErrorMessage);
        }
        
        errorContainer.appendChild(errorMessage);

        setTimeout(function() {
            errorContainer.removeChild(errorMessage);
        }, 1000); 
    });
});
