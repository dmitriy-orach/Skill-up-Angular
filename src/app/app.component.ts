import { Component, Input } from '@angular/core';
import { IUserData } from './interfaces/interfaces';
import { dataOfUsers } from './variables/variables';
import { adding } from './variables/variables'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skill-up-Angular';

  // public adding = adding;

  constructor() {
    this.dataOfUsers = dataOfUsers;
  }

  @Input() dataOfUsers: Array<IUserData>;
  @Input() adding: boolean;

  handleClick() {
    this.adding = !this.adding;
    console.log(this.adding);
  }
}
