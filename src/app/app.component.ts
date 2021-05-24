import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Skill-up-Angular';

  public adding: boolean = false;
  public isEdit: boolean = false;
  public editUser: any;

  public handleClick() {
    this.adding = true;
    this.isEdit = false;
  }

  public cancelHandler() {
    this.adding = false;
    this.isEdit = false;
  }

  public editHandler(elem: any) {
    this.isEdit = true;
    this.adding = true;
    this.editUser = elem;
  }

}
