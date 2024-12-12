import { Component } from '@angular/core';
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";

@Component({
  selector: 'home-page',
  imports: [SearchbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
 
}
