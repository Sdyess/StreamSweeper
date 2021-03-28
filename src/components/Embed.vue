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
import { mapMutations } from 'vuex';

export default {
  name: 'Embed',
  props: ['lang', 'game'],
  methods: {
    ...mapMutations([
      'selectStream',
    ]),
    loadTwitch() {
      const iframe = document.getElementById('twitch-frame');
      if (iframe) {
        const channel = this.$store.state.selectedStream;
        iframe.src = `https://player.twitch.tv/?channel=${channel}&parent=twitchflix.net`;
      }
    },
    getRandomStream() {
      const streams = this.$store.state.streams; // eslint-disable-line prefer-destructuring
      return streams[Math.floor(Math.random() * streams.length)].channel.display_name;
    },
    reloadStream() {
      this.$store.commit('selectStream', this.getRandomStream());
      this.loadTwitch();
    },
  },
  created() {
    this.$store.commit('selectStream', this.getRandomStream());
    this.$parent.$on('update', this.reloadStream);
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
