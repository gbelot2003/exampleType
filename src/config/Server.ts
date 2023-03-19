import express, { Application, Request, Response } from "express";
import router from "../routes/register";
const bp = require("body-parser")
import cors from  "cors"

export class Server {

    public _app: Application
    private _port: string

    constructor(port: string){
        this._app = express()
        this.middlewares
        this.routers
        this._port = port
    }

    private middlewares() {
        // body parse
        this._app.use(bp.urlencoded({ extended: false }))
        this._app.use(bp.json())
        //CORS
        this._app.use(cors())
    }

    private routers () {
        const router = express.Router()

        router.get("/", (req: Request, res: Response): void => {
            res.status(200).json({message: 'Is Usable'})
        })
        
    }

}