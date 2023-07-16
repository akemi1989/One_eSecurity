import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { FakeApiService } from './fake-api.service';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//Comento esta parte inyectar FakeApiService en lugar de usar los datos locales. 
//con esto modifico el constructor y los métodos correspondientes en el servicio TaskService
// export class TaskService {
//   private tasks: Task[] = [];
//   private completedTasks: Task[] = [];

//   constructor() {}

//   getTasks(): Observable<Task[]> {
//     return of(this.tasks);
//   }

//   getCompletedTasks(): Observable<Task[]> {
//     console.log("Obteniendo tareas completadas");
//     console.log("Tareas completadas:", this.completedTasks);
//     return of(this.completedTasks);
//   }

//   addTask(taskName: string, value: string): Observable<void> {
//     const newTask: Task = {
//       id: this.generateTaskId(),
//       name: taskName,
//       completed: false,
//       value: value // Asignar el valor proporcionado a la propiedad "value" de la tarea
//     };
//     this.tasks.push(newTask);
//     return of();
//   }

//   deleteTask(taskId: number): Observable<void> {
//     const taskIndex = this.tasks.findIndex(task => task.id === taskId);
//     if (taskIndex !== -1) {
//       this.tasks.splice(taskIndex, 1);
//     }

//     const completedTaskIndex = this.completedTasks.findIndex(task => task.id === taskId);
//     if (completedTaskIndex !== -1) {
//       this.completedTasks.splice(completedTaskIndex, 1);
//     }

//     return of();
//   }

// markTaskAsCompleted(taskId: number, value: string): Observable<void> {
//   console.log("Entrando en markTaskAsCompleted. Task ID: ", taskId);

//   const task = this.tasks.find(t => t.id === taskId);
//   if (task) {
//     task.completed = true;
//     console.log("Tarea marcada como completada con éxito. Task ID: ", taskId);

//     const completedTask: Task = {
//       id: task.id,
//       name: task.name,
//       completed: task.completed,
//       value: value
//     };
//     this.completedTasks.push(completedTask); // Agregar tarea completada a la lista

//   } else {
//     console.error("Error: no se encontró la tarea con el ID: ", taskId);
//   }

//   return of();
// }


//   private generateTaskId(): number {
//     return Math.floor(Math.random() * 1000);
//   }
// }
export class TaskService {
  private tasks: Task[] = [];
  private completedTasks: Task[] = [];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getCompletedTasks(): Observable<Task[]> {
    return of(this.completedTasks);
  }

  addTask(taskName: string, value: string): Observable<void> {
    const newTask: Task = {
      id: this.generateTaskId(),
      name: taskName,
      completed: false,
      value: value
    };
    this.tasks.push(newTask);
    return of();
  }

  deleteTask(taskId: number): Observable<void> {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
    return of();
  }

  markTaskAsCompleted(taskId: number, value: string): Observable<void> {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = true;
      const completedTask: Task = {
        id: task.id,
        name: task.name,
        completed: task.completed,
        value: value
      };
      this.completedTasks.push(completedTask);
    }
    return of();
  }
  
  deleteCompletedTask(taskId: number): Observable<void> {
    const completedTaskIndex = this.completedTasks.findIndex(task => task.id === taskId);
    if (completedTaskIndex !== -1) {
      this.completedTasks.splice(completedTaskIndex, 1);
    }
    return of();
  }

  private generateTaskId(): number {
    return Math.floor(Math.random() * 1000);
  }
}