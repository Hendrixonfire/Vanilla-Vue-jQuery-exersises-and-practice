var app = new Vue({ 
    el: "#app4",
    data() {
    return {
      text: ''
    }
  },
  methods: {
    myMethod() {
      this.text = 'Hello World!'
    }
  }
});