/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: #f0f0f0;
    color: #333;
    overflow-x: hidden;
    cursor: none;
    /* Hide the default cursor */
}

/* Custom Cursor */
.cursor {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ff6b6b;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
}


/* Navigation Styles */
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    animation: fadeIn 1s ease-out;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links li {
    margin: 0;
}

.nav-links a {
    text-decoration: none;
    color: #ff6b6b;
    font-weight: bold;
    font-size: 1.2rem;
    transition: color 0.4s ease, transform 0.4s ease;
}

.nav-links a:hover {
    color: #ff3b3b;
    transform: scale(1.1);
}

/* Sections */
section {
    min-height: 100vh;
    padding: 5rem 10%;
    display: none;
    background-color: #f0f0f0;
    transition: opacity 0.7s ease-out;
    opacity: 0;
    cursor: none;
    /* Hide the default cursor in sections */
}

.active-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    animation: slideIn 1s ease-out;
}


/* Home Section */
#home {
    background: linear-gradient(135deg, #e6f2ff 0%, #ffffff 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    position: relative;
    overflow: hidden;
    animation: fadeIn 1.5s ease-out;
}

.home-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 10;
    animation: slideUp 1.4s ease-out;
}

.name-title {
    font-size: 4rem;
    color: #ff6b6b;
    margin-bottom: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    opacity: 0;
    animation: fadeInUp 1.5s ease-out forwards, typewriter 4s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #ff6b6b;
    /* Cursor Effect */
}

/* Typewriter Effect */
@keyframes typewriter {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blinkTextCursor {
    from {
        border-right-color: #ff6b6b;
    }

    to {
        border-right-color: transparent;
    }
}

.subtitle {
    font-size: 1.6rem;
    color: #666;
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeInUp 1.5s ease-out 0.5s forwards;
    position: relative;
    z-index: 10;
}

/* Social Links Section */
.social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0;
    opacity: 0;
    animation: fadeInUp 1.5s ease-out 1s forwards;
    position: relative;
    z-index: 10;
}

.social-icon {
    color: #ff6b6b;
    font-size: 3rem;
    transition: transform 0.4s ease, color 0.4s ease;
    display: inline-block;
    text-align: center;
    transform: scale(0);
    animation: scaleIn 0.5s ease-out forwards;
}

.social-icon:hover {
    transform: scale(1.3);
    color: #ff3b3b;
}

/* Background Elements for Dynamic Effects */
.home-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.highlight {
    color: #ff6b6b;
    font-weight: bold;
    font-size: 5rem;
}

.name-highlight {
    color: #3b82f6;
    font-weight: bold;
    font-size: 5rem;
}

