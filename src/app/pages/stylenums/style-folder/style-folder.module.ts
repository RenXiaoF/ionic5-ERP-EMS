import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StyleFolderPageRoutingModule } from './style-folder-routing.module';

import { StyleFolderPage } from './style-folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StyleFolderPageRoutingModule
  ],
  declarations: [StyleFolderPage]
})
export class StyleFolderPageModule {}
