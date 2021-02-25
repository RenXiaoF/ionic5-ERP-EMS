import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecdSizePageRoutingModule } from './secd-size-routing.module';

import { SecdSizePage } from './secd-size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecdSizePageRoutingModule
  ],
  declarations: [SecdSizePage]
})
export class SecdSizePageModule {}
