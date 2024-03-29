import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RehberGoruntulemeComponent } from 'src/goruntuleme/rehber-goruntuleme/rehber-goruntuleme.component';
import { RehberguncellemeComponent } from 'src/guncelleme/rehberguncelleme/rehberguncelleme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/navbar/navbar/navbar.component';
import { EkleComponent } from 'src/rehberekle/ekle/ekle.component';
import { LoginSyfComponent } from 'src/login-syf/login-syf/login-syf.component'
import { AdminguncelleComponent } from 'src/adminguncelle/adminguncelle/adminguncelle.component';
import { AdmingoruntuleComponent } from 'src/admingoruntule/admingoruntule/admingoruntule.component';
import { KayitsyfComponent } from 'src/kayıt-syf/kayitsyf/kayitsyf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ButtonModule} from 'primeng/button';
import { AppLayoutModule } from './layout/app.layout.module';
import { ParolaunutComponent } from 'src/parolaunut/parolaunut.component';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ProfilComponent } from 'src/profil/profil/profil.component';
import { ConfirmationService } from 'primeng/api/confirmationservice';
import { GoruntuletableComponent } from 'src/goruntuletable/goruntuletable.component';
import {  MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RehberGoruntulemeComponent,
    RehberguncellemeComponent,
    EkleComponent,
    LoginSyfComponent,
    KayitsyfComponent,
    AdminguncelleComponent,
    AdmingoruntuleComponent,
    ParolaunutComponent,
    ProfilComponent,
    GoruntuletableComponent
  
    // AppLayoutComponent
  
  ],
  imports: [
    BrowserModule,
    ButtonModule,AppLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ConfirmPopupModule,
    FormsModule,ToastModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,TableModule
   
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
