import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DetailCommonModalPage } from '../detail-common-modal/detail-common-modal.page';

@Component({
  selector: 'app-secd-common',
  templateUrl: './secd-common.page.html',
  styleUrls: ['./secd-common.page.scss'],
})
export class SecdCommonPage implements OnInit {

  secComFirstTitle: string; // 第一级的 name
  secComSecNum: string; // 第二级的 no
  secComSecName: string; // 第二级的 name
  secComSecGroup: string; // 第二级的 group
  secComSecIsChecked: boolean; // 第二级的 isChecked
  secComSecIsdeleted: boolean; // 第二级的 is_deleted

  ischecked: any = 0; // 选中的 id

  public colord = {}; // 用来接收 单数据 的容器

  // 静态例子
  public secdColorList = [
    {
      name: '品牌档案',
      children: [
        // {
        //   NO:  '',
        //   name: '',
        //   group: '',
        //   isChecked: false,
        //   is_deleted: false,
        // },
        {
          NO: '001',
          name: '莱克斯顿',
          group: '品牌档案',
          isChecked: false,
          is_deleted: false,
        },
        {
          NO: '002',
          name: 'Brussels',
          group: '品牌档案',
          isChecked: false,
          is_deleted: false,
        },
      ]
    }

  ];


  constructor(
    public router: Router,
    public alertController: AlertController,
    private activateRoute: ActivatedRoute,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    // this.sec_com_first_title = this.activateRoute.snapshot.params['name2'];
    // this.sec_com_sec_no = this.activateRoute.snapshot.params['no3'];
    // this.sec_com_sec_name = this.activateRoute.snapshot.params['name3'];
    // this.sec_com_sec_group = this.activateRoute.snapshot.params['group3'];
    // this.sec_com_sec_isChecked = this.activateRoute.snapshot.params['isChecked3'];
    // this.sec_com_sec_is_deleted = this.activateRoute.snapshot.params['is_deleted3'];
    // console.log('初始化-title',this.sec_com_first_title);
    // console.log('初始化-name2',this.sec_com_sec_name);


    this.getData();

    // this.secd_color_list.forEach(val => {
    //   this.sec_com_first_title = val.name;
    //   val.children.forEach(vel=>{
    //     console.log('得到数据后解析',vel);
    //     vel.NO = this.activateRoute.snapshot.params['no3'];
    //     vel.name = this.activateRoute.snapshot.params['name3'];
    //     vel.group = this.activateRoute.snapshot.params['group3'];
    //     vel.isChecked = this.activateRoute.snapshot.params['isChecked3'];
    //     vel.is_deleted = this.activateRoute.snapshot.params['is_deleted3'];
    //   })
    // })

  }

  /** 去上级 */
  gotoSuperior() {
    this.router.navigate(['common-folder']);
  }

  /** alert 创建第二级 */
  async secdAlertPropat(no1, name1) {
    const alert = await this.alertController.create({
      header: '添加子项目',
      inputs: [
        {
          name: no1,
          type: 'text',
          placeholder: '编号'
        },
        {
          name: name1,
          type: 'text',
          placeholder: '项目名称'
        },
      ],
      buttons: [
        {
          text: '取消',
          role: '取消',
          cssClass: 'secondary',
          handler: () => {
            console.log('取消-Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: () => {
            this.secdColorList.push(
              {
                name: '品牌档案',
                children: [
                  {
                    NO: no1,
                    name: name1,
                    group: '品牌档案',
                    isChecked: false,
                    is_deleted: false,
                  },
                ]
              },
            );

            console.log('提交成功-Confirm Ok', name1);
            console.log('添加第二级', this.secdColorList);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 得到数据后解析 */
  getData() {
    this.secdColorList.forEach(val => {
      this.secComFirstTitle = val.name;
      // val.children.forEach(vel=>{
      //   console.log('得到数据后解析',vel);
      //   vel.NO = this.sec_com_sec_no;
      //   vel.name = this.sec_com_sec_name;
      //   vel.group = this.sec_com_sec_group;
      //   vel.isChecked = this.sec_com_sec_isChecked;
      //   vel.is_deleted = this.sec_com_sec_is_deleted;
      // })
    });


  }

  /** 被选中的 id */
  onChecked(i) {
    console.log('选中哪一个：', i);
    this.ischecked = i;
  }

  /** 删除 */
  async colorDelete() {

    const alert = await this.alertController.create({
      // header: '删除',
      subHeader: '删除',
      message: '还有下级,删除后无法恢复,确定删除？',
      buttons: [
        {
          text: '取消',
          role: '取消',
          cssClass: 'secondary',
          handler: () => {
            console.log('取消-Confirm Cancel');
          }
        }, {
          text: '确定',
          handler: () => {
            // 删除
            this.secdColorList.forEach(val => {

              val.children.forEach((ele, idx) => {
                console.log('删除-1：', this.ischecked, idx);
                if (this.ischecked == idx) {
                  console.log('删除-2：', ele.is_deleted);
                  ele.is_deleted = true;
                }
              });
            });
            console.log('提交成功-Confirm Ok');
            // console.log(this.dataSource.data);
          }
        }
      ]
    });

    await alert.present();


  }

  /** 通用-详情 */
  colorDetail(no1, name1, group1, isChecked1, isDeleted1) {
    this.router.navigate(['detail-common', no1, name1, group1, isChecked1, isDeleted1]);
  }

  /** 根据 id  获得对应的 数据 */
  getColorById(i) {
    for (const dcl of this.secdColorList) {
      for (const ddl of dcl.children) {
        if (this.ischecked == i) {
          this.colord = ddl;
          this.colord['isChecked'] = true;
          console.log('根据 id  获得对应的 数据', this.colord);
        }
      }

    }
  }

  /** 打开模态弹框 */
  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailCommonModalPage,
      // 根据 id 传入参数
      componentProps: {
        NO: this.colord['NO'],
        name: this.colord['name'],
        group: this.colord['group'],
        isChecked: this.colord['isChecked'],
        is_deleted: this.colord['is_deleted']
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.secdColorList.forEach((val, idx) => {
      if (this.ischecked == idx) {
        val.children.forEach(vel => {
          vel.NO = data.NO,
            vel.name = data.name,
            vel.group = data.group;
        });
      }


    });

  }


}
