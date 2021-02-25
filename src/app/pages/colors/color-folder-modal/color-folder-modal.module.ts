import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorFolderModalPageRoutingModule } from './color-folder-modal-routing.module';

import { ColorFolderModalPage } from './color-folder-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorFolderModalPageRoutingModule
  ],
  declarations: [ColorFolderModalPage]
})
export class ColorFolderModalPageModule {}
