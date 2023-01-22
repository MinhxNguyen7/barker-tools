import axios from 'axios';
import config from "./config.json";
import dotenv from "dotenv";

dotenv.config()
export enum PostStatus{
    PUBLISH = "publish",
    DRAFT = "draft",
    FUTURE = "future",
    PENDING = "pending",
    PRIVATE = "private"
}

export type WordpressPost = {
    title?: string,
    content: string,
    author?: number,
    status: PostStatus
    categories?: string[],
    tags?: string[],
}

export const getWordpressAuthFromEnv = () => {
    return "Basic " + process.env.WORDPRESS_APP_USERNAME + ":" + process.env.WORDPRESS_APP_PASSWORD;
}


export const postToWordpress = async (post: WordpressPost): Promise<string> => {
    // Make a post to WordPress with data, getting the app token from the environment

    const url = config.SITE_URL + '/wp-json/wp/v2/posts';

    const authorization = getWordpressAuthFromEnv();

    return await axios.post(url, post, {
        headers: {
            "Authorization": authorization,
            "content-type": "application/json",
        }
    })
}

export const getWordpressPost = async (id: number) => {
    // Get a post from WordPress by ID

    const url = config.SITE_URL + '/wp-json/wp/v2/posts/' + id;

    const authorization = getWordpressAuthFromEnv();

    return await axios.get(url, {
        headers: {
            "Authorization": authorization,
            "content-type": "application/json",
        }
    })
}