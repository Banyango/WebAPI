
import './css/main.css'

import {InitBackgroundCallbacks} from "./background_tasks/callback";
import {SetupBroadcastChannel} from "./broadcast_channel/broadcast_channel";
import {SetupCSSCounter} from "./css_counters/csscounters";
import {IntersectionObserverSetup} from "./intersection_observer/IntersectionObserver";
import {SetupIndexDB} from "./index_db/IndexDb"
import {SetupMediaSession} from "./media_session/MediaSession";

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
SetupIndexDB();
SetupMediaSession();