import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'projeto_todolist';
  tarefas: any[] = [];

  // adicionar($event){
  //   this.tarefas.push($event);
  // }
  
}
