<template>
    <div class="container">
        <h3 style="text-align:center;color:white;margin-top:20px;">WELCOME TO TWITCHFLIX</h3>
        <Embed v-if="isLoaded"/>
        <h4 style="text-align:center;color:white;">Under heavy development.</h4>
        <p style="text-align:center;color:white;">Built in VueJS</p>
    </div>
</template>

<script>
import Embed from './Embed';
import Navbar from './Navbar';

export default {
  name: 'Home',
  components: { Embed},
  computed: {
    isLoaded() {
      return this.$store.state.streamsLoaded;
    },
  },
};
</script>

<style>
.container-fluid {
  padding-right:0px;
  padding-left:0px;
}
html {
  position: relative;
  min-height: 100%;
}
body {
  padding:0;
  height:100%;
  width:100%;
  background-color: #6441A4;
  margin-bottom: 60px; /* Margin bottom by footer height */
}
</style>

