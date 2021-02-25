import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSizePageRoutingModule } from './detail-size-routing.module';

import { DetailSizePage } from './detail-size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSizePageRoutingModule
  ],
  declarations: [DetailSizePage]
})
export class DetailSizePageModule {}
