import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffPage } from './staff.page';
import { ModalpagePage } from '../modalpage/modalpage.page';

const routes: Routes = [
  { path: '', component: StaffPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffPageRoutingModule { }
