import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorFolderModalPage } from './color-folder-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ColorFolderModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorFolderModalPageRoutingModule {}
