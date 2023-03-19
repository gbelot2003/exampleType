import express, { Request, Response } from "express";

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    await res.status(200).json({ message: 'Is Usable' })
})


router.post("/", (req: Request, res: Response) => {
    if(!req.body.firstName){
        res.status(400).json({ message: 'You need to pass a first name' })
    }
    res.status(200).json({ message: 'User is Created' })
})

export default router