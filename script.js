// Sample mentor data organized by domain
const mentorsData = {
    technology: [
        {
            name: "Sarah Chen",
            specialty: "Full Stack Development",
            company: "Google",
            rating: 4.9,
            availability: "Available Now",
            experience: "8 years",
            avatar: "SC",
            status: "online",
            bio: "Passionate about helping developers master modern web technologies",
            skills: ["React", "Node.js", "Python", "AWS"]
        },
        {
            name: "Michael Rodriguez",
            specialty: "Data Science & AI",
            company: "Microsoft",
            rating: 4.8,
            availability: "Available in 2 hours",
            experience: "10 years",
            avatar: "MR",
            status: "busy",
            bio: "Machine Learning expert with experience in enterprise solutions",
            skills: ["Python", "TensorFlow", "SQL", "Azure"]
        },
        {
            name: "Priya Sharma",
            specialty: "Mobile App Development",
            company: "Meta",
            rating: 4.9,
            availability: "Available Now",
            experience: "6 years",
            avatar: "PS",
            status: "online",
            bio: "Specialized in React Native and Flutter development",
            skills: ["React Native", "Flutter", "iOS", "Android"]
        },
        {
            name: "Alex Johnson",
            specialty: "DevOps & Cloud",
            company: "Amazon",
            rating: 4.7,
            availability: "Available Tomorrow",
            experience: "12 years",
            avatar: "AJ",
            status: "offline",
            bio: "Cloud architecture and automation specialist",
            skills: ["AWS", "Docker", "Kubernetes", "Terraform"]
        }
    ],
    business: [
        {
            name: "David Kim",
            specialty: "Product Management",
            company: "Amazon",
            rating: 4.7,
            availability: "Available Now",
            experience: "12 years",
            avatar: "DK",
            status: "online",
            bio: "Product strategy and growth expert",
            skills: ["Product Strategy", "Analytics", "Leadership", "Agile"]
        },
        {
            name: "Emma Watson",
            specialty: "Digital Marketing",
            company: "Uber",
            rating: 4.8,
            availability: "Available in 1 hour",
            experience: "7 years",
            avatar: "EW",
            status: "busy",
            bio: "Digital marketing strategist with focus on growth hacking",
            skills: ["SEO", "Social Media", "Analytics", "Content Marketing"]
        },
        {
            name: "James Wilson",
            specialty: "Business Strategy",
            company: "McKinsey",
            rating: 4.9,
            availability: "Available Now",
            experience: "15 years",
            avatar: "JW",
            status: "online",
            bio: "Management consultant with expertise in digital transformation",
            skills: ["Strategy", "Consulting", "Finance", "Operations"]
        }
    ],
    healthcare: [
        {
            name: "Dr. Lisa Thompson",
            specialty: "Public Health",
            company: "WHO",
            rating: 4.9,
            availability: "Available Now",
            experience: "14 years",
            avatar: "LT",
            status: "online",
            bio: "Global health policy expert and researcher",
            skills: ["Epidemiology", "Health Policy", "Research", "Leadership"]
        },
        {
            name: "Dr. Robert Martinez",
            specialty: "Medical Research",
            company: "Johns Hopkins",
            rating: 4.8,
            availability: "Available in 3 hours",
            experience: "20 years",
            avatar: "RM",
            status: "busy",
            bio: "Clinical research specialist in oncology",
            skills: ["Clinical Trials", "Oncology", "Statistics", "Publication"]
        }
    ],
    engineering: [
        {
            name: "Jennifer Liu",
            specialty: "Mechanical Engineering",
            company: "Tesla",
            rating: 4.8,
            availability: "Available Now",
            experience: "9 years",
            avatar: "JL",
            status: "online",
            bio: "Automotive engineering expert with focus on electric vehicles",
            skills: ["CAD", "Manufacturing", "Materials", "Testing"]
        },
        {
            name: "Carlos Mendez",
            specialty: "Civil Engineering",
            company: "Arup",
            rating: 4.7,
            availability: "Available Tomorrow",
            experience: "11 years",
            avatar: "CM",
            status: "offline",
            bio: "Structural engineer specializing in sustainable buildings",
            skills: ["Structural Design", "Sustainability", "Project Management", "AutoCAD"]
        }
    ],
    creative: [
        {
            name: "Sophia Taylor",
            specialty: "UX/UI Design",
            company: "Adobe",
            rating: 4.9,
            availability: "Available Now",
            experience: "7 years",
            avatar: "ST",
            status: "online",
            bio: "User experience designer passionate about inclusive design",
            skills: ["Figma", "Prototyping", "User Research", "Design Systems"]
        },
        {
            name: "Marcus Brown",
            specialty: "Video Production",
            company: "Netflix",
            rating: 4.8,
            availability: "Available in 4 hours",
            experience: "10 years",
            avatar: "MB",
            status: "busy",
            bio: "Creative director with experience in streaming content",
            skills: ["Video Editing", "Color Grading", "Storytelling", "Team Leadership"]
        }
    ],
    education: [
        {
            name: "Dr. Amanda Foster",
            specialty: "Educational Technology",
            company: "Stanford University",
            rating: 4.9,
            availability: "Available Now",
            experience: "16 years",
            avatar: "AF",
            status: "online",
            bio: "EdTech researcher focused on personalized learning",
            skills: ["Learning Analytics", "Curriculum Design", "Research", "Innovation"]
        }
    ]
};

