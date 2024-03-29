import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { profil } from 'src/rehberModel/profil';
import { UserService } from 'src/rehberservice/userservice';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'], 
  
})
export class ProfilComponent implements OnInit {
  profilgoruntuleme:profil
profilId:string | null=null;
constructor( private profileservice:UserService,  private route:ActivatedRoute){
  this.profilgoruntuleme={
    userName:'',
    userEmail:'',
    newPassword:'',
    currentPassword:''
}
}
adminUserGüncelle(){
  this.route.paramMap.subscribe({
    next:(params)=>{
      this.profilId=params.get('id')
    }
  });
  if(this.profilId){
    this.profileservice.GetuserId(this.profilId).subscribe((response)=>{
      this.profilgoruntuleme.userEmail=response.userEmail;
      this.profilgoruntuleme.userName=response.userName;
    })
  }
}
ngOnInit(): void {
  this.adminUserGüncelle();
}
profilGuncelle(){
  if(this.profilId){
    this.profileservice.UpdateuserId(this.profilId,this.profilgoruntuleme
      ).subscribe((response)=>{
      alert('kullanıcı bilgisi değiştirildi')
    })
  }
}

}
