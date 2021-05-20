import { IUserData } from '../interfaces/interfaces';

export let dataOfUsers: Array<IUserData> = [
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

export let adding = false;