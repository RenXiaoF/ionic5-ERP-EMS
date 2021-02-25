import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestDatetimePageRoutingModule } from './test-datetime-routing.module';

import { TestDatetimePage } from './test-datetime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDatetimePageRoutingModule
  ],
  declarations: [TestDatetimePage]
})
export class TestDatetimePageModule {}
