// @ts-ignore
import shy from '../img/shy_ghost.png'
// @ts-ignore
import happy from '../img/shy_ghost_happy.png'

export function SetupBroadcastChannel() {
    let channel = new BroadcastChannel('test-channel');

    channel.postMessage("init");

    let img = <HTMLImageElement>document.getElementById("ghost");
    img.src = shy;

    let message = document.getElementById("message");
    message.hidden = true;

    document.getElementById("broadcast-submit").onclick = ev => {

        let inputField = <HTMLInputElement>document.getElementById("broadcast-text");
        channel.postMessage(inputField.value);
        inputField.value = "";
    };

    channel.onmessage = ev => {
        if (ev.data === "init") {
            channel.postMessage("hide-ghost")
        } else if (ev.data === "hide-ghost") {
            img.hidden = true;
            message.hidden = false;
        } else {
            img.src = happy;
            let field = document.getElementById("broadcast-output");
            field.innerText = "Boo! Thanks for the message\n" + ev.data;
        }
    };


}


