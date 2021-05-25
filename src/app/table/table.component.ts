import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserData } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private dataService: DataService){}
  
  @Input() public adding: boolean;
  @Input() public isEdit: boolean;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  
  public usersData: Array<IUserData>;

  ngOnInit(): void {
    this.usersData = this.dataService.getDataOfUsers();
  }

  public removeHandler({dataItem}: any): void {
    const user_index = this.usersData.findIndex((user) => {
      return user.id === dataItem.id;
    })
    this.usersData.splice(user_index, 1);
  }

  public onEdit({dataItem}: any): void {
    this.edit.emit(dataItem);
  }
}
