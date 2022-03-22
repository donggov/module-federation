<template>
  <div>
    <h2>장바구니</h2>
    <ul>
      <li v-for="(menu, index) in menus" :key="index">{{ menu.name }} : {{ menu.price }}</li>
    </ul>
    <h3>총 : {{ totalPrice }}</h3>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Basket",
  setup() {
    const store = useStore();
    const menus = computed(() => store.getters.menus);
    const totalPrice = computed(() => store.getters.totalPrice);

    return { menus, totalPrice };
  },
});
</script>
