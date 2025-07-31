import { NgModule } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { CommonModule, DatePipe } from "@angular/common";
import { SharedModule } from "../shared/shared/shared.module";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DatePipe,
  ],
  exports: [TasksComponent]
})
export class TasksModule { }
