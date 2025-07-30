import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { type NewTaskData } from "./new-task.model";
import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  title: string = '';
  summary: string = '';
  dueDate: string = '';
  // title = signal<string>('');
  // summary = signal<string>('');
  // dueDate = signal<string>('');
  private tasksService = inject(TasksService)

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, this.userId)
    this.close.emit()
  }
}
