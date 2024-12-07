document.addEventListener('DOMContentLoaded', () => {
    
    // NavBar Transparency
    const navbar = document.querySelector('.navbar');
    const navbarLabels = document.querySelectorAll('.navbar a');
    const downArrow = document.getElementById('icon-down-arrow');
    let front = document.querySelector('.front');
    navbar.classList.add("navbar-transparent");
    navbarLabels.forEach(label => {
        label.classList.add("initial-color");
        });
    downArrow.classList.add("icon-initial-color");

    if (front) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            navbar.classList.remove("navbar-transparent");
            navbarLabels.forEach(label => {
                label.classList.remove("initial-color");
            });
            downArrow.classList.remove("icon-initial-color");
        } else {
            navbar.classList.add("navbar-transparent");
            navbarLabels.forEach(label => {
                label.classList.add("initial-color");
            });
            downArrow.classList.add("icon-initial-color");
        }
    });
    }

});
