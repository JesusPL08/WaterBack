import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKeySuperSecreta', // Debe ser igual al JwtModule
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      name: payload.name,
      profileId: payload.profileId,
      salaryId: payload.salaryId,
    };
  }
}