// Global variables
let currentDomain = '';
let currentUser = null;
let currentChat = null;
let isVideoCallActive = false;
let isMuted = false;
let isVideoOn = true;

// Modal functions
function openModal(modalType) {
    const modal = document.getElementById(modalType + 'Modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalType) {
    const modal = document.getElementById(modalType + 'Modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function switchModal(fromModal, toModal) {
    closeModal(fromModal);
    setTimeout(() => openModal(toModal), 100);
}

// Authentication functions
function login(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate login process
    showLoadingState(form.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        currentUser = {
            name: email.split('@')[0],
            email: email,
            type: 'student'
        };
        
        showToast('Login successful!', 'success');
        closeModal('login');
        updateUIForLoggedInUser();
        hideLoadingState(form.querySelector('button[type="submit"]'));
    }, 1500);
}

function register(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate registration process
    showLoadingState(form.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        currentUser = {
            name: formData.get('name') || form.querySelector('input[type="text"]').value,
            email: formData.get('email') || form.querySelector('input[type="email"]').value,
            type: 'student'
        };
        
        showToast('Account created successfully!', 'success');
        closeModal('register');
        updateUIForLoggedInUser();
        hideLoadingState(form.querySelector('button[type="submit"]'));
    }, 2000);
}

function registerMentor(event) {
    event.preventDefault();
    const form = event.target;
    
    // Simulate mentor registration process
    showLoadingState(form.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        showToast('Mentor application submitted! We will review and get back to you.', 'info');
        closeModal('mentor-register');
        hideLoadingState(form.querySelector('button[type="submit"]'));
        form.reset();
    }, 2500);
}

function updateUIForLoggedInUser() {
    const authButtons = document.querySelector('.auth-buttons');
    if (currentUser && authButtons) {
        authButtons.innerHTML = `
            <span style="margin-right: 1rem;">Welcome, ${currentUser.name}!</span>
            <a href="#" class="btn btn-secondary" onclick="logout()">Logout</a>
        `;
    }
}

function logout() {
    currentUser = null;
    currentChat = null;
    closeChat();
    
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
        authButtons.innerHTML = `
            <a href="#" class="btn btn-secondary" onclick="openModal('login')">Login</a>
            <a href="#" class="btn btn-primary" onclick="openModal('register')">Get Started</a>
        `;
    }
    
    showToast('Logged out successfully', 'info');
}

// Domain and mentor functions
function showMentors(domain) {
    currentDomain = domain;
    
    // Hide other sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('domains').style.display = 'none';
    document.getElementById('features').style.display = 'none';
    
    // Show mentor dashboard
    const dashboard = document.getElementById('mentor-dashboard');
    dashboard.style.display = 'block';
    dashboard.classList.add('fade-in');
    
    // Populate mentors
    populateMentors(mentorsData[domain] || []);
    
    // Update section title
    const sectionTitle = dashboard.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.textContent = `${domain.charAt(0).toUpperCase() + domain.slice(1)} Mentors`;
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateMentors(mentors) {
    const mentorGrid = document.getElementById('mentorGrid');
    if (!mentorGrid) return;
    
    mentorGrid.innerHTML = '';
    
    mentors.forEach((mentor, index) => {
        const mentorCard = createMentorCard(mentor, index);
        mentorGrid.appendChild(mentorCard);
    });
}

function createMentorCard(mentor, index) {
    const card = document.createElement('div');
    card.className = 'mentor-card slide-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const statusClass = mentor.status === 'online' ? 'status-online' : 
                       mentor.status === 'busy' ? 'status-busy' : 'status-offline';
    
    const availabilityClass = mentor.status === 'online' ? '' : 'busy';
    
    card.innerHTML = `
        <div class="mentor-header">
            <div class="mentor-avatar">${mentor.avatar}</div>
            <div class="mentor-info">
                <h3>${mentor.name} <span class="${statusClass}"></span></h3>
                <div class="mentor-specialty">${mentor.specialty} at ${mentor.company}</div>
            </div>
        </div>
        
        <div class="mentor-rating">
            ${'⭐'.repeat(Math.floor(mentor.rating))} ${mentor.rating}/5.0 (${Math.floor(Math.random() * 100) + 50} reviews)
        </div>
        
        <div class="mentor-availability ${availabilityClass}">
            📅 ${mentor.availability}
        </div>
        
        <p style="color: #666; margin-bottom: 1rem;">${mentor.bio}</p>
        
        <div style="margin-bottom: 1rem;">
            <strong>Experience:</strong> ${mentor.experience}
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <strong>Skills:</strong> 
            <div style="margin-top: 0.5rem;">
                ${mentor.skills.map(skill => `<span style="background: rgba(231, 60, 126, 0.1); color: #e73c7e; padding: 0.2rem 0.8rem; border-radius: 15px; font-size: 0.8rem; margin: 0.2rem; display: inline-block;">${skill}</span>`).join('')}
            </div>
        </div>
        
        <div class="mentor-actions">
            <button class="btn btn-primary btn-small" onclick="startChat('${mentor.name}', '${mentor.specialty}')" ${mentor.status === 'offline' ? 'disabled' : ''}>
                💬 Chat ${mentor.status === 'offline' ? '(Offline)' : ''}
            </button>
            <button class="btn btn-secondary btn-small" onclick="scheduleCall('${mentor.name}')" ${mentor.status === 'offline' ? 'disabled' : ''}>
                📞 Schedule Call
            </button>
            <button class="btn btn-secondary btn-small" onclick="viewProfile('${mentor.name}')">
                👤 View Profile
            </button>
        </div>
    `;
    
    return card;
}

// Chat functions
function startChat(mentorName, mentorSpecialty) {
    if (!currentUser) {
        showToast('Please login to start chatting', 'error');
        openModal('login');
        return;
    }
    
    currentChat = {
        mentor: mentorName,
        specialty: mentorSpecialty,
        messages: [
            { text: "Hi! I'm excited to help you with your career journey. What specific area would you like to discuss?", sent: false }
        ]
    };
    
    const chatInterface = document.getElementById('chatInterface');
    const mentorNameElement = document.getElementById('chatMentorName');
    
    if (mentorNameElement) {
        mentorNameElement.textContent = mentorName;
    }
    
    // Update mentor info in chat header
    const chatHeader = chatInterface.querySelector('.chat-header > div');
    if (chatHeader) {
        chatHeader.innerHTML = `
            <strong>${mentorName}</strong>
            <div style="font-size: 0.8rem; opacity: 0.9;">${mentorSpecialty}</div>
        `;
    }
    
    chatInterface.style.display = 'block';
    chatInterface.classList.add('slide-up');
    
    updateChatMessages();
    
    showToast(`Started chat with ${mentorName}`, 'success');
}

function sendMessage() {
    if (!currentChat) return;
    
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    currentChat.messages.push({ text: message, sent: true });
    chatInput.value = '';
    
    updateChatMessages();
    
    // Simulate mentor response
    setTimeout(() => {
        const responses = [
            "That's a great question! Let me share my experience with that.",
            "I understand your concern. Here's what I would recommend...",
            "Based on my experience in the industry, I suggest...",
            "That's definitely an important skill to develop. Have you considered...?",
            "I faced a similar challenge early in my career. What worked for me was...",
            "That's a common question among professionals starting out. My advice would be...",
            "Excellent point! In my company, we approach this by...",
            "I'm glad you asked about that. This is actually a key area for career growth..."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        currentChat.messages.push({ text: randomResponse, sent: false });
        updateChatMessages();
    }, 1000 + Math.random() * 2000);
}

function updateChatMessages() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages || !currentChat) return;
    
    chatMessages.innerHTML = '';
    
    currentChat.messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sent ? 'sent' : 'received'}`;
        messageDiv.textContent = message.text;
        chatMessages.appendChild(messageDiv);
    });
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function closeChat() {
    const chatInterface = document.getElementById('chatInterface');
    chatInterface.style.display = 'none';
    currentChat = null;
}

// Video call functions
function startVideoCall() {
    if (!currentChat) return;
    
    const modal = document.getElementById('videoCallModal');
    const mentorNameSpan = document.getElementById('videoCallMentorName');
    
    if (mentorNameSpan) {
        mentorNameSpan.textContent = currentChat.mentor;
    }
    
    modal.style.display = 'block';
    isVideoCallActive = true;
    
    showToast(`Video call started with ${currentChat.mentor}`, 'success');
}

function endVideoCall() {
    const modal = document.getElementById('videoCallModal');
    modal.style.display = 'none';
    isVideoCallActive = false;
    isMuted = false;
    isVideoOn = true;
    
    // Reset button states
    document.getElementById('muteBtn').textContent = '🔇 Mute';
    document.getElementById('videoBtn').textContent = '📹 Stop Video';
    
    showToast('Video call ended', 'info');
}

function toggleMute() {
    isMuted = !isMuted;
    const muteBtn = document.getElementById('muteBtn');
    muteBtn.textContent = isMuted ? '🔊 Unmute' : '🔇 Mute';
    
    showToast(isMuted ? 'Microphone muted' : 'Microphone unmuted', 'info');
}

function toggleVideo() {
    isVideoOn = !isVideoOn;
    const videoBtn = document.getElementById('videoBtn');
    videoBtn.textContent = isVideoOn ? '📹 Stop Video' : '📹 Start Video';
    
    showToast(isVideoOn ? 'Video enabled' : 'Video disabled', 'info');
}

// Other functions
function scheduleCall(mentorName) {
    if (!currentUser) {
        showToast('Please login to schedule calls', 'error');
        openModal('login');
        return;
    }
    
    // Simulate scheduling process
    showToast(`Call scheduled with ${mentorName}. You'll receive a confirmation email shortly.`, 'success');
}

