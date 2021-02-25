import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyMaterialModule } from './my-material/my-material.module';

import { ModalpagePage } from './pages/department/modalpage/modalpage.page';
import { ModalpagePageModule } from './pages/department/modalpage/modalpage.module';

import { ColormodalPage } from './pages/colors/colormodal/colormodal.page';
import { ColormodalPageModule } from './pages/colors/colormodal/colormodal.module';

import { SecdmodalPage } from './pages/department/secdmodal/secdmodal.page';
import { SecdmodalPageModule } from './pages/department/secdmodal/secdmodal.module';

import { ColorFolderModalPage } from './pages/colors/color-folder-modal/color-folder-modal.page';
import { ColorFolderModalPageModule } from './pages/colors/color-folder-modal/color-folder-modal.module';

import { CommonFolderModalPage } from './pages/commons/common-folder-modal/common-folder-modal.page';
import { CommonFolderModalPageModule } from './pages/commons/common-folder-modal/common-folder-modal.module';

import { DetailCommonModalPageModule } from './pages/commons/detail-common-modal/detail-common-modal.module';
import { DetailCommonModalPage } from './pages/commons/detail-common-modal/detail-common-modal.page';

import { StyleFolderModalPage } from './pages/stylenums/style-folder-modal/style-folder-modal.page';
import { StyleFolderModalPageModule } from './pages/stylenums/style-folder-modal/style-folder-modal.module';

import { DetailStyleModalPage } from './pages/stylenums/detail-style-modal/detail-style-modal.page';
import { DetailStyleModalPageModule } from './pages/stylenums/detail-style-modal/detail-style-modal.module';

import { SizeFolderModalPage } from './pages/sizes/size-folder-modal/size-folder-modal.page';
import { DetailSizeModalPage } from './pages/sizes/detail-size-modal/detail-size-modal.page';
import { SizeFolderModalPageModule } from './pages/sizes/size-folder-modal/size-folder-modal.module';
import { DetailSizeModalPageModule } from './pages/sizes/detail-size-modal/detail-size-modal.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    // 人员
    ModalpagePage, SecdmodalPage,
    // 颜色
    ColormodalPage, ColorFolderModalPage,
    // 通用
    CommonFolderModalPage, DetailCommonModalPage,
    // 款号
    StyleFolderModalPage, DetailStyleModalPage,
    // 尺码
    SizeFolderModalPage, DetailSizeModalPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MyMaterialModule,
    // 人员 staff 的 modal
    ModalpagePageModule,
    // 第二级 编辑 的 modal
    SecdmodalPageModule,

    // 颜色  color 的 modal
    ColormodalPageModule,
    // 颜色 第二级 编辑 的 modal
    ColorFolderModalPageModule,

    // 通用 common 的 modal
    CommonFolderModalPageModule,
    // 通用 detail-common  的 modal
    DetailCommonModalPageModule,

    // 款号  style-folder 的  modal
    StyleFolderModalPageModule,
    // 款号  detail-style  的 modal
    DetailStyleModalPageModule,

    // 尺码 size-folder 的 modal
    SizeFolderModalPageModule,
    // 尺码 detail-size 的 modal
    DetailSizeModalPageModule


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
