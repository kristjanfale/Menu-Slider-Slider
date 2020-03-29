const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal-container');

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Show modal
open.addEventListener('click', () => {
  modal.classList.add('modal-open');
});

// Close modal
close.addEventListener('click', () => {
  modal.classList.remove('modal-open');
});

// Close modal on outside click
window.addEventListener('click', e => {
  if (e.target.id == 'modal-container') {
    modal.classList.remove('modal-open');
  }
});
