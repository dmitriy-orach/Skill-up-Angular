import { Component, OnInit, Input } from '@angular/core';
import { IUserData } from '../interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() usersData: Array<IUserData>

  // EditUserInfo(userData: object, index: number) {
  //   console.log(userData);
  //   console.log(index);
  // }

  // DeleteUserInfo(index: number) {
  //   this.usersData.splice(index, 1)
  // }

}
