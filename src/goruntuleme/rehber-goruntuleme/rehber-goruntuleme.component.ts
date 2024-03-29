import { Component, OnInit } from '@angular/core';
import { rehberAll } from 'src/rehberModel/rehberAll.model';
import { Rehberservice } from 'src/rehberservice/rehberservice';import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-rehber-goruntuleme',
  templateUrl: './rehber-goruntuleme.component.html',
  styleUrls: ['./rehber-goruntuleme.component.css'],
  providers:[ConfirmationService, MessageService]
})
export class RehberGoruntulemeComponent implements OnInit  {
  rehbergoruntuleme:rehberAll[]=[];
  userId:string='';
  
  constructor(private RehberService:Rehberservice,private confirmationService: ConfirmationService, private messageService: MessageService){

  }
  
ngOnInit() {

const userIdFromStorage =localStorage.getItem('userId');
if (userIdFromStorage !==null){
this.userId =userIdFromStorage;
this.getRehber(this.userId)

}else{

}
}
getRehber(userId:string){
  this.RehberService.getRehberUserId(userId).subscribe((response)=>
  {
    this.rehbergoruntuleme=response;
  })
 
}
deleteRehber(silId:string){
  this.RehberService.deleteRehberId(silId).subscribe((response)=>
  {
    this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Kullanıcı başarıyla silindi' });
    // alert('silmek istediğinize emin misiniz!');
    this.getRehber(this.userId)
  })
  
}
confirm(event: Event,id:string) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Devam Etmek İstediğinize Emin Misiniz?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.deleteRehber(id)
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
  });
}
}

  

 
  

  
  
  
 
