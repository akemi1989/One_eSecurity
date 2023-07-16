import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Output() taskCompleted = new EventEmitter<Task>();
  newTaskName: string = '';
  newTaskInputValue: string = '';
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(taskName: string) {
    const nameTask = 'Nombre de la tarea: ' + taskName;
    const additionalValue = 'Valor adicional de la tarea';
    this.taskService.addTask(nameTask, additionalValue).subscribe(() => {
      this.newTaskInputValue = nameTask;
      this.newTaskName = '';
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.getTasks();
    });
  }

  markTaskAsCompleted(taskId: number): void {
    const additionalValue = 'Valor adicional de la tarea';
    this.taskService.markTaskAsCompleted(taskId, additionalValue).subscribe(() => {
      // Lógica adicional después de marcar la tarea como completada
    });
  }
}