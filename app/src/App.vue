<template>
  <div>
    <div>
      <div style="border: solid; border-color: red; width: 700px">
        <h1>Header</h1>
      </div>
    </div>

    <div style="display: flex; height: 500px">
      <div class="menu">menu</div>
      <div class="basket">basket</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
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
