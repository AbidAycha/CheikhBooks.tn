import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: UserService) { }

  ngOnInit(): void {
    this.load()
  }

  users: any = [];
  newAttribute: any = {};

  load() {
    console.log("loadingggggggggg")
    this.service.getUsers().subscribe((data) => {
        this.users = data;
      }
      );
  }

  add() {
    this.users.push(this.newAttribute)
    this.newAttribute = {};
  }
  edit(index: number, user: any) {

  }
  delete(index: number, user: any) {
    this.users.splice(index, 1);
  }

}
