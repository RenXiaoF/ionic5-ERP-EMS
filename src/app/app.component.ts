import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;

  public appPages = [
    {
      title: '部门档案',
      url: '/folder',
      icon: 'mail'
    },
    {
      title: '通用档案',
      url: '/common-folder',
      icon: 'paper-plane'
    },
    {
      title: '款号档案',
      url: '/style-folder',
      icon: 'heart'
    },
    {
      title: '尺码组档案',
      url: '/size-folder',
      icon: 'archive'
    },
    {
      title: '颜色档案',
      url: '/color-folder',
      icon: 'trash'
    },
    {
      title: '测试datetime',
      url: '/test-datetime',
      icon: 'trash'
    }
  ];
  public selectedindex = 0;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,

  ) {
    this.initializeApp();
  
  }
 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

 


  /** 路由跳转 */
  onGotoDatial(){
    this.router.navigate(['color','白色']);
  }

}
