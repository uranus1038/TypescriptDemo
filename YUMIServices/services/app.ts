import {App} from "../UMIFramwork/app";

const server = new App();
server.listen(8000) ; 
server.getPath("/gg" , "hello world" , (data)=>{
    console.log(data) ; 
});