import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCommonPageRoutingModule } from './detail-common-routing.module';

import { DetailCommonPage } from './detail-common.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCommonPageRoutingModule
  ],
  declarations: [DetailCommonPage]
})
export class DetailCommonPageModule {}
