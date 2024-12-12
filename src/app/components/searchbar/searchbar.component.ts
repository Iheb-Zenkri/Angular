import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../services/click-outside.directive';

@Component({
  selector: 'searchbar',
  imports: [FormsModule,CommonModule,ClickOutsideDirective],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
[x: string]: any;

  searchQuery: string = '';

  selctedField : String ='All';
  selctedAmount : String ='All';
  selctedLocation : String ='All';
  selctedTech : String ='All';
  
  fields : String[] = ['All',
      'Medical',
      'Education',
      'Media',
      'Others'
    ] ;
  funds : String[] = ['All',
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $200,000",
    "$200,000 - $1,000,000",
    "Over $1,000,000",
    ];
  locations : String[] = ['All',
      "USA",
      "Europe",
      "Asia",
      "Africa",
      "Remote/Global Projects"
  ] ;
  techs : String[] = ['All',
    "Artificial Intelligence",
    "Blockchain",
    "Cloud Computing",
    "Mobile Applications",
    "Web-Based Platforms"
  ] ;

  onSearch() {
    const query = this.searchQuery.toLowerCase();
  }

  isActiveField = false ;
  isActiveAmount = false ;
  isActiveLocation= false ;
  isActiveTech= false ;
  
}
