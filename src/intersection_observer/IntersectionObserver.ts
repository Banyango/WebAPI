
class ThresholdList {
    thresholds:Array<number>;
    constructor(steps:number) {
        this.thresholds = new Array<number>();
        for (let i=1.0; i<= steps; i++) {
            let ratio = i/steps;
            this.thresholds.push(ratio);
        }
        this.thresholds.push(0);
    }
}

export function IntersectionObserverSetup() {

    const options = {
        root: null as Element,
        rootMargin:'-40px',
        threshold: new ThresholdList(20).thresholds,
    };

    let color = "rgba(190,40,40, ratio)";

    let observer = new IntersectionObserver((entries, observer)=> {
        entries.forEach((entry)=> {
            let target = <HTMLElement>entry.target;
            target.style.backgroundColor = color.replace("ratio", entry.intersectionRatio.toString());
        });
    }, options);

    observer.observe(document.querySelector('#intersection-anchor'));

}