import { LoginService } from '../login/login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    createLogin(userId: string, body: {
        user: string;
        password: string;
    }): Promise<{
        user: string;
        id: number;
        password: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    updateLogin(userId: string, body: {
        user?: string;
        password?: string;
    }): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
