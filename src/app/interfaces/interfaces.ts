export interface IListItem {
    text: string;
    value: string;
}

export interface IUserData {
    name: string,
    gender: {
        text: string
    },
    dateOfBirth: string,
    directionOfStudy: {
        text: string
    },
    startDateOfTraining: string,
    endDateOfTraining: string
}