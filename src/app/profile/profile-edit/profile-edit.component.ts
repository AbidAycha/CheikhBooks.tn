import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  user: any;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.getUser().subscribe((data) => {
      this.user = data;
      console.log(data)
    }
    );
  }

  onSubmit(formulaire: NgForm) {
    console.log(formulaire.value);
    let newuser = formulaire.value;
    newuser = { ...newuser, id: this.user.id };
    this.service.editUser(newuser).subscribe((data) => {
      console.log(data)
      this.user = data;
      this.router.navigate(['profile']);
    }
    );
  }
}
