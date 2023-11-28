var app = new Vue({
    el: '#app3',
    data:{
        firstName: '',
        lastName: '',
        fullName:'',
        showFullName: true
    methods:{
        showMyFullName: function(){
            this.showFullName = !this.showFullName;
        }
    },
    computed:{
     computeFullName(){
        return this.fullName = this.firstName + ' ' + this.lastName;
     }
    }
});