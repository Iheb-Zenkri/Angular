import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-tile',
  imports: [],
  templateUrl: './user-tile.component.html',
  styleUrl: './user-tile.component.css'
})
export class UserTileComponent {
  @Input()
  user!: {
    name:String,
    img:String,
    nbSubscribers:Number
  }

}
