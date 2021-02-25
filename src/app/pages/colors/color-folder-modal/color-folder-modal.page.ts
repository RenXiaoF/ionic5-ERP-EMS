import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-color-folder-modal',
  templateUrl: './color-folder-modal.page.html',
  styleUrls: ['./color-folder-modal.page.scss'],
})
export class ColorFolderModalPage implements OnInit {

  @Input('name') name: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    console.log('modal关闭时传回来的值', this.navParams);
  }

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

    this.navParams.data.modal.dismiss({
      'name': name1,
    });

    this.dismiss();

  }

}
