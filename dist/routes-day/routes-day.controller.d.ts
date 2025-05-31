import { RoutesDayService } from './routes-day.service';
import { CreateRoutesDayDto } from './dto/create-routes-day.dto';
import { UpdateRoutesDayDto } from './dto/update-routes-day.dto';
export declare class RoutesDayController {
    private readonly routesDayService;
    constructor(routesDayService: RoutesDayService);
    create(createDto: CreateRoutesDayDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    } | null>;
    update(id: string, updateDto: UpdateRoutesDayDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    }>;
    softDelete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    }>;
}
