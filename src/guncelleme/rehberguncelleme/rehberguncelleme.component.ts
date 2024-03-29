import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RehberId } from 'src/rehberModel/rehberModel';
import { Rehberservice } from 'src/rehberservice/rehberservice';

@Component({
  selector: 'app-rehberguncelleme',
  templateUrl: './rehberguncelleme.component.html',
  styleUrls: ['./rehberguncelleme.component.css']
})
export class RehberguncellemeComponent implements OnInit  {
 
  rehberguncelle:RehberId;
  rehberid:string | null=null;
  userId:string=''
 
 constructor(private servisguncelle:Rehberservice,private yönlendirme:Router,private route: ActivatedRoute){
  this.rehberguncelle ={
    name:'',
    surname:'',
    email:'',
    phone:''
  }
 }


    rehberGetir(userId:string){
    
      this.route.paramMap.subscribe({
      next:(params)=> {
        this.rehberid = params.get('id');
      }
    });
    if(this.rehberid){
      this.servisguncelle.getRehberId(userId,this.rehberid).subscribe((response)=>{
    this.rehberguncelle = response;
   })   
   }
  }   
    
     
  ngOnInit(): void {
    const userIdFromStorage =localStorage.getItem('userId');
    if(userIdFromStorage !==null){
      this.userId =userIdFromStorage;
      this.rehberGetir(this.userId)
    }
    else{

    }
  }
  guncellerehber()
  {
    if(this.rehberid){
    this.servisguncelle.updateRehberId(this.rehberid,this.rehberguncelle).subscribe((response)=>
    {
      alert('kullanıcı bilgisi değiştirildi') 
    } )
    
    }}
  
  }
   
  


 
  
 


