import { Cookies } from 'react-cookie';

export default class TweetService {
  constructor(http, socket) {
    this.http = http;
    // this.tokenStorage = tokenStorage;
    this.socket = socket;
    this.cookies = new Cookies();
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
    const token = this.cookies.get('token');
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  onSync(callback) {
    return this.socket.onSync('tweets', callback);
  }
}
