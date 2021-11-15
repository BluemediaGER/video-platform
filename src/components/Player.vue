<template>
  <div id="player"></div>
</template>

<script>
import Clappr from "@clappr/player";
import axios from "axios";

export default {
  name: "Player",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      player: null,
    };
  },
  methods: {
    createPlayer() {
      this.player = new Clappr.Player({
        source: axios.defaults.baseURL + "/" + this.id + "/index.m3u8",
        parentId: "#player",
        autoPlay: true,
        height: "100%",
        width: "100%",
        hideMediaControlDelay: 1000,
      });
    },
  },
  mounted() {
    this.createPlayer();
  },
};
</script>

<style>
#player > [data-player] {
  padding-bottom: 56.25%;
  height: auto !important;
}
#player > .fullscreen[data-player] {
  padding-bottom: 0;
  height: 100% !important;
}
</style>
