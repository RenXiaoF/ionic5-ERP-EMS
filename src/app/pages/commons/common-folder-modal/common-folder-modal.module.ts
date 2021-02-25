import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonFolderModalPageRoutingModule } from './common-folder-modal-routing.module';

import { CommonFolderModalPage } from './common-folder-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonFolderModalPageRoutingModule
  ],
  declarations: [CommonFolderModalPage]
})
export class CommonFolderModalPageModule {}
