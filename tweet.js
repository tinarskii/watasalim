import "dotenv/config";
import axios from "axios";
import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi({
  appKey:       process.env.API_KEY,
  appSecret:    process.env.API_KEY_SECRET,
  accessToken:  process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const { data }  = await axios.get("https://watasalim.vercel.app/api/quotes/random");
const tweet = await twitterClient.v1.tweet(data.quote.body);
await twitterClient.v1.reply(data.quote.url, tweet.id_str);
