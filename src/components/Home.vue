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
                </ul>
            </div>
        </nav>
        <h3 style="text-align:center;color:white;margin-top:20px;">WELCOME TO TWITCHFLIX U CUCKS</h3>
        <Embed v-if="isLoaded"/>
        <h4 style="text-align:center;color:white;">Still in development tho.</h4>
        <p style="text-align:center;color:white;">Built in VueJS</p>
    </div>
</template>

<script>
import Embed from "./Embed";

export default {
  name: "Home",
  components: { Embed },
  computed: {
    isLoaded() {
      return this.$store.state.streamsLoaded;
    }
  },
};
</script>

<style scoped>
</style>

