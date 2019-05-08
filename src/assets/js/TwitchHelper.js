const KrakenAPIServiceUrl = 'https://api.twitch.tv/kraken/';
const HelixAPIServiceUrl = 'https://api.twitch.tv/helix/';

const TwitchHelper = {
  async getLiveChannelCount() {
    return this.fetchGet(`${KrakenAPIServiceUrl}streams/summary`);
  },
  async getMostActiveStreams() {
    return this.fetchGet(`${KrakenAPIServiceUrl}streams/?limit=100`);
  },
  async getFilteredActiveStreams(lang, game) {
    let setLang = '';
    if (!lang) {
      setLang = 'en';
    } else {
      setLang = lang;
    }

    if (game && game.length > 0) {
      return this.fetchGet(`${KrakenAPIServiceUrl}streams/?limit=100&language=${setLang}&game=${game}`);
    }
    return this.fetchGet(`${KrakenAPIServiceUrl}streams/?limit=100&language=${setLang}`);
  },
  async getGameInfo(gameID) {
    return this.fetchGet(`${HelixAPIServiceUrl}games?id=${gameID}`);
  },
  async getGames(gameFilter) {
    return this.fetchGet(`${KrakenAPIServiceUrl}search/games?query=${gameFilter}&type=suggest`);
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
