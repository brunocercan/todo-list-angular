import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../todo-list-component/tarefa.interface';

@Component({
  selector: 'app-add-task-component',
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.scss']
})

export class AddTaskComponentComponent{
  
  @Output() aoAdicionar = new EventEmitter<any>();
}
