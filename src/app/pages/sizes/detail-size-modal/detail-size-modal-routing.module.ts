import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSizeModalPage } from './detail-size-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSizeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSizeModalPageRoutingModule {}
