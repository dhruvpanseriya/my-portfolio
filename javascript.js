function hideLoader() {
  document.getElementById('loader').style.display = 'none'; 
  document.body.style.display = 'block'; 
}

window.onload = function() {
  setTimeout(hideLoader, 3000);
};