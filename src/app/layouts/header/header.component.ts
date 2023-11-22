import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public getCurrentUserName: any;

  ngOnInit(): void {
    this.getCurrentUserName = localStorage.getItem("username") ? localStorage.getItem("username") : 'User'
  }

}
