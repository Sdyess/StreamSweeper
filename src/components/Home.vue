<template>
    <div class="container-fluid">
        <Navbar/>
        <h3 style="text-align:center;color:white;margin-top:20px;">WELCOME TO TWITCHFLIX</h3>
        <Embed v-if="isLoaded"/>
        <h4 style="text-align:center;color:white;">Still in development tho.</h4>
        <p style="text-align:center;color:white;">Built in VueJS</p>
        <Footer/>
    </div>
</template>

<script>
import Embed from './Embed';
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  name: 'Home',
  components: { Embed, Navbar, Footer },
  computed: {
    isLoaded() {
      return this.$store.state.streamsLoaded;
    },
  },
};
</script>

<style scoped>
</style>

