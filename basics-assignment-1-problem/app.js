const ageApp = Vue.createApp({
  data() {
    return {
      myName: 'Pham Van Ngoc',
      myAge: 29,
      avatar: './avatar.jpg'
    }
  },
  methods: {
    myNumber() {
      const myNumber = Math.random();
      if ((myNumber < 1) && (myNumber > 0)) {
        return myNumber;
      } else {
        return '';
      }
    }
  }
});

ageApp.mount('#assignment');
