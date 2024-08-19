import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS_CLIENT') private userClient: ClientProxy) {}
    findAll() {
        return this.userClient.send('users.findAll', {});
    }
}
