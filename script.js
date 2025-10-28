document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const terminal = document.getElementById('terminal');
    const progressBar = document.getElementById('progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    const output = document.getElementById('output');
    const input = document.getElementById('terminal-input');

    let percent = 0;
    let loadingInterval = setInterval(updateProgress, 30); // 30ms interval

    function updateProgress() {
        percent++;
        if (percent > 100) {
            startTerminal();
        } else {
            progressBar.style.width = percent + '%';
            progressPercent.textContent = percent + '%';
        }
    }

    function startTerminal() {
        clearInterval(loadingInterval);
        loadingScreen.style.display = 'none';
        terminal.style.display = 'block';
        input.focus();
        printWelcomeMessage();
    }

    // Skip loading on Enter
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && loadingScreen.style.display !== 'none') {
            percent = 100; // Force to 100
            progressBar.style.width = '100%';
            progressPercent.textContent = '100%';
            setTimeout(startTerminal, 100); // Short delay
        }
    });

    // Handle terminal input
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim().toLowerCase();

            // Print the command entered by the user
            printToOutput(`<div class="output-line"><span class="output-prompt">~$</span> <span class="output-command">${command}</span></div>`);

            if (command) {
                handleCommand(command);
            }

            input.value = '';
            scrollToBottom();
        }
    });

    // Refocus input on click anywhere in terminal
    terminal.addEventListener('click', () => {
        input.focus();
    });

    function handleCommand(command) {
        switch (command) {
            case 'help':
                printWelcomeMessage(false); // false = don't print ASCII art again
                break;
            case 'about':
                printAbout();
                break;
            case 'skills':
                printSkills();
                break;
            case 'projects':
                printProjects();
                break;
            case 'resume':
                printResume();
                break;
            case 'social':
                printSocial();
                break;
            case 'clear':
                output.innerHTML = '';
                break;
            case 'matrix':
            case 'hack':
            case 'coffee':
            case 'nuke':
                printToOutput(`Nice try, but this is a portfolio, not a movie set. 😉`);
                break;
            default:
                printToOutput(`<div class="error">Command not found: ${command}. Type 'help' for a list of commands.</div>`);
        }
    }

    function printWelcomeMessage(withArt = true) {
        // ---!!! YAHAN BADLAAV KIYA GAYA HAI !!!---
        const art = `
<pre class="ascii-art">
   ██████╗   █████╗   ██╗      █████╗   ██╗  ██╗
   ██╔══██╗ ██╔══██╗  ██║     ██╔══██╗  ██║ ██╔╝
   ██████╔╝ ███████║  ██║     ███████║  █████╔╝ 
   ██╔═══╝  ██╔══██║  ██║     ██╔══██║  ██╔═██╗ 
   ██║      ██║  ██║  ███████╗██║  ██║  ██║  ██╗
   ╚═╝      ╚═╝  ╚═╝  ╚══════╝╚═╝  ╚═╝  ╚═╝  ╚═╝
</pre>
        `;

        const welcomeText = `
Welcome! Try out some commands:
<div class="command-list">
<span>about</span>   - Some info about me
<span>resume</span>  - Open my resume
<span>skills</span>  - Show work experience
<span>projects</span>- View my projects
<span>social</span>  - Find me online
<span>help</span>    - See all commands
<span>clear</span>   - Clear the terminal screen
</div>
<div style="margin-top: 10px;">Try: matrix, hack, coffee, nuke for fun!</div>
        `;

        if (withArt) {
            printToOutput(art + welcomeText);
        } else {
            printToOutput(welcomeText);
        }
    }

    function printAbout() {
        const aboutText = "Hi there! I'm Palak Bansal, a dedicated Front-End Developer excited about building the future of the web. \nI am currently enhancing my skills as a Software Developer Intern at Source Soft Solutions, Noida.";
        typeWriter("about", aboutText);
    }

    function printSkills() {
        const skillsHTML = `
<div class="skills-container">
    <div class="skill-category">Frameworks:</div>
    <div class="skill-bar"><span class="skill-name">React.js</span><div class="bar"><div class="bar-inner" style="width: 85%;"></div></div><span class="skill-percent">85%</span></div>
    <div class="skill-bar"><span class="skill-name">Node.js</span><div class="bar"><div class="bar-inner" style="width: 70%;"></div></div><span class="skill-percent">70%</span></div>
    <div class="skill-bar"><span class="skill-name">Express.js</span><div class="bar"><div class="bar-inner" style="width: 70%;"></div></div><span class="skill-percent">70%</span></div>
    <div class="skill-bar"><span class="skill-name">Tailwind CSS</span><div class="bar"><div class="bar-inner" style="width: 90%;"></div></div><span class="skill-percent">90%</span></div>
    <div class="skill-bar"><span class="skill-name">Redux</span><div class="bar"><div class="bar-inner" style="width: 80%;"></div></div><span class="skill-percent">80%</span></div>
    <div class="skill-bar"><span class="skill-name">Material-UI</span><div class="bar"><div class="bar-inner" style="width: 75%;"></div></div><span class="skill-percent">75%</span></div>
    <div class="skill-bar"><span class="skill-name">Bootstrap</span><div class="bar"><div class="bar-inner" style="width: 85%;"></div></div><span class="skill-percent">85%</span></div>

    <div class="skill-category">Tools:</div>
    <div class="skill-bar"><span class="skill-name">MySQL</span><div class="bar"><div class="bar-inner" style="width: 70%;"></div></div><span class="skill-percent">70%</span></div>
    <div class="skill-bar"><span class="skill-name">MongoDB</span><div class="bar"><div class="bar-inner" style="width: 75%;"></div></div><span class="skill-percent">75%</span></div>
    <div class="skill-bar"><span class="skill-name">Git/GitHub</span><div class="bar"><div class="bar-inner" style="width: 85%;"></div></div><span class="skill-percent">85%</span></div>
    <div class="skill-bar"><span class="skill-name">Redis</span><div class="bar"><div class="bar-inner" style="width: 65%;"></div></div><span class="skill-percent">65%</span></div>

    <div class="skill-category">AI/Data:</div>
    <div class="skill-bar"><span class="skill-name">Machine Learning</span><div class="bar"><div class="bar-inner" style="width: 75%;"></div></div><span class="skill-percent">75%</span></div>
    <div class="skill-bar"><span class="skill-name">NLP</span><div class="bar"><div class="bar-inner" style="width: 70%;"></div></div><span class="skill-percent">70%</span></div>
    <div class="skill-bar"><span class="skill-name">Computer Vision</span><div class="bar"><div class="bar-inner" style="width: 65%;"></div></div><span class="skill-percent">65%</span></div>
    <div class="skill-bar"><span class="skill-name">Pandas/NumPy</span><div class="bar"><div class="bar-inner" style="width: 80%;"></div></div><span class="skill-percent">80%</span></div>
</div>
        `;
        printToOutput(skillsHTML);
    }

    function printProjects() {
        const projectsHTML = `
<div class="project">
    <div class="project-title">[1] Economic Impact Assessment Platform</div>
    <div class="project-desc">Developed a predictive modeling system using machine learning and Python libraries (scikit-learn, TensorFlow, Pandas) to analyze and forecast the impact of climate change on agriculture, energy, and healthcare.</div>
    <div class="project-tech">Technologies: Python, Machine Learning, TensorFlow, Pandas, Statistical Analysis</div>
    <div class="project-link" onclick="openLink('https://github.com/palakbansal14')">Link: https://github.com/palakbansal14</div>
</div>

<div class="project">
    <div class="project-title">[2] SYNAPSE - Classroom Management System</div>
    <div class="project-desc">Engineered a secure, full-stack classroom management system with dynamic QR code attendance module to eliminate proxy attendance, enhancing academic integrity and operational efficiency.</div>
    <div class="project-tech">Technologies: Node.js, Express.js, MongoDB, React.js, HTML5, CSS3</div>
    <div class="project-link" onclick="openLink('https://github.com/palakbansal14')">Link: https://github.com/palakbansal14</div>
</div>
        `;
        printToOutput(projectsHTML);
    }

    function printResume() {
        printToOutput("Opening resume in a new tab...");
        // ---!!! IMPORTANT !!!---
        // ---!!! Apni resume ka link yahan daalein !!!---
        window.open('https://drive.google.com/file/d/1mmrWVNUu6Jq_EirU492TEAbt6Y3CUoMO/view?usp=drive_link', '_blank');
    }

    function printSocial() {
        const socialHTML = `
Find me online:
<div class="command-list">
<span>GitHub</span> - <span class="project-link" onclick="openLink('https://github.com/palakbansal14')">github.com/palakbansal14</span>
<span>LinkedIn</span> - <span class="project-link" onclick="openLink('https://linkedin.com/in/palakbansal14')">linkedin.com/in/palakbansal14</span>
</div>
        `;
        printToOutput(socialHTML);
    }

    // --- Helper Functions ---

    // Function to open links from generated HTML
    window.openLink = function (url) {
        window.open(url, '_blank');
    }

    // Typewriter effect
    let typeWriterIdCounter = 0;
    function typeWriter(elementIdPrefix, text) {
        typeWriterIdCounter++;
        const uniqueId = `${elementIdPrefix}-${typeWriterIdCounter}`;
        printToOutput(`<div class="output-line"><span class="typewriter-text" id="${uniqueId}"></span><span class="cursor"></span></div>`);

        const element = document.getElementById(uniqueId);
        const cursor = element.nextElementSibling;
        let i = 0;
        const speed = 30; // 30ms

        function type() {
            if (i < text.length) {
                // Handle newlines
                if (text.charAt(i) === '\n') {
                    element.innerHTML += '<br>';
                } else {
                    element.innerHTML += text.charAt(i);
                }
                i++;
                scrollToBottom();
                setTimeout(type, speed);
            } else {
                // Typing finished, remove cursor
                if (cursor) {
                    cursor.remove();
                }
            }
        }
        type();
    }

    function printToOutput(html) {
        output.innerHTML += html;
    }

    function scrollToBottom() {
        terminal.scrollTop = terminal.scrollHeight;
    }
});

