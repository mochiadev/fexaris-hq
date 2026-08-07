// script.js - Navigation functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
});

function initializeNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Mobile dropdown toggles
    const mobileServicesToggle = document.getElementById('mobile-services-toggle');
    const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');
    const mobileSolutionsToggle = document.getElementById('mobile-solutions-toggle');
    const mobileSolutionsDropdown = document.getElementById('mobile-solutions-dropdown');
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            hamburger.classList.toggle('active');
            
            // Reset dropdowns when closing menu
            if (mobileMenu.classList.contains('hidden')) {
                closeAllMobileDropdowns();
            }
        });
    }
    
    // Mobile services dropdown
    if (mobileServicesToggle) {
        mobileServicesToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileServicesDropdown.classList.toggle('open');
            mobileServicesToggle.classList.toggle('active');
            
            // Close other dropdown
            if (mobileSolutionsDropdown.classList.contains('open')) {
                mobileSolutionsDropdown.classList.remove('open');
                mobileSolutionsToggle.classList.remove('active');
            }
        });
    }
    
    // Mobile solutions dropdown
    if (mobileSolutionsToggle) {
        mobileSolutionsToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileSolutionsDropdown.classList.toggle('open');
            mobileSolutionsToggle.classList.toggle('active');
            
            // Close other dropdown
            if (mobileServicesDropdown.classList.contains('open')) {
                mobileServicesDropdown.classList.remove('open');
                mobileServicesToggle.classList.remove('active');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !menuToggle.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            hamburger.classList.remove('active');
            closeAllMobileDropdowns();
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            hamburger.classList.remove('active');
            closeAllMobileDropdowns();
        });
    });
    
    function closeAllMobileDropdowns() {
        if (mobileServicesDropdown) {
            mobileServicesDropdown.classList.remove('open');
        }
        if (mobileSolutionsDropdown) {
            mobileSolutionsDropdown.classList.remove('open');
        }
        if (mobileServicesToggle) {
            mobileServicesToggle.classList.remove('active');
        }
        if (mobileSolutionsToggle) {
            mobileSolutionsToggle.classList.remove('active');
        }
    }
}

function initializeScrollEffects() {
    // Navbar scroll effect - removed for constant white background
    // window.addEventListener('scroll', function() {
    //     const nav = document.querySelector('nav');
    //     if (window.scrollY > 50) {
    //         nav.classList.add('scrolled');
    //     } else {
    //         nav.classList.remove('scrolled');
    //     }
    // });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Contact form functionality (if needed)
function initializeContactForm() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            form.reset();
        });
    }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContactForm);

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeScrollEffects,
        initializeContactForm
    };
}