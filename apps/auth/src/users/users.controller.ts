import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/creat-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  //构造函数注入
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
