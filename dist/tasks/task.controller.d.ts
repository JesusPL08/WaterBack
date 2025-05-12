import { TaskService } from './task.service';
export declare class TaskController {
    taskservice: TaskService;
    constructor(taskservice: TaskService);
    getAlltasks(): string[];
    Createtasks(): string;
    updatetasks(): string;
    deletetasks(): string;
    updateTaskStatus(): string;
}
