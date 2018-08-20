import Storage from "@/tools/storage";
const state = {
  //token
  token: Storage.get("token")
};
const actions = {
  setToken({ commit }, data) {
    commit("setToken", data);
  }
};
const mutations = {
  setToken(state, data) {
    Storage.set("token", data);
    state.token = Storage.get("token");
  }
};
export default {
  state,
  actions,
  mutations
};