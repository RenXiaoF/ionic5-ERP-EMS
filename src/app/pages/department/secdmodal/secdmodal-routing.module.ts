import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecdmodalPage } from './secdmodal.page';

const routes: Routes = [
  {
    path: '',
    component: SecdmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecdmodalPageRoutingModule {}
