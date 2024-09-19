const getStartedBtn = document.querySelector('#startbtn');
const dialog = document.querySelector('.auth-container');
const closeBtn = document.getElementById('dialog');

getStartedBtn.addEventListener('click', () => {
  dialog.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  dialog.style.display = 'none';
});