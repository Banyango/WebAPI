
let playing :boolean = false;

export function SetupMediaSession() {
    if ('mediaSession' in navigator) {

        navigator.mediaSession.metadata = new MediaMetadata({
            title:"Ghost podcast",
            artist: "That spooky feeling",
            album: "The Spooky album",
            artwork: [{src:"ghost.png"}]
        });

        navigator.mediaSession.setActionHandler('play', function() {});
        navigator.mediaSession.setActionHandler('pause', function() {});
        navigator.mediaSession.setActionHandler('seekbackward', function() {});
        navigator.mediaSession.setActionHandler('seekforward', function() {});
        navigator.mediaSession.setActionHandler('previoustrack', function() {});
        navigator.mediaSession.setActionHandler('nexttrack', function() {});

        const submit = <HTMLInputElement>document.querySelector('#mediasession-play');
        submit.onclick = ev => {
            playing = !playing;

            if (playing) {
                navigator.mediaSession.playbackState = "playing";
            } else {
                navigator.mediaSession.playbackState = "none";
            }
        }

    } else {
        let element = document.getElementById("mediasession-support");
        element.hidden = false
    }


}