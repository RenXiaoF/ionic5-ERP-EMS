import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonFolderModalPage } from './common-folder-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CommonFolderModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonFolderModalPageRoutingModule {}
