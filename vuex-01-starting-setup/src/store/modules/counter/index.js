import counterMutation from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      counter : 0,
    }
  },
  mutations: counterMutation,
  actions: counterActions,
  getters: counterGetters
};
