window.addEventListener('load',()=>{
    const p=document.getElementById('preloader');
    setTimeout(()=>{p.classList.add('hidden')},2000);
    initLenis();

    const heroTitle=document.getElementById('heroTitle');
    if(heroTitle){const words=heroTitle.querySelectorAll('span');words.forEach((word,i)=>{setTimeout(()=>{word.classList.add('visible')},800+i*100)})}
    
    const heroSubtitle=document.getElementById('heroSubtitle');
    if(heroSubtitle){const words=heroSubtitle.querySelectorAll('.hero-word-blur');words.forEach((word,i)=>{setTimeout(()=>{word.classList.add('visible')},1200+i*50)})}
    
    const heroCta=document.querySelector('.hero-cta');
    if(heroCta){setTimeout(()=>{heroCta.classList.add('visible')},2000)}
    
    const heroBadge=document.querySelector('.hero-badge');
    if(heroBadge){setTimeout(()=>{heroBadge.classList.add('visible')},2200)}
});

let lenisRafStarted=false;
function initLenis(){if(window.lenis)window.lenis.destroy();window.lenis=new Lenis();if(!lenisRafStarted){lenisRafStarted=true;function raf(time){if(window.lenis)window.lenis.raf(time);requestAnimationFrame(raf)}requestAnimationFrame(raf)}}

const observerOptions={threshold:.1,rootMargin:'0px 0px -50px 0px'};
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},observerOptions);
document.querySelectorAll('.animate-in, .works-card').forEach(el=>{observer.observe(el)});

const navbar=document.getElementById('navbar');
if(window.innerWidth>809){window.addEventListener('scroll',()=>{window.pageYOffset>50?navbar.classList.add('scrolled'):navbar.classList.remove('scrolled')})}

const menuToggle=document.getElementById('menuToggle');
const mobileMenu=document.getElementById('mobileMenu');
const menuClose=document.getElementById('menuClose');
menuToggle.addEventListener('click',()=>{menuToggle.classList.toggle('active');mobileMenu.classList.toggle('active');navbar.classList.toggle('hidden');if(mobileMenu.classList.contains('active')){document.body.style.overflow='hidden';if(window.lenis)window.lenis.destroy()}else{document.body.style.overflow='';initLenis()}});
menuClose.addEventListener('click',()=>{menuToggle.classList.remove('active');mobileMenu.classList.remove('active');navbar.classList.remove('hidden');document.body.style.overflow='';initLenis()});
mobileMenu.querySelectorAll('a').forEach(link=>{link.addEventListener('click',()=>{menuToggle.classList.remove('active');mobileMenu.classList.remove('active');navbar.classList.remove('hidden');document.body.style.overflow='';initLenis()})});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){const offset=80;const targetPosition=target.getBoundingClientRect().top+window.pageYOffset-offset;window.scrollTo({top:targetPosition,behavior:'smooth'})}})});

const statNumbers=document.querySelectorAll('.stat-number[data-target]');
const counterObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const el=entry.target;const target=parseInt(el.dataset.target);animateCounter(el,target);counterObserver.unobserve(el)}})},{threshold:.5});
statNumbers.forEach(el=>counterObserver.observe(el));
function animateCounter(element,target){let current=0;const increment=target/60;const duration=1500;const stepTime=duration/60;const timer=setInterval(()=>{current+=increment;if(current>=target){current=target;clearInterval(timer)}element.textContent=Math.floor(current)},stepTime)}

const whyUsTitle=document.getElementById('whyUsTitle');
if(whyUsTitle){const letters=whyUsTitle.querySelectorAll('span');const titleObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*40)});titleObserver.unobserve(entry.target)}})},{threshold:.3});titleObserver.observe(whyUsTitle)}

const worksTitle=document.getElementById('worksTitle');
if(worksTitle){const letters=worksTitle.querySelectorAll('span');const worksTitleObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*50)});worksTitleObserver.unobserve(entry.target)}})},{threshold:.3});worksTitleObserver.observe(worksTitle)}

const footerTagline=document.getElementById('footerTagline');
if(footerTagline){const words=footerTagline.querySelectorAll('span');const taglineObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){words.forEach((word,i)=>{setTimeout(()=>{word.classList.add('visible')},i*100)});taglineObserver.unobserve(entry.target)}})},{threshold:.3});taglineObserver.observe(footerTagline)}

