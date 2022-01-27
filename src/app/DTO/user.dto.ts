import { BookDto } from "./book.dto";

export enum UserRoleEnum {
    admin = 'admin',
    user = 'user',
}

export class UserDTO {

    id: number;

    firstname: string;

    lastname: string;

    email: string;

    avatar: string;

    birthday: Date;

    phone: number;

    role: UserRoleEnum;

    score: number;

    books: BookDto[];

    constructor() {
        this.id = 0;
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.avatar = 'false';
        this.birthday = new Date();
        this.phone = 0;
        this.score = 0;
        this.role = UserRoleEnum.user;
        this.books = [];
    }
}