function viewProfile(mentorName) {
    showToast(`Opening ${mentorName}'s detailed profile...`, 'info');
    // Here you would typically open a detailed profile modal or page
}

// Filter and search functions
function filterMentors() {
    const experienceFilter = document.getElementById('filterExperience')?.value;
    const availabilityFilter = document.getElementById('filterAvailability')?.value;
    
    if (!currentDomain || !mentorsData[currentDomain]) return;
    
    let filteredMentors = [...mentorsData[currentDomain]];
    
    // Apply experience filter
    if (experienceFilter) {
        filteredMentors = filteredMentors.filter(mentor => {
            const years = parseInt(mentor.experience);
            switch (experienceFilter) {
                case 'junior':
                    return years >= 3 && years <= 5;
                case 'mid':
                    return years > 5 && years <= 10;
                case 'senior':
                    return years > 10;
                default:
                    return true;
            }
        });
    }
    
    // Apply availability filter
    if (availabilityFilter) {
        filteredMentors = filteredMentors.filter(mentor => {
            switch (availabilityFilter) {
                case 'now':
                    return mentor.availability.includes('Available Now');
                case 'today':
                    return mentor.availability.includes('Available Now') || mentor.availability.includes('hour');
                case 'week':
                    return !mentor.availability.includes('Tomorrow');
                default:
                    return true;
            }
        });
    }
    
    populateMentors(filteredMentors);
}

function searchMentors() {
    const searchTerm = document.getElementById('searchMentors')?.value.toLowerCase();
    
    if (!currentDomain || !mentorsData[currentDomain]) return;
    
    if (!searchTerm) {
        populateMentors(mentorsData[currentDomain]);
        return;
    }
    
    const filteredMentors = mentorsData[currentDomain].filter(mentor => 
        mentor.name.toLowerCase().includes(searchTerm) ||
        mentor.specialty.toLowerCase().includes(searchTerm) ||
        mentor.company.toLowerCase().includes(searchTerm) ||
        mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm))
    );
    
    populateMentors(filteredMentors);
}

// Utility functions
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div style="font-weight: 500; margin-bottom: 0.5rem;">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
        <div>${message}</div>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 4000);
}

function showLoadingState(button) {
    if (!button) return;
    
    button.classList.add('loading');
    button.disabled = true;
    button.originalText = button.textContent;
    button.textContent = 'Loading...';
}

function hideLoadingState(button) {
    if (!button) return;
    
    button.classList.remove('loading');
    button.disabled = false;
    button.textContent = button.originalText || button.textContent.replace('Loading...', 'Submit');
}

// Navigation functions
function goHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('domains').style.display = 'block';
    document.getElementById('features').style.display = 'block';
    document.getElementById('mentor-dashboard').style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scrolling for navigation links
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Show all main sections if navigating to them
                if (['home', 'domains', 'features'].includes(targetId)) {
                    document.getElementById('home').style.display = 'block';
                    document.getElementById('domains').style.display = 'block';
                    document.getElementById('features').style.display = 'block';
                    document.getElementById('mentor-dashboard').style.display = 'none';
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        input.classList.remove('form-error', 'form-success');
        
        if (!input.value.trim()) {
            input.classList.add('form-error');
            isValid = false;
        } else {
            input.classList.add('form-success');
        }
    });
    
    // Email validation
    const emailInputs = form.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value && !emailRegex.test(input.value)) {
            input.classList.remove('form-success');
            input.classList.add('form-error');
            isValid = false;
        }
    });
    
    return isValid;
}

// Enhanced form submission with validation
function enhanceFormSubmission() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
                showToast('Please fill in all required fields correctly', 'error');
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.hasAttribute('required')) {
                    input.classList.remove('form-error', 'form-success');
                    
                    if (!input.value.trim()) {
                        input.classList.add('form-error');
                    } else if (input.type === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        input.classList.add(emailRegex.test(input.value) ? 'form-success' : 'form-error');
                    } else {
                        input.classList.add('form-success');
                    }
                }
            });
        });
    });
}

// Local storage for user preferences (fallback for demo)
function saveUserPreferences() {
    if (currentUser) {
        const preferences = {
            user: currentUser,
            lastVisitedDomain: currentDomain,
            timestamp: Date.now()
        };
        
        // In a real application, you would save to a database
        // For demo purposes, we'll just store in memory
        window.userPreferences = preferences;
    }
}

function loadUserPreferences() {
    // In a real application, you would load from a database
    if (window.userPreferences) {
        const preferences = window.userPreferences;
        
        // Auto-login if session is recent (within 24 hours)
        if (Date.now() - preferences.timestamp < 24 * 60 * 60 * 1000) {
            currentUser = preferences.user;
            updateUIForLoggedInUser();
            
            if (preferences.lastVisitedDomain) {
                setTimeout(() => {
                    showToast(`Welcome back! Returning to ${preferences.lastVisitedDomain} mentors.`, 'info');
                }, 1000);
            }
        }
    }
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // ESC to close modals and chat
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            if (currentChat) {
                closeChat();
            }
            
            if (isVideoCallActive) {
                endVideoCall();
            }
        }
        
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchMentors');
            if (searchInput && searchInput.offsetParent !== null) {
                searchInput.focus();
            }
        }
    });
}

// Intersection Observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToObserve = document.querySelectorAll('.domain-card, .feature-card, .mentor-card');
    elementsToObserve.forEach(el => observer.observe(el));
}

