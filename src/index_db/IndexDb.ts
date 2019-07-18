import Dexie from "dexie";


const DB_NAME = 'test-message-db';
const OBJ_STORE = 'messages';

let db : Dexie = null;

export function SetupIndexDB() {

    db = new Dexie(DB_NAME);

    db.version(1).stores({
        messages: "message"
    });

    GetAllMessagesAndUpdateDiv();

    const submit = <HTMLInputElement>document.querySelector('#indexdb-submit');
    submit.onclick = ev => {
        const text = <HTMLInputElement>document.querySelector('#indexdb-text');

        // @ts-ignore
        db.messages.add({message: text.value});

        text.value = "";

        GetAllMessagesAndUpdateDiv();
    };

    const clear = <HTMLInputElement>document.querySelector('#indexdb-clear');
    clear.onclick = ev => {
        // @ts-ignore
        db.messages.clear();
        GetAllMessagesAndUpdateDiv();
    }
}

async function GetAllMessagesAndUpdateDiv() {
    // @ts-ignore
    const messages = await db.messages.toArray();

    const text = document.querySelector('#indexdb-anchor');

    text.innerHTML = messages.map((value: { message: string; }) => value.message + "\n").toString();
}