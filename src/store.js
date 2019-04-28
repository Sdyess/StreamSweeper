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
  },
  mutations: {
    addStream(state, listStream) {
      state.streams = listStream.streams;
      state.streamsLoaded = true;
    },
    selectStream(state, displayName) {
      state.selectedStream = displayName;
      state.streamSelectedBool = true;
    },
  },
  actions: {
    async setTopStreams(context) {
      context.commit('addStream', await TwitchHelper.getMostActiveStreams());
      return Promise.resolve();
    },
  },
  getters: {
    allStreams: state => state.streams,
    isLoaded: state => state.streamsLoaded,
    isLoaded2: state => state.streamSelectedBool,
  },
});
