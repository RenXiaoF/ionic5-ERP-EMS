import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailSizeModalPage } from '../detail-size-modal/detail-size-modal.page';

@Component({
  selector: 'app-size-search',
  templateUrl: './size-search.page.html',
  styleUrls: ['./size-search.page.scss'],
})
export class SizeSearchPage implements OnInit {

  // 静态的例子
  public colorList = [
    {
      NO: '001',
      name: 'XS',
      group: '保罗盖地',
      isChecked: false,
      isDeleted: false,
    },
    {
      NO: '002',
      name: 'S',
      group: '保罗盖地',
      isChecked: false,
      isDeleted: false,
    },
    {
      NO: '003',
      name: 'M',
      group: '保罗盖地',
      isChecked: false,
      isDeleted: false,
    },
    {
      NO: '004',
      name: 'L',
      group: '保罗盖地',
      isChecked: false,
      isDeleted: false,
    },
    {
      NO: '005',
      name: 'XL',
      group: '保罗盖地',
      isChecked: false,
      isDeleted: false,
    },
    {
      NO: '006',
      name: 'XXL',
      group: '保罗盖地',
      isChecked: false,
      isDeleted: false,
    },
  ]

  // 选中的id
  public isChecked: any = 0;

  // 用来接收 单数据 的容器
  public colord = {};

  // 对象转换-----》数组
  arrayList = [];

  // =================search==============
  searchQuery = '';
  items = [];

  constructor(
    public modalController: ModalController
  ) {
    this.searchQuery = '';
    this.initializeItems();
  }

  ngOnInit() {

  }

  /** 选中的数据 */
  onChecked(i) {
    console.log('选中的条目-id', i);
    this.isChecked = i;
  }

  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.colorList) {
      if (this.isChecked === i) {
        this.colord = dcl;
        this.colord['isChecked'] = true;
        console.log('根据 id  获得对应的 数据', this.colord);
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
        isDeleted: this.colord['isDeleted']
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.colorList.forEach((val, idx) => {
      val.NO = data.NO,
        val.name = data.name,
        val.group = data.group;
    });
  }

  // =================search==============
  initializeItems() {
    this.items = this.colorList;
  }

  getItems(e) {
    // 给作用域 items 一个默认值。
    this.initializeItems();
    // 获取文本框里的 value
    const val = e.target.value;
    // 否则 过滤一下 this.items
    if (val && val.trim() !== '') {
      this.items = this.items.filter(
        (item) => {
          return item.name.toString().includes(val.toString());
        }
      );
    }
  }

}
