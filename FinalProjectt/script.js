document.addEventListener('DOMContentLoaded', () => {
  let name = localStorage.getItem('name');
  let theme = localStorage.getItem('theme');

  if (!name || !theme) {
    name = prompt("Welcome! What's your name?") || 'Mets Fan';
    const prefersDark = confirm("Do you prefer dark mode? Click OK for Dark, Cancel for Light.");
    theme = prefersDark ? 'dark' : 'light';

    localStorage.setItem('name', name);
    localStorage.setItem('theme', theme);
  }

  const greeting = document.getElementById('greeting');
  if (greeting) greeting.textContent = `Welcome back, ${name}!`;

  document.body.classList.add(theme);
});