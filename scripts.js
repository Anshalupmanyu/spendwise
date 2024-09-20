const getStartedBtn = document.getElementById('login');
const dialog = document.querySelector('.auth-container');
const closeBtn = document.getElementById('dialog');

getStartedBtn.addEventListener('click', () => {
  dialog.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  dialog.style.display = 'none';
});

document.getElementById("signup").addEventListener('click', function() {
    window.location.href = 'index.html';
})
