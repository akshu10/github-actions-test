class Rectangle {
  _height: number;
  _width: number;

  constructor(length?: number | undefined, width?: number | undefined) {
    this._height = length;
    this._width = width;
  }

  get area() {
    return this._height * this._width;
  }

  get length() {
    return 2 * (this._height + this._width);
  }
}

// let rectangle = new Rectangle();
// rectangle._width = 5;
// rectangle._height = 5;

// console.log(rectangle.area);
export default new Rectangle();
