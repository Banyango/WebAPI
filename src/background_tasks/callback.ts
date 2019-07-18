// @ts-ignore
import ghost_img from "../img/ghost.png"

class Point {
    x: number;
    y: number;
    xDir: number;
    yDir: number;
    speed: number;

    constructor() {
        this.x = Math.floor(Math.random() * 12) + 2;
        this.y = Math.floor(Math.random() * 12) + 15;
        this.xDir = Math.floor(Math.random() * 12)/100;
        this.yDir = Math.floor(Math.random() * 12)/100;
        this.speed = .0003;
    }
}

class PointList {
    points: Array<Point>;
    isDirty: boolean;
    onlyRenderInBackground:boolean = true;
    Setup() {
        this.points = new Array<Point>();
        for (let i = 0; i < 12; i++) {
            this.AddPoint(new Point());
        }
    }
    AddPoint(point: Point) {
        this.points.push(point);
        this.isDirty = true;
    }

    MovePoints() {
        this.points.forEach((point) => {
            point.x += point.xDir * point.speed;
            point.y += point.yDir * point.speed;

            if (point.x > 200 || point.x < 0 ) {
                point.xDir = -point.xDir;
            }

            if (point.y > 100 || point.y < 0) {
                point.yDir = -point.yDir;
            }
        });
    }
}

export function InitBackgroundCallbacks() {

    let pointList = new PointList();

    pointList.Setup();

    window.requestIdleCallback = window.requestIdleCallback || function (handler: any) {
        let startTime = Date.now();

        return setTimeout(function() {
            handler({
                didTimeout: false,
                timeRemaining: function() {
                    return Math.max(0, 50.0 - (Date.now() - startTime));
                }
            });
        }, 1);
    };

    window.cancelIdleCallback =
        window.cancelIdleCallback ||
        function (id) {
            clearTimeout(id);
        };


    window.requestAnimationFrame(animate);
    window.requestIdleCallback(moveIfWeCan);

    function moveIfWeCan(deadline: IdleDeadline) {
        while(deadline.timeRemaining() > 0) {
            pointList.MovePoints();
        }

        window.requestIdleCallback(moveIfWeCan)
    }

    function animate(time:number) {
        let canvas = <HTMLCanvasElement>document.getElementById("backgroundTaskCanvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0,0, 500,500);
        ctx.fillStyle = "#ff2626";
        let img = new Image();
        img.src = ghost_img;
        for (let i = 0; i < pointList.points.length; i++) {
            ctx.save();
            let point = pointList.points[i];
            ctx.translate(point.x, point.y);
            ctx.beginPath();
            ctx.drawImage(img, 0,0 );
            ctx.fill();
            ctx.restore();
        }

        window.requestAnimationFrame(animate)
    }
}

