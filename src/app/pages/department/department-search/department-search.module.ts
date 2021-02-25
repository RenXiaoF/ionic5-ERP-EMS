import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentSearchPageRoutingModule } from './department-search-routing.module';

import { DepartmentSearchPage } from './department-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentSearchPageRoutingModule
  ],
  declarations: [DepartmentSearchPage]
})
export class DepartmentSearchPageModule {}
