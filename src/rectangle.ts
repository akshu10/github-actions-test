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

export default new Rectangle();
