import Vue from 'vue';
import Vuex from 'vuex';

import TwitchHelper from '../js/TwitchHelper';

Vue.use(Vuex);


const state = {
  streams: [],
  selectedStream: '',
  streamsLoaded: false,
  streamSelectedBool: false,
};

const mutations = {
  addStream(state, listStream) {
    state.streams = listStream.streams;
    state.streamsLoaded = true;
    console.log(state.streams);
  },
  selectStream(state, displayName) {
    console.log(displayName);
    state.selectedStream = displayName;
    state.streamSelectedBool = true;
  },
};

const actions = {
  async setTopStreams(context) {
    context.commit('addStream', await TwitchHelper.getMostActiveStreams());
    return Promise.resolve();
  },
};

const getters = {
  allStreams: state => {
    return state.streams;
  },
  isLoaded: state => {
    return state.streamsLoaded;
  },
  isLoaded2: state => {
    return state.streamSelectedBool;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
