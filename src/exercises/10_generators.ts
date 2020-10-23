import { expect } from "chai";

// refactor me to be more functional
function fibonacci(count: number): number[] {
  const result: number[] = [];
  let i1: number = 1,
    i2: number = 2;

  for (let i = 0; i < count; i++) {
    const t = i1;
    i1 = i2;
    i2 = t + i2;
    result.push(t);
  }
  return result;
}

describe("Exercise 10 - Generators", () => {
  it("generates the Fibonacci sequence", () => {
    expect(fibonacci(10)).to.eql([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });

  it("returns an empty array for count 0", () => {
    expect(fibonacci(0)).to.be.empty;
  });

  it("returns an empty array for negative count", () => {
    expect(fibonacci(-1)).to.be.empty;
  });
});
