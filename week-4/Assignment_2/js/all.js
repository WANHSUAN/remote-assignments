function ajax(url) {
  // your code here

  fetch(url)
    .then((data) => data.json())
    .then((data) => render(data));
}

function render(data) {
  // your code here
  data.forEach((da) => {
    const productName = da.name;
    const productPrice = da.price;
    const productDescription = da.description;

    document.querySelector(".area").innerHTML += `
    <ul class="list">
      <li>
        <div class="product-img"></div>
      </li>
      <li>
        <h2>${productName}</h2>
      </li>
      <li>
        <p>${productDescription}</p>
      </li>
      <li>
        <small>NT$ ${productPrice}</small>
      </li>
    </ul>
    `;
  });
}

const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";

ajax(url).then((data) => {
  render(data);
});
