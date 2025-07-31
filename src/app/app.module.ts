import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    TasksModule,
  ]
})
export class AppModule { }
