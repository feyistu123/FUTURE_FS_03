// ========================================
// ODAA MEDIUM CLINIC - MAIN JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE HAMBURGER MENU =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // ===== HERO STATS COUNTER ANIMATION =====
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const animateStats = () => {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const current = parseInt(stat.textContent);
                const increment = Math.ceil(target / 50);
                
                if (current < target) {
                    stat.textContent = Math.min(current + increment, target);
                }
            });
        };
        
        // Start counter when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const interval = setInterval(animateStats, 30);
                    setTimeout(() => clearInterval(interval), 2000);
                }
            });
        });
        
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            observer.observe(heroStats);
        }
    }
    
    // ===== TESTIMONIAL SLIDER =====
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentSlide = 0;
    
    if (testimonialCards.length > 0) {
        const prevBtn = document.querySelector('.slider-controls .prev');
        const nextBtn = document.querySelector('.slider-controls .next');
        
        function showSlide(index) {
            testimonialCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
        }
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
                showSlide(currentSlide);
            });
            
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % testimonialCards.length;
                showSlide(currentSlide);
            });
        }
        
        // Auto-slide every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialCards.length;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // ===== CONTACT FORM SUBMISSION =====
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                formMessage.innerHTML = '<p class="error">Please fill in all required fields.</p>';
                formMessage.style.color = '#E53E3E';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.innerHTML = '<p class="error">Please enter a valid email address.</p>';
                formMessage.style.color = '#E53E3E';
                return;
            }
            
            // Simulate form submission
            formMessage.innerHTML = '<p class="success">Thank you! Your message has been sent. We will get back to you soon.</p>';
            formMessage.style.color = '#2C7A7B';
            
            // Reset form
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        });
    }
    
    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ===== HEADER SCROLL EFFECT =====
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== WHATSAPP FLOATING BUTTON =====
    // Add pulse animation to WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    }
});

// ========================================
// ADDITIONAL CSS FOR PAGE SPECIFIC ELEMENTS
// (Added via JS to keep style.css clean)
// ========================================

const style = document.createElement('style');
style.textContent = `
    /* ===== PAGE HEADER ===== */
    .page-header {
        background: linear-gradient(135deg, #1A5A5B 0%, #2C7A7B 50%, #4A9A9B 100%);
        padding: 180px 0 80px;
        text-align: center;
        color: var(--white);
    }
    
    .page-header h1 {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 10px;
    }
    
    .page-header p {
        font-size: 1.2rem;
        opacity: 0.9;
    }
    
    /* ===== ABOUT PAGE ===== */
    .about-page { padding: 80px 0; }
    .about-page .about-grid { gap: 60px; align-items: center; }
    .about-page .about-image img { border-radius: var(--radius); width: 100%; height: 450px; object-fit: cover; }
    
    .mission-vision { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 30px; }
    .mv-card { background: var(--light-bg); padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--primary); }
    .mv-card i { color: var(--primary); font-size: 1.5rem; margin-bottom: 10px; }
    .mv-card h3 { margin-bottom: 8px; }
    .mv-card p { color: var(--text-light); font-size: 0.95rem; }
    
    /* ===== DOCTOR PROFILE ===== */
    .doctor-profile { padding: 80px 0; background: var(--light-bg); }
    .doctor-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .doctor-image img { border-radius: var(--radius); width: 100%; height: 400px; object-fit: cover; box-shadow: var(--shadow); }
    .doctor-details { margin-top: 20px; }
    .detail { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--gray); }
    .detail i { color: var(--primary); width: 24px; }
    
    /* ===== WHY CHOOSE US ===== */
    .why-choose { padding: 80px 0; }
    .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
    .feature-card { text-align: center; padding: 30px; background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); transition: var(--transition); }
    .feature-card:hover { transform: translateY(-5px); }
    .feature-icon { width: 60px; height: 60px; background: rgba(44, 122, 123, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 1.6rem; color: var(--primary); }
    .feature-card h3 { margin-bottom: 10px; }
    .feature-card p { color: var(--text-light); font-size: 0.95rem; }
    
    /* ===== SERVICES PAGE ===== */
    .all-services { padding: 80px 0; }
    .service-section { margin-bottom: 60px; padding-bottom: 60px; border-bottom: 1px solid var(--gray); }
    .service-section:last-child { border-bottom: none; }
    .service-section-header { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
    .service-icon-large { width: 70px; height: 70px; background: rgba(44, 122, 123, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--primary); flex-shrink: 0; }
    .service-section-header h2 { font-size: 1.8rem; }
    .service-section-header p { color: var(--text-light); }
    .service-details ul { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
    .service-details ul li { padding: 6px 0; display: flex; align-items: center; gap: 10px; }
    .service-details ul li i { color: var(--primary); }
    
    .lab-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .lab-category { background: var(--light-bg); padding: 20px; border-radius: var(--radius); }
    .lab-category h4 { color: var(--primary); margin-bottom: 10px; }
    .lab-category ul { list-style: none; display: block; }
    .lab-category ul li { padding: 4px 0; font-size: 0.9rem; }
    
    .circumcision-info ul { display: block !important; }
    .circumcision-info ul li { padding: 6px 0; }
    
    /* ===== BLOG PAGE ===== */
    .blog-page { padding: 80px 0; }
    .blog-grid-full { display: flex; flex-direction: column; gap: 50px; }
    .blog-article { background: var(--white); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
    .blog-article-image { position: relative; height: 300px; }
    .blog-article-image img { width: 100%; height: 100%; object-fit: cover; }
    .blog-category { position: absolute; top: 16px; left: 16px; background: var(--primary); color: var(--white); padding: 6px 18px; border-radius: 50px; font-size: 0.8rem; font-weight: 600; }
    .blog-article-content { padding: 40px; }
    .blog-article-content h2 { font-size: 1.8rem; margin-bottom: 12px; }
    .article-meta { display: flex; gap: 20px; margin-bottom: 16px; color: var(--text-light); font-size: 0.9rem; }
    .article-meta i { margin-right: 6px; }
    .blog-article-content h3 { margin: 20px 0 12px; color: var(--primary); }
    .blog-article-content ul { list-style: none; display: block; margin-bottom: 16px; }
    .blog-article-content ul li { padding: 4px 0; padding-left: 24px; position: relative; }
    .blog-article-content ul li::before { content: "✓"; position: absolute; left: 0; color: var(--primary); font-weight: bold; }
    .blog-article-content .btn-primary { margin-top: 16px; }
    
    /* ===== CONTACT PAGE ===== */
    .contact-page { padding: 80px 0; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    .contact-info-box { background: var(--light-bg); padding: 40px; border-radius: var(--radius); }
    .contact-info-box h2 { margin-bottom: 16px; }
    .contact-detail { display: flex; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--gray); }
    .contact-detail:last-child { border-bottom: none; }
    .contact-icon { width: 50px; height: 50px; background: var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); font-size: 1.2rem; flex-shrink: 0; }
    .contact-detail h4 { margin-bottom: 4px; }
    .contact-detail p { color: var(--text-light); }
    .contact-detail a { color: var(--text-dark); text-decoration: none; }
    .contact-detail a:hover { color: var(--primary); }
    
    .contact-social { margin-top: 24px; }
    .contact-social .social-links { display: flex; gap: 12px; margin-top: 8px; }
    
    .contact-form-box { background: var(--white); padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow); }
    .contact-form-box h2 { margin-bottom: 24px; }
    .contact-form .form-group { margin-bottom: 16px; }
    .contact-form label { display: block; font-weight: 500; margin-bottom: 4px; }
    .contact-form input, .contact-form textarea { width: 100%; padding: 12px 16px; border: 2px solid var(--gray); border-radius: 8px; font-family: 'Inter', sans-serif; transition: var(--transition); }
    .contact-form input:focus, .contact-form textarea:focus { border-color: var(--primary); outline: none; }
    .form-message { margin-top: 16px; font-weight: 500; }
    
    .map-section { margin-top: 60px; }
    .map-section h2 { text-align: center; margin-bottom: 24px; }
    .map-container { border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
    .map-note { text-align: center; margin-top: 12px; color: var(--text-light); }
    .map-note i { color: var(--primary); }
    
    /* ===== RESPONSIVE ===== */
    @media (max-width: 992px) {
        .services-grid { grid-template-columns: 1fr 1fr; }
        .features-grid { grid-template-columns: 1fr 1fr; }
        .about-grid { grid-template-columns: 1fr; }
        .doctor-grid { grid-template-columns: 1fr; }
        .contact-grid { grid-template-columns: 1fr; }
        .lab-grid { grid-template-columns: 1fr 1fr; }
        .mission-vision { grid-template-columns: 1fr; }
        .blog-article-image { height: 200px; }
    }
    
    @media (max-width: 768px) {
        .hero-text h1 { font-size: 2.5rem; }
        .hero-stats { grid-template-columns: 1fr 1fr; gap: 16px; padding: 20px; }
        .services-grid { grid-template-columns: 1fr; }
        .features-grid { grid-template-columns: 1fr; }
        .nav-menu { display: none; }
        .nav-menu.active { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%; background: var(--white); padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .hamburger { display: flex; }
        .service-details ul { grid-template-columns: 1fr; }
        .lab-grid { grid-template-columns: 1fr; }
        .blog-article-content { padding: 24px; }
        .blog-article-content h2 { font-size: 1.4rem; }
        .page-header { padding: 140px 0 50px; }
        .page-header h1 { font-size: 2.2rem; }
        .header-top .contact-info { display: none; }
        .contact-info-box { padding: 24px; }
        .contact-form-box { padding: 24px; }
    }
    
    @media (max-width: 480px) {
        .hero-text h1 { font-size: 2rem; }
        .hero-stats { grid-template-columns: 1fr 1fr; gap: 12px; padding: 16px; }
        .stat-number { font-size: 1.8rem; }
        .section-header h2 { font-size: 1.8rem; }
        .service-section-header { flex-direction: column; text-align: center; }
        .service-section-header h2 { font-size: 1.4rem; }
        .blog-article-image { height: 150px; }
    }
`;

document.head.appendChild(style);