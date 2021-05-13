import { Component, OnInit, Input } from '@angular/core';
import { IUserData } from '../app.component'

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

}
