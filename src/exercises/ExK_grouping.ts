import { expect } from "chai";

type Product = {
  category: string;
  name: string;
};

function groupByCategory(products: Product[]): { [category: string]: Product[] } {
  const categories: { [c: string]: Product[] } = { };

  for (const product of products) {
    const categoryProducts = categories[product.category];
    if (categoryProducts) {
      categoryProducts.push(product);
    } else {
      categories[product.category] = [product];
    }
  }

  return categories;
}

describe("Exercise 4 - Grouping", () => {
  const winklePickers: Product = { name: "winkle pickers", category: "shoes" };
  const bovverBoots: Product = { name: "bovver boots", category: "shoes" };
  const fez: Product = { name: "fez", category: "hats" };
  const deerstalker: Product = { name: "deerstalker", category: "hats" };
  const duncesCap: Product = { name: "dunce's cap", category: "hats" };
  const yFronts: Product = { name: "y-fronts", category: "pants" };
  const boxers: Product = { name: "boxers", category: "dogs" };

  it("groups by category", () => {
    const products = [
      winklePickers,
      bovverBoots,
      fez,
      deerstalker,
      duncesCap,
      yFronts,
      boxers,
    ];

    expect(groupByCategory(products)).to.eql({
      shoes: [winklePickers, bovverBoots],
      hats: [fez, deerstalker, duncesCap],
      pants: [yFronts],
      dogs: [boxers],
    });
  });
});
