import { Component } from '@angular/core';
import { ProfileDropdowComponent } from "../profile-dropdown/profile-dropdow.component";
import { RouterLink,RouterLinkActive } from '@angular/router';
import { NotificationDropdownComponent } from "../notification-dropdown/notification-dropdown.component";
import { MessagesDropdownComponent } from "../messages-dropdown/messages-dropdown.component";
import { ClickOutsideDirective } from '../../services/click-outside.directive';

@Component({
  selector: 'navbar',
  imports: [ProfileDropdowComponent, 
            RouterLink, 
            RouterLinkActive, 
            NotificationDropdownComponent, 
            MessagesDropdownComponent,
            ClickOutsideDirective
          ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  dropdownVisibleProfile = false;
  dropdownVisibleMessage= false;
  dropdownVisibleNotification = false;

  toggleDropdownProfile() {
    this.dropdownVisibleProfile = !this.dropdownVisibleProfile;
    this.dropdownVisibleMessage = false;
    this.dropdownVisibleNotification = false;
  }

  toggleDropdownMessage() {
    this.dropdownVisibleMessage = !this.dropdownVisibleMessage;
    this.dropdownVisibleProfile = false;
    this.dropdownVisibleNotification = false;
  }

  toggleDropdownNotification() {
    this.dropdownVisibleNotification = !this.dropdownVisibleNotification;
    this.dropdownVisibleProfile = false;
    this.dropdownVisibleMessage = false;
  }
  closeDropdowns(){
    this.dropdownVisibleProfile = false;
    this.dropdownVisibleMessage = false;
    this.dropdownVisibleNotification = false ;
  }
}
