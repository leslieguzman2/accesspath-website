(function() {
    var consent = localStorage.getItem('cookie_consent');
    if (!consent) {
        document.getElementById('cookieBanner').classList.add('visible');
    }
    document.getElementById('cookieAccept').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'accepted');
        document.getElementById('cookieBanner').classList.remove('visible');
    });
    document.getElementById('cookieDecline').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'declined');
        document.getElementById('cookieBanner').classList.remove('visible');
    });
})();
