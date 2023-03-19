import express, { Application, Request, Response } from "express";
import router from "../routes/register";
import bodyParser from "body-parser";
import cors from "cors"

export class Server {

    public _app: Application
    private _port: string

    constructor(port: string) {
        this._app = express()
        this.middlewares()
        this.routers()
        this._port = port
    }

    middlewares() {
        this._app.use(bodyParser.json())
        this._app.use(bodyParser.urlencoded({ extended: false }))
        this._app.use(cors())
    }

    routers() {
        this._app.use(router)
    }
}