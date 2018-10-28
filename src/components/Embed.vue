<template>
    <div class="container">
        <div v-if="isLoaded2" id="twitch-embed"></div>
    </div>

</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import TwitchHelper from '../js/TwitchHelper';

export default {
  name: 'Embed',
  methods: {
    ...mapMutations([
      'selectStream',
    ]),
    loadTwitch() {
      console.log('Loading: ', this.$store.state.selectedStream);
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
  computed: {
    isLoaded2() {
      return this.$store.state.streamSelectedBool;
    },
  },
  created() {
    this.$store.commit('selectStream', this.getRandomStream());
  },
  mounted() {
    const test = TwitchHelper.getGameInfo();
    console.log(test);
    this.$nextTick(() => {
      this.loadTwitch();
    });
  },
};
</script>

<style scoped>
</style>
