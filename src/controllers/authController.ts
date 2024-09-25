import exp, { Router, Request, Response } from 'express';
const router:Router = exp.Router();


router.post('/login', async (req:Request, res:Response):Promise<void>=> {
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

//protected rout
router.post('/logout', async (req:Request, res:Response):Promise<void>=> {
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