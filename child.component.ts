import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() messageToParent = new EventEmitter();

  sendMessageToParent(): void {
    this.messageToParent.emit('Hello from Child');
  }
}

