import { Client, auth } from "twitter-api-sdk";
import dotenv from "dotenv";

dotenv.config();

async function getClient() {
    console.log(process.env.BEARER_TOKEN)
    const authClient = new auth.OAuth2Bearer(process.env.BEAEAR_TOKEN as string);

    console.log(authClient.getAuthHeader())

    // Pass auth credentials to the library client
    return new Client(authClient);
}

async function main() {
    const twitterClient = await getClient();

    const tweetGenerator = await twitterClient.tweets.sampleStream()

    for await (const tweet of tweetGenerator) {
        console.log(tweet)
    }
}


main()