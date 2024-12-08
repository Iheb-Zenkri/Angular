import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'notification-item',
  imports: [CommonModule],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.css'
})
export class NotificationItemComponent {
  @Input() image!: string;
  @Input() owner!: string;
  @Input() content!: string;
  @Input() time!: string;
  @Input() date!: string;
  @Input() type!: string;
  @Input() source! :string | undefined;
  @Input() unread!: boolean;

  displayMessage(){
    /// this function is a zombie function for now, it show 
    /// interaction with user interface without navigate 
    /// to any pages, maybe in the future after developing
    /// intefaces will be developed
    alert(this.owner.toUpperCase( )+' : '+this.content+(typeof this.source === 'string' ? this.source:''));
  }
}
