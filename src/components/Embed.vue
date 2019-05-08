<template>
  <iframe
    id="twitch-frame"
    src=""
    height="720"
    width="1280"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true">
  </iframe>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Embed',
  props: ['lang'],
  methods: {
    ...mapMutations([
      'selectStream',
    ]),
    loadTwitch() {
      const iframe = document.getElementById('twitch-frame');
      if (iframe) {
        const channel = this.$store.state.selectedStream;
        iframe.src = `https://player.twitch.tv/?channel=${channel}`;
      }
    },
    getRandomStream() {
      const streams = this.$store.state.streams;
      return streams[Math.floor(Math.random() * streams.length)].channel.display_name;
    },
  },
  created() {
    this.$store.commit('selectStream', this.getRandomStream());
  },
  mounted() {
    this.$nextTick(() => {
      this.loadTwitch();
    });
  },
};
</script>

<style scoped>
</style>
