document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const subMenu = button.nextElementSibling;

        if (subMenu && subMenu.classList.contains('sub-menu')) {
            subMenu.classList.toggle('show-nav');
        }
    });
});