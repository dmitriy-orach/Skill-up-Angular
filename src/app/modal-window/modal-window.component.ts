import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';
import { IUserData } from '../interfaces/interfaces';
import { CustomValidator } from '../utils/utils';
import { IListItem } from '../interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  constructor(private dataService: DataService){}
  @Input() adding: boolean;
  @Input() isEdit: boolean;
  @Input() editUser: any;

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  
  public dataUserForm: FormGroup;
  public usersData: Array<IUserData>;
  public valueDateStartTraining: Date = new Date();
  public valueDateFinishTraining: Date = new Date();
  public valueDateOfBirth: Date = new Date();
  
  public format: FormatSettings = {
    displayFormat: 'dd/MM/yyyy',
    inputFormat: 'dd/MM/yyyy'
  };

  public genderRoles: Array<IListItem> = [
    { text:  'Male', value: "male"},
    { text:  'Female', value: "female"}
  ];

  public directionsOfStudy: Array<IListItem> = [
    { text:  'Backend', value: "backend"},
    { text:  'Frontend', value: "frontend"},
    { text:  'Design', value: "design"},
    { text:  'Project Management', value: "projectManagement"},
    { text:  'Quality Assurance', value: "qualityAssurance"},
    { text:  'Business Analytic', value: "businessAnalytic"}
  ];

  ngOnInit(): void {
    this.usersData = this.dataService.getDataOfUsers();
    this.createForm();
    this.setValidators();

    if(this.isEdit) {

      this.userNameControl.setValidators([
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.required,
      ]);

      this.dataUserForm.patchValue({
        'name': this.editUser.name,
        'gender': this.editUser.gender,
        'dateOfBirth': new Date(this.editUser.dateOfBirth) ,
        'directionOfStudy': this.editUser.directionOfStudy,
        'endDateOfTraining': new Date(this.editUser.endDateOfTraining),
        'startDateOfTraining': new Date(this.editUser.startDateOfTraining),
      });
    } else {
      
    }
  }

  private createForm(): void {
    this.dataUserForm = new FormGroup({
      name: new FormControl(
        "", 
        [
          Validators.minLength(5),
          Validators.maxLength(15),
          Validators.required,
          CustomValidator.UnrepeatableNameValidatir(this.usersData)
        ]
      ),
      gender: new FormControl(
        null,
        [
          Validators.required,
        ]
      ),
      dateOfBirth : new FormControl(
        "",
        [
          Validators.required,
          CustomValidator.CalendarValidator('startDateOfTraining')
        ]
      ),
      directionOfStudy: new FormControl(
        null,
        [
          Validators.required,
        ]
      ),
      endDateOfTraining: new FormControl(
        "",
        [
          Validators.required,
        ]
      ),
      startDateOfTraining: new FormControl(
        "",
        [
          Validators.required,
          CustomValidator.CalendarValidator('endDateOfTraining')
        ]
      )
    })
  }

  private setValidators(): void {
    this.userDateOfBirthControl.valueChanges.subscribe(() => {
      this.userStartDateOfTrainingControl.updateValueAndValidity({emitEvent: false});
      this.userEndDateOfTrainingControl.updateValueAndValidity({emitEvent: false});
    })

    this.userStartDateOfTrainingControl.valueChanges.subscribe(() => {
      this.userDateOfBirthControl.updateValueAndValidity({emitEvent: false});
      this.userEndDateOfTrainingControl.updateValueAndValidity({emitEvent: false});
    })

    this.userEndDateOfTrainingControl.valueChanges.subscribe(() => {
      this.userStartDateOfTrainingControl.updateValueAndValidity({emitEvent: false});
      this.userDateOfBirthControl.updateValueAndValidity({emitEvent: false});
    })

    const FRONTEND_DIRECTION = 'Frontend';
    const BACKEND_DIRECTION = 'Backend';

    this.userDirectionOfStudyControl.valueChanges.subscribe((value: {text: string}) => {
      if(value.text == FRONTEND_DIRECTION || value.text == BACKEND_DIRECTION) {
        this.userEndDateOfTrainingControl.clearValidators();
      } else {
        this.userEndDateOfTrainingControl.setValidators([Validators.required]);
      }
      this.userEndDateOfTrainingControl.updateValueAndValidity();
    })
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

  public submit(): void {

    if(this.isEdit) {
      this.usersData.map((user: any) => {
        if(user.id === this.editUser.id) {
          this.usersData[this.editUser.id - 1] = this.dataUserForm.value;
        }
      })

      // console.log(this.usersData.length);

      this.dataUserForm.value.dateOfBirth = new DatePipe('en-US').transform(this.dataUserForm.value.dateOfBirth, 'dd/MM/yyyy');
      this.dataUserForm.value.startDateOfTraining = new DatePipe('en-US').transform(this.dataUserForm.value.startDateOfTraining, 'dd/MM/yyyy');
      this.dataUserForm.value.endDateOfTraining = new DatePipe('en-US').transform(this.dataUserForm.value.endDateOfTraining, 'dd/MM/yyyy');

      this.onCancel();
      
    } else {
      if (this.dataUserForm.invalid) {
        this.userNameControl.markAsTouched();
        this.userGenderControl.markAsTouched();
        this.userDateOfBirthControl.markAsTouched();
        this.userDirectionOfStudyControl.markAsTouched();
        this.userStartDateOfTrainingControl.markAsTouched();
        this.userEndDateOfTrainingControl.markAsTouched();
        return;
      }
  
      this.dataUserForm.value.dateOfBirth = new DatePipe('en-US').transform(this.dataUserForm.value.dateOfBirth, 'dd/MM/yyyy');
      this.dataUserForm.value.startDateOfTraining = new DatePipe('en-US').transform(this.dataUserForm.value.startDateOfTraining, 'dd/MM/yyyy');
      this.dataUserForm.value.endDateOfTraining = new DatePipe('en-US').transform(this.dataUserForm.value.endDateOfTraining, 'dd/MM/yyyy');
  
      this.dataUserForm.value.id = this.usersData.length + 1
      this.usersData.push(this.dataUserForm.value);
      this.onCancel();
    }
  }

  public onCancel(): void {
    this.cancel.emit();
  }

}