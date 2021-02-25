import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { ColormodalPage } from '../colormodal/colormodal.page';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {

  // 1. 路由跳转  时得到的值
  detail_commom_no: string;
  detail_commom_title: string;
  detail_commom_group: string;
  detail_commom_isChecked: boolean;
  detail_commom_is_deleted: boolean;

  // 选中的id
  public is_checked: any = 0;
  // 用来接收 单数据 的容器
  public colord = {};

  // 静态的例子
  public color_list = [
    {
      NO: '',
      name: '',
      group: '',
      isChecked: false,
      is_deleted: false,
    },
    // {
    //   NO: '002',
    //   name: '荧光白',
    //   group: '白色',
    //   isChecked: false,
    //   isDeleted: false,
    // },
    // {
    //   NO: '003',
    //   name: '奶白',
    //   group: '白色',
    //   isChecked: false,
    //   isDeleted: false,
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
  this.detail_commom_no = this.activatedRoute.snapshot.paramMap.get('no1');
  this.detail_commom_title = this.activatedRoute.snapshot.paramMap.get('name1');
  this.detail_commom_group = this.activatedRoute.snapshot.paramMap.get('group1');
  // this.detail_commom_isChecked = this.activatedRoute.snapshot.paramMap.get('isChecked1');
  // this.detail_commom_is_deleted = this.activatedRoute.snapshot.paramMap.get('is_deleted1');
  console.log('初始化-路由过来的：',this.detail_commom_title);
  this.color_list.forEach(val=>{
    val.NO = this.detail_commom_no;
    val.name = this.detail_commom_title;
    val.group = this.detail_commom_group;
    val.isChecked = false;
    val.is_deleted = false;
  })


  }

  /** 选中的数据 */
  onChecked(i) {
    console.log('选中的条目-id', i);
    this.is_checked = i;
    // ...this.colord;
    this.colord['isChecked'] = true;
  }

  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.color_list) {
      if (this.is_checked === i) {
        this.colord = dcl;
        this.colord['isChecked'] = true;
        console.log('根据 id  获得对应的 数据', this.colord);
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
        isDeleted: this.colord['isDeleted']
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.color_list.forEach((val, idx) => {
      val.NO = data.NO,
      val.name = data.name,
      val.group = data.group;
    });

  }

  /** 路由跳转-->搜索 */
  onGotoSearch() {
    this.navCtrl.navigateForward(['/color-search']);
  }

}
