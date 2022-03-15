import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
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

  index = 0;
  editField: string;

  constructor(private renderer: Renderer2) { }

  changeValue(HTMLElement) {
    HTMLElement.focus();
  }

  deletar(tarefa: Tarefa) {
    this.aoRemover.emit(this.tarefas.splice( this.tarefas.indexOf(tarefa), 1 ));
  }

  setCompleted(HTMLElement, tarefa: Tarefa) {
    tarefa.isCompleted = !tarefa.isCompleted
    console.log(tarefa.isCompleted)
    if(tarefa.isCompleted){
      this.renderer.setStyle(HTMLElement, 'text-decoration', 'line-through')
    } else {
      this.renderer.setStyle(HTMLElement, 'text-decoration', 'none')
    }
  }

  ngOnInit(): void {
  }

}
