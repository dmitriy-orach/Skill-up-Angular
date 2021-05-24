import { IUserData } from '../interfaces/interfaces';

export class DataService{
    
    public dataOfUsers: Array<IUserData> = [
        {   
            id: 1,
            name: 'User1',
            gender: {
                text:'Male',
            },
            dateOfBirth: '2000/05/07',
            directionOfStudy: {
                text: 'Quality Assurance',
            },
            startDateOfTraining: '2021/07/03',
            endDateOfTraining: '2021/07/05'
        },
        {   
            id: 2,
            name: 'User2',
            gender: {
                text:'Male',
            },
            dateOfBirth: '2000/07/05',
            directionOfStudy: {
                text: 'Quality Assurance',
            },
            startDateOfTraining: '2021/07/03',
            endDateOfTraining: '2021/07/05'
        },
        {   
            id: 3,
            name: 'User3',
            gender: {
                text:'Male',
            },
            dateOfBirth: '2000/07/05',
            directionOfStudy: {
                text: 'Quality Assurance',
            },
            startDateOfTraining: '2021/07/03',
            endDateOfTraining: '2021/07/05'
        },
    ];

    getDataOfUsers() {
        return this.dataOfUsers;
    }

    addUser(data:any) {
        this.dataOfUsers.push({...data, id: this.dataOfUsers.length + 1})
    }

    editUser(id:number , data: any) {
        const userIndex = this.dataOfUsers.findIndex((user) => user.id === id);
        this.dataOfUsers[userIndex] = {...this.dataOfUsers[userIndex], ...data};
    }

    getNames() {
        return this.dataOfUsers.map(user => user.name);
    }
}