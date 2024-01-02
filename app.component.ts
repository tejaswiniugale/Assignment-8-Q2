import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
  messageFromChild: string = '';

  handleMessageFromChild(message: string): void {
    this.messageFromChild = message;
  }
}

