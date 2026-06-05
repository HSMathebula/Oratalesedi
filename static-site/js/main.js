/**
 * Oratalesedi Trading & Projects - Main JavaScript
 * Converted from Next.js/React to Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initDarkMode();
  initHeader();
  initMobileMenu();
  initServicesDropdown();
  initHeroSlider();
  initScrollReveal();
  initServiceTabs();
  initPortfolioCards();
  initPortfolioFilters();
  initFloatingElements();
  initSmoothScroll();
});

/**
 * Dark Mode Toggle
 */
function initDarkMode() {
  const toggles = document.querySelectorAll('.dark-mode-toggle');
  if (!toggles.length) return;
  
  // Check for saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  });
}

/**
 * Header Scroll Effect
 */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/**
 * Mobile Menu
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!menuBtn || !mobileMenu) return;
  
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
    
    // Update hamburger lines for animation
    const lines = menuBtn.querySelectorAll('.hamburger-line');
    if (lines.length) {
      const isOpen = mobileMenu.classList.contains('active');
      if (isOpen) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        lines[0].style.transform = '';
        lines[1].style.opacity = '1';
        lines[2].style.transform = '';
      }
    } else {
      // Fallback for old icon structure
      const isOpen = mobileMenu.classList.contains('active');
      menuBtn.innerHTML = isOpen 
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-menu-container') && !e.target.closest('.header')) {
      mobileMenu.classList.remove('active');
      // Reset hamburger lines
      const lines = menuBtn.querySelectorAll('.hamburger-line');
      if (lines.length) {
        lines[0].style.transform = '';
        lines[1].style.opacity = '1';
        lines[2].style.transform = '';
      }
    }
  });
  
  // Close menu when clicking on a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Mobile dropdown toggles
  document.querySelectorAll('.mobile-dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = this.closest('.mobile-dropdown');
      dropdown.classList.toggle('active');
      
      // Rotate icon
      const icon = this.querySelector('.dropdown-icon');
      if (icon) {
        icon.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : '';
      }
    });
  });
}

/**
 * Services Dropdown
 */
function initServicesDropdown() {
  // Handle click-based dropdowns (for mobile/touch)
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('button, .dropdown-trigger');
    
    if (trigger) {
      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('active');
        
        // Close other dropdowns
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('active');
          }
        });
      });
    }
  });
  
  // Handle hover-based dropdowns (for desktop nav)
  const navDropdowns = document.querySelectorAll('.nav-dropdown');
  
  navDropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });
    
    dropdown.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown') && !e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
      navDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
}

/**
 * Hero Slider
 */
function initHeroSlider() {
  const slides = [
    {
      title: "Engineering Excellence",
      subtitle: "Mining & Construction Solutions",
      description: "Delivering world-class engineering services across South Africa's mining and construction sectors."
    },
    {
      title: "Renewable Energy",
      subtitle: "Sustainable Future Solutions",
      description: "Leading the transition to clean energy with innovative solar and renewable technology projects."
    },
    {
      title: "Industrial Innovation",
      subtitle: "Advanced Technology Integration",
      description: "Transforming industries with cutting-edge technology and sustainable engineering practices."
    }
  ];
  
  let currentSlide = 0;
  const titleEl = document.querySelector('.hero-title');
  const subtitleEl = document.querySelector('.hero-subtitle');
  const descriptionEl = document.querySelector('.hero-description');
  const dots = document.querySelectorAll('.slide-dot');
  
  if (!titleEl || !subtitleEl || !descriptionEl) return;
  
  function updateSlide(index) {
    currentSlide = index;
    
    // Update content with fade effect
    titleEl.style.opacity = 0;
    subtitleEl.style.opacity = 0;
    descriptionEl.style.opacity = 0;
    
    setTimeout(() => {
      titleEl.innerHTML = `<span class="gradient-text">${slides[index].title}</span>`;
      subtitleEl.textContent = slides[index].subtitle;
      descriptionEl.textContent = slides[index].description;
      
      titleEl.style.opacity = 1;
      subtitleEl.style.opacity = 1;
      descriptionEl.style.opacity = 1;
    }, 300);
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  // Auto-advance slides
  setInterval(() => {
    updateSlide((currentSlide + 1) % slides.length);
  }, 5000);
  
  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateSlide(index));
  });
}

