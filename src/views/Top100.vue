<template>
<div v-if="isLoaded">
    <div class="container">
      <div class="row">
        <top-stream v-for="stream in topStreams" :key="stream.id" :streamData="stream"/>
      </div>
    </div>
</div>

</template>

<script>
import { mapActions } from 'vuex';
import TopStream from '../components/TopStream.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Top100',
  components: { TopStream, Navbar, Footer },
  ...mapActions([
    'setTopStreams',
  ]),
  computed: {
    isLoaded() {
      return this.$store.state.streamsLoaded;
    },
    topStreams() {
      return this.$store.state.streams;
    },
  },
  created() {
    this.$store.dispatch('setTopStreams');
  },
  mounted() {
    this.$nextTick(() => {
      this.streams = this.$store.state.streams;
    });
  },
};
</script>

<style scoped>
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px; /* Margin bottom by footer height */
}

</style>

