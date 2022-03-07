import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../todo-list/tarefa.interface';



@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  @Input() tarefas: Tarefa[] = [];
  @Output() aoRemover = new EventEmitter<any>();
  
  isEditing: boolean = false;
  index = 0;
  editField: string;

  constructor() { }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.tarefas[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  deletar(tarefa: Tarefa) {
    this.aoRemover.emit(this.tarefas.splice( this.tarefas.indexOf(tarefa), 1 ));
  }

  ngOnInit(): void {
  }

}
