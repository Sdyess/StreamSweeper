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
        <img v-for="stream of streams" :key="stream.id" :src="stream.thumbnail_url" style="padding:20px;">
    </div>
</template>

<script>
import TwitchHelper from '../js/TwitchHelper';

export default {
  name: 'Top100',
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
      this.streams = this.$store.state.streams;
      console.log(this.streams);
  },
};
</script>

<style scoped>
</style>

