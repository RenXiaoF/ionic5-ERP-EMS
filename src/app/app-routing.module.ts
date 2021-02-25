import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'folder', pathMatch: 'full' },
  // 部门
  { path: 'folder', loadChildren: () => import('./pages/department/folder/folder.module').then(m => m.FolderPageModule) },
  { path: 'modalpage', loadChildren: () => import('./pages/department/modalpage/modalpage.module').then(m => m.ModalpagePageModule) },
  { path: 'secdstaff', loadChildren: () => import('./pages/department/secdstaff/secdstaff.module').then(m => m.SecdstaffPageModule) },
  {
    path: 'staff/:no1/:name1/:group1/:isChecked1/:is_deleted1',
    loadChildren: () => import('./pages/department/staff/staff.module').then(m => m.StaffPageModule)
  },
  { path: 'secdmodal', loadChildren: () => import('./pages/department/secdmodal/secdmodal.module').then(m => m.SecdmodalPageModule) },
  {
    path: 'department-search',
    loadChildren: () => import('./pages/department/department-search/department-search.module').then(m => m.DepartmentSearchPageModule)
  },

  // 颜色
  {
    path: 'color-folder',
    loadChildren: () => import('./pages/colors/color-folder/color-folder.module').then(m => m.ColorFolderPageModule)
  },
  {
    path: 'color-folder-modal',
    loadChildren: () => import('./pages/colors/color-folder-modal/color-folder-modal.module').then(m => m.ColorFolderModalPageModule)
  },
  { path: 'secd-color', loadChildren: () => import('./pages/colors/secd-color/secd-color.module').then(m => m.SecdColorPageModule) },
  {
    path: 'color/:no1/:name1/:group1/:isChecked1/:is_deleted1',
    loadChildren: () => import('./pages/colors/color/color.module').then(m => m.ColorPageModule)
  },
  { path: 'colormodal', loadChildren: () => import('./pages/colors/colormodal/colormodal.module').then(m => m.ColormodalPageModule) },
  { path: 'color-search', loadChildren: () => import('./pages/colors/search/search.module').then(m => m.SearchPageModule) },


  // 通用
  {
    path: 'common-folder',
    loadChildren: () => import('./pages/commons/common-folder/common-folder.module').then(m => m.CommonFolderPageModule)
  },
  {
    path: 'common-folder-modal',
    loadChildren: () => import('./pages/commons/common-folder-modal/common-folder-modal.module').then(m => m.CommonFolderModalPageModule)
  },
  { path: 'secd-common', loadChildren: () => import('./pages/commons/secd-common/secd-common.module').then(m => m.SecdCommonPageModule) },
  {
    path: 'detail-common/:no1/:name1/:group1/:isChecked1/:is_deleted1',
    loadChildren: () => import('./pages/commons/detail-common/detail-common.module').then(m => m.DetailCommonPageModule)
  },
  {
    path: 'detail-common-modal',
    loadChildren: () => import('./pages/commons/detail-common-modal/detail-common-modal.module').then(m => m.DetailCommonModalPageModule)
  },
  {
    path: 'common-search',
    loadChildren: () => import('./pages/commons/common-search/common-search.module').then(m => m.CommonSearchPageModule)
  },
  // 款号
  {
    path: 'style-folder',
    loadChildren: () => import('./pages/stylenums/style-folder/style-folder.module').then(m => m.StyleFolderPageModule)
  },
  {
    path: 'style-folder-modal',
    loadChildren: () => import('./pages/stylenums/style-folder-modal/style-folder-modal.module').then(m => m.StyleFolderModalPageModule)
  },
  { path: 'secd-style', loadChildren: () => import('./pages/stylenums/secd-style/secd-style.module').then(m => m.SecdStylePageModule) },
  {
    path: 'detail-style/:no1/:name1/:group1/:isChecked1/:is_deleted1',
    loadChildren: () => import('./pages/stylenums/detail-style/detail-style.module').then(m => m.DetailStylePageModule)
  },
  {
    path: 'detail-style-modal',
    loadChildren: () => import('./pages/stylenums/detail-style-modal/detail-style-modal.module').then(m => m.DetailStyleModalPageModule)
  },
  {
    path: 'stylenum-search',
    loadChildren: () => import('./pages/stylenums/stylenum-search/stylenum-search.module').then(m => m.StylenumSearchPageModule)
  },

  // 尺码
  { path: 'size-folder', loadChildren: () => import('./pages/sizes/size-folder/size-folder.module').then(m => m.SizeFolderPageModule) },
  {
    path: 'size-folder-modal',
    loadChildren: () => import('./pages/sizes/size-folder-modal/size-folder-modal.module').then(m => m.SizeFolderModalPageModule)
  },
  { path: 'secd-size', loadChildren: () => import('./pages/sizes/secd-size/secd-size.module').then(m => m.SecdSizePageModule) },
  {
    path: 'detail-size/:no1/:name1/:group1/:isChecked1/:is_deleted1',
    loadChildren: () => import('./pages/sizes/detail-size/detail-size.module').then(m => m.DetailSizePageModule)
  },
  {
    path: 'detail-size-modal',
    loadChildren: () => import('./pages/sizes/detail-size-modal/detail-size-modal.module').then(m => m.DetailSizeModalPageModule)
  },
  {
    path: 'size-search',
    loadChildren: () => import('./pages/sizes/size-search/size-search.module').then(m => m.SizeSearchPageModule)
  },

  // 测试
  {
    path: 'test-datetime',
    loadChildren: () => import('./pages/tests/test-datetime/test-datetime.module').then( m => m.TestDatetimePageModule)
  },











];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
