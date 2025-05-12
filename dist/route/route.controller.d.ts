import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
export declare class RouteController {
    private readonly routeService;
    constructor(routeService: RouteService);
    create(dto: CreateRouteDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        volume: number;
        priority: number;
        deliveryDate: Date;
    }>;
    update(id: string, dto: UpdateRouteDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        branchId: number;
        volume: number;
        priority: number;
        deliveryDate: Date;
    }>;
    softDelete(id: string): Promise<{
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
