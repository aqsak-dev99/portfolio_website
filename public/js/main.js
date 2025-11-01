document.addEventListener('DOMContentLoaded', () => {
  // Init AOS
  if (window.AOS) AOS.init({ once: true, duration: 700, offset: 80 });
  
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
  
  // Active section highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);

  // Scroll to top button
  const topBtn = document.getElementById('scrollTop');
  const onScroll = () => {
    if (!topBtn) return;
    if (window.scrollY > 300) topBtn.classList.add('show');
    else topBtn.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll);
  if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.textContent = 'Sending…';
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      const formData = new FormData(contactForm);
      try {
        const action = contactForm.getAttribute('action');
        const res = await fetch(action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        if (res.ok) {
          formStatus.textContent = 'Message sent! I will get back to you shortly.';
          contactForm.reset();
        } else {
          formStatus.textContent = 'Failed to send. Please try again later.';
        }
      } catch (err) {
        formStatus.textContent = 'Network error. Please try again later.';
      }
      if (submitBtn) submitBtn.disabled = false;
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const setTheme = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
    if (themeToggle) themeToggle.textContent = t === 'dark' ? '🌙' : '☀️';
  };
  
  // Modal functionality for inquiry buttons
  const svcModal = document.getElementById('svcModal');
  const svcModalClose = document.getElementById('svcModalClose');
  const modalContent = document.querySelector('.modal-content');
  const inquireButtons = document.querySelectorAll('#inquireWebDev, #inquireAutomation, #inquireProjects, .inquire-btn');
  
  if (svcModal && inquireButtons.length > 0) {
    // Open modal when any inquire button is clicked
    inquireButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        svcModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Ensure form is visible and scrollable
        setTimeout(() => {
          const form = svcModal.querySelector('form');
          if (form) {
            form.style.display = 'block';
            
            // Reset form scroll position
            if (modalContent) modalContent.scrollTop = 0;
          }
        }, 100);
      });
    });
    
    // Close modal when close button is clicked
    if (svcModalClose) {
      svcModalClose.addEventListener('click', () => {
        svcModal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
      });
    }
    
    // Close modal when clicking outside the form
    svcModal.addEventListener('click', (e) => {
      if (e.target === svcModal) {
        svcModal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
    
    // Prevent modal content clicks from closing the modal
    if (modalContent) {
      modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
  // Initialize button icon
  setTheme(document.documentElement.getAttribute('data-theme') || 'dark');

  // Dynamic hydrate: projects
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid && projectsGrid.dataset.hydrate === 'projects') {
    fetch('/api/projects').then(r => r.json()).then(({ projects }) => {
      if (!Array.isArray(projects)) return;
      projectsGrid.innerHTML = projects.map(p => `
        <article class="card">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="card-body">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="tech">${p.tech.map(t => `<span class="chip">${t}</span>`).join('')}</div>
            <div class="actions">
              <a href="/project/${p.id}" class="btn btn-primary">Details</a>
              <a href="${p.github}" target="_blank" class="btn btn-outline">GitHub</a>
              <a href="${p.live}" target="_blank" class="btn btn-outline">Live</a>
            </div>
          </div>
        </article>
      `).join('');
    }).catch(() => {});
  }

  // Dynamic hydrate: certificates
  const certGrid = document.getElementById('certGrid');
  if (certGrid && certGrid.dataset.hydrate === 'certificates') {
    fetch('/api/certificates').then(r => r.json()).then(({ certificates }) => {
      if (!Array.isArray(certificates)) return;
      certGrid.innerHTML = certificates.map(c => `
        <article class="card">
          <img src="${c.image}" alt="${c.title}" loading="lazy" />
          <div class="card-body">
            <h3>${c.title}</h3>
            <p class="muted">${c.issuer} — ${new Date(c.date).toLocaleDateString()}</p>
            ${c.verifyLink ? `<a href="${c.verifyLink}" target="_blank" class="btn btn-outline">Verify</a>` : ''}
          </div>
        </article>
      `).join('');
    }).catch(() => {});
  }

  // Services & Packages: selection and inquiry modal
  const selectableSelectors = ['#webDevGrid .pkg-card', '#automationGrid .svc-card', '#projectsGridSvc .proj-card'];
  const getCardTitle = (card) => {
    const h3 = card.querySelector('.pkg-head h3, .card-body h3');
    return h3 ? h3.textContent.trim() : '';
  };
  const selectedPackages = new Set();
  const toggleSelected = (card) => {
    const name = getCardTitle(card);
    if (!name) return;
    if (card.classList.contains('selected')) {
      card.classList.remove('selected');
      selectedPackages.delete(name);
    } else {
      card.classList.add('selected');
      selectedPackages.add(name);
    }
  };
  selectableSelectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((card) => {
      // Make card keyboard accessible for selection
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.addEventListener('click', (e) => {
        // Avoid toggling when clicking on interactive elements
        if (e.target.closest('button, a, summary')) return;
        toggleSelected(card);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSelected(card);
        }
      });
      // Add Inquire / Customize button if missing
      const existingBtns = card.querySelector('.card-buttons');
      if (!existingBtns) {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'card-buttons';
        
        const inquireBtn = document.createElement('button');
        inquireBtn.className = 'btn btn-outline inquire-btn';
        inquireBtn.textContent = 'Inquire / Customize';
        inquireBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openInquiryModal([getCardTitle(card)]);
        });
        
        btnContainer.appendChild(inquireBtn);
        
        const body = card.querySelector('.card-body');
        if (body) body.appendChild(btnContainer);
      }
    });
  });

  // Modal controls
  const modal = document.getElementById('svcModal');
  const modalClose = document.getElementById('svcModalClose');
  const modalForm = document.getElementById('svcInquiryForm');
  const modalStatus = document.getElementById('svcModalStatus');
  const selectedList = document.getElementById('svcSelectedList');
  const selectedInput = document.getElementById('svcPackagesM');

  const openInquiryModal = (preselected = []) => {
    const names = preselected.length ? preselected : Array.from(selectedPackages);
    selectedList.innerHTML = names.map(n => `<span class="chip">${n}</span>`).join('');
    selectedInput.value = names.join(', ');
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('show');
  };
  const closeInquiryModal = () => {
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('show');
    modalStatus.textContent = '';
  };
  if (modalClose) modalClose.addEventListener('click', closeInquiryModal);
  document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('show') && e.key === 'Escape') closeInquiryModal();
  });
  if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) closeInquiryModal();
  });

  // Group-level inquire buttons
  const groupButtons = [
    document.getElementById('inquireWebDev'),
    document.getElementById('inquireAutomation'),
    document.getElementById('inquireProjects'),
  ];
  groupButtons.forEach((btn) => {
    if (btn) btn.addEventListener('click', () => openInquiryModal());
  });

  // Formspree submission
  if (modalForm) {
    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      modalStatus.textContent = 'Sending…';
      const submitBtn = modalForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      const formData = new FormData(modalForm);
      try {
        const action = modalForm.getAttribute('action');
        const res = await fetch(action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        if (res.ok) {
          modalStatus.textContent = 'Inquiry submitted! I will get back to you shortly.';
          modalForm.reset();
          selectedPackages.clear();
          document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
          setTimeout(() => {
            closeInquiryModal();
          }, 1200);
        } else {
          modalStatus.textContent = 'Failed to submit. Please try again later.';
        }
      } catch (err) {
        modalStatus.textContent = 'Network error. Please try again later.';
      }
      if (submitBtn) submitBtn.disabled = false;
    });
  }

  // Contact: live character counter
  const messageEl = document.getElementById('message');
  if (messageEl) {
    const max = 1000;
    const counter = document.createElement('small');
    counter.className = 'muted';
    messageEl.parentElement.appendChild(counter);
    const updateCounter = () => {
      const len = messageEl.value.length;
      counter.textContent = `${len}/${max} characters`;
      if (len > max) counter.style.color = 'crimson';
      else counter.style.color = '';
    };
    messageEl.addEventListener('input', updateCounter);
    updateCounter();
  }
});