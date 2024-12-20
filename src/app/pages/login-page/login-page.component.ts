import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [CommonModule],
  styleUrls: ['./login-page.component.css'],
  templateUrl: './login-page.component.html'
})


export class LoginPageComponent {
  constructor(private router: Router){
    this.userType = localStorage.getItem('userType')??"";
    localStorage.removeItem('userType');
  }
  
  active = false ;
  userType : String ;
  handleSignUp = () => {
    this.router.navigate(['/hero']);
  }

  handleSignIn = () => {
    localStorage.setItem('isLoggedIn','true');
    this.router.navigate(['/home']);
  }
}
