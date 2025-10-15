// Game data - 18 games total (2 pages of 9 games each)
const games = [
    {
        id: "gta5",
        title: "Grand Theft Auto V",
        image: "photo/gta5.jpg",
        description: "Explore the massive open world of Los Santos and Blaine County in the critically acclaimed action-adventure game.",
        genre: "Action, Adventure",
        link: "#"
    },
    {
        id: "assetto",
        title: "Assetto Corsa",
        image: "photo/asseto corsa.jpg",
        description: "Experience the most realistic racing simulation with authentic car physics and laser-scanned tracks.",
        genre: "Racing, Simulation",
        link: "#"
    },
    {
        id: "forza",
        title: "FORZA HORIZON 5",
        image: "photo/forza.jpg",
        description: "Explore the vibrant open world landscapes of Mexico in the ultimate Horizon racing adventure.",
        genre: "Racing, Open World",
        link: "#"
    },
    {
        id: "godofwar",
        title: "God of War",
        image: "photo/god of war.jpg",
        description: "Embark on a epic and emotional journey with Kratos and Atreus through the realm of Midgard.",
        genre: "Action, Adventure",
        link: "#"
    },
    {
        id: "cyberpunk",
        title: "Cyberpunk 2077",
        image: "photo/cyberpunk.png",
        description: "Become a cyberpunk mercenary in the vast open world of Night City, where your choices shape the story.",
        genre: "RPG, Sci-Fi",
        link: "#"
    },
    {
        id: "roller",
        title: "Roller Champions™",
        image: "photo/roller.png",
        description: "Team up and compete in the fast-paced roller derby inspired sport in futuristic arenas.",
        genre: "Sports, Action",
        link: "#"
    },
    {
        id: "ghostrunner",
        title: "Ghostrunner",
        image: "photo/gost.png",
        description: "Slice and dash through enemies in this lightning-fast cyberpunk action game with one-hit kills.",
        genre: "Action, Cyberpunk",
        link: "#"
    },
    {
        id: "fifa23",
        title: "FIFA 23",
        image: "photo/fifa 23.jpg",
        description: "Experience the world's game with HyperMotion2 technology and both men's and women's FIFA World Cup™.",
        genre: "Sports, Simulation",
        link: "#"
    },
    {
        id: "cod",
        title: "Call of Duty: Modern Warfare II",
        image: "photo/call of duty.jpg",
        description: "The ultimate weapon is team. Squad up with your friends and fight in the world of Call of Duty.",
        genre: "FPS, Action",
        link: "#"
    },
    // Page 2 Games
    {
        id: "eldenring",
        title: "Elden Ring",
        image: "photo/Elden Ring.jpg",
        description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
        genre: "RPG, Fantasy",
        link: "#"
    },
    {
        id: "reddead",
        title: "Red Dead Redemption 2",
        image: "photo/read dead.jpg",
        description: "America, 1899. The end of the wild west era has begun. After a robbery goes wrong, Arthur Morgan and the Van der Linde gang are forced to flee.",
        genre: "Action, Adventure",
        link: "#"
    },
    {
        id: "minecraft",
        title: "Minecraft",
        image: "photo/minecraft.jpg",
        description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles.",
        genre: "Sandbox, Adventure",
        link: "#"
    },
    {
        id: "spiderman",
        title: "Days Gone",
        image: "photo/days gone.jpg",
        description: "Experience the rise of Days Gone as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        genre: "Action, Zombi",
        link: "#"
    },
    {
        id: "witcher3",
        title: "The Witcher 3: Wild Hunt",
        image: "photo/the witcher.jpg",
        description: "As a professional monster slayer, Geralt of Rivia is a Witcher, a magically enhanced mutant with supernatural abilities.",
        genre: "RPG, Fantasy",
        link: "#"
    },
    {
        id: "overwatch2",
        title: "Overwatch 2",
        image: "photo/Overwatch 2.png",
        description: "Team-based first-person shooter featuring intense PvP combat and a diverse cast of heroes with unique abilities.",
        genre: "FPS, Action",
        link: "#"
    },
    {
        id: "rainbow6",
        title: "Tom Clancy's Rainbow Six Siege",
        image: "photo/gta5.jpg",
        description: "Master the art of destruction and gadgetry in Tom Clancy's Rainbow Six Siege.",
        genre: "FPS, Tactical",
        link: "#"
    },
    {
        id: "valorant",
        title: "VALORANT",
        image: "photo/valo.jpg",
        description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.",
        genre: "FPS, Tactical",
        link: "#"
    }
];

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const gameGrid = document.getElementById('game-grid');
const pagination = document.getElementById('pagination');
const paginationBottom = document.getElementById('pagination-bottom');
const gameLargeImage = document.getElementById('game-large-image');
const gameLaunchImage = document.getElementById('game-launch-image');
const userEmailInput = document.getElementById('user-email');
const startGameBtn = document.getElementById('start-game-btn');
const playGameLink = document.getElementById('play-game-link');
const backToLibraryBtn = document.querySelector('.back-to-library');
const activeTimer = document.getElementById('active-timer');
const activeTimerDisplay = document.getElementById('active-timer-display');
const activeGameTitle = document.getElementById('active-game-title');
const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const logoRefresh = document.getElementById('logo-refresh');
const authButtons = document.getElementById('auth-buttons');
const profileLink = document.getElementById('profile-link');
const logoutBtn = document.getElementById('logout-btn');
const editProfileBtn = document.getElementById('edit-profile-btn');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const memberSince = document.getElementById('member-since');
const gamesPlayed = document.getElementById('games-played');
const totalPlayTime = document.getElementById('total-play-time');
const achievements = document.getElementById('achievements');
const recentGamesList = document.getElementById('recent-games-list');
const saveProfileBtn = document.getElementById('save-profile-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const deleteAccountBtn = document.getElementById('delete-account-btn');

// Current game variable
let currentGame = null;
let countdownInterval = null;
let sessionEndTime = null;
let currentPage = 1;
const gamesPerPage = 9;

// Update profile UI function - VERSION CORRIGÉE
function updateProfileUI() {
    const isLoggedIn = localStorage.getItem('apolo_is_logged_in') === 'true';
    
    if (isLoggedIn && userProfile) {
        // Update desktop navigation
        document.getElementById('profile-link').style.display = 'block';
        
        // Update mobile navigation
        mobileProfileLink.style.display = 'block';
        
        // Update auth buttons - VERSION CORRIGÉE POUR MOBILE
        authButtons.innerHTML = `
            <button class="btn btn-secondary" id="header-profile-btn">
                <i class="fas fa-user"></i> 
                <span class="btn-text">Profile</span>
            </button>
            <button class="btn btn-primary" id="header-logout-btn">
                <i class="fas fa-sign-out-alt"></i>
                <span class="btn-text">Logout</span>
            </button>
        `;
        
        // Add event listeners to new buttons
        document.getElementById('header-profile-btn').addEventListener('click', () => {
            showPage('page8');
        });
        
        document.getElementById('header-logout-btn').addEventListener('click', () => {
            userProfile = null;
            localStorage.removeItem('apolo_current_user');
            localStorage.removeItem('apolo_is_logged_in');
            updateProfileUI();
            showNotification('Successfully logged out!', 'success');
            showPage('page1');
        });
        
    } else {
        // Reset navigation
        document.getElementById('profile-link').style.display = 'none';
        mobileProfileLink.style.display = 'none';
        
        // Reset auth buttons - VERSION CORRIGÉE POUR MOBILE
        authButtons.innerHTML = `
            <button class="btn btn-secondary nav-link" data-page="page4">
                <i class="fas fa-sign-in-alt"></i>
                <span class="btn-text">Sign In</span>
            </button>
            <button class="btn btn-primary nav-link" data-page="page5">
                <i class="fas fa-user-plus"></i>
                <span class="btn-text">Sign Up</span>
            </button>
        `;
        
        // Ré-attacher les event listeners
        document.querySelectorAll('.auth-buttons .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
            });
        });
    }
}

