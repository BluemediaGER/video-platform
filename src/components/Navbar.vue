<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  height: 50px;
  display: flex;
  justify-content: left;
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: #fafafc;
  box-shadow: 0 1px 6px 0 #888;
}
</style>
