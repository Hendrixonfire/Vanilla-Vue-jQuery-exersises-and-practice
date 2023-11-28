
const myList = new Vue({
    el: '#tasklist',
    data:{
        newTask:'',
        tasks:[],
        availableStatusTypes: ['Task is pending', 'In progress', 'Task is done'],
        numberOfDone: 0,
        numberOfPending: 0,
        action:"",
        tasksSelection:[],
        id:0,
        showDone: false
    },
    computed: {
      getTasks() {
        return this.tasks.filter(task => task.isDone === this.showDone);
      }
    },
    methods: {
        addTasks() {
          if(this.newTask.trim() != '')
            {
            this.numberOfPending++;
            this.tasks.push({
                id: this.id++,
                name: this.newTask,
                done:'Task is pending',
                isDone:false
            });
            this.newTask ='';
          }
            else 
            alert("U've enter the empty tasks.");
        },
        removeTasks(index){
          
            if (this.tasks[index].done == 'Task is pending'){
              this.tasks.splice(index, 1);
           
              return this.numberOfPending--;
            } else {
              this.tasks.splice(index, 1);
              console.log("removed");
             
            }
        },
        changeStatus(index){
        
           let newIndex = this.availableStatusTypes.indexOf(this.tasks[index].done);
    
        if (this.tasks[index].done != 'Task is done') {
         newIndex++;
        this.tasks[index].done = this.availableStatusTypes[newIndex];
        console.log(newIndex);
         if (this.tasks[index].done === 'Task is done' && !this.tasks[index].isDone){
          this.tasks[index].isDone = true;
          this.numberOfPending--;
          this.numberOfDone++;
          
         }
        }
  
      
        
    },
   
          isCompleted() {
            this.showDone = true;
            console.log("clicked done");
          },
          isPending() {
            this.showDone = false;
            console.log("clicked pending");
          }
        
         
        }
    

    });






//  Задача 2: Список задач
//Создайте список задач, где пользователь может добавлять, удалять и отмечать задачи как выполненные.
// Каждая задача должна иметь название и флажок для отметки выполнения. 
//Отображайте количество выполненных и невыполненных задач.