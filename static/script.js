document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTitleAnimations();
    scheduleAnalytics();
    runWhenIdle(initDeferredFeatures, 1500);
});

function runWhenIdle(callback, timeout) {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout });
    } else {
        setTimeout(callback, timeout);
    }
}

function initDeferredFeatures() {
    initIntersectionAnimations();
    initAnchors();
    initCounters();
    initAboutText();
    initFaq();
    initServices();
    initPricing();
    initParallax();
    initPointerEffects();
    initStaggerDelays();
}

function initIntersectionAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: .1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-in, .works-card').forEach((el) => observer.observe(el));
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    if (navbar && window.innerWidth > 809) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.pageYOffset > 50);
        }, { passive: true });
    }

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuClose = document.getElementById('menuClose');
    if (!menuToggle || !mobileMenu || !menuClose || !navbar) return;

    const closeMenu = () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        navbar.classList.remove('hidden');
        document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        navbar.classList.toggle('hidden');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    menuClose.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
}

function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
    });
}

function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (!statNumbers.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            animateCounter(el, parseInt(el.dataset.target, 10));
            counterObserver.unobserve(el);
        });
    }, { threshold: .5 });

    statNumbers.forEach((el) => counterObserver.observe(el));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 1500;
    const stepTime = duration / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

function initTitleAnimations() {
    animateLettersOnView('whyUsTitle', 40);
    animateLettersOnView('worksTitle', 50);
    animateWordsOnView('footerTagline', 100);
    animateLettersOnView('faqTitle', 100);
    animateLettersOnView('worksHeroTitle', 80);
    animateLettersOnView('worksCtaTitle', 50);
    animateLettersOnView('aboutHeroTitle', 60);
    animateLettersOnView('aboutOriginsTitle', 80);
    animateLettersOnView('aboutTeamTitle', 50);
    animateLettersOnView('aboutCtaTitle', 50);
    animateLettersOnView('aboutAwardsTitle', 80);
    animateLettersOnView('processTitle', 60);
    animateLettersOnView('servicesTitle', 50);
    animateLettersOnView('pjMoreWorksTitle', 50);
    animateLettersOnView('pjCtaTitle', 50);

    const contactTitle = document.getElementById('contactTitle');
    if (contactTitle) {
        contactTitle.querySelectorAll('span').forEach((letter, i) => {
            setTimeout(() => letter.classList.add('visible'), 150 + i * 35);
        });
        const line = document.getElementById('contactLine');
        if (line) setTimeout(() => line.classList.add('visible'), 1200);
    }
}

function animateLettersOnView(id, delay) {
    const title = document.getElementById(id);
    if (!title) return;

    const letters = title.querySelectorAll('span');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            letters.forEach((letter, i) => setTimeout(() => letter.classList.add('visible'), i * delay));
            observer.unobserve(entry.target);
        });
    }, { threshold: .3 });

    observer.observe(title);
}

function animateWordsOnView(id, delay) {
    const title = document.getElementById(id);
    if (!title) return;

    const words = title.querySelectorAll('span');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            words.forEach((word, i) => setTimeout(() => word.classList.add('visible'), i * delay));
            observer.unobserve(entry.target);
        });
    }, { threshold: .3 });

    observer.observe(title);
}

function initAboutText() {
    const aboutText = document.getElementById('aboutText');
    if (!aboutText) return;

    const words = aboutText.querySelectorAll('.about-word');
    if (!words.length) return;

    const revealWords = () => {
        words.forEach((word, i) => {
            word.style.transitionDelay = Math.min(i * 25, 450) + 'ms';
            word.classList.add('visible');
        });
    };

    if (!('IntersectionObserver' in window)) {
        revealWords();
        return;
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealWords();
            observer.unobserve(entry.target);
        });
    }, { threshold: .2, rootMargin: '0px 0px -10% 0px' });

    observer.observe(aboutText);
}

function initFaq() {
    document.querySelectorAll('.faq-question').forEach((button) => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach((faqItem) => faqItem.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function initServices() {
    document.querySelectorAll('.service-item').forEach((item) => {
        item.addEventListener('click', () => {
            if (window.innerWidth > 1199) return;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.service-item').forEach((si) => si.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function initPricing() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const priceAmounts = document.querySelectorAll('.price-amount');
    toggleBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            const period = btn.dataset.period;
            priceAmounts.forEach((priceEl) => {
                const from = parseInt(priceEl.textContent.replace(/,/g, ''), 10);
                const to = period === 'annual' ? parseInt(priceEl.dataset.annual, 10) : parseInt(priceEl.dataset.monthly, 10);
                animatePrice(priceEl, from, to, 600);
            });
        });
    });
}

function animatePrice(element, from, to, duration) {
    const start = performance.now();
    const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from + (to - from) * eased);
        element.textContent = current.toLocaleString('en-US');
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    const heroBg = document.querySelector('.hero-bg-image');
    if (!heroContent && !heroBg) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = window.innerHeight;
        if (scrolled >= heroHeight) return;

        const parallaxValue = scrolled * .3;
        const opacityValue = 1 - scrolled / heroHeight;
        if (heroContent) {
            heroContent.style.transform = 'translateY(' + parallaxValue + 'px)';
            heroContent.style.opacity = opacityValue;
        }
        if (heroBg) heroBg.style.transform = 'translateY(' + scrolled * .15 + 'px) scale(' + (1 + scrolled * .0003) + ')';
    }, { passive: true });
}

function initPointerEffects() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.querySelectorAll('.btn-accent').forEach((button) => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transform = 'translate(' + x * .15 + 'px,' + y * .15 + 'px)';
        });
        button.addEventListener('mouseleave', () => { button.style.transform = ''; });
    });

    document.querySelectorAll('.service-card, .work-card, .pricing-card, .testimonial-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', e.clientX - rect.left + 'px');
            card.style.setProperty('--mouse-y', e.clientY - rect.top + 'px');
        });
    });
}

function initStaggerDelays() {
    const style = document.createElement('style');
    style.textContent = '.service-card::after,.work-card::after,.pricing-card::after,.calc-card::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background:radial-gradient(400px circle at var(--mouse-x,50%) var(--mouse-y,50%),rgba(255,255,255,.04),transparent 40%);pointer-events:none;z-index:0}.service-card,.work-card,.pricing-card,.calc-card{position:relative;overflow:hidden}.service-card>*,.work-card>*,.pricing-card>*,.calc-card>*{position:relative;z-index:1}';
    document.head.appendChild(style);

    ['.work-card', '.service-card', '.process-card', '.stat-card', '.testimonial-card', '.pricing-card', '.blog-card'].forEach((selector) => {
        document.querySelectorAll(selector).forEach((item, index) => {
            item.style.transitionDelay = index * 100 + 'ms';
        });
    });
}

function scheduleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { dataLayer.push(arguments); };

    let loaded = false;
    const loadAnalytics = () => {
        if (loaded) return;
        loaded = true;
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JR88DGD7HJ';
        script.async = true;
        script.onload = () => {
            gtag('js', new Date());
            gtag('config', 'G-JR88DGD7HJ', { anonymize_ip: true });
        };
        document.head.appendChild(script);
    };

    ['pointerdown', 'keydown', 'scroll'].forEach((eventName) => {
        window.addEventListener(eventName, loadAnalytics, { once: true, passive: true });
    });

    const loadAfterDelay = () => setTimeout(loadAnalytics, 10000);
    if (document.readyState === 'complete') {
        loadAfterDelay();
    } else {
        window.addEventListener('load', loadAfterDelay, { once: true });
    }
}
