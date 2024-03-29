import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { UserService } from 'src/rehberservice/userservice';

@Component({
    selector: 'app-topbar',
    styleUrls: ['./app.topbar.component.css'],
    templateUrl: './app.topbar.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppTopBarComponent implements OnInit {
    date!: Date;
    items!: MenuItem[];
    userId?:string |null;
    name:string='';

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private userService:UserService) { }
    ngOnInit(): void {
    this.getID();
    }

    getID(){
        this.userId=this.userService.GetDataFromLocal();
    if(this.userId) this.GetName(this.userId);
        
    }
    GetName(id:string){
        this.userService.GetuserId(id).subscribe((response)=>{
            this.name=response.userName
        })
    }


}
