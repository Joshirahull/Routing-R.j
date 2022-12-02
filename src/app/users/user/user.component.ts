import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/model/data';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user : Iuser |undefined;
  public userId : number = 1;
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser(this.userId)
  }

}
