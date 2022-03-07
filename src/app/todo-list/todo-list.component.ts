import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Tarefa } from './tarefa.interface';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor() { }

  descricao: string;
  id = 0;
  
  adicionar(){
    this.id +=1;
    const tarefaNova = { id: this.id, descricao: this.descricao };
    this.tarefas.push(tarefaNova);
  }
  
  ngOnInit(): void {
  }

}
