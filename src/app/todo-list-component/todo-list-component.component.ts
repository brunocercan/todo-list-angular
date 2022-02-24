import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Tarefa } from './tarefa.interface';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.scss'],
})

export class TodoListComponentComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
