import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColormodalPageRoutingModule } from './colormodal-routing.module';

import { ColormodalPage } from './colormodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColormodalPageRoutingModule
  ],
  declarations: [ColormodalPage]
})
export class ColormodalPageModule {}
