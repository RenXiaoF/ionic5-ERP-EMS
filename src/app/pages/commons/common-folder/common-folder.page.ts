import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CommonFolderModalPage } from '../common-folder-modal/common-folder-modal.page';

@Component({
  selector: 'app-common-folder',
  templateUrl: './common-folder.page.html',
  styleUrls: ['./common-folder.page.scss'],
})
export class CommonFolderPage implements OnInit {

  title: string; // 标题
  is_checked: any = 0; // 选中的 id
  common = {}; // 用来接收 单数据 的容器
  common_name: string; // 二级 分类名

  NO3: string;
  name3: string;
  group3: string;
  isChecked3: boolean;
  is_deleted3: boolean;

  public commons_list = [
    {
      name: '通用档案',
      children: [
        {
          name: '品牌档案',
          is_deleted: false,
          children: [
            {
              NO: '001',
              name: '莱克斯顿',
              group: '品牌档案',
              isChecked: false,
              is_deleted: false,
            },
            {
              NO: '002',
              name: 'Brussels',
              group: '品牌档案',
              isChecked: false,
              is_deleted: false,
            },
          ]
        },
        {
          name: '年份档案',
          is_deleted: false,
          children: [
            {
              is_deleted: false,
              name: '2019'
            },
            {
              is_deleted: false,
              name: '2020'
            },
          ]
        },
        {
          name: '季节档案',
          is_deleted: false,
          children: [
            {
              is_deleted: false,
              name: '春季'
            },
            {
              is_deleted: false,
              name: '夏季'
            },
            {
              is_deleted: false,
              name: '秋季'
            },
            {
              is_deleted: false,
              name: '冬季'
            },
          ]
        },
        {
          name: '款式跟单类别',
          is_deleted: false,
          children: [
            {
              is_deleted: false,
              name: '001s'
            },
            {
              is_deleted: false,
              name: '002m'
            },
          ]
        },
        {
          name: '客户类型币种档案',
          is_deleted: false,
          children: [
            {
              is_deleted: false,
              name: '$'
            },
            {
              is_deleted: false,
              name: '￥'
            },
          ]
        },
      ]
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    // 1. 获得数据  后  解析 ==== 通用
    this.getData();

  }

  /** 被选中的 id */
  onChecked(i) {
    console.log('选中哪一个：', i);
    this.is_checked = i;
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
            this.commons_list.push(
              {
                name: '通用档案',
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
            console.log(this.commons_list);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 去下级 */
  onSubordinate() {
    // onSubordinate(name1, no3, name3, group3, isChecked3, is_deleted3) {
    // this.common['children'].forEach((val, idx) => {
    //   console.log('去下级', this.is_checked, idx)
    //   if (this.is_checked == idx) {
    //     val.children.forEach(vel => {
    //       console.log('去下级', vel);
    //       this.router.navigate(['secd-common', val.name, vel.name]);

    //     })
    //   }
    // })

    // this.commons_list.forEach(val => {
    //   val.children.forEach((vel, idx) => {
    //     if (this.is_checked == idx) {
    //       vel.children.forEach((vcl, icx) => {

    //         this.router.navigate(
    //           [
    //             'secd-common', vel.name,
    //             vcl.NO, vcl.name, vcl.group, vcl.isChecked, vcl.is_deleted,
    //           ]
    //         )
    //       })
    //     }
    //   })
    // })

    this.router.navigate(['secd-common']);

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
            this.commons_list.forEach(val => {

              val.children.forEach((ele, idx) => {
                console.log('删除-1：', this.is_checked, idx);
                if (this.is_checked == idx) {
                  console.log('删除-2：', ele.is_deleted);
                  ele.is_deleted = true;
                }
              });
            })
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

    this.commons_list.forEach(val => {
      this.common = val;
      console.log('获得数据解析-1：', this.common);
      this.title = val.name;
      if (this.common) {
        val.children.forEach((vel, idx) => {
          console.log('获得数据解析-2:', vel);
          this.common_name = vel.name;
          console.log('获得数据解析-idx:', idx);
          this.is_checked = idx;
          vel.children.forEach((vcl, icx) => {
            this.NO3 = vcl.NO;
            this.name3 = vcl.name;
            this.group3 = vcl.group;
            this.isChecked3 = vcl.isChecked;
            this.is_deleted3 = vcl.is_deleted;
          });
        });
      }
    });
  }


  /** 打开模态弹框 */
  async presentModal(name1: string) {
    const modal = await this.modalController.create({
      component: CommonFolderModalPage,
      // 根据 id 传入参数
      componentProps: {

        name: name1,

      }
    });
    // 等待modal 打开
    await modal.present();

    // modal关闭时传回来的值
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);
    // 循环替换数据
    this.commons_list.forEach(val => {

      val.children.forEach((ele, idx) => {
        console.log('modal关闭后，替换的值：', this.is_checked, idx);
        if (this.is_checked == idx) {
          console.log('modal关闭后，替换的值：', ele.name);
          ele.name = data.name;
        }
      });
    });

  }

}
