import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ActionSheetController, ModalController } from '@ionic/angular';
import { DetailCommonModalPage } from '../detail-common-modal/detail-common-modal.page';

@Component({
  selector: 'app-detail-common',
  templateUrl: './detail-common.page.html',
  styleUrls: ['./detail-common.page.scss'],
})
export class DetailCommonPage implements OnInit {

  // 1. 路由跳转  时得到的值
  detailCommomNum: string;
  detailCommomTitle: string;
  detailCommomGroup: string;
  detailCommomIsChecked: boolean;
  detailCommomIsDeleted: boolean;

  public ischecked: any = 0; // 选中的id

  public colord = {}; // 用来接收 单数据 的容器

  // 静态的例子
  public detailCommonList = [
    {
      NO: '',
      name: '',
      group: '',
      isChecked: false,
      isDeleted: false,
    },
    // {
    //   NO: '002',
    //   name: 'Brussels',
    //   group: '品牌档案',
    //   isChecked: false,
    //   is_deleted: false,
    // },
    // {
    //   NO: '003',
    //   name: '路易威登',
    //   group: '品牌档案',
    //   isChecked: false,
    //   is_deleted: false,
    // },
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    /** 2. 路由跳转 获得 的 值 */
    this.detailCommomNum = this.activatedRoute.snapshot.paramMap.get('no1');
    this.detailCommomTitle = this.activatedRoute.snapshot.paramMap.get('name1');
    this.detailCommomGroup = this.activatedRoute.snapshot.paramMap.get('group1');
    // this.detailCommomIsChecked = this.activatedRoute.snapshot.paramMap.get('isChecked1');
    // this.detailCommomIsDeleted = this.activatedRoute.snapshot.paramMap.get('is_deleted1');
    console.log('初始化-路由过来的：', this.detailCommomTitle);
    this.detailCommonList.forEach(val => {
      val.NO = this.detailCommomNum;
      val.name = this.detailCommomTitle;
      val.group = this.detailCommomGroup;
      val.isChecked = false;
      val.isDeleted = false;
    });
  }

  /** 选中的数据 */
  onChecked(i) {
    console.log('选中的条目-id', i);
    this.ischecked = i;
    // ...this.colord;
    this.colord['isChecked'] = true;
    console.log('选中的条目-id', this.colord['isChecked']);
  }

  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.detailCommonList) {
      if (this.ischecked == i) {
        this.colord = dcl;
        this.colord['isChecked'] = true;
        console.log('根据 id  获得对应的 数据', this.colord);
      }
    }
  }

  /** 打开模态弹框 */
  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailCommonModalPage,
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

    this.detailCommonList.forEach((val, idx) => {
      val.NO = data.NO,
        val.name = data.name,
        val.group = data.group;
    });

  }

  /** 路由跳转-->搜索 */
  onGotoSearch() {
    this.navCtrl.navigateForward(['/common-search']);
  }


}
