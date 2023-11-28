var list = new Vue({
    el: '#list',
    data: {
        name: '',
        affairs: [],
        isDone: false,
        id: 0,
        showContent: false,
        searchName: '',
        statusFilter: "",
        keywordFilter: ""
    },
    methods: {
        addName: function(){
            this.affairs.push({
                id: this.id,
                text: this.name,
                isComplete: this.isDone
            }),
            this.name = ''
            
        },
        removeName: function(index){
            this.affairs.splice(index, 1)
        },
        openFilter: function(){
            this.showContent = !this.showContent;
        }
    },
    computed: {
        filteredTasks() {
            let filtered = this.affairs;
            
            if (this.statusFilter) {
              filtered = filtered.filter(name => name.isComplete === (this.statusFilter === "выполнено"));
            }
            
            if (this.keywordFilter) {
              filtered = filtered.filter(name => name.text.toLowerCase().includes(this.keywordFilter.toLowerCase()));
            }
            return filtered;
          }
    }
})

