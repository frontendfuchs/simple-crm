export class User {
    id = '';
    firstName = '';
    lastName = '';
    email = '';
    birthDate: Date | null = null;
    street = '';
    zipCode = 0;
    city = '';

    constructor(obj?: any){
        this.id = obj ? obj.id ?? '' : '';
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.email = obj ? obj.email: '';
        this.birthDate = obj ? obj.birthDate: null;
        this.street = obj ? obj.street: '';
        this.zipCode = obj ? obj.zipCode: 0;
        this.city = obj ? obj.city: '';
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}