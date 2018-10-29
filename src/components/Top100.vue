<template>
<div v-if="isLoaded">
    <Navbar/>
    <div class="container">
      <div class="row">
        <top-stream v-for="stream in topStreams" :key="stream.id" :streamData="stream"/>
      </div>
    </div>
</div>
    
</template>

<script>
import {mapActions} from 'vuex';
import TwitchHelper from '../js/TwitchHelper';
import TopStream from  './TopStream';
import Navbar from './Navbar';
import Footer from './Footer';

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
    }
  },
  created() {
      this.$store.dispatch('setTopStreams');
  },
  mounted() {
    this.$nextTick(() => {
      this.streams = this.$store.state.streams;
    });
  }
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
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>

