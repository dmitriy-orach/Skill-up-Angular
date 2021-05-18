import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { IUserData } from '../interfaces/interfaces';

export class CustomValidator {

    public static CalendarValidator(dateAfter: string): ValidatorFn {
        return(control: AbstractControl): ValidationErrors | any => {
            if(control.parent) {
                const firstDate = Date.parse(control.value);
                const secondDate = Date.parse(control.parent.get(dateAfter)?.value);
                return (firstDate >= secondDate) ? {dateIsLessThanAcceptable: true} : null;
            } else {
                return null;
            }
        };
    }

    public static UnrepeatableNameValidatir(users: Array<IUserData>): ValidatorFn {
        return(control: AbstractControl): ValidationErrors | any => {
            if(control.parent) {
                return users.map(dataOfUser => dataOfUser.name).includes(control.value) ? {Repeated: true}: null;
            }
        }
    }
}