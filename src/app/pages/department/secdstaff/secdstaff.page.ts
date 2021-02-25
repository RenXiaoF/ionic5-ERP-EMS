import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';

@Component({
  selector: 'app-secdstaff',
  templateUrl: './secdstaff.page.html',
  styleUrls: ['./secdstaff.page.scss'],
})
export class SecdstaffPage implements OnInit {

  public title: string; // 第一级的name
  public names = [];

  isChecked: any = 0; // 选中的 id
  public colord = {}; // 用来接收 单数据 的容器

  // 静态例子
  public secdSubordinateList = [
    {
      name: '销售部档案',
      children: [
        {
          NO: '001',
          name: '张三',
          department: '销售部档案',
          isChecked: false,
          is_deleted: false,
        },
        {
          NO: '002',
          name: '李四',
          department: '销售部档案',
          isChecked: false,
          is_deleted: false,
        },
      ]
    }
  ]

  constructor(
    public router: Router,
    private navCtrl: NavController,
    public alertController: AlertController,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.getData();
  }

  /** 去上级 */
  gotoSuperior() {
    // this.navCtrl.back();
    this.router.navigate(['folder']);
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
          placeholder: '人员名称'
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
            this.secdSubordinateList.push(
              {
                name: '销售部档案',
                children: [
                  {
                    NO: no1,
                    name: name1,
                    department: '销售部档案',
                    isChecked: false,
                    is_deleted: false,
                  },
                ]
              },
            );

            console.log('提交成功-Confirm Ok', name1);
            console.log('添加第二级', this.secdSubordinateList);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 得到数据后解析 */
  getData() {
    this.secdSubordinateList.forEach(val => {
      this.title = val.name,
        this.names = val.children;
    });
  }

  /** 被选中的 id */
  onChecked(i) {
    console.log('选中哪一个：', i);
    this.isChecked = i;
  }

  /** 删除 */
  colorDelete() {
    this.secdSubordinateList.forEach(val => {

      val.children.forEach((ele, idx) => {
        console.log('删除-1：', this.isChecked, idx);
        if (this.isChecked == idx) {
          console.log('删除-2：', ele.is_deleted);
          ele.is_deleted = true;
        }
      });
    });
  }

  /** 人员-详情 */
  peopleDetail(no1, name1, group1, isChecked1, isdeleted1) {
    this.router.navigate(['staff', no1, name1, group1, isChecked1, isdeleted1]);
  }



  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.secdSubordinateList) {
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
      component: ModalpagePage,
      // 根据 id 传入参数
      componentProps: {
        NO: this.colord['NO'],
        name: this.colord['name'],
        department: this.colord['department'],
        isChecked: this.colord['isChecked'],
        is_deleted: this.colord['is_deleted']
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.secdSubordinateList.forEach((val, idx) => {
      val.children.forEach(vel => {
        vel.NO = data.NO,
          vel.name = data.name,
          vel.department = data.department;
      });

    });

  }



}
