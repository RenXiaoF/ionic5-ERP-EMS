import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylenumSearchPageRoutingModule } from './stylenum-search-routing.module';

import { StylenumSearchPage } from './stylenum-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylenumSearchPageRoutingModule
  ],
  declarations: [StylenumSearchPage]
})
export class StylenumSearchPageModule {}
