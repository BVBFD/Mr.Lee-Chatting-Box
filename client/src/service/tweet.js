export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async updateTweet(tweetTarget, text) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetTarget.num}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: {
        text,
      },
    });
    const result = await response.json();
    if (response.status !== 200) {
      throw new Error(result.message);
    } else {
      return result;
    }
  }

  async deleteTweet(tweetTarget) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetTarget.num}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (result.status !== 204) {
      throw new Error("500 Error!");
    }
    return result;
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
    return tweets;
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
    return tweets;
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
