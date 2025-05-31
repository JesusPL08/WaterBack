import { PrismaService } from '../prisma/prisma.service';
import { CreateDeliveryBranchDto } from './dto/create-delivery-branch.dto';
import { UpdateDeliveryBranchDto } from './dto/update-delivery-branch.dto';
export declare class DeliveryBranchService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateDeliveryBranchDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        ticketId: number;
        priority: number;
        status: number;
    }>;
    findAll(): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        ticketId: number;
        priority: number;
        status: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        ticketId: number;
        priority: number;
        status: number;
    } | null>;
    update(id: number, data: UpdateDeliveryBranchDto): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        ticketId: number;
        priority: number;
        status: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        ticketId: number;
        priority: number;
        status: number;
    }>;
}
