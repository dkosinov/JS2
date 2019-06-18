Vue.component('products', {
    data(){
      return {
          catalogUrl: `/catalogData.json`,
          products: [],
          filtered: [],
          imgCatalog: `https://placehold.it/200x150`,
      }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        dropFilter(value){
            if (value === ""){
                this.filtered = this.products;
            }
        },
    },
    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
            .catch (error => {
                //работаем с компонентом error
                this.$parent.$refs.error.setError(`products.error: Ошибка получения данных по адресу: ${API + this.catalogUrl}`);
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
            .catch (error => {
                //работаем с компонентом error
                this.$parent.$refs.error.setError(`products.error: Ошибка получения данных по адресу: getProducts.json`);
            });
    },
    template: `<div class="products">
        <product 
        v-for="product of filtered" 
        :key="product.id_product"
        :product="product"
        :img="imgCatalog"></product>
    </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item" >
            <img :src="img" :alt="product.product_name">
            <div class="desc">
                <h3>{{product.product_name}}</h3>
                <p>{{product.price}}</p>
                <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
            </div>
        </div>`
})