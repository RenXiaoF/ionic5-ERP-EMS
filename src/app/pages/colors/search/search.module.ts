import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { PagesModule } from '../../pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    // PagesModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