// Code de débogage pour vérifier l'état des boutons
function debugAuthButtons() {
    console.log('Auth buttons debug:');
    console.log('Element:', document.getElementById('auth-buttons'));
    console.log('Display style:', document.getElementById('auth-buttons').style.display);
    console.log('Visibility:', document.getElementById('auth-buttons').style.visibility);
    console.log('Computed display:', window.getComputedStyle(document.getElementById('auth-buttons')).display);
}

// Appeler cette fonction si les boutons ne s'affichent pas
// debugAuthButtons();

// Hamburger Menu Functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileProfileLink = document.getElementById('mobile-profile-link');

// Créer l'overlay
const overlay = document.createElement('div');
overlay.className = 'mobile-menu-overlay';
document.body.appendChild(overlay);

// Toggle mobile menu
hamburgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Fermer le menu en cliquant sur l'overlay
overlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu function
function closeMobileMenu() {
    hamburgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Update profile UI function (identique à avant)
function updateProfileUI() {
    const isLoggedIn = localStorage.getItem('apolo_is_logged_in') === 'true';
    
    if (isLoggedIn && userProfile) {
        // Update desktop navigation
        document.getElementById('profile-link').style.display = 'block';
        
        // Update mobile navigation
        mobileProfileLink.style.display = 'block';
        
        // Update auth buttons
        authButtons.innerHTML = `
            <button class="btn btn-secondary" id="header-profile-btn">
                <i class="fas fa-user"></i> Profile
            </button>
            <button class="btn btn-primary" id="header-logout-btn">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        `;
        
        // Add event listeners
        document.getElementById('header-profile-btn').addEventListener('click', () => {
            showPage('page8');
        });
        
        document.getElementById('header-logout-btn').addEventListener('click', () => {
            userProfile = null;
            localStorage.removeItem('apolo_current_user');
            localStorage.removeItem('apolo_is_logged_in');
            updateProfileUI();
            showNotification('Successfully logged out!', 'success');
            showPage('page1');
        });
        
    } else {
        // Reset navigation
        document.getElementById('profile-link').style.display = 'none';
        mobileProfileLink.style.display = 'none';
        
        // Reset auth buttons
        authButtons.innerHTML = `
            <button class="btn btn-secondary nav-link" data-page="page4">Sign In</button>
            <button class="btn btn-primary nav-link" data-page="page5">Sign Up</button>
        `;
        
        // Add event listeners
        document.querySelectorAll('.auth-buttons .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
            });
        });
    }
}

