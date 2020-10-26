import { expect } from "chai";

// refactor me to be more functional
function removeOddNumbers(numbers: number[]): number[] {
  const result: number[] = [];
  for (const number of numbers) {
    if (number % 2 == 0) {
      result.push(number);
    }
  }
  return result;
}

describe("Filtering", () => {
  it("filters out odd numbers", () => {
    expect(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8])).to.eql([2, 4, 6, 8]);
  });
});
