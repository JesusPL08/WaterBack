import { Controller, Post, Put, Param, Body } from '@nestjs/common';
import { LoginService } from '../login/login.service';

@Controller('auth/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('register/:userId')
  createLogin(
    @Param('userId') userId: string,
    @Body() body: { user: string; password: string },
  ) {
    return this.loginService.create(+userId, body.user, body.password);
  }

  @Put('update/:userId')
  updateLogin(
    @Param('userId') userId: string,
    @Body() body: { user?: string; password?: string },
  ) {
    return this.loginService.update(+userId, body);
  }
}