// Initialize mobile menu
function initMobileMenu() {
    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            closeMobileMenu();
        });
    });
}

// Dans ton DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    // ... ton code existant ...
});

// User management system
const users = JSON.parse(localStorage.getItem('apolo_users')) || [];
let userProfile = JSON.parse(localStorage.getItem('apolo_current_user')) || null;

// API Configuration Placeholder
const APOLO_CONFIG = {
    GOOGLE_OAUTH_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    GOOGLE_OAUTH_REDIRECT_URI: 'YOUR_REDIRECT_URI_HERE',
    API_BASE_URL: 'YOUR_API_BASE_URL_HERE'
};

console.log('APOLO Cloud Gaming - OAuth configuration ready for:', APOLO_CONFIG);

// Initialize Canvas Particle System
function initParticleSystem() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Particle array
    const particles = [];
    const particleCount = 100;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 - 0.5,
            color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`
        });
    }
    
    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            // Move particles
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Mouse interaction
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100;
                
                particle.x -= Math.cos(angle) * force * 2;
                particle.y -= Math.sin(angle) * force * 2;
            }
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Generate game cards for current page
function generateGameCards(page) {
    gameGrid.innerHTML = '';
    
    const startIndex = (page - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const gamesToShow = games.slice(startIndex, endIndex);
    
    gamesToShow.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.style.animationDelay = `${index * 0.1}s`;
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-genre">${game.genre}</p>
                <button class="lets-play-btn" data-game="${game.id}">Let's Play</button>
            </div>
        `;
        gameGrid.appendChild(gameCard);
    });
    
    // Add event listeners to the new buttons
    document.querySelectorAll('.lets-play-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Add click animation
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
            
            const gameId = this.getAttribute('data-game');
            currentGame = games.find(g => g.id === gameId);
            
            // Update page 2 with game details
            gameLargeImage.src = currentGame.image;
            gameLargeImage.alt = currentGame.title;
            
            // Show page 2
            showPage('page2');
        });
    });
}

// Generate pagination buttons
function generatePagination() {
    const totalPages = Math.ceil(games.length / gamesPerPage);
    pagination.innerHTML = '';
    paginationBottom.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.classList.add('page-btn');
        if (i === currentPage) pageBtn.classList.add('active');
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            generateGameCards(currentPage);
            generatePagination();
        });
        
        pagination.appendChild(pageBtn.cloneNode(true));
        paginationBottom.appendChild(pageBtn);
    }
}

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

