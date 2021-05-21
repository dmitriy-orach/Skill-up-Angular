import { Component, Input } from '@angular/core';
import { IUserData } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private dataService: DataService){}
  
  public adding: boolean
  public usersData: Array<IUserData>;

  ngOnInit(): void {
    this.adding = this.dataService.getAdding();
    this.usersData = this.dataService.getDataOfUsers();
  }

  public removeHandler({dataItem}: any) {
    const user_index = this.usersData.findIndex((user) => {
      return user.id === dataItem.id;
    })
    this.usersData.splice(user_index, 1)
  }

  public editHandler({dataItem}: any) {
    this.dataService.setAdding();
    this.adding = this.dataService.getAdding(); 
    console.log(this.dataService.getAdding());
    console.log(dataItem);
  }
}
