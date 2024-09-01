// class Rectangle {}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this.width;
    }

    get height() {
        return this.height;
    }
}

class Square extends Animal {}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
