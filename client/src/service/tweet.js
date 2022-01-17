export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async updateTweet(num, text) {
    const response = await fetch(`${this.baseURL}/tweets/${num}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const result = await response.json();
    if (response.status !== 200) {
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  async deleteTweet(num) {
    const response = await fetch(`${this.baseURL}/tweets/${num}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 204) {
      const result = await response.json();
      throw new Error(result.message);
    }
  }

  async getTweet() {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const tweets = await response.json();
    if (response.status !== 200) {
      throw new Error("404 Not Found!");
    }
    return tweets.reverse();
  }

  async getTweetById(id) {
    const response = await fetch(`${this.baseURL}/tweets/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const tweets = await response.json();
    if (response.status !== 200) {
      throw new Error("404 Not Found!");
    }
    return tweets.reverse();
  }

  async postTweet(num, id, name, url, text, createdAt) {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        num,
        id,
        name,
        url,
        text,
        createdAt,
      }),
    });
    const newTweet = await response.json();
    if (response.status !== 201) {
      throw new Error(newTweet.message);
    }
    console.log(newTweet);
    return newTweet;
  }
}
