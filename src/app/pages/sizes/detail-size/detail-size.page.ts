import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ActionSheetController, ModalController } from '@ionic/angular';
import { DetailSizeModalPage } from '../detail-size-modal/detail-size-modal.page';

@Component({
  selector: 'app-detail-size',
  templateUrl: './detail-size.page.html',
  styleUrls: ['./detail-size.page.scss'],
})
export class DetailSizePage implements OnInit {

   // 1. 路由跳转  时得到的值
   detail_commom_no: string; 
   detail_commom_title: string; 
   detail_commom_group: string; 
   detail_commom_isChecked: boolean; 
   detail_commom_is_deleted: boolean; 

  public is_checked: any = 0; // 选中的id

  public ds_content = {}; // 用来接收 单数据 的容器

  // 静态的例子
  public detail_size_list = [
    {
      NO: '',
      name: '',
      group: '',
      isChecked: false,
      is_deleted: false,
    },
    // {
    //   NO: '002',
    //   name: 'S',
    //   group: '保罗盖地',
    //   isChecked: false,
    //   is_deleted: false,
    // },
    // {
    //   NO: '003',
    //   name: 'M',
    //   group: '保罗盖地',
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
   this.detail_commom_no = this.activatedRoute.snapshot.paramMap.get('no1');
   this.detail_commom_title = this.activatedRoute.snapshot.paramMap.get('name1');
   this.detail_commom_group = this.activatedRoute.snapshot.paramMap.get('group1');
   // this.detail_commom_isChecked = this.activatedRoute.snapshot.paramMap.get('isChecked1');
   // this.detail_commom_is_deleted = this.activatedRoute.snapshot.paramMap.get('is_deleted1');
   console.log("初始化-路由过来的：",this.detail_commom_title);
   this.detail_size_list.forEach(val=>{
     val.NO = this.detail_commom_no;
     val.name = this.detail_commom_title;
     val.group = this.detail_commom_group;
     val.isChecked = false;
     val.is_deleted = false;
   })
  }

  /** 选中的数据 */
  onChecked(i) {
    console.log("选中的条目-id", i);
    this.is_checked = i;
    // ...this.colord;
    this.ds_content['isChecked'] = true;
  }

  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (let dcl of this.detail_size_list) {
      if (this.is_checked == i) {
        this.ds_content = dcl;
        this.ds_content['isChecked'] = true
        console.log("根据 id  获得对应的 数据", this.ds_content)
      }
    }
  }

  /** 打开模态弹框 */
  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailSizeModalPage,
      // 根据 id 传入参数
      componentProps: {
        NO: this.ds_content['NO'],
        name: this.ds_content['name'],
        group: this.ds_content['group'],
        isChecked: this.ds_content['isChecked'],
        isDeleted: this.ds_content['isDeleted']
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log("modal关闭时传回来的值：", data);

    this.detail_size_list.forEach((val, idx) => {
      val.NO = data.NO,
        val.name = data.name,
        val.group = data.group
    })

  }

  /** 路由跳转-->搜索 */
  onGotoSearch() {
    this.navCtrl.navigateForward(['/size-search']);
  }


}
