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
      text: "2번째 문장 테스트 용",
      createdAt: "2021-05-09T04:20:57.000Z",
    },
  ];

  async updateTweet(tweetTarget, text) {
    const tweets = this.tweets.map((tweet) => {
      if (tweet.text === tweetTarget.text) {
        tweet.text = text;
        return tweet;
      }
      return tweet;
    });
    this.tweets = tweets;
    return this.tweets;
  }

  async deleteTweet(tweetTarget) {
    const tweets = this.tweets.filter(
      (tweet) => tweet.text !== tweetTarget.text
    );
    this.tweets = tweets.reverse();
    return tweets.reverse();
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
    this.tweets.reverse().push(tweet);
    return tweet;
  }
}
