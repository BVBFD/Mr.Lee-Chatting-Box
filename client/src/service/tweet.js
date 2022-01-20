export default class TweetService {
  constructor(http) {
    this.http = http;
  }

  async updateTweet(num, text) {
    return this.http.fetch(`${num}`, {
      method: "PUT",
      body: JSON.stringify({ text }),
    });
  }

  async deleteTweet(num) {
    return this.http.fetch(`${num}`, {
      method: "DELETE",
    });
  }

  async getTweet() {
    return this.http.fetch(`/`, {
      method: "GET",
    });
  }

  async getTweetById(id) {
    return this.http.fetch(`${id}`, {
      method: "GET",
    });
  }

  async postTweet(num, id, name, url, text, createdAt) {
    return this.http.fetch(`/`, {
      method: "POST",
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
}
