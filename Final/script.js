document.addEventListener('DOMContentLoaded', () => {
  let user = localStorage.getItem('username');
  let theme = localStorage.getItem('theme');

  if (!user || !theme) {
    user = prompt("What's your name?");
    theme = prompt("Dark or light mode?").toLowerCase();
    localStorage.setItem('username', user);
    localStorage.setItem('theme', theme);
  }

  // greeting bar
  const bar = document.createElement('div');
  bar.className = 'greeting';
  bar.textContent = `Welcome back, ${user}`;
  document.body.prepend(bar);

  // theme toggle
  if (theme === 'light') {
    document.body.classList.add('light-mode');
  }
});

function trackNav(label) {
  gtag('event', 'nav_click', {
    event_category: 'navigation',
    event_label: label
  });
}

function trackCTA(label) {
  gtag('event', 'CTR', {
    event_category: 'callToAction',
    event_label: label
  });
}