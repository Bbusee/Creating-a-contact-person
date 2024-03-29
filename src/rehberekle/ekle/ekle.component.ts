import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RehberId } from 'src/rehberModel/rehberModel';
import { Rehberservice } from 'src/rehberservice/rehberservice';

@Component({
  selector: 'app-ekle',
  templateUrl: './ekle.component.html',
  styleUrls: ['./ekle.component.css']
})
export class EkleComponent {
rehberekleme:RehberId;
userId:string=''



  constructor(private servisekleme:Rehberservice,private yönlendirme:Router){
    this.rehberekleme={
      name:'',
      surname:'',
      email:'',
      phone:''
  
    }
  }
  ekleRehber(){
const userIdFromStorage=localStorage.getItem('userId');
if(userIdFromStorage !== null){
  this.userId = userIdFromStorage;
  this.servisekleme.postRehberId(this.userId,this.rehberekleme).subscribe((response)=>{


  });
  this.yönlendirme.navigateByUrl('/goruntule');

}
else{

}
}}

