/* ============================================
   Labui Maasaimara Safaris & Car Hire
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  /* ---- Preloader ---- */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(function() {
      preloader.classList.add('hidden');
    }, 1800);
  }

  /* ---- Navbar Scroll Effect ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* ---- Mobile Hamburger Menu ---- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    /* Close menu on link click */
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Active Nav Link ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link');
  allNavLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Fade-in Animations on Scroll ---- */
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function checkFade() {
    const triggerBottom = window.innerHeight * 0.88;
    
    fadeElements.forEach(function(el) {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  if (fadeElements.length > 0) {
    window.addEventListener('scroll', checkFade);
    checkFade(); // Initial check
  }

  /* ---- Scroll to Top Button ---- */
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ---- Gallery Lightbox ---- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  let currentImageIndex = 0;
  let visibleGalleryItems = [];

  function updateVisibleItems() {
    visibleGalleryItems = Array.from(galleryItems).filter(function(item) {
      return item.style.display !== 'none';
    });
  }

  if (galleryItems.length > 0 && lightbox && lightboxImg) {
    updateVisibleItems();

    galleryItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        updateVisibleItems();
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          currentImageIndex = visibleGalleryItems.indexOf(item);
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    function showImage(index) {
      if (visibleGalleryItems.length === 0) return;
      if (index < 0) index = visibleGalleryItems.length - 1;
      if (index >= visibleGalleryItems.length) index = 0;
      currentImageIndex = index;
      const img = visibleGalleryItems[currentImageIndex].querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', function() {
        showImage(currentImageIndex - 1);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', function() {
        showImage(currentImageIndex + 1);
      });
    }

    /* Keyboard navigation */
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
      if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
    });
  }

  /* ---- Gallery Filter ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  if (filterBtns.length > 0) {
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const filter = btn.getAttribute('data-filter');
        
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');

        galleryItems.forEach(function(item) {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || filter === category) {
            item.style.display = '';
            item.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---- Stats Counter Animation ---- */
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateCounters() {
    statNumbers.forEach(function(stat) {
      const target = parseInt(stat.getAttribute('data-target'));
      const suffix = stat.getAttribute('data-suffix') || '';
      const duration = 2000;
      const start = 0;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeProgress);
        stat.textContent = current + suffix;
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  /* Trigger counter animation when stats section is visible */
  const statsSection = document.querySelector('.stats-bar');
  if (statsSection && statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
  }

  /* ---- Smooth Scroll for Anchor Links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

}); // End DOMContentLoaded
