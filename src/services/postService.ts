import { getFileData, saveFileData } from "../config/fileDataLayer";
import Post from "../models/postModel";
import newPostDTO from "../DTO/newPostDTO";
export default class PostService {
  public static async createNewPost(newPost: newPostDTO): Promise<boolean> {
    //create new User() object
    const { authorId, content, hashTags, ref } = newPost;
    const post = new Post(authorId, content, hashTags, ref);

    // get the files as an array of objects
    let posts: Post[] = (await getFileData<Post>("posts")) as Post[];

    //push
    if (!posts) posts = [];
    posts.push(post);
    //save the array back to the file
    return await saveFileData("posts", posts);
  }

  public static async getAllPost() {
    const posts: Post[] = (await getFileData<Post>("posts")) as Post[];
    return posts;
  }

  public static async getPostByWord(word:string):Promise<Post[]>{
    const posts: Post[] = await getFileData<Post>("posts") as Post[];
    const selectedPosts = posts.filter((post)=>{
        const words = post.content.split(" ");
        return words.includes(word)
    })
    return selectedPosts
  }
  public static async getPostById(id:string):Promise<Post| void>{
    const posts:Post[] = await getFileData<Post>("posts") as Post[];
    return posts.find((post)=>{
        post.id === id
    })
  }
}
