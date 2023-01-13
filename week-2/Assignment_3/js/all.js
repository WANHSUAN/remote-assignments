function calculate(data) {
    let sum = 0;
    const products = data.products;
    const discount = data.discount;
    for(let i = 0; i < products.length; i++) {
      sum += (1 - discount) * products[i].price;
    }
    return sum;
}

const discountedPrice = calculate({
  discount: 0.1, 
  products: [
    {
      name: "Product 1",
      price: 100 
    },
    {
      name: "Product 2",
      price: 700 
    },
    {
      name: "Product 3",
      price: 250 
    }
  ]
});
console.log(discountedPrice); // show the total price of all products after applying a discount











// 適用折扣後，完成功能，計算所有產品的總價格。