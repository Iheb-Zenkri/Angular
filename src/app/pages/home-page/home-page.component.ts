import { Component } from '@angular/core';
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";
import { CommonModule } from '@angular/common';
import { ProjectPostComponent } from "../../components/project-post/project-post.component";
import { MessageItemComponent } from "../../components/messages-dropdown/message-item/message-item.component";
import { UserTileComponent } from "../../components/user-tile/user-tile.component";

@Component({
  selector: 'home-page',
  imports: [SearchbarComponent, CommonModule, ProjectPostComponent, UserTileComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  projectsList = [
    {
      title: 'AI-Powered Healthcare App',
      img: 'healthcare.png', // Replace with actual image URL
      ownerName: 'Dr. Mark Spencer',
      ownerImg: 'userPic10.jpg', // Replace with actual image URL
      industry: 'Healthcare Technology',
      fundingAmount: 200000,
      location: 'Austin, TX',
      date: '12 Dec 2:00 PM'
    },
    {
      title: 'Sustainable Fashion Brand',
      img: 'brand.png', 
      ownerName: 'Emily Carter',
      ownerImg: 'userPic6.jpg', // Replace with actual image URL
      industry: 'Fashion',
      fundingAmount: 85000,
      location: 'New York, NY',
      date: '12 Dec 2:00 PM'
    },
    {
      title: 'Next-Gen E-Commerce Platform',
      img: 'ecommerce.jpg', // Replace with actual image URL
      ownerName: 'James Lee',
      ownerImg: 'userPic9.jpg', // Replace with actual image URL
      industry: 'E-Commerce',
      fundingAmount: 150000,
      location: 'Seattle, WA',
      date: '12 Dec 2:00 PM'
    },
    {
      title: 'Solar Energy Expansion',
      img: 'solarEnergie.jpg', 
      ownerName: 'Alice Johnson',
      ownerImg: 'userPic1.jpg', // Replace with actual image URL
      industry: 'Renewable Energy',
      fundingAmount: 120000,
      location: 'San Francisco, CA',
      date: '12 Dec 2:00 PM'
    },
    {
      title: 'AI-Powered Healthcare App',
      img: 'healthcare.png', // Replace with actual image URL
      ownerName: 'Dr. Mark Spencer',
      ownerImg: 'userPic10.jpg', // Replace with actual image URL
      industry: 'Healthcare Technology',
      fundingAmount: 200000,
      location: 'Austin, TX',
      date: '12 Dec 2:00 PM'
    },
    {
      title: 'Sustainable Fashion Brand',
      img: 'brand.png', 
      ownerName: 'Emily Carter',
      ownerImg: 'userPic6.jpg', // Replace with actual image URL
      industry: 'Fashion',
      fundingAmount: 85000,
      location: 'New York, NY',
      date: '12 Dec 2:00 PM'
    },
  ]

followers: { name: string; img: string; nbSubscribers: number }[] = [
  { name: "Alice Smith", img: "userPic1.jpg", nbSubscribers: 150 },
  { name: "Bob Johnson", img: "userPic4.jpg", nbSubscribers: 200 },
  { name: "Charlie Brown", img: "userPic2.jpg", nbSubscribers: 180 },
  { name: "Diana Williams", img: "userPic8.jpg", nbSubscribers: 220 },
];

popular: { name: string; img: string; nbSubscribers: number }[] = [
  { name: "Eve Miller", img: "userPic6.jpg", nbSubscribers: 1500 },
  { name: "Frank Taylor", img: "userPic9.jpg", nbSubscribers: 2300 },
  { name: "Grace Anderson", img: "userPic10.jpg", nbSubscribers: 3200 },
  { name: "Henry Moore", img: "userPic3.jpg", nbSubscribers: 4100 },
  { name: "Ivy Clark", img: "userPic5.jpg", nbSubscribers: 5200 },
  { name: "Jack Lewis", img: "userPic6.jpg", nbSubscribers: 6700 },
  { name: "Karen Walker", img: "userPic7.jpg", nbSubscribers: 8900 },
  { name: "Leo Harris", img: "userPic9.jpg", nbSubscribers: 9400 },
  { name: "Mona Young", img: "userPic8.jpg", nbSubscribers: 10500 },
  { name: "Nina King", img: "userPic2.jpg", nbSubscribers: 12000 },
];


}
