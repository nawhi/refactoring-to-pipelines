import { expect } from "chai";

type Transaction = {
  type: "refund" | "expense";
  subtotal: number;
  tax: number;
  description: string;
};

// refactor me to be more functional
function getTotalExpenses(transactions: Transaction[]): number {
  let result: number = 0;
  for (const transaction of transactions) {
    if (transaction.type === "expense") {
      const total = transaction.subtotal + transaction.tax;
      result += total;
    }
  }
  return result;
}

describe("Reducing part 2", () => {
  it("sums all expenses excluding refunds", () => {
    const transactions: Transaction[] = [
      {
        type: "expense",
        subtotal: 4,
        tax: 1,
        description: "morning coffee",
      },
      {
        type: "expense",
        subtotal: 24,
        tax: 4.8,
        description: "weekly shop",
      },
      {
        type: "refund",
        subtotal: 18,
        tax: 3.6,
        description: "faulty kettle",
      },
    ];

    expect(getTotalExpenses(transactions)).to.eql(33.8);
  });

  it("is zero if there were no expenses", () => {
    const transactions: Transaction[] = [
      {
        type: "refund",
        subtotal: 500,
        tax: 0,
        description: "tenancy deposit",
      },
    ];
    expect(getTotalExpenses(transactions)).to.eql(0);
  });

  it("is zero if there were no transactions", () => {
    expect(getTotalExpenses([])).to.eql(0);
  });
});