const faqTitle=document.getElementById('faqTitle');
if(faqTitle){const letters=faqTitle.querySelectorAll('span');const faqTitleObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*100)});faqTitleObserver.unobserve(entry.target)}})},{threshold:.3});faqTitleObserver.observe(faqTitle)}

const contactTitle=document.getElementById('contactTitle');
if(contactTitle){const letters=contactTitle.querySelectorAll('span');letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},300+i*50)});
const line=document.getElementById('contactLine');if(line){setTimeout(()=>{line.classList.add('visible')},2500)}}

const worksHeroTitle=document.getElementById('worksHeroTitle');
if(worksHeroTitle){const letters=worksHeroTitle.querySelectorAll('span');const worksHeroObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*80)});worksHeroObserver.unobserve(entry.target)}})},{threshold:.3});worksHeroObserver.observe(worksHeroTitle)}

const worksCtaTitle=document.getElementById('worksCtaTitle');
if(worksCtaTitle){const letters=worksCtaTitle.querySelectorAll('span');const worksCtaObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*50)});worksCtaObserver.unobserve(entry.target)}})},{threshold:.3});worksCtaObserver.observe(worksCtaTitle)}

const aboutHeroTitle=document.getElementById('aboutHeroTitle');
if(aboutHeroTitle){const letters=aboutHeroTitle.querySelectorAll('span');const aboutHeroObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*60)});aboutHeroObserver.unobserve(entry.target)}})},{threshold:.3});aboutHeroObserver.observe(aboutHeroTitle)}

const aboutOriginsTitle=document.getElementById('aboutOriginsTitle');
if(aboutOriginsTitle){const letters=aboutOriginsTitle.querySelectorAll('span');const aboutOriginsObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*80)});aboutOriginsObserver.unobserve(entry.target)}})},{threshold:.3});aboutOriginsObserver.observe(aboutOriginsTitle)}

const aboutTeamTitle=document.getElementById('aboutTeamTitle');
if(aboutTeamTitle){const letters=aboutTeamTitle.querySelectorAll('span');const aboutTeamObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*50)});aboutTeamObserver.unobserve(entry.target)}})},{threshold:.3});aboutTeamObserver.observe(aboutTeamTitle)}

const aboutCtaTitle=document.getElementById('aboutCtaTitle');
if(aboutCtaTitle){const letters=aboutCtaTitle.querySelectorAll('span');const aboutCtaObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*50)});aboutCtaObserver.unobserve(entry.target)}})},{threshold:.3});aboutCtaObserver.observe(aboutCtaTitle)}

const aboutAwardsTitle=document.getElementById('aboutAwardsTitle');
if(aboutAwardsTitle){const letters=aboutAwardsTitle.querySelectorAll('span');const aboutAwardsObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*80)});aboutAwardsObserver.unobserve(entry.target)}})},{threshold:.3});aboutAwardsObserver.observe(aboutAwardsTitle)}

const processTitle=document.getElementById('processTitle');
if(processTitle){const letters=processTitle.querySelectorAll('span');const processTitleObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*60)});processTitleObserver.unobserve(entry.target)}})},{threshold:.3});processTitleObserver.observe(processTitle)}

const servicesTitle=document.getElementById('servicesTitle');
if(servicesTitle){const letters=servicesTitle.querySelectorAll('span');const servicesTitleObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*50)});servicesTitleObserver.unobserve(entry.target)}})},{threshold:.3});servicesTitleObserver.observe(servicesTitle)}

const pjMoreWorksTitle=document.getElementById('pjMoreWorksTitle');
if(pjMoreWorksTitle){const letters=pjMoreWorksTitle.querySelectorAll('span');const pjMoreWorksObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*50)});pjMoreWorksObserver.unobserve(entry.target)}})},{threshold:.3});pjMoreWorksObserver.observe(pjMoreWorksTitle)}

const pjCtaTitle=document.getElementById('pjCtaTitle');
if(pjCtaTitle){const letters=pjCtaTitle.querySelectorAll('span');const pjCtaObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){letters.forEach((letter,i)=>{setTimeout(()=>{letter.classList.add('visible')},i*50)});pjCtaObserver.unobserve(entry.target)}})},{threshold:.3});pjCtaObserver.observe(pjCtaTitle)}

const aboutText=document.getElementById('aboutText');
if(aboutText){const words=aboutText.querySelectorAll('.about-word');const aboutSection=document.querySelector('.about');window.addEventListener('scroll',()=>{const rect=aboutSection.getBoundingClientRect();const sectionHeight=rect.height;const scrollProgress=Math.max(0,Math.min(1,-rect.top/(sectionHeight-window.innerHeight)));words.forEach((word,i)=>{const wordProgress=scrollProgress*words.length-i;if(wordProgress>0){word.classList.add('visible')}else{word.classList.remove('visible')}})})}

