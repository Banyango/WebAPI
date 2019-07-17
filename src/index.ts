
import './css/main.css'

class Message {
    text:string;
    constructor(text:string) {
        this.text = text;
    }
}

let welcomeMessage = new Message("Hello World from webpack");

document.querySelector("#text").innerHTML = welcomeMessage.text;