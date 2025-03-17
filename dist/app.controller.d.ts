import { PuserService } from './puser.service';
export declare class AppController {
    protected readonly puserService: PuserService;
    constructor(puserService: PuserService);
    chat(username: string, message: string): Promise<void>;
}
