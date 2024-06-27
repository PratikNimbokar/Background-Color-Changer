document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.color-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.style.backgroundColor = button.getAttribute('data-color');
        });
    });
});
