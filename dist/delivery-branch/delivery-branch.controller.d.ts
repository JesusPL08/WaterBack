import { DeliveryBranchService } from './delivery-branch.service';
import { CreateDeliveryBranchDto } from './dto/create-delivery-branch.dto';
import { UpdateDeliveryBranchDto } from './dto/update-delivery-branch.dto';
export declare class DeliveryBranchController {
    private readonly deliveryBranchService;
    constructor(deliveryBranchService: DeliveryBranchService);
    create(createDto: CreateDeliveryBranchDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateDto: UpdateDeliveryBranchDto): Promise<{
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
    softDelete(id: string): Promise<{
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
