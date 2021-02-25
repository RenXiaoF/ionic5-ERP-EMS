import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-test-datetime',
  templateUrl: './test-datetime.page.html',
  styleUrls: ['./test-datetime.page.scss'],
})
export class TestDatetimePage implements OnInit {

  testList = [
    {
      NO: '001',
      name1: '第一',
      inputime: '2020/01/02'
    },
    {
      NO: '002',
      name1: '第二',
      inputime: '2020/01/15'
    },
    {
      NO: '003',
      name1: '第三',
      inputime: '2020/02/01'
    },
    {
      NO: '004',
      name1: '第四',
      inputime: '2020/03/30'
    }

  ];

  public startDate: any = {}; // 开始如期
  public endDate: any = {}; // 结束如期

  // =========================search====================
  searchQuery: string;
  items = [];

  constructor(
    public alertController: AlertController,
  ) {
    // 原来方法：this.newLeave.dateStart=new Date().toISOString();会误差8个小时，以下方法是个简单处理技巧，仅限中国地区使用
    /** 开始如期 */
    this.startDate.dateStart = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString(); // 计划请假从
    this.startDate.dateEnd = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString(); // 计划请假至
    this.startDate.sqsj = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString(); // 申请时间
    /** 结束如期 */
    this.endDate.dateStart = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString(); // 计划请假从
    this.endDate.dateEnd = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString(); // 计划请假至
    this.endDate.sqsj = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString(); // 申请时间


  }

  ngOnInit() {

  }

  /** 结束时间不能小于开始时间！！ */
  async onAlert() {
    if (this.endDate.sqsj < this.startDate.sqsj) {
      const alert = await this.alertController.create({
        // header: '删除',
        subHeader: '警告',
        message: '结束时间不能小于开始时间！！',
        buttons: [
          {
            text: '确定',
            handler: () => {
              console.log('提交成功-Confirm Ok');
            }
          }
        ]
      });

      await alert.present();
    }
  }

  /** 按时间段搜索 */

  initializeItems() {
    this.items = this.testList;
  }

  onSpaceTimeSearch(startt, endt) {
    // 给作用域 items 一个默认值。
    this.initializeItems();
    // 获取文本框里的 value
    const val = startt.sqsj;
    const vel = endt.sqsj;
    console.log('选定的时间', val, vel);
    // 否则 过滤一下 this.items
    if (val && val.trim() !== '' && vel && vel.trim() !== '') {
      this.items = this.items.filter(
        (item) => {
          return item.inputime.toString().includes(val.toString());
          // return endDate.sqsj.toString() >= item.inputime.toString() >= startDate.sqsj.toString();
        }
      );
    }
  }

}
