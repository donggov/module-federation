<template>
  <div>
    <Basket />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Basket from "./components/Basket.vue";

export default defineComponent({
  components: { Basket },
  name: "App",
});
</script>

<style></style>
