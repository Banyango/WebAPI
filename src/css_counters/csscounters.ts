const titles = [
    "Title",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Sub Title",
    "Another Submarine Title",
    "Wow you sure like pressing buttons",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "Boy There's a lot of titles here",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "How many more could there possibly be?",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "Another Sub Title",
    "A Moose once bit my sister.",
    "Another Sub Title",
];


export function SetupCSSCounter() {

    let index = 0;

    let submit = document.getElementById("csscounter-submit");
    let anchor = document.getElementById("csscounter-anchor");

    submit.onclick = ev => {
        let div = document.createElement("div");

        div.innerText = titles[index];

        index++;
        index = index % titles.length;

        anchor.appendChild(div)
    }

}