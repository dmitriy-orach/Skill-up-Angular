import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';

interface listItem {
  text: string;
  value: string;
}

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  dataUserForm: FormGroup;

  constructor() {
    this._createForm();
  }

  private _createForm() {
    this.dataUserForm = new FormGroup({

    })
  }

  public opened = true;
  public dataSaved = false;
  public close() {
    this.opened = false;
  }
  public open() {
    this.opened = true;
  }
  public submit() {
      this.dataSaved = true;
      // this.close();
      console.log(this.dataSaved)
  }
  public valueDateStartTraining: Date = new Date();
  public valueDateFinishTraining: Date = new Date();
  public valueDateOfBirth: Date = new Date();
  public format: FormatSettings = {
    displayFormat: 'dd/MM/yyyy',
    inputFormat: 'dd/MM/yy'
  };
  public genderRoles: Array<listItem> = [
    { text:  'Male', value: "male"},
    { text:  'Female', value: "female"}
  ]
  public directionsOfStudy: Array<listItem> = [
    { text:  'Backend', value: "backend"},
    { text:  'Frontend', value: "frontend"},
    { text:  'Design', value: "design"},
    { text:  'Project Management', value: "projectManagement"},
    { text:  'Quality Assurance', value: "qualityAssurance"},
    { text:  'Business Analytic', value: "businessAnalytic"}
  ];

  ngOnInit(): void {
  }

}
