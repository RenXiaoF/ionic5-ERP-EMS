import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecdColorPage } from './secd-color.page';

const routes: Routes = [
  {
    path: '',
    component: SecdColorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecdColorPageRoutingModule {}
