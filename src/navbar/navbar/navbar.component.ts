import { Component } from '@angular/core';
import { UserService } from 'src/rehberservice/userservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userservice:UserService ){ }

  logout(){
    this.userservice.logout()
  }
}
