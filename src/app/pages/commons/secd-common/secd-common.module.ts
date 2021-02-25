import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecdCommonPageRoutingModule } from './secd-common-routing.module';

import { SecdCommonPage } from './secd-common.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecdCommonPageRoutingModule
  ],
  declarations: [SecdCommonPage]
})
export class SecdCommonPageModule {}
