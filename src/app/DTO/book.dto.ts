export class BookDto {
  id: number;

  title: string;

  author: string;

  description: string;

  image: string;

  isValid: Boolean;

  language: string;

  nbrPages: number;

  price: Number;

  type: string;
  constructor() {
    this.id = 0;
    this.title = '';
    this.author = '';
    this.description = '';
    this.image = '';
    this.isValid = false;
    this.language = '';
    this.nbrPages = 0;
    this.price = 0;
    this.type = '';
  }
}
