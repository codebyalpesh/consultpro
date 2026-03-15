/* =====================================
ConsultPro Main JS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
    PRELOADER
    ===================================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        if (!preloader) return;

        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);

    });



    /* =====================================
    NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar = document.querySelector(".navbar-section");

    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);



    /* =====================================
    HERO TYPING ANIMATION
    ===================================== */

    const typingText = document.getElementById("typing-text");

    if (typingText) {

        const words = [
            "Business Consulting",
            "Growth Strategy",
            "Market Insights",
            "Financial Planning"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const current = words[wordIndex];

            typingText.textContent = deleting
                ? current.substring(0, charIndex--)
                : current.substring(0, charIndex++);

            let speed = deleting ? 60 : 120;

            if (!deleting && charIndex === current.length) {
                deleting = true;
                speed = 1500;
            }

            if (deleting && charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(typeEffect, speed);

        }

        typeEffect();
    }



    /* =====================================
    COUNTER ANIMATION
    ===================================== */

    const counters = document.querySelectorAll(".counter");

    if (counters.length) {

        const counterObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = +counter.dataset.target;

                let count = 0;
                const speed = target / 200;

                function update() {

                    count += speed;

                    if (count < target) {

                        counter.innerText = formatNumber(Math.floor(count));
                        requestAnimationFrame(update);

                    } else {

                        counter.innerText = formatNumber(target);

                    }

                }

                update();
                counterObserver.unobserve(counter);

            });

        });

        counters.forEach(c => counterObserver.observe(c));

    }

    function formatNumber(num) {

        let formatted;

        if (num >= 1000000) formatted = (num / 1000000).toFixed(1) + "M";
        else if (num >= 1000) formatted = (num / 1000).toFixed(1) + "K";
        else formatted = num;

        return formatted + "+"; // Add + sign

    }



    /* =====================================
    SCROLL REVEAL
    ===================================== */

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        reveals.forEach(el => {

            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();



    /* =====================================
    SMOOTH SCROLL
    ===================================== */

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        });

    });



    /* =====================================
    BACK TO TOP BUTTON
    ===================================== */

    const scrollBtn = document.getElementById("scrollTopBtn");
    const progressCircle = document.querySelector(".progress-circle");

    if (scrollBtn && progressCircle) {

        const circumference = 2 * Math.PI * 20;

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;

            const scrollPercent = scrollTop / docHeight;

            const offset = circumference - scrollPercent * circumference;

            progressCircle.style.strokeDashoffset = offset;

            if (scrollTop > 300) {
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.classList.remove("show");
            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }



    /* =====================================
    FAQ TOGGLE
    ===================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    if (faqItems.length) {

        faqItems.forEach(item => {

            const question = item.querySelector(".faq-question");

            question.addEventListener("click", () => {

                item.classList.toggle("active");

            });

        });

    }



    /* =====================================
    CLIENT CAROUSEL
    ===================================== */

    if ($(".clients-carousel").length) {

        $(".clients-carousel").owlCarousel({
            loop: true,
            margin: 50,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            smartSpeed: 800,
            dots: false,
            nav: false,
            center: true,
            autoWidth: true,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                992: { items: 5 }
            }
        });

    }



    /* =====================================
    TESTIMONIAL CAROUSEL
    ===================================== */

    $('.testimonials-carousel').owlCarousel({

        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        navText: [
            "<i class='fa-solid fa-chevron-left'></i>",
            "<i class='fa-solid fa-chevron-right'></i>"
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }

    });



    /* =====================================
    WHATSAPP FLOAT BUTTON
    ===================================== */

    const whatsappBtn = document.querySelector(".whatsapp-float");

    if (whatsappBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                whatsappBtn.style.opacity = "1";
                whatsappBtn.style.visibility = "visible";

            } else {

                whatsappBtn.style.opacity = "0";
                whatsappBtn.style.visibility = "hidden";

            }

        });

    }

});