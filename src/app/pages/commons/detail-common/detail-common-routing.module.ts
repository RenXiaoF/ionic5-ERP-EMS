import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCommonPage } from './detail-common.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCommonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCommonPageRoutingModule {}
