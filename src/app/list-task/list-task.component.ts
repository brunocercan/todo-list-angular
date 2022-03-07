import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Tarefa } from '../todo-list/tarefa.interface';



@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  @Input() tarefas: Tarefa[] = [];
  @Output() aoRemover = new EventEmitter<any>();

  @ViewChild("tarefaDesc") tarefaDesc: HTMLElement;

  
  isEditing: boolean = false;
  index = 0;
  editField: string;

  constructor() { }

  changeValue(HTMLElement) {
    HTMLElement.focus();
  }

  deletar(tarefa: Tarefa) {
    this.aoRemover.emit(this.tarefas.splice( this.tarefas.indexOf(tarefa), 1 ));
  }

  ngOnInit(): void {
  }

}
