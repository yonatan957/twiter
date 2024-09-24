import exp, { Request, Response, Router } from 'express'
const router:Router = exp.Router()

//query params: ?title=x&date=
router.get('/search', async (req:Request, res:Response):Promise<void>=> {
    try {
        res.status(200).json({
            error:true,
            massage: "sucsses",
            data:null
        })
    } catch (error:any) {
        res.status(400).json({
            error:true,
            massage: error.massage,
            data:null
        })
    }
})

//get all posts
router.get('/', async (req:Request, res:Response):Promise<void>=> {
    try {
        res.status(200).json({
            error:true,
            massage: "sucsses",
            data:null
        })
    } catch (error:any) {
        res.status(400).json({
            error:true,
            massage: error.massage,
            data:null
        })
    }
})

//get post by id
router.get('/:id', async (req:Request, res:Response):Promise<void>=> {
    try {
        res.status(200).json({
            error:true,
            massage: "sucsses",
            data:null
        })
    } catch (error:any) {
        res.status(400).json({
            error:true,
            massage: error.massage,
            data:null
        })
    }
})

// post a post
router.post('/', async (req:Request, res:Response):Promise<void>=> {
    try {
        res.status(200).json({
            error:true,
            massage: "sucsses",
            data:null
        })
    } catch (error:any) {
        res.status(400).json({
            error:true,
            massage: error.massage,
            data:null
        })
    }
})


export default router