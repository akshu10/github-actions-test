import rectangle from "../../src/rectangle";

describe("rectangle test", () => {
  it("should calculate area", () => {
    rectangle._width = 50;
    rectangle._height = 100;

    expect(rectangle.area).toEqual(5000);
  });

  it("should calculate length of rectangle", () => {
    rectangle._height = 100;
    rectangle._width = 70;

    expect(rectangle.length).toEqual(340);
  });

  it("should calculate area", () => {
    rectangle._width = 10;
    rectangle._height = 10;

    expect(rectangle.area).toEqual(100);
  });

  it("should calculate length", () => {
    rectangle._width = 10;
    rectangle._height = 10;

    expect(rectangle.length).toEqual(40);
  });
});
