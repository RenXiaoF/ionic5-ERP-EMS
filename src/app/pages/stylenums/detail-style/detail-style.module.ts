import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailStylePageRoutingModule } from './detail-style-routing.module';

import { DetailStylePage } from './detail-style.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailStylePageRoutingModule
  ],
  declarations: [DetailStylePage]
})
export class DetailStylePageModule {}
