import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentSearchPage } from './department-search.page';

const routes: Routes = [
  {
    path: '',
    component: DepartmentSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentSearchPageRoutingModule {}
