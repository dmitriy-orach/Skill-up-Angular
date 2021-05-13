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

    // public static UnrepeatableNameValidatir(): ValidatorFn {
    //     return(control: AbstractControl): ValidationErrors | any => {
    //         let users:  
    //         users.forEach(user => {
    //             return (user.name == control.value) ? {nameIsRepet: true} : null
    //         });
    //     }
    // }
}