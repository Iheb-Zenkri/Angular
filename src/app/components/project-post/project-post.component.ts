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
    date: String;
  };

  fields: string[] = [];

  ngOnChanges(): void {
    if (this.project) {
      this.fields = this.project.industry.split(" ");
    }
  }
  islicked = false ;
}
