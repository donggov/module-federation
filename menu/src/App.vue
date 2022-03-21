<template>
  <div>
    <Chicken />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Chicken from "./components/Chicken.vue";

export default defineComponent({
  name: "App",
  components: { Chicken },
});
</script>

<style></style>
