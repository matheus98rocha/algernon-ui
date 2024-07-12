import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }
  @Post()
  createUser(@Body() request: CreateUserRequest) {
    return this.userService.createUser(request);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Delete(':userID')
  deleteUser(@Param() params: { userID: string }) {
    const userId = parseInt(params.userID, 10);
    return this.userService.deleteUser(userId);
  }
}
