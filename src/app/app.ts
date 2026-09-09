import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[],
  templateUrl: './app.html',
   styleUrl: './app.css',
})
export class App {
  count=signal(0);
  title=signal('tp-angular');
  increment(){
    this.count.update(v => v + 1);
  }
}
