import { Component, EventEmitter, Output } from '@angular/core';
import { Tarefa } from '../todo-list-component/tarefa.interface';

@Component({
  selector: 'app-add-task-component',
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.scss']
})
export class AddTaskComponentComponent{
  
  @Output() aoAdicionar = new EventEmitter<any>();

  descricao: string;
  tarefas: Tarefa[] = [];
  id = 0;
  
  adicionar(){
    this.id +=1;
    const tarefaNova = { id: this.id, descricao: this.descricao };
    this.tarefas.push(tarefaNova);
    this.aoAdicionar.emit(tarefaNova);
  }
}
