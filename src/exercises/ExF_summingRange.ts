import { expect } from "chai";

// refactor me to be more functional
function sumRange(limit: number) {
  let result = 0;
  for (let i = 0; i < limit; i++) {
    result += i;
  }
  return result;
}

describe("Summing Range", () => {
  it("is 0 for limit 0", () => {
    expect(sumRange(0)).to.eql(0)
  });

  it("is 6 for limit 4", () => {
    expect(sumRange(4)).to.eql(6);
  });

  it("handles big numbers", () => {
    expect(sumRange(12345678)).to.eql(76207876467003);
  });
});
