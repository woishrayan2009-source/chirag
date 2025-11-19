// --- 1. Placeholder Function for User Interactions ---
// This function captures all button clicks and logs them.
// It also triggers a custom modal for the 'Donate' button, 
// avoiding the use of the prohibited alert() or confirm().
function handleButtonClick(buttonName) {
    console.log(`Action requested: ${buttonName}. This would trigger a backend process or navigate to a dedicated page.`);
    
    // Example custom message box for a key action (Donate)
    if (buttonName === 'Donate') {
        const messageBox = document.createElement('div');
        messageBox.innerHTML = `
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-2xl max-w-sm w-full transition transform duration-300 scale-100">
                    <h4 class="text-xl font-bold mb-3 text-primary-blue dark:text-accent-yellow">Donation Gateway (Blank)</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-4">Thank you for your interest! This is a placeholder for the secure payment process.</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Action: Console logged "${buttonName}" action.</p>
                    <button onclick="this.parentNode.parentNode.remove()" class="mt-4 px-4 py-2 bg-accent-yellow text-gray-900 rounded-full font-semibold hover:bg-yellow-500">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(messageBox);
    }
}


// --- 2. Scroll-to-View Functionality ---
// This function handles smooth scrolling when a navigation link is clicked.
function setupSmoothScrolling() {
    // Select all navigation links (anchor tags with href starting with #)
    const navLinks = document.querySelectorAll('header a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor link behavior
            e.preventDefault();

            // Get the target element ID from the href (e.g., #articles)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use smooth scrolling behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}


// --- 3. Dark Mode Implementation ---
function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to system preference
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }

    function toggleDarkMode() {
        html.classList.toggle('dark');
        
        // Save preference to localStorage
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }

    // Event listener for the toggle button
    if (toggle) {
        toggle.addEventListener('click', toggleDarkMode);
    }

    // Apply theme on initial load
    loadTheme();
}


// --- 4. Initialization (Run when the entire page is loaded) ---
document.addEventListener('DOMContentLoaded', () => {
    setupDarkMode();
    setupSmoothScrolling();
});
