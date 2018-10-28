const KrakenAPIServiceUrl = 'https://api.twitch.tv/kraken/';
const HelixAPIServiceUrl = 'https://api.twitch.tv/helix/';

const TwitchHelper = {
  getRandomTwitchUser() {

  },
  async getMostActiveStreams() {
    const response = await this.fetchGet(`${KrakenAPIServiceUrl}streams/?limit=100`);
    return response;
  },
  async getGameInfo(gameID) {
    const response = await this.fetchGet(`${HelixAPIServiceUrl}games?id=${gameID}`);
    return response;
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
