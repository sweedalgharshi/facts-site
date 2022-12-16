'use script';

// Displaying And Hiding the Form

const btnOpen = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');

btnOpen.addEventListener('click', function () {
  // form.classList.toggle('hidden');
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btnOpen.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btnOpen.textContent = 'Share a fact';
  }
});
