<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role">
      </user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
      // this.$router
    }
  },
  beforeRouterEnter(to,from,next) {
    console.log('User list beforeRouterEnter');
    console.log(to, from);
    next()
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
