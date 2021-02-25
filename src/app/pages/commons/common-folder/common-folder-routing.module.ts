import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonFolderPage } from './common-folder.page';

const routes: Routes = [
  {
    path: '',
    component: CommonFolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonFolderPageRoutingModule {}
