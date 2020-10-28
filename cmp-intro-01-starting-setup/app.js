const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manual',
          name: 'Manual Lorenz',
          phone: '01234567891',
          email: 'manuel@mail.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987645222',
          email: 'julie@mail.com'
        },
      ]
    }
  }
});

app.component('friend-contact', {
  props: ['data'],
  template: `
  <li>
    <h2>{{ data.name }}</h2>
    <button @click="toggleDetail()">{{showDetail ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="showDetail">
      <li><strong>Phone:</strong> {{ data.phone }}</li>
      <li><strong>Email:</strong> {{ data.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      showDetail: false,
      friend: []
    };
  },
  methods: {
    toggleDetail() {
      this.showDetail = !this.showDetail;
    }
  }
});

app.mount('#app');
