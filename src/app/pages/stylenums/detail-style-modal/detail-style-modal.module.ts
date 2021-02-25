import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailStyleModalPageRoutingModule } from './detail-style-modal-routing.module';

import { DetailStyleModalPage } from './detail-style-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailStyleModalPageRoutingModule
  ],
  declarations: [DetailStyleModalPage]
})
export class DetailStyleModalPageModule {}
