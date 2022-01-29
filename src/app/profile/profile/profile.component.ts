
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private service: UserService, private authService: AuthenticationService) { }

  user: any;

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

  deleteProfile() {
    this.authService.logout();
    this.service.deleteUser(this.user.id).subscribe((data) => {
      console.log(data)
    });
    this.router.navigate(['home']);
  }

}
