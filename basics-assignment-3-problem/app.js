const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: 0
    };
  },
  methods : {
    add(num) {
      this.counter = this.counter + num;
    },
  },
  watch: {
    counter(value) {
      if(value === 37 ) {
        this.result ='Not there yet';
      }

      if(value > 37 ) {
        this.result ='Too much!';
      }

      if(value < 37) {
        this.result = value;

      }

      const that= this;
      setTimeout(function() {
        that.counter = 0;
        that.result = 0;
      }, 5000);
    },
  }
});

app.mount('#assignment');
