import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSizePage } from './detail-size.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSizePageRoutingModule {}
