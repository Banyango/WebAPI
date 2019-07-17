
import './css/main.css'
import {InitBackgroundCallbacks} from "./background_tasks/callback";

class Message {
    text:string;
    constructor(text:string) {
        this.text = text;
    }
}

InitBackgroundCallbacks();