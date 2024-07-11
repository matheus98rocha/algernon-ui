import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { CreateUserRequest } from './dto/create-user.request';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) { }

  async createUser(data: CreateUserRequest): Promise<Partial<User>> {
    try {

      const user = await this.prismaService.user.create({
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 10)
        },
        select: {
          email: true,
          id: true
        }
      })
      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new UnprocessableEntityException('Email already exists.')
      }
      throw error
    }

  }
}
