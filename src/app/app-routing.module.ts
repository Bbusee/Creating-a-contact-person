import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmingoruntuleComponent } from 'src/admingoruntule/admingoruntule/admingoruntule.component';
import { AdminguncelleComponent } from 'src/adminguncelle/adminguncelle/adminguncelle.component';
import { RehberGoruntulemeComponent } from 'src/goruntuleme/rehber-goruntuleme/rehber-goruntuleme.component';
import { RehberguncellemeComponent } from 'src/guncelleme/rehberguncelleme/rehberguncelleme.component';
import { KayitsyfComponent } from 'src/kayıt-syf/kayitsyf/kayitsyf.component';
import { LoginSyfComponent } from 'src/login-syf/login-syf/login-syf.component';
import { EkleComponent } from 'src/rehberekle/ekle/ekle.component';

import { AppLayoutComponent } from './layout/app.layout.component';
import { ParolaunutComponent } from 'src/parolaunut/parolaunut.component';
import { ProfilComponent } from 'src/profil/profil/profil.component';
import { GoruntuletableComponent } from 'src/goruntuletable/goruntuletable.component';
// import { ProfilComponent } from 'src/component/profil/profil.component';
const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', component: RehberGoruntulemeComponent },
      {
        path: "adminguncelleme/:id",
        component: AdminguncelleComponent
      },
      {
        path: "adminGoruntule",
        component: AdmingoruntuleComponent
      },{
        path: "goruntule",
        component: RehberGoruntulemeComponent
      },
      { 
        path: "guncelle/:id",
        component: RehberguncellemeComponent
      },
      {
        path: "ekle",
        component: EkleComponent
      },
      {
        path:"parolaunut",
        component:ParolaunutComponent
      },
       {
         path:"profile/:id",
        component:ProfilComponent
      },
      {
         path:"goruntuletable",
         component:GoruntuletableComponent
      },
      {
        path:"rehberkisi",
        component:GoruntuletableComponent
      }
    ]
  },
  
  {
    path:"giris",
    component:LoginSyfComponent
  },
  
  {
    path: "kayit",
    component: KayitsyfComponent
  },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
