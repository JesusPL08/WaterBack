import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        profileId: number;
        salaryId: number;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
    }>;
    findAll(): Promise<({
        logins: {
            user: string;
            id: number;
            password: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        profileId: number;
        salaryId: number;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
    })[]>;
    findOne(id: string): Promise<({
        logins: {
            user: string;
            id: number;
            password: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        profileId: number;
        salaryId: number;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
    }) | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        profileId: number;
        salaryId: number;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        profileId: number;
        salaryId: number;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
    }>;
}
