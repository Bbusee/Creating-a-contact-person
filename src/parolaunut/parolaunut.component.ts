import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { parolaunut } from 'src/rehberModel/parolaunut';
import { UserService } from 'src/rehberservice/userservice';

@Component({
  selector: 'app-parolaunut',
  templateUrl: './parolaunut.component.html',
  styleUrls: ['./parolaunut.component.css']
})
export class ParolaunutComponent {
 

  constructor(private parolaservice:UserService, private yönlendirme:Router){

  }
  

}
