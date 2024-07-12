import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserRequest } from './dto/create-user.request';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UpdateUserRequest } from './dto/update-user.request';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) { }

  private readonly userSelect = {
    id: true,
    email: true,
  };

  async createUser(data: CreateUserRequest): Promise<Partial<User>> {
    try {
      const user = await this.prismaService.user.create({
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 10),
        },
        select: this.userSelect,
      });
      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new UnprocessableEntityException('Email already exists.');
      }
      throw error;
    }
  }

  async getUsers(): Promise<Partial<User>[]> {
    const users = await this.prismaService.user.findMany({
      select: this.userSelect,
    });
    return users;
  }

  async getUserById(userId: number): Promise<Partial<User>> {
    try {
      const user = await this.prismaService.user.findFirst({
        where: { id: userId },
        select: this.userSelect,
      });
      if (!user) {
        throw new UnprocessableEntityException(`User with id: ${userId} not found`);
      }
      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new UnprocessableEntityException(`User with id: ${userId} not found`);
      }
      throw error;
    }
  }

  async updateUserById(userId: number, data: UpdateUserRequest): Promise<Partial<User>> {
    try {
      const user = await this.prismaService.user.update({
        where: { id: userId },
        select: this.userSelect,
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 10),
        }
      });
      if (!user) {
        throw new UnprocessableEntityException(`User with id: ${userId} not found`);
      }
      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new UnprocessableEntityException(`User with id: ${userId} not found`);
      }

      if (error.code === 'P2002') {
        throw new UnprocessableEntityException('Email already exists.');
      }
      throw error;
    }
  }


  async deleteUser(userId: number): Promise<string> {
    try {
      await this.prismaService.user.delete({
        where: { id: userId },
      });
      return `User with id: ${userId} deleted successfully`;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new UnprocessableEntityException(`User with id: ${userId} not found`);
      }
      throw error;
    }
  }
}
