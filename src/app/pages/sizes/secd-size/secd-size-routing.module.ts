import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecdSizePage } from './secd-size.page';

const routes: Routes = [
  {
    path: '',
    component: SecdSizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecdSizePageRoutingModule {}
