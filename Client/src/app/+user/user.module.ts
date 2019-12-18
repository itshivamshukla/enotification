import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
    declarations: [HomeComponent, AboutUsComponent],
    imports: [
        CommonModule
    ],
    exports: [HomeComponent, AboutUsComponent]
})
export class UserModule { }
