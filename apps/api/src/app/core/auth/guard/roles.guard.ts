import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorator/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const match = this.matchRoles(roles, user.roles);

    if (!match) {
      throw new UnauthorizedException();
    }

    return true;
  }

  matchRoles(roles: string[], userRoles: string[]): boolean {
    let match = true;
    roles.forEach((role) => {
      const find = userRoles.find(
        (el) => el.toLocaleUpperCase() === role.toLocaleUpperCase()
      );
      if (!find) {
        match = false;
      }
    });
    return match;
  }
}
