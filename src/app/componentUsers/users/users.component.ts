import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../intrerface/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(value => this.users = value)
  }

}
