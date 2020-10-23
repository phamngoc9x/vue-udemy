const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphHide: false,
      color: ''
    };
  },

  methods: {
    toggleClass() {
      this.paragraphHide = !this.paragraphHide;
    }
  },
});
app.mount("#assignment");
