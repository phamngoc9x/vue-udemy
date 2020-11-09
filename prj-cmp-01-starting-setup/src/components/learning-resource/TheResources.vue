<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resource')" :mode="storedResButtonMode">Stored Resources</base-button>
      <base-button @click="setSelectedTab('add-resource')"  :mode="storedAddButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResource from './StoredResource';
import AddResource from './AddResource';
export default {
  components: {
    StoredResource,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google abc',
          description: 'Search in google',
          link: 'https://google.com/'
        },
      ]
    }
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    storedAddButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab= tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }

      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resource';
    }
  }
}
</script>