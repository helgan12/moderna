console.log("JS DOSYASI YUKLENDI");

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Scroll yapılınca mobil menüyü kapat
  window.addEventListener('scroll', () => {
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
    }
  });
}

const logoLink = document.getElementById('logo-link');
const backToTop = document.getElementById('back-to-top');
const impressumLink = document.querySelector('a[href="#impressum"]');
const datenschutzLink = document.querySelector('a[href="#datenschutz"]');
const impressumSection = document.getElementById('impressum');
const datenschutzSection = document.getElementById('datenschutz');

function scrollToTopSmooth(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

if (logoLink) {
  logoLink.addEventListener('click', scrollToTopSmooth);
}

if (backToTop) {
  backToTop.addEventListener('click', scrollToTopSmooth);
}

function toggleLegalSection(event, sectionToShow) {
  event.preventDefault();
  if (!impressumSection || !datenschutzSection) return;

  // Hepsini gizle
  impressumSection.hidden = true;
  datenschutzSection.hidden = true;

  // İstenen bölümü göster
  sectionToShow.hidden = false;
  sectionToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

if (impressumLink && impressumSection) {
  impressumLink.addEventListener('click', (e) => toggleLegalSection(e, impressumSection));
}

if (datenschutzLink && datenschutzSection) {
  datenschutzLink.addEventListener('click', (e) => toggleLegalSection(e, datenschutzSection));
}