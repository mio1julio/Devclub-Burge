
const list = document.querySelector("ul");
const buttonshowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-All");
const sumAll = document.querySelector(".sum-All");
const filterAll = document.querySelector(".filter-All");


function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })

      return newValue

}

function showAll(productsArray) {
  let myLi = ''
  productsArray.forEach(product => {
    myLi += ` <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                  </li>`


  })
  list.innerHTML = myLi
}
function mapAllItems() {
  const newprice = menuOptions.map(product => ({
    ...product,
    price: product.price * 0.9
  }));

  showAll(newprice)
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
  <li>
      <p>O valor total dos items e R$ ${formatCurrency(totalValue)} </p>
  </li>


  `
}


function filterAllItems() {
  const filterJusVegan = menuOptions.filter((product) => product.vegan)
  showAll(filterJusVegan)
}


buttonshowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems)
sumAll.addEventListener("click", sumAllItems)
filterAll.addEventListener("click", filterAllItems)