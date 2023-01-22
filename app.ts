import { wordpressPost, postToWordpress, PostStatus } from "./wordpress";
import { AxiosError, AxiosResponse} from "axios";

const post: wordpressPost = {
    title: "Hello World",
    content: "This is a test post through the API",
    authorId: 1,
    status: PostStatus.PUBLISH,
    categories: null,
    tags: null
}

postToWordpress(post).then((res: AxiosResponse) => {
    console.log(res.data);
}).catch((err: AxiosError) => {
    console.log(err);
})