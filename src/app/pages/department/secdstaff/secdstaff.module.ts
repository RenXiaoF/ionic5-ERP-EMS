import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecdstaffPageRoutingModule } from './secdstaff-routing.module';

import { SecdstaffPage } from './secdstaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecdstaffPageRoutingModule
  ],
  declarations: [SecdstaffPage]
})
export class SecdstaffPageModule {}
