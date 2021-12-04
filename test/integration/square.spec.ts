import rectangle from "../../src/rectangle";

describe("rectangle tests", () => {
  it("should set height on rectangle object", () => {
    rectangle._height = 1001;

    expect(rectangle._height).toEqual(1001);
  });
});
