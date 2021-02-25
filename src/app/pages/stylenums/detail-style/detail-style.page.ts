import { Component, OnInit } from '@angular/core';
import { DetailStyleModalPage } from '../detail-style-modal/detail-style-modal.page';
import { ActivatedRoute } from '@angular/router';
import { NavController, ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-style',
  templateUrl: './detail-style.page.html',
  styleUrls: ['./detail-style.page.scss'],
})
export class DetailStylePage implements OnInit {

  // 1. 路由跳转  时得到的值
  detailCommomNum: string;
  detailCommomTitle: string;
  detailCommomGroup: string;
  detailCommomIsChecked: boolean;
  detailCommomIsdeleted: boolean;

  public isChecked: any = 0; // 选中的id

  public dsContent = {}; // 用来接收 单数据 的容器

  // 静态的例子
  public detailStyleList = [
    {
      NO: '',
      name: '',
      group: '',
      isChecked: false,
      is_deleted: false,
    },
    // {
    //   NO: '002',
    //   name: 'Style#LKSDLKNLDSU2016024',
    //   group: '莱克斯顿',
    //   isChecked: false,
    //   is_deleted: false,
    // },
    // {
    //   NO: '003',
    //   name: 'Style#LKSDLKNLDSU2016025',
    //   group: '莱克斯顿',
    //   isChecked: false,
    //   is_deleted: false,
    // },
  ];

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
    // this.detailCommomIsdeleted = this.activatedRoute.snapshot.paramMap.get('is_deleted1');
    console.log('初始化-路由过来的：', this.detailCommomTitle);
    this.detailStyleList.forEach(val => {
      val.NO = this.detailCommomNum;
      val.name = this.detailCommomTitle;
      val.group = this.detailCommomGroup;
      val.isChecked = false;
      val.is_deleted = false;
    });
  }


  /** 选中的数据 */
  onChecked(i) {
    console.log('选中的条目-id', i);
    this.isChecked = i;
    // ...this.colord;
    this.dsContent['isChecked'] = true;
  }

  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.detailStyleList) {
      if (this.isChecked == i) {
        this.dsContent = dcl;
        this.dsContent['isChecked'] = true;
        console.log('根据 id  获得对应的 数据', this.dsContent);
      }
    }
  }

  /** 打开模态弹框 */
  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailStyleModalPage,
      // 根据 id 传入参数
      componentProps: {
        NO: this.dsContent['NO'],
        name: this.dsContent['name'],
        group: this.dsContent['group'],
        isChecked: this.dsContent['isChecked'],
        isDeleted: this.dsContent['isDeleted']
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.detailStyleList.forEach((val, idx) => {
      val.NO = data.NO,
        val.name = data.name,
        val.group = data.group;
    });

  }

  /** 路由跳转-->搜索 */
  onGotoSearch() {
    this.navCtrl.navigateForward(['/stylenum-search']);
  }

}
