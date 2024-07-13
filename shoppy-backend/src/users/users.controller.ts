import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { parseAndValidateId } from 'src/utils/parseAndValidateId';
import { UpdateUserRequest } from './dto/update-user.request';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Post()
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() request: CreateUserRequest) {
    return this.userService.createUser(request);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':userID')
  getUserById(@Param() params: { userID: string }) {
    const userId = parseAndValidateId(params.userID);
    return this.userService.getUserById(userId);
  }

  @Patch(':userID')
  updateUser(@Param() params: { userID: string }, @Body() request: UpdateUserRequest) {
    const userId = parseAndValidateId(params.userID);
    return this.userService.updateUserById(userId, request);
  }

  @Delete(':userID')
  deleteUser(@Param() params: { userID: string }) {
    const userId = parseAndValidateId(params.userID);
    return this.userService.deleteUser(userId);
  }
  
}
