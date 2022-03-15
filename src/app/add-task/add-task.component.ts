import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent{

  @Output() aoAdicionar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
