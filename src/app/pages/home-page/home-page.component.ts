import { Component } from '@angular/core';
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";
import { CommonModule } from '@angular/common';
import { ProjectPostComponent } from "../../components/project-post/project-post.component";

@Component({
  selector: 'home-page',
  imports: [SearchbarComponent, CommonModule, ProjectPostComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  projectsList = [
    {
      title: 'Solar Energy Expansion',
      img: 'solarEnergie.jpg', 
      ownerName: 'Alice Johnson',
      ownerImg: 'userPic1.jpg', // Replace with actual image URL
      industry: 'Renewable Energy',
      fundingAmount: 120000,
      location: 'San Francisco, CA',
    },
    {
      title: 'AI-Powered Healthcare App',
      img: 'healthcare.png', // Replace with actual image URL
      ownerName: 'Dr. Mark Spencer',
      ownerImg: 'userPic10.jpg', // Replace with actual image URL
      industry: 'Healthcare Technology',
      fundingAmount: 200000,
      location: 'Austin, TX',
    },
    {
      title: 'Sustainable Fashion Brand',
      img: 'brand.png', 
      ownerName: 'Emily Carter',
      ownerImg: 'userPic6.jpg', // Replace with actual image URL
      industry: 'Fashion',
      fundingAmount: 85000,
      location: 'New York, NY',
    },
    {
      title: 'Next-Gen E-Commerce Platform',
      img: 'ecommerce.jpg', // Replace with actual image URL
      ownerName: 'James Lee',
      ownerImg: 'userPic9.jpg', // Replace with actual image URL
      industry: 'E-Commerce',
      fundingAmount: 150000,
      location: 'Seattle, WA',
    },
  ]
}
