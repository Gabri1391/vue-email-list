Vue.config.devtools = true;

const root = new Vue ({
    el: '#root',
    data:{
        items: 10,
        randomMailsArray: []
    },
    methods: {

    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((res) => {
                const mail = res.data.response
                this.randomMailsArray.push(mail)
               
                console.log(randomMailsArray)
            });
        };
    }

});