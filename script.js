
function showSection(id) {
  document.querySelectorAll('section').forEach((section) => {
    section.classList.remove('active-section');
  });
  document.getElementById(id).classList.add('active-section');
}
