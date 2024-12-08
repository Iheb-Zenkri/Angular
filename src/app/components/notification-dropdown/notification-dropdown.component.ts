import { Component, Input } from '@angular/core';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'notification-dropdown',
  imports: [NotificationItemComponent ,CommonModule],
  templateUrl: './notification-dropdown.component.html',
  styleUrl: './notification-dropdown.component.css'
})
export class NotificationDropdownComponent {
  @Input() dropdownVisibleNotification!: boolean;

  notifications = [
    {
      image: 'userPic2.jpg',
      owner: 'Jane Smith',
      content: 'commented on your post.',
      date: 'Friday 3:18 PM',
      time: '2 hours ago',
      type: 'comment',
      unread: true
    },
    {
      image: 'userPic9.jpg',
      owner: 'Alex Brown',
      content: 'started following you',
      date: 'Friday 2:32 PM',
      time: '2 hours ago',
      type: 'follow',
      unread: true
    },
    {
      image: 'userPic6.jpg',
      owner: 'Emily Davis',
      content: 'liked your post ',
      source: 'Project X',
      date: 'Friday 8:04 AM',
      time: '9 hours ago',
      type: 'like',
      unread: false,
    },
    {
      image: 'userPic8.jpg',
      owner: 'Sarah Lee',
      content: 'invited you to',
      source:'Blog design',
      date: '2024-12-02',
      time: '5:10 PM',
      type: 'invite',
      unread: false,
    },
    {
      image: 'userPic10.jpg',
      owner: 'Michael Johnson',
      content: 'shared a new file to',
      source: 'AVL 2.0',
      date: '2024-12-03',
      time: '6:30 PM',
      type: 'share',
      unread: true,
    },
  
  ];
  
  allNotifications(){
     /// this function is a zombie function for now, it show 
    /// interaction with user interface without navigate 
    /// to any pages, maybe in the future after developing
    /// intefaces will be developed
    alert("A L L   N O T I F I C A T I O N S");
  }
}