// Performance monitoring (simple version)
function initializePerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        
        if (loadTime > 3000) {
            console.warn('Page load time is slower than expected');
        }
    });
    
    // Monitor large mentor list rendering
    const originalPopulateMentors = populateMentors;
    populateMentors = function(mentors) {
        const startTime = performance.now();
        originalPopulateMentors(mentors);
        const endTime = performance.now();
        
        console.log(`Mentor list rendered in ${Math.round(endTime - startTime)}ms`);
    };
}

// Error handling
function initializeErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        showToast('Something went wrong. Please try again.', 'error');
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled Promise Rejection:', e.reason);
        showToast('Something went wrong. Please try again.', 'error');
    });
}

// Accessibility enhancements
function initializeAccessibility() {
    // Add ARIA labels
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    // Add focus management for modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll(
                    'input, button, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    });
}

// Mobile-specific enhancements
function initializeMobileEnhancements() {
    // Touch-friendly interactions
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Adjust hover effects for touch devices
        const hoverElements = document.querySelectorAll('.domain-card, .feature-card, .mentor-card');
        hoverElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.classList.add('touch-hover');
            });
            
            element.addEventListener('touchend', () => {
                setTimeout(() => element.classList.remove('touch-hover'), 300);
            });
        });
    }
    
    // Responsive chat interface
    function adjustChatForMobile() {
        const chatInterface = document.getElementById('chatInterface');
        if (window.innerWidth <= 768 && chatInterface) {
            chatInterface.style.width = '90%';
            chatInterface.style.left = '5%';
            chatInterface.style.right = '5%';
            chatInterface.style.bottom = '10px';
        }
    }
    
    window.addEventListener('resize', adjustChatForMobile);
    adjustChatForMobile();
}

// Advanced search functionality
function initializeAdvancedSearch() {
    let searchTimeout;
    
    const searchInput = document.getElementById('searchMentors');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchMentors();
                
                // Add search suggestions (simplified)
                const searchTerm = e.target.value.toLowerCase();
                if (searchTerm.length > 2) {
                    showSearchSuggestions(searchTerm);
                }
            }, 300);
        });
    }
}

function showSearchSuggestions(searchTerm) {
    // This would typically connect to a search API
    // For demo purposes, we'll show some basic suggestions
    const allSkills = [];
    const allSpecialties = [];
    
    Object.values(mentorsData).flat().forEach(mentor => {
        allSkills.push(...mentor.skills);
        allSpecialties.push(mentor.specialty);
    });
    
    const uniqueSkills = [...new Set(allSkills)];
    const uniqueSpecialties = [...new Set(allSpecialties)];
    
    const suggestions = [
        ...uniqueSkills.filter(skill => skill.toLowerCase().includes(searchTerm)),
        ...uniqueSpecialties.filter(specialty => specialty.toLowerCase().includes(searchTerm))
    ].slice(0, 5);
    
    // In a real application, you would display these suggestions in a dropdown
    console.log('Search suggestions:', suggestions);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeNavigation();
    enhanceFormSubmission();
    loadUserPreferences();
    initializeKeyboardShortcuts();
    initializeScrollAnimations();
    initializePerformanceMonitoring();
    initializeErrorHandling();
    initializeAccessibility();
    initializeMobileEnhancements();
    initializeAdvancedSearch();
    
    // Add periodic auto-save for user preferences
    setInterval(saveUserPreferences, 30000); // Save every 30 seconds
    
    // Initialize tooltips and help text
    const elementsWithTooltips = document.querySelectorAll('[title]');
    elementsWithTooltips.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            // Simple tooltip implementation
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.title;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 0.5rem;
                border-radius: 5px;
                font-size: 0.8rem;
                pointer-events: none;
                z-index: 3000;
                max-width: 200px;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
            
            e.target.removeAttribute('title');
            e.target.tooltipElement = tooltip;
        });
        
        element.addEventListener('mouseleave', (e) => {
            if (e.target.tooltipElement) {
                document.body.removeChild(e.target.tooltipElement);
                e.target.setAttribute('title', e.target.tooltipElement.textContent);
                e.target.tooltipElement = null;
            }
        });
    });
    
    console.log('Career Clarity platform initialized successfully!');
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}