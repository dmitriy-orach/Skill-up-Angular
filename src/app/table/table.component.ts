import { Component, Input } from '@angular/core';
import { IUserData } from '../interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() usersData: Array<IUserData>;

}
