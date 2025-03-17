"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuserService = void 0;
const common_1 = require("@nestjs/common");
const Pusher = require("pusher");
let PuserService = class PuserService {
    pusher;
    constructor() {
        this.pusher = new Pusher({
            appId: "1959168",
            key: "8f5c051447fdea7fa3fd",
            secret: "ed546801cea3563050b4",
            cluster: "ap1",
            useTLS: true
        });
    }
    async message(channel, event, data) {
        await this.pusher.trigger(channel, event, data);
    }
};
exports.PuserService = PuserService;
exports.PuserService = PuserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PuserService);
//# sourceMappingURL=puser.service.js.map