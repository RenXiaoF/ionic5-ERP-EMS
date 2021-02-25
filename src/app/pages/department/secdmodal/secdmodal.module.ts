import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecdmodalPageRoutingModule } from './secdmodal-routing.module';

import { SecdmodalPage } from './secdmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecdmodalPageRoutingModule
  ],
  declarations: [SecdmodalPage]
})
export class SecdmodalPageModule {}
