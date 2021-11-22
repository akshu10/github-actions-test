import rectangle from "../../src/rectangle";

describe("rectangle test", () => {
  it("should calculate area", () => {
    rectangle._width = 50;
    rectangle._height = 100;

    expect(rectangle.area).toEqual(5000);
  });
});
