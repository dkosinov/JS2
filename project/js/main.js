const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 30},
    {id: 3, title: 'Keyboard', price: 55},
    {id: 4, title: 'Gamepad', price: 75},
];

const renderPage = (list = [{title: 'title',price: 'price'}]) => {
    document.querySelector('.products').innerHTML = list.map(item =>
        `<div class="product-item">
            <h3>${item.title}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button class="buy-btn">Купить</button>
        </div>`).join('');
};

renderPage(products);
