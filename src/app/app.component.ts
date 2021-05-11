import { Component } from '@angular/core';

export interface userData {
  name: string,
  gender: {
    text: string
  },
  dateOfBirth: string,
  directionOfStudy: {
    text: string
  },
  startDateOfTraining: string,
  endDateOfTraining: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skill-up-Angular';
  
  public adding = false

  dataOfUsers: Array<userData> = [
    {
      name: 'User',
      gender: {
        text:'Male',
      },
      dateOfBirth: '07/05/2000',
      directionOfStudy: {
        text: 'Quality Assurance',
      },
      startDateOfTraining: '07/03/2021',
      endDateOfTraining: '07/05/2021'
    },
  ];
}
