class Car {
    src;
    _x;
    _y;
    width;
    height;
    orientation;
    _velocity; // pixel per refresh time
    _img;


    constructor(src, x, y, width, height, velocity) {
        this.src = src;
        this.width = width;
        this.height = height;
        this._x = x;
        this._y = y;
        this._velocity = velocity;
        this.orientation = 'up';
    };

    speedUp() {
        this._velocity *= 1.2;
        console.log(this._velocity);
    }

    speedDown() {
        this._velocity /= 1.2;
        console.log(this._velocity);
    }

    turn(orientation) {
        this.orientation = orientation;
    }

    moveUp() {
        this.turn('up');
        this._y -= this._velocity;
    }

    moveDown() {
        this.turn('down');
        this._y += this._velocity;
    }

    moveLeft() {
        this.turn('left');
        this._x -= this._velocity;
    }

    moveRight() {
        this.turn('right');
        this._x += this._velocity;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    drawCar(ctx) {
        let img = new Image();
        img.src = this.src;
        let angle;
        switch (this.orientation) {
            case 'up':
                angle = +0.5 * Math.PI;
                break;
            case 'down':
                angle = -0.5 * Math.PI;
                break;
            case 'left':
                angle = 0;
                break;
            case 'right':
                angle = Math.PI;
                break;
        }
        img.onload = () => {
            ctx.translate(this.x, this.y);
            ctx.rotate(angle);
            ctx.drawImage(img, -0.5 * this.width, -0.5 * this.height, this.width, this.height);
            ctx.rotate(-1 * angle);
            ctx.translate(-1 * this.x, -1 * this.y);
        }
    }
}