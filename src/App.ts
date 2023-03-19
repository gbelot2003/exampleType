import { Server } from "./config/Server";
import router from "./routes/register";

const PORT = "3000";

const app = new Server(PORT);

app._app.listen(PORT, (): void => { 
    console.log(`Server running at port ${PORT}`)
})