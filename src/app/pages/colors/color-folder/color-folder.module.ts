import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColorFolderPageRoutingModule } from './color-folder-routing.module';

import { ColorFolderPage } from './color-folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorFolderPageRoutingModule
  ],
  declarations: [ColorFolderPage]
})
export class ColorFolderPageModule {}
