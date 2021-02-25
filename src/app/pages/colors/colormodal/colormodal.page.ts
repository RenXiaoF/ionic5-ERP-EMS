import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colormodal',
  templateUrl: './colormodal.page.html',
  styleUrls: ['./colormodal.page.scss'],
})
export class ColormodalPage implements OnInit {

  public colors: string;

  @Input('NO') NO: string
  @Input('name') name: string;
  @Input('group') group: string;
  @Input() isChecked: boolean;
  @Input() isDeleted: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    /** 路由跳转 */
    this.colors = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /** 关闭模态弹框 */
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  /** 提交-确定 */
  onEnsure(no1, name1, group1) {
    this.NO = no1;
    this.name = name1;
    this.group = group1;
    console.log('提交-确定', no1, name1, group1);

    this.navParams.data.modal.dismiss({
      'NO': no1,
      'name': name1,
      'group': group1
    });

    this.dismiss();

  }

}
