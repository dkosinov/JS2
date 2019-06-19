Vue.component('comp-one', {
    template: `<p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolore doloribus eligendi eum excepturi exercitationem facere inventore ipsa iusto laudantium natus pariatur perferendis perspiciatis praesentium quas repellendus repudiandae, sed veniam?</p>`
});
Vue.component('comp-two', {
    template: `<p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolore doloribus eligendi eum excepturi exercitationem facere inventore ipsa iusto laudantium natus pariatur perferendis perspiciatis praesentium quas repellendus repudiandae, sed veniam?</p>`
});
Vue.component('comp-three', {
    template: `<p>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolore doloribus eligendi eum excepturi exercitationem facere inventore ipsa iusto laudantium natus pariatur perferendis perspiciatis praesentium quas repellendus repudiandae, sed veniam?</p>`
});


// Локальная регстрация
// const error = {
//     template: `<p>Error</p>`
// };
// const someEl = {
//     props: ['counter', 'title'],
//     // data(){
//     //   return {
//     //       title: 'Hello World!',
//     //       counter: 0
//     //   }
//     // },
//     components: {
//         'error': error
//     },
//     methods: {
//       some(){
//           console.log(this);
//       }
//     },
//     template: `<div class="wrap">
//                 <button @click="$emit('increase')">Increase</button>
//                 <p>{{ counter }}</p>
//                 <h2>{{ title }}</h2>
//                 <error></error>
//             </div>`
// };



// Глобальная регистрация
// Vue.component('some-el', {
//     props: ['counter', 'title'],
//     // data(){
//     //   return {
//     //       title: 'Hello World!',
//     //       counter: 0
//     //   }
//     // },
//     methods: {
//       some(){
//           console.log(this);
//       }
//     },
//     template: `<div class="wrap">
//                 <button @click="$emit('increase')">Increase</button>
//                 <p>{{ counter }}</p>
//                 <h2>{{ title }}</h2>
//                 <error></error>
//             </div>`
// });
//
// Vue.component('error', {
//     template: `<p>Error</p>`
// })