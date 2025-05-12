import { AttendanceTypeService } from './attendance-type.service';
import { CreateAttendanceTypeDto } from './dto/create-attendance-type.dto';
import { UpdateAttendanceTypeDto } from './dto/update-attendance-type.dto';
export declare class AttendanceTypeController {
    private readonly attendanceTypeService;
    constructor(attendanceTypeService: AttendanceTypeService);
    create(dto: CreateAttendanceTypeDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }>;
    update(id: string, dto: UpdateAttendanceTypeDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        name: string;
        paidDay: boolean;
        payMult: number;
    }>;
}
