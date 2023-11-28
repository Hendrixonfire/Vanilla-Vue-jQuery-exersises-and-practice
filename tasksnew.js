var taskM = new Vue({
    el: '#taskManager',
    data: {
        yourTaskList: 'Ваш список задач:',
        taskName: '',
        taskDescription: '',
        tasks: [],
    },

    methods: {
        createNewTask: function(){
            if (this.taskName === '' || this.taskDescription === '') return alert('Заполните все строки!')
            else {
                this.tasks.push({ // добавляем новый объект к массиву tasks, в дальнейшем v-for его отобразит в html файле
                    id: Date.now(), // id - равен точной дате
                    taskName: this.taskName,
                    taskDescription: this.taskDescription,
                    checked: false,
                })
            }
        },
        removeTask(task){
            this.tasks = this.tasks.filter(p=> p.id !== task.id)
        },
        checked(task){
            task.checked !== task.checked
        },
        sortTasks(){
            this.tasks.sort((a,b) => a.checked > b.checked? -1:1 )
        }
    }

})