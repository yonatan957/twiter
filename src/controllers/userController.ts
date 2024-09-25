
import exp,{Router,Request,Response} from 'express'
import userService from '../services/userService'
import newUserDTO from '../DTO/newUserDTO'


const router:Router = exp.Router()


router.post('/register', async (req:Request<any, any, newUserDTO>,res:Response):Promise<void> =>{
    try{
        const result = await userService.createNewUser(req.body)
        if (result){
            res.json({
                err: false,
                message: 'Login Successful',  
                data:undefined 
            })
        }else{
            throw new Error("can't save new user to the file")
        }
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})

//protected rout
router.post('/follow', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})

//?key=value
router.get('/search', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})

//protected rout
router.get('/profile', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})

//protected rout
router.get('/followers', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})

//protected rout
//?type =MINE/ELSE
router.get('/following', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})

router.get('/:id', async (req:Request,res:Response):Promise<void> =>{
    try{
        res.json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })
    }
    catch(arr){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})

export default router