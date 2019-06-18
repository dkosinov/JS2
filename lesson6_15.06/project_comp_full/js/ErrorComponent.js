Vue.component('error', {
    data(){
        return {
            errors: [],
        }
    },
    methods: {
        setError(error){
            this.errors.push(`error#${this.errors.length} : ${error}`);
            console.log(error);
        },
    },
    template: `<span>
                    <div v-for="(error, index) of errors" :key="'error-' + index">
                        {{error}}
                    </div>
               </span>`
});