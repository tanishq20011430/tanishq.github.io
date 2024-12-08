document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Custom Cursor Transition Effect
    cursor.style.transition = "transform 0.1s ease, left 0.1s ease, top 0.1s ease";

    // Dynamic Cursor Effect on Hovering Links and Buttons
    const interactiveElements = document.querySelectorAll('.interactive');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });

    // Navigation Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active-section');
            });

            // Show target section with a slide-in effect
            targetSection.classList.add('active-section');

            // Smooth scroll to target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Home Section Animations with Dynamic Timings
    gsap.from('.name-title', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('.subtitle', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.7,
        ease: 'power3.out'
    });

    gsap.from('.social-links a', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        delay: 1.0
    });

    // Project Cards Animation with Scroll Trigger and Parallax Effect
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
            scrub: true // Adds smooth scrub effect while scrolling
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out'
    });

    // Skills Animation with Dynamic Direction and Delays
    gsap.from('.skill-category', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.5
    });

    // Contact Form Animation with Interactive Delays
    gsap.from('.contact-form input, .contact-form textarea, .contact-form button', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.3
    });
});

// Form Submission (Improved with Dynamic Feedback and Visual Effects)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // Basic Form Validation
    if (!name || !email || !message) {
        showFeedback('error', 'Please fill in all the fields!');
        return;
    }

    // Simulate form submission success
    showFeedback('success', `Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);

    // Clear the form after submission
    form.reset();
});

// Function to show dynamic feedback on form submission
function showFeedback(type, message) {
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('form-feedback', type);
    feedbackElement.textContent = message;
    document.body.appendChild(feedbackElement);

    // Animate feedback element
    gsap.from(feedbackElement, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power2.out',
    });

    setTimeout(() => {
        gsap.to(feedbackElement, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => feedbackElement.remove()
        });
    }, 3000);
}

// Dynamic Scroll Animations
gsap.utils.toArray('.dynamic-scroll').forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            markers: false
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
});
