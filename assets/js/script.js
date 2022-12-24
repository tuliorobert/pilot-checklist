const inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
    input.addEventListener('change', function() {
        if(this.checked) {
            this.parentElement.classList.add('checked');
        } else {
            this.parentElement.classList.remove('checked');
        }
    });
});