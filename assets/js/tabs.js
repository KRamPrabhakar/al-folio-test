document.addEventListener('DOMContentLoaded', function() {

  // Hide all panels except first on load
  var panels = document.querySelectorAll('.tab-panel');
  var buttons = document.querySelectorAll('.tab-btn');

  // Hide all first
  panels.forEach(function(panel) {
    panel.style.display = 'none';
  });

  // Show first panel
  if (panels.length > 0) {
    panels[0].style.display = 'block';
  }

  // Set first button active
  if (buttons.length > 0) {
    buttons[0].classList.add('active');
  }

  // Add click handler to each button
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {

      // Hide all panels
      panels.forEach(function(panel) {
        panel.style.display = 'none';
      });

      // Remove active from all buttons
      buttons.forEach(function(b) {
        b.classList.remove('active');
      });

      // Show target panel
      var target = btn.getAttribute('data-tab');
      var targetPanel = document.getElementById('tab-' + target);
      if (targetPanel) {
        targetPanel.style.display = 'block';
      }

      // Set this button active
      btn.classList.add('active');
    });
  });

});