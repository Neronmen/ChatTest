import { Injectable } from '@nestjs/common'
import * as Pusher from 'pusher'

@Injectable()
export class PuserService {
    private readonly pusher: Pusher
    constructor(
    ) {
        this.pusher = new Pusher({
            appId: "1959168",
            key: "8f5c051447fdea7fa3fd",
            secret: "ed546801cea3563050b4",
            cluster: "ap1",
            useTLS: true
        })
    }
    async message(channel: string, event: string, data: any) {
        await this.pusher.trigger(channel, event, data)
    }
}