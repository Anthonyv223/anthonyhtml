document.addEventListener('DOMContentLoaded', () => {
    let user = localStorage.getItem('username');
    let theme = localStorage.getItem('theme');
  
    if (!user || !theme) {
      user = prompt("What's your name?");
      theme = prompt("Do you prefer dark or light mode?").toLowerCase();
      localStorage.setItem('username', user);
      localStorage.setItem('theme', theme);
    }
  
    document.body.insertAdjacentHTML('afterbegin', `<p>Welcome back, ${user}</p>`);
  
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#f0f0f0';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
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