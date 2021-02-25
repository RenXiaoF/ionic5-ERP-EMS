import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDatetimePage } from './test-datetime.page';

const routes: Routes = [
  {
    path: '',
    component: TestDatetimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestDatetimePageRoutingModule {}
