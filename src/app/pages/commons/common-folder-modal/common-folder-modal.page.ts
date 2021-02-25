import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-common-folder-modal',
  templateUrl: './common-folder-modal.page.html',
  styleUrls: ['./common-folder-modal.page.scss'],
})
export class CommonFolderModalPage implements OnInit {

  @Input('name') name: string;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {

  }

  /** 关闭模态弹框 */
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  /** 提交-确定 */
  onEnsure(name1) {
    this.name = name1;
    console.log('提交-确定', name1);
    // modal关闭时传出去的值
    this.navParams.data.modal.dismiss({
      name: name1,
    });
    // 关闭弹框
    this.dismiss();

  }

}
