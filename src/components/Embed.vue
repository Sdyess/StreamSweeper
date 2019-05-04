<template>
  <div id="twitch-embed"></div>
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
      new Twitch.Embed('twitch-embed', {
        width: '100%',
        height: 600,
        channel: this.$store.state.selectedStream,
      });
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
