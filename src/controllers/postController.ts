import exp,{Router,Request,Response} from 'express'



const router:Router = exp.Router()

router.get('/', async (req:Request,res:Response):Promise<void> =>{
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

router.post('/', async (req:Request,res:Response):Promise<void> =>{
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

//?title=x&date=23/04/2015
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

//protected rout
router.patch('/like/:id', async (req:Request,res:Response):Promise<void> =>{
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