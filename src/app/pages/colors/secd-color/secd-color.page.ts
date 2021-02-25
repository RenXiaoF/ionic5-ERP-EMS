import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ColormodalPage } from '../colormodal/colormodal.page';

@Component({
  selector: 'app-secd-color',
  templateUrl: './secd-color.page.html',
  styleUrls: ['./secd-color.page.scss'],
})
export class SecdColorPage implements OnInit {

  secColFirstTitle: string; // 第一级的 name
  // sec_com_sec_no: string; // 第二级的 no
  // sec_com_sec_name: string; // 第二级的 name
  // sec_com_sec_group: string; // 第二级的 group
  // sec_com_sec_isChecked: boolean; // 第二级的 isChecked
  // sec_com_sec_is_deleted: boolean; // 第二级的 is_deleted

  public colord = {}; // 用来接收 单数据 的容器
  isCheckedIndex: any = 0; // 选中的 id

  // 静态例子
  public secdColorList = [
    {
      name: '白色',
      children: [
        {
          NO: '001',
          name: '白色',
          group: '白色',
          isChecked: false,
          isDeleted: false,
        },
        {
          NO: '002',
          name: '本白',
          group: '白色',
          isChecked: false,
          isDeleted: false,
        },
      ]
    }
  ];

  constructor(
    public router: Router,
    public alertController: AlertController,
    public modalController: ModalController

  ) { }

  ngOnInit() {
    for (const dcl of this.secdColorList) {
      this.secColFirstTitle = dcl.name;
    }
  }


  /** 去上级 */
  gotoSuperior() {
    this.router.navigate(['color-folder']);
  }

  /** alert 创建第二级 */
  async secdAlertPropat(no1, name1) {
    const alert = await this.alertController.create({
      header: '添加子项目',
      inputs: [
        {
          name: no1,
          type: 'text',
          placeholder: '编号'
        },
        {
          name: name1,
          type: 'text',
          placeholder: '色号名称'
        }
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
            this.secdColorList.push(
              {
                name: '白色',
                children: [
                  {
                    NO: no1,
                    name: name1,
                    group: '白色',
                    isChecked: false,
                    isDeleted: false,
                  },
                ]
              },
            );

            console.log('提交成功-Confirm Ok', name1);
            console.log('添加第二级', this.secdColorList);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 得到数据后解析 */
  getData() {
    this.secdColorList.forEach(val => {
      this.secColFirstTitle = val.name;
    });
  }

  /** 被选中的 id */
  onChecked(i) {
    console.log('选中哪一个：', i);
    this.isCheckedIndex = i;
  }

  /** 删除 */
  colorDelete() {
    this.secdColorList.forEach(val => {

      val.children.forEach((ele, idx) => {
        console.log('删除-1：', this.isCheckedIndex, idx);
        if (this.isCheckedIndex == idx) {
          console.log('删除-2：', ele.isDeleted);
          ele.isDeleted = true;
        }
      });
    })
  }

  /** 颜色详情 */
  colorDetail(no1, name1, group1, isChecked1, isDeleted1) {
    this.router.navigate(['color', no1, name1, group1, isChecked1, isDeleted1]);
  }


  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.secdColorList) {
      this.secColFirstTitle = dcl.name;
      for (const ddl of dcl.children) {
        if (this.isCheckedIndex === i) {
          this.colord = ddl;
          this.colord['isChecked'] = true;
          console.log('根据 id  获得对应的 数据', this.colord);
        }
      }

    }
  }

  /** 打开模态弹框 */
  async presentModal() {
    const modal = await this.modalController.create({
      component: ColormodalPage,
      // 根据 id 传入参数
      componentProps: {
        NO: this.colord['NO'],
        name: this.colord['name'],
        group: this.colord['group'],
        isChecked: this.colord['isChecked'],
        is_deleted: this.colord['is_deleted']
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.secdColorList.forEach((val, idx) => {
      val.children.forEach(vel => {
        vel.NO = data.NO,
          vel.name = data.name,
          vel.group = data.group;
      });

    });

  }


}
