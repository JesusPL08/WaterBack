import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint para iniciar sesión
  @Post('login')
  async login(@Body() credentials: { user: string; password: string }) {
    return this.authService.login(credentials);
  }

  // Endpoint para verificar el token JWT y obtener datos del usuario autenticado
@UseGuards(JwtAuthGuard)
@Get('profile')
async getProfile(@Request() req) {
  const userId = req.user.userId;
  return this.authService.getUserWithProfileAndArea(userId);
}

}
