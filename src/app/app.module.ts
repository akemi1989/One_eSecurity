import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CompletedTaskListComponent } from './components/completed-task-list/completed-task-list.component';
import { TaskService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { FakeApiService } from './services/fake-api.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CompletedTaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService,FakeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }