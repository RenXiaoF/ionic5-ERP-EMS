import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonSearchPageRoutingModule } from './common-search-routing.module';

import { CommonSearchPage } from './common-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonSearchPageRoutingModule
  ],
  declarations: [CommonSearchPage]
})
export class CommonSearchPageModule {}
