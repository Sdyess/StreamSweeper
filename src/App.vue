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
import {mapActions} from 'vuex';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { Navbar, Footer },
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
.container-fluid {
  padding-right:0;
  padding-left:0;
}
</style>
