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
  newTaskName: string = ''; // Asegúrate de declarar la propiedad newTaskName
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
    const nombreTarea = 'Nombre de la tarea';
    const additionalValue = 'Valor adicional de la tarea';
    this.taskService.addTask(nombreTarea, additionalValue).subscribe(() => {
      // Lógica adicional después de agregar la tarea
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.getTasks(); // Actualiza la lista de tareas después de eliminar una tarea
    });
  }
markTaskAsCompleted(taskId: number): void {
  const additionalValue = 'Valor adicional de la tarea';
  this.taskService.markTaskAsCompleted(taskId, additionalValue).subscribe(() => {
    // Lógica adicional después de marcar la tarea como completada
  });
}

}
