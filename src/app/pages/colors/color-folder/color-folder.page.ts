import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ColorFolderModalPage } from '../color-folder-modal/color-folder-modal.page';

@Component({
  selector: 'app-color-folder',
  templateUrl: './color-folder.page.html',
  styleUrls: ['./color-folder.page.scss'],
})
export class ColorFolderPage implements OnInit {

  public COLOR_DATA = [
    {
      name: '颜色档案',
      children: [
        {
          name: '红色',
          is_deleted: false,
          children: [
            { name: '粉红' },
            { name: '大红' },
          ]
        },
        {
          name: '白色',
          is_deleted: false,
          children: [
            { name: '白色' },
            { name: '本白' },
          ]
        },
        {
          name: '黄色',
          is_deleted: false,
          children: [
            { name: '金黄' },
            { name: '土黄' },
          ]
        },
        {
          name: '玫瑰色',
          is_deleted: false,
          children: [
            { name: '玫瑰粉' },
            { name: '玫瑰金' },
          ]
        },
        {
          name: '黑色',
          is_deleted: false,
          children: [
            { name: '曜石黑' },
            { name: '暗夜黑' },
          ]
        },
      ]
    },
  ];

  // title
  colorFolder: string;
  // 选中的id
  public isChecked: any = 0;
  // 用来接收 单数据 的容器
  public colors = {};
  // 颜色 分组
  colorName: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    // 2. 获得数据  后  解析 ==== 颜色
    this.getColorData();
  }

  /** 选中哪一个： */
  onChecked(i) {
    console.log('选中哪一个：', i);
    this.isChecked = i;
  }

  /** Alert 创建 第一级 */
  async presentAlertPrompt(name1) {
    const alert = await this.alertController.create({
      header: '添加子项目',
      inputs: [
        {
          name: name1,
          type: 'text',
          placeholder: '颜色分组'
        },

      ],
      buttons: [
        {
          text: '取消',
          role: '取消',
          cssClass: 'secondary',
          handler: () => {
            console.log('取消-Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: () => {
            this.COLOR_DATA.push(
              {
                name: '颜色档案',
                children: [
                  {
                    name: name1,
                    is_deleted: false,
                    children: [
                    ]
                  }
                ]
              },
            )
            console.log('提交成功-Confirm Ok', name1);
            console.log(this.COLOR_DATA);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 去下级 */
  onSubordinate() {
    this.router.navigate(['secd-color']);
  }




  /** 删除 */
  async onDeleted() {
    const alert = await this.alertController.create({
      // header: '删除',
      subHeader: '删除',
      message: '还有下级,删除后无法恢复,确定删除？',
      buttons: [
        {
          text: '取消',
          role: '取消',
          cssClass: 'secondary',
          handler: () => {
            console.log('取消-Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: () => {
            this.COLOR_DATA.forEach(val => {

              val.children.forEach((ele, idx) => {
                console.log('删除-1：', this.isChecked, idx);
                if (this.isChecked == idx) {
                  console.log('删除-2：', ele.is_deleted);
                  ele.is_deleted = true;
                }
              });
            });
            console.log('提交成功-Confirm Ok');
            // console.log(this.dataSource.data);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 1. 获得数据  后  解析 ==== 颜色 */
  getColorData() {

    this.COLOR_DATA.forEach(val => {
      this.colors = val;
      console.log('获得数据解析-1：', this.colors);
      this.colorFolder = val.name;
      if (this.colors) {
        this.colors['children'].forEach((val, idx) => {
          console.log('获得数据解析-2:', val);
          this.colorName = val.name;
          console.log('获得数据解析-idx:', idx);
          this.isChecked = idx;
        });
      }
    });
  }


  /** 打开模态弹框 */
  async presentModal(name1: string) {
    const modal = await this.modalController.create({
      component: ColorFolderModalPage,
      // 根据 id 传入参数
      componentProps: {

        name: name1,

      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.COLOR_DATA.forEach(val => {

      val.children.forEach((ele, idx) => {
        console.log('modal关闭后，替换的值：', this.isChecked, idx);
        if (this.isChecked == idx) {
          console.log('modal关闭后，替换的值：', ele.name);
          ele.name = data.name;
        }
      });
    }

    );

  }


}
