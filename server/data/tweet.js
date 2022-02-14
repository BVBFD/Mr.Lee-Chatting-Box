import Mongoose from "mongoose";
import { useVirtualId } from "../db/database.js";

const tweetsSchema = new Mongoose.Schema(
  {
    num: { type: String, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    url: String,
    text: { type: String, required: true },
  },
  { timestamps: true }
);

useVirtualId(tweetsSchema);

const Tweets = Mongoose.model("Tweets", tweetsSchema);

export async function getAll() {
  // return (
  //   getTweets() //
  //     .find()
  //     // .sort({ num: -1 })
  //     .sort()
  //     .toArray()
  //     .then((tweets) => tweets)
  // );
  return Tweets.find();
}

export async function getAllById(id) {
  // return getTweets() //
  //   .find({ id })
  //   .sort()
  //   .toArray()
  //   .then((tweets) => tweets);
  return Tweets.find({ id });
}

export async function getByMgObjectId(objectId) {
  // return getTweets()
  //   .findOne({ _id: new ObjectId(objectId) })
  //   .then((tweet) => tweet);
  return Tweets.findOne({ dbId: objectId.toString() });
}

export async function create(num, id, name, url, text, createdAt) {
  num = Mongoose.Types.ObjectId().toString();
  const newTweet = {
    num,
    id,
    name,
    url,
    text,
    createdAt,
  };
  // return getTweets()
  //   .insertOne(newTweet)
  //   .then(async (result) => {
  //     const tweet = await getByMgObjectId(result.insertedId);
  //     return tweet;
  //   });
  return Tweets(newTweet).save();
}

export async function update(num, text) {
  // return getTweets() //
  //   .findOneAndUpdate(
  //     { num }, //
  //     { $set: { text } }, //
  //     { returnDocument: "after" } //
  //   ) //
  //   .then((result) => {
  //     return result.value;
  //   });

  return Tweets.findOne({ num }).then((tweet) => {
    tweet.text = text;
    return Tweets(tweet).save();
  });
  // return Tweets.findByIdAndUpdate(num, text, { returnOriginal: false });
}

export async function remove(num) {
  //   return getTweets()
  //     .deleteOne({ num })
  //     .then(async () => {
  //       const tweets = await getAll();
  //       return tweets;
  //     });
  // console.log(num);
  return Tweets.remove({ num: num });
}
