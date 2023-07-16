import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-completed-task-list',
  templateUrl: './completed-task-list.component.html',
  styleUrls: ['./completed-task-list.component.css']
})
export class CompletedTaskListComponent implements OnInit {
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getCompletedTasks();
  }

  getCompletedTasks(): void {
    this.taskService.getCompletedTasks().subscribe(tasks => {
      this.completedTasks = tasks;
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteCompletedTask(taskId).subscribe(() => {
      this.taskService.deleteTask(taskId).subscribe(() => {
        this.getCompletedTasks();
      });
    });
  }
}