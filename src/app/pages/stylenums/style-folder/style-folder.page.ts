import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StyleFolderModalPage } from '../style-folder-modal/style-folder-modal.page';

@Component({
  selector: 'app-style-folder',
  templateUrl: './style-folder.page.html',
  styleUrls: ['./style-folder.page.scss'],
})
export class StyleFolderPage implements OnInit {

  title: string; // 标题
  isChecked: any = 0; // 选中的 id
  styleContent = {}; // 用来接收 单数据 的容器
  styleName: string; // 二级 分类名
  // 静态例子
  public stylesList = [
    {
      name: '款号档案',
      children: [
        {
          name: '莱克斯顿',
          is_deleted: false,
          children: [
            { name: 'Style#LKSDLKNLSU2016023' },
            { name: 'Style#LKSDLKNLSU2016024' },
          ]
        },
        {
          name: 'Brussels',
          is_deleted: false,
          children: [
            { name: 'Style#BLKNLSU2016025' },
            { name: 'Style#BLKNLSU2016026' },
          ]
        },
        {
          name: 'SV',
          is_deleted: false,
          children: [
            { name: 'Style#SVPLKNLSU2016023' },
            { name: 'Style#SVPLKNLSU2016023' },
          ]
        },
        {
          name: '玛诗玛丽',
          is_deleted: false,
          children: [
            { name: 'Style#MSMLLKNLSU2016023' },
            { name: 'Style#MSMLLKNLSU2016023' },
          ]
        },
        {
          name: '太平鸟',
          is_deleted: false,
          children: [
            { name: 'Style#TPNLKNLSU2016023' },
            { name: 'Style#TPNLKNLSU2016023' },
          ]
        },
      ]
    },
  ]

  constructor(
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    // 1. 获得数据  后  解析 ==== 款号
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
            this.stylesList.push(
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
            );
            console.log('提交成功-Confirm Ok', name1);
            console.log(this.stylesList);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 去下级 */
  onSubordinate() {
    this.router.navigate(['secd-style']);
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

            //   删除
            this.stylesList.forEach(val => {

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

    this.stylesList.forEach(val => {
      this.styleContent = val;
      console.log('获得数据解析-1：', this.styleContent);
      this.title = val.name;
      if (this.styleContent) {
        this.styleContent['children'].forEach((val, idx) => {
          console.log('获得数据解析-2:', val);
          this.styleName = val.name;
          console.log('获得数据解析-idx:', idx);
          this.isChecked = idx;
        });
      }
    });
  }


  /** 打开模态弹框 */
  async presentModal(name1: string) {
    const modal = await this.modalController.create({
      component: StyleFolderModalPage,
      // 根据 id 传入参数
      componentProps: {

        name: name1,

      }
    });
    // return await modal.present();
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.stylesList.forEach(val => {

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
