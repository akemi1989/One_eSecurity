import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { of } from 'rxjs';
import { Task } from '../models/task';

describe('TaskService', () => {
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
    taskService = TestBed.inject(TaskService);
  });

  it('should add a new task', () => {
    // Arrange
    const taskName = 'Nueva tarea';
    const taskValue = 'Valor adicional';
    const initialTasks: Task[] = [];

    // Act
    spyOn(taskService, 'getTasks').and.returnValue(of(initialTasks));
    taskService.addTask(taskName, taskValue);

    // Assert
    taskService.getTasks().subscribe((tasks: Task[]) => {
      expect(tasks).toEqual([{ id: 1, name: taskName, completed: false, value: taskValue }]);
    });
  });

  it('should delete a task', () => {
    // Arrange
    const taskId = 1;
    const initialTasks: Task[] = [{ id: taskId, name: 'Tarea existente', completed: false, value: '' }];

    // Act
    spyOn(taskService, 'getTasks').and.returnValue(of(initialTasks));
    taskService.deleteTask(taskId);

    // Assert
    taskService.getTasks().subscribe((tasks: Task[]) => {
      expect(tasks).toEqual([]);
    });
  });

  it('should mark a task as completed', () => {
    // Arrange
    const taskId = 1;
    const value = 'Valor adicional';
    const initialTasks = [{ id: taskId, name: 'Tarea existente', completed: false, value: '' }];
  
    // Act
    spyOn(taskService, 'getTasks').and.returnValue(of(initialTasks));
    spyOn(taskService, 'markTaskAsCompleted').and.returnValue(of());
  
    taskService.markTaskAsCompleted(taskId, value);
  
    // Assert
    taskService.getTasks().subscribe(tasks => {
      const completedTask = tasks.find(task => task.id === taskId);
      expect(completedTask?.completed).toBe(true);
    });
  });
});
