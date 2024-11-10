// script.js

// Create and append the windward effect overlay
const windwardEffect = document.createElement('div');
windwardEffect.classList.add('windward-effect');
document.body.appendChild(windwardEffect);

// Function to update windward effect opacity based on tilt
function updateWindwardEffect(event) {
  const tiltX = event.gamma; // Tilt on the X-axis (left to right)
  const maxTilt = 20; // Set the max tilt for full opacity effect

  // Calculate opacity based on the tilt angle
  const opacity = Math.min(Math.abs(tiltX) / maxTilt, 1);
  
  // Update the opacity of the overlay effect
  windwardEffect.style.opacity = opacity;
}

// Check if the device orientation event is supported
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', updateWindwardEffect);
} else {
  alert('Device orientation is not supported on this device.');
}
