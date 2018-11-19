const KrakenAPIServiceUrl = 'https://api.twitch.tv/kraken/';
const HelixAPIServiceUrl = 'https://api.twitch.tv/helix/';

const TwitchHelper = {
  async getLiveChannelCount() {
    return this.fetchGet(`${KrakenAPIServiceUrl}streams/summary`);
  },
  async getMostActiveStreams() {
    return this.fetchGet(`${KrakenAPIServiceUrl}streams/?limit=100`);
  },
  async getGameInfo(gameID) {
    return this.fetchGet(`${HelixAPIServiceUrl}games?id=${gameID}`);
  },
  async fetchGet(url) {
    const myHeaders = new Headers();
    myHeaders.append('Client-ID', '7i0jdj0u0pbpr5h7x6p622vwm9ih4q');

    const options = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
    };

    return fetch(url, options).then(response => response.json());
  },
};

export default TwitchHelper;
