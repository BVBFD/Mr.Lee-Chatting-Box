// let tweets = [
//   {
//     num: "1",
//     id: "lse126",
//     name: "Lee Seong Eun",
//     url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
//     text: "아카데미아에 온것을 환영합니다.",
//     createdAt: "2021-05-09T04:20:57.000Zdfsd",
//   },
//   {
//     num: "2",
//     id: "lse126",
//     name: "Lee Seong Eun",
//     url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
//     text: "안녕하십니까.",
//     createdAt: "2021-05-09T04:20:57.000Z",
//   },
// ];

import { db } from "../db/database.js";

export async function getAll() {
  // return tweets;
  return db.execute("SELECT * FROM tweet").then((tweets) => tweets[0]);
}

export async function getAllById(id) {
  // const filteredTweets = tweets.filter((tweet) => tweet.id === id);
  // return filteredTweets;
  return db
    .execute("SELECT * FROM tweet WHERE id=?", [id])
    .then((tweets) => tweets[0]);
}

export async function create(num, id, name, url, text, createdAt) {
  // const newTweet = {
  //   num,
  //   id,
  //   name,
  //   url,
  //   text,
  //   createdAt,
  // };
  // tweets.push(newTweet);
  // return newTweet;
  return db
    .execute(
      "INSERT INTO tweet (num, id, name, url, text, createdAt) VALUES(?,?,?,?,?,?)",
      [num, id, name, url, text, createdAt]
    )
    .then((result) =>
      db
        .execute("SELECT * FROM tweet WHERE num=?", [result[0].insertId])
        .then((newTweet) => newTweet[0][0])
    );
}

export async function update(num, text) {
  // const originData = tweets.find((tweet) => tweet.num === num);
  // originData.text = text;
  // return originData;
  return db
    .execute("UPDATE tweet SET text=? WHERE num=?", [text, num])
    .then(() =>
      db
        .execute("SELECT * FROM tweet WHERE num=?", [num])
        .then((newTweet) => newTweet[0][0])
    );
}

export async function remove(num) {
  // tweets = tweets.filter((tweet) => tweet.num !== num);
  // return tweets;
  return db
    .execute("DELETE FROM tweet WHERE num=?", [num])
    .then(() => console.log("Delete Success!"));
}
