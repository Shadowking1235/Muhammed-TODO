new Vue({
    el:'#appRoot',
    data:{
        title:{
            taskList: 'Task List',
            completedTasks: 'Completed Tasks',
        },
        tasks: [
            { description: "Take out trash", completed: false },
            { description: "Read newspaper", completed: false },
            { description: "Practice guitar", completed: false },
            { description: "Do the dishes", completed: false },
            { description: "Walk the dog", completed: false },
            { description: "Clean the bathroom", completed: false },
        ],
        editTaskIndex: +1,
    },
    methods:{
        addTask(){
            this.tasks.push({description: this.$refs.newTask.value , completed: false});
            this.$refs.newTask.value = '';

            toastr.success('New task added to the task list !!!')
            
        },

        deleteTask(index){
            this.tasks.splice(index,1);
            toastr.error('Task deleted');
        },
        edited(){
            toastr.success('Task updated !!!')
        }
    },
    computed: {
         incompleteTasks: function(){
         return this.tasks.filter( rayhan =>  !rayhan.completed );
         },
        completeTasks: function(){
            return this.tasks.filter( task =>  task.completed );
        }
    }

});