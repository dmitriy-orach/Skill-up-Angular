import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../interfaces/interfaces';

@Injectable({ providedIn: 'root' })
export class DataService{
    
    public dataOfUsers: Array<IUserData> = [
        {   
            id: 1,
            name: 'User1',
            gender: {
                text:'Male',
            },
            dateOfBirth: '07/05/2000',
            directionOfStudy: {
                text: 'Quality Assurance',
            },
            startDateOfTraining: '07/03/2021',
            endDateOfTraining: '07/05/2021'
        },
        {   
            id: 2,
            name: 'User2',
            gender: {
                text:'Male',
            },
            dateOfBirth: '07/05/2000',
            directionOfStudy: {
                text: 'Quality Assurance',
            },
            startDateOfTraining: '07/03/2021',
            endDateOfTraining: '07/05/2021'
        },
        {   
            id: 3,
            name: 'User3',
            gender: {
                text:'Male',
            },
            dateOfBirth: '07/05/2000',
            directionOfStudy: {
                text: 'Quality Assurance',
            },
            startDateOfTraining: '07/03/2021',
            endDateOfTraining: '07/05/2021'
        },
    ];

    public adding = false;

    getAdding() {
        return this.adding;
    }

    setAdding() {
        return this.adding = !this.adding;
    }

    getDataOfUsers() {
        return this.dataOfUsers;
    }
}