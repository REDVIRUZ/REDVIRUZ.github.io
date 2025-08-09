document.addEventListener('DOMContentLoaded', function () {
  const sidebarNav = document.querySelector('.sidebar .nav__list');
  if (!sidebarNav) {
    return;
  }

  // Find all list items that have a sub-menu (a <ul> inside a <li>)
  const subMenus = sidebarNav.querySelectorAll('li > ul');

  subMenus.forEach(ul => {
    const parentLi = ul.parentNode;
    const link = parentLi.querySelector('a');

    // Create and add the toggle button
    const toggle = document.createElement('span');
    toggle.className = 'nav__sub-toggle';
    // Insert the toggle after the link
    parentLi.insertBefore(toggle, link.nextSibling);

    // Add a click listener to the toggle
    toggle.addEventListener('click', function() {
      // Toggle the 'active' class on the parent <li>
      parentLi.classList.toggle('active');
    });
  });
});