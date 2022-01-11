export default class TweetService {
  tweets = [
    {
      id: "lse126",
      name: "Lee Seong Eun",
      url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
      text: "리액트 화면 구성 마스터 할때 까지 안 잔다.",
      createdAt: "2021-05-09T04:20:57.000Zdfsd",
    },
    {
      id: "lse126",
      name: "Lee Seong Eun",
      url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
      text: "리액트 화면 구성 마스터 할때 까지 안 잔다.fdsafds",
      createdAt: "2021-05-09T04:20:57.000Z",
    },
  ];

  async deleteTweet(tweetTarget) {
    const tweets = this.tweets.filter(
      (tweet) => tweet.text !== tweetTarget.text
    );
    this.tweets = tweets;
    return tweets;
  }

  async getTweet() {
    return this.tweets;
  }

  async postTweet(id, name, url, text, createdAt) {
    const tweet = {
      id: id,
      name: name,
      url: url,
      text: text,
      createdAt: createdAt,
    };
    this.tweets.unshift(tweet);
    return tweet;
  }
}
