import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSizeModalPageRoutingModule } from './detail-size-modal-routing.module';

import { DetailSizeModalPage } from './detail-size-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSizeModalPageRoutingModule
  ],
  declarations: [DetailSizeModalPage]
})
export class DetailSizeModalPageModule {}
