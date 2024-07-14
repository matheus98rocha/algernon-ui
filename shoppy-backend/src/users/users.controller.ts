import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { parseAndValidateId } from 'src/utils/parseAndValidateId';
import { UpdateUserRequest } from './dto/update-user.request';
import { JwrAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { TokenPayload } from 'src/auth/interfaces/token-payload.interface';

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

  @Get('by-id/:userID')
  getUserById(@Param() params: { userID: string }) {
    const userId = parseAndValidateId(params.userID);
    return this.userService.getUserById(userId);
  }

  @Patch('by-id/:userID')
  updateUser(@Param() params: { userID: string }, @Body() request: UpdateUserRequest) {
    const userId = parseAndValidateId(params.userID);
    return this.userService.updateUserById(userId, request);
  }

  @Delete('by-id/:userID')
  deleteUser(@Param() params: { userID: string }) {
    const userId = parseAndValidateId(params.userID);
    return this.userService.deleteUser(userId);
  }

  @Get('me')
  @UseGuards(JwrAuthGuard)
  getCurrentUser(@CurrentUser() user: TokenPayload) {
    console.log("aqui", user)
    return user;
  }
}
