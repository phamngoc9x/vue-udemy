<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{showDetail ? 'Hide': 'Show'}} Details</button>
    <ul v-if="showDetail">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['friend'],
  data() {
    return {
      showDetail: false
    }
  },
  methods: {
    toggleDetails() {
      this.showDetail = !this.showDetail;
    }
  }
}
</script>
