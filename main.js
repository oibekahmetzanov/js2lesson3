
//-----------
let menu = document.querySelector('.menu')
let row = document.querySelector('.row')

const getProducts = (category) => {
    fetch(`https://dummyjson.com/products/${category === 'all' ? '' : 'category/' + category}`)
     .then((res) => res.json())
     .then((res) => {
        res?.products.forEach((item) => {
            row.innerHTML += `
            <div class="card">
    <img class="card__img" src="${item.images}" alt="">
    <h2 class="card__title">${item.title}</h2>
    <p class="card__subtitle">${item.description}</p>
    <p class="card__category">Категория: ${item.category}</p>
    <p class="card__price"> цена: ${item.price}</p>

</div>
            `
        })
     })
}

getProducts('all')


const getCategories = () => {
    fetch('https://dummyjson.com/products/categories/')
.then((res) => res.json())
.then((res) => { res.forEach((item) => {
    menu.innerHTML += `<li class='menu-item'>${item}</li>`
})

let menuItems = document.querySelectorAll('.menu-item')
// console.log(menuItems);

Array.from(menuItems)?.forEach((item) => {
    item.addEventListener('click', () => {
    //    fetch(`https://fakestoreapi.com/products/category/${item.textContent}`)
        // .then((res) => res.json())
        // .then((res) => console.log(res))
        row.innerHTML = ''
        getProducts(item?.textContent)
     })
   })
 }) 
}
getCategories()