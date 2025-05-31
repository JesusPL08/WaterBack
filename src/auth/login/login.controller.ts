import { Controller, Post, Body, Put } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from '../dto/create-login.dto';
import { UpdateLoginDto } from '../dto/update-login.dto';

@Controller('logins')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Body() data: CreateLoginDto) {
    return this.loginService.create(data);
  }

  @Put()
  async update(@Body() data: UpdateLoginDto) {
    return this.loginService.update(data);
  }
}
