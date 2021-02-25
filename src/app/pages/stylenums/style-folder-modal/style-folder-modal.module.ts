import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StyleFolderModalPageRoutingModule } from './style-folder-modal-routing.module';

import { StyleFolderModalPage } from './style-folder-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StyleFolderModalPageRoutingModule
  ],
  declarations: [StyleFolderModalPage]
})
export class StyleFolderModalPageModule {}
