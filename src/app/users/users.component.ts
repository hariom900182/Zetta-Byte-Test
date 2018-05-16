import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {
  public users=null;
  constructor(private userService: UserService) { }

  ngOnInit() {
     this.getusers();
    
    //console.log(this.users);
  }
  getusers()
  {
    return this.userService.getUsers().subscribe(users => {
         this.users = users as any[]
         
    })
  }
}
