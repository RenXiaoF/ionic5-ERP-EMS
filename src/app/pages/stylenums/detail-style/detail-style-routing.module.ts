import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailStylePage } from './detail-style.page';

const routes: Routes = [
  {
    path: '',
    component: DetailStylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailStylePageRoutingModule {}
