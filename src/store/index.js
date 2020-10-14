import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Modules
import Randommeal from "./modules/random";
import Search from './modules/search'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Randommeal: Randommeal,
    Search: Search,
  }
});
