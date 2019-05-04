import Vue from 'vue';
import Vuex from 'vuex';
import TwitchHelper from './assets/js/TwitchHelper';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    streams: [],
    selectedStream: '',
    streamsLoaded: false,
    streamSelectedBool: false,
    availableGames: [],
    topStreams: [],
  },
  mutations: {
    addStreams(state, listStream) {
      state.streams = listStream.streams;
      state.streamsLoaded = true;
    },
    addTopStreams(state, listStream) {
      state.topStreams = listStream.streams;
    },
    addGame(state, listGames) {
      state.availableGames = listGames.games;
    },
    selectStream(state, displayName) {
      state.selectedStream = displayName;
      state.streamSelectedBool = true;
    },
  },
  actions: {
    async setTopStreams(context) {
      context.commit('addTopStreams', await TwitchHelper.getMostActiveStreams());
      return Promise.resolve();
    },
    async setFilteredStreams(context, lang, game) {
      context.commit('addStreams', await TwitchHelper.getFilteredActiveStreams(lang, game));
      return Promise.resolve();
    },
    async setAvailableGames(context, game) {
      context.commit('addGame', await TwitchHelper.getGames(game));
      return Promise.resolve();
    }
  },
  getters: {
    allStreams: state => state.streams,
    isLoaded: state => state.streamsLoaded,
    isLoaded2: state => state.streamSelectedBool,
  },
});
