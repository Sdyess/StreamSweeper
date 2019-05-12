<template>
    <div class="container">
      <div id="filterSection">
        <div class="row">
            <select class="form-control col-md-3" v-model="selectedLang">
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
            <input type="search" id="gameSearch" autocomplete="off" class="form-control ml-auto col-md-3" placeholder="Game Title..." v-on:keyup="loadGames()" v-model="gameInput" list="gameList">
            <datalist id="gameList">
            </datalist>
          <button type="button" class="btn btn-twitch ml-auto col-md-3" v-on:click="loadRandomStream()">
            <span><i class="fas fa-sync fa-lg"></i> Random Stream</span>
          </button>
        </div>
      </div>
      <div class="row" id="embedSection">
        <Embed class="col-md-12" v-if="isLoaded" :lang="this.selectedLang" :game="this.gameInput"/>
      </div>
        <div id="bottomSection">
          <button type="button" class="btn btn-twitch ml-auto" disabled>
              <span><i class="fas fa-heart fa-lg"></i> Follow</span>
          </button>
          <button type="button" class="btn btn-twitch" disabled>
              <span><i class="fas fa-star fa-lg"></i> Subscribe</span>
          </button>
        </div>
        <br>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Embed from '../components/Embed';

export default {
  name: 'Home',
  components: { Embed },
  ...mapActions([
    'setAvailableGames',
    'setFilteredStreams',
  ]),
  data() {
    return {
      selectedLang: 'en',
      gameInput: '',
    };
  },
  computed: {
    isLoaded() {
      return this.$store.state.streamsLoaded;
    },
    availableGames() {
      return this.$store.state.availableGames;
    },
  },
  methods: {
    loadRandomStream() {
      this.$store.state.streamsLoaded = false;
      const payload = {
        game: this.gameInput,
        lang: this.selectedLang,
      };
      this.$store.dispatch('setFilteredStreams', payload);
      this.$emit('update');
    },
    loadGames() {
      if (this.gameInput.length > 3) {
        this.$store.dispatch('setAvailableGames', this.gameInput);
        console.log(this.availableGames);
        const gameList = document.getElementById('gameList');
        if (gameList) {
          let optionString = '';
          this.availableGames.forEach((element) => {
            optionString += `<option value="${element.name}"/>`;
          });

          gameList.innerHTML = optionString;
          const gameInput = document.getElementById('gameSearch');
          if (gameInput) {
            gameInput.focus();
          }
        }
      }
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

.btn-twitch {
  background-color: #392e5c;
  color: white;
  border-color: #6441A4;
}
</style>
