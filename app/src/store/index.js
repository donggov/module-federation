import { createStore } from "vuex";
import basket from "./modules/basket";

export default createStore({
  modules: {
    basket,
  },
});

export { basket };
