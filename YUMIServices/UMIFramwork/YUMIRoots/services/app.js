"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../UMIFramwork/app");
const server = new app_1.App();
server.listen(8000);
server.getPath("/gg", "hello world", (data) => {
    console.log(data);
});