// Logo refresh
logoRefresh.addEventListener('click', () => {
    showPage('page1');
    // Add refresh animation
    logoRefresh.style.transform = 'scale(1.1)';
    setTimeout(() => {
        logoRefresh.style.transform = 'scale(1)';
    }, 300);
});

// Email validation
userEmailInput.addEventListener('input', () => {
    const email = userEmailInput.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    startGameBtn.disabled = !isValidEmail;
});

// Start Game button
startGameBtn.addEventListener('click', () => {
    if (userEmailInput.value) {
        // Store email (in a real app, you would send this to a server)
        localStorage.setItem('userEmail', userEmailInput.value);
        
        // Start the timer
        startGameTimer();
        
        // Update page 3 with game details
        gameLaunchImage.src = currentGame.image;
        gameLaunchImage.alt = currentGame.title;
        playGameLink.href = "https://www.instagram.com/polo__101/";
        
        // Show page 3
        showPage('page3');
        
        // Add to user's recent games if logged in
        if (userProfile) {
            addToRecentGames(currentGame);
            updateUserStats(currentGame, 4);
        }
    }
});

// Start game timer function
function startGameTimer() {
    // Set session end time (4 hours from now)
    sessionEndTime = new Date();
    sessionEndTime.setHours(sessionEndTime.getHours() + 4);
    
    // Update active timer display
    activeGameTitle.textContent = `Playing: ${currentGame.title}`;
    activeTimer.style.display = 'block';
    
    // Start countdown
    updateTimerDisplay();
    countdownInterval = setInterval(updateTimerDisplay, 1000);
}

// Update timer display
function updateTimerDisplay() {
    if (!sessionEndTime) return;
    
    const now = new Date();
    const timeLeft = sessionEndTime - now;
    
    if (timeLeft <= 0) {
        // Session ended
        clearInterval(countdownInterval);
        activeTimerDisplay.textContent = "Session Ended";
        activeTimer.style.backgroundColor = 'rgba(225, 112, 85, 0.9)';
        return;
    }
    
    // Calculate hours, minutes, seconds
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Format and display
    activeTimerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when less than 30 minutes left
    if (hours === 0 && minutes < 30) {
        activeTimer.style.backgroundColor = 'rgba(253, 203, 110, 0.9)';
    }
    
    // Change color when less than 5 minutes left
    if (hours === 0 && minutes < 5) {
        activeTimer.style.backgroundColor = 'rgba(225, 112, 85, 0.9)';
    }
}

// Back to library
backToLibraryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('page1');
});

// Generate unique user ID
function generateUserId() {
    return 'user_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Improved signup function
signupBtn.addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (name && email && password && confirm) {
        if (password !== confirm) {
            showNotification('Passwords do not match!', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters long!', 'error');
            return;
        }
        
        // Check if user already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            showNotification('User with this email already exists!', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: generateUserId(),
            name: name,
            email: email,
            password: password, // In real app, hash this!
            memberSince: new Date().toISOString(),
            gamesPlayed: 0,
            totalPlayTime: 0,
            achievements: 0,
            recentGames: [],
            isVerified: false
        };
        
        users.push(newUser);
        localStorage.setItem('apolo_users', JSON.stringify(users));
        
        // Auto login after signup
        userProfile = newUser;
        localStorage.setItem('apolo_current_user', JSON.stringify(userProfile));
        localStorage.setItem('apolo_is_logged_in', 'true');
        
        updateProfileUI();
        showNotification('Account created successfully! Welcome to APOLO!', 'success');
        showPage('page1');
    } else {
        showNotification('Please fill in all fields!', 'error');
    }
});

// Improved signin function
signinBtn.addEventListener('click', () => {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    if (email && password) {
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            userProfile = user;
            localStorage.setItem('apolo_current_user', JSON.stringify(userProfile));
            localStorage.setItem('apolo_is_logged_in', 'true');
            
            updateProfileUI();
            showNotification(`Welcome back, ${user.name}!`, 'success');
            showPage('page1');
        } else {
            showNotification('Invalid email or password!', 'error');
        }
    } else {
        showNotification('Please fill in all fields!', 'error');
    }
});

// Google OAuth Integration
document.getElementById('google-signin')?.addEventListener('click', handleGoogleAuth);
document.getElementById('google-signup')?.addEventListener('click', handleGoogleAuth);

