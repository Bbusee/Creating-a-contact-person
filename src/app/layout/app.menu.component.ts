import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { UserService } from 'src/rehberservice/userservice';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService,private userService:UserService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Ana Sayfa ',
                items: [
                    { label: 'Rehber Kişi Listeleme', icon: 'pi pi-fw pi-home', routerLink: ['/rehberkisi'] }
                ]
            },
            {
                label: 'Menü',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Kullanıcı Görüntüle',
                        icon: 'pi pi-fw pi-angle-right',
                        routerLink: ['/goruntule']
                    },
                    {
                        label: 'Kullanıcı Ekle',
                        icon: 'pi pi-fw pi-angle-right',
                        routerLink: ['/ekle']
                    },
                    {
                        label: 'Admin Görüntüle',
                        icon: 'pi pi-fw pi-angle-right',
                        routerLink: ['/adminGoruntule']
                    },
                    {
                        label: 'Kullanıcı Kayıt',
                        icon: 'pi pi-fw pi-angle-right',
                        routerLink: ['/kayit']
                    },


                ]
                },  
                     
                
                
                
           
            {
                label: 'Rehber',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Giriş',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/giris']
                    },
                    {
                        label: 'Çıkış',
                        icon: 'pi pi-fw pi-sign-out',
                        routerLink: ['/giris'],
                        command: () => this.logout() 
                    },

                ]
            },


           
        ];
    }

    logout(){
        this.userService.logout()

    }
}
