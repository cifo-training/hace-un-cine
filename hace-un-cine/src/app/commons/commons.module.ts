import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [NavBarComponent, FooterComponent]
})
export class CommonsModule { }
