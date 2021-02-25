import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonFolderPageRoutingModule } from './common-folder-routing.module';

import { CommonFolderPage } from './common-folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonFolderPageRoutingModule
  ],
  declarations: [CommonFolderPage]
})
export class CommonFolderPageModule {}