function handleGoogleAuth() {
    // Placeholder pour l'intégration Google OAuth
    // Après avoir uploadé le site, remplacez cette fonction par l'implémentation réelle
    
    showNotification('Google OAuth will be integrated after site deployment. Currently in demo mode.', 'info');
    
    // Simulation d'une connexion Google réussie
    setTimeout(() => {
        const mockGoogleUser = {
            id: 'google_' + Math.random().toString(36).substr(2, 9),
            name: 'Google User',
            email: 'user@gmail.com',
            memberSince: new Date().toISOString(),
            gamesPlayed: Math.floor(Math.random() * 10),
            totalPlayTime: Math.floor(Math.random() * 50),
            achievements: Math.floor(Math.random() * 5),
            recentGames: [],
            isVerified: true,
            authProvider: 'google'
        };
        
        userProfile = mockGoogleUser;
        localStorage.setItem('apolo_current_user', JSON.stringify(userProfile));
        localStorage.setItem('apolo_is_logged_in', 'true');
        
        updateProfileUI();
        showNotification('Successfully signed in with Google!', 'success');
        showPage('page1');
    }, 1500);
}

// Enhanced user stats tracking
function updateUserStats(game, playTime = 4) {
    if (!userProfile) return;
    
    userProfile.gamesPlayed += 1;
    userProfile.totalPlayTime += playTime;
    
    // Award achievements based on play time
    if (userProfile.totalPlayTime >= 100) {
        userProfile.achievements = Math.max(userProfile.achievements, 5);
    } else if (userProfile.totalPlayTime >= 50) {
        userProfile.achievements = Math.max(userProfile.achievements, 3);
    } else if (userProfile.totalPlayTime >= 10) {
        userProfile.achievements = Math.max(userProfile.achievements, 1);
    }
    
    // Update in storage
    const userIndex = users.findIndex(u => u.id === userProfile.id);
    if (userIndex !== -1) {
        users[userIndex] = userProfile;
        localStorage.setItem('apolo_users', JSON.stringify(users));
        localStorage.setItem('apolo_current_user', JSON.stringify(userProfile));
    }
    
    updateProfileUI();
}

// Add to recent games
function addToRecentGames(game) {
    if (!userProfile) return;
    
    // Check if game is already in recent games
    const existingIndex = userProfile.recentGames.findIndex(g => g.id === game.id);
    
    if (existingIndex !== -1) {
        // Remove existing entry
        userProfile.recentGames.splice(existingIndex, 1);
    }
    
    // Add to beginning of array
    userProfile.recentGames.unshift({
        id: game.id,
        title: game.title,
        image: game.image,
        genre: game.genre,
        playedAt: new Date().toLocaleDateString()
    });
    
    // Keep only the 5 most recent games
    if (userProfile.recentGames.length > 5) {
        userProfile.recentGames.pop();
    }
    
    // Update user profile
    localStorage.setItem('apolo_current_user', JSON.stringify(userProfile));
    
    // Update UI
    updateRecentGamesUI();
}

