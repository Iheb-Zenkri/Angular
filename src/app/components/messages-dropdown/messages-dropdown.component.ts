import { Component, Input } from '@angular/core';
import { MessageItemComponent } from "./message-item/message-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'messages-dropdown',
  imports: [MessageItemComponent,CommonModule],
  templateUrl: './messages-dropdown.component.html',
  styleUrl: './messages-dropdown.component.css'
})
export class MessagesDropdownComponent {
  @Input() dropdownVisibleMessage!: boolean;

  messages = [
    {
      image: 'userPic1.jpg',
      owner: 'John Doe',
      content: 'Hey, are we still meeting later?',
      time: '10:30 AM',
      state: true
    },
    {
      image: 'userPic4.jpg',
      owner: 'Jane Smith',
      content: 'Just sent you the files for review. Can you check this out when you have time?',
      time: '9:45 AM',
      state: true
    },
    {
      image: 'userPic9.jpg',
      owner: 'Alex Brown',
      content: 'Just sent you the files for review. Can you check this out when you have time?',
      time: '8:15 AM',
      state: false
    },
    {
      image: 'userPic2.jpg',
      owner: 'Emily Davis',
      content: 'Lunch plans?',
      time: 'Yesterday',
      state: false
    },
    {
      image: 'userPic5.jpg',
      owner: 'Michael Johnson',
      content: 'Happy Birthday! 🎉',
      time: '2 days ago',
      state: true
    },
    {
      image: 'userPic6.jpg',
      owner: 'Sarah Lee',
      content: 'Let me know your thoughts on the proposal.',
      time: '3 days ago',
      state: false
    }
  ];
  
  allMessages(){
    /// this function is a zombie function for now, it show 
   /// interaction with user interface without navigate 
   /// to any pages, maybe in the future after developing
   /// intefaces will be developed
   alert("A L L   M E S S A G E S");
 }
}
