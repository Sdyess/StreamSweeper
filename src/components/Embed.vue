<template>
    <div class="container">
        <div v-if="isLoaded2" id="twitch-embed"></div>
    </div>
    
</template>

<script>
import TwitchHelper from "../js/TwitchHelper";
import {mapActions} from 'vuex';
export default {
  name: "Embed",
  methods: {
    ...mapActions([
      'setSelectedStream',
    ]),
    loadTwitch() { 
      new Twitch.Embed("twitch-embed", {
        width: '100%',
        height: 600,
        channel: this.$store.state.selectedStream,
      });
      
    },
    getRandomStreamNum() {
      const streams = this.$store.state.streams;
      return streams[Math.floor(Math.random()*streams.length)];
    }
    
  },
  data() {
      return {
          stream: 0,
      }
  },
  computed: {
    isLoaded2() {
      return this.$store.state.streamSelectedBool;
    }
  },
  created() {
    this.setSelectedStream(this.getRandomStreamNum());
    
  },
  mounted() {
    TwitchHelper.getGameInfo();  
  },
  updated() {
    this.$nextTick(() => {
        this.loadTwitch(); 
    });
  }
};
</script>

<style scoped>
</style>
