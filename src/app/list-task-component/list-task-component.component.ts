import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../todo-list-component/tarefa.interface';

@Component({
  selector: 'app-list-task-component',
  templateUrl: './list-task-component.component.html',
  styleUrls: ['./list-task-component.component.scss']
})
export class ListTaskComponentComponent implements OnInit {

  @Input() tarefas: Tarefa[] = [];
  @Output() aoSalvar = new EventEmitter<any>();
  isEditing: boolean = false;
  index = 0;
  editField: string;

  descricao: string;
  id = 0;



  constructor() { }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.tarefas[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }


  deletarTarefa(tarefa){
    this.index = this.tarefas.indexOf(tarefa)
    this.tarefas.splice(this.index, 1);
    // console.log(this.index);
  }

  ngOnInit(): void {
  }

}
