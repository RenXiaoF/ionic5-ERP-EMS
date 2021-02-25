import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StylenumSearchPage } from './stylenum-search.page';

const routes: Routes = [
  {
    path: '',
    component: StylenumSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylenumSearchPageRoutingModule {}
