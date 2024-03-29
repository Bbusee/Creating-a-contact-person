import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { updateModel } from 'src/rehberModel/updateuserId';
import { UserService } from 'src/rehberservice/userservice';

@Component({
  selector: 'app-adminguncelle',
  templateUrl: './adminguncelle.component.html',
  styleUrls: ['./adminguncelle.component.css']
})
export class AdminguncelleComponent implements OnInit {
  adminguncelle:updateModel;
  adminId:string | null=null;

  constructor (private admingüncelleservice:UserService,private yönlendirme:Router,private route:ActivatedRoute){
    this.adminguncelle={
      userName:'',
      userEmail:'',
      newPassword:'',
      currentPassword:''
    }
  }

  adminUserGüncelle(){
    this.route.paramMap.subscribe({
      next:(params)=>{
        this.adminId=params.get('id')
      }
    });
    if(this.adminId){
      this.admingüncelleservice.GetuserId(this.adminId).subscribe((response)=>{
        this.adminguncelle.userEmail=response.userEmail;
        this.adminguncelle.userName=response.userName;
      })
    }
  }
  ngOnInit(): void {
    this.adminUserGüncelle();
  }
  userGuncelle(){
    if(this.adminId){
      this.admingüncelleservice.UpdateuserId(this.adminId,this.adminguncelle).subscribe((response)=>{
        alert('kullanıcı bilgisi değiştirildi')
      })
    }
  }

}
