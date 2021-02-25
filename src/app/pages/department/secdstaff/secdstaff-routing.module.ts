import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecdstaffPage } from './secdstaff.page';

const routes: Routes = [
  {
    path: '',
    component: SecdstaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecdstaffPageRoutingModule {}
