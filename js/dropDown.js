function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  const arrow = document.getElementById('arrow');

  if (dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.remove('show');
    dropdownMenu.classList.add('hide');
    arrow.textContent = '▼';

    setTimeout(() => {
      dropdownMenu.style.display = 'none';
      dropdownMenu.classList.remove('hide');
    }, 400); // Match the CSS transition duration
  } else {
    dropdownMenu.style.display = 'block';
    dropdownMenu.classList.add('show');
    arrow.textContent = '▲';
  }
}
