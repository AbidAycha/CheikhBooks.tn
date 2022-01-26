import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CheikhBooks.tn';
  isLoggingIn: boolean = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.isLoggingIn
    .subscribe((data: boolean) => {
      this.isLoggingIn = data;
    });
  }
}
