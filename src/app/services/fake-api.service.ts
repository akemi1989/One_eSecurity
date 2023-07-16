import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private tasks: Task[] = [];
  private completedTasks: Task[] = [];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getCompletedTasks(): Observable<Task[]> {
    return of(this.completedTasks);
  }

  addTask(task: Task): Observable<void> {
    this.tasks.push(task);
    return of();
  }

  deleteTask(taskId: number): Observable<void> {
    const completedTaskIndex = this.completedTasks.findIndex(task => task.id === taskId);
    if (completedTaskIndex !== -1) {
      this.completedTasks.splice(completedTaskIndex, 1);
    }
  
    return of();
  }

  markTaskAsCompleted(task: Task): Observable<void> {
    task.completed = true;
    this.completedTasks.push(task);
    return of();
  }
}