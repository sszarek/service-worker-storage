(function() {
    console.log('loading script');
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw/sw.js').then((registration) => {
                console.log(`Service Worker registered. Scope: ${registration.scope}.`);
            }, (err) => {
                console.error(`Error while registering Service Worker: ${err}`);
            });
        });
    }
})();
