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

    public static UnrepeatableNameValidatir(names: Array<string>, isEdit?: boolean, controlValue?: string | any): ValidatorFn {
        return(control: AbstractControl): ValidationErrors | any => {
            if(control.parent) {
                if(isEdit){
                    const cloneArrNames = names.map(item => item);
                    if(cloneArrNames.includes(controlValue)) {
                        const index = cloneArrNames.indexOf(controlValue);
                        cloneArrNames[index] = "";
                    }
                    return cloneArrNames.includes(control.value) ? {Repeated: true}: null;
                } else {
                    return names.includes(control.value) ? {Repeated: true}: null;
                }
            }
        }
    }
}