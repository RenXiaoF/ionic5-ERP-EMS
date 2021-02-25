import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StyleFolderPage } from './style-folder.page';

const routes: Routes = [
  {
    path: '',
    component: StyleFolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleFolderPageRoutingModule {}
