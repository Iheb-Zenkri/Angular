import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'pre-login',
  imports: [CommonModule],
  templateUrl: './pre-login.component.html',
  styleUrl: './pre-login.component.css'
})
export class PreLoginComponent {
  isInvestor = false ;

  constructor(private router :Router){}
  submit(){
    localStorage.setItem('userType', this.isInvestor? 'Investor' : 'Entrepreneur')
    this.router.navigate(['\login']);
  }
}
