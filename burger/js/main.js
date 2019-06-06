class MenuList {
    constructor (burgersContainer='.menu-list__burgers',toppingsContainer='.menu-list__toppings',addsContainers='.menu-list__adds') {
        this.burgersContainer = burgersContainer;
        this.toppingsContainer = toppingsContainer;
        this.addsContainers = addsContainers;
        this.data = [];
        this.burgers = [];
        this.toppings = {};
        this.adds = [];
        this.init();
    }
    init () {
        this._fetchData();
        this._renderBurgers();
        // this._renderTopping();
        // this._renderAdds();
    }
    _getItemById(id, arr) {
        for (let item of arr) {
            if (item.id === id) {
                return item;
            }
        }
        return false;
    }

    _fetchData(){
        this.burgersData = [
            {id: 0, title: 'Big Burger', price: 100, calorie: 40, img : 'https://bampsi.ru/images/67/7/67731b819affdfbf7533d3c254a3c48e_9486628_product_large.jpg'},
            {id: 1, title: 'Small Burger', price: 50, calorie: 20, img : 'https://avatars.mds.yandex.net/get-pdb/1616117/c70dbd60-7ea8-4ed6-8eda-84dbae03e0b8/s1200'},
            ];
        this.toppingsData = [
            {id: 0, title: 'Cheese', price: 10, calorie: 20},
            {id: 1, title: 'Salad', price: 20, calorie: 5},
            {id: 2, title: 'Potato', price: 15, calorie: 10},
        ];
        this.addData = [
            {id: 0, title: 'Spice', price: 15, calorie: 0},
            {id: 1, title: 'Mayonnaise', price: 20, calorie: 5},
        ];
    }
    _renderBurgers(){
        const block = document.querySelector(this.burgersContainer);
        for (let item of this.burgersData){
            const burger = new Burger(item);
            this.burgers.push(burger);

            block.insertAdjacentHTML('beforeend', burger._render());

            const btn = block.querySelector(`#btn-${burger.id}`);
            btn.dataset.id = burger.id;
        }
        block.addEventListener('click', (event) => {
            const burger = this._getItemById(+event.target.dataset.id, this.burgers);
            event.currentTarget.classList.add('menu-list__burgers_show_off');
            order.addBurgerInOrder(burger);
            console.log(order.burger.title + ' добавлен в заказ');
        })
    }
    _renderTopping() {

    }
    _renderAdds() {

    }
};

class Burger {
    constructor (burger) {
        this.id = burger.id;
        this.title = burger.title;
        this.price = burger.price;
        this.calorie = burger.calorie;
        this.img = burger.img;
    }
    _render() {
        return `<div class="burger-item">
                 <img class = "burger-item__img" src="${this.img}" alt="${this.title}">
                 <div class="burger-item__desc">
                     <h3 class="burger-item__title">${this.title}</h3>
                     <p class="burger-item__price">${isNaN(+this.price) ? 'Out of stock' : this.price.toFixed(2)} RUR</p>
                     <p class="burger-item__cal">${this.calorie} kcal</p>
                 </div>
                     <button class="burger-item__btn" id="btn-${this.id}">выбрать</button>                 
             </div>`
    };
}

class Topping {
    constructor (topping) {

    }
}

class Add {
    constructor (add) {

    }
}

class Order {
    constructor (container='.order', burger={}, topping={}, add={}) {
        this.container = container;
        this.burger = burger;
        this.topping = topping;
        this.add = add;
    }
    addBurgerInOrder(burger) {
        this.burger = burger;
        this._renderBurger();
    }
    _renderBurger() {
        const block = document.querySelector(this.container);
        block.insertAdjacentHTML('beforeend', `<div class="order-burger">
                 <img class = "order-burger__img" src="${this.burger.img}" alt="${this.burger.title}">
                 <h3 class="order-burger__title">${this.burger.title}</h3>
                 <p class="order-burger__price">${isNaN(+this.burger.price) ? 'Out of stock' : this.burger.price.toFixed(2)} RUR</p>
                 <p class="order-burger__cal">${this.burger.calorie} kcal</p>
             </div>`);
    
    }
}

const menuList = new MenuList();
const order = new Order(); //рассматриваем вариан заказа с одним бургером
