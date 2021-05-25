import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

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

    public static UnrepeatableNameValidatir(names: Array<string>): ValidatorFn {
        return(control: AbstractControl): ValidationErrors | any => {
            if(control.parent) {
                return names.includes(control.value) ? {Repeated: true}: null;
            }
        }
    }
}