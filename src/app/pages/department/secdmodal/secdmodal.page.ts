import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secdmodal',
  templateUrl: './secdmodal.page.html',
  styleUrls: ['./secdmodal.page.scss'],
})
export class SecdmodalPage implements OnInit {

  public department_name: string;

  @Input('name') name: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public navParams: NavParams
  ) {
    console.log("modal关闭时传回来的值", this.navParams);
  }

  ngOnInit() {
    /** 路由跳转 */
    this.department_name = this.activatedRoute.snapshot.paramMap.get('id');
  }

  /** 关闭模态弹框 */
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  /** 提交-确定 */
  onEnsure( name1) {
   
    this.name = name1;
  
    console.log("提交-确定", name1);

    this.navParams.data.modal.dismiss({
      
      'name': name1,
     
    })

    this.dismiss();

  }

}
