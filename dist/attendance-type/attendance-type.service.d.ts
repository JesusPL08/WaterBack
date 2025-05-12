import { PrismaService } from '../prisma/prisma.service';
import { CreateAttendanceTypeDto } from './dto/create-attendance-type.dto';
import { UpdateAttendanceTypeDto } from './dto/update-attendance-type.dto';
export declare class AttendanceTypeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateAttendanceTypeDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }>;
    update(id: number, data: UpdateAttendanceTypeDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }>;
}
