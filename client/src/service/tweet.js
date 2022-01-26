export default class TweetService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async updateTweet(num, text) {
    return this.http.fetch(`${num}`, {
      method: "PUT",
      headers: this.getToken(),
      body: JSON.stringify({ text }),
    });
  }

  async deleteTweet(num) {
    return this.http.fetch(`${num}`, {
      method: "DELETE",
      headers: this.getToken(),
    });
  }

  async getTweet() {
    return this.http.fetch(`/`, {
      method: "GET",
      headers: this.getToken(),
    });
  }

  async getTweetById(id) {
    return this.http.fetch(`${id}`, {
      method: "GET",
      headers: this.getToken(),
    });
  }

  async postTweet(num, id, name, url, text, createdAt) {
    return this.http.fetch(`/`, {
      method: "POST",
      headers: this.getToken(),
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

  getToken() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
