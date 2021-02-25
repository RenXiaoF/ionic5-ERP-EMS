import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SizeFolderPage } from './size-folder.page';

const routes: Routes = [
  {
    path: '',
    component: SizeFolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizeFolderPageRoutingModule {}
