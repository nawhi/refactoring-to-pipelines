import { expect } from "chai";

function series(max: number): number[] {
  const numbers: number[] = [];
  for (let i = 1; i <= max; i++) {
    for (let j = 1; j <= i; j++) {
      numbers.push(j);
    }
  }
  return numbers;
}

// prettier-ignore
describe("Exercise 7 - Flat Mapping", () => {
  it("counts to one", () => {
    expect(series(1)).to.eql([1]);
  });

  it("counts to two", () => {
    expect(series(2)).to.eql([
      1,
      1,2
    ]);
  });

  it("counts to four", () => {
    expect(series(4)).to.eql([
      1,
      1, 2,
      1, 2, 3,
      1, 2, 3, 4
    ]);
  });
  it("counts to ten", () => {
    expect(series(10)).to.eql([
      1,
      1, 2,
      1, 2, 3,
      1, 2, 3, 4,
      1, 2, 3, 4, 5,
      1, 2, 3, 4, 5, 6,
      1, 2, 3, 4, 5, 6, 7,
      1, 2, 3, 4, 5, 6, 7, 8,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);

    it("counting to zero is not counting", () => {
      expect(series(0)).to.be.empty;
    });

    it("counting to a negative number is not counting", () => {
      expect(series(-1)).to.be.empty;
    });
  });
});
