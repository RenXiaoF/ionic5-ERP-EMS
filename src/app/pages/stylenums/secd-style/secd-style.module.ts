import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecdStylePageRoutingModule } from './secd-style-routing.module';

import { SecdStylePage } from './secd-style.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecdStylePageRoutingModule
  ],
  declarations: [SecdStylePage]
})
export class SecdStylePageModule {}
