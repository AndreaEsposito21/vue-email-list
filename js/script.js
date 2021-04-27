var app = new Vue ({
    el: '#root',
    data: {
        listEmailLength: 10,
        listEmail: []
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < this.listEmailLength; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const result = response.data.response;
                    this.listEmail.push(result);
            });
        }

        console.log(this.listEmail);
    }
});