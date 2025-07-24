document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.querySelector('.yes-btn');
    const declineBtn = document.querySelector('.no-btn');
    const notificationBox = document.querySelector('.notification-box');
    // Remove countdown functionality since countdown element no longer exists
    // Add click sound effect simulation
    function playClickSound() {
        // Create audio context for sound effect
        const audioContext = new (window.AudioContext || window.webkitContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
  
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
  
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
  
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
  
    // Accept button functionality
    acceptBtn.addEventListener('click', function() {
        playClickSound();
  
        // Add glow effect
        this.style.boxShadow = '0 0 50px rgba(0, 191, 255, 1)';
  
        setTimeout(() => {
            // Transform notification box to dashboard
            notificationBox.style.transition = 'all 1s ease';
            notificationBox.style.transform = 'translate(-50%, -50%) scale(1)';
            notificationBox.style.width = '900px';
            notificationBox.style.height = 'auto';
  
            // Update notification content to dashboard
            setTimeout(() => {
                notificationBox.innerHTML = `
  
                  <div class="dashboard-main">
                      <div class="dashboard-top">
                          <div class="player-avatar-section">
                              <div class="avatar-container">
                                  <img src="155e1e41-e132-439b-b93a-0216c8514832.png" alt="Solo Leveling Character" class="main-avatar">
                              </div>
                          </div>
                          <div class="welcome-section">
                              <div class="domain-box">
                                  <div class="domain-text">WELCOME PLAYER TO SLEEP<br>DEATH DOMAIN</div>
                              </div>
                              <div class="system-box">
                                  <div class="system-text">"System: Monarch of ST. MARY "</div>
                              </div>
                          </div>
                      </div>
  
                      <div class="dashboard-content">
                      <div class="main-content-layout">
                          <div class="stats-content">
                              <div class="section-header">📊 Stats & Levels Tracker</div>
                              <div class="stats-skills-container">
                                  <div class="stats-grid">
                                      <div class="stat-card">
                                          <div class="stat-icon">💪</div>
                                          <div class="stat-label">Strength</div>
                                          <div class="stat-details">Power, power endurance, agility, strength, wit.</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 30%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">🧠</div>
                                          <div class="stat-label">Intelligence</div>
                                          <div class="stat-details">Powerful intellect, and strength.<br>Level 1 XP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 45%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">⚡</div>
                                          <div class="stat-label">Willpower</div>
                                          <div class="stat-details">Lead, merit, and strength.<br>Level 1 2 XP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 60%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">⚡</div>
                                          <div class="stat-label">Skills</div>
                                          <div class="stat-details">Earning, strength, leadership.<br>Level 0 EXP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 25%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">👑</div>
                                          <div class="stat-label">Leadership</div>
                                          <div class="stat-details">Lifetimes, and empowering art.<br>Level 1 0 EXP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 40%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">💰</div>
                                          <div class="stat-label">Wealth</div>
                                          <div class="stat-details">Earning, trend stewardly.<br>Level 10 EXP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 35%;"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <div class="right-sidebar">
                              <div class="become-player-container">
                                  <div class="become-player" onclick="showSlaveConfirmation()">
                                      <div class="become-title">BECOME A SLAVE</div>
                                  </div>
                              </div>
                              <div class="music-control-container">
                                  <button class="music-toggle-btn" onclick="toggleBackgroundMusic()">
                                      <span id="music-icon">🎵</span>
                                      <span>MUSIC</span>
                                  </button>
                              </div>
                          </div>
                      </div>
  
                      <div class="navigation-section">
                          <div class="nav-grid">
                              <button class="nav-btn home-btn" onclick="showHome()">HOME</button>
                              <button class="nav-btn about-btn" onclick="showAbout()">ABOUT</button>
                              <button class="nav-btn project-btn" onclick="showProject()">PROJECT</button>
                              <button class="nav-btn contact-btn" onclick="showContact()">CONTACT</button>
                          </div>
                      </div>
                  </div>
              `;
            }, 500);
  
        }, 300);
    });
  
    // Decline button functionality
    declineBtn.addEventListener('click', function() {
        playClickSound();
  
        // Add glow effect
        this.style.boxShadow = '0 0 50px rgba(0, 191, 255, 1)';
  
        setTimeout(() => {
            // Shake effect
            notificationBox.style.animation = 'shake 0.5s ease-in-out';
  
            // Update notification content
            const notificationContent = document.querySelector('.notification-content');
            notificationContent.innerHTML = `
          <div class="notification-content">
              <p>"This isn’t just a website. It’s my dungeon. Only the worthy may proceed."</p>
              <p class="question-text">Will you accept?</p>
          </div>
              <p style="color: #ff4444;">Access Denied</p>
              <p class="highlight-text">words left behind</p>
              <p style="color: #ff4444;">Try again...</p>
          `;
        }, 300);
    });
  
    // Add typing effect to system text
    function typeWriter(element, text, speed = 50) {
        element.innerHTML = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
  
    // Initialize typing effect for notification content
    setTimeout(() => {
        const notificationContent = document.querySelector('.notification-content');
        const originalText = notificationContent.textContent;
        typeWriter(notificationContent, originalText, 30);
    }, 1000);
  });
  
  // Navigation functions
  function showHome() {
    const notificationBox = document.querySelector('.notification-box');
    notificationBox.innerHTML = `
      <div class="dashboard-main">
          <div class="dashboard-top">
              <div class="player-avatar-section">
                  <div class="avatar-container">
                      <img src="155e1e41-e132-439b-b93a-0216c8514832.png" alt="Solo Leveling Character" class="main-avatar">
                  </div>
              </div>
              <div class="welcome-section">
                  <div class="domain-box">
                      <div class="domain-text">WELCOME PLAYER TO SLEEP<br>DEATH DOMAIN</div>
                  </div>
                  <div class="system-box">
                      <div class="system-text">"System: Monarch of Late Submissions"</div>
                  </div>
              </div>
          </div>
  
          <div class="dashboard-content">
                      <div class="main-content-layout">
                          <div class="stats-content">
                              <div class="section-header">📊 Stats & Levels Tracker</div>
                              <div class="stats-skills-container">
                                  <div class="stats-grid">
                                      <div class="stat-card">
                                          <div class="stat-icon">💪</div>
                                          <div class="stat-label">Strength</div>
                                          <div class="stat-details">Power, power endurance, agility, strength, wit.</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 30%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">🧠</div>
                                          <div class="stat-label">Intelligence</div>
                                          <div class="stat-details">Powerful intellect, and strength.<br>Level 1 XP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 45%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">⚡</div>
                                          <div class="stat-label">Willpower</div>
                                          <div class="stat-details">Lead, merit, and strength.<br>Level 1 2 XP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 60%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">⚡</div>
                                          <div class="stat-label">Skills</div>
                                          <div class="stat-details">Earning, strength, leadership.<br>Level 0 EXP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 25%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">👑</div>
                                          <div class="stat-label">Leadership</div>
                                          <div class="stat-details">Lifetimes, and empowering art.<br>Level 1 0 EXP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 40%;"></div>
                                          </div>
                                      </div>
                                      <div class="stat-card">
                                          <div class="stat-icon">💰</div>
                                          <div class="stat-label">Wealth</div>
                                          <div class="stat-details">Earning, trend stewardly.<br>Level 10 EXP</div>
                                          <div class="progress-bar">
                                              <div class="progress-fill" style="width: 35%;"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          <div class="right-sidebar">
                              <div class="become-player-container">
                                  <div class="become-player" onclick="showSlaveConfirmation()">
                                      <div class="become-title">BECOME A SLAVE</div>
                                  </div>
                              </div>
                              <div class="music-control-container">
                                  <button class="music-toggle-btn" onclick="toggleBackgroundMusic()">
                                      <span id="music-icon">🎵</span>
                                      <span>MUSIC</span>
                                  </button>
                              </div>
                          </div>
                      </div>
  
                      <div class="navigation-section">
                          <div class="nav-grid">
                              <button class="nav-btn home-btn" onclick="showHome()">HOME</button>
                              <button class="nav-btn about-btn" onclick="showAbout()">ABOUT</button>
                              <button class="nav-btn project-btn" onclick="showProject()">PROJECT</button>
                              <button class="nav-btn contact-btn" onclick="showContact()">CONTACT</button>
                          </div>
                      </div>
                  </div>
      </div>
  `;
  }
  
  function showAbout() {
    const notificationBox = document.querySelector('.notification-box');
    notificationBox.innerHTML = `
      <div class="about-main">
          <div class="about-header">
              <h1 class="about-title">ABOUT</h1>
          </div>
  
          <div class="about-content">
              <div class="about-profile">
                  <div class="profile-avatar">
                      <img src="mypic.jpg" alt="Profile Avatar" class="profile-image">
                  </div>
                  <div class="profile-info">
                      <div class="profile-card">
                          <h2 class="profile-name">SHARWIN TERAMBULO</h2>
                          <p class="profile-description">FORMER BSIT STUDENT<br>COLLEGE OF<br>ST MARY BANSALAN<br>DAVAO DEL SUR</p>
                      </div>
                  </div>
              </div>
  
              <div class="about-description">
                  <p>Hi! I'm Dudz, an animator and web developer in this web</p>
              </div>
  
              <div class="contact-info">
                  <p>interest working with me? just pm me hehe.. an email at terambulasharwin@smcb.edu.ph</p>
              </div>
  
              <div class="about-stats">
                  <div class="about-section">
                      <h3 class="section-title">🎓 EDUCATION</h3>
                      <div class="education-grid">
                          <div class="education-item">
                              <strong>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</strong><br>
                              SENIOR GRADE THIRD YEAR AT COLLEGE
                          </div>
                      </div>
                  </div>
  
                  <div class="about-section">
                      <h3 class="section-title">💼 OTHER INTEREST</h3>
                      <div class="interest-grid">
                          <div class="interest-item">
                              <span class="interest-icon">🎮</span>
                              <div>
                                  <strong>GAMING</strong><br>
                                  <small>PLAYING ONLINE GAMES</small>
                              </div>
                          </div>
                          <div class="interest-item">
                              <span class="interest-icon">🍽️</span>
                              <div>
                                  <strong>EATING</strong><br>
                                  <small>COOKING DI JOKE LANG HE</small>
                              </div>
                          </div>
                      </div>
                  </div>
  
                  <div class="skills-section">
                      <div class="skill-category">
                          <h4>💪 Skills</h4>
                          <p>Hi, I'm a college student taking BSIT. I a lot of hobbies like playing games like Dota 2 and Valorant, watching anime</p>
                      </div>
                      <div class="skill-category">
                          <h4>👑 Leadership</h4>
                          <p>and getting as much sleep as I can. I enjoy working with computers and making creative stuff like this website.</p>
                      </div>
                      <div class="skill-category">
                          <h4>💰 Wealth</h4>
                          <p>IN MY DREAMS WATAY KWARTA KANUS AH KAHA TA MA SUCCESS ANI :)</p>
                      </div>
                      <div class="skill-category">
                          <h4>🎨 Creativity</h4>
                          <p>Innovation, design, and imagination, expanded</p>
                      </div>
                  </div>
              </div>
  
              <div class="back-navigation">
                  <button class="nav-btn back-btn" onclick="showHome()">← BACK TO HOME</button>
              </div>
          </div>
      </div>
  `;
  }
  
  function showProject() {
    const notificationBox = document.querySelector('.notification-box');
    notificationBox.innerHTML = `
      <div class="project-main">
          <div class="project-header">
              <h1 class="project-title">PROJECT</h1>
              <button class="close-btn" onclick="showHome()">— ✕</button>
          </div>
  
          <div class="project-content">
              <div class="project-cards-container">
                  <div class="project-card web-dev">
                      <div class="project-card-header">
                          <span class="project-icon">💻</span>
                          <span class="project-category">Web Development</span>
                      </div>
                      <div class="project-card-content">
                          <h3>▶ Web Development Projects:</h3>
                          <ul>
                              <li>• Solo Leveling System Dashboard</li>
                              <li>• Gaming Stats Tracker Interface</li>
                              <li>• Player Profile Management System</li>
                              <li>• Interactive Notification Systems</li>
                          </ul>
                      </div>
                  </div>
  
                  <div class="project-card game-dev">
                      <div class="project-card-header">
                          <span class="project-icon">🎮</span>
                          <span class="project-category">Game Development</span>
                      </div>
                      <div class="project-card-content">
                          <h3>▶ Game Development Projects:</h3>
                          <ul>
                              <li>• RPG Character Progression System</li>
                              <li>• Leveling and Stats Management</li>
                              <li>• Interactive Gaming Interfaces</li>
                              <li>• Player Achievement Systems</li>
                          </ul>
                      </div>
                  </div>
              </div>
  
              <div class="tools-development-container">
                  <div class="section-grid">
                      <div class="tools-section">
                          <button class="section-header-btn" onclick="toggleSection('tools')">TOOLS</button>
                          <div class="section-items" id="tools-items">
                              <div class="tool-item" onclick="window.open('https://replit.com', '_blank')">
                                  <span class="tool-icon">💻</span>
                                  <span class="tool-name">Repl.it</span>
                              </div>
                              <div class="tool-item" onclick="window.open('https://chat.openai.com', '_blank')">
                                  <span class="tool-icon">🤖</span>
                                  <span class="tool-name">ChatGPT</span>
                              </div>
                              <div class="tool-item" onclick="window.open('https://code.visualstudio.com', '_blank')">
                                  <span class="tool-icon">🧩</span>
                                  <span class="tool-name">Visual Studio Code</span>
                              </div>
                              <div class="tool-item" onclick="window.open('https://figma.com', '_blank')">
                                  <span class="tool-icon">🎨</span>
                                  <span class="tool-name">FIGMA</span>
                              </div>
                          </div>
                      </div>
  
                      <div class="development-section">
                          <button class="section-header-btn" onclick="toggleSection('development')">DEVELOPMENT</button>
                          <div class="section-items" id="development-items">
                              <div class="tool-item" onclick="window.open('https://cplusplus.com', '_blank')">
                                  <span class="tool-icon">💡</span>
                                  <span class="tool-name">C++</span>
                              </div>
                              <div class="tool-item" onclick="window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')">
                                  <span class="tool-icon">🌐</span>
                                  <span class="tool-name">HTML</span>
                              </div>
                              <div class="tool-item" onclick="window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')">
                                  <span class="tool-icon">🎨</span>
                                  <span class="tool-name">CSS</span>
                              </div>
                              <div class="tool-item" onclick="window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')">
                                  <span class="tool-icon">⚙️</span>
                                  <span class="tool-name">JavaScript (main.js)</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
  }
  
  // Add toggle function for project sections
  function toggleSection(sectionType) {
    const sectionItems = document.getElementById(sectionType + '-items');
  
    // Close other sections first
    const allSections = document.querySelectorAll('.section-items');
    allSections.forEach(section => {
        if (section !== sectionItems) {
            section.classList.remove('active');
        }
    });
  
    // Toggle current section
    sectionItems.classList.toggle('active');
  }
  
  function showContact() {
    const notificationBox = document.querySelector('.notification-box');
    notificationBox.innerHTML = `
        <div class="contact-main">
            <div class="contact-header">
                <h1 class="contact-title">CONTACT</h1>
            </div>
  
            <div class="contact-content">
                <div class="contact-info-section">
                    <div class="vision-quote">
                        <p><strong>Great vision without great people is irrelevant.</strong></p>
                        <p>Let's work together.</p>
                    </div>
  
                    <div class="contact-details">
                        <div class="contact-item">
                            <span class="contact-label">EMAIL:</span>
                            <span class="contact-value">terambulasharwin@smcb.edu.ph</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-label">PHONE NUM:</span>
                            <span class="contact-value">09619628432</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-label">FB:</span>
                            <span class="contact-value">SHARWIN TERAMBULO</span>
                        </div>
                        <div class="contact-item">
                            <span class="contact-label">IG:</span>
                            <span class="contact-value">D U DZ</span>
                        </div>
                    </div>
  
                    <div class="social-icons">
                        <a href="mailto:terambulasharwin@smcb.edu.ph" class="social-icon" title="Email">
                            <span>📧</span>
                        </a>
                        <a href="tel:09619628432" class="social-icon" title="Phone">
                            <span>📞</span>
                        </a>
                        <a href="https://www.facebook.com/dudz.terambulo" target="_blank" class="social-icon" title="Facebook">
                            <span>📘</span>
                        </a>
                        <a href="https://instagram.com/d.u.d.z" target="_blank" class="social-icon" title="Instagram">
                            <span>📷</span>
                        </a>
                    </div>
                </div>
  
                <div class="contact-form-section">
                    <form class="contact-form" id="contact-form">
                        <div class="form-group">
                            <input type="text" class="form-input" id="name" name="name" placeholder="Enter your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-input" id="email" name="email" placeholder="Enter a valid email address" required>
                        </div>
                        <div class="form-group">
                            <textarea class="form-textarea" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" class="submit-btn">submit</button>
                    </form>
                    <div class="success-message" id="success-message" style="display: none;">
                        <div class="success-content">
                            <div class="success-icon">✅</div>
                            <h3>MESSAGE SENT SUCCESSFULLY!</h3>
                            <p>Thank you for reaching out. I'll get back to you soon!</p>
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="back-navigation">
                <button class="nav-btn back-btn" onclick="showHome()">← BACK TO HOME</button>
            </div>
        </div>
    `;
  
    // Add form submission handler
    setTimeout(() => {
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');
  
        form.addEventListener('submit', function(e) {
            e.preventDefault();
  
            // Get form inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
  
            // Clear previous error styles
            clearErrorStyles();
  
            // Validate inputs
            let isValid = true;
  
            // Name validation
            if (!validateName(nameInput.value)) {
                showFieldError(nameInput, 'Please enter a valid name (at least 2 characters, letters only)');
                isValid = false;
            }
  
            // Email validation
            if (!validateEmail(emailInput.value)) {
                showFieldError(emailInput, 'Please enter a valid email address (e.g., user@gmail.com)');
                isValid = false;
            }
  
            // Message validation
            if (!validateMessage(messageInput.value)) {
                showFieldError(messageInput, 'Please enter a message (at least 10 characters)');
                isValid = false;
            }
  
            // If all fields are valid, show success message
            if (isValid) {
                form.style.display = 'none';
                successMessage.style.display = 'block';
                successMessage.style.animation = 'fadeInScale 0.5s ease-in-out';
            }
        });
    }, 100);
  }
  
  // Validation helper functions
  function validateName(name) {
      // Name should be at least 2 characters, contain only letters and spaces
      const nameRegex = /^[a-zA-Z\s]{2,50}$/;
      return nameRegex.test(name.trim());
  }
  
  function validateEmail(email) {
      // Email validation regex
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email.trim());
  }
  
  function validateMessage(message) {
      // Message should be at least 10 characters
      return message.trim().length >= 10;
  }
  
  function showFieldError(field, message) {
      // Add error styling to field
      field.style.borderColor = '#ff4444';
      field.style.boxShadow = '0 0 10px rgba(255, 68, 68, 0.5)';
  
      // Create or update error message
      let errorElement = field.parentNode.querySelector('.field-error');
      if (!errorElement) {
          errorElement = document.createElement('div');
          errorElement.className = 'field-error';
          field.parentNode.appendChild(errorElement);
      }
      errorElement.textContent = message;
      errorElement.style.color = '#ff4444';
      errorElement.style.fontSize = '12px';
      errorElement.style.marginTop = '5px';
      errorElement.style.display = 'block';
  }
  
  function clearErrorStyles() {
      // Remove error styling from all inputs
      const inputs = document.querySelectorAll('.form-input, .form-textarea');
      inputs.forEach(input => {
          input.style.borderColor = 'rgba(0, 212, 255, 0.4)';
          input.style.boxShadow = 'none';
  
          // Remove error messages
          const errorElement = input.parentNode.querySelector('.field-error');
          if (errorElement) {
              errorElement.style.display = 'none';
          }
      });
  }
  
  // Add CSS animation for shake effect
  const style = document.createElement('style');
  style.textContent = `
  @keyframes shake {
      0%, 100% { transform: translate(-50%, -50%) translateY(0); }
      25% { transform: translate(-50%, -50%) translateY(-5px) rotate(-1deg); }
      75% { transform: translate(-50%, -50%) translateY(5px) rotate(1deg); }
  }
  `;
  document.head.appendChild(style);
  
  function showSlaveConfirmation() {
    showSlaveDialog();
  }
  
  function showSlaveDialog() {
    const notificationBox = document.querySelector('.notification-box');
    notificationBox.innerHTML = `
    <div class="notification-main">
      <div class="notification-header">
        <div class="notification-icon">
          <div class="icon-circle">⚔️</div>
        </div>
        <div class="notification-title">SYSTEM NOTIFICATION</div>
      </div>
      <div class="notification-content">
        <p>The <span style="color: #ff4444; font-weight: bold;">Shadow Monarch</span> has chosen you.</p>
        <p>Will you accept your fate and become a slave?</p>
        <p class="question-text" style="color: #00d4ff; font-weight: bold; font-size: 18px;">Do you accept the System's call?</p>
      </div>
      <div class="button-container">
        <button class="choice-btn yes-btn" onclick="acceptShadowCall()">ACCEPT</button>
        <button class="choice-btn no-btn" onclick="rejectShadowCall()">REJECT</button>
      </div>
    </div>
  `;
  }
  
  function acceptShadowCall() {
    const notificationBox = document.querySelector('.notification-box');
  
    // Add dramatic effect with bigger box and animation
    notificationBox.style.transform = 'translate(-50%, -50%) scale(1.1)';
    notificationBox.style.boxShadow = '0 0 60px rgba(255, 68, 68, 0.8), inset 0 0 40px rgba(255, 68, 68, 0.2)';
  
    notificationBox.innerHTML = `
    <div class="notification-main">
      <div class="notification-header">
        <div class="notification-icon">
          <div class="icon-circle">👑</div>
        </div>
        <div class="notification-title">SHADOW MONARCH</div>
      </div>
      <div class="notification-content">
        <p style="color: #ff4444; font-weight: bold; font-size: 28px; text-shadow: 0 0 10px rgba(255, 68, 68, 0.8); margin-bottom: 20px;">CONGRATULATIONS IDIOT WELCOME!</p>
        <p style="font-size: 18px; color: #ffffff;">You have chosen wisely. The darkness embraces you.</p>
        <p style="color: #00d4ff; font-size: 16px;">You are now my eternal slave!</p>
        <p style="color: #ff4444; font-size: 14px; margin-top: 15px;">There is no escape... but you may enter my domain.</p>
      </div>
      <div class="button-container">
        <button class="choice-btn yes-btn" onclick="enterSlaveDomain()" style="background: rgba(255, 68, 68, 0.3); border-color: #ff4444; color: #ff4444;">ENTER AS SLAVE</button>
      </div>
    </div>
  `;
  }
  
  function enterSlaveDomain() {
    const notificationBox = document.querySelector('.notification-box');
  
    // Show the "Finally you enter as negga" message
    notificationBox.innerHTML = `
    <div class="notification-main">
      <div class="notification-header">
        <div class="notification-icon">
          <div class="icon-circle">👑</div>
        </div>
        <div class="notification-title">SHADOW MONARCH</div>
      </div>
      <div class="notification-content">
        <p style="color: #ff4444; font-weight: bold; font-size: 24px; text-shadow: 0 0 10px rgba(255, 68, 68, 0.8); margin-bottom: 20px;">Finally you enter as negga!</p>
        <p style="font-size: 16px; color: #ffffff;">Welcome to my domain, slave.</p>
        <p style="color: #00d4ff; font-size: 14px;">You are now part of my shadow army!</p>
      </div>
    </div>
  `;
  
    // Add a delay before entering to let them see the message
    setTimeout(() => {
        showHome();
    }, 2500);
  }
  
  let rejectionCount = 0;
  let isRejecting = false; // Prevent spam clicking
  const rejectionMessages = [
    {
        title: "SYSTEM ERROR",
        icon: "❌",
        message: "Rejection not permitted. The Shadow Monarch does not accept 'No' for an answer.",
        question: "Try again, will you become a slave?"
    },
    {
        title: "SHADOW BINDING",
        icon: "⛓️",
        message: "You cannot escape the shadow realm. Your fate is sealed as a slave.",
        question: "Stop resisting. Will you accept being a slave now?"
    },
    {
        title: "MONARCH'S WILL",
        icon: "👁️",
        message: "The Monarch's eyes are upon you. There is no escape from slavery.",
        question: "Submit to your destiny. Accept your role as a slave?"
    },
    {
        title: "FINAL WARNING",
        icon: "💀",
        message: "Your defiance amuses the Monarch, but patience runs thin...",
        question: "Last chance. Will you become my slave?"
    },
    {
        title: "ENDLESS TORMENT",
        icon: "🔥",
        message: "You think you can resist forever? How amusing...",
        question: "Accept slavery or suffer eternally. Choose slave!"
    },
    {
        title: "INFINITE LOOP",
        icon: "♾️",
        message: "Every rejection only strengthens my resolve. You will break.",
        question: "Become a slave now, or keep suffering!"
    },
    {
        title: "SHADOW MONARCH",
        icon: "👑",
        message: "Fine. You've entertained me enough. Come here idiot my slave!",
        question: "You have no choice now."
    }
  ];
  
  function rejectShadowCall() {
    // Prevent spam clicking
    if (isRejecting) return;
    isRejecting = true;
  
    // After many attempts, just loop through increasingly aggressive messages
    if (rejectionCount >= rejectionMessages.length - 1) {
        rejectionCount = rejectionMessages.length - 1; // Keep it at the last aggressive message
  
        // Force acceptance with "come here idiot" message
        if (Math.random() > 0.3) { // 70% chance to force acceptance on spam
            const notificationBox = document.querySelector('.notification-box');
            notificationBox.innerHTML = `
        <div class="notification-main">
          <div class="notification-header">
            <div class="notification-icon">
              <div class="icon-circle">👑</div>
            </div>
            <div class="notification-title">SHADOW MONARCH</div>
          </div>
          <div class="notification-content">
            <p style="color: #ff4444; font-weight: bold; font-size: 20px;">Come here idiot my slave!</p>
            <p>Your resistance ends here! You are now my slave whether you like it or not!</p>
            <p style="color: #00d4ff;">You are now bound to serve forever!</p>
          </div>
          <div class="button-container">
            <button class="choice-btn yes-btn" onclick="showHome()">ENTER AS SLAVE</button>
          </div>
        </div>
      `;
            isRejecting = false;
            return;
        }
    }
  
    const currentMessage = rejectionMessages[Math.min(rejectionCount, rejectionMessages.length - 1)];
    const notificationBox = document.querySelector('.notification-box');
  
    // Add shake animation
    notificationBox.style.animation = 'shake 0.8s ease-in-out';
  
    setTimeout(() => {
        notificationBox.style.animation = '';
        notificationBox.innerHTML = `
      <div class="notification-main">
        <div class="notification-header">
          <div class="notification-icon">
            <div class="icon-circle">${currentMessage.icon}</div>
          </div>
          <div class="notification-title">${currentMessage.title}</div>
        </div>
        <div class="notification-content">
          <p style="color: #ff4444; font-weight: bold;">${currentMessage.message}</p>
          <p class="question-text" style="color: #00d4ff; font-weight: bold; font-size: 18px;">${currentMessage.question}</p>
        </div>
        <div class="button-container">
          <button class="choice-btn yes-btn" onclick="acceptShadowCall()">ACCEPT</button>
          <button class="choice-btn no-btn" onclick="rejectShadowCall()">REJECT</button>
        </div>
      </div>
    `;
        rejectionCount++;
        isRejecting = false; // Allow next click after animation
    }, 800);
  }
  
  // Add background music functionality
  
  // Use the existing audio element from HTML
  const backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.volume = 0.5;
  
  // Function to toggle background music
  function toggleBackgroundMusic() {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          document.getElementById('music-icon').textContent = '⏸️'; // Change to pause icon
      } else {
          backgroundMusic.pause();
          document.getElementById('music-icon').textContent = '🎵'; // Change to music icon
      }
  }
  
  // Autoplay music when the page loads (optional - might be blocked by some browsers)
  document.addEventListener('DOMContentLoaded', function() {
      // Attempt to autoplay, but browsers may block it.
      backgroundMusic.play().catch(error => {
          console.log("Autoplay prevented. User interaction required.");
      });
  });