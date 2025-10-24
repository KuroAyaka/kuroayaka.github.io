// // fade-in 스크롤 애니메이션
// const fadeElements = document.querySelectorAll('.fade-section');
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) entry.target.classList.add('visible');
//   });
// }, { threshold: 0.1 });
// fadeElements.forEach(el => observer.observe(el));

// // 헤더 스크롤 반응
// const header = document.querySelector('header');
// window.addEventListener('scroll', () => {
//   header.classList.toggle('scrolled', window.scrollY > 30);
// });
