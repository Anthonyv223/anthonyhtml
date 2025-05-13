window.addEventListener('DOMContentLoaded', () => {
  let name = localStorage.getItem('name');
  let theme = localStorage.getItem('theme');

  if (!name || !theme) {
    name = prompt('Welcome! What is your name?') || 'Fan';
    theme = confirm('Do you prefer dark mode? OK = Dark, Cancel = Light')
      ? 'dark'
      : 'light';
    localStorage.setItem('name', name);
    localStorage.setItem('theme', theme);
  }

  document.getElementById('greeting').textContent = `Welcome back, ${name}!`;
  document.body.classList.add(theme);
});
