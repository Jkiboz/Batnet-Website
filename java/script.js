document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is working!");

    // Navigation menu toggle for mobile view
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-active');
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image slider (simplified example)
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    next.addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    });

    prev.addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    });

    showSlide(slideIndex);

    // Modal pop-up
    const modal = document.querySelector('.modal');
    const modalOpen = document.querySelector('.modal-open');
    const modalClose = document.querySelector('.modal-close');

    modalOpen.addEventListener('click', function() {
        modal.classList.add('is-active');
    });

    modalClose.addEventListener('click', function() {
        modal.classList.remove('is-active');
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.classList.remove('is-active');
        }
    });
});
