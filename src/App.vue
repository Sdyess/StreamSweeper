<template>
  <div id="app">
    <div class="container-fluid">
      <Navbar/>
      <router-view/>
      <Footer/>
</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Navbar, Footer },
  methods: {
    ...mapActions([
      'setFilteredStreams',
    ]),
  },
  created() {
    this.setFilteredStreams('en', '');
  },
};
</script>

<style>
#app {
  background-color: #6441A4;
}
.container-fluid {
  padding-right:0;
  padding-left:0;
}
</style>
