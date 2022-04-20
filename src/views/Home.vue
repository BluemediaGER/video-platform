<template>
  <div class="home">
    <Loader v-if="$data.loading" />
    <div v-if="!$data.loading && !$data.empty" class="categories">
      <Category
        v-for="category in $data.categories"
        :category="category"
        :key="category.categoryId"
      />
    </div>
    <Empty v-if="$data.empty" />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Category from "@/components/Category.vue";
import Empty from "@/components/Empty.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Loader,
    Category,
    Empty,
  },
  data() {
    return {
      categories: [],
      loading: true,
      empty: false,
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios
        .get("/index.json", { baseURL: "" })
        .then((response) => {
          if (response.data.length > 0) {
            this.categories = response.data;
          } else {
            this.empty = true;
          }
          this.loading = false;
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.empty = true;
            this.loading = false;
          } else {
            console.log(error);
          }
        });
    },
  },
};
</script>

<style scoped>
.home {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.categories {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.categories > :not(:first-child) {
  margin-top: 20px;
}
</style>
