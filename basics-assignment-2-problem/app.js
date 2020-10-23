const app = Vue.createApp({
  data() {
    return {
      message: 'message confirm alert!',
      messageKeydown: '',
      messageEnter:''
    }
  },
  methods: {
    showAlert(event) {
      alert(this.message);
    },
    changeTextKeydown(event) {
      this.messageKeydown = event.target.value;
    },

    changeTextEnter(event) {
      this.messageEnter = event.target.value;
    }
  }
})

app.mount('#assignment');
