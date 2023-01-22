import { wordpressPost, postToWordpress, PostStatus } from "./wordpress";
import { AxiosError, AxiosResponse} from "axios";

const post: wordpressPost = {
    title: "Hello World",
    content: "This is a test post through the API",
    author: 3,
    status: PostStatus.PUBLISH,
}

postToWordpress(post).then((res: AxiosResponse) => {
    console.log(res.data);
}).catch((err: AxiosError) => {
    console.log(err);
})