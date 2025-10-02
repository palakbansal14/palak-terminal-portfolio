// ===============================
// Terminal Portfolio Main Script
// ===============================

// --- DOM ELEMENTS ---
const terminalOutput = document.getElementById('terminal-output');      // Output area for terminal responses
const terminalInput = document.getElementById('terminal-input');        // Input field for user commands
const terminalContainer = document.querySelector('.terminal-container');// Main terminal window
const splashScreen = document.getElementById('splash-screen');          // Splash screen overlay

const SPLASH_DURATION_MS = 4000; // Splash screen duration in milliseconds

// --- COMMANDS DATA ---
const COMMANDS = {
    // Format: 'command': [Description, Handler Function]
    'help': ['See all available commands', handleHelp],
    'about': ['Some info about me', handleAbout],
    'resume': ['Open my resume in a new tab', handleResume],
    'experience': ['Show my work experience', handleExperience],
    'skills': ['My technical skills', handleSkills],
    'projects': ['Show my portfolio projects', handleProjects],
    'social': ['Where you can find me online', handleSocial],
    'echo': ['Echo a message back to the terminal', handleEcho],
    'figlet': ['Display text in large ASCII art', handleFiglet],
    'clear': ['Clear the terminal', handleClear],
    'pwd': ['Print working directory', handlePwd],
    'date': ['Display current date and time', handleDate],
    'welcome': ['Display welcome message', handleWelcome]
};

// Welcome message shown on startup
const WELCOME_MESSAGE = `
(^o^)! Welcome! Try out some commands:

<span class="command-name">about</span>       - Some info about me
<span class="command-name">resume</span>      - Open my resume in a new tab
<span class="command-name">experience</span>  - Show work experience
<span class="command-name">social</span>      - Where you can find me online
<span class="command-name">skills</span>      - My technical skills
<span class="command-name">projects</span>    - View my portfolio projects
<span class="command-name">help</span>        - See all commands
`;

// --- COMMAND HANDLERS ---

function handleWelcome() {
    // Show welcome message
    output(WELCOME_MESSAGE, 'welcome-line');
}

function handleHelp() {
    // List all available commands
    let outputString = '<span class="help-title">Available commands:</span>\n';
    const sortedCommands = Object.keys(COMMANDS).sort();
    sortedCommands.forEach(cmd => {
        outputString += `<span class="command-name">${cmd}</span> <span class="command-desc">- ${COMMANDS[cmd][0]}</span>\n`;
    });
    output(outputString);
}

function handleAbout() {
    // Show about info
    output(`
Hi there! I'm Palak Bansal, a dedicated Front-End Developer excited about building the future of the web.
I am currently enhancing my skills as a Software Developer Intern at Source Soft Solutions, Noida.
My focus is on translating design concepts into beautiful, functional, and user-friendly digital experiences.
I have hands-on experience in developing automated systems and solutions for agents, combining strong design with efficient functionality.
I'm always eager to learn new technologies and contribute to challenging projects.
`);
}

function handleResume() {
    // Open resume link in new tab
    window.open('https://drive.google.com/file/d/1C52I5Kq7fd83yEv6VUONbwI3GvqC7EHq/view?usp=sharing', '_blank');
    output('Opening resume in a new tab...');
}

function handleExperience() {
    // Show experience info
    output(`
[2025 - Present] - Software Developer Intern @ Source Soft Solutions
    - Gaining practical experience in Full-Stack development and automated systems.
    - Applying Front-End skills (React, Tailwind) to create robust user interfaces.
    - Contributing to code review and optimization for improved performance.
`);
}

function handleSkills() {
    // Show skills info
    output(`
Programming Languages:C, C++, Python, JavaScript, TypeScript, HTML5, CSS3
Frameworks: React.js, Tailwind CSS, Redux, Material-UI, Bootstrap, Responsive Web Design
Databases and Tools: MongoDB, MySQL, Redis, Git, GitHub
AI and Data Science: Natural Language Processing (NLP), Computer Vision, Generative AI, LLaMA-3, Groq API,
Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn
Expertise: Full-Stack Development, Front-End Development, Web Scraping, Machine Learning
`);
}

function handleProjects() {
    // Show projects info
    output(`
[1] Economic Impact Assessment Platform | Python,Machine Learning, Statistical Analysis GitHub Repository
• Developed a predictive modeling system using machine learning and Python libraries (scikit-learn, TensorFlow, Pandas)
to analyze and forecast the impact of climate change on agriculture, energy, and healthcare.
• Provided data-driven insights and vulnerability assessments to inform evidence-based policy development and promote
sector-specific adaptation strategies for enhanced resilience.
• Implementing time series analysis framework using Python (Pandas, NumPy, Scikit-learn) to identify economic patterns
and create predictive models for forecasting future trends.
    
[2] SYNAPSE | Node.js, Express.js, MongoDB, React.js HTML5, CSS3, JavaScript Production Website
• Engineered a secure, full-stack classroom management system with a dynamic QR code attendance module to eliminate
proxy attendance, enhancing academic integrity and operational efficiency.
• Centralized all academic functions into a single, intuitive platform for teachers and students, enabling seamless
communication, paperless assignment submissions, and secure marks management.
• Fostered a paperless and eco-friendly environment by digitizing all administrative tasks and a system that promotes
student accountability and proactivity.
    `);
}

function handleSocial() {
    // Show social links
    output(`
LinkedIn: https://www.linkedin.com/in/palakbansal1409/ (Type 'social linkedin')
GitHub:   https://github.com/palakbansal14    (Type 'social github')
Email:    palakbansal.tech@email.com         (Type 'social email')
`);
}

function handleEcho() {
    // Default echo usage message
    output('echo: Missing argument. Usage: echo <message>');
}

// --- FIGLET ASCII ART GENERATOR ---
function generateFiglet(text) {
    // Simple ASCII art for supported characters
    const chars = {
        'P': ["███", "█ █", "███", "█  ", "█  "],
        'A': [" ██", "█ █", "███", "█ █", "█ █"],
        'L': ["█  ", "█  ", "█  ", "█  ", "███"],
        'K': ["█ █", "█ █", "██ ", "█ █", "█ █"],
        'D': ["██ ", "█ █", "█ █", "█ █", "██ "],
        'E': ["███", "█  ", "██ ", "█  ", "███"],
        'V': ["█ █", "█ █", "█ █", " █ ", " █ "],
        'R': ["██ ", "█ █", "██ ", "█ █", "█ █"],
        'O': ["██ ", "█ █", "█ █", "█ █", "██ "],
        'S': ["███", "█  ", "██ ", "  █", "███"],
        'I': ["███", " █ ", " █ ", " █ ", "███"],
        'M': ["█ █", "███", "█ █", "█ █", "█ █"],
        'N': ["█ █", "███", "█ █", "█ █", "█ █"],
        'T': ["███", " █ ", " █ ", " █ ", " █ "],
        'C': ["███", "█  ", "█  ", "█  ", "███"],
        'H': ["█ █", "█ █", "███", "█ █", "█ █"],
        'G': ["███", "█  ", "█ █", "█ █", "███"],
        'U': ["█ █", "█ █", "█ █", "█ █", "███"],
        'B': ["██ ", "█ █", "██ ", "█ █", "██ "],
        'Y': ["█ █", " █ ", " █ ", " █ ", " █ "],
        '.': ["   ", "   ", "   ", "   ", " █ "],
        '-': ["   ", "   ", "███", "   ", "   "],
        '!': [" █ ", " █ ", " █ ", "   ", " █ "],
        ' ': ["   ", "   ", "   ", "   ", "   "]
    };

    const lines = ["", "", "", "", ""];
    const upperText = text.toUpperCase();

    // Build ASCII art line by line
    for (let i = 0; i < upperText.length; i++) {
        const char = upperText[i];
        const art = chars[char] || chars[' '];
        for (let j = 0; j < 5; j++) {
            lines[j] += art[j] + " ";
        }
    }
    return lines.join('\n');
}

