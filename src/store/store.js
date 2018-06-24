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
    console.log(listStream);
    for(var key in listStream.data) {
      state.streams.push(listStream.data[key].user_id);
    }
    state.streamsLoaded = true;
  },
  setStreamUser(state, login) {
    console.log(login);
    state.selectedStream = login.data[0].display_name;
    state.streamSelectedBool = true;
  },
};

const actions = {
  async setTopStreams(context) {
    context.commit('addStream', await TwitchHelper.getMostActiveStreams());
    return Promise.resolve();
  },
  async setSelectedStream(context, id) {
    context.commit('setStreamUser', await TwitchHelper.getUserLogin(id));
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
})