window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) { // Adjust the 50 to whatever threshold you prefer
      header.classList.add('bg-white');
      header.classList.remove('bg-transparent');
      header.classList.add('border-b-2', 'border-secondaryc','rounded-b-3xl');
  } else {
      header.classList.add('bg-transparent');
      header.classList.remove('border-b-2', 'border-secondaryc','rounded-b-3xl');
      header.classList.remove('bg-white');
  }
});

  document.addEventListener('DOMContentLoaded', function () {
    var menuBar = document.getElementById('menu-bar');
    var mobileMenu = document.getElementById('mobil-menu');
    var noMenu = document.getElementById('no-menu');
    var menuLinks = document.querySelectorAll('#mobil-menu ul li a');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('opacity-0');
    }

    menuBar.addEventListener('click', toggleMenu);
    noMenu.addEventListener('click', toggleMenu);

    menuLinks.forEach(function (link) {
        link.addEventListener('click', toggleMenu);
    });
});

// tailwind.config.js
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const images = document.querySelectorAll('.random-position');
    
    images.forEach(img => {
        const x = Math.random() * (container.clientWidth - img.clientWidth);
        const y = Math.random() * (container.clientHeight - img.clientHeight);

        img.style.position = 'absolute';
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    });
});


function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    slides.forEach(slide => {
        slide.classList.add('hidden');
    });

    slides[slideIndex].classList.remove('hidden');
}
