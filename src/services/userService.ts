import newUserDTO from '../DTO/newUserDTO';
import fs from 'fs/promises'
import User from '../models/userModel';
import { getFileData, saveFileData } from '../config/fileDataLayer';
export default class userService{
    public static async createNewUser(newUser: newUserDTO):Promise<boolean>{
        //create new User() object
        const {userName, password, email, birthday, avatarUrl} = newUser
        const user = new User(userName, password, email, birthday, avatarUrl)
        
        // get the files as an array of objects
        let users:User[] = await getFileData<User>('users') as User[]

        //push
        if(!users) users = []
        users.push(user)
        //save the array back to the file 
        return await saveFileData('users', users)        
    }
}
