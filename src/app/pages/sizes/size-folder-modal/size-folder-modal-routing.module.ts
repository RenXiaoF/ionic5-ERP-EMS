import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SizeFolderModalPage } from './size-folder-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SizeFolderModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizeFolderModalPageRoutingModule {}
