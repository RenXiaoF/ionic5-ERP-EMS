import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailStyleModalPage } from './detail-style-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailStyleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailStyleModalPageRoutingModule {}
