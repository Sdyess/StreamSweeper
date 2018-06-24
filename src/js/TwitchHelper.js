const TwitchHelper = {
  getRandomTwitchUser() {

  },
  async getMostActiveStreams() {
    const response = await this.fetchGet('https://api.twitch.tv/helix/streams/?first=100');
    return response;
  },
  async getUserLogin(id) {
    console.log(id);
    const response = await this.fetchGet(`https://api.twitch.tv/helix/users?id=${id}`);
    return response;
  },
  getGameInfo() {
    fetch('https://api.twitch.tv/helix/games?id=493057', {
      headers: {
        'Client-ID': '7i0jdj0u0pbpr5h7x6p622vwm9ih4q',
      },
    })
      .then(response => response.json())
      .then(myJson => console.log(myJson));
  },
  fetchGet(url) {
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
