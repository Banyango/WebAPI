
import './css/main.css'

import {InitBackgroundCallbacks} from "./background_tasks/callback";
import {SetupBroadcastChannel} from "./broadcast_channel/broadcast_channel";

class Message {
    text:string;
    constructor(text:string) {
        this.text = text;
    }
}

InitBackgroundCallbacks();
SetupBroadcastChannel();