import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { SecdmodalPage } from '../secdmodal/secdmodal.page';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;

  public departmentList = [
    {
      name: '部门档案',
      children: [
        {
          name: '销售部档案',
          is_deleted: false,
          children: [
            { name: '张三' },
            { name: '李四' },
          ]
        },
        {
          name: '测试部档案',
          is_deleted: false,
          children: [
            { name: '王五' },
            { name: '赵六' },
          ]
        },
        {
          name: '开发部档案',
          is_deleted: false,
          children: [
            { name: '放大' },
            { name: '个人' },
          ]
        }
      ]
    },
  ];

  // 选中的id
  public ischecked: any = 0;

  // 用来接收 单数据 的容器
  public departmen = {};

  // 部门名称
  departmentName: string;



  constructor(
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    // 获取路由传过来的 id
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log('ngOnInit:',this.activatedRoute.snapshot);

    // 2. 获得数据  后  解析 === 部门
    this.getData();



  }

  /** 选中哪一个： */
  onChecked(i) {
    console.log('选中哪一个：', i);
    this.ischecked = i;
  }

  /** Alert 创建 第一级 */
  async presentAlertPrompt(name1) {
    const alert = await this.alertController.create({
      header: '添加子项目',
      inputs: [
        {
          name: name1,
          type: 'text',
          placeholder: '部门名称'
        },
        // {
        // name: name2,
        // type: 'text',
        // id: 'name2-id',
        // value: 'hello',
        // placeholder: '人员名称'
        // },
        // 多行输入
        // {
        //   name: 'paragraph',
        //   id: 'paragraph',
        //   type: 'textarea',
        //   placeholder: '描述'
        // },
        // {
        //   name: 'name3',
        //   value: 'http://ionicframework.com',
        //   type: 'url',
        //   placeholder: 'Favorite site ever'
        // },
        // 输入日期  开始（最小）  结束（最大）
        // {
        //   name: name4,
        //   type: 'date',
        //   min: '2017-03-01',
        //   max: '2120-01-12'
        // },
        // 输入最大值  最小值
        // {
        //   name: 'name5',
        //   type: 'date'
        // },
        // {
        //   name: 'name6',
        //   type: 'number',
        //   min: -5,
        //   max: 10
        // },
        // {
        //   name: 'name7',
        //   type: 'number'
        // }
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
            this.departmentList.push(
              {
                name: '部门档案',
                children: [
                  {
                    name: name1,
                    is_deleted: false,
                    children: [
                      // { name: name2 },
                    ]
                  }
                ]
              },
            );
            console.log('提交成功-Confirm Ok', name1);
            console.log(this.departmentList);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 去下级 */
  onSubordinate() {
    this.router.navigate(['secdstaff']);
  }




  /** 删除 */
  async onDeleted() {
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

            this.departmentList.forEach(val => {

              val.children.forEach((ele, idx) => {
                console.log('modal关闭后，替换的值：', this.ischecked, idx);
                if (this.ischecked == idx) {
                  console.log('modal关闭后，替换的值：', ele.is_deleted);
                  ele.is_deleted = true;
                }
              });
            }

            );

            console.log('提交成功-Confirm Ok');
            // console.log(this.dataSource.data);
          }
        }
      ]
    });

    await alert.present();
  }

  /** 1. 获得数据  后  解析 ==== 部门 */
  getData() {

    this.departmentList.forEach(val => {
      this.departmen = val;
      console.log('获得数据解析-1：', this.departmen);
      // this.pUrl = val.url
      if (this.departmen) {
        this.departmen['children'].forEach((val, idx) => {
          console.log('获得数据解析-2:', val);
          this.departmentName = val.name;
          console.log('获得数据解析-idx:', idx);
          this.ischecked = idx;
        });
      }
    });
  }


  /** 打开模态弹框 */
  async presentModal(name1: string) {
    const modal = await this.modalController.create({
      component: SecdmodalPage,
      // 根据 id 传入参数
      componentProps: {

        name: name1,

      }
    });
    // return await modal.present();
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log('modal关闭时传回来的值：', data);

    this.departmentList.forEach(val => {

      val.children.forEach((ele, idx) => {
        console.log('modal关闭后，替换的值：', this.ischecked, idx);
        if (this.ischecked == idx) {
          console.log('modal关闭后，替换的值：', ele.name);
          ele.name = data.name;
        }
      });
    }

    );

  }





}
