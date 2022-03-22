export default {
  state: () => ({
    menus: [],
  }),
  mutations: {
    addMenu(state, value) {
      state.menus.push(value);
    },
  },
  getters: {
    menus(state) {
      return state.menus;
    },
    totalPrice(state) {
      return state.menus.reduce((sum, value) => sum + value.price, 0);
    },
  },
};