function handleFiglet() {
    // Default figlet usage message
    output('figlet: Missing argument. Usage: figlet <TEXT>');
}

function handleClear() {
    // Clear terminal output
    terminalOutput.innerHTML = '';
}

function handlePwd() {
    // Print working directory
    output('/home/palak/portfolio');
}

function handleDate() {
    // Print current date and time
    output(new Date().toLocaleString());
}

// --- OUTPUT LOGIC ---
function output(text, className = '') {
    // Split text into lines and output each line as a <p>
    const lines = text.trim().split('\n');
    lines.forEach(line => {
        const p = document.createElement('p');
        p.className = className;
        p.innerHTML = line;
        terminalOutput.appendChild(p);
    });
    // Scroll to bottom
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// --- COMMAND PROCESSOR ---
function processCommand(command) {
    // Show the entered command in the terminal
    output(`<span class="prompt">~ $</span> ${command}`);

    const cmd = command.toLowerCase().trim();
    const parts = cmd.split(' ');
    const mainCommand = parts[0];
    const subCommand = parts[1];

    // Handle 'clear' command
    if (cmd === 'clear') { handleClear(); return; }

    // Handle 'social' subcommands
    if (mainCommand === 'social' && subCommand) {
        let url;
        if (subCommand === 'linkedin') { url = 'https://www.linkedin.com/in/palakbansal1409/'; }
        else if (subCommand === 'github') { url = 'https://github.com/palakbansal14'; }
        else if (subCommand === 'email') { url = 'mailto:palakbansal.tech@email.com'; }

        if (url) {
            window.open(url, '_blank');
            output(`Opening ${subCommand} in a new tab...`);
        } else {
            output(`social: invalid argument '${subCommand}'. Try 'social linkedin', 'social github', or 'social email'.`);
        }
        return;
    }

    // Handle 'echo' command
    if (mainCommand === 'echo') {
        const message = command.substring(mainCommand.length).trim();
        if (message) {
            output(message);
        } else {
            handleEcho();
        }
        return;
    }

    // Handle 'figlet' command
    if (mainCommand === 'figlet') {
        const textToDisplay = command.substring(mainCommand.length).trim();
        if (textToDisplay) {
            const figletArt = generateFiglet(textToDisplay);
            output(figletArt);
        } else {
            handleFiglet();
        }
        return;
    }

    // Handle single-word commands
    if (COMMANDS.hasOwnProperty(mainCommand)) {
        COMMANDS[mainCommand][1]();
    } else {
        output(`bash: ${mainCommand}: command not found. Type 'help' to see available commands.`);
    }
}

// --- INPUT EVENT HANDLER ---
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value;
        if (command) {
            processCommand(command);
        }
        terminalInput.value = '';
    }
});

// --- SPLASH SCREEN & INITIAL BOOT HANDLER ---
function hideSplashAndStartTerminal() {
    // Fade out splash screen
    splashScreen.classList.add('hidden');
    // Show terminal window
    terminalContainer.style.visibility = 'visible';
    // Startup sequence
    const today = new Date().toDateString();
    output(`Starting new session with Palak Bansal`);
    output(`Last update: ${today}`);
    output('');
    handleWelcome();
    // Focus input field
    terminalInput.focus();
}

// --- PAGE LOAD LOGIC ---
// Automatically hide splash after SPLASH_DURATION_MS
const timer = setTimeout(hideSplashAndStartTerminal, SPLASH_DURATION_MS);

// Allow user to skip splash by pressing ENTER anywhere
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        clearTimeout(timer); // Cancel auto-timer
        hideSplashAndStartTerminal();
    }
}, { once: true }); // Only run once