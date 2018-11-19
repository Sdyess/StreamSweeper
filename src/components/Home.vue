<template>
    <div class="container">
      <div id="filterSection">
        <div class="row">
            <select class="form-control col-md-3 mr-auto">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="ko">Korean</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="pl">Polish</option>
              <option value="ru">Russian</option>
              <option value="it">Italian</option>
              <option value="sv">Swedish</option>
              <option value="no">Norwegian</option>
              <option value="da">Danish</option>
              <option value="nl">Dutch</option>
              <option value="fi">Finnish</option>
              <option value="tr">Turkish</option>
              <option value="cs">Czech</option>
              <option value="sk">Slovak</option>
              <option value="hu">Hungarian</option>
            </select>
          <input type="search" class="form-control ml-auto col-md-4" placeholder="Game Title...">
        </div>

      </div>
      <div class="row" id="embedSection">
        <Embed class="col-md-12" v-if="isLoaded"/>
      </div>
        <div class="row" id="bottomSection">
          <h5 class="col-md-5 mr-auto" style="color:white;">Under heavy development.</h5>
          <h5 class ="col-md-5 ml-auto" style="color:white;text-align:right;">Built in VueJS</h5>
        </div>

    </div>
</template>

<script>
import Embed from './Embed';

export default {
  name: 'Home',
  components: { Embed },
  computed: {
    isLoaded() {
      return this.$store.state.streamsLoaded;
    },
  },
};
</script>

<style>
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
#filterSection > .row {
  margin: 20px 0;
}
#bottomSection {
  margin-top: 20px;
}
</style>

