import express, { Application, Request, Response } from "express";
import router from "../routes/register";
import bodyParser from "body-parser";
import cors from "cors"

export class Server {

    public _app: Application
    private _port: string

    constructor(port: string) {
        this._port = port
        this._app = express()
        this.middlewares()
        this.routers()
    }

    private middlewares() {
        this._app.use(bodyParser.json())
        this._app.use(bodyParser.urlencoded({ extended: false }))
        this._app.use(cors())
        this.listen()
    }

    private routers() {
        this._app.use(router)
    }

    private listen() {
        this._app.listen(this._port, () => {
            console.log(`Servidor corriendo en puerto ${this._port}`)
        })
    }
}