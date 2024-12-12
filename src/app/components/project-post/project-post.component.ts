import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-post',
  imports: [CommonModule],
  templateUrl: './project-post.component.html',
  styleUrl: './project-post.component.css'
})
export class ProjectPostComponent {
  @Input()
  project!: {
    title: string;
    img: string;
    ownerName: string;
    ownerImg: string;
    industry: string;
    fundingAmount: number;
    location: string;
  };

  islicked = false ;
}
