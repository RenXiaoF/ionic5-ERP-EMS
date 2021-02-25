import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCommonModalPage } from './detail-common-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCommonModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCommonModalPageRoutingModule {}
