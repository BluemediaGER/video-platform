<template>
  <div class="category">
    <p>{{ category.categoryName }}</p>
    <div class="category-items">
      <Preview
        v-for="video in $props.category.videos"
        :id="video"
        :key="video"
      />
    </div>
  </div>
</template>

<script>
import Preview from "@/components/Preview.vue";

export default {
  name: "Category",
  components: {
    Preview,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.category {
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: nowrap;
  background-color: #fafafc;
  padding: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.category > p {
  font-size: 20px;
  margin: 0;
  margin-bottom: 5px;
}
.category-items {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}

/* Custom scrollbar */
.category-items::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.category-items::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
}
.category-items::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

.category-items > :not(:first-child) {
  margin-left: 15px;
}
</style>
