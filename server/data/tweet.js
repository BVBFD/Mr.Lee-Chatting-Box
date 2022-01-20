let tweets = [
  {
    num: "1",
    id: "lse126",
    name: "Lee Seong Eun",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
    text: "아카데미아에 온것을 환영합니다.",
    createdAt: "2021-05-09T04:20:57.000Zdfsd",
  },
  {
    num: "2",
    id: "lse126",
    name: "Lee Seong Eun",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
    text: "안녕하십니까.",
    createdAt: "2021-05-09T04:20:57.000Z",
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllById(id) {
  const filteredTweets = tweets.filter((tweet) => tweet.id === id);
  return filteredTweets;
}

export async function create(num, id, name, url, text, createdAt) {
  const newTweet = {
    num,
    id,
    name,
    url,
    text,
    createdAt,
  };
  tweets.push(newTweet);
  return newTweet;
}

export async function update(num, text) {
  const originData = tweets.find((tweet) => tweet.num === num);
  originData.text = text;
  return originData;
}

export async function remove(num) {
  tweets = tweets.filter((tweet) => tweet.num !== num);
  return tweets;
}
