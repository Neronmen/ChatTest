export declare class PuserService {
    private readonly pusher;
    constructor();
    message(channel: string, event: string, data: any): Promise<void>;
}
