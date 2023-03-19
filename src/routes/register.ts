import express, { Request, Response } from "express";

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    await res.status(200).json({ message: 'Is Usable' })
})


router.post("/", (req: Request, res: Response) => {
    const body = req.body
    if(body.firstName === undefined){
        console.log('is undefined')
        res.status(400).json({ message: 'User is Created' })
    }
    res.status(200).json({ message: 'User is Created' })
})

export default router