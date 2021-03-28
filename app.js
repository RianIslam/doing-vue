const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            title:'the vue',
            author:'rian',
            age:23
        }
    },
    methods:{
        toggleShowBooks(){
           this.showBooks = !this.showBooks
       }
    }
})

app.mount('#app')