import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-item',
  imports: [CommonModule],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent {
  @Input() image!: string;
  @Input() owner!: string;
  @Input() content!: string;
  @Input() time!: string;
  @Input() unread!: boolean;

  displayMessage(){
    /// this function is a zombie function for now, it show 
    /// interaction with user interface without navigate 
    /// to any pages, maybe in the future after developing
    /// intefaces will be developed
    alert(this.owner.toUpperCase( )+' : '+this.content);
  }
}
