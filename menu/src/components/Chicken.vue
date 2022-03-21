<template>
  <div>
    <h2>메뉴</h2>
    <h3>치킨</h3>
    <ul>
      <li v-for="(menu, index) in menus" :key="index">
        {{ menu.name }} : {{ menu.price }}원
        <button>담기</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Chicken",
  setup() {
    const menus = reactive([
      { name: "후라이드", price: 10000 },
      { name: "양념", price: 11000 },
      { name: "반반", price: 11000 },
    ]);

    return { menus };
  },
});
</script>
