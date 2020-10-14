const state = {
  openOverlay: false,
};

const getters = {
  getOpenOverlay(state) {
    return state.openOverlay;
  },
};

const actions = {
  updateOverlay({ commit }, payload) {
    commit('setOpenOverlay',payload);
  },
};

const mutations = {
  setOpenOverlay(state, data) {
    state.openOverlay = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
