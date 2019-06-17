new Vue({
    el: '#app',
    data: {
        currentTab: 'one',
        tabs: ['one', 'two', 'three']
    },
    computed: {
        currentComp(){
            return `comp-${this.currentTab}`
        }
    }
})


// const app = new Vue({
//     el: '#app',
//     data: {
//         text: 'Hello',
//         counter: 0
//     },
//     components: {
//         'some-el': someEl
//     }
// })