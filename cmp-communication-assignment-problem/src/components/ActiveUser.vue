<template>
  <li>
    <h2>Name: {{ username }}</h2>
    <h3>Age: {{ userage }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    userage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetail = !this.showDetail;
    },
  },
};
</script>
