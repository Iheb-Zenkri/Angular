import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent {
  constructor(private router: Router){
    this.initTransition = false ;
  }
  active = false ;
  initTransition = true ;

  handleSignUp = () => {
    this.router.navigate(['/hero']);
  }

  handleSignIn = () => {
    this.router.navigate(['/hero']);
  }
}
