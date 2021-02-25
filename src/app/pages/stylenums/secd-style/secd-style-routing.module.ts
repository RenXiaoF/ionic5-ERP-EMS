import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecdStylePage } from './secd-style.page';

const routes: Routes = [
  {
    path: '',
    component: SecdStylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecdStylePageRoutingModule {}
