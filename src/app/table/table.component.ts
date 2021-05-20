import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserData } from '../interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() usersData: Array<IUserData>;
  @Input() adding: boolean;

  public removeHandler({dataItem}: any) {
    const user_index = this.usersData.findIndex((user) => {
      return user.id === dataItem.id;
    })
    this.usersData.splice(user_index, 1)
  }

  public editHandler({dataItem}: any) {
    this.adding = true;
    console.log(this.adding);
    console.log(dataItem);
  }
}
