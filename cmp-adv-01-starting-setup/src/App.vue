<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectedComponent ==='ActiveGoals'"/>
    <ManageGoals v-if="selectedComponent ==='ManageGoals'"/> -->
    <keep-alive> 
      <component :is="selectedComponent"></component>
    </keep-alive> 
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader, ActiveGoals, ManageGoals
  },
  data() {
    return {
      selectedComponent: 'ActiveGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
