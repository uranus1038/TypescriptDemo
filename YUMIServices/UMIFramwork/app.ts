import express,{Request , Response} from "express";

export class App {
    private app: express.Application = express();
    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    
    public  getPath(path:string , msg:string , callback: (data:any)=> void): void {
        this.app.get(path,(req : Request , res : Response)=>
        {
            const data = { name: 'John Doe', age: 30, email: 'johndoe@example.com' };

            callback(data);
        });
    }
    public listen(port:number): void {
        this.app.listen(port,()=>
        {
            console.log("YUMI::SERVER_START_PORT->"+port) ;
        });
    }
}

