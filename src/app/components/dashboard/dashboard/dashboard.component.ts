import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UsersService) {
  }

  public getUserDetails: any;


  ngOnInit() {
    this.getUserDetails = this.userService.getStoredUserData();
  }


  delteUser(id: number): void {
    this.userService.deleteUserById(id);
    location.reload();
  }


}
