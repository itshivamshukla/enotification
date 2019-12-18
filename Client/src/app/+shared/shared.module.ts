import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserAlertComponent } from './user-alert/user-alert.component';
import { AppRoutingModule } from '../app-routing.module';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { ServiceComponent } from './service/service.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, NoticeboardComponent, UserAlertComponent, ServiceComponent, AdminNavbarComponent],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [NavbarComponent, FooterComponent, NoticeboardComponent, UserAlertComponent, ServiceComponent]
})
export class SharedModule { }
