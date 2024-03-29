import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getuserIdModel } from 'src/rehberModel/getuserId';
import { UserService } from 'src/rehberservice/userservice';
import { ConfirmationService, MessageService } from 'primeng/api';
import { rehberAll } from 'src/rehberModel/rehberAll.model';
import { Rehberservice } from 'src/rehberservice/rehberservice';
@Component({
  selector: 'app-goruntuletable',
  templateUrl: './goruntuletable.component.html',
  styleUrls: ['./goruntuletable.component.css'], providers: [ConfirmationService, MessageService]
})
export class GoruntuletableComponent implements OnInit{
admintable:rehberAll[]=[]

constructor (private admintablesevice:Rehberservice,private yönlendirme:Router,private confirmationService: ConfirmationService, private messageService: MessageService){

}
ngOnInit(): void {
  this.adminGoruntule()
}
adminGoruntule(){
  this.admintablesevice.getRehberAll().subscribe((response)=>{
    this.admintable= response
  })
}
delete(id:string){
  this.admintablesevice.deleteRehberId(id).subscribe((response)=>{
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

