import { AppComponent } from '../app.component';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Tarefa } from '../todo-list-component/tarefa.interface';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.scss'],
})

export class TodoListComponentComponent{

  tarefas: Tarefa[] = [];

  constructor() { }

  @Output() aoAdicionar = new EventEmitter<any>();

  descricao: string;
  id = 0;
  
  adicionar(){
    this.id +=1;
    const tarefaNova = { id: this.id, descricao: this.descricao };
    this.tarefas.push(tarefaNova);
    this.aoAdicionar.emit(tarefaNova);
  }



  ngOnInit(): void {
  }

}
