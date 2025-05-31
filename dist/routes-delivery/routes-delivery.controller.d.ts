import { RoutesDeliveryService } from './routes-delivery.service';
import { CreateRoutesDeliveryDto } from './dto/create-routes-delivery.dto';
import { UpdateRoutesDeliveryDto } from './dto/update-routes-delivery.dto';
export declare class RoutesDeliveryController {
    private readonly routesDeliveryService;
    constructor(routesDeliveryService: RoutesDeliveryService);
    create(createDto: CreateRoutesDeliveryDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    } | null>;
    update(id: string, updateDto: UpdateRoutesDeliveryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deliveryBranchId: number;
        routesDayId: number;
    }>;
}
