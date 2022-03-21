<template>
  <div>
    <div>
      <div style="border: solid; border-color: red; width: 700px">
        <h1>Header</h1>
      </div>
    </div>

    <div style="display: flex; height: 300px">
      <div class="menu">
        menu
        <Chicken />
      </div>
      <div class="basket">
        basket
        <Basket />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Chicken: defineAsyncComponent(() => import("menu/Chicken")),
    Basket: defineAsyncComponent(() => import("basket/Basket")),
  },
});
</script>

<style>
.menu {
  border: solid;
  border-color: green;
  width: 500px;
  height: 100%;
}
.basket {
  border: solid;
  border-color: blue;
  width: 200px;
  height: 100%;
}
</style>
