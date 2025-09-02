document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebarToggle');
  const body = document.body;

  toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    body.classList.toggle('sidebar-open');
  });
});