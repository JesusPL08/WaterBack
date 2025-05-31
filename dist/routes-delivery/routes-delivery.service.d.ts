import { PrismaService } from '../prisma/prisma.service';
import { CreateRoutesDeliveryDto } from './dto/create-routes-delivery.dto';
import { UpdateRoutesDeliveryDto } from './dto/update-routes-delivery.dto';
export declare class RoutesDeliveryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateRoutesDeliveryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    } | null>;
    update(id: number, data: UpdateRoutesDeliveryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    }>;
}
