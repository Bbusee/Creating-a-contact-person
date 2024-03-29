import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateModel } from 'src/rehberModel/Createuser';
import { kayitModel } from 'src/rehberModel/kayitModel';
import { UserService } from 'src/rehberservice/userservice';

@Component({
  selector: 'app-kayitsyf',
  templateUrl: './kayitsyf.component.html',
  styleUrls: ['./kayitsyf.component.css']
})
export class KayitsyfComponent {
  kayit!:CreateModel;

  constructor(private kayitservice:UserService ,private yönlendirme:Router){
    this.kayit={
      userName:'',
      userPassword:'',
      userEmail:''
    };
  }
  kayitsyfEkleme(){
    this.kayitservice.postuserCreateuser(this.kayit).subscribe({next:(response)=>{
      this.yönlendirme.navigateByUrl('/goruntule');
      
    },error:(error)=>{
      if(error.status ===400)
      alert('kullanıcı kaydetmekte hata oluştu')
    }});
  }
}
