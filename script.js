//complete this code
// class Rectangle {}
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    getPerimeter() {
        return this.width * 4;
    }
}
// class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
