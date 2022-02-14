import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { BookDto } from '../DTO/book.dto';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserDTO } from '../DTO/user.dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isLoggedIn: boolean = false;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  public user :any;
  public books : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private service: UserService, private formBuilder: FormBuilder,private modalService: NgbModal) { }
  validatingForm: FormGroup;


  get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }
  ngOnInit(): void {
    console.log(localStorage.getItem('authToken'))
    if (localStorage.getItem('authToken') !== null)
      this.isLoggedIn = true;
      this.load();
    this.cartService.getBooks()
    .subscribe(res=>{
      this.books = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
  }
  load() {
    this.service.getUser().subscribe((data) => {
      this.user = data;
      console.log(data)
    }
    );
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  onSubmit(): void {
    // Process checkout data here
    this.books = this.cartService.removeAllCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  checkoutCart(books: BookDto[]){
    this.cartService.checkoutCart(books);
    this.emptycart();
  }
  closeResult = '';
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}