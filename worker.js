console.log('Loaded service worker!');

self.addEventListener('push', ev => {
    const data = ev.data.json();
    console.log('Got push', data);
    // self.registration.showNotification(data.title, {
    //   body: 'Hello, World!',
    //   icon: 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
    // });
    self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
            client.postMessage({
                "command": "broadcastOnRequest",
                "message": data.title
            });
        })
    })
});