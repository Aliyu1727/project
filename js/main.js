// Shared selectors and helpers
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

// Footer year
$('#year').textContent = new Date().getFullYear();

// Light and dark theme (remembered in this browser)
const themeButton = $('.theme');
if (localStorage.getItem('portfolio-theme') === 'dark') {
  document.body.classList.add('dark');
}

function updateThemeLabel() {
  const isDark = document.body.classList.contains('dark');
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

updateThemeLabel();
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', theme);
  updateThemeLabel();
});

// Mobile navigation
const menuButton = $('.menu');
const navigation = $('.links');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

$$('.links a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Project category filters
$$('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    $$('.filter').forEach((filter) => {
      filter.setAttribute('aria-pressed', filter === button);
    });

    $$('.project').forEach((card) => {
      card.hidden = button.dataset.filter !== 'all'
        && card.dataset.category !== button.dataset.filter;
    });
  });
});

// Contact form: validate, then prepare an email in the visitor's email app.
$('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(
    `From: ${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`,
  );

  $('#form-status').textContent = 'Opening your email app with the message ready to send.';
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
});
