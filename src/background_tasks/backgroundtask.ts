
// Need to add this webapi to the ts def.

type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
    timeout:number;
}
type IdleDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: (()=> number);
}

interface Window {
    requestIdleCallback: ((
        callback: ((deadline:IdleDeadline) => void),
        opts?: RequestIdleCallbackOptions,
    ) => RequestIdleCallbackHandle);
    cancelIdleCallback: ((handle:RequestIdleCallbackHandle) =>void);
}
