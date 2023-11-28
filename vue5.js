const app5 = new Vue({
    el: '#app5',
    data:{
        message:''
    },
    computed:{
        reversedMessage: function(){
            return this.message.split('').reverse().join('');
        }
    },
    watch:{
        message: function(newMessage, oldMessage){
        console.log('Value of a message has changed')
        }
    }
})