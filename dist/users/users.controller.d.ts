import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    findAll(): Promise<({
        logins: {
            user: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            password: string;
            userId: number;
        }[];
    } & {
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    })[]>;
    findOne(id: string): Promise<({
        logins: {
            user: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            password: string;
            userId: number;
        }[];
    } & {
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }) | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        profileId: number;
        salaryId: number;
        name: string;
        phoneNumber: string;
        rfc: string;
        hiringDate: Date;
        branchId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
}
