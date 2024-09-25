import { getFileData, saveFileData } from '../config/fileDataLayer';
import Post from '../models/postModel';
import newPostDTO from '../DTO/newPostDTO';
export default class postService{
    public static async createNewUser(newUser: newPostDTO):Promise<boolean>{
        //create new User() object
        const {authorId, content, hashTags, ref} = newUser
        const post = new Post(authorId, content, hashTags, ref)
        
        // get the files as an array of objects
        let posts:Post[] = await getFileData<Post>('posts') as Post[]

        //push
        if(!posts) posts = []
        posts.push(post)
        //save the array back to the file 
        return await saveFileData('posts', posts)        
    }
}
