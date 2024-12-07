import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-dropdow',
  imports: [],
  templateUrl: './profile-dropdow.component.html',
  styleUrl: './profile-dropdow.component.css'
})
export class ProfileDropdowComponent {
  @Input() dropdownVisible!: boolean;

  username: String;
  email: String;

  constructor(private router:Router){
    this.username ="Iheb Zenkri";
    this.email ="zenkriiheb@gmail.com";
  }

  displayMessage(message : String){
    /// this function is a zombie function for now, it show 
    /// interaction with user interface without navigate 
    /// to any pages, maybe in the future after developing
    /// intefaces will be developed
    alert(message);
  }
  logout() {
    localStorage.setItem('isLoggedIn','false');
    this.router.navigate(['']);
  }
}
