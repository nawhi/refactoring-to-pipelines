import { expect } from "chai";

// refactor me to be more functional
function sumOfSquares(numbers: number[]): number {
  let result: number = 0;
  for (const number of numbers) {
    result += number * number;
  }
  return result;
}

describe("Exercise 5 - Reducing", () => {
  it("sums the squares of the numbers in the array", () => {
    expect(sumOfSquares([1, 2, 3, 4, 5])).to.eql(55);
  });

  it("is zero for an empty array", () => {
    expect(sumOfSquares([])).to.eql(0);
  });
});
