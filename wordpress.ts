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

export type wordpressPost = {
    title: string,
    content: string,
    authorId: number,
    status: PostStatus
    categories: string[] | null,
    tags: string[] | null,
}


export const postToWordpress = async (post: wordpressPost) => {
    // Make a post to WordPress with data, getting the app token from the environment

    const url = config.SITE_URL + '/wp-json/wp/v2/posts';

    const authorization = "Basic " + "MinhAPI:" + process.env.WORDPRESS_APP_PASSWORD;

    return await axios.post(url, post, {
        headers: {
            "Authorization": authorization,
            "content-type": "application/json",
        }
    })
}