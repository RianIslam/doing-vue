const app = Vue.createApp({
    data(){
        return{
            showBooks: false,
            title:'the vue',
            author:'rian',
            age:23
        }
    },
    methods:{
        changeTitle(title){
        //   this.title = 'words of randiance'  
        this.title = title
        }
    }
})

app.mount('#app')