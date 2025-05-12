import { PrismaService } from '../prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
export declare class RouteService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateRouteDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        volume: number;
        priority: number;
        deliveryDate: Date;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        volume: number;
        priority: number;
        deliveryDate: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        volume: number;
        priority: number;
        deliveryDate: Date;
    }>;
    update(id: number, data: UpdateRouteDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        volume: number;
        priority: number;
        deliveryDate: Date;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        volume: number;
        priority: number;
        deliveryDate: Date;
    }>;
}
