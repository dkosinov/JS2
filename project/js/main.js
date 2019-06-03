class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 30},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse'},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},       ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let item of this.data){
            const product = new ProductItem(item);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class ProductItem {
    constructor(product, img = `https://placehold.it/200x150`){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${isNaN(+this.price) ? 'Out of stock' : this.price.toFixed(2)}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}
class Cart {
    constructor(container = '.cart'){
        this.container = container; // node контейнер корзины
        this.products = []; //массив с добавленными товарами
        this.customer = {}; //сведения о покупателе
        this.init();
    }
    getCartContainerNode () {}; //возвращает node контейнер корзины
    addProductToCart (product) {}; //добавим продукт с id в корзину
    removeProductFromCart (id) {}; //удаляем продукт с id из корзины
    removeAllCartItemsFromPage () {}; //удаляет все товары со страницы
    render () {}; //добавляет товары находящиеся в корзине на страницу
    getCartTotalSum () {}; //возвращает стоимость товаров корзине
    getCartItemsQuantity () {}; //возвращает количество товаров в корзине
    getCartInfo () {}; //возвращает состояние корзины
    isProductInCart (product) {}; //проверяет наличие товара в корзине, true если нашёл, false если нет
    getCartItemById (id) {}; //возвращает элемент массива this.products с указаным id, false если нет
}

class CartItem {
    constructor (product) {
        this.product = product; //ссылка на товар каталога
        this.quantity = 1; //количество данного товара в корзине
    }
    render () {} //возвращает HTML товара для отображения в корзине
    getProductTotalSum () {}; //возвращает стоимость товара в корзине

}

const products = new ProductsList();

