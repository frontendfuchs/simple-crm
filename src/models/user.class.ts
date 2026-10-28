export class User {
    firstName = '';
    lastName = '';
    birthDate: Date | null = null;
    street = '';
    zipCode = 0;
    city = '';

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.birthDate = obj ? obj.birthDate: null;
        this.street = obj ? obj.street: '';
        this.zipCode = obj ? obj.zipCode: 0;
        this.city = obj ? obj.city: '';
    }
}