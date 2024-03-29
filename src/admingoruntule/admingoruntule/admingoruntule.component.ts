import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { getuserIdModel } from 'src/rehberModel/getuserId';
import { UserService } from 'src/rehberservice/userservice';

@Component({
  selector: 'app-admingoruntule',
  templateUrl: './admingoruntule.component.html',
  styleUrls: ['./admingoruntule.component.css'],
  providers:[ConfirmationService, MessageService]
})
export class AdmingoruntuleComponent implements OnInit{

  admingoruntule:getuserIdModel[]=[]
constructor (private admingoruntuleservice:UserService,private yönlendirme:Router,private confirmationService: ConfirmationService, private messageService: MessageService){

}
ngOnInit(): void {
  this.adminGoruntule()
}
adminGoruntule(){
  this.admingoruntuleservice.GetuserAll().subscribe((response)=>{
    this.admingoruntule= response
  })
}
delete(id:string){
  this.admingoruntuleservice.DeleteuserId(id).subscribe((response)=>{
    this.adminGoruntule()
  })
}

confirm(event: Event,id:string) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id)
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
  });
}
}
