import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';




@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {

  // 1. 路由跳转  时得到的值
  detailCommomNum: string;
  detailCommomTitle: string;
  detailCommomGroup: string;
  detailCommomIsChecked: boolean;
  detailCommomIsdeleted: boolean;


  // 选中的id
  public isChecked: any = 0;
  // 用来接收 单数据 的容器
  public colord = {};
  // 静态的例子
  public staffList = [
    {
      NO: '',
      name: '',
      department: '',
      isChecked: false,
      is_deleted: false,
    },
    // {
    //   NO: '001',
    //   name: '张三',
    //   department: '销售部',
    //   isChecked: false,
    //   isDeleted: false,
    // },
  ]



  constructor(
    private activatedRoute: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    /** 2. 路由跳转 获得 的 值 */
    this.detailCommomNum = this.activatedRoute.snapshot.paramMap.get('no1');
    this.detailCommomTitle = this.activatedRoute.snapshot.paramMap.get('name1');
    this.detailCommomGroup = this.activatedRoute.snapshot.paramMap.get('group1');
    // this.detailCommomIsChecked = this.activatedRoute.snapshot.paramMap.get('isChecked1');
    // this.detailCommomIsdeleted = this.activatedRoute.snapshot.paramMap.get('is_deleted1');
    console.log('初始化-路由过来的：', this.detailCommomTitle);
    this.staffList.forEach(val => {
      val.NO = this.detailCommomNum;
      val.name = this.detailCommomTitle;
      val.department = this.detailCommomGroup;
      val.isChecked = false;
      val.is_deleted = false;
    });
  }



  /** 选中的数据 */
  onChecked(i) {
    console.log('选中的条目-id', i);
    this.isChecked = i;
    // ...this.colord;
    this.colord['isChecked'] = true;
  }

  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const sfl of this.staffList) {
      if (this.isChecked == i) {
        this.colord = sfl;
        this.colord['isChecked'] = true;
        console.log('根据 id  获得对应的 数据', this.colord);
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
        isDeleted: this.colord['isDeleted']
      }
    });
    // return await modal.present();
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.staffList.forEach(val => {
      val.NO = data.NO,
        val.name = data.name,
        val.department = data.department;
    });

  }


  /** 路由跳转-->搜索 */
  onGotoSearch() {
    this.navCtrl.navigateForward(['/department-search']);
  }



}
