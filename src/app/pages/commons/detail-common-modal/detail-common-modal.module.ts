import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCommonModalPageRoutingModule } from './detail-common-modal-routing.module';

import { DetailCommonModalPage } from './detail-common-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCommonModalPageRoutingModule
  ],
  declarations: [DetailCommonModalPage]
})
export class DetailCommonModalPageModule {}
