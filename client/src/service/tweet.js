export default class TweetService {
  constructor(http, socket) {
    this.http = http;
    this.socket = socket;
  }

  async updateTweet(num, text) {
    return this.http.fetch(`${num}`, {
      method: 'PUT',
      headers: this.getHeader(),
      body: JSON.stringify({ text }),
    });
  }

  async deleteTweet(num) {
    return this.http.fetch(`${num}`, {
      method: 'DELETE',
      headers: this.getHeader(),
    });
    // ex) Network 통신 예제!
    // const query = username ? `?username=${username}` : "";
    // const response = await fetch(`${this.baseURL}/tweets${query}`, {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    // });
    // const data = await response.json();
    // if (response.status !== 200) {
    //   throw new Error(data.message);
    // }
    // return data;
  }

  async getTweet() {
    return this.http.fetch(``, {
      method: 'GET',
      headers: this.getHeader(),
    });
  }

  async getTweetById(id) {
    return this.http.fetch(`${id}`, {
      method: 'GET',
      headers: this.getHeader(),
    });
  }

  async postTweet(num, id, name, url, text, createdAt) {
    return this.http.fetch(``, {
      method: 'POST',
      headers: this.getHeader(),
      body: JSON.stringify({
        num,
        id,
        name,
        url,
        text,
        createdAt,
      }),
    });
  }

  getHeader() {
    const token = localStorage.getItem('token');
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  onSync(callback) {
    return this.socket.onSync('tweets', callback);
  }
}
