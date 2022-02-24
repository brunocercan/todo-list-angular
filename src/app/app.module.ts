import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { AddTaskComponentComponent } from './add-task-component/add-task-component.component';
import { ListTaskComponentComponent } from './list-task-component/list-task-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponentComponent,
    AddTaskComponentComponent,
    ListTaskComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
