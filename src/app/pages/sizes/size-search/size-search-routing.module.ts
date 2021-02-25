import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SizeSearchPage } from './size-search.page';

const routes: Routes = [
  {
    path: '',
    component: SizeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizeSearchPageRoutingModule {}
