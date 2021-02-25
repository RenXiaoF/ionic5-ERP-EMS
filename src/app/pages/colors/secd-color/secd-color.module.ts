import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecdColorPageRoutingModule } from './secd-color-routing.module';

import { SecdColorPage } from './secd-color.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecdColorPageRoutingModule
  ],
  declarations: [SecdColorPage]
})
export class SecdColorPageModule {}
