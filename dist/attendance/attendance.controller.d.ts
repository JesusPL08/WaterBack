import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(dto: CreateAttendanceDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        attendanceTypeId: number;
        workedHours: number;
        paid: boolean;
        notes: string;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        attendanceTypeId: number;
        workedHours: number;
        paid: boolean;
        notes: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        attendanceTypeId: number;
        workedHours: number;
        paid: boolean;
        notes: string;
    }>;
    update(id: string, dto: UpdateAttendanceDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        attendanceTypeId: number;
        workedHours: number;
        paid: boolean;
        notes: string;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        date: Date;
        attendanceTypeId: number;
        workedHours: number;
        paid: boolean;
        notes: string;
    }>;
}
