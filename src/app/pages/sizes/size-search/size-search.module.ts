import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SizeSearchPageRoutingModule } from './size-search-routing.module';

import { SizeSearchPage } from './size-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SizeSearchPageRoutingModule
  ],
  declarations: [SizeSearchPage]
})
export class SizeSearchPageModule {}
