class Rectangle {
  _height: number;
  _width: number;

  constructor(height?: number, width?: number) {
    this._height = height ?? 0;
    this._width = width ?? 0;
  }

  get area() {
    return this._height * this._width;
  }

  get length() {
    return 2 * (this._height + this._width);
  }
}

export default new Rectangle();