/**
 * Scroll Reveal Animation
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.scroll-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
}

/**
 * Service Tabs
 */
function initServiceTabs() {
  const tabs = document.querySelectorAll('.service-tab');
  const contents = document.querySelectorAll('.service-content');
  
  if (!tabs.length) return;
  
  const services = [
    {
      category: "Mining Services",
      description: "Comprehensive mining solutions for optimal operational efficiency",
      services: [
        "Underground & Above ground Belt Conveyor Cleaning",
        "Mining Equipment Maintenance & Repair",
        "Industrial Cleaning & Maintenance Services",
        "HP Jetting and ACC Fins Cleaning",
        "Equipment Installation & Commissioning"
      ],
      features: ["24/7 Support", "Certified Technicians", "Safety Compliant", "Cost Effective"]
    },
    {
      category: "Construction",
      description: "Modern construction solutions with sustainable practices",
      services: [
        "Civil Engineering Projects",
        "Building Maintenance & Renovation",
        "Wastewater Treatment Infrastructure",
        "Construction Project Management",
        "Structural Engineering Solutions"
      ],
      features: ["CIDB Grade 4", "Project Management", "Quality Assured", "Timely Delivery"]
    },
    {
      category: "Renewable Energy",
      description: "Leading the future with clean energy solutions",
      services: [
        "Solar Energy System Design & Installation",
        "Renewable Energy Infrastructure Development",
        "Energy Efficiency Consulting",
        "Sustainable Technology Implementation",
        "Grid Integration Solutions"
      ],
      features: ["Green Technology", "Energy Savings", "Sustainable", "Future Ready"]
    }
  ];
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update content
      updateServiceContent(services[index]);
    });
  });
  
  function updateServiceContent(service) {
    const titleEl = document.querySelector('.service-title');
    const descEl = document.querySelector('.service-desc');
    const listEl = document.querySelector('.service-list');
    const featuresEl = document.querySelector('.service-features');
    const visualTitle = document.querySelector('.service-visual h4');
    
    if (titleEl) titleEl.textContent = service.category;
    if (descEl) descEl.textContent = service.description;
    if (visualTitle) visualTitle.textContent = service.category;
    
    if (listEl) {
      listEl.innerHTML = service.services.map(item => `
        <li>
          <div class="check-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span>${item}</span>
        </li>
      `).join('');
    }
    
    if (featuresEl) {
      featuresEl.innerHTML = service.features.map(feature => 
        `<span class="service-feature">${feature}</span>`
      ).join('');
    }
  }
}

/**
 * Portfolio Cards
 */
function initPortfolioCards() {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // Toggle selected state
      const wasSelected = this.classList.contains('selected');
      
      // Remove selected from all
      cards.forEach(c => c.classList.remove('selected'));
      
      // Toggle current
      if (!wasSelected) {
        this.classList.add('selected');
      }
    });
  });
}

/**
 * Portfolio Filtering
 */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (!filterBtns.length || !portfolioItems.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter items
      portfolioItems.forEach(item => {
        const category = item.dataset.category;
        
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
          item.style.display = '';
        } else {
          item.classList.add('hidden');
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Floating Elements (Cursor Follower)
 */
function initFloatingElements() {
  const follower = document.querySelector('.cursor-follower');
  if (!follower) return;
  
  document.addEventListener('mousemove', function(e) {
    follower.style.left = (e.clientX - 8) + 'px';
    follower.style.top = (e.clientY - 8) + 'px';
  });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Story Slideshow
 */
function initStorySlideshow() {
  const openBtn = document.querySelector('.watch-story-btn');
  const overlay = document.querySelector('.slideshow-overlay');
  const closeBtn = document.querySelector('.slideshow-close');
  const prevBtn = document.querySelector('.slideshow-nav.prev');
  const nextBtn = document.querySelector('.slideshow-nav.next');
  const playPauseBtn = document.querySelector('.slideshow-play-pause');
  const muteBtn = document.querySelector('.slideshow-mute');
  const audio = document.querySelector('.slideshow-audio');
  
  if (!overlay) return;
  
  const images = [
    "images/Show2.jpeg",
    "images/show3.jpeg",
    "images/show1.jpeg",
    "images/B.jpeg",
    "images/G.jpeg",
    "images/container.jpg",
    "images/ground.jpg",
    "images/solar.jpg",
    "images/grid battery.jpg",
    "images/HDEP.jpg",
    "images/maintenance.jpg",
    "images/welding.jpg",
    "images/maintainence.jpg",
    "images/Geospatial.jpg",
    "images/converyor belt.jpg",
    "images/oratalesedi-hero-img.jpg"
  ];
  
  let currentIndex = 0;
  let isPlaying = true;
  let slideInterval;
  
  function showSlide(index) {
    currentIndex = index;
    const img = document.querySelector('.slideshow-image-container img');
    const counter = document.querySelector('.slideshow-counter');
    const progressBar = document.querySelector('.slideshow-progress-bar');
    const thumbnails = document.querySelectorAll('.slideshow-thumbnail');
    
    if (img) img.src = images[index];
    if (counter) counter.textContent = `${index + 1} / ${images.length}`;
    if (progressBar) progressBar.style.width = `${((index + 1) / images.length) * 100}%`;
    
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
  }
  
  function nextSlide() {
    showSlide((currentIndex + 1) % images.length);
  }
  
  function prevSlide() {
    showSlide((currentIndex - 1 + images.length) % images.length);
  }
  
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000);
    isPlaying = true;
    if (playPauseBtn) {
      playPauseBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
    }
  }
  
  function stopSlideshow() {
    clearInterval(slideInterval);
    isPlaying = false;
    if (playPauseBtn) {
      playPauseBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"></polygon></svg>';
    }
  }
  
  // Open slideshow
  if (openBtn) {
    openBtn.addEventListener('click', function() {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      showSlide(0);
      startSlideshow();
      if (audio) {
        audio.play().catch(() => {});
      }
    });
  }
  
  // Close slideshow
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      stopSlideshow();
      if (audio) audio.pause();
    });
  }
  
  // Navigation
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  // Play/Pause
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function() {
      if (isPlaying) {
        stopSlideshow();
        if (audio) audio.pause();
      } else {
        startSlideshow();
        if (audio) audio.play();
      }
    });
  }
  
  // Mute
  if (muteBtn && audio) {
    muteBtn.addEventListener('click', function() {
      audio.muted = !audio.muted;
      muteBtn.innerHTML = audio.muted 
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    });
  }
  
  // Keyboard controls
  document.addEventListener('keydown', function(e) {
    if (!overlay.classList.contains('active')) return;
    
    switch(e.key) {
      case 'ArrowLeft':
        prevSlide();
        break;
      case 'ArrowRight':
        nextSlide();
        break;
      case 'Escape':
        closeBtn?.click();
        break;
      case ' ':
        e.preventDefault();
        playPauseBtn?.click();
        break;
    }
  });
  
  // Thumbnail clicks
  document.querySelectorAll('.slideshow-thumbnail').forEach((thumb, index) => {
    thumb.addEventListener('click', () => showSlide(index));
  });
}

// Initialize slideshow when DOM is ready
document.addEventListener('DOMContentLoaded', initStorySlideshow);