/* Typewriter Effect */
@keyframes typewriter {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blinkTextCursor {
    from {
        border-right-color: #ff6b6b;
    }

    to {
        border-right-color: transparent;
    }
}

/* Keyframe Animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Section Titles */
.section-title {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.8rem;
    color: #ff6b6b;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    animation: fadeIn 1.5s ease-out;
}

/* About Section */
.about-section {
    padding: 5rem 0;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.about-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.about-image {
    flex: 1 1 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(50px);
    opacity: 0;
    animation: fadeInUp 1.5s ease-out 0.3s forwards;
}

.about-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}

.about-text {
    flex: 2 1 600px;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.8;
    transform: translateY(50px);
    opacity: 0;
    animation: fadeInUp 1.5s ease-out 0.6s forwards;
}

.typing-intro {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid #ff6b6b;
    animation: typewriter 4s steps(30) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal;
}

.highlight2 {
    color: #ff6b6b;
    font-weight: bold;
    font-size: 1.4rem;
}

.name-highlight2 {
    color: #3b82f6;
    font-weight: bold;
    font-size: 1.4rem;
}

/* Typewriter Effect */
@keyframes typewriter {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blinkTextCursor {
    from {
        border-right-color: #ff6b6b;
    }

    to {
        border-right-color: transparent;
    }
}

/* Section Title */
.section-title {
    font-size: 2.8rem;
    color: #ff6b6b;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    animation: fadeIn 1.5s ease-out;
}

/* Keyframe Animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}



/* Projects Section */
.projects-section {
    padding: 5rem 0;
    background: #ffffff;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.project-card {
    background: #f7f7f7;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(50px);
    animation: cardFadeInUp 1.5s ease-out forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.project-card:nth-child(1) {
    animation-delay: 0.2s;
}

.project-card:nth-child(2) {
    animation-delay: 0.4s;
}

.project-card:nth-child(3) {
    animation-delay: 0.6s;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-card h3 {
    font-size: 1.8rem;
    color: #ff6b6b;
    margin-bottom: 1rem;
    animation: fadeIn 2s ease-out;
}

.project-card p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    animation: fadeIn 2s ease-out;
}

.project-tags {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    animation: fadeIn 2s ease-out;
}

.project-tags span {
    background: #ff6b6b;
    color: #ffffff;
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
    font-size: 0.9rem;
}

/* Keyframe Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes cardFadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Skills Section */
.skills-section {
    padding: 5rem 0;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.skill-category {
    background: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(50px);
    opacity: 0;
    animation: fadeInUp 1.5s ease-out forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.skill-category:nth-child(1) {
    animation-delay: 0.2s;
}

.skill-category:nth-child(2) {
    animation-delay: 0.4s;
}

.skill-category:nth-child(3) {
    animation-delay: 0.6s;
}

.skill-category:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.skill-category h3 {
    font-size: 1.8rem;
    color: #ff6b6b;
    margin-bottom: 1rem;
}

.skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.skill-list li {
    margin: 0.8rem 0;
    background: #e6f2ff;
    padding: 0.7rem;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 500;
}

/* Keyframe Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}




/* Education Section */
.education-section {
    padding: 5rem 0;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.education-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.education-item {
    display: flex;
    align-items: center;
    background: #f7f7f7;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(50px);
    opacity: 0;
    animation: fadeInUp 1.5s ease-out forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.education-item:nth-child(1) {
    animation-delay: 0.2s;
}

.education-item:nth-child(2) {
    animation-delay: 0.4s;
}

.education-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.education-icon {
    font-size: 2.5rem;
    color: #ff6b6b;
    margin-right: 1.5rem;
}

.education-info {
    text-align: left;
}

.education-info h3 {
    font-size: 1.6rem;
    color: #ff6b6b;
    margin-bottom: 0.5rem;
}

.education-info p {
    font-size: 1rem;
    color: #666;
}

/* Keyframe Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Certifications Section */
.certifications-section {
    padding: 5rem 0;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.certification-card {
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(50px);
    animation: cardFadeInUp 1.5s ease-out forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.certification-card:nth-child(1) {
    animation-delay: 0.2s;
}

.certification-card:nth-child(2) {
    animation-delay: 0.4s;
}

.certification-card:nth-child(3) {
    animation-delay: 0.6s;
}

.certification-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.certification-icon {
    font-size: 2.5rem;
    color: #ff6b6b;
    margin-right: 1.5rem;
}

.certification-info {
    text-align: left;
}

.certification-info h3 {
    font-size: 1.6rem;
    color: #ff6b6b;
    margin-bottom: 0.5rem;
}

/* Keyframe Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes cardFadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Testimonials Section */
.testimonials-section {
    padding: 5rem 0;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.testimonials-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.testimonial-card {
    background: #f7f7f7;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(50px);
    animation: cardFadeInUp 1.5s ease-out forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.testimonial-card:nth-child(1) {
    animation-delay: 0.2s;
}

.testimonial-card:nth-child(2) {
    animation-delay: 0.4s;
}

.testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.testimonial-content {
    text-align: left;
}

.testimonial-content p {
    font-size: 1.2rem;
    font-style: italic;
    color: #555;
}

.testimonial-content h4 {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #ff6b6b;
}

/* Keyframe Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes cardFadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Contact Section */
.contact-section {
    padding: 5rem 0;
    background-color: #f0f0f0;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-section h2 {
    margin-bottom: 2rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.form-group {
    width: 100%;
    position: relative;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #fff;
    transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #ff6b6b;
    outline: none;
}

.contact-form button {
    background: #ff6b6b;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.contact-form button:hover {
    background: #ff3b3b;
    transform: scale(1.05);
}

/* Keyframe Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Work Experience Section */
.work-experience-section {
    padding: 5rem 0;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.work-experience-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 1.5s ease-out forwards;
}

.work-experience-item {
    background: #f7f7f7;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(50px);
    animation: fadeInUp 1.5s ease-out forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.work-experience-item:nth-child(1) {
    animation-delay: 0.2s;
}

.work-experience-item:nth-child(2) {
    animation-delay: 0.4s;
}

.work-experience-item:nth-child(3) {
    animation-delay: 0.6s;
}

.work-experience-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.company h3 {
    font-size: 1.8rem;
    color: #ff6b6b;
    margin-bottom: 1rem;
}

.role h4 {
    font-size: 1.5rem;
    color: #3b82f6;
    margin: 0.5rem 0;
}

.role p {
    font-size: 1rem;
    color: #666;
}

/* Keyframe Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}



/* Footer */
footer {
    text-align: center;
    padding: 2rem;
    background-color: #f0f0f0;
    margin-top: 3rem;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 1.5s ease-out 1s forwards;
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}

/* Keyframe Animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes hoverEffect {
    0% {
        transform: scale(1);
        color: #ff6b6b;
    }

    50% {
        transform: scale(1.2);
        color: #ff3b3b;
    }

    100% {
        transform: scale(1);
        color: #ff6b6b;
    }
}

/* Dark Mode Toggle Styles */
.dark-mode-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 200;
}

.toggle-label {
    display: inline-block;
    width: 50px;
    height: 25px;
    background: #ccc;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition: background 0.4s;
}

.toggle-label::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.4s;
}

input[type="checkbox"]:checked+.toggle-label {
    background: #ff6b6b;
}

input[type="checkbox"]:checked+.toggle-label::after {
    transform: translateX(25px);
}

/* Dark Mode Styles */
body.dark-mode {
    background-color: #333;
    color: #f0f0f0;
}

nav.dark-mode {
    background-color: #444;
}

.nav-links a.dark-mode {
    color: #f0f0f0;
}

.name-title.dark-mode {
    color: #ff6b6b;
}

/* Responsive Styles */
@media (max-width: 768px) {
    /* Adjust Navigation */
    nav {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem 2%;
    }

    .nav-links {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .nav-links a {
        font-size: 1rem;
    }

    /* Home Section */
    #home {
        padding: 2rem;
        height: auto;
    }

    .name-title {
        font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .social-icon {
        font-size: 2rem;
    }

    /* Sections */
    section {
        padding: 2rem 5%;
    }

    .section-title {
        font-size: 2rem;
    }

    /* About Section */
    .about-content {
        flex-direction: column;
        gap: 1.5rem;
    }

    .about-image,
    .about-text {
        flex: 1 1 auto;
        text-align: center;
    }

    /* Projects Section */
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    /* Skills Section */
    .skills-container {
        flex-direction: column;
        gap: 1.5rem;
    }

    /* Certifications Section */
    .certifications-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    /* Work Experience Section */
    .work-experience-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    /* Contact Form */
    .contact-form {
        padding: 1rem;
    }

    /* Footer */
    footer {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    /* Additional Adjustments for Very Small Screens */
    .name-title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }

    .social-icon {
        font-size: 1.5rem;
    }

    .about-content {
        gap: 1rem;
    }

    .about-image img {
        width: 80%;
    }

    .contact-form input,
    .contact-form textarea {
        font-size: 0.9rem;
    }

    .contact-form button {
        font-size: 0.9rem;
        padding: 0.8rem 1.5rem;
    }
}
