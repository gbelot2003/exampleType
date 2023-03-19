"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./config/Server");
const PORT = "3000";
const app = new Server_1.Server(PORT);
app._app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
//# sourceMappingURL=App.js.map