// Update recent games UI
function updateRecentGamesUI() {
    if (!userProfile || !userProfile.recentGames) return;
    
    recentGamesList.innerHTML = '';
    
    userProfile.recentGames.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('recent-game-item');
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="recent-game-image">
            <div class="recent-game-info">
                <h4>${game.title}</h4>
                <p>${game.genre} • Played on ${game.playedAt}</p>
            </div>
        `;
        recentGamesList.appendChild(gameItem);
    });
}

// Update profile UI
function updateProfileUI() {
    const isLoggedIn = localStorage.getItem('apolo_is_logged_in') === 'true';
    
    if (isLoggedIn && userProfile) {
        // Update navigation
        document.getElementById('signin-link').style.display = 'none';
        document.getElementById('signup-link').style.display = 'none';
        document.getElementById('profile-link').style.display = 'block';
        
        // Update auth buttons
        authButtons.innerHTML = `
            <button class="btn btn-secondary" id="header-profile-btn">
                <i class="fas fa-user"></i> Profile
            </button>
            <button class="btn btn-primary" id="header-logout-btn">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        `;
        
        // Add event listeners to new buttons
        document.getElementById('header-profile-btn').addEventListener('click', () => {
            showPage('page8');
        });
        
        document.getElementById('header-logout-btn').addEventListener('click', () => {
            userProfile = null;
            localStorage.removeItem('apolo_current_user');
            localStorage.removeItem('apolo_is_logged_in');
            updateProfileUI();
            showNotification('Successfully logged out!', 'success');
            showPage('page1');
        });
        
        // Update profile page
        if (profileName) profileName.textContent = userProfile.name;
        if (profileEmail) profileEmail.textContent = userProfile.email;
        if (memberSince) {
            const sinceDate = new Date(userProfile.memberSince);
            memberSince.textContent = sinceDate.getFullYear();
        }
        if (gamesPlayed) gamesPlayed.textContent = userProfile.gamesPlayed;
        if (totalPlayTime) totalPlayTime.textContent = `${userProfile.totalPlayTime} hours`;
        if (achievements) achievements.textContent = userProfile.achievements;
        
        // Update recent games
        updateRecentGamesUI();
        
    } else {
        // Reset navigation
        document.getElementById('signin-link').style.display = 'block';
        document.getElementById('signup-link').style.display = 'block';
        document.getElementById('profile-link').style.display = 'none';
        
        // Reset auth buttons
        authButtons.innerHTML = `
            <button class="btn btn-secondary nav-link" data-page="page4">Sign In</button>
            <button class="btn btn-primary nav-link" data-page="page5">Sign Up</button>
        `;
        
        // Add event listeners to new auth buttons
        document.querySelectorAll('.auth-buttons .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
            });
        });
    }
}

// Edit Profile functionality
editProfileBtn?.addEventListener('click', () => {
    if (!userProfile) return;
    
    // Pre-fill form with current data
    document.getElementById('edit-profile-name').value = userProfile.name;
    document.getElementById('edit-profile-email').value = userProfile.email;
    
    showPage('page9');
});

saveProfileBtn?.addEventListener('click', () => {
    const name = document.getElementById('edit-profile-name').value;
    const email = document.getElementById('edit-profile-email').value;
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-new-password').value;
    
    if (!name || !email) {
        showNotification('Name and email are required!', 'error');
        return;
    }
    
    // Check if email is already taken by another user
    const emailExists = users.find(user => user.email === email && user.id !== userProfile.id);
    if (emailExists) {
        showNotification('Email is already taken by another user!', 'error');
        return;
    }
    
    // Update user profile
    userProfile.name = name;
    userProfile.email = email;
    
    // Handle password change if provided
    if (newPassword) {
        if (currentPassword !== userProfile.password) {
            showNotification('Current password is incorrect!', 'error');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            showNotification('New passwords do not match!', 'error');
            return;
        }
        
        userProfile.password = newPassword;
    }
    
    // Update in users array
    const userIndex = users.findIndex(u => u.id === userProfile.id);
    if (userIndex !== -1) {
        users[userIndex] = userProfile;
        localStorage.setItem('apolo_users', JSON.stringify(users));
        localStorage.setItem('apolo_current_user', JSON.stringify(userProfile));
    }
    
    updateProfileUI();
    showNotification('Profile updated successfully!', 'success');
    showPage('page8');
});

cancelEditBtn?.addEventListener('click', () => {
    showPage('page8');
});

deleteAccountBtn?.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone!')) {
        // Remove user from users array
        const userIndex = users.findIndex(u => u.id === userProfile.id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            localStorage.setItem('apolo_users', JSON.stringify(users));
        }
        
        // Logout user
        userProfile = null;
        localStorage.removeItem('apolo_current_user');
        localStorage.removeItem('apolo_is_logged_in');
        
        updateProfileUI();
        showNotification('Account deleted successfully!', 'success');
        showPage('page1');
    }
});

// Logout button
logoutBtn?.addEventListener('click', () => {
    userProfile = null;
    localStorage.removeItem('apolo_current_user');
    localStorage.removeItem('apolo_is_logged_in');
    
    updateProfileUI();
    showNotification('Successfully logged out!', 'success');
    showPage('page1');
});

// Show specific page
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    initParticleSystem();
    
    // Generate initial game cards and pagination
    generateGameCards(currentPage);
    generatePagination();
    
    // Check if user email is stored
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        userEmailInput.value = storedEmail;
        startGameBtn.disabled = false;
    }
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('apolo_is_logged_in') === 'true';
    if (isLoggedIn) {
        const storedProfile = localStorage.getItem('apolo_current_user');
        if (storedProfile) {
            userProfile = JSON.parse(storedProfile);
        }
    }
    
    // Update UI based on login status
    updateProfileUI();
    
    // Add click animation to all buttons
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = e.target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            e.target.style.position = 'relative';
            e.target.style.overflow = 'hidden';
            e.target.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});
