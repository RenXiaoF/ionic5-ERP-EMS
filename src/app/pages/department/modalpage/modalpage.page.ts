import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {

  public staff: string;

  @Input('NO') NO: string;
  @Input('name') name: string;
  @Input('department') department: string;
  @Input() isChecked: boolean;
  @Input() isDeleted: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    console.log('modal关闭时传回来的值', this.navParams);
  }

  ngOnInit() {
    /** 路由跳转 */
    this.staff = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /** 关闭模态弹框 */
  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  /** 提交-确定 */
  onEnsure(no1, name1, department1) {
    this.NO = no1;
    this.name = name1;
    this.department = department1;
    console.log('提交-确定', no1, name1, department1);

    this.navParams.data.modal.dismiss({
      NO: no1,
      name: name1,
      department: department1
    });

    this.dismiss();

  }

}
