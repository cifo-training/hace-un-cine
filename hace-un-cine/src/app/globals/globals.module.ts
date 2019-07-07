import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHomeComponent } from './my-home/my-home.component';
import { RouterModule } from '@angular/router';
import { MyComponentsModule } from '../my-components/my-components.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [MyHomeComponent, HeaderComponent],
  imports: [
    CommonModule,RouterModule,MyComponentsModule
  ],
  exports: [MyHomeComponent, HeaderComponent]
})
export class GlobalsModule { }