/**
 * Contact Form Handler
 */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.btn-submit');
    const statusEl = document.querySelector('.form-status');
    
    // Get form data
    const formData = {
      name: form.querySelector('#name')?.value || '',
      email: form.querySelector('#email')?.value || '',
      company: form.querySelector('#company')?.value || '',
      phone: form.querySelector('#phone')?.value || '',
      service: form.querySelector('#service')?.value || '',
      message: form.querySelector('#message')?.value || ''
    };
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      showFormStatus(statusEl, 'error', 'Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    
    try {
      const response = await fetch('php/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        showFormStatus(statusEl, 'success', 'Message sent successfully! We will contact you within 24 hours.');
        form.reset();
      } else {
        showFormStatus(statusEl, 'error', result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      showFormStatus(statusEl, 'error', 'Network error. Please check your connection and try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    }
  });
}

function showFormStatus(statusEl, type, message) {
  if (!statusEl) return;
  
  statusEl.className = `form-status ${type}`;
  statusEl.innerHTML = `
    <div class="form-status-content">
      ${type === 'success' 
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'}
      <span>${message}</span>
    </div>
  `;
  statusEl.style.display = 'block';
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    statusEl.style.display = 'none';
  }, 5000);
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', initContactForm);

/**
 * Quote Form Multi-Step
 */
function initQuoteForm() {
  const form = document.querySelector('#quote-form');
  if (!form) return;
  
  let currentStep = 1;
  const totalSteps = 3;
  
  const formData = {
    projectType: '',
    projectScope: '',
    timeline: '',
    budget: '',
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    urgency: 'standard'
  };
  
  // Service type card selection
  document.querySelectorAll('.service-type-card').forEach(card => {
    card.addEventListener('click', function() {
      document.querySelectorAll('.service-type-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      formData.projectType = this.dataset.service;
    });
  });
  
  // Navigation buttons
  const nextBtn = document.querySelector('.quote-next-btn');
  const prevBtn = document.querySelector('.quote-prev-btn');
  const submitBtn = document.querySelector('.quote-submit-btn');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (validateStep(currentStep)) {
        currentStep++;
        updateFormStep();
      }
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      currentStep--;
      updateFormStep();
    });
  }
  
  function updateFormStep() {
    // Update step visibility
    document.querySelectorAll('.quote-step').forEach((step, i) => {
      step.style.display = i + 1 === currentStep ? 'block' : 'none';
    });
    
    // Update progress
    document.querySelectorAll('.progress-step').forEach((step, i) => {
      step.classList.toggle('active', i + 1 === currentStep);
      step.classList.toggle('completed', i + 1 < currentStep);
    });
    
    // Update button visibility
    if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'block' : 'none';
    if (nextBtn) nextBtn.style.display = currentStep < totalSteps ? 'block' : 'none';
    if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'block' : 'none';
    
    // Populate review on step 3
    if (currentStep === 3) {
      populateReview();
    }
  }
  
  function validateStep(step) {
    const statusEl = document.querySelector('.quote-form-status');
    
    if (step === 1) {
      if (!formData.projectType) {
        showFormStatus(statusEl, 'error', 'Please select a service type.');
        return false;
      }
    } else if (step === 2) {
      formData.company = document.querySelector('#company')?.value || '';
      formData.contactPerson = document.querySelector('#contactPerson')?.value || '';
      formData.email = document.querySelector('#email')?.value || '';
      formData.phone = document.querySelector('#phone')?.value || '';
      
      if (!formData.company || !formData.contactPerson || !formData.email || !formData.phone) {
        showFormStatus(statusEl, 'error', 'Please fill in all required fields.');
        return false;
      }
    }
    
    return true;
  }
  
  function populateReview() {
    // Update all form data from inputs
    formData.projectScope = document.querySelector('#projectScope')?.value || '';
    formData.timeline = document.querySelector('#timeline')?.value || '';
    formData.budget = document.querySelector('#budget')?.value || '';
    formData.location = document.querySelector('#location')?.value || '';
    formData.description = document.querySelector('#description')?.value || '';
    
    // Service type names
    const serviceNames = {
      mining: 'Mining Services',
      construction: 'Construction',
      renewable: 'Renewable Energy'
    };
    
    // Populate review fields
    const reviewFields = {
      'review-service': serviceNames[formData.projectType] || 'Not selected',
      'review-scope': formData.projectScope || 'Not specified',
      'review-timeline': formData.timeline || 'Not specified',
      'review-budget': formData.budget || 'Not specified',
      'review-company': formData.company,
      'review-contact': formData.contactPerson,
      'review-email': formData.email,
      'review-phone': formData.phone,
      'review-location': formData.location || 'Not specified',
      'review-description': formData.description || 'Not provided'
    };
    
    Object.entries(reviewFields).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });
  }
  
  // Form submission
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const confirmed = document.querySelector('#confirm-info')?.checked;
      if (!confirmed) {
        showFormStatus(document.querySelector('.quote-form-status'), 'error', 'Please confirm that your information is correct.');
        return;
      }
      
      const submitBtn = form.querySelector('.quote-submit-btn');
      const statusEl = document.querySelector('.quote-form-status');
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';
      
      try {
        const response = await fetch('php/quote.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showFormStatus(statusEl, 'success', 'Quote request submitted successfully! We will contact you within 24 hours.');
          form.reset();
          currentStep = 1;
          updateFormStep();
        } else {
          showFormStatus(statusEl, 'error', result.message || 'Failed to submit quote request. Please try again.');
        }
      } catch (error) {
        showFormStatus(statusEl, 'error', 'Network error. Please check your connection and try again.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Quote Request <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
      }
    });
  }
}

// Initialize quote form
document.addEventListener('DOMContentLoaded', initQuoteForm);
