import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SizeFolderModalPage } from '../size-folder-modal/size-folder-modal.page';

@Component({
  selector: 'app-size-folder',
  templateUrl: './size-folder.page.html',
  styleUrls: ['./size-folder.page.scss'],
})
export class SizeFolderPage implements OnInit {

  title: string; // 标题
  isChecked: any = 0; // 选中的 id
  sizeContent = {}; // 用来接收 单数据 的容器
  sizeName: string; // 二级 分类名
  // 静态例子
  public sizesList = [
    {
      name: '尺码档案',
      children: [
        {
          name: '保罗盖地',
          is_deleted: false,
          children: [
            { name: 'XS' },
            { name: 'S' },
            { name: 'M' },
            { name: 'L' },
            { name: 'XL' },
            { name: 'XXL' },
          ]
        },
        {
          name: '可孚',
          is_deleted: false,
          children: [
            { name: 'XS' },
            { name: 'S' },
            { name: 'M' },
            { name: 'L' },
            { name: 'XL' },
            { name: 'XXL' },
          ]
        },
        {
          name: 'SVL',
          is_deleted: false,
          children: [
            { name: 'XS' },
            { name: 'S' },
            { name: 'M' },
            { name: 'L' },
            { name: 'XL' },
            { name: 'XXL' },
          ]
        },
        {
          name: '玛诗玛丽',
          is_deleted: false,
          children: [
            { name: 'XS' },
            { name: 'S' },
            { name: 'M' },
            { name: 'L' },
            { name: 'XL' },
            { name: 'XXL' },
          ]
        },
        {
          name: '太平鸟',
          is_deleted: false,
          children: [
            { name: 'XS' },
            { name: 'S' },
            { name: 'M' },
            { name: 'L' },
            { name: 'XL' },
            { name: 'XXL' },
          ]
        },
      ]
    },
  ];

  constructor(
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    // 1. 获得数据  后  解析 ==== 尺码
    this.getData();
  }

  /** 被选中的 id */
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
          placeholder: '项目名称'
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
            this.sizesList.push(
              {
                name: '款号档案',
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
            console.log(this.sizesList);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 去下级 */
  onSubordinate() {
    this.router.navigate(['secd-size']);
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
            // 删除
            this.sizesList.forEach(val => {

              val.children.forEach((ele, idx) => {
                console.log('modal关闭后，替换的值：', this.isChecked, idx);
                if (this.isChecked == idx) {
                  console.log('modal关闭后，替换的值：', ele.is_deleted);
                  ele.is_deleted = true;
                }
              });
            }

            );

            console.log('提交成功-Confirm Ok');
            // console.log(this.dataSource.data);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 1. 获得数据  后  解析 ==== 通用 */
  getData() {

    this.sizesList.forEach(val => {
      this.sizeContent = val;
      console.log('获得数据解析-1：', this.sizeContent);
      this.title = val.name;
      if (this.sizeContent) {
        this.sizeContent['children'].forEach((val, idx) => {
          console.log('获得数据解析-2:', val);
          this.sizeName = val.name;
          console.log('获得数据解析-idx:', idx);
          this.isChecked = idx;
        });
      }
    });
  }


  /** 打开模态弹框 */
  async presentModal(name1: string) {
    const modal = await this.modalController.create({
      component: SizeFolderModalPage,
      // 根据 id 传入参数
      componentProps: {

        name: name1,

      }
    });
    // return await modal.present();
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.sizesList.forEach(val => {

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
