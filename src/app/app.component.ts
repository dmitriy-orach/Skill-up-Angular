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

  constructor() {
    this.dataOfUsers = dataOfUsers;
    this.adding = adding;
  }

  @Input() dataOfUsers: Array<IUserData>
  @Input() adding;
}
