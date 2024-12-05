import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'heropage',
  imports: [],
  templateUrl: './heropage.component.html',
  styleUrl: './heropage.component.css'
})
export class HeropageComponent {
  constructor(private router: Router){}

  navigateTo() { 
    this.router.navigate(['/login']);
  }
}
