var app = new Vue({
    el: '#app',
    data:{
        message: 'Message',
        showMessage: true
    },
    methods: {
        toggleMessage: function (){
            this.showMessage = !this.showMessage;
        }
    }
});

app.message = 'Hello';