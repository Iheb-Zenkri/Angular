import { Component } from '@angular/core';
import { ProfileDropdowComponent } from "../profile-dropdown/profile-dropdow.component";

@Component({
  selector: 'navbar',
  imports: [ProfileDropdowComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  dropdownVisible = false;
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

}
