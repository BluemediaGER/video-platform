<template>
  <div class="empty">
    <BIconEyeSlashFill class="icon" />
    <h1>No public videos available.</h1>
  </div>
</template>

<script>
import { BIconEyeSlashFill } from "bootstrap-icons-vue";

export default {
  name: "Empty",
  components: {
    BIconEyeSlashFill,
  },
};
</script>

<style scoped>
.empty {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.icon {
  font-size: 5rem;
  margin-bottom: 20px;
}
</style>
