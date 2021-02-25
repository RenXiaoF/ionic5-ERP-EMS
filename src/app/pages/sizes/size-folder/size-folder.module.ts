import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SizeFolderPageRoutingModule } from './size-folder-routing.module';

import { SizeFolderPage } from './size-folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SizeFolderPageRoutingModule
  ],
  declarations: [SizeFolderPage]
})
export class SizeFolderPageModule {}
