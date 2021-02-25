import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecdCommonPage } from './secd-common.page';

const routes: Routes = [
  {
    path: '',
    component: SecdCommonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecdCommonPageRoutingModule {}
