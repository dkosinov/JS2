const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     }
// };



class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this._getProducts()
            .then(() => this._render());
    }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = [...data];
            })
            .catch(error => console.log('error'));
    }
    // _fetchProducts(){
    //     this.data = [
    //         {id: 1, title: 'Notebook', price: 2000},
    //         {id: 2, title: 'Mouse', price: 30},
    //         {id: 3, title: 'Keyboard', price: 55},
    //         {id: 4, title: 'Gamepad', price: 65},
    //     ];
    // }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum + item.price, 0)
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
        this.id_product = product.id_product;
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

class Cart {
    constructor(container = '.cart'){
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this._getCart();
        this._render();
            // .then(() => this._render());
    }
    _getCart(){
        this.data = {
            "amount": 46600,
            "countGoods": 2,
            "contents": [
                {
                    "id_product": 123,
                    "product_name": "Ноутбук",
                    "price": 45600,
                    "quantity": 1
                },
                {
                    "id_product": 456,
                    "product_name": "Мышка",
                    "price": 1000,
                    "quantity": 1
                }
            ]
        };
        // return fetch(`${API}/getBasket.json`)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.data = [...data];
        //     })
        //     .catch(error => console.log('error'));
    }
    _render(){
        const $block = document.querySelector(this.container);
        // for (let item of this.data){
        //     const product = new CartItem(item);
        //     this.allProducts.push(product);
        //     block.insertAdjacentHTML('beforeend', product.render());
        // }
        console.log($block.classList);
        $block.addEventListener('click',(event) => {
            console.log(event.currentTarget.classList);
            event.currentTarget.classList.add('cart_visible_on');
        })
    }
}

class CartItem {
    constructor(product, img = `https://placehold.it/200x150`){
        this.id_product = product.id_product;
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="cart__item">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="cart__desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="del-btn">X</button>
                 </div>
             </div>`
    }
}

const products = new ProductsList();
const cart = new Cart();