import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DetailSizeModalPage } from '../detail-size-modal/detail-size-modal.page';

@Component({
  selector: 'app-secd-size',
  templateUrl: './secd-size.page.html',
  styleUrls: ['./secd-size.page.scss'],
})
export class SecdSizePage implements OnInit {

  secComFirstTitle: string; // 第一级的 name
  secComSecNum: string; // 第二级的 no
  secComSecName: string; // 第二级的 name
  secComSecGroup: string; // 第二级的 group
  secComSecIsChecked: boolean; // 第二级的 isChecked
  secComSecIsdeleted: boolean; // 第二级的 is_deleted

  isChecked: any = 0; // 选中的 id

  public colord = {}; // 用来接收 单数据 的容器

  // 静态例子
  public secdSizeList = [

    {
      name: '保罗盖地',
      children: [
        {
          NO: '001',
          name: 'XS',
          group: '保罗盖地',
          isChecked: false,
          is_deleted: false,
        },
        {
          NO: '002',
          name: 'S',
          group: '保罗盖地',
          isChecked: false,
          is_deleted: false,
        },
        {
          NO: '003',
          name: 'M',
          group: '保罗盖地',
          isChecked: false,
          is_deleted: false,
        },
        {
          NO: '004',
          name: 'L',
          group: '保罗盖地',
          isChecked: false,
          is_deleted: false,
        },
        {
          NO: '005',
          name: 'XL',
          group: '保罗盖地',
          isChecked: false,
          is_deleted: false,
        },
        {
          NO: '006',
          name: 'XXL',
          group: '保罗盖地',
          isChecked: false,
          is_deleted: false,
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
    this.getData();
  }


  /** 去上级 */
  gotoSuperior() {
    this.router.navigate(['size-folder']);
  }

  /** alert 创建第二级 */
  async secdAlertPropat(no1, name1) {
    const alert = await this.alertController.create({
      header: '添加子项目',
      inputs: [
        {
          name: name1,
          type: 'text',
          placeholder: '项目名称'
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
            this.secdSizeList.push(
              {
                name: '保罗盖地',
                children: [
                  {
                    NO: no1,
                    name: name1,
                    group: '保罗盖地',
                    isChecked: false,
                    is_deleted: false,
                  },
                ]
              },
            )

            console.log('提交成功-Confirm Ok', name1);
            console.log('添加第二级', this.secdSizeList);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 得到数据后解析 */
  getData() {
    this.secdSizeList.forEach(val => {
      this.secComFirstTitle = val.name;
    });
  }

  /** 被选中的 id */
  onChecked(i) {
    console.log('选中哪一个：', i);
    this.isChecked = i;
  }

  /** 删除 */
  colorDelete() {
    this.secdSizeList.forEach(val => {

      val.children.forEach((ele, idx) => {
        console.log('删除-1：', this.isChecked, idx);
        if (this.isChecked == idx) {
          console.log('删除-2：', ele.is_deleted);
          ele.is_deleted = true;
        }
      });
    })
  }

  /** 款号详情 */
  styleDetail(no1, name1, group1, isChecked1, isDeleted1) {
    this.router.navigate(['detail-size', no1, name1, group1, isChecked1, isDeleted1]);
  }



  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.secdSizeList) {
      for (const ddl of dcl.children) {
        if (this.isChecked == i) {
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
      component: DetailSizeModalPage,
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

    this.secdSizeList.forEach((val, idx) => {
      val.children.forEach(vel => {
        vel.NO = data.NO,
          vel.name = data.name,
          vel.group = data.group;
      });

    });

  }


}
