const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
}

function updateProductName(index, newName) {
  products[index] = newName;
}

function removeLastProduct() {
  products.pop();
}

module.exports = {
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
  products
};
