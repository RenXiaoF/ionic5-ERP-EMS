import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-size-folder-modal',
  templateUrl: './size-folder-modal.page.html',
  styleUrls: ['./size-folder-modal.page.scss'],
})
export class SizeFolderModalPage implements OnInit {

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
      dismissed: true
    });
  }

  /** 提交-确定 */
  onEnsure(name1) {
    this.name = name1;
    console.log('提交-确定', name1);

    this.navParams.data.modal.dismiss({
      name: name1,
    });

    this.dismiss();

  }

}
