import express, { Request, Response } from "express";

const router = express.Router()

router.get("/", (req: Request, res: Response): void => {
    res.status(200).json({message: 'Is Usable'})
})


router.post("/", (req: Request, res: Response, next: Function): void => {
    if(!req.body.firstName) {
        res.status(400).json('you need to pass first name')
    }
    res.status(200).json({message: 'User is Created'})
})

export default router