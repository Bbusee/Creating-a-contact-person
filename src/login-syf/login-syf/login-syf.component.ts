import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  loginGirisModel } from 'src/rehberModel/login-giris';
import { UserService } from 'src/rehberservice/userservice';

@Component({
  selector: 'app-login-syf',
  templateUrl: './login-syf.component.html',
  styleUrls: ['./login-syf.component.css']
})
export class LoginSyfComponent {
girisSyfEkleme:loginGirisModel;

constructor(private loginservice:UserService,private yönlendirme:Router){
  this.girisSyfEkleme={
    userEmail:'',
    userPassword:''
  }
}
girisEkleme(){
  this.loginservice.postuserLogin(this.girisSyfEkleme).subscribe((response)=>{
  this.yönlendirme.navigateByUrl('/goruntule');
  localStorage.setItem('userId',response.userId)

});
  
}
}