document.querySelectorAll('.faq-question').forEach(button=>{button.addEventListener('click',()=>{const item=button.parentElement;const isActive=item.classList.contains('active');document.querySelectorAll('.faq-item').forEach(faqItem=>{faqItem.classList.remove('active')});if(!isActive)item.classList.add('active')})});

document.querySelectorAll('.service-item').forEach(item=>{item.addEventListener('click',()=>{if(window.innerWidth<=1199){const isActive=item.classList.contains('active');document.querySelectorAll('.service-item').forEach(si=>{si.classList.remove('active')});if(!isActive)item.classList.add('active')}})});

function animatePrice(element,from,to,duration){const start=performance.now();function update(now){const elapsed=now-start;const progress=Math.min(elapsed/duration,1);const eased=1-Math.pow(1-progress,3);const current=Math.round(from+(to-from)*eased);element.textContent=current.toLocaleString('en-US');if(progress<1)requestAnimationFrame(update)}requestAnimationFrame(update)}
const toggleBtns=document.querySelectorAll('.toggle-btn');
const priceAmounts=document.querySelectorAll('.price-amount');
toggleBtns.forEach(btn=>{btn.addEventListener('click',()=>{toggleBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const period=btn.dataset.period;priceAmounts.forEach(priceEl=>{const from=parseInt(priceEl.textContent.replace(/,/g,''));const to=period==='annual'?parseInt(priceEl.dataset.annual):parseInt(priceEl.dataset.monthly);animatePrice(priceEl,from,to,600)})})});

const heroContent=document.querySelector('.hero-content');
const heroBg=document.querySelector('.hero-bg-image');
window.addEventListener('scroll',()=>{const scrolled=window.pageYOffset;const heroHeight=window.innerHeight;if(scrolled<heroHeight){const parallaxValue=scrolled*.3;const opacityValue=1-scrolled/heroHeight;if(heroContent){heroContent.style.transform='translateY('+parallaxValue+'px)';heroContent.style.opacity=opacityValue}if(heroBg){heroBg.style.transform='translateY('+scrolled*.15+'px) scale('+(1+scrolled*.0003)+')'}}});

document.querySelectorAll('.btn-accent').forEach(button=>{button.addEventListener('mousemove',(e)=>{const rect=button.getBoundingClientRect();const x=e.clientX-rect.left-rect.width/2;const y=e.clientY-rect.top-rect.height/2;button.style.transform='translate('+x*.15+'px,'+y*.15+'px)'});button.addEventListener('mouseleave',()=>{button.style.transform=''})});

document.querySelectorAll('.service-card, .work-card, .pricing-card, .testimonial-card').forEach(card=>{card.addEventListener('mousemove',(e)=>{const rect=card.getBoundingClientRect();const x=e.clientX-rect.left;const y=e.clientY-rect.top;card.style.setProperty('--mouse-x',x+'px');card.style.setProperty('--mouse-y',y+'px')})});

const style=document.createElement('style');
style.textContent='.service-card::after,.work-card::after,.pricing-card::after,.calc-card::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background:radial-gradient(400px circle at var(--mouse-x,50%) var(--mouse-y,50%),rgba(255,255,255,.04),transparent 40%);pointer-events:none;z-index:0}.service-card,.work-card,.pricing-card,.calc-card{position:relative;overflow:hidden}.service-card>*,.work-card>*,.pricing-card>*,.calc-card>*{position:relative;z-index:1}';
document.head.appendChild(style);

const badge=document.querySelector('.hero-badge');
if(badge){badge.style.opacity='0';badge.style.transform='translateY(20px)';setTimeout(()=>{badge.style.transition='all .6s cubic-bezier(.16,1,.3,1)';badge.style.opacity='1';badge.style.transform='translateY(0)'},300)}

function staggerGridItems(selector,delay=100){const items=document.querySelectorAll(selector);items.forEach((item,index)=>{item.style.transitionDelay=index*delay+'ms'})}
staggerGridItems('.work-card');staggerGridItems('.service-card');staggerGridItems('.process-card');staggerGridItems('.stat-card');staggerGridItems('.testimonial-card');staggerGridItems('.pricing-card');staggerGridItems('.blog-card');
