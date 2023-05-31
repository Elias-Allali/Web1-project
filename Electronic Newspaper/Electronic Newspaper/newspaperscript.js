document.getElementById('trigger').addEventListener('click', function() {
    document.getElementById('trigger').classList.remove('shown');
    document.getElementById('input-container').style.display = 'flex';
  });
  
  document.getElementById('singular-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('success').style.display = 'block';
  
    // Redirect to success page after a delay (e.g., 3 seconds)
    setTimeout(function() {
      window.location.href = 'success.html';
    }, 3000);
  });
  
  // Redirect back to newspaper page after a delay (e.g., 6 seconds) on the success.html page
  if (window.location.pathname.includes('success.html')) {
    setTimeout(function() {
      window.location.href = 'newspaper.html';
    }, 6000);
  }
  