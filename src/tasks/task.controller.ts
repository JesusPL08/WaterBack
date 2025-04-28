import {Controller, Delete, Get, Patch, Post, Put} from '@nestjs/common'
import { TaskService } from './task.service';

@Controller({})
export class TaskController {
    taskservice: TaskService;
    // constructor(taskservice:TaskService){}
    constructor(taskservice:TaskService){
        this.taskservice = taskservice;
    }
    @Get('/tasks')
    getAlltasks(){
        return this.taskservice.getTasks()
    }
    @Post('/tasks')
    Createtasks(){
        return "creando tareas"
    }

    @Put('/tasks')
    updatetasks(){
        return "actualizando tareas"
    }
    @Delete('/tasks')
    deletetasks(){
        return "eliminando tareas"
    }
    @Patch('/tasks')
    updateTaskStatus(){
        return "actualizando el estado de la tarea"
    }
}