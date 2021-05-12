import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';
import { userData } from '../app.component'
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

  public dataUserForm: FormGroup;

  constructor() {}

  @Input() usersData: Array<userData>

  public opened = true;
  public dataSaved = false;
  public valueDateStartTraining: Date = new Date();
  public valueDateFinishTraining: Date = new Date();
  public valueDateOfBirth: Date = new Date();
  public format: FormatSettings = {
    displayFormat: 'dd/MM/yyyy',
    inputFormat: 'dd/MM/yyyy'
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
    this.createForm();
  }

  private createForm(): void {
    this.dataUserForm = new FormGroup({
      name: new FormControl(
        null, 
        [
          Validators.minLength(5),
          Validators.maxLength(15),
          Validators.required,
        ]
      ),
      gender: new FormControl(
        null,
        [
          Validators.required,
        ]
      ),
      dateOfBirth : new FormControl(
        null,
        [
          Validators.required,
        ]
      ),
      directionOfStudy: new FormControl(
        null,
        [
          Validators.required,
        ]
      ),
      endDateOfTraining: new FormControl(
        null,
        [
          Validators.required,
        ]
      ),
      startDateOfTraining: new FormControl(
        null,
        [
          Validators.required,
        ]
      )
    })
    console.log(this.dataUserForm)
  }

  get userNameControl(): AbstractControl {
    return this.dataUserForm.get('name') as AbstractControl;
  }

  get userGenderControl(): AbstractControl {
    return this.dataUserForm.get('gender') as AbstractControl;
  }

  get userDateOfBirthControl(): AbstractControl {
    return this.dataUserForm.get('dateOfBirth') as AbstractControl;
  }

  get userDirectionOfStudyControl(): AbstractControl {
    return this.dataUserForm.get('directionOfStudy') as AbstractControl;
  }

  get userStartDateOfTrainingControl(): AbstractControl {
    return this.dataUserForm.get('startDateOfTraining') as AbstractControl;
  }

  get userEndDateOfTrainingControl(): AbstractControl {
    return this.dataUserForm.get('endDateOfTraining') as AbstractControl;
  }

  submit() {
    // let chosenDateOfBirth = this.userDateOfBirthControl.value
    // let chosenStartDateOfTraining = this.userStartDateOfTrainingControl.value
    // let chosenEndDateOfTraining = this.userEndDateOfTrainingControl.value
    
    if (this.dataUserForm.invalid) {
      this.dataUserForm.markAsTouched();
      this.userNameControl.markAsTouched();
      this.userGenderControl.markAsTouched();
      this.userDateOfBirthControl.markAsTouched();
      this.userDirectionOfStudyControl.markAsTouched();
      this.userStartDateOfTrainingControl.markAsTouched();
      this.userEndDateOfTrainingControl.markAsTouched();
      return;
    }

    // if( (Date.parse(chosenDateOfBirth) >= Date.parse(chosenStartDateOfTraining)) || (Date.parse(chosenDateOfBirth) >= Date.parse(chosenEndDateOfTraining))){
    //   this.userDateOfBirthControl.markAsTouched();
    //   return;
    // }

    // if( Date.parse(chosenStartDateOfTraining) >= Date.parse(chosenEndDateOfTraining) ){
    //   this.userDateOfBirthControl.markAsTouched();
    //   return;
    // }
    
    this.usersData.push(this.dataUserForm.value);
    this.close();
  }

  close() {
    this.opened = false;
  }


}

function CalendarValidator(dateAfter: number | any): ValidatorFn {
  return(control: AbstractControl): ValidationErrors  | null =>{
    const firstDate = Date.parse(control.value);
    const secondDate = Date.parse(dateAfter);
    return (firstDate <= secondDate) ? {invalid: {value: control.value}} : null;
  };
}