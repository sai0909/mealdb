import { getRandomMeal } from "@/api/randommeal.api";

const state = {
  meal: []
};

const getters = {
  getMeal(state) {
    return state.meal;
  }
};

const actions = {
  async fetchRandomMeal({ commit }) {
    return getRandomMeal().then(response => {
      commit("SET_RANDOMMEAL", response.data.meals[0]);
      console.log(response.data.meals[0])
    });
  }
};

const mutations = {
  SET_RANDOMMEAL(state, data) {
    state.meal = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
