<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'setTopStreams',
    ]),
  },
  created() {
    this.setTopStreams();
  },
};

</script>

<style>
#app {
  background-color: #6441A4;
}
</style>
