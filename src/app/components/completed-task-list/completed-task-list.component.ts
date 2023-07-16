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
    this.taskService.getCompletedTasks().subscribe(tasks => {
      console.log("Tareas completadas:", tasks);
      this.completedTasks = tasks;
    });
  }

  getCompletedTasks(): void {
    this.taskService.getCompletedTasks().subscribe(tasks => {
      console.log("encimatask", tasks)
      console.log("ei", this.completedTasks)
      this.completedTasks = tasks;
      console.log("ddebajo", this.completedTasks)
      console.log("ddebajo task", tasks)
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.getCompletedTasks();
    });
  }
}