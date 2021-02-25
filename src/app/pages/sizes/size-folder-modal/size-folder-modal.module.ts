import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SizeFolderModalPageRoutingModule } from './size-folder-modal-routing.module';

import { SizeFolderModalPage } from './size-folder-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SizeFolderModalPageRoutingModule
  ],
  declarations: [SizeFolderModalPage]
})
export class SizeFolderModalPageModule {}
