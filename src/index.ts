
import './css/main.css'

import {InitBackgroundCallbacks} from "./background_tasks/callback";
import {SetupBroadcastChannel} from "./broadcast_channel/broadcast_channel";
import {SetupCSSCounter} from "./css_counters/csscounters";
import {IntersectionObserverSetup} from "./intersection_observer/IntersectionObserver";

class Message {
    text:string;
    constructor(text:string) {
        this.text = text;
    }
}

InitBackgroundCallbacks();
SetupBroadcastChannel();
SetupCSSCounter();
IntersectionObserverSetup();