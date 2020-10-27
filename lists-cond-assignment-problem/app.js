const app = Vue.createApp({
    data() {
      return {
        taskList: [],
        taskInput: '',
        showList: true
      }
    },
    methods: {
      addTask() {
        this.taskList.push(this.taskInput);
      },
      toggleList() {
          this.showList = !this.showList;
      }
    }
  });
  app.mount('#assignment')
  