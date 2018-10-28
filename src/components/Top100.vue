<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">TwitchFlix</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Top100">Top 100 Streams</router-link>
                    </li>
                    
                </ul>
            </div>
        </nav>
        <top-stream v-for="stream in streams" :key="stream.id" :streamData="stream"></top-stream>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import TwitchHelper from '../js/TwitchHelper';
import TopStream from  './TopStream';


export default {
  name: 'Top100',
  components: { TopStream },
  ...mapActions([
      'setTopStreams',
    ]),
  data() {
    return {
      streams: [],
    }
  },
  convertThumbUrl(thumbUrl) {
      let newThumb = thumbUrl;
      newThumb.replace('{Width}', '200');
      newThumb.replace('{Height}', '100');
      return newThumb;
  },
  created() {
      if (this.$store.state.streams.length === 0) {
          this.setTopStreams();
      }
      this.streams = this.$store.state.streams;
      console.log('Hello');
      console.log(this.streams);
  },
};
</script>

<style scoped>
</style>

