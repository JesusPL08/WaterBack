import { PrismaService } from '../prisma/prisma.service';
import { CreateRoutesDayDto } from './dto/create-routes-day.dto';
import { UpdateRoutesDayDto } from './dto/update-routes-day.dto';
export declare class RoutesDayService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateRoutesDayDto): Promise<{
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
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    } | null>;
    update(id: number, data: UpdateRoutesDayDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        routeDay: Date;
    }>;
}
