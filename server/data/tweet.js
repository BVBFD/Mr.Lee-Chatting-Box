import { getTweets } from "../db/database.js";
import MongoDb from "mongodb";

const ObjectId = MongoDb.ObjectId;

export async function getAll() {
  return (
    getTweets() //
      .find()
      // .sort({ num: -1 })
      .sort()
      .toArray()
      .then((tweets) => tweets)
  );
}

export async function getAllById(id) {
  return getTweets() //
    .find({ id })
    .sort()
    .toArray()
    .then((tweets) => tweets);
}

export async function getByMgObjectId(objectId) {
  return getTweets()
    .findOne({ _id: new ObjectId(objectId) })
    .then((tweet) => tweet);
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
  return getTweets()
    .insertOne(newTweet)
    .then(async (result) => {
      const tweet = await getByMgObjectId(result.insertedId);
      return tweet;
    });
}

export async function update(num, text) {
  return getTweets() //
    .findOneAndUpdate(
      { num }, //
      { $set: { text } }, //
      { returnDocument: "after" } //
    ) //
    .then((result) => {
      return result.value;
    });
}

export async function remove(num) {
  return getTweets()
    .deleteOne({ num })
    .then(async () => {
      const tweets = await getAll();
      return tweets;
    });
}
