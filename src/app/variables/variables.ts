import { IUserData } from '../interfaces/interfaces';

export let dataOfUsers: Array<IUserData> = [
    {
        name: 'Users',
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

export let adding = false;