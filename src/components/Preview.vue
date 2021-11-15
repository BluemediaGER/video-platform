<template>
  <router-link :to="'/watch?v=' + this.id" class="preview">
    <img
      v-if="videoInfo.thumbnail"
      :src="this.thumbnailUrl"
      width="300"
      height="169"
    />
    <img
      v-if="!videoInfo.thumbnail"
      src="@/assets/empty-thumbnail.jpg"
      width="300"
      height="169"
    />
    <p class="title">{{ videoInfo.title }}</p>
    <div class="video-details">
      <p class="video-uploader">Creator: {{ videoInfo.uploadedBy }}</p>
      <p class="video-date">{{ videoDate }}</p>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "Preview",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      videoInfo: {
        thumbnail: false,
      },
      videoDate: null,
      thumbnailUrl: axios.defaults.baseURL + "/" + this.id + "/thumbnail.jpg",
    };
  },
  created() {
    this.getVideoInfo();
  },
  methods: {
    getVideoInfo() {
      axios.get("/" + this.id + "/meta.json").then((response) => {
        this.videoInfo = response.data;
        this.videoDate = new Date(this.videoInfo.uploadedAt).toLocaleDateString(
          undefined,
          { year: "numeric", month: "long", day: "numeric" }
        );
      });
    },
  },
};
</script>

<style scoped>
.preview {
  all: unset;
  display: flex;
  width: 300px;
  height: 240px;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
}

p {
  margin: 0;
  margin-top: 5px;
  text-align: left;
  font-size: 16px;
}
.video-details {
  display: flex;
  justify-content: space-between;
}
.video-details > p {
  font-size: 12px;
}
</style>
