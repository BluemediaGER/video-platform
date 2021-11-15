<template>
  <div class="watch">
    <Loader v-if="loading" />
    <Player class="player" :id="this.$route.query.v" v-if="!loading" />
    <div v-if="!loading" class="video-info">
      <div class="video-info-title">
        <h1>{{ video.title }}</h1>
      </div>
      <div class="video-info-description">
        <p>{{ video.description }}</p>
      </div>
      <div class="video-info-additional">
        <p>{{ "Creator: " + video.uploadedBy }}</p>
        <p>{{ "Uploaded at: " + videoDateString }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Player from "@/components/Player.vue";
import axios from "axios";

export default {
  name: "Watch",
  components: {
    Loader,
    Player,
  },
  data() {
    return {
      video: {
        title: "",
        description: "",
      },
      loading: true,
    };
  },
  computed: {
    videoDateString() {
      return new Date(this.video.uploadedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
  created() {
    if (!this.$route.query.v || this.$route.query.v === "") {
      this.$router.push("/");
    }
    axios
      .get("/" + this.$route.query.v + "/meta.json")
      .then((response) => {
        this.video = response.data;
        this.loading = false;
      })
      .catch(() => {
        this.$router.push("/");
        console.log("Video not found");
      });
  },
};
</script>

<style scoped>
.watch {
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: left;
}

@media (min-width: 1024px) {
  .watch {
    width: 70%;
    margin: 0 auto;
    padding-top: 30px;
  }
}

@media (max-width: 450px) {
  .video-info {
    padding-left: 5px;
    padding-right: 5px;
  }
  .video-info-title {
    font-size: 12px;
  }
  .video-info-additional,
  .video-info-description {
    font-size: 12px;
  }
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.player {
  width: 100%;
}
.video-info-additional {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